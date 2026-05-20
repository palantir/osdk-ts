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
  waitFor,
} from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type {
  FilterActionsConfig,
  FilterState,
} from "../../FilterListItemApi.js";
import type { RenderFilterInput } from "../BaseFilterListApi.js";
import { FilterListItem } from "../FilterListItem.js";

afterEach(cleanup);

interface StubDefinition {
  kind: string;
  actions?: FilterActionsConfig;
}

const stubRenderInput: RenderFilterInput<StubDefinition> = ({
  definition,
}) => <div data-testid={`filter-input-${definition.kind}`} />;

function renderItem({
  filterState,
  onFilterStateChanged = vi.fn(),
  onFilterRemoved,
  actions,
  label = "Test Filter",
  kind = "test",
}: {
  filterState?: FilterState;
  onFilterStateChanged?: (key: string, state: FilterState) => void;
  onFilterRemoved?: (key: string) => void;
  actions?: FilterActionsConfig;
  label?: string;
  kind?: string;
}) {
  return render(
    <FilterListItem<StubDefinition>
      definition={{ kind }}
      filterKey="test-key"
      label={label}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      onFilterRemoved={onFilterRemoved}
      renderInput={stubRenderInput}
      actions={actions}
    />,
  );
}

function openOverflowMenu(): HTMLElement {
  const trigger = screen.getByRole("button", { name: /More actions/i });
  fireEvent.click(trigger);
  return trigger;
}

