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
  ActionDataTypeDefinition,
  ActionMapKeyDataTypes,
} from "@osdk/api";
import type { QueryDataType } from "@osdk/foundry.ontologies";

export function wireActionReturnTypeToActionDataTypeDefinition(
  input: QueryDataType,
): ActionDataTypeDefinition {
  switch (input.type) {
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "string":
    case "timestamp":
      return { type: input.type, nullable: false };

    case "array":
      return {
        type: "array",
        array: wireActionReturnTypeToActionDataTypeDefinition(input.subType),
        nullable: false,
      };

    case "set":
      return {
        type: "set",
        set: wireActionReturnTypeToActionDataTypeDefinition(input.subType),
        nullable: false,
      };

    case "union": {
      const nonNullTypes = input.unionTypes.filter(t => t.type !== "null");
      if (
        nonNullTypes.length !== 1
        || nonNullTypes.length === input.unionTypes.length
      ) {
        throw new Error(
          "Union return types are only supported as an optional value",
        );
      }
      return {
        ...wireActionReturnTypeToActionDataTypeDefinition(nonNullTypes[0]),
        nullable: true,
      };
    }

    case "struct":
      return {
        type: "struct",
        struct: Object.fromEntries(input.fields.map(f => [
          f.name,
          wireActionReturnTypeToActionDataTypeDefinition(f.fieldType),
        ])),
        nullable: false,
      };

    case "entrySet": {
      const keyType = wireActionReturnTypeToActionDataTypeDefinition(
        input.keyType,
      );
      if (!isMapKeyType(keyType.type) || keyType.nullable) {
        throw new Error(
          `Map return types with a key type of ${keyType.type} are not supported`,
        );
      }
      return {
        type: "map",
        keyType: { type: keyType.type, nullable: false },
        valueType: wireActionReturnTypeToActionDataTypeDefinition(
          input.valueType,
        ),
        nullable: false,
      };
    }

    case "attachment":
    case "geoshape":
    case "interfaceObject":
    case "interfaceObjectSet":
    case "mediaReference":
    case "null":
    case "object":
    case "objectSet":
    case "threeDimensionalAggregation":
    case "twoDimensionalAggregation":
    case "typeReference":
    case "unsupported":
    case "void":
      throw new Error(`Action return type ${input.type} is not supported`);

    default: {
      const _: never = input;
      throw new Error(
        `Unknown action return type ${(input as { type: string }).type}`,
      );
    }
  }
}

const mapKeyTypes: ReadonlyArray<ActionMapKeyDataTypes> = [
  "date",
  "double",
  "float",
  "integer",
  "long",
  "string",
  "timestamp",
];

function isMapKeyType(type: string): type is ActionMapKeyDataTypes {
  return (mapKeyTypes as ReadonlyArray<string>).includes(type);
}
