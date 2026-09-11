/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as fs from "fs";

import type { OntologyIrV2 } from "@osdk/client.unstable";
import type { InputPreset } from "@osdk/client.unstable/api";
import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import type { IDiscoveredFunction } from "@osdk/generator-converters.ontologyir";
import type { LinkType, ObjectType } from "@osdk/maker";
import {
  getImportedTypes,
  getOntologyDefinition,
  importOntologyEntity,
  initializeOntologyState,
  OntologyEntityTypeEnum,
  writeDependencyFile,
  writeStaticObjects,
} from "@osdk/maker";
import { convertOntologyFullMetadata } from "@osdk/maker-import";

import { convertOntologyDefinition } from "../conversion/toMarketplace/convertOntologyDefinition.js";
import {
  getImportedShapes,
  type LinkTypeIdsByApiName,
} from "../conversion/toMarketplace/shapeExtractors/ImportedShapeExtractor.js";
import { getShapes } from "../conversion/toMarketplace/shapeExtractors/IrShapeExtractor.js";
import type { BlockShapes, ReadableId } from "../util/generateRid.js";
import {
  OntologyRidGeneratorImpl,
  ReadableIdGenerator,
} from "../util/generateRid.js";

export interface OntologyV2Result {
  ontologyIr: OntologyIrV2;
  shapes: BlockShapes;
  importedInputPresets: Map<ReadableId, InputPreset>;
  backingDatasourceApiNames: string[];
  backingDatasourceLinkApiNames: string[];
  backingMediaSetNames: string[];
}

export interface FunctionsIr {
  discoveredFunctions: Array<IDiscoveredFunction>;
}

export async function defineOntologyV2(
  ns: string,
  body: () => void | Promise<void>,
  outputDir?: string,
  dependencyFile?: string,
  functionsIrFile?: string,
  randomnessKey?: string,
  importedLinkTypeIdsByApiName?: LinkTypeIdsByApiName,
  externalImportedMetadata?: OntologyFullMetadata,
): Promise<OntologyV2Result> {
  initializeOntologyState(ns);

  try {
    await body();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(
      "Unexpected error while processing the body of the ontology",
      e,
    );
    throw e;
  }

  if (externalImportedMetadata) {
    const importedOntology = convertOntologyFullMetadata(
      externalImportedMetadata,
    );
    for (const entityType of [
      OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
      OntologyEntityTypeEnum.INTERFACE_TYPE,
      OntologyEntityTypeEnum.OBJECT_TYPE,
      OntologyEntityTypeEnum.ACTION_TYPE,
    ] as const) {
      for (const entity of Object.values(importedOntology[entityType])) {
        importOntologyEntity(entity);
      }
    }
  }

  const ontologyDefinition = getOntologyDefinition();

  let functionsIr: FunctionsIr | undefined;
  if (functionsIrFile) {
    functionsIr = JSON.parse(fs.readFileSync(functionsIrFile, "utf-8"));
  }

  const ridGenerator = new OntologyRidGeneratorImpl(
    getImportedTypes(),
    randomnessKey,
  );
  const ontDef = convertOntologyDefinition(
    ontologyDefinition,
    ridGenerator,
    functionsIr,
    randomnessKey,
  );

  const shapes = await getShapes(
    ontDef.ontology,
    ridGenerator,
    functionsIr,
    randomnessKey,
  );

  // Generate input shapes for imported entities and merge into main shapes
  const importedShapes = getImportedShapes(
    ontDef.importedOntology,
    ridGenerator,
    importedLinkTypeIdsByApiName,
  );
  for (const [key, value] of importedShapes.inputShapes) {
    shapes.inputShapes.set(key, value);
  }
  for (const [key, value] of importedShapes.inputShapeMetadata) {
    shapes.inputShapeMetadata.set(key, value);
  }

  const backingDatasourceApiNames = Object.entries(
    ontologyDefinition[OntologyEntityTypeEnum.OBJECT_TYPE],
  )
    .filter(
      ([_, obj]) => (obj as ObjectType).includeEmptyBackingDatasource === true,
    )
    .map(([apiName]) => apiName);

  const backingDatasourceLinkApiNames = Object.entries(
    ontologyDefinition[OntologyEntityTypeEnum.LINK_TYPE],
  )
    .filter(([_, link]) => {
      const lt = link as LinkType;
      return (
        "many" in lt &&
        !("intermediaryObjectType" in lt) &&
        (lt as LinkType & { includeEmptyBackingDatasource?: boolean })
          .includeEmptyBackingDatasource === true
      );
    })
    .map(([apiName]) => apiName);

  const backingMediaSetNames = Object.values(
    ontologyDefinition[OntologyEntityTypeEnum.OBJECT_TYPE],
  ).flatMap((ontologyEntity) => {
    const objectType = ontologyEntity as ObjectType;
    return (objectType.properties ?? [])
      .filter(
        ({ includeEmptyBackingMediaSet }) =>
          includeEmptyBackingMediaSet === true,
      )
      .map(({ apiName }) => `${objectType.apiName}.${apiName}`);
  });

  for (const mediaSetName of backingMediaSetNames) {
    shapes.inputShapeMetadata.set(
      ReadableIdGenerator.getForMediaSetView(mediaSetName),
      {
        isOptional: false,
        isAccessedInReconcile: true,
        reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
      },
    );
  }

  if (outputDir) {
    writeStaticObjects(outputDir);
  }
  if (dependencyFile) {
    writeDependencyFile(dependencyFile);
  }

  return {
    ontologyIr: ontDef,
    shapes,
    importedInputPresets: importedShapes.inputPresets,
    backingDatasourceApiNames,
    backingDatasourceLinkApiNames,
    backingMediaSetNames,
  };
}
