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
import {
  createHasLinkFilterDef,
  createLinkedPropertyFilterDef,
  createPropertyFilterDef,
} from "../../__tests__/testUtils.js";
import type { FilterState } from "../../FilterListItemApi.js";
import { getEmptyDisplayState } from "../emptyFilterDisplayState.js";

const ANY_STATE: FilterState = { type: "EXACT_MATCH", values: [] };

describe("getEmptyDisplayState", () => {
  it("returns an empty SELECT for select components", () => {
    expect(
      getEmptyDisplayState(
        createPropertyFilterDef("dept", "MULTI_SELECT", ANY_STATE),
      ),
    ).toEqual({ type: "SELECT", selectedValues: [] });
    expect(
      getEmptyDisplayState(
        createPropertyFilterDef("dept", "SINGLE_SELECT", ANY_STATE),
      ),
    ).toEqual({ type: "SELECT", selectedValues: [] });
  });

  it("returns an empty EXACT_MATCH for listogram/text-tags components", () => {
    expect(
      getEmptyDisplayState(
        createPropertyFilterDef("dept", "LISTOGRAM", ANY_STATE),
      ),
    ).toEqual({ type: "EXACT_MATCH", values: [] });
    expect(
      getEmptyDisplayState(
        createPropertyFilterDef("dept", "TEXT_TAGS", ANY_STATE),
      ),
    ).toEqual({ type: "EXACT_MATCH", values: [] });
  });

  it("returns empty CONTAINS_TEXT and TIMELINE states", () => {
    expect(
      getEmptyDisplayState(
        createPropertyFilterDef("name", "CONTAINS_TEXT", ANY_STATE),
      ),
    ).toEqual({ type: "CONTAINS_TEXT", value: undefined });
    expect(
      getEmptyDisplayState(
        createPropertyFilterDef("createdAt", "TIMELINE", ANY_STATE),
      ),
    ).toEqual({ type: "TIMELINE", startDate: undefined, endDate: undefined });
  });

  it("returns undefined for components without overflow controls", () => {
    for (
      const component of [
        "NUMBER_RANGE",
        "DATE_RANGE",
        "TOGGLE",
        "SINGLE_DATE",
        "MULTI_DATE",
      ] as const
    ) {
      expect(
        getEmptyDisplayState(
          createPropertyFilterDef("p", component, ANY_STATE),
        ),
      ).toBeUndefined();
    }
  });

  it("wraps the empty inner state for LINKED_PROPERTY", () => {
    // createLinkedPropertyFilterDef uses a LISTOGRAM linked component.
    expect(
      getEmptyDisplayState(
        createLinkedPropertyFilterDef("manager", "fullName"),
      ),
    ).toEqual({
      type: "linkedProperty",
      linkedFilterState: { type: "EXACT_MATCH", values: [] },
    });
  });

  it("returns an empty hasLink state for HAS_LINK", () => {
    expect(getEmptyDisplayState(createHasLinkFilterDef("manager")))
      .toEqual({ type: "hasLink", hasLink: false });
  });
});
