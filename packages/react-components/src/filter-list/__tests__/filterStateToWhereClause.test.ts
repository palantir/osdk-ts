/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { describe, expect, it } from "vitest";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { buildWhereClause } from "../utils/filterStateToWhereClause.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import type { MockObjectType } from "./testUtils.js";
import {
  createContainsTextState,
  createCustomFilterDef,
  createDateRangeState,
  createExactMatchState,
  createHasLinkFilterDef,
  createKeywordSearchFilterDef,
  createNumberRangeState,
  createPropertyFilterDef,
  createSelectState,
  createTimelineState,
  createToggleState,
} from "./testUtils.js";

import type { PropertyTypeInfo } from "../utils/filterStateToWhereClause.js";

const mockPropertyTypes = new Map<string, PropertyTypeInfo>([
  ["id", { type: "string", multiplicity: false }],
  ["name", { type: "string", multiplicity: false }],
  ["age", { type: "integer", multiplicity: false }],
  ["active", { type: "boolean", multiplicity: false }],
  ["createdAt", { type: "timestamp", multiplicity: false }],
  ["birthDate", { type: "datetime", multiplicity: false }],
  ["score", { type: "double", multiplicity: false }],
]);

type TestFilterDef = FilterDefinitionUnion<typeof MockObjectType>;

function stateMap(
  ...entries: [TestFilterDef, FilterState][]
): Map<string, FilterState> {
  return new Map(entries.map(([def, state]) => [getFilterKey(def), state]));
}

