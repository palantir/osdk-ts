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
import type { LinkType, ObjectType, OntologyDefinition } from "@osdk/maker";
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

import type { BlockDataAddOn } from "../cli/marketplaceSerialization/BlockGeneratorResult.js";
import { convertOntologyDefinition } from "../conversion/toMarketplace/convertOntologyDefinition.js";
import {
  getImportedShapes,
  type ImportedParentIdentifiers,
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
  importedTypes: OntologyDefinition;
  shapes: BlockShapes;
  blockDataAddOn: BlockDataAddOn;
  importedInputPresets: Map<ReadableId, InputPreset>;
  backingDatasourceApiNames: string[];
  backingDatasourceLinkApiNames: string[];
  backingMediaSetNames: string[];
}

export interface FunctionsIr {
  discoveredFunctions: Array<IDiscoveredFunction>;
}

export interface ExternalImportedOntologyMetadata extends OntologyFullMetadata {
  actionTypeVersionsByRid?: Readonly<Record<string, string>>;
  objectTypeIdsByRid?: Readonly<Record<string, string>>;
}

type GatewaySharedPropertyType =
  ExternalImportedOntologyMetadata["sharedPropertyTypes"][string];

function getImportedParentIdentifiers(
  metadata: ExternalImportedOntologyMetadata,
): ImportedParentIdentifiers {
  const objectTypeIdsByRid = metadata.objectTypeIdsByRid ?? {};
  const objectTypes = Object.fromEntries(
    Object.values(metadata.objectTypes).map(({ objectType }) => {
      const id = objectTypeIdsByRid[objectType.rid];
      if (id === undefined) {
        throw new Error(
          `No object type ID was imported for RID ${objectType.rid}; rerun \`foundry import ontology\` to refresh the import metadata`,
        );
      }
      return [objectType.apiName, { id, rid: objectType.rid }];
    }),
  );

  const actionTypeVersionsByRid = metadata.actionTypeVersionsByRid ?? {};
  const actionTypes = Object.fromEntries(
    Object.values(metadata.actionTypes).map((actionType) => {
      const version = actionTypeVersionsByRid[actionType.rid];
      if (version === undefined) {
        throw new Error(
          `No action type version was imported for RID ${actionType.rid}; rerun \`foundry import ontology\` to refresh the import metadata`,
        );
      }
      return [actionType.apiName, { rid: actionType.rid, version }];
    }),
  );

  const interfaceTypes = Object.fromEntries(
    Object.values(metadata.interfaceTypes).map((interfaceType) => [
      interfaceType.apiName,
      { rid: interfaceType.rid },
    ]),
  );

  const sharedPropertyTypes: Record<
    string,
    { rid: string; structFieldRids: Record<string, string> }
  > = {};
  const addSharedPropertyType = (
    sharedPropertyType: GatewaySharedPropertyType,
  ) => {
    sharedPropertyTypes[sharedPropertyType.apiName] = {
      rid: sharedPropertyType.rid,
      structFieldRids:
        sharedPropertyType.dataType.type === "struct"
          ? Object.fromEntries(
              sharedPropertyType.dataType.structFieldTypes.map((field) => [
                field.apiName,
                field.rid,
              ]),
            )
          : {},
    };
  };
  Object.values(metadata.sharedPropertyTypes).forEach(addSharedPropertyType);
  for (const interfaceType of Object.values(metadata.interfaceTypes)) {
    Object.values(interfaceType.properties).forEach(addSharedPropertyType);
    Object.values(interfaceType.propertiesV2)
      .filter((property) => property.type === "interfaceSharedPropertyType")
      .forEach(addSharedPropertyType);
  }

  return {
    ontologyRid: metadata.ontology.rid,
    objectTypes,
    actionTypes,
    interfaceTypes,
    sharedPropertyTypes,
  };
}

export async function defineOntologyV2(
  ns: string,
  body: () => void | Promise<void>,
  outputDir?: string,
  dependencyFile?: string,
  functionsIrFile?: string,
  randomnessKey?: string,
  importedLinkTypeIdsByApiName?: LinkTypeIdsByApiName,
  externalImportedMetadata?: ExternalImportedOntologyMetadata,
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

  const importedParentIdentifiers = externalImportedMetadata
    ? getImportedParentIdentifiers(externalImportedMetadata)
    : undefined;
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
  const importedTypes = getImportedTypes();

  let functionsIr: FunctionsIr | undefined;
  if (functionsIrFile) {
    functionsIr = JSON.parse(fs.readFileSync(functionsIrFile, "utf-8"));
  }

  const ridGenerator = new OntologyRidGeneratorImpl(
    importedTypes,
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
    importedParentIdentifiers,
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

  const readableIds = new Set([
    ...shapes.inputShapes.keys(),
    ...shapes.outputShapes.keys(),
  ]);
  const blockDataAddOn: BlockDataAddOn = {
    idToBlockShapeId: Object.fromEntries(
      Array.from(readableIds, (readableId) => [
        readableId,
        ridGenerator.toBlockInternalId(readableId),
      ]),
    ),
    idToInputGroupId: {},
    outputToLocationInput: {},
  };

  return {
    ontologyIr: ontDef,
    importedTypes,
    shapes,
    blockDataAddOn,
    importedInputPresets: importedShapes.inputPresets,
    backingDatasourceApiNames,
    backingDatasourceLinkApiNames,
    backingMediaSetNames,
  };
}
