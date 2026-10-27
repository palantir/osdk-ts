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

import { expect, expectTypeOf, it } from "vitest";
import { z } from "zod/v4";

import { dictionary } from "./dictionary.js";

// This is an important test since Zod actually failed to parse these record keys
// __proto__ is obviously an unlike key but constructor seems possible
it.each(["__proto__", "constructor"])(
  "preserves and validates nested dictionary keys: %s",
  (name) => {
    const schema = dictionary(dictionary(z.int32()));
    const input = { [name]: { [name]: 42 } };
    const serialized = JSON.stringify(input);
    const parsed = schema.parse(JSON.parse(serialized));
    expect(parsed).toEqual(input);
    expect(JSON.stringify(parsed)).toBe(serialized);
    expect(Object.getPrototypeOf(parsed)).toBe(Object.prototype);
    expect(Object.getPrototypeOf(parsed[name])).toBe(Object.prototype);
    const result = schema.safeParse({ [name]: { [name]: "invalid" } });
    expect(result.success).toBe(false);
    if (!result.success)
      expect(result.error.issues[0].path).toEqual([name, name]);
  },
);

it("retains dictionary value types and accepts null-prototype dictionaries", () => {
  const schema = dictionary(z.int32());
  expectTypeOf<z.output<typeof schema>>().toEqualTypeOf<
    Record<string, number>
  >();
  const input = Object.setPrototypeOf({ constructor: 42 }, null);
  expect(schema.parse(input)).toEqual({ constructor: 42 });
});

it("rejects empty keys and non-dictionary inputs", () => {
  const schema = dictionary(z.int32());
  for (const input of [
    null,
    undefined,
    [],
    [["key", 42]],
    new Date(),
    new Map(),
    42,
    "value",
  ]) {
    expect(schema.safeParse(input).success).toBe(false);
  }
  const result = schema.safeParse({ "": 42 });
  expect(result.success).toBe(false);
  if (!result.success) expect(result.error.issues[0].path).toEqual([""]);
});
