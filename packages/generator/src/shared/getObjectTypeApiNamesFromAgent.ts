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

import type { DataType } from "@osdk/foundry.agents";
import type { EnhancedAgent } from "../GenerateContext/EnhancedAgent.js";

export function getObjectTypeApiNamesFromAgent(agent: EnhancedAgent): string[] {
  const types = new Set<string>();
  for (const { dataType } of agent.raw.argumentDefinitions) {
    getObjectTypesFromAgentDataType(dataType, types);
  }
  return Array.from(types);
}

function getObjectTypesFromAgentDataType(
  dataType: DataType,
  types: Set<string>,
): void {
  switch (dataType.type) {
    case "object":
    case "objectSet":
      types.add(dataType.objectTypeApiName);
      return;
    case "nullable":
      getObjectTypesFromAgentDataType(dataType.wrappedType, types);
      return;
    case "list":
      getObjectTypesFromAgentDataType(dataType.elementType, types);
      return;
    case "record":
      getObjectTypesFromAgentDataType(dataType.valueType, types);
      return;
    case "struct":
      for (const field of dataType.fields) {
        getObjectTypesFromAgentDataType(field.dataType, types);
      }
      return;
    case "discriminatedUnion":
      for (const member of dataType.members) {
        for (const field of member.fields) {
          getObjectTypesFromAgentDataType(field.dataType, types);
        }
      }
      return;
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "short":
    case "string":
    case "timestamp":
      return;
    default:
      const _: never = dataType;
      return;
  }
}
