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
import type { DataType, StructField } from "@osdk/foundry.agents";

export function wireAgentDataTypeToAgentDataTypeDefinition(
  input: DataType,
): AgentDataTypeDefinition {
  switch (input.type) {
    case "boolean":
    case "string":
    case "date":
    case "timestamp":
    case "integer":
    case "long":
    case "short":
    case "double":
    case "float":
      return { type: input.type, nullable: false };
    case "nullable":
      return {
        ...wireAgentDataTypeToAgentDataTypeDefinition(input.wrappedType),
        nullable: true,
      };
    case "object":
      return {
        type: "object",
        ontologyApiName: input.ontologyApiName,
        object: input.objectTypeApiName,
        nullable: false,
      };
    case "objectSet":
      return {
        type: "objectSet",
        ontologyApiName: input.ontologyApiName,
        objectSet: input.objectTypeApiName,
        nullable: false,
      };
    case "list":
      return {
        type: "array",
        array: wireAgentDataTypeToAgentDataTypeDefinition(input.elementType),
        nullable: false,
      };
    case "record":
      return {
        type: "record",
        valueType: wireAgentDataTypeToAgentDataTypeDefinition(input.valueType),
        nullable: false,
      };
    case "struct":
      return {
        type: "struct",
        struct: wireAgentFieldsToDefinitions(input.fields),
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
              wireAgentFieldsToDefinitions(member.fields),
            ],
          ),
        ),
        nullable: false,
      };
    default:
      const _: never = input;
      return { type: "unknown", nullable: false };
  }
}

export function wireAgentFieldsToDefinitions(
  fields: ReadonlyArray<StructField>,
): Record<string, AgentDataTypeDefinition> {
  return Object.fromEntries(
    fields.map(
      field => [
        field.name,
        wireAgentDataTypeToAgentDataTypeDefinition(field.dataType),
      ],
    ),
  );
}
