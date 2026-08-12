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
import { getSeedFilterState } from "../getSeedFilterState.js";

type Def = FilterDefinitionUnion<typeof MockObjectType>;

const EXACT_A = { type: "EXACT_MATCH", values: ["a"] } as const;
const EXACT_B = { type: "EXACT_MATCH", values: ["b"] } as const;
const EMPTY_CUSTOM = { type: "custom", customState: {} } as const;

function def(fields: Record<string, unknown>): Def {
  return fields as unknown as Def;
}

function propertyDef(fields: Record<string, unknown>): Def {
  return def({
    type: "PROPERTY",
    key: "name",
    filterComponent: "LISTOGRAM",
    ...fields,
  });
}

function customDef(fields: Record<string, unknown>): Def {
  return def({
    type: "CUSTOM",
    key: "custom",
    filterComponent: "CUSTOM",
    toWhereClause: () => ({}),
    ...fields,
  });
}

function linkedDef(fields: Record<string, unknown>): Def {
  return def({
    type: "LINKED_PROPERTY",
    linkName: "primaryOffice",
    linkedPropertyKey: "name",
    filterComponent: "LISTOGRAM",
    ...fields,
  });
}

describe("getSeedFilterState", () => {
  describe("kinds that store the state directly", () => {
    it("reads defaultFilterState", () => {
      expect(
        getSeedFilterState(propertyDef({ defaultFilterState: EXACT_A })),
      ).toEqual(EXACT_A);
    });

    it("falls back to the deprecated filterState", () => {
      expect(getSeedFilterState(propertyDef({ filterState: EXACT_A }))).toEqual(
        EXACT_A,
      );
    });

    it("prefers defaultFilterState when both are set", () => {
      expect(
        getSeedFilterState(
          propertyDef({ defaultFilterState: EXACT_A, filterState: EXACT_B }),
        ),
      ).toEqual(EXACT_A);
    });

    it("returns undefined when the definition seeds nothing", () => {
      expect(getSeedFilterState(propertyDef({}))).toBeUndefined();
    });

    // CUSTOM seeds from the same two fields as PROPERTY/STATIC_VALUES, so the
    // deprecated rename is behavior-preserving here too.
    it.each([
      ["defaultFilterState", { defaultFilterState: EMPTY_CUSTOM }],
      ["the deprecated filterState", { filterState: EMPTY_CUSTOM }],
    ])("seeds CUSTOM from %s", (_label, fields) => {
      expect(getSeedFilterState(customDef(fields))).toEqual(EMPTY_CUSTOM);
    });

    it("prefers defaultFilterState over filterState on CUSTOM", () => {
      expect(
        getSeedFilterState(
          customDef({
            defaultFilterState: EMPTY_CUSTOM,
            filterState: { type: "custom", customState: { v: "loses" } },
          }),
        ),
      ).toEqual(EMPTY_CUSTOM);
    });
  });

  describe("kinds where filterState has never seeded", () => {
    // Reading it would silently activate filters in existing apps, since it
    // used to be required and so is set on essentially every definition.
    it.each([
      [
        "HAS_LINK",
        { type: "HAS_LINK", linkName: "primaryOffice" },
        {
          type: "hasLink",
          hasLink: true,
        },
      ],
      [
        "KEYWORD_SEARCH",
        { type: "KEYWORD_SEARCH", properties: ["name"] },
        {
          type: "keywordSearch",
          searchTerm: "stray",
          operator: "AND",
        },
      ],
    ])("ignores filterState on %s", (_kind, base, filterState) => {
      expect(getSeedFilterState(def({ ...base, filterState }))).toBeUndefined();
      expect(
        getSeedFilterState(def({ ...base, defaultFilterState: filterState })),
      ).toEqual(filterState);
    });
  });

  describe("LINKED_PROPERTY", () => {
    it("wraps the inner defaultFilterState", () => {
      expect(
        getSeedFilterState(linkedDef({ defaultFilterState: EXACT_A })),
      ).toEqual({ type: "linkedProperty", linkedFilterState: EXACT_A });
    });

    it("falls back to the deprecated defaultLinkedFilterState", () => {
      expect(
        getSeedFilterState(linkedDef({ defaultLinkedFilterState: EXACT_A })),
      ).toEqual({ type: "linkedProperty", linkedFilterState: EXACT_A });
    });

    it("prefers defaultFilterState over defaultLinkedFilterState", () => {
      expect(
        getSeedFilterState(
          linkedDef({
            defaultFilterState: EXACT_A,
            defaultLinkedFilterState: EXACT_B,
          }),
        ),
      ).toEqual({ type: "linkedProperty", linkedFilterState: EXACT_A });
    });

    it("ignores linkedFilterState and the wrapper-shaped filterState", () => {
      expect(
        getSeedFilterState(linkedDef({ linkedFilterState: EXACT_A })),
      ).toBeUndefined();

      expect(
        getSeedFilterState(
          linkedDef({
            filterState: { type: "linkedProperty", linkedFilterState: EXACT_A },
          }),
        ),
      ).toBeUndefined();
    });

    it("returns undefined when the definition seeds nothing", () => {
      expect(getSeedFilterState(linkedDef({}))).toBeUndefined();
    });

    it("seeds from the deprecated linkedFilterComponent spelling", () => {
      expect(
        getSeedFilterState(
          def({
            type: "LINKED_PROPERTY",
            linkName: "primaryOffice",
            linkedPropertyKey: "name",
            linkedFilterComponent: "LISTOGRAM",
            defaultFilterState: EXACT_A,
          }),
        ),
      ).toEqual({ type: "linkedProperty", linkedFilterState: EXACT_A });
    });

    // Such a definition renders as unsupported, so seeding it would narrow the
    // object set off a filter the user can neither see nor clear.
    it("does not seed when neither component field is set", () => {
      expect(
        getSeedFilterState(
          def({
            type: "LINKED_PROPERTY",
            linkName: "primaryOffice",
            linkedPropertyKey: "name",
            defaultFilterState: EXACT_A,
          }),
        ),
      ).toBeUndefined();
    });
  });
});
