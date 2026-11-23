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

/**
 * Converts an action's wire return type to its SDK definition. Returns
 * `undefined` when the OSDK cannot represent the type, including when any
 * nested type is unsupported.
 */
export function wireActionReturnTypeToActionDataTypeDefinition(
  input: QueryDataType,
): ActionDataTypeDefinition | undefined {
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

    case "array": {
      const array = wireActionReturnTypeToActionDataTypeDefinition(
        input.subType,
      );
      return array != null
        ? { type: "array", array, nullable: false }
        : undefined;
    }

    case "set": {
      const set = wireActionReturnTypeToActionDataTypeDefinition(input.subType);
      return set != null ? { type: "set", set, nullable: false } : undefined;
    }

    case "union": {
      // Only optional values (`T | null`) are supported.
      const nonNullTypes = input.unionTypes.filter(t => t.type !== "null");
      if (
        nonNullTypes.length !== 1
        || nonNullTypes.length === input.unionTypes.length
      ) {
        return undefined;
      }
      const inner = wireActionReturnTypeToActionDataTypeDefinition(
        nonNullTypes[0],
      );
      return inner != null ? { ...inner, nullable: true } : undefined;
    }

    case "struct": {
      const struct: Record<string, ActionDataTypeDefinition> = {};
      for (const field of input.fields) {
        const fieldType = wireActionReturnTypeToActionDataTypeDefinition(
          field.fieldType,
        );
        if (fieldType == null) {
          return undefined;
        }
        struct[field.name] = fieldType;
      }
      return { type: "struct", struct, nullable: false };
    }

    case "entrySet": {
      const keyType = wireActionReturnTypeToActionDataTypeDefinition(
        input.keyType,
      );
      const valueType = wireActionReturnTypeToActionDataTypeDefinition(
        input.valueType,
      );
      if (
        keyType == null
        || valueType == null
        || !isMapKeyType(keyType.type)
        || keyType.nullable
      ) {
        return undefined;
      }
      return {
        type: "map",
        keyType: { type: keyType.type, nullable: false },
        valueType,
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
      return undefined;

    default: {
      const _: never = input;
      return undefined;
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
