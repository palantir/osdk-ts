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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { FilterState } from "../../FilterListItemApi.js";
import type { RenderFilterInput } from "../BaseFilterListApi.js";
import { FilterListItem } from "../FilterListItem.js";

type TestDef = Record<string, never>;

const renderInputStub: RenderFilterInput<TestDef> = ({ filterState }) => (
  <div data-testid="filter-input">{JSON.stringify(filterState ?? null)}</div>
);

interface RenderOptions {
  filterState?: FilterState | undefined;
  onFilterStateChanged?: (filterKey: string, state: FilterState) => void;
  onFilterRemoved?: (filterKey: string) => void;
  searchField?: boolean;
}

function renderItem({
  filterState,
  onFilterStateChanged = vi.fn(),
  onFilterRemoved,
  searchField,
}: RenderOptions) {
  return render(
    <FilterListItem
      definition={{}}
      filterKey="department"
      label="Department"
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      onFilterRemoved={onFilterRemoved}
      renderInput={renderInputStub}
      searchField={searchField}
    />
  );
}

describe("FilterListItem", () => {
  afterEach(cleanup);

  describe("header buttons", () => {
    it("renders the search monocle by default when the filter supports search", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
      });
      expect(
        screen.getByRole("button", { name: /search values/i })
      ).toBeDefined();
    });

    it("hides the search monocle when searchField is false", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        searchField: false,
      });
      expect(
        screen.queryByRole("button", { name: /search values/i })
      ).toBeNull();
    });

    it("does not render the search monocle for filters that do not support search", () => {
      renderItem({
        filterState: { type: "NUMBER_RANGE", minValue: 1, maxValue: 5 },
      });
      expect(
        screen.queryByRole("button", { name: /search values/i })
      ).toBeNull();
    });

    it("renders the Remove button when onFilterRemoved is provided", () => {
      const onFilterRemoved = vi.fn();
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
        onFilterRemoved,
      });
      const removeButton = screen.getByRole("button", {
        name: /remove department filter/i,
      });
      fireEvent.click(removeButton);
      expect(onFilterRemoved).toHaveBeenCalledWith("department");
    });

    it("does not render the Remove button when onFilterRemoved is omitted", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
      });
      expect(
        screen.queryByRole("button", { name: /remove department filter/i })
      ).toBeNull();
    });

    it("renders the overflow toggle for filters that support excluding", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
      });
      expect(
        screen.getByRole("button", { name: /more actions/i })
      ).toBeDefined();
    });

    it("does not render the overflow toggle when excluding is unsupported", () => {
      renderItem({
        filterState: { type: "NUMBER_RANGE", minValue: 1, maxValue: 5 },
      });
      expect(
        screen.queryByRole("button", { name: /more actions/i })
      ).toBeNull();
    });

    it("toggles aria-pressed on the overflow button when clicked", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
      });
      const overflow = screen.getByRole("button", { name: /more actions/i });
      expect(overflow.getAttribute("aria-pressed")).toBe("false");
      fireEvent.click(overflow);
      expect(overflow.getAttribute("aria-pressed")).toBe("true");
      fireEvent.click(overflow);
      expect(overflow.getAttribute("aria-pressed")).toBe("false");
    });
  });

  describe("linkedProperty support", () => {
    it("treats linkedProperty wrapping SELECT as search-capable", () => {
      renderItem({
        filterState: {
          type: "linkedProperty",
          linkedFilterState: {
            type: "SELECT",
            selectedValues: ["Research"],
          },
        },
      });
      expect(
        screen.getByRole("button", { name: /search values/i })
      ).toBeDefined();
    });

    it("treats linkedProperty wrapping SELECT as exclude-capable", () => {
      renderItem({
        filterState: {
          type: "linkedProperty",
          linkedFilterState: {
            type: "SELECT",
            selectedValues: ["Research"],
          },
        },
      });
      expect(
        screen.getByRole("button", { name: /more actions/i })
      ).toBeDefined();
    });

    it("toggles aria-pressed on the overflow button for a linkedProperty filter", () => {
      renderItem({
        filterState: {
          type: "linkedProperty",
          linkedFilterState: {
            type: "SELECT",
            selectedValues: ["Research"],
          },
        },
      });
      const overflow = screen.getByRole("button", { name: /more actions/i });
      expect(overflow.getAttribute("aria-pressed")).toBe("false");
      fireEvent.click(overflow);
      expect(overflow.getAttribute("aria-pressed")).toBe("true");
      fireEvent.click(overflow);
      expect(overflow.getAttribute("aria-pressed")).toBe("false");
    });
  });
});
