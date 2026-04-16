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

import type { OntologyIrV2 } from "@osdk/client.unstable";
import type { LinkType, ObjectType } from "@osdk/maker";
import {
  getOntologyDefinition,
  initializeOntologyState,
  OntologyEntityTypeEnum,
} from "@osdk/maker";
import { convertOntologyDefinition } from "../conversion/toMarketplace/convertOntologyDefinition.js";
import { getShapes } from "../conversion/toMarketplace/shapeExtractors/IrShapeExtractor.js";
import type { BlockShapes } from "../util/generateRid.js";
import { OntologyRidGeneratorImpl } from "../util/generateRid.js";

export interface OntologyV2Result {
  ontologyIr: OntologyIrV2;
  shapes: BlockShapes;
  backingDatasourceApiNames: string[];
  backingDatasourceLinkApiNames: string[];
}

export async function defineOntologyV2(
  ns: string,
  body: () => void | Promise<void>,
  randomnessKey?: string,
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

  const ontologyDefinition = getOntologyDefinition();

  const ridGenerator = new OntologyRidGeneratorImpl(randomnessKey);
  const ontDef = convertOntologyDefinition(
    ontologyDefinition,
    ridGenerator,
    randomnessKey,
  );

  const shapes = await getShapes(ontDef.ontology, ridGenerator, randomnessKey);

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

  return {
    ontologyIr: ontDef,
    shapes,
    backingDatasourceApiNames,
    backingDatasourceLinkApiNames,
  };
}
