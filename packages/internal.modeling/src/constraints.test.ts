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

import { expect, it } from "vitest";
import { z } from "zod/v4";

import { findModelingConstraintIssues } from "./constraints.js";
import { dictionary } from "./dictionary.js";

it.each([
  z.coerce.string(),
  z.coerce.number(),
  z.coerce.boolean(),
  z.string().nullable(),
  z.string().nullish(),
  z.string().default("x"),
  z.string().transform((value) => value.length),
  z.string().refine((value) => value !== "bad"),
  z.strictObject({ value: z.string() }).superRefine(() => {}),
  z.object({ value: z.string() }),
  z.union([z.string(), z.number()]),
  z.int(),
  z.uint32(),
  z.int64(),
  z.date(),
  z.unknown(),
  z.literal(true),
  z.literal(0),
  z.literal(["VALUE", 1]),
  z.map(z.string(), z.string()),
  z.set(z.string()),
  z.tuple([z.string().optional()]),
  z.tuple([z.string()], z.string()),
  z.array(z.string().optional()),
  z.string().trim(),
  z.string().regex(/a/iu),
  z.string().regex(/\d/u),
  z.string().regex(/(?=a)/u),
  z.string().max(10),
  z.string().min(2),
])(
  "rejects unsupported representations and validation rather than weakening them",
  (schema) => {
    expect(findModelingConstraintIssues(schema).length).toBeGreaterThan(0);
  },
);

it("explains constraint failures with their code, path, and validation bound", () => {
  const issues = findModelingConstraintIssues(
    z.strictObject({ label: z.string().min(2) }),
  );
  expect(issues).toEqual([
    {
      code: "nonPortableStringLength",
      path: ["label"],
      message: expect.stringMatching(
        /String minimum length 2.*UTF-16.*min\(1\)/u,
      ),
    },
  ]);
});

it("reports non-string enum values separately from casing violations", () => {
  expect(findModelingConstraintIssues(z.enum({ FIRST: 0, SECOND: 1 }))).toEqual(
    [
      {
        code: "invalidEnumValue",
        path: [],
        message: "Enum values must be strings without the reserved $ prefix.",
      },
    ],
  );
  expect(findModelingConstraintIssues(z.enum(["first", "second"]))).toEqual([
    {
      code: "invalidEnumCasing",
      path: [],
      message:
        "Outside discriminators, enum values must use UPPER_SNAKE_CASE starting with a letter.",
    },
  ]);
});

it("rejects reserved enum prefixes in discriminator and value contexts", () => {
  const tags = z.enum(["$FIRST"]);
  expect(
    findModelingConstraintIssues(z.strictObject({ type: tags, value: tags })),
  ).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ code: "invalidEnumValue", path: ["type"] }),
      expect.objectContaining({ code: "invalidEnumValue", path: ["value"] }),
    ]),
  );
});

it("inspects shared enums in discriminator and value contexts separately", () => {
  const tags = z.enum(["first", "second"]);
  expect(
    findModelingConstraintIssues(z.strictObject({ type: tags, value: tags })),
  ).toEqual([
    {
      code: "invalidEnumCasing",
      path: ["value"],
      message:
        "Outside discriminators, enum values must use UPPER_SNAKE_CASE starting with a letter.",
    },
  ]);
});

it("does not let shared wrappers hide optional array elements", () => {
  const optional = z.string().optional().readonly();
  const schema = z.strictObject({
    field: optional,
    values: z.array(optional),
  });
  expect(findModelingConstraintIssues(schema)).toContainEqual(
    expect.objectContaining({
      code: "optionalOutsideObjectField",
      path: ["values", "items"],
    }),
  );
});

it("allows optional fields without admitting nullable values", () => {
  const schema = z.strictObject({ field: z.string().optional() });
  expect(findModelingConstraintIssues(schema)).toEqual([]);
  expect(schema.safeParse({}).success).toBe(true);
  expect(schema.safeParse({ field: null }).success).toBe(false);
});

it("rejects native records with a dictionary recommendation", () => {
  const record = z.record(z.string().min(1), z.string());
  const message =
    "z.record() can drop or reject valid JSON keys. Use dictionary(valueSchema) instead.";
  expect(
    findModelingConstraintIssues(z.strictObject({ values: record })),
  ).toEqual([{ code: "unsafeRecord", path: ["values"], message }]);
  expect(findModelingConstraintIssues(record)).toEqual([
    { code: "unsafeRecord", path: [], message },
  ]);
});

it.each([
  ["coercions", z.coerce.string()],
  ["transforms", z.string().transform((value) => value.trim())],
  ["optional values", z.string().optional()],
] as const)("rejects %s in dictionary values", (_name, valueSchema) => {
  expect(findModelingConstraintIssues(dictionary(valueSchema))).toContainEqual(
    expect.objectContaining({ path: ["values"] }),
  );
});
