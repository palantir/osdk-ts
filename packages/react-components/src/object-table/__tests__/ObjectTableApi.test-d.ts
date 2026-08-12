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

import type { ObjectTypeDefinition, QueryDefinition } from "@osdk/api";

import type { ColumnDefinition } from "../ObjectTableApi.js";

const TEST_OBJECT_TYPE = {
  type: "object",
  apiName: "TestObject",
} as const satisfies ObjectTypeDefinition;

type TestObject = typeof TEST_OBJECT_TYPE;

const integerColumn: ColumnDefinition<TestObject> = {
  locator: { type: "custom", id: "count" },
  cellValueType: "integer",
  getCellValue: () => 12345,
};
integerColumn satisfies ColumnDefinition<TestObject>;

const nullableIntegerColumn: ColumnDefinition<TestObject> = {
  locator: { type: "custom", id: "count" },
  cellValueType: "integer",
  getCellValue: (): number | null | undefined => null,
};
nullableIntegerColumn satisfies ColumnDefinition<TestObject>;

// @ts-expect-error an integer column can't return a string
const mistypedIntegerColumn: ColumnDefinition<TestObject> = {
  locator: { type: "custom", id: "count" },
  cellValueType: "integer",
  getCellValue: () => "12345",
};
mistypedIntegerColumn satisfies ColumnDefinition<TestObject>;

// `long` and `decimal` arrive as strings on the client, so a numeric
// `getCellValue` is a mismatch even though the type name reads numeric.
// @ts-expect-error a long column's value is a string
const mistypedLongColumn: ColumnDefinition<TestObject> = {
  locator: { type: "custom", id: "count" },
  cellValueType: "long",
  getCellValue: () => 12345,
};
mistypedLongColumn satisfies ColumnDefinition<TestObject>;

const untypedColumn: ColumnDefinition<TestObject> = {
  locator: { type: "custom", id: "anything" },
  getCellValue: () => ({ arbitrary: "shape" }),
};
untypedColumn satisfies ColumnDefinition<TestObject>;

const declaredTypeOnlyColumn: ColumnDefinition<TestObject> = {
  locator: { type: "custom", id: "count" },
  cellValueType: "integer",
};
declaredTypeOnlyColumn satisfies ColumnDefinition<TestObject>;

const getSeniority: QueryDefinition<TestObject> = {
  type: "query",
  apiName: "getSeniority",
  version: "1.0.0",
  osdkMetadata: undefined as never,
};

type TestFunctions = { seniority: typeof getSeniority };

const functionColumn: ColumnDefinition<TestObject, {}, TestFunctions> = {
  locator: {
    type: "function",
    id: "seniority",
    queryDefinition: getSeniority,
    getFunctionParams: () => ({}),
    getKey: (object) => String(object.$primaryKey),
    getValue: () => "test",
  },
  cellValueType: "integer",
};

// @ts-expect-error function column does not accept getCellValue
const functionColumnWithGetCellValue: ColumnDefinition<
  TestObject,
  {},
  TestFunctions
> = {
  locator: {
    type: "function",
    id: "seniority",
    queryDefinition: getSeniority,
    getFunctionParams: () => ({}),
    getKey: (object) => String(object.$primaryKey),
    getValue: () => "test",
  },
  cellValueType: "integer",
  getCellValue: () => "test",
};
functionColumnWithGetCellValue satisfies ColumnDefinition<
  TestObject,
  {},
  TestFunctions
>;
