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
import type { FilterState } from "../FilterListItemApi.js";
import { buildWhereClause } from "../utils/filterStateToWhereClause.js";
import {
  createCheckboxListState,
  createContainsTextState,
  createCustomFilterDef,
  createDateRangeState,
  createHasLinkFilterDef,
  createKeywordSearchFilterDef,
  createNumberRangeState,
  createPropertyFilterDef,
  createToggleState,
} from "./testUtils.js";

describe("buildWhereClause", () => {
  it("returns empty object for undefined definitions", () => {
    const result = buildWhereClause(undefined, new Map(), "and");
    expect(result).toEqual({});
  });

  it("builds $in clause for CHECKBOX_LIST", () => {
    const definitions = [
      createPropertyFilterDef(
        "name",
        "CHECKBOX_LIST",
        createCheckboxListState(["a", "b"]),
      ),
    ];
    const filterStates = new Map<string, FilterState>([
      ["name:0", createCheckboxListState(["a", "b"])],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ name: { $in: ["a", "b"] } });
  });

  it("wraps with $not when CHECKBOX_LIST isExcluding", () => {
    const definitions = [
      createPropertyFilterDef(
        "name",
        "CHECKBOX_LIST",
        createCheckboxListState(["a"], { isExcluding: true }),
      ),
    ];
    const filterStates = new Map<string, FilterState>([
      ["name:0", createCheckboxListState(["a"], { isExcluding: true })],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ name: { $not: { $in: ["a"] } } });
  });

  it("builds $containsAnyTerm for CONTAINS_TEXT", () => {
    const definitions = [
      createPropertyFilterDef(
        "name",
        "CONTAINS_TEXT",
        createContainsTextState("test"),
      ),
    ];
    const filterStates = new Map<string, FilterState>([
      ["name:0", createContainsTextState("test")],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ name: { $containsAnyTerm: "test" } });
  });

  it("returns boolean for TOGGLE", () => {
    const definitions = [
      createPropertyFilterDef("active", "TOGGLE", createToggleState(true)),
    ];
    const filterStates = new Map<string, FilterState>([
      ["active:0", createToggleState(true)],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ active: true });
  });

  it("builds $gte for NUMBER_RANGE min", () => {
    const definitions = [
      createPropertyFilterDef(
        "age",
        "NUMBER_RANGE",
        createNumberRangeState(18, undefined),
      ),
    ];
    const filterStates = new Map<string, FilterState>([
      ["age:0", createNumberRangeState(18, undefined)],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ age: { $gte: 18 } });
  });

  it("builds $and for NUMBER_RANGE min+max", () => {
    const definitions = [
      createPropertyFilterDef(
        "age",
        "NUMBER_RANGE",
        createNumberRangeState(18, 65),
      ),
    ];
    const filterStates = new Map<string, FilterState>([
      ["age:0", createNumberRangeState(18, 65)],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ age: { $and: [{ $gte: 18 }, { $lte: 65 }] } });
  });

  it("includes $isNull with $or when includeNull", () => {
    const definitions = [
      createPropertyFilterDef(
        "age",
        "NUMBER_RANGE",
        createNumberRangeState(18, undefined, { includeNull: true }),
      ),
    ];
    const filterStates = new Map<string, FilterState>([
      ["age:0", createNumberRangeState(18, undefined, { includeNull: true })],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ age: { $or: [{ $gte: 18 }, { $isNull: true }] } });
  });

  it("builds date comparison for DATE_RANGE", () => {
    const minDate = new Date("2024-01-01T00:00:00.000Z");
    const maxDate = new Date("2024-12-31T23:59:59.999Z");
    const definitions = [
      createPropertyFilterDef(
        "createdAt",
        "DATE_RANGE",
        createDateRangeState(minDate, maxDate),
      ),
    ];
    const filterStates = new Map<string, FilterState>([
      ["createdAt:0", createDateRangeState(minDate, maxDate)],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
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
    const definitions = [
      createPropertyFilterDef(
        "name",
        "CHECKBOX_LIST",
        createCheckboxListState(["John"]),
      ),
      createPropertyFilterDef("active", "TOGGLE", createToggleState(true)),
    ];
    const filterStates = new Map<string, FilterState>([
      ["name:0", createCheckboxListState(["John"])],
      ["active:1", createToggleState(true)],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({
      $and: [{ name: { $in: ["John"] } }, { active: true }],
    });
  });

  it("combines multiple filters with $or", () => {
    const definitions = [
      createPropertyFilterDef(
        "name",
        "CHECKBOX_LIST",
        createCheckboxListState(["John"]),
      ),
      createPropertyFilterDef("active", "TOGGLE", createToggleState(true)),
    ];
    const filterStates = new Map<string, FilterState>([
      ["name:0", createCheckboxListState(["John"])],
      ["active:1", createToggleState(true)],
    ]);
    const result = buildWhereClause(definitions, filterStates, "or");
    expect(result).toEqual({
      $or: [{ name: { $in: ["John"] } }, { active: true }],
    });
  });

  it("returns single clause without wrapper for one filter", () => {
    const definitions = [
      createPropertyFilterDef(
        "name",
        "CHECKBOX_LIST",
        createCheckboxListState(["John"]),
      ),
      createPropertyFilterDef("active", "TOGGLE", createToggleState(false)),
    ];
    const filterStates = new Map<string, FilterState>([
      ["name:0", createCheckboxListState(["John"])],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ name: { $in: ["John"] } });
  });

  it("builds $isNotNull for hasLink filter", () => {
    const definitions = [createHasLinkFilterDef("employees")];
    const filterStates = new Map<string, FilterState>([
      ["hasLink:employees:0", { type: "HAS_LINK", hasLink: true }],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ employees: { $isNotNull: true } });
  });

  it("builds $containsAnyTerm for keywordSearch filter", () => {
    const definitions = [createKeywordSearchFilterDef(["name"])];
    const filterStates = new Map<string, FilterState>([
      [
        "keywordSearch-name:0",
        { type: "KEYWORD_SEARCH", searchTerm: "test", operator: "AND" },
      ],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ name: { $containsAnyTerm: "test" } });
  });

  it("builds $or for multi-property keywordSearch filter", () => {
    const definitions = [createKeywordSearchFilterDef(["name", "email"])];
    const filterStates = new Map<string, FilterState>([
      [
        "keywordSearch-name-email:0",
        { type: "KEYWORD_SEARCH", searchTerm: "test", operator: "AND" },
      ],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({
      $or: [
        { name: { $containsAnyTerm: "test" } },
        { email: { $containsAnyTerm: "test" } },
      ],
    });
  });

  it("calls toWhereClause for custom filter", () => {
    const baseDef = createCustomFilterDef("myFilter");
    const definitions = [
      {
        ...baseDef,
        toWhereClause: () => ({ customProp: { $eq: "test" } }),
      },
    ];
    const filterStates = new Map<string, FilterState>([
      ["myFilter:0", { type: "CUSTOM", customState: { value: "test" } }],
    ]);
    const result = buildWhereClause(definitions, filterStates, "and");
    expect(result).toEqual({ customProp: { $eq: "test" } });
  });
});
