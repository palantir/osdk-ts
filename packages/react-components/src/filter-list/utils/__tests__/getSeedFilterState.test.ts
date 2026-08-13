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
import type { FilterDefinitionUnion } from "../../FilterListApi.js";
import type { FilterState } from "../../FilterListItemApi.js";
import { getSeedFilterState } from "../getSeedFilterState.js";

type Def = FilterDefinitionUnion<typeof MockObjectType>;

const EXACT_A = { type: "EXACT_MATCH", values: ["a"] } satisfies FilterState;
const EXACT_B = { type: "EXACT_MATCH", values: ["b"] } satisfies FilterState;
const HAS_LINK_STATE = { type: "hasLink", hasLink: true } satisfies FilterState;
const KEYWORD_STATE = {
  type: "keywordSearch",
  searchTerm: "stray",
  operator: "AND",
} satisfies FilterState;
const CUSTOM_STATE = { type: "custom", customState: {} } satisfies FilterState;

const PROPERTY_BASE = {
  type: "PROPERTY",
  key: "name",
  filterComponent: "LISTOGRAM",
} satisfies Def;

const LINKED_BASE = {
  type: "LINKED_PROPERTY",
  linkName: "primaryOffice",
  linkedPropertyKey: "name",
  filterComponent: "LISTOGRAM",
} satisfies Def;

const CUSTOM_BASE = {
  type: "CUSTOM",
  key: "custom",
  filterComponent: "CUSTOM",
  toWhereClause: () => ({}),
  filterState: CUSTOM_STATE,
} satisfies Def;

describe("getSeedFilterState", () => {
  describe("kinds that store the state directly", () => {
    it("reads defaultFilterState", () => {
      expect(
        getSeedFilterState({ ...PROPERTY_BASE, defaultFilterState: EXACT_A }),
      ).toEqual(EXACT_A);
    });

    it("falls back to the deprecated filterState", () => {
      expect(
        getSeedFilterState({ ...PROPERTY_BASE, filterState: EXACT_A }),
      ).toEqual(EXACT_A);
    });

    it("prefers defaultFilterState when both are set", () => {
      expect(
        getSeedFilterState({
          ...PROPERTY_BASE,
          defaultFilterState: EXACT_A,
          filterState: EXACT_B,
        }),
      ).toEqual(EXACT_A);
    });

    it("returns undefined when the definition seeds nothing", () => {
      expect(getSeedFilterState(PROPERTY_BASE)).toBeUndefined();
    });

    // CUSTOM reads the same two fields, so the deprecated rename preserves the
    // value here too.
    it("seeds CUSTOM from either spelling, preferring defaultFilterState", () => {
      expect(getSeedFilterState(CUSTOM_BASE)).toEqual(CUSTOM_STATE);
      expect(
        getSeedFilterState({
          ...CUSTOM_BASE,
          defaultFilterState: CUSTOM_STATE,
        }),
      ).toEqual(CUSTOM_STATE);
      expect(
        getSeedFilterState({ ...CUSTOM_BASE, filterState: undefined }),
      ).toBeUndefined();
    });
  });

  // Reading `filterState` on these would silently activate filters in existing
  // apps, since it used to be required and so is set on essentially every
  // definition.
  const IGNORED_FILTER_STATE_CASES: Array<[string, Def, Def, FilterState]> = [
    [
      "HAS_LINK",
      {
        type: "HAS_LINK",
        linkName: "primaryOffice",
        filterState: HAS_LINK_STATE,
      },
      {
        type: "HAS_LINK",
        linkName: "primaryOffice",
        defaultFilterState: HAS_LINK_STATE,
      },
      HAS_LINK_STATE,
    ],
    [
      "KEYWORD_SEARCH",
      {
        type: "KEYWORD_SEARCH",
        properties: "all",
        filterState: KEYWORD_STATE,
      },
      {
        type: "KEYWORD_SEARCH",
        properties: "all",
        defaultFilterState: KEYWORD_STATE,
      },
      KEYWORD_STATE,
    ],
  ];

  describe("kinds where filterState has never seeded", () => {
    it.each(IGNORED_FILTER_STATE_CASES)(
      "ignores filterState on %s",
      (_kind, seedsFilterStateOnly, seedsDefault, expected) => {
        expect(getSeedFilterState(seedsFilterStateOnly)).toBeUndefined();
        expect(getSeedFilterState(seedsDefault)).toEqual(expected);
      },
    );
  });

  describe("LINKED_PROPERTY", () => {
    it("wraps the inner defaultFilterState", () => {
      expect(
        getSeedFilterState({ ...LINKED_BASE, defaultFilterState: EXACT_A }),
      ).toEqual({ type: "linkedProperty", linkedFilterState: EXACT_A });
    });

    it("falls back to the deprecated defaultLinkedFilterState", () => {
      expect(
        getSeedFilterState({
          ...LINKED_BASE,
          defaultLinkedFilterState: EXACT_A,
        }),
      ).toEqual({ type: "linkedProperty", linkedFilterState: EXACT_A });
    });

    it("prefers defaultFilterState over defaultLinkedFilterState", () => {
      expect(
        getSeedFilterState({
          ...LINKED_BASE,
          defaultFilterState: EXACT_A,
          defaultLinkedFilterState: EXACT_B,
        }),
      ).toEqual({ type: "linkedProperty", linkedFilterState: EXACT_A });
    });

    it("ignores linkedFilterState and the wrapper-shaped filterState", () => {
      expect(
        getSeedFilterState({ ...LINKED_BASE, linkedFilterState: EXACT_A }),
      ).toBeUndefined();

      expect(
        getSeedFilterState({
          ...LINKED_BASE,
          filterState: { type: "linkedProperty", linkedFilterState: EXACT_A },
        }),
      ).toBeUndefined();
    });

    it("returns undefined when the definition seeds nothing", () => {
      expect(getSeedFilterState(LINKED_BASE)).toBeUndefined();
    });

    it("seeds from the deprecated linkedFilterComponent spelling", () => {
      expect(
        getSeedFilterState({
          type: "LINKED_PROPERTY",
          linkName: "primaryOffice",
          linkedPropertyKey: "name",
          linkedFilterComponent: "LISTOGRAM",
          defaultFilterState: EXACT_A,
        }),
      ).toEqual({ type: "linkedProperty", linkedFilterState: EXACT_A });
    });

    // Such a definition renders as unsupported, so seeding it would narrow the
    // object set off a filter the user can neither see nor clear.
    it("does not seed when neither component field is set", () => {
      expect(
        getSeedFilterState({
          type: "LINKED_PROPERTY",
          linkName: "primaryOffice",
          linkedPropertyKey: "name",
          defaultFilterState: EXACT_A,
        }),
      ).toBeUndefined();
    });
  });
});
