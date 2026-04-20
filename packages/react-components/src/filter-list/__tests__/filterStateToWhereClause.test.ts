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
  createHasLinkFilterDef,
  createKeywordSearchFilterDef,
  createNumberRangeState,
  createPropertyFilterDef,
  createSelectState,
  createStaticValuesFilterDef,
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
    );
    expect(result).toEqual({});
  });

  it("builds $in clause for LISTOGRAM", () => {
    const def = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      { type: "EXACT_MATCH", values: ["a", "b"] },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: ["a", "b"] }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ name: { $in: ["a", "b"] } });
  });

  it("wraps with $not when LISTOGRAM isExcluding", () => {
    const def = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      { type: "EXACT_MATCH", values: ["a"], isExcluding: true },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: ["a"], isExcluding: true }],
    );
    const result = buildWhereClause([def], filterStates);
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
    const result = buildWhereClause([def], filterStates);
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
    const result = buildWhereClause([def], filterStates);
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
    const result = buildWhereClause([def], filterStates);
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
    const result = buildWhereClause([def], filterStates);
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
    const result = buildWhereClause([def], filterStates);
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
    const result = buildWhereClause([def], filterStates);
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
      "LISTOGRAM",
      { type: "EXACT_MATCH", values: ["John"] },
    );
    const activeDef = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(true),
    );
    const filterStates = stateMap(
      [nameDef, { type: "EXACT_MATCH", values: ["John"] }],
      [activeDef, createToggleState(true)],
    );
    const result = buildWhereClause([nameDef, activeDef], filterStates);
    expect(result).toEqual({
      $and: [{ name: "John" }, { active: true }],
    });
  });

  it("returns single clause without wrapper for one filter", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      { type: "EXACT_MATCH", values: ["John"] },
    );
    const activeDef = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(false),
    );
    const filterStates = stateMap(
      [nameDef, { type: "EXACT_MATCH", values: ["John"] }],
    );
    const result = buildWhereClause([nameDef, activeDef], filterStates);
    expect(result).toEqual({ name: "John" });
  });

  it("builds $isNotNull for hasLink filter", () => {
    const def = createHasLinkFilterDef("employees");
    const filterStates = stateMap(
      [def, { type: "hasLink", hasLink: true }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ employees: { $isNotNull: true } });
  });

  it("emits no clause for hasLink filter when hasLink is false", () => {
    const def = createHasLinkFilterDef("employees");
    const filterStates = stateMap(
      [def, { type: "hasLink", hasLink: false }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({});
  });

  it("builds $containsAllTerms for keywordSearch filter with AND operator", () => {
    const def = createKeywordSearchFilterDef(["name"]);
    const filterStates = stateMap(
      [def, { type: "keywordSearch", searchTerm: "test", operator: "AND" }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ name: { $containsAllTerms: "test" } });
  });

  it("builds $containsAnyTerm for keywordSearch filter with OR operator", () => {
    const def = createKeywordSearchFilterDef(["name"]);
    const filterStates = stateMap(
      [def, { type: "keywordSearch", searchTerm: "test", operator: "OR" }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ name: { $containsAnyTerm: "test" } });
  });

  it("builds $or for multi-property keywordSearch filter", () => {
    const def = createKeywordSearchFilterDef(["name", "email"]);
    const filterStates = stateMap(
      [def, { type: "keywordSearch", searchTerm: "test", operator: "OR" }],
    );
    const result = buildWhereClause([def], filterStates);
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
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ $not: { name: { $containsAllTerms: "test" } } });
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
    const result = buildWhereClause([def], filterStates);
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
      mockPropertyTypes,
    );
    const clause = result as Record<string, unknown[]>;
    const andConditions = clause.$and as Array<
      Record<string, Record<string, string>>
    >;
    expect(andConditions[0].birthDate.$gte).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(andConditions[1].birthDate.$lte).toMatch(/^\d{4}-\d{2}-\d{2}$/);
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
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({
      $or: [
        { $and: [{ age: { $gte: 18 } }, { age: { $lte: 65 } }] },
        { age: { $isNull: true } },
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
      mockPropertyTypes,
    );
    expect(result).toEqual({ age: { $gte: 2_147_483_647 } });
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
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({
      $not: { $and: [{ age: { $gte: 18 } }, { age: { $lte: 65 } }] },
    });
  });

  it("builds $or with $isNull for EXACT_MATCH with empty string and other values", () => {
    const def = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      { type: "EXACT_MATCH", values: ["a", "b", ""] },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: ["a", "b", ""] }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({
      $or: [{ name: { $in: ["a", "b"] } }, { name: { $isNull: true } }],
    });
  });

  it("builds $or with single value and $isNull for EXACT_MATCH", () => {
    const def = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      { type: "EXACT_MATCH", values: ["a", ""] },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: ["a", ""] }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({
      $or: [{ name: "a" }, { name: { $isNull: true } }],
    });
  });

  it("builds $isNull for SELECT with empty string value", () => {
    const def = createPropertyFilterDef(
      "name",
      "MULTI_SELECT",
      createSelectState([""]),
    );
    const filterStates = stateMap(
      [def, createSelectState([""])],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ name: { $isNull: true } });
  });

  it("builds $or with $isNull for SELECT with empty string and other values", () => {
    const def = createPropertyFilterDef(
      "name",
      "MULTI_SELECT",
      createSelectState(["a", ""]),
    );
    const filterStates = stateMap(
      [def, createSelectState(["a", ""])],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({
      $or: [{ name: "a" }, { name: { $isNull: true } }],
    });
  });

  it("wraps $isNull with $not for EXACT_MATCH with empty string and isExcluding", () => {
    const def = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      { type: "EXACT_MATCH", values: [""], isExcluding: true },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: [""], isExcluding: true }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ $not: { name: { $isNull: true } } });
  });

  it("builds $isNull for EXACT_MATCH with empty string value", () => {
    const def = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      { type: "EXACT_MATCH", values: [""] },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: [""] }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ name: { $isNull: true } });
  });

  // --- STATIC_VALUES filter tests ---

  it("builds $in clause for STATIC_VALUES with EXACT_MATCH", () => {
    const def = createStaticValuesFilterDef(
      "status",
      "LISTOGRAM",
      ["Active", "Inactive"],
      { type: "EXACT_MATCH", values: [] },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: ["Active", "Inactive"] }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ status: { $in: ["Active", "Inactive"] } });
  });

  it("builds single value clause for STATIC_VALUES with one selected", () => {
    const def = createStaticValuesFilterDef(
      "status",
      "LISTOGRAM",
      ["Active", "Inactive"],
      { type: "EXACT_MATCH", values: [] },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: ["Active"] }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ status: "Active" });
  });

  it("returns empty object for STATIC_VALUES with no selections", () => {
    const def = createStaticValuesFilterDef(
      "status",
      "LISTOGRAM",
      ["Active", "Inactive"],
      { type: "EXACT_MATCH", values: [] },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: [] }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({});
  });

  it("wraps with $not for STATIC_VALUES with isExcluding", () => {
    const def = createStaticValuesFilterDef(
      "status",
      "LISTOGRAM",
      ["Active", "Inactive"],
      { type: "EXACT_MATCH", values: [] },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: ["Active"], isExcluding: true }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ $not: { status: "Active" } });
  });

  it("builds SELECT clause for STATIC_VALUES SINGLE_SELECT", () => {
    const def = createStaticValuesFilterDef(
      "priority",
      "SINGLE_SELECT",
      ["High", "Medium", "Low"],
      { type: "SELECT", selectedValues: [] },
    );
    const filterStates = stateMap(
      [def, createSelectState(["High"])],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ priority: "High" });
  });

  it("builds $in for STATIC_VALUES MULTI_SELECT", () => {
    const def = createStaticValuesFilterDef(
      "team",
      "MULTI_SELECT",
      ["Alpha", "Beta", "Gamma"],
      { type: "SELECT", selectedValues: [] },
    );
    const filterStates = stateMap(
      [def, createSelectState(["Alpha", "Beta"])],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ team: { $in: ["Alpha", "Beta"] } });
  });

  it("calls toWhereClause for STATIC_VALUES when provided", () => {
    const def = createStaticValuesFilterDef(
      "status",
      "LISTOGRAM",
      ["Yes", "No"],
      { type: "EXACT_MATCH", values: [] },
      {
        toWhereClause: (state) => {
          if (
            state.type === "EXACT_MATCH"
            && (state.values as string[]).includes("Yes")
          ) {
            return { active: true };
          }
          return undefined;
        },
      },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: ["Yes"] }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({ active: true });
  });

  it("returns empty for STATIC_VALUES toWhereClause returning undefined", () => {
    const def = createStaticValuesFilterDef(
      "status",
      "LISTOGRAM",
      ["Yes", "No"],
      { type: "EXACT_MATCH", values: [] },
      {
        toWhereClause: () => undefined,
      },
    );
    const filterStates = stateMap(
      [def, { type: "EXACT_MATCH", values: ["Yes"] }],
    );
    const result = buildWhereClause([def], filterStates);
    expect(result).toEqual({});
  });

  it("preserves state when filters are reordered", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      { type: "EXACT_MATCH", values: ["John"] },
    );
    const activeDef = createPropertyFilterDef(
      "active",
      "TOGGLE",
      createToggleState(true),
    );
    const filterStates = stateMap(
      [nameDef, { type: "EXACT_MATCH", values: ["John"] }],
      [activeDef, createToggleState(true)],
    );

    const result1 = buildWhereClause([nameDef, activeDef], filterStates);
    const result2 = buildWhereClause([activeDef, nameDef], filterStates);

    expect(result1).toEqual({
      $and: [{ name: "John" }, { active: true }],
    });
    expect(result2).toEqual({
      $and: [{ active: true }, { name: "John" }],
    });
  });
});
