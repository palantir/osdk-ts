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

import type { ValueTypeBlockData } from "@osdk/client.unstable";
import type {
  OntologyDefinition,
  ValueTypeDefinitionVersion,
} from "@osdk/maker";
import { OntologyEntityTypeEnum } from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import {
  convertConstraints,
  type ValueTypeDependency,
} from "./convertValueTypeDataConstraints.js";

export interface ValueTypeBlockDataWithDependencies {
  blockData: ValueTypeBlockData;
  dependencies: ValueTypeDependency[];
}

export function convertValueTypeToWireBlockData(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGenerator,
): ValueTypeBlockDataWithDependencies[] {
  return Object.values(ontology[OntologyEntityTypeEnum.VALUE_TYPE]).map(
    (definitions): ValueTypeBlockDataWithDependencies => {
      const latestVersion = getLatestVersion(definitions);
      const convertedVersions = Array.from(
        new Map(
          definitions.map((definition) => [definition.version, definition]),
        ).values(),
      ).map((definition) => {
        const convertedConstraints = convertConstraints(
          definition.constraints,
          definition.baseType,
          ridGenerator,
        );
        return {
          version: {
            version: definition.version,
            baseType: definition.baseType,
            constraints: convertedConstraints.constraints,
            exampleValues: definition.exampleValues,
          },
          dependencies: convertedConstraints.dependencies,
        };
      });
      const blockData: ValueTypeBlockData = {
        metadata: {
          apiName: definitions[0].apiName,
          baseType: latestVersion.baseType,
          displayMetadata: definitions[0].displayMetadata,
          status: definitions[0].status,
        },
        versions: convertedVersions.map(({ version }) => version),
      };
      return {
        blockData,
        dependencies: convertedVersions.flatMap(
          ({ dependencies }) => dependencies,
        ),
      };
    },
  );
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
  const partsA = a.split(".").map(Number);
  const partsB = b.split(".").map(Number);
  const maxLen = Math.max(partsA.length, partsB.length);
  for (let i = 0; i < maxLen; i++) {
    const segA = partsA[i] ?? 0;
    const segB = partsB[i] ?? 0;
    if (segA !== segB) return segA - segB;
  }
  return 0;
}
