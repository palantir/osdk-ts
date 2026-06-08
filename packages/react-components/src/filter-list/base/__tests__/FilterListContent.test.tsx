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

import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createPropertyFilterDef } from "../../__tests__/testUtils.js";
import type { FilterDefinitionUnion } from "../../FilterListApi.js";
import type { FilterState } from "../../FilterListItemApi.js";
import { getEmptyDisplayState } from "../../utils/emptyFilterDisplayState.js";
import { getFilterKey } from "../../utils/getFilterKey.js";
import { getFilterLabel } from "../../utils/getFilterLabel.js";
import type { RenderFilterInput } from "../BaseFilterListApi.js";
import { FilterListContent } from "../FilterListContent.js";

afterEach(cleanup);

type TestDef = FilterDefinitionUnion<any>;

const stubRenderInput: RenderFilterInput<TestDef> = ({ filterState }) => (
  <div data-testid="filter-input">{JSON.stringify(filterState ?? null)}</div>
);

describe("FilterListContent", () => {
  describe("getEmptyDisplayState fallback", () => {
    it("uses stored filter state when present rather than the empty fallback", () => {
      const def = createPropertyFilterDef(
        "dept",
        "MULTI_SELECT",
        { type: "SELECT", selectedValues: [] },
      );
      const storedState: FilterState = {
        type: "SELECT",
        selectedValues: ["Engineering"],
      };
      const states = new Map<string, FilterState>([
        [getFilterKey(def), storedState],
      ]);

      render(
        <FilterListContent
          filterDefinitions={[def]}
          filterStates={states}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          getEmptyDisplayState={getEmptyDisplayState}
        />,
      );

      // The stored selectedValues should reach renderInput, not the empty fallback.
      expect(screen.getByTestId("filter-input").textContent).toContain(
        "Engineering",
      );
    });

    it("passes the empty fallback state to renderInput when no state is stored", () => {
      const def = createPropertyFilterDef(
        "dept",
        "MULTI_SELECT",
        { type: "SELECT", selectedValues: [] },
      );

      render(
        <FilterListContent
          filterDefinitions={[def]}
          filterStates={new Map()}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          getEmptyDisplayState={getEmptyDisplayState}
        />,
      );

      // The fallback for MULTI_SELECT is { type: "SELECT", selectedValues: [] }.
      expect(screen.getByTestId("filter-input").textContent).toEqual(
        JSON.stringify({ type: "SELECT", selectedValues: [] }),
      );
    });

    it("renders the more-action … toggle for an empty MULTI_SELECT via the fallback", () => {
      const def = createPropertyFilterDef(
        "dept",
        "MULTI_SELECT",
        { type: "SELECT", selectedValues: [] },
      );

      render(
        <FilterListContent
          filterDefinitions={[def]}
          filterStates={new Map()}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          getEmptyDisplayState={getEmptyDisplayState}
        />,
      );

      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });

    it("does not render the more-action toggle when getEmptyDisplayState is omitted", () => {
      const def = createPropertyFilterDef(
        "dept",
        "MULTI_SELECT",
        { type: "SELECT", selectedValues: [] },
      );

      render(
        <FilterListContent
          filterDefinitions={[def]}
          filterStates={new Map()}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
        />,
      );

      // No stored state + no fallback → no capability-driven controls.
      expect(
        screen.queryByRole("button", { name: /more actions/i }),
      ).toBeNull();
    });

    it("passes undefined to renderInput for filter components without a fallback (e.g. NUMBER_RANGE)", () => {
      const def = createPropertyFilterDef(
        "age",
        "NUMBER_RANGE",
        { type: "NUMBER_RANGE", minValue: undefined, maxValue: undefined },
      );

      render(
        <FilterListContent
          filterDefinitions={[def]}
          filterStates={new Map()}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          getEmptyDisplayState={getEmptyDisplayState}
        />,
      );

      // NUMBER_RANGE has no more-action controls — fallback returns undefined.
      expect(screen.getByTestId("filter-input").textContent).toEqual("null");
    });

    it("applies the fallback in the sortable branch too", () => {
      const def = createPropertyFilterDef(
        "dept",
        "MULTI_SELECT",
        { type: "SELECT", selectedValues: [] },
      );

      render(
        <FilterListContent
          filterDefinitions={[def]}
          filterStates={new Map()}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          getEmptyDisplayState={getEmptyDisplayState}
          enableSorting={true}
        />,
      );

      // Sortable branch should also pass the empty fallback state through.
      expect(screen.getByTestId("filter-input").textContent).toEqual(
        JSON.stringify({ type: "SELECT", selectedValues: [] }),
      );
      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });
  });
});
