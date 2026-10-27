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

import { expect, it, vi } from "vitest";
import { z } from "zod/v4";

import { generateModelDocuments } from "./generation.js";
import { int64Schema } from "./int64.js";

it.each([
  "0",
  "1",
  "-1",
  "9223372036854775807",
  "-9223372036854775808",
  "9007199254740993",
])("accepts canonical signed int64 %s", (value) => {
  expect(int64Schema.parse(value)).toBe(value);
});

it.each([
  "9223372036854775808",
  "-9223372036854775809",
  "01",
  "-0",
  "+1",
  "1.0",
  "1e3",
  "1\n",
  " 1",
  "1 ",
  "0x1",
  "0b1",
  "1_000",
  "١",
  "-00",
  "100000000000000000000",
  "",
  1,
  true,
  null,
])("rejects invalid or out-of-range int64 %s", (value) => {
  expect(int64Schema.safeParse(value).success).toBe(false);
});

it("exports the int64 format through named and optional references", () => {
  const annotated = int64Schema.describe("A revision number");
  const documents = generateModelDocuments({
    Int64: annotated,
    Example: z.strictObject({ revision: annotated.optional().readonly() }),
  });
  expect(documents.Int64).toMatchObject({
    type: "string",
    format: "int64",
    description: "A revision number",
  });
  expect(documents.Int64).not.toHaveProperty("pattern");
  expect(documents.Example.properties?.revision).toMatchObject({
    $ref: "https://osdk.invalid/models/Int64.json",
    readOnly: true,
  });
  expect(documents.Example.required).toBeUndefined();
});

it("does not exempt additional int64 refinements from portability checks", () => {
  expect(() =>
    generateModelDocuments({
      Int64: int64Schema.refine((value) => value !== "1"),
    }),
  ).toThrow("unsupportedCheck");
});

it("recognizes int64 schemas from independently loaded modules", async () => {
  vi.resetModules();
  const { int64Schema: otherInt64Schema } = await import("./int64.js");
  expect(otherInt64Schema).not.toBe(int64Schema);
  expect(generateModelDocuments({ Int64: otherInt64Schema })).toEqual(
    generateModelDocuments({ Int64: int64Schema }),
  );
});

it("matches bigint bounds throughout the int64 boundary intervals", () => {
  for (let offset = -30n; offset <= 30n; offset++) {
    for (const boundary of [-(2n ** 63n), 2n ** 63n - 1n]) {
      const value = boundary + offset;
      expect(int64Schema.safeParse(value.toString()).success).toBe(
        value >= -(2n ** 63n) && value < 2n ** 63n,
      );
    }
  }
});