describe("FilterListItem", () => {
  describe("overflow menu trigger", () => {
    it.each<[string, FilterState | undefined]>([
      [
        "LISTOGRAM",
        { type: "EXACT_MATCH", values: [] } satisfies FilterState,
      ],
      [
        "MULTI_SELECT",
        { type: "SELECT", selectedValues: [] } satisfies FilterState,
      ],
      [
        "NUMBER_RANGE",
        {
          type: "NUMBER_RANGE",
          minValue: undefined,
          maxValue: undefined,
        } satisfies FilterState,
      ],
      [
        "DATE_RANGE",
        {
          type: "DATE_RANGE",
          minValue: undefined,
          maxValue: undefined,
        } satisfies FilterState,
      ],
      [
        "TIMELINE",
        {
          type: "TIMELINE",
          startDate: undefined,
          endDate: undefined,
        } satisfies FilterState,
      ],
      [
        "TOGGLE",
        { type: "TOGGLE", enabled: false } satisfies FilterState,
      ],
      [
        "HAS_LINK",
        { type: "hasLink", hasLink: false } satisfies FilterState,
      ],
      [
        "LINKED_PROPERTY (wrapping TOGGLE)",
        {
          type: "linkedProperty",
          linkedFilterState: { type: "TOGGLE", enabled: false },
        } satisfies FilterState,
      ],
    ])(
      "always renders the overflow trigger for %s",
      (_, filterState) => {
        renderItem({ filterState, onFilterRemoved: vi.fn() });
        expect(screen.getByRole("button", { name: /More actions/i }))
          .toBeDefined();
      },
    );

    it("does not render the standalone X button when remove is in the menu", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        onFilterRemoved: vi.fn(),
      });
      expect(
        screen.queryByRole("button", { name: /Remove Test Filter filter/i }),
      ).toBeNull();
    });
  });

  describe("overflow menu contents", () => {
    it("offers Keep/Exclude when the filter supports excluding", async () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
        onFilterRemoved: vi.fn(),
      });
      openOverflowMenu();

      await waitFor(() => {
        expect(screen.getByRole("menuitem", { name: /Keep matching/ }))
          .toBeDefined();
        expect(screen.getByRole("menuitem", { name: /Exclude matching/ }))
          .toBeDefined();
      });
    });

    it(
      "offers Keep/Exclude on a linkedProperty wrapping a SELECT filter",
      async () => {
        renderItem({
          filterState: {
            type: "linkedProperty",
            linkedFilterState: { type: "SELECT", selectedValues: ["x"] },
          },
        });
        openOverflowMenu();

        await waitFor(() => {
          expect(screen.getByRole("menuitem", { name: /Keep matching/ }))
            .toBeDefined();
          expect(screen.getByRole("menuitem", { name: /Exclude matching/ }))
            .toBeDefined();
        });
      },
    );

    it(
      "does not offer Keep/Exclude when the inner filter cannot exclude",
      async () => {
        renderItem({
          filterState: {
            type: "linkedProperty",
            linkedFilterState: {
              type: "NUMBER_RANGE",
              minValue: 0,
              maxValue: 10,
            },
          },
        });
        openOverflowMenu();

        await waitFor(() => {
          expect(screen.queryByRole("menuitem", { name: /Keep matching/ }))
            .toBeNull();
        });
      },
    );

    it("offers Remove filter when onFilterRemoved is provided", async () => {
      const onFilterRemoved = vi.fn();
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        onFilterRemoved,
      });
      openOverflowMenu();

      const removeItem = await screen.findByRole(
        "menuitem",
        { name: /Remove filter/ },
      );
      fireEvent.click(removeItem);
      expect(onFilterRemoved).toHaveBeenCalledWith("test-key");
    });

    it("hides Remove filter when onFilterRemoved is omitted", async () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["x"] },
      });
      openOverflowMenu();

      await waitFor(() => {
        expect(
          screen.queryByRole("menuitem", { name: /Remove filter/ }),
        ).toBeNull();
      });
    });

    it("offers Clear all selections when a selection is present", async () => {
      const onFilterStateChanged = vi.fn();
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a", "b"] },
        onFilterStateChanged,
      });
      openOverflowMenu();

      const clearItem = await screen.findByRole("menuitem", {
        name: /Clear all selections/,
      });
      fireEvent.click(clearItem);
      expect(onFilterStateChanged).toHaveBeenCalledWith("test-key", {
        type: "SELECT",
        selectedValues: [],
      });
    });

    it(
      "offers Clear all selections on a linkedProperty filter with an active inner selection",
      async () => {
        const onFilterStateChanged = vi.fn();
        renderItem({
          filterState: {
            type: "linkedProperty",
            linkedFilterState: {
              type: "EXACT_MATCH",
              values: ["alpha"],
            },
          },
          onFilterStateChanged,
        });
        openOverflowMenu();

        const clearItem = await screen.findByRole("menuitem", {
          name: /Clear all selections/,
        });
        fireEvent.click(clearItem);
        expect(onFilterStateChanged).toHaveBeenCalledWith("test-key", {
          type: "linkedProperty",
          linkedFilterState: {
            type: "EXACT_MATCH",
            values: [],
          },
        });
      },
    );

    it("hides Clear all selections when no selection is present", async () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        onFilterRemoved: vi.fn(),
      });
      openOverflowMenu();

      await waitFor(() => {
        expect(
          screen.queryByRole("menuitem", { name: /Clear all selections/ }),
        ).toBeNull();
      });
    });
  });

  describe("Keep/Exclude toggle", () => {
    it("toggles isExcluding on a regular filter", async () => {
      const onFilterStateChanged = vi.fn();
      renderItem({
        filterState: { type: "SELECT", selectedValues: ["a"] },
        onFilterStateChanged,
      });
      openOverflowMenu();

      const excludeItem = await screen.findByRole("menuitem", {
        name: /Exclude matching/,
      });
      fireEvent.click(excludeItem);
      expect(onFilterStateChanged).toHaveBeenCalledWith("test-key", {
        type: "SELECT",
        selectedValues: ["a"],
        isExcluding: true,
      });
    });

    it(
      "toggles isExcluding on the INNER linkedFilterState, not the wrapper",
      async () => {
        const onFilterStateChanged = vi.fn();
        renderItem({
          filterState: {
            type: "linkedProperty",
            linkedFilterState: {
              type: "SELECT",
              selectedValues: ["beta"],
              isExcluding: false,
            },
          },
          onFilterStateChanged,
        });
        openOverflowMenu();

        const excludeItem = await screen.findByRole("menuitem", {
          name: /Exclude matching/,
        });
        fireEvent.click(excludeItem);

        expect(onFilterStateChanged).toHaveBeenCalledWith("test-key", {
          type: "linkedProperty",
          linkedFilterState: {
            type: "SELECT",
            selectedValues: ["beta"],
            isExcluding: true,
          },
        });
      },
    );
  });

  describe("actions config", () => {
    it("hides the search monocle when actions.search is false", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
        actions: { search: false },
      });
      expect(screen.queryByRole("button", { name: /Search values/i }))
        .toBeNull();
    });

    it(
      "keeps the overflow trigger even when the monocle is hidden",
      () => {
        renderItem({
          filterState: { type: "SELECT", selectedValues: [] },
          actions: { search: false },
        });
        expect(screen.getByRole("button", { name: /More actions/i }))
          .toBeDefined();
      },
    );

    it("renders the monocle by default for searchable filter types", () => {
      renderItem({
        filterState: { type: "SELECT", selectedValues: [] },
      });
      expect(screen.getByRole("button", { name: /Search values/i }))
        .toBeDefined();
    });

    it(
      "renders the remove button in the header when actions.remove is true",
      () => {
        const onFilterRemoved = vi.fn();
        renderItem({
          filterState: { type: "SELECT", selectedValues: [] },
          actions: { remove: true },
          onFilterRemoved,
        });
        const headerRemove = screen.getByRole("button", {
          name: /Remove Test Filter filter/i,
        });
        fireEvent.click(headerRemove);
        expect(onFilterRemoved).toHaveBeenCalledWith("test-key");
      },
    );

    it(
      "omits remove from the overflow menu when actions.remove is true",
      async () => {
        renderItem({
          filterState: { type: "SELECT", selectedValues: [] },
          actions: { remove: true },
          onFilterRemoved: vi.fn(),
        });
        openOverflowMenu();
        await waitFor(() => {
          expect(
            screen.queryByRole("menuitem", { name: /Remove filter/ }),
          ).toBeNull();
        });
      },
    );

    it(
      "hides remove entirely when actions.remove is false",
      async () => {
        renderItem({
          filterState: { type: "SELECT", selectedValues: ["x"] },
          actions: { remove: false },
          onFilterRemoved: vi.fn(),
        });
        // No header X
        expect(
          screen.queryByRole("button", { name: /Remove Test Filter filter/i }),
        ).toBeNull();
        // No menu item either
        openOverflowMenu();
        await waitFor(() => {
          expect(
            screen.queryByRole("menuitem", { name: /Remove filter/ }),
          ).toBeNull();
        });
      },
    );

    it(
      "hides the overflow trigger entirely when actions.overflow is false",
      () => {
        renderItem({
          filterState: { type: "SELECT", selectedValues: ["x"] },
          actions: { overflow: false },
          onFilterRemoved: vi.fn(),
        });
        expect(screen.queryByRole("button", { name: /More actions/i }))
          .toBeNull();
      },
    );
  });
});
