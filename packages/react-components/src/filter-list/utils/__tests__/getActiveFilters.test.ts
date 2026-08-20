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

import { describe, expect, it } from "vitest";

import type { MockObjectType } from "../../__tests__/testUtils.js";
import {
  createCustomFilterDef,
  createHasLinkFilterDef,
  createKeywordSearchFilterDef,
  createLinkedPropertyFilterDef,
  createPropertyFilterDef,
  createStaticValuesFilterDef,
} from "../../__tests__/testUtils.js";
import type { FilterDefinitionUnion } from "../../FilterListApi.js";
import type { FilterState } from "../../FilterListItemApi.js";
import { getActiveFilters } from "../getActiveFilters.js";
import { getFilterKey } from "../getFilterKey.js";

function exactMatch(values: string[]): FilterState {
  return { type: "EXACT_MATCH", values };
}

function states(
  ...entries: Array<[FilterDefinitionUnion<typeof MockObjectType>, FilterState]>
): Map<string, FilterState> {
  return new Map(entries.map(([def, state]) => [getFilterKey(def), state]));
}

describe("getActiveFilters", () => {
  it("returns an empty array without definitions", () => {
    expect(getActiveFilters(undefined, new Map())).toEqual([]);
    expect(getActiveFilters([], new Map())).toEqual([]);
  });

  it("tags a property filter with its own clause", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      exactMatch([]),
    );

    expect(
      getActiveFilters([nameDef], states([nameDef, exactMatch(["John"])])),
    ).toEqual([
      {
        kind: "PROPERTY",
        filterKey: getFilterKey(nameDef),
        state: exactMatch(["John"]),
        clause: { name: "John" },
      },
    ]);
  });

  it("gives each filter only the clause it contributes", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      exactMatch([]),
    );
    const idDef = createPropertyFilterDef("id", "LISTOGRAM", exactMatch([]));

    const active = getActiveFilters(
      [nameDef, idDef],
      states([nameDef, exactMatch(["John"])], [idDef, exactMatch(["abc"])]),
    );

    expect(active.map((f) => ("clause" in f ? f.clause : undefined))).toEqual([
      { name: "John" },
      { id: "abc" },
    ]);
  });

  it("omits a filter whose state produces no clause", () => {
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      exactMatch([]),
    );

    expect(
      getActiveFilters([nameDef], states([nameDef, exactMatch([])])),
    ).toEqual([]);
  });

  it("omits a custom filter whose toWhereClause returns an empty clause", () => {
    const customDef = createCustomFilterDef("custom");

    expect(
      getActiveFilters(
        [customDef],
        states([customDef, { type: "custom", customState: { a: 1 } }]),
      ),
    ).toEqual([]);
  });

  it("tags keyword search and static values filters", () => {
    const keywordDef = createKeywordSearchFilterDef(["name"]);
    const staticDef = createStaticValuesFilterDef(
      "name",
      "LISTOGRAM",
      ["East"],
      exactMatch([]),
    );

    const active = getActiveFilters(
      [keywordDef, staticDef],
      states(
        [
          keywordDef,
          { type: "keywordSearch", searchTerm: "acme", operator: "AND" },
        ],
        [staticDef, exactMatch(["East"])],
      ),
    );

    expect(active.map((f) => f.kind)).toEqual([
      "KEYWORD_SEARCH",
      "STATIC_VALUES",
    ]);
  });

  it("tags a HAS_LINK filter with its link, and no clause", () => {
    const hasLinkDef = createHasLinkFilterDef("employees");

    const active = getActiveFilters(
      [hasLinkDef],
      states([hasLinkDef, { type: "hasLink", hasLink: true }]),
    );

    expect(active).toEqual([
      {
        kind: "HAS_LINK",
        filterKey: getFilterKey(hasLinkDef),
        state: { type: "hasLink", hasLink: true },
        linkName: "employees",
        isExcluding: false,
      },
    ]);
    expect(active[0]).not.toHaveProperty("clause");
    expect(active[0]).not.toHaveProperty("innerWhere");
  });

  it("omits a HAS_LINK filter that is toggled off", () => {
    const hasLinkDef = createHasLinkFilterDef("employees");

    expect(
      getActiveFilters(
        [hasLinkDef],
        states([hasLinkDef, { type: "hasLink", hasLink: false }]),
      ),
    ).toEqual([]);
  });

  it("tags a LINKED_PROPERTY filter with its inner predicate", () => {
    const linkedDef = createLinkedPropertyFilterDef("employees", "name");
    const state: FilterState = {
      type: "linkedProperty",
      linkedFilterState: exactMatch(["John"]),
    };

    expect(getActiveFilters([linkedDef], states([linkedDef, state]))).toEqual([
      {
        kind: "LINKED_PROPERTY",
        filterKey: getFilterKey(linkedDef),
        state,
        innerState: exactMatch(["John"]),
        linkName: "employees",
        innerWhere: { name: "John" },
        isExcluding: false,
      },
    ]);
  });

  it("reports isExcluding from the link filter's state", () => {
    const linkedDef = createLinkedPropertyFilterDef("employees", "name");
    const state: FilterState = {
      type: "linkedProperty",
      linkedFilterState: { type: "EXACT_MATCH", values: ["John"] },
    };
    const excluding: FilterState = {
      type: "linkedProperty",
      linkedFilterState: {
        type: "EXACT_MATCH",
        values: ["John"],
        isExcluding: true,
      },
    };

    const [included] = getActiveFilters(
      [linkedDef],
      states([linkedDef, state]),
    );
    const [excluded] = getActiveFilters(
      [linkedDef],
      states([linkedDef, excluding]),
    );

    expect(included).toMatchObject({ isExcluding: false });
    expect(excluded).toMatchObject({ isExcluding: true });
  });

  it("keeps definition order across kinds", () => {
    const hasLinkDef = createHasLinkFilterDef("employees");
    const nameDef = createPropertyFilterDef(
      "name",
      "LISTOGRAM",
      exactMatch([]),
    );

    const active = getActiveFilters(
      [hasLinkDef, nameDef],
      states(
        [hasLinkDef, { type: "hasLink", hasLink: true }],
        [nameDef, exactMatch(["John"])],
      ),
    );

    expect(active.map((f) => f.kind)).toEqual(["HAS_LINK", "PROPERTY"]);
  });
});