describe("buildWhereClause", () => {
  it("returns empty object for undefined definitions", () => {
    const result = buildWhereClause(
      undefined,
      new Map<string, FilterState>(),
      "and",
    );
    expect(result).toEqual({});
  });

  it("builds $in clause for CHECKBOX_LIST", () => {
    const def = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState(["a", "b"]),
    );
    const filterStates = stateMap(
      [def, createSelectState(["a", "b"])],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ name: { $in: ["a", "b"] } });
  });

  it("wraps with $not when CHECKBOX_LIST isExcluding", () => {
    const def = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState(["a"], { isExcluding: true }),
    );
    const filterStates = stateMap(
      [def, createSelectState(["a"], { isExcluding: true })],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ $not: { name: "a" } });
  });

  it("builds $containsAnyTerm for CONTAINS_TEXT", () => {
    const def = createPropertyFilterDef(
      "name",
      "CONTAINS_TEXT",
      createContainsTextState("test"),
    );
    const filterStates = stateMap(
      [def, createContainsTextState("test")],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ name: { $containsAnyTerm: "test" } });
  });

  it("returns boolean for TOGGLE", () => {
    const def = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(true),
    );
    const filterStates = stateMap(
      [def, createToggleState(true)],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ active: true });
  });

  it("builds $gte for NUMBER_RANGE min", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(18, undefined),
    );
    const filterStates = stateMap(
      [def, createNumberRangeState(18, undefined)],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ age: { $gte: 18 } });
  });

  it("builds $and for NUMBER_RANGE min+max", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(18, 65),
    );
    const filterStates = stateMap(
      [def, createNumberRangeState(18, 65)],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({
      $and: [{ age: { $gte: 18 } }, { age: { $lte: 65 } }],
    });
  });

  it("includes $isNull with $or when includeNull", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(18, undefined, { includeNull: true }),
    );
    const filterStates = stateMap(
      [def, createNumberRangeState(18, undefined, { includeNull: true })],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({
      $or: [{ age: { $gte: 18 } }, { age: { $isNull: true } }],
    });
  });

  it("builds date comparison for DATE_RANGE", () => {
    const minDate = new Date("2024-01-01T00:00:00.000Z");
    const maxDate = new Date("2024-12-31T23:59:59.999Z");
    const def = createPropertyFilterDef(
      "createdAt",
      "DATE_RANGE",
      createDateRangeState(minDate, maxDate),
    );
    const filterStates = stateMap(
      [def, createDateRangeState(minDate, maxDate)],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({
      $and: [
        { createdAt: { $gte: minDate.toISOString() } },
        { createdAt: { $lte: maxDate.toISOString() } },
      ],
    });
  });

  it("combines multiple filters with $and", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState(["John"]),
    );
    const activeDef = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(true),
    );
    const filterStates = stateMap(
      [nameDef, createSelectState(["John"])],
      [activeDef, createToggleState(true)],
    );
    const result = buildWhereClause([nameDef, activeDef], filterStates, "and");
    expect(result).toEqual({
      $and: [{ name: "John" }, { active: true }],
    });
  });

  it("combines multiple filters with $or", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState(["John"]),
    );
    const activeDef = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(true),
    );
    const filterStates = stateMap(
      [nameDef, createSelectState(["John"])],
      [activeDef, createToggleState(true)],
    );
    const result = buildWhereClause([nameDef, activeDef], filterStates, "or");
    expect(result).toEqual({
      $or: [{ name: "John" }, { active: true }],
    });
  });

  it("returns single clause without wrapper for one filter", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState(["John"]),
    );
    const activeDef = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(false),
    );
    const filterStates = stateMap(
      [nameDef, createSelectState(["John"])],
    );
    const result = buildWhereClause([nameDef, activeDef], filterStates, "and");
    expect(result).toEqual({ name: "John" });
  });

  it("builds $isNotNull for hasLink filter", () => {
    const def = createHasLinkFilterDef("employees");
    const filterStates = stateMap(
      [def, { type: "hasLink", hasLink: true }],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ employees: { $isNotNull: true } });
  });

  it("emits no clause for hasLink filter when hasLink is false", () => {
    const def = createHasLinkFilterDef("employees");
    const filterStates = stateMap(
      [def, { type: "hasLink", hasLink: false }],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({});
  });

  it("builds $containsAllTerms for keywordSearch filter with AND operator", () => {
    const def = createKeywordSearchFilterDef(["name"]);
    const filterStates = stateMap(
      [def, { type: "keywordSearch", searchTerm: "test", operator: "AND" }],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ name: { $containsAllTerms: "test" } });
  });

  it("builds $containsAnyTerm for keywordSearch filter with OR operator", () => {
    const def = createKeywordSearchFilterDef(["name"]);
    const filterStates = stateMap(
      [def, { type: "keywordSearch", searchTerm: "test", operator: "OR" }],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ name: { $containsAnyTerm: "test" } });
  });

  it("builds $or for multi-property keywordSearch filter", () => {
    const def = createKeywordSearchFilterDef(["name", "email"]);
    const filterStates = stateMap(
      [def, { type: "keywordSearch", searchTerm: "test", operator: "OR" }],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({
      $or: [
        { name: { $containsAnyTerm: "test" } },
        { email: { $containsAnyTerm: "test" } },
      ],
    });
  });

  it("builds $not wrapper for keywordSearch filter with isExcluding", () => {
    const def = createKeywordSearchFilterDef(["name"]);
    const filterStates = stateMap(
      [
        def,
        {
          type: "keywordSearch",
          searchTerm: "test",
          operator: "AND",
          isExcluding: true,
        },
      ],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ $not: { name: { $containsAllTerms: "test" } } });
  });

  it("wraps with $not for multi-value CHECKBOX_LIST isExcluding", () => {
    const def = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState(["a", "b"], { isExcluding: true }),
    );
    const filterStates = stateMap(
      [def, createSelectState(["a", "b"], { isExcluding: true })],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ $not: { name: { $in: ["a", "b"] } } });
  });

  it("wraps with $not for CONTAINS_TEXT isExcluding", () => {
    const def = createPropertyFilterDef(
      "name",
      "CONTAINS_TEXT",
      createContainsTextState("test", { isExcluding: true }),
    );
    const filterStates = stateMap(
      [def, createContainsTextState("test", { isExcluding: true })],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ $not: { name: { $containsAnyTerm: "test" } } });
  });

  it("wraps with $not for EXACT_MATCH isExcluding", () => {
    const def = createPropertyFilterDef(
      "active",
      "CHECKBOX_LIST",
      createExactMatchState(["true"], { isExcluding: true }),
    );
    const filterStates = stateMap(
      [def, createExactMatchState(["true"], { isExcluding: true })],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ $not: { active: "true" } });
  });

  it("combines excluding filter with non-excluding filter via $and", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState(["John"], { isExcluding: true }),
    );
    const activeDef = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(true),
    );
    const filterStates = stateMap(
      [nameDef, createSelectState(["John"], { isExcluding: true })],
      [activeDef, createToggleState(true)],
    );
    const result = buildWhereClause([nameDef, activeDef], filterStates, "and");
    expect(result).toEqual({
      $and: [{ $not: { name: "John" } }, { active: true }],
    });
  });

  it("calls toWhereClause for custom filter", () => {
    const baseDef = createCustomFilterDef("myFilter");
    const def = {
      ...baseDef,
      toWhereClause: () => ({ customProp: { $eq: "test" } }),
    };
    const filterStates = stateMap(
      [def, { type: "custom", customState: { value: "test" } }],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ customProp: { $eq: "test" } });
  });

  it("formats dates as YYYY-MM-DD for datetime (LocalDate) properties", () => {
    const minDate = new Date("2024-01-15T04:00:00.000Z");
    const maxDate = new Date("2024-06-30T04:00:00.000Z");
    const def = createPropertyFilterDef(
      "birthDate",
      "DATE_RANGE",
      createDateRangeState(minDate, maxDate),
    );
    const filterStates = stateMap(
      [def, createDateRangeState(minDate, maxDate)],
    );
    const result = buildWhereClause(
      [def],
      filterStates,
      "and",
      mockPropertyTypes,
    );
    const clause = result as Record<string, unknown[]>;
    const andConditions = clause.$and as Array<
      Record<string, Record<string, string>>
    >;
    expect(andConditions[0].birthDate.$gte).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(andConditions[1].birthDate.$lte).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("formats dates as full ISO string for timestamp properties", () => {
    const minDate = new Date("2024-01-15T04:00:00.000Z");
    const def = createPropertyFilterDef(
      "createdAt",
      "DATE_RANGE",
      createDateRangeState(minDate, undefined),
    );
    const filterStates = stateMap(
      [def, createDateRangeState(minDate, undefined)],
    );
    const result = buildWhereClause(
      [def],
      filterStates,
      "and",
      mockPropertyTypes,
    );
    expect(result).toEqual({
      createdAt: { $gte: minDate.toISOString() },
    });
  });

  it("builds $or wrapping $and for NUMBER_RANGE min+max+includeNull", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(18, 65, { includeNull: true }),
    );
    const filterStates = stateMap(
      [def, createNumberRangeState(18, 65, { includeNull: true })],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({
      $or: [
        { $and: [{ age: { $gte: 18 } }, { age: { $lte: 65 } }] },
        { age: { $isNull: true } },
      ],
    });
  });

  it("builds top-level $and for TIMELINE with start+end", () => {
    const start = new Date("2024-01-01T00:00:00.000Z");
    const end = new Date("2024-12-31T23:59:59.999Z");
    const def = createPropertyFilterDef(
      "createdAt",
      "TIMELINE",
      createTimelineState(start, end),
    );
    const filterStates = stateMap(
      [def, createTimelineState(start, end)],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({
      $and: [
        { createdAt: { $gte: start.toISOString() } },
        { createdAt: { $lte: end.toISOString() } },
      ],
    });
  });

  it("combines compound range filter with simple filter", () => {
    const ageDef = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(18, 65),
    );
    const activeDef = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(true),
    );
    const filterStates = stateMap(
      [ageDef, createNumberRangeState(18, 65)],
      [activeDef, createToggleState(true)],
    );
    const result = buildWhereClause([ageDef, activeDef], filterStates, "and");
    expect(result).toEqual({
      $and: [
        { $and: [{ age: { $gte: 18 } }, { age: { $lte: 65 } }] },
        { active: true },
      ],
    });
  });

  it("clamps integer NUMBER_RANGE values exceeding MAX_VALUE", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(5_000_000_000, undefined),
    );
    const filterStates = stateMap(
      [def, createNumberRangeState(5_000_000_000, undefined)],
    );
    const result = buildWhereClause(
      [def],
      filterStates,
      "and",
      mockPropertyTypes,
    );
    expect(result).toEqual({ age: { $gte: 2_147_483_647 } });
  });

  it("clamps integer NUMBER_RANGE values below MIN_VALUE", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(undefined, -5_000_000_000),
    );
    const filterStates = stateMap(
      [def, createNumberRangeState(undefined, -5_000_000_000)],
    );
    const result = buildWhereClause(
      [def],
      filterStates,
      "and",
      mockPropertyTypes,
    );
    expect(result).toEqual({ age: { $lte: -2_147_483_648 } });
  });

  it("does not clamp double NUMBER_RANGE values", () => {
    const def = createPropertyFilterDef(
      "score",
      "NUMBER_RANGE",
      createNumberRangeState(5_000_000_000, undefined),
    );
    const filterStates = stateMap(
      [def, createNumberRangeState(5_000_000_000, undefined)],
    );
    const result = buildWhereClause(
      [def],
      filterStates,
      "and",
      mockPropertyTypes,
    );
    expect(result).toEqual({ score: { $gte: 5_000_000_000 } });
  });

  it("does not clamp integer values within bounds", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(18, 65),
    );
    const filterStates = stateMap(
      [def, createNumberRangeState(18, 65)],
    );
    const result = buildWhereClause(
      [def],
      filterStates,
      "and",
      mockPropertyTypes,
    );
    expect(result).toEqual({
      $and: [{ age: { $gte: 18 } }, { age: { $lte: 65 } }],
    });
  });

  it("wraps with $not for NUMBER_RANGE min+max with isExcluding", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(18, 65, { isExcluding: true }),
    );
    const filterStates = stateMap(
      [def, createNumberRangeState(18, 65, { isExcluding: true })],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({
      $not: { $and: [{ age: { $gte: 18 } }, { age: { $lte: 65 } }] },
    });
  });

  it("wraps with $not for DATE_RANGE min+max with isExcluding", () => {
    const minDate = new Date("2024-01-01T00:00:00.000Z");
    const maxDate = new Date("2024-12-31T23:59:59.999Z");
    const def = createPropertyFilterDef(
      "createdAt",
      "DATE_RANGE",
      createDateRangeState(minDate, maxDate, { isExcluding: true }),
    );
    const filterStates = stateMap(
      [def, createDateRangeState(minDate, maxDate, { isExcluding: true })],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({
      $not: {
        $and: [
          { createdAt: { $gte: minDate.toISOString() } },
          { createdAt: { $lte: maxDate.toISOString() } },
        ],
      },
    });
  });

  it("wraps with $not for TIMELINE start+end with isExcluding", () => {
    const start = new Date("2024-01-01T00:00:00.000Z");
    const end = new Date("2024-12-31T23:59:59.999Z");
    const def = createPropertyFilterDef(
      "createdAt",
      "TIMELINE",
      createTimelineState(start, end, { isExcluding: true }),
    );
    const filterStates = stateMap(
      [def, createTimelineState(start, end, { isExcluding: true })],
    );
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({
      $not: {
        $and: [
          { createdAt: { $gte: start.toISOString() } },
          { createdAt: { $lte: end.toISOString() } },
        ],
      },
    });
  });

  it("preserves state when filters are reordered", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState(["John"]),
    );
    const activeDef = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(true),
    );
    const filterStates = stateMap(
      [nameDef, createSelectState(["John"])],
      [activeDef, createToggleState(true)],
    );

    const result1 = buildWhereClause([nameDef, activeDef], filterStates, "and");
    const result2 = buildWhereClause([activeDef, nameDef], filterStates, "and");

    expect(result1).toEqual({
      $and: [{ name: "John" }, { active: true }],
    });
    expect(result2).toEqual({
      $and: [{ active: true }, { name: "John" }],
    });
  });
});
