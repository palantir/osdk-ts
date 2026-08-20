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

import type {
  ValueTypeBlockData,
  ValueTypeReference,
  ValueTypeReferencesByApiName,
} from "@osdk/client.unstable";
import type {
  OntologyDefinition,
  ValueTypeDefinitionVersion,
} from "@osdk/maker";
import { OntologyEntityTypeEnum } from "@osdk/maker";
import { compare as compareSemver, valid as validSemver } from "semver-ts";

import type { OntologyRidGenerator } from "../../util/generateRid.js";

export interface ConvertedValueTypes {
  valueTypes: ValueTypeBlockData[];
  valueTypeReferences: ValueTypeReferencesByApiName;
}

export function convertValueTypeToWireBlockData(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGenerator,
): ConvertedValueTypes {
  const valueTypeReferences: Record<
    string,
    Record<string, ValueTypeReference>
  > = {};
  const valueTypes = Object.values(
    ontology[OntologyEntityTypeEnum.VALUE_TYPE],
  ).map<ValueTypeBlockData>((definitions) => {
    const uniqueDefinitions = Array.from(
      new Map(
        definitions.map((definition) => [definition.version, definition]),
      ).values(),
    );
    const firstDefinition = uniqueDefinitions[0];
    if (firstDefinition === undefined) {
      throw new Error("Value type must have at least one version");
    }
    const latestVersion = getLatestVersion(uniqueDefinitions);
    valueTypeReferences[firstDefinition.apiName] = Object.fromEntries(
      uniqueDefinitions.map((definition) => [
        definition.version,
        ridGenerator.generateRidForValueType(
          definition.apiName,
          definition.version,
        ),
      ]),
    );
    return {
      metadata: {
        apiName: firstDefinition.apiName,
        baseType: latestVersion.baseType,
        displayMetadata: firstDefinition.displayMetadata,
        status: firstDefinition.status,
      },
      versions: uniqueDefinitions.map((definition) => ({
        version: definition.version,
        baseType: definition.baseType,
        constraints: definition.constraints,
        exampleValues: definition.exampleValues,
      })),
    };
  });
  return { valueTypes, valueTypeReferences };
}

function getLatestVersion(
  versions: ValueTypeDefinitionVersion[],
): ValueTypeDefinitionVersion {
  if (versions.length === 0) {
    throw new Error("Value type must have at least one version");
  }
  return versions.reduce((latest, current) => {
    return compareSlsVersions(current.version, latest.version) > 0
      ? current
      : latest;
  });
}

function compareSlsVersions(a: string, b: string): number {
  const validA = validSemver(a);
  const validB = validSemver(b);
  if (validA != null && validB != null) {
    return compareSemver(validA, validB);
  }
  if (validA != null) {
    return 1;
  }
  if (validB != null) {
    return -1;
  }
  return a < b ? -1 : a > b ? 1 : 0;
}
