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

import type {
  OntologyBlockDataV2,
  ValueTypeBlockData,
} from "@osdk/client.unstable";
import type { OntologyBlockDataWithValueTypes } from "@osdk/generator-converters.ontologyir";
import type { OntologyDefinition } from "@osdk/maker";

import { OntologyRidGeneratorImpl } from "../util/generateRid.js";

export function getOntologyBlockDataWithValueTypes(
  ontology: OntologyBlockDataV2,
  localValueTypes: ValueTypeBlockData[],
  importedTypes: OntologyDefinition,
  randomnessKey?: string,
): OntologyBlockDataWithValueTypes {
  const ridGenerator = new OntologyRidGeneratorImpl(
    importedTypes,
    randomnessKey,
  );
  const valueTypes: Record<string, ValueTypeBlockData> = {};
  for (const valueType of localValueTypes) {
    for (const version of valueType.versions) {
      const { rid, versionId } = ridGenerator.generateRidForValueType(
        valueType.metadata.apiName,
        version.version,
      );
      if (
        ontology.knownIdentifiers.valueTypes[rid]?.[versionId] !== undefined
      ) {
        valueTypes[rid] = valueType;
        break;
      }
    }
  }
  return { ...ontology, valueTypes };
}
