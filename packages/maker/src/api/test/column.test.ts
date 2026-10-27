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

import {
  createDatasetReference,
  createFunctionReference,
  createRestrictedViewReference,
  createStreamReference,
} from "@osdk/resource";
import { expect, expectTypeOf, it } from "vitest";

import { column, type ColumnSource } from "../object/column.js";

const locator = { type: "apiName", apiName: "employees" } as const;
const contract = {
  schema: { columns: { id: { type: "string" } } },
} as const;

it.each([
  createDatasetReference(locator, contract),
  createStreamReference(locator, contract),
  createRestrictedViewReference(locator, contract),
])("selects a typed column from a $type reference", (resource) => {
  const source = column(resource, "id");
  expectTypeOf(source).toExtend<ColumnSource>();
  expectTypeOf(source.column).toEqualTypeOf<"id">();
  expectTypeOf(
    source.resource.schema.columns.id.type,
  ).toEqualTypeOf<"string">();
  expect(source).toEqual({ type: "column", resource, column: "id" });
  expect(Object.isFrozen(source)).toBe(true);
  expect(() => {
    // @ts-expect-error Known schemas restrict column names.
    column(resource, "missing");
  }).toThrow('Unknown column "missing"');
});

it("accepts nonempty column names when the schema is unknown", () => {
  const resource = createDatasetReference(locator);
  const source = column(resource, "arbitrary_column");
  expectTypeOf(source.column).toEqualTypeOf<"arbitrary_column">();
  expect(source.column).toBe("arbitrary_column");
  expect(() => column(resource, "")).toThrow("Column name must not be empty");
});

it("rejects resources that are not tabular", () => {
  const resource = createFunctionReference(locator);
  expect(() => {
    // @ts-expect-error Only tabular resources have column sources.
    column(resource, "id");
  }).toThrow();
});
