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

import type { AgentDataTypeDefinition } from "@osdk/api/unstable";
import type { DataType } from "@osdk/foundry.agents";

export function wireAgentDataTypeToAgentDataTypeDefinition(
  input: DataType,
): AgentDataTypeDefinition {
  switch (input.type) {
    case "double":
    case "float":
    case "integer":
    case "long":
    case "short":
    case "boolean":
    case "date":
    case "string":
    case "timestamp":
      return {
        type: input.type,
        nullable: false,
      };

    case "object":
      return {
        type: "object",
        object: input.objectTypeApiName,
        ontologyApiName: input.ontologyApiName,
        nullable: false,
      };

    case "objectSet":
      return {
        type: "objectSet",
        objectSet: input.objectTypeApiName,
        ontologyApiName: input.ontologyApiName,
        nullable: false,
      };
    case "list":
      return {
        array: wireAgentDataTypeToAgentDataTypeDefinition(input.elementType),
        type: "array",
        nullable: false,
      };

    case "nullable":
      return {
        ...wireAgentDataTypeToAgentDataTypeDefinition(input.wrappedType),
        nullable: true,
      };

    case "struct":
      return {
        type: "struct",
        struct: Object.fromEntries(input.fields.map(f => [
          f.name,
          wireAgentDataTypeToAgentDataTypeDefinition(f.dataType),
        ])),
        nullable: false,
      };

    case "discriminatedUnion":
      return {
        type: "discriminatedUnion",
        discriminatorKey: input.discriminatorKey,
        members: Object.fromEntries(
          input.members.map(
            member => [
              member.discriminatorValue,
              Object.fromEntries(member.fields.map(f => [
                f.name,
                wireAgentDataTypeToAgentDataTypeDefinition(f.dataType),
              ])),
            ],
          ),
        ),
        nullable: false,
      };

    case "record":
      return {
        type: "record",
        valueType: wireAgentDataTypeToAgentDataTypeDefinition(input.valueType),
        nullable: false,
      };

    default:
      const _: never = input;
      throw new Error(`Unsupported AgentDataType.type ${(input as any).type}`);
  }
}
