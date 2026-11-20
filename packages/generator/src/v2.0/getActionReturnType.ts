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

import type { ActionDataTypeDefinition } from "@osdk/api";
import { stringify } from "../util/stringify.js";

/**
 * Writes the TypeScript type of the value applyAction resolves to for an
 * action's return type. Sets come back from the client as arrays, and empty
 * optional items as undefined.
 */
export function getActionReturnType(input: ActionDataTypeDefinition): string {
  switch (input.type) {
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "string":
    case "timestamp":
      return `ActionResult.PrimitiveType<${JSON.stringify(input.type)}>`;

    case "array":
      return `Array<${getActionReturnElementType(input.array)}>`;

    case "set":
      return `Array<${getActionReturnElementType(input.set)}>`;

    case "map":
      return `Partial<Record<${getActionReturnType(input.keyType)}, ${
        getActionReturnType(input.valueType)
      }>>`;

    case "struct":
      return `{
        ${
        stringify(input.struct, {
          "*": (p, _formatter, apiName) => [
            `"${apiName}"${p.nullable ? "?" : ""}`,
            getActionReturnType(p),
          ],
        })
      }
      }`;

    default: {
      const _: never = input;
      throw new Error(
        `Unknown action return type ${(input as { type: string }).type}`,
      );
    }
  }
}

function getActionReturnElementType(input: ActionDataTypeDefinition): string {
  const type = getActionReturnType(input);
  return input.nullable ? `${type} | undefined` : type;
}
