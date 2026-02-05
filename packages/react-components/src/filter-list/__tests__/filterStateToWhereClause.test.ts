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
import type { MockObjectType } from "./testUtils.js";
import {
  createContainsTextState,
  createCustomFilterDef,
  createDateRangeState,
  createHasLinkFilterDef,
  createKeywordSearchFilterDef,
  createNumberRangeState,
  createPropertyFilterDef,
  createSelectState,
  createToggleState,
} from "./testUtils.js";

type TestFilterDef = FilterDefinitionUnion<typeof MockObjectType>;

describe("buildWhereClause", () => {
  it("returns empty object for undefined definitions", () => {
    const result = buildWhereClause(
      undefined,
      new Map<TestFilterDef, FilterState>(),
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
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, createSelectState(["a", "b"])],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ name: { $in: ["a", "b"] } });
  });

  it("wraps with $not when CHECKBOX_LIST isExcluding", () => {
    const def = createPropertyFilterDef(
      "name",
      "CHECKBOX_LIST",
      createSelectState(["a"], { isExcluding: true }),
    );
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, createSelectState(["a"], { isExcluding: true })],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ name: { $not: "a" } });
  });

  it("builds $containsAnyTerm for CONTAINS_TEXT", () => {
    const def = createPropertyFilterDef(
      "name",
      "CONTAINS_TEXT",
      createContainsTextState("test"),
    );
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, createContainsTextState("test")],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ name: { $containsAnyTerm: "test" } });
  });

  it("returns boolean for TOGGLE", () => {
    const def = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(true),
    );
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, createToggleState(true)],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ active: true });
  });

  it("builds $gte for NUMBER_RANGE min", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(18, undefined),
    );
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, createNumberRangeState(18, undefined)],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ age: { $gte: 18 } });
  });

  it("builds $and for NUMBER_RANGE min+max", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(18, 65),
    );
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, createNumberRangeState(18, 65)],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ age: { $and: [{ $gte: 18 }, { $lte: 65 }] } });
  });

  it("includes $isNull with $or when includeNull", () => {
    const def = createPropertyFilterDef(
      "age",
      "NUMBER_RANGE",
      createNumberRangeState(18, undefined, { includeNull: true }),
    );
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, createNumberRangeState(18, undefined, { includeNull: true })],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ age: { $or: [{ $gte: 18 }, { $isNull: true }] } });
  });

  it("builds date comparison for DATE_RANGE", () => {
    const minDate = new Date("2024-01-01T00:00:00.000Z");
    const maxDate = new Date("2024-12-31T23:59:59.999Z");
    const def = createPropertyFilterDef(
      "createdAt",
      "DATE_RANGE",
      createDateRangeState(minDate, maxDate),
    );
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, createDateRangeState(minDate, maxDate)],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({
      createdAt: {
        $and: [
          { $gte: minDate.toISOString() },
          { $lte: maxDate.toISOString() },
        ],
      },
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
    const filterStates = new Map<TestFilterDef, FilterState>([
      [nameDef, createSelectState(["John"])],
      [activeDef, createToggleState(true)],
    ]);
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
    const filterStates = new Map<TestFilterDef, FilterState>([
      [nameDef, createSelectState(["John"])],
      [activeDef, createToggleState(true)],
    ]);
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
    const filterStates = new Map<TestFilterDef, FilterState>([
      [nameDef, createSelectState(["John"])],
    ]);
    const result = buildWhereClause([nameDef, activeDef], filterStates, "and");
    expect(result).toEqual({ name: "John" });
  });

  it("builds $isNotNull for hasLink filter", () => {
    const def = createHasLinkFilterDef("employees");
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, { type: "HAS_LINK", hasLink: true }],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ employees: { $isNotNull: true } });
  });

  it("emits no clause for hasLink filter when hasLink is false", () => {
    const def = createHasLinkFilterDef("employees");
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, { type: "hasLink", hasLink: false }],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({});
  });

  it("builds $containsAllTerms for keywordSearch filter with AND operator", () => {
    const def = createKeywordSearchFilterDef(["name"]);
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, { type: "KEYWORD_SEARCH", searchTerm: "test", operator: "AND" }],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ name: { $containsAllTerms: "test" } });
  });

  it("builds $containsAnyTerm for keywordSearch filter with OR operator", () => {
    const def = createKeywordSearchFilterDef(["name"]);
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, { type: "KEYWORD_SEARCH", searchTerm: "test", operator: "OR" }],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ name: { $containsAnyTerm: "test" } });
  });

  it("builds $or for multi-property keywordSearch filter", () => {
    const def = createKeywordSearchFilterDef(["name", "email"]);
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, { type: "KEYWORD_SEARCH", searchTerm: "test", operator: "OR" }],
    ]);
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
    const filterStates = new Map<TestFilterDef, FilterState>([
      [
        def,
        {
          type: "KEYWORD_SEARCH",
          searchTerm: "test",
          operator: "AND",
          isExcluding: true,
        },
      ],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ name: { $not: { $containsAllTerms: "test" } } });
  });

  it("calls toWhereClause for custom filter", () => {
    const baseDef = createCustomFilterDef("myFilter");
    const def = {
      ...baseDef,
      toWhereClause: () => ({ customProp: { $eq: "test" } }),
    };
    const filterStates = new Map<TestFilterDef, FilterState>([
      [def, { type: "CUSTOM", customState: { value: "test" } }],
    ]);
    const result = buildWhereClause([def], filterStates, "and");
    expect(result).toEqual({ customProp: { $eq: "test" } });
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
    const filterStates = new Map<TestFilterDef, FilterState>([
      [nameDef, createSelectState(["John"])],
      [activeDef, createToggleState(true)],
    ]);

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
