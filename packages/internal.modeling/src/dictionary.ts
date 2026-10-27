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

import { z } from "zod/v4";
import type { $ZodString, $ZodType } from "zod/v4/core";

interface DictionaryDefinition {
  readonly keySchema: $ZodString<string>;
  readonly valueSchema: $ZodType;
}

// Schema-owned metadata survives separate ESM/CJS module instances without a shared registry.
const dictionaryDefinitionKey: unique symbol = Symbol.for(
  "@osdk/internal.modeling/dictionary",
);

/** Identifies the portable key/value schemas hidden inside the dictionary's runtime transform. */
export function getDictionaryDefinition(
  schema: $ZodType,
): DictionaryDefinition | undefined {
  return (
    schema as $ZodType & {
      readonly [dictionaryDefinitionKey]?: DictionaryDefinition;
    }
  )[dictionaryDefinitionKey];
}

function isDictionary(value: unknown): value is Record<string, unknown> {
  if (value == null || typeof value !== "object") return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype == null || prototype === Object.prototype;
}

/** Preserves nonempty JSON keys that Zod's record parser drops or rejects as prototype-related names. */
export function dictionary<T extends z.ZodType>(
  valueSchema: T,
): z.ZodType<Record<string, z.output<T>>> {
  const keySchema = z.string().min(1);
  // Tuple construction inspects optionality; defer it while recursive value schemas are being defined.
  const entriesSchema = z.lazy(() =>
    z.array(z.tuple([keySchema, valueSchema])),
  );
  const schema = z
    .unknown()
    .transform((input, ctx): Record<string, z.output<T>> => {
      if (!isDictionary(input)) {
        ctx.addIssue({ code: "custom", message: "Expected a dictionary" });
        return z.NEVER;
      }
      const entries = Object.entries(input);
      const result = entriesSchema.safeParse(entries);
      if (!result.success) {
        for (const issue of result.error.issues) {
          const [index, , ...path] = issue.path;
          ctx.addIssue({
            ...issue,
            path: [entries[index as number][0], ...path],
          });
        }
        return z.NEVER;
      }
      // Unlike assignment, fromEntries creates an own property for "__proto__".
      return Object.fromEntries(result.data);
    });
  Object.defineProperty(schema, dictionaryDefinitionKey, {
    value: { keySchema, valueSchema },
  });
  return schema;
}
