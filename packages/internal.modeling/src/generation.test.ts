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
import { collectModels, generateModelDocuments } from "./generation.js";
import { int64Schema } from "./int64.js";

it("collects explicit schema modules and rejects duplicate names", () => {
  const employeeSchema = z.strictObject({ name: z.string() });
  expect(
    Object.keys(
      collectModels([{ employeeSchema, unrelated: 1 }, { int64Schema }]),
    ),
  ).toEqual(["Employee", "Int64"]);
  expect(() => collectModels([{ employeeSchema }, { employeeSchema }])).toThrow(
    "Duplicate model",
  );
});

it("rejects assigning multiple model names to one schema", () => {
  const employeeSchema = z.strictObject({ name: z.string() });
  expect(() =>
    generateModelDocuments({ Employee: employeeSchema, Alias: employeeSchema }),
  ).toThrow("Multiple model names");
});

it("explains the expected schema export naming convention", () => {
  expect(() => collectModels([{ Employee: z.string() }])).toThrow(
    'Invalid schema export "Employee": expected an alphanumeric name starting with a lowercase letter and ending in "Schema" (e.g. "employeeSchema")',
  );
});

it("includes constraint codes, paths, and messages in generation errors", () => {
  const schema = z.strictObject({ label: z.string().min(2) });
  const [issue] = findModelingConstraintIssues(schema);
  expect(() => generateModelDocuments({ Example: schema })).toThrow(
    `nonPortableStringLength at label: ${issue.message}`,
  );
});
