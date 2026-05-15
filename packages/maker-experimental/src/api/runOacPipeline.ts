/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { getOntologyDefinition, OntologyEntityTypeEnum } from "@osdk/maker";
import * as fs from "fs";
import { convertOntologyDefinition } from "../conversion/toMarketplace/convertOntologyDefinition.js";
import { getImportedShapes } from "../conversion/toMarketplace/shapeExtractors/ImportedShapeExtractor.js";
import { getShapes } from "../conversion/toMarketplace/shapeExtractors/IrShapeExtractor.js";
import { OntologyRidGeneratorImpl } from "../util/generateRid.js";
import type { FunctionsIr, OntologyV2Result } from "./defineOntologyV2.js";

function readFunctionsIr(path: string): FunctionsIr {
  let raw: string;
  try {
    raw = fs.readFileSync(path, "utf-8");
  } catch (err) {
    throw new Error(
      `Failed to read functions IR file at "${path}": ${
        err instanceof Error ? err.message : String(err)
      }`,
    );
  }
  try {
    return JSON.parse(raw);
  } catch (err) {
    throw new Error(
      `Failed to parse functions IR file at "${path}" as JSON: ${
        err instanceof Error ? err.message : String(err)
      }`,
    );
  }
}

/**
 * Runs the OAC conversion pipeline against the currently registered maker
 * ontology state. Assumes `initializeOntologyState(ns)` has already been
 * called and the user's body has populated state via `defineObject` /
 * `defineLink` / `defineAction` (or their V2 wrappers).
 */
export async function runOacPipeline(
  opts: { functionsIrFile?: string; randomnessKey?: string } = {},
): Promise<OntologyV2Result> {
  const { functionsIrFile, randomnessKey } = opts;

  const ontologyDefinition = getOntologyDefinition();
  const functionsIr: FunctionsIr | undefined = functionsIrFile
    ? readFunctionsIr(functionsIrFile)
    : undefined;

  const ridGenerator = new OntologyRidGeneratorImpl(randomnessKey);
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

  const importedShapes = getImportedShapes(
    ontDef.importedOntology,
    ridGenerator,
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
    .filter(([_, obj]) => obj.includeEmptyBackingDatasource === true)
    .map(([apiName]) => apiName);

  const backingDatasourceLinkApiNames = Object.entries(
    ontologyDefinition[OntologyEntityTypeEnum.LINK_TYPE],
  )
    .filter(([_, link]) =>
      "many" in link
      && !("intermediaryObjectType" in link)
      && link.includeEmptyBackingDatasource === true
    )
    .map(([apiName]) => apiName);

  return {
    ontologyIr: ontDef,
    shapes,
    backingDatasourceApiNames,
    backingDatasourceLinkApiNames,
  };
}
