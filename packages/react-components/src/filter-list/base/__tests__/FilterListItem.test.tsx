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

import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { FilterState } from "../../FilterListItemApi.js";
import type { RenderFilterInput } from "../BaseFilterListApi.js";
import { FilterListItem } from "../FilterListItem.js";

const renderInputStub: RenderFilterInput<unknown> = ({ filterState }) => (
  <div data-testid="filter-input">{JSON.stringify(filterState ?? null)}</div>
);

interface RenderOptions {
  filterState?: FilterState | undefined;
  onFilterStateChanged?: (filterKey: string, state: FilterState) => void;
  onFilterRemoved?: (filterKey: string) => void;
  searchField?: boolean;
  actions?: Parameters<typeof FilterListItem>[0]["actions"];
}

function renderItem({
  filterState,
  onFilterStateChanged = vi.fn(),
  onFilterRemoved,
  searchField,
  actions,
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
      actions={actions}
    />,
  );
}

function openOverflowMenu() {
  const button = screen.getByRole("button", { name: /more actions/i });
  fireEvent.click(button);
}

describe("FilterListItem", () => {
  afterEach(cleanup);

  describe("standalone X is gone", () => {
    it("does not render a standalone remove X button in the header", () => {
      renderItem({ onFilterRemoved: vi.fn() });
      // The only buttons in the header should be the overflow menu (and
      // search if applicable). No bare "Remove ... filter" header button.
      expect(
        screen.queryByRole("button", { name: /^Remove Department filter$/i }),
      ).toBeNull();
    });
  });

  describe("overflow menu visibility", () => {
    it("renders the overflow menu on a NUMBER_RANGE filter", () => {
      renderItem({
        filterState: { type: "NUMBER_RANGE", minValue: 1, maxValue: 5 },
        onFilterRemoved: vi.fn(),
      });
      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });

    it("renders the overflow menu on a DATE_RANGE filter", () => {
      renderItem({
        filterState: { type: "DATE_RANGE" },
        onFilterRemoved: vi.fn(),
      });
      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });

    it("renders the overflow menu on a TOGGLE filter", () => {
      renderItem({
        filterState: { type: "TOGGLE", enabled: false },
        onFilterRemoved: vi.fn(),
      });
      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });

    it("renders the overflow menu on a HAS_LINK filter", () => {
      renderItem({
        filterState: { type: "hasLink", hasLink: false },
        onFilterRemoved: vi.fn(),
      });
      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });

    it("renders the overflow menu on a linkedProperty filter", () => {
      renderItem({
        filterState: {
          type: "linkedProperty",
          linkedFilterState: { type: "SELECT", selectedValues: ["a"] },
        },
        onFilterRemoved: vi.fn(),
      });
      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });

    it("does not render the overflow menu when no actions apply", () => {
      // No onFilterRemoved, no selection, no exclude support => empty menu
      renderItem({
        filterState: { type: "NUMBER_RANGE" },
      });
      expect(
        screen.queryByRole("button", { name: /more actions/i }),
      ).toBeNull();
    });

    it("hides the overflow menu when actions.overflow is false", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["x"] },
        onFilterRemoved: vi.fn(),
        actions: { overflow: false },
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

    it("omits Remove from the menu when actions.remove is false", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
        onFilterRemoved: vi.fn(),
        actions: { remove: false },
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

    it("actions.search overrides searchField when both are provided", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        searchField: false,
        actions: { search: true },
      });
      expect(
        screen.getByRole("button", { name: /search values/i }),
      ).toBeDefined();
    });

    it("actions.search === false hides monocle even with searchField default", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        actions: { search: false },
      });
      expect(
        screen.queryByRole("button", { name: /search values/i }),
      ).toBeNull();
    });
  });

  describe("input renderer", () => {
    it("forwards the filterState to renderInput", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["alpha"] },
      });
      const input = screen.getByTestId("filter-input");
      // within() to scope the assertion to the rendered input slot.
      expect(within(input).getByText(/alpha/)).toBeDefined();
    });
  });

  describe("search placement", () => {
    it("renders the monocle before the label when actions.search is 'header-start'", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        actions: { search: "header-start" },
      });
      const buttons = screen.getAllByRole("button");
      const searchIdx = buttons.findIndex(
        (b) => b.getAttribute("aria-label") === "Search values",
      );
      const labelEl = screen.getByText("Department");
      // The search button must appear in the DOM before the label span.
      const comparison = buttons[searchIdx].compareDocumentPosition(labelEl);
      // Node.DOCUMENT_POSITION_FOLLOWING === 4
      expect(comparison & 4).toBeGreaterThan(0);
    });

    it("renders the monocle after the label when actions.search is 'header-end'", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        actions: { search: "header-end" },
      });
      const searchButton = screen.getByRole("button", {
        name: /search values/i,
      });
      const labelEl = screen.getByText("Department");
      // Search button comes AFTER the label.
      const comparison = labelEl.compareDocumentPosition(searchButton);
      expect(comparison & 4).toBeGreaterThan(0);
    });

    it("places the monocle at actions.placement when actions.search is true", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        actions: { search: true, placement: "header-start" },
      });
      const searchButton = screen.getByRole("button", {
        name: /search values/i,
      });
      const labelEl = screen.getByText("Department");
      const comparison = searchButton.compareDocumentPosition(labelEl);
      expect(comparison & 4).toBeGreaterThan(0);
    });

    it("places the monocle at actions.placement when actions.search is omitted", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        actions: { placement: "header-start" },
      });
      const searchButton = screen.getByRole("button", {
        name: /search values/i,
      });
      const labelEl = screen.getByText("Department");
      const comparison = searchButton.compareDocumentPosition(labelEl);
      expect(comparison & 4).toBeGreaterThan(0);
    });

    it("hides the header monocle and surfaces a 'Search values' menu item when actions.search is 'menu'", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        actions: { search: "menu" },
      });
      // No header monocle button.
      expect(
        screen.queryByRole("button", { name: /search values/i }),
      ).toBeNull();
      // But there is a "Search values" item inside the overflow menu.
      openOverflowMenu();
      expect(screen.getByText(/Search values/i)).toBeDefined();
    });

    it("opens the inline search row when the 'Search values' menu item is clicked", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        actions: { search: "menu" },
      });
      // Search input is not present yet.
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

    it("hides the in-menu search item when actions.overflow is false", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        actions: { search: "menu", overflow: false },
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
});
