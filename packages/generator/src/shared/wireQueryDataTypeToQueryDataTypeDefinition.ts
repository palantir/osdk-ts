/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { QueryDataTypeDefinition } from "@osdk/api";
import type { QueryDataType } from "@osdk/gateway/types";

export function wireQueryDataTypeToQueryDataTypeDefinition(
  input: QueryDataType,
): QueryDataTypeDefinition {
  switch (input.type) {
    case "double":
    case "float":
    case "integer":
    case "long":
    case "attachment":
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
        type: {
          type: "object",
          object: input.objectTypeApiName,
        },
        nullable: false,
      };

    case "objectSet":
      return {
        type: { type: "objectSet", objectSet: input.objectTypeApiName },
        nullable: false,
      };

    case "array":
      return {
        ...wireQueryDataTypeToQueryDataTypeDefinition(input.subType),
        multiplicity: true,
      };

    case "set":
      return {
        type: {
          type: "set",
          set: wireQueryDataTypeToQueryDataTypeDefinition(input.subType),
        },
        nullable: false,
      };

    case "union":
      const allowNulls = isNullable(input);

      // special case for a union where one half is nullable to skip the union step and just allow nulls directly
      if (allowNulls && input.unionTypes.length === 2) {
        const nonnull = input.unionTypes.find(t => t.type !== null);
        if (nonnull) {
          return {
            ...wireQueryDataTypeToQueryDataTypeDefinition(nonnull),
            nullable: true,
          };
        }
      }

      return {
        type: {
          type: "union",
          union: input.unionTypes.reduce((acc, t) => {
            if (t.type === "null") {
              return acc;
            }
            acc.push(wireQueryDataTypeToQueryDataTypeDefinition(t));
            return acc;
          }, [] as QueryDataTypeDefinition[]),
        },
        nullable: allowNulls,
      };

    case "struct":
      return {
        type: {
          type: "struct",
          struct: input.fields.map(f => ({
            name: f.name,
            fieldType: wireQueryDataTypeToQueryDataTypeDefinition(f.fieldType),
          })),
        },
        nullable: false,
      };

    case "null":
    case "unsupported":
      throw new Error(
        `Accidentally tried to handle QueryDataType.type ${input.type}`,
      );

    default:
      const _: never = input;
      throw new Error(`Unsupported QueryDataType.type ${(input as any).type}`);
  }
}

function isNullable(input: QueryDataType): boolean {
  if (input.type === "null") {
    return true;
  }
  if (input.type === "union") {
    return input.unionTypes.some(t => isNullable(t));
  }
  return false;
}
