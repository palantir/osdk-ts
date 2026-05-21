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
import type {
  FilterControlsConfig,
  FilterState,
} from "../../FilterListItemApi.js";
import type { RenderFilterInput } from "../BaseFilterListApi.js";
import { FilterListItem } from "../FilterListItem.js";

interface TestDef {}

const renderInputStub: RenderFilterInput<TestDef> = ({ filterState }) => (
  <div data-testid="filter-input">{JSON.stringify(filterState ?? null)}</div>
);

interface RenderOptions {
  filterState?: FilterState | undefined;
  onFilterStateChanged?: (filterKey: string, state: FilterState) => void;
  onFilterRemoved?: (filterKey: string) => void;
  searchField?: boolean;
  controls?: FilterControlsConfig;
}

function renderItem({
  filterState,
  onFilterStateChanged = vi.fn(),
  onFilterRemoved,
  searchField,
  controls,
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
      controls={controls}
    />,
  );
}

function openOverflowMenu() {
  const button = screen.getByRole("button", { name: /more actions/i });
  fireEvent.click(button);
}

function expectInDomOrder(first: Element, second: Element) {
  expect(
    first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING,
  ).toBeGreaterThan(0);
}

describe("FilterListItem", () => {
  afterEach(cleanup);

  describe("overflow menu visibility", () => {
    it("renders the overflow menu for filters with at least one action", () => {
      renderItem({
        filterState: { type: "NUMBER_RANGE", minValue: 1, maxValue: 5 },
        onFilterRemoved: vi.fn(),
      });
      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });

    it("does not render the overflow menu when no actions apply", () => {
      renderItem({
        filterState: { type: "NUMBER_RANGE" },
      });
      expect(
        screen.queryByRole("button", { name: /more actions/i }),
      ).toBeNull();
    });

    it("hides the overflow menu when controls.overflow is false", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["x"] },
        onFilterRemoved: vi.fn(),
        controls: { overflow: false },
      });
      expect(
        screen.queryByRole("button", { name: /more actions/i }),
      ).toBeNull();
    });
  });

  describe("menu content adapts to capabilities", () => {
    it("shows Keep / Exclude for SELECT and routes the toggle through onFilterStateChanged", () => {
      const onFilterStateChanged = vi.fn();
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
        onFilterStateChanged,
        onFilterRemoved: vi.fn(),
      });
      openOverflowMenu();
      expect(screen.getByText(/Keep matching values/i)).toBeDefined();
      const exclude = screen.getByText(/Exclude matching values/i);
      fireEvent.click(exclude);
      expect(onFilterStateChanged).toHaveBeenCalledWith("department", {
        type: "SELECT",
        selectedValues: ["a"],
        isExcluding: true,
      });
    });

    it("does not show Keep / Exclude for NUMBER_RANGE (excluding unsupported)", () => {
      renderItem({
        filterState: { type: "NUMBER_RANGE", minValue: 1 },
        onFilterRemoved: vi.fn(),
      });
      openOverflowMenu();
      expect(screen.queryByText(/Keep matching values/i)).toBeNull();
    });

    it("clicking the active Keep/Exclude option is a no-op", () => {
      const onFilterStateChanged = vi.fn();
      renderItem({
        filterState: {
          type: "SELECT",
          selectedValues: ["a"],
          isExcluding: false,
        },
        onFilterStateChanged,
        onFilterRemoved: vi.fn(),
      });
      openOverflowMenu();
      fireEvent.click(screen.getByText(/Keep matching values/i));
      expect(onFilterStateChanged).not.toHaveBeenCalled();
    });

    it("does not show Clear all selections when SELECT is empty", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        onFilterRemoved: vi.fn(),
      });
      openOverflowMenu();
      expect(screen.queryByText(/Clear all selections/i)).toBeNull();
    });

    it("clears SELECT values via the menu, preserving isExcluding", () => {
      const onFilterStateChanged = vi.fn();
      renderItem({
        filterState: {
          type: "SELECT",
          selectedValues: ["x"],
          isExcluding: true,
        },
        onFilterStateChanged,
        onFilterRemoved: vi.fn(),
      });
      openOverflowMenu();
      const clearAll = screen.getByText(/Clear all selections/i);
      fireEvent.click(clearAll);
      expect(onFilterStateChanged).toHaveBeenCalledWith("department", {
        type: "SELECT",
        selectedValues: [],
        isExcluding: true,
      });
    });

    it("includes Clear all selections for linkedProperty when inner state has values", () => {
      const onFilterStateChanged = vi.fn();
      renderItem({
        filterState: {
          type: "linkedProperty",
          linkedFilterState: {
            type: "SELECT",
            selectedValues: ["Research"],
            isExcluding: true,
          },
        },
        onFilterStateChanged,
        onFilterRemoved: vi.fn(),
      });
      openOverflowMenu();
      const clearAll = screen.getByText(/Clear all selections/i);
      fireEvent.click(clearAll);
      expect(onFilterStateChanged).toHaveBeenCalledWith("department", {
        type: "linkedProperty",
        linkedFilterState: {
          type: "SELECT",
          selectedValues: [],
          isExcluding: true,
        },
      });
    });

    it("renders Remove filter in the menu when onFilterRemoved is provided", () => {
      const onFilterRemoved = vi.fn();
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
        onFilterRemoved,
      });
      openOverflowMenu();
      const remove = screen.getByLabelText(/Remove Department filter/i);
      fireEvent.click(remove);
      expect(onFilterRemoved).toHaveBeenCalledWith("department");
    });

    it("omits Remove from the menu when controls.remove is false", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
        onFilterRemoved: vi.fn(),
        controls: { remove: false },
      });
      openOverflowMenu();
      expect(screen.queryByLabelText(/Remove Department filter/i)).toBeNull();
    });
  });

  describe("linkedProperty Keep / Exclude routes through inner state", () => {
    it("toggles isExcluding on the inner state, re-wrapped with linkedProperty", () => {
      const onFilterStateChanged = vi.fn();
      renderItem({
        filterState: {
          type: "linkedProperty",
          linkedFilterState: {
            type: "SELECT",
            selectedValues: ["Research"],
            isExcluding: false,
          },
        },
        onFilterStateChanged,
        onFilterRemoved: vi.fn(),
      });
      openOverflowMenu();
      const exclude = screen.getByText(/Exclude matching values/i);
      fireEvent.click(exclude);
      expect(onFilterStateChanged).toHaveBeenCalledWith("department", {
        type: "linkedProperty",
        linkedFilterState: {
          type: "SELECT",
          selectedValues: ["Research"],
          isExcluding: true,
        },
      });
    });
  });

  describe("search affordance opt-out", () => {
    it("renders the header monocle by default for SELECT", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
      });
      expect(
        screen.getByRole("button", { name: /search values/i }),
      ).toBeDefined();
    });

    it("hides the monocle when searchField is false", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        searchField: false,
      });
      expect(
        screen.queryByRole("button", { name: /search values/i }),
      ).toBeNull();
    });

    it("still renders the overflow menu even when searchField is false", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
        searchField: false,
        onFilterRemoved: vi.fn(),
      });
      expect(
        screen.queryByRole("button", { name: /search values/i }),
      ).toBeNull();
      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });

    it("controls.search overrides searchField when both are provided", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        searchField: false,
        controls: { search: true },
      });
      expect(
        screen.getByRole("button", { name: /search values/i }),
      ).toBeDefined();
    });

    it("controls.search === false hides monocle even with searchField default", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        controls: { search: false },
      });
      expect(
        screen.queryByRole("button", { name: /search values/i }),
      ).toBeNull();
    });
  });

  describe("search placement", () => {
    it("renders the monocle before the label when controls.search is 'header-start'", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        controls: { search: "header-start" },
      });
      const searchButton = screen.getByRole("button", {
        name: /search values/i,
      });
      const labelEl = screen.getByText("Department");
      expectInDomOrder(searchButton, labelEl);
    });

    it("renders the monocle after the label when controls.search is 'header-end'", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        controls: { search: "header-end" },
      });
      const searchButton = screen.getByRole("button", {
        name: /search values/i,
      });
      const labelEl = screen.getByText("Department");
      expectInDomOrder(labelEl, searchButton);
    });

    it("places the monocle at controls.placement when controls.search is true", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        controls: { search: true, placement: "header-start" },
      });
      const searchButton = screen.getByRole("button", {
        name: /search values/i,
      });
      const labelEl = screen.getByText("Department");
      expectInDomOrder(searchButton, labelEl);
    });

    it("places the monocle at controls.placement when controls.search is omitted", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        controls: { placement: "header-start" },
      });
      const searchButton = screen.getByRole("button", {
        name: /search values/i,
      });
      const labelEl = screen.getByText("Department");
      expectInDomOrder(searchButton, labelEl);
    });

    it("hides the header monocle and surfaces a 'Search values' menu item when controls.search is 'menu'", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        controls: { search: "menu" },
      });
      expect(
        screen.queryByRole("button", { name: /search values/i }),
      ).toBeNull();
      openOverflowMenu();
      expect(screen.getByText(/Search values/i)).toBeDefined();
    });

    it("opens the inline search row when the 'Search values' menu item is clicked", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        controls: { search: "menu" },
      });
      expect(
        screen.queryByPlaceholderText(/search property values/i),
      ).toBeNull();
      openOverflowMenu();
      const menuItem = screen.getByText(/Search values/i);
      fireEvent.click(menuItem);
      expect(
        screen.getByPlaceholderText(/search property values/i),
      ).toBeDefined();
    });

    it("hides the in-menu search item when controls.overflow is false", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        controls: { search: "menu", overflow: false },
      });
      // No overflow trigger at all because there's nothing in the menu.
      expect(
        screen.queryByRole("button", { name: /more actions/i }),
      ).toBeNull();
      // Also no header monocle.
      expect(
        screen.queryByRole("button", { name: /search values/i }),
      ).toBeNull();
    });
  });

  describe("overflow placement", () => {
    it("renders the overflow trigger after the label by default", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["x"] },
        onFilterRemoved: vi.fn(),
      });
      const overflowButton = screen.getByRole("button", {
        name: /more actions/i,
      });
      const labelEl = screen.getByText("Department");
      expectInDomOrder(labelEl, overflowButton);
    });

    it("renders the overflow trigger before the label when controls.overflow is 'header-start'", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["x"] },
        onFilterRemoved: vi.fn(),
        controls: { overflow: "header-start" },
      });
      const overflowButton = screen.getByRole("button", {
        name: /more actions/i,
      });
      const labelEl = screen.getByText("Department");
      expectInDomOrder(overflowButton, labelEl);
    });

    it("renders the overflow trigger after the label when controls.overflow is 'header-end'", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["x"] },
        onFilterRemoved: vi.fn(),
        controls: { overflow: "header-end" },
      });
      const overflowButton = screen.getByRole("button", {
        name: /more actions/i,
      });
      const labelEl = screen.getByText("Department");
      expectInDomOrder(labelEl, overflowButton);
    });

    it("places the overflow trigger at controls.placement when controls.overflow is omitted", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["x"] },
        onFilterRemoved: vi.fn(),
        controls: { placement: "header-start" },
      });
      const overflowButton = screen.getByRole("button", {
        name: /more actions/i,
      });
      const labelEl = screen.getByText("Department");
      expectInDomOrder(overflowButton, labelEl);
    });

    it("keeps the overflow trigger at header-end when controls.placement is 'menu'", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["x"] },
        onFilterRemoved: vi.fn(),
        controls: { placement: "menu" },
      });
      const overflowButton = screen.getByRole("button", {
        name: /more actions/i,
      });
      const labelEl = screen.getByText("Department");
      expectInDomOrder(labelEl, overflowButton);
    });

    it("renders search then overflow at header-start when both are placed there", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["x"] },
        onFilterRemoved: vi.fn(),
        controls: { search: "header-start", overflow: "header-start" },
      });
      const searchButton = screen.getByRole("button", {
        name: /search values/i,
      });
      const overflowButton = screen.getByRole("button", {
        name: /more actions/i,
      });
      const labelEl = screen.getByText("Department");
      expectInDomOrder(searchButton, overflowButton);
      expectInDomOrder(overflowButton, labelEl);
    });
  });
});
