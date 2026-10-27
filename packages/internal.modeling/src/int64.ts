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
import type { $ZodType } from "zod/v4/core";

// A stable symbol supports separate ESM/CJS modules. Non-enumerable definition metadata
// survives annotation-only clones, but not copies that add validation checks.
const int64Key: unique symbol = Symbol.for("@osdk/internal.modeling/int64");

export function isInt64Schema(schema: $ZodType): boolean {
  return (
    (
      schema._zod.def as typeof schema._zod.def & { readonly [int64Key]?: true }
    )[int64Key] === true
  );
}

const MAX_VALUE = 2n ** 63n - 1n;
const MIN_VALUE = -(2n ** 63n);

function isInt64(value: string): boolean {
  if (value.length > 20) return false;
  try {
    const number = BigInt(value);
    return (
      number >= MIN_VALUE && number <= MAX_VALUE && number.toString() === value
    );
  } catch {
    return false;
  }
}

/** Canonical decimal strings preserve the full signed 64-bit range across JSON runtimes. */
export const int64Schema: z.ZodString = z.string().refine(isInt64, {
  message: "Expected a canonical decimal string within signed 64-bit bounds",
});

Object.defineProperty(int64Schema._zod.def, int64Key, { value: true });
