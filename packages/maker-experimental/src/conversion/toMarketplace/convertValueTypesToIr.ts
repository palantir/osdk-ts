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

import type { OntologyIrValueTypeBlockDataEntry } from "@osdk/client.unstable";
import type { ValueTypeDefinitionVersion } from "@osdk/maker";

export function convertValueTypesToIr(
  valueTypes: Record<string, ValueTypeDefinitionVersion[]>,
): OntologyIrValueTypeBlockDataEntry[] {
  return Object.values(valueTypes).map<
    OntologyIrValueTypeBlockDataEntry
  >(definitions => ({
    metadata: {
      apiName: definitions[0].apiName,
      packageNamespace: definitions[0].packageNamespace,
      displayMetadata: definitions[0].displayMetadata,
      status: definitions[0].status,
    },
    // TODO(dpaquin): instead of deduping here, we should refactor the value type types from arrays to maps
    versions: Array.from(
      new Map(definitions.map(definition => [definition.version, definition]))
        .values(),
    ).map(definition => ({
      version: definition.version,
      baseType: definition.baseType,
      constraints: definition.constraints,
      exampleValues: definition.exampleValues,
    })),
  }));
}
