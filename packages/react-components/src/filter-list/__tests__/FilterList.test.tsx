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

import { FilterList } from "../FilterList.js";
import {
  createHasLinkFilterDef,
  createLinkedPropertyFilterDef,
  createPropertyFilterDef,
  MockObjectType,
} from "./testUtils.js";

vi.mock("@osdk/react", () => ({
  useOsdkAggregation: vi.fn().mockReturnValue({
    data: [],
    isLoading: false,
    error: null,
    refetch: vi.fn(),
  }),
  useOsdkMetadata: vi.fn(() => ({ loading: false, metadata: undefined })),
  useRegisterUserAgent: vi.fn(),
}));

afterEach(cleanup);

describe("FilterList", () => {
  describe("when filter state is empty, more action controls should display", () => {
    it("keeps the more-action … toggle on a MULTI_SELECT after it is removed and re-added", () => {
      const def = createPropertyFilterDef("dept", "MULTI_SELECT", {
        type: "SELECT",
        selectedValues: [],
      });

      render(
        <FilterList objectType={MockObjectType} filterDefinitions={[def]} />,
      );

      // On first render the … shows from the state buildInitialStates seeds
      // out of `definition.filterState`
      expect(
        screen.getByRole("button", { name: /more actions/iu }),
      ).toBeDefined();

      // Removing clears the stored state and hides the filter.
      fireEvent.click(
        screen.getByRole("button", { name: "Remove dept filter" }),
      );
      expect(
        screen.queryByRole("button", { name: /more actions/iu }),
      ).toBeNull();

      // Re-add it through the "+ Add filter" menu
      fireEvent.click(screen.getByRole("button", { name: /add filter/iu }));
      fireEvent.click(screen.getByRole("menuitem", { name: "dept" }));

      expect(
        screen.getByRole("button", { name: /more actions/iu }),
      ).toBeDefined();
    });

    it("keeps the more-action … toggle on a HAS_LINK filter after it is removed and re-added", () => {
      const def = createHasLinkFilterDef("manager");

      render(
        <FilterList objectType={MockObjectType} filterDefinitions={[def]} />,
      );

      expect(
        screen.getByRole("button", { name: /more actions/iu }),
      ).toBeDefined();

      fireEvent.click(
        screen.getByRole("button", { name: "Remove manager filter" }),
      );
      expect(
        screen.queryByRole("button", { name: /more actions/iu }),
      ).toBeNull();

      fireEvent.click(screen.getByRole("button", { name: /add filter/iu }));
      fireEvent.click(screen.getByRole("menuitem", { name: "manager" }));

      expect(
        screen.getByRole("button", { name: /more actions/iu }),
      ).toBeDefined();
    });

    it("keeps the more-action … toggle on a LINKED_PROPERTY filter after it is removed and re-added", () => {
      const def = createLinkedPropertyFilterDef("manager", "fullName");

      render(
        <FilterList objectType={MockObjectType} filterDefinitions={[def]} />,
      );

      expect(
        screen.getByRole("button", { name: /more actions/iu }),
      ).toBeDefined();

      fireEvent.click(
        screen.getByRole("button", { name: "Remove manager filter" }),
      );
      expect(
        screen.queryByRole("button", { name: /more actions/iu }),
      ).toBeNull();

      fireEvent.click(screen.getByRole("button", { name: /add filter/iu }));
      fireEvent.click(screen.getByRole("menuitem", { name: "manager" }));

      // The linked filter is not seeded either; the … reappears via the
      // getEmptyDisplayState fallback (unwrapped to the inner EXACT_MATCH state).
      expect(
        screen.getByRole("button", { name: /more actions/iu }),
      ).toBeDefined();
    });

    it("does not render the more-action toggle for a freshly added NUMBER_RANGE filter", () => {
      const def = createPropertyFilterDef("age", "NUMBER_RANGE", {
        type: "NUMBER_RANGE",
        minValue: undefined,
        maxValue: undefined,
      });

      render(
        <FilterList objectType={MockObjectType} filterDefinitions={[def]} />,
      );

      expect(
        screen.queryByRole("button", { name: /more actions/iu }),
      ).toBeNull();
    });

    it("opens the keeping/excluding dropdown when the more-action toggle is clicked on an empty MULTI_SELECT", () => {
      const def = createPropertyFilterDef("dept", "MULTI_SELECT", {
        type: "SELECT",
        selectedValues: [],
      });

      render(
        <FilterList objectType={MockObjectType} filterDefinitions={[def]} />,
      );

      fireEvent.click(screen.getByRole("button", { name: /more actions/iu }));

      // After opening, the include/exclude dropdown trigger should be visible.
      expect(screen.getByRole("button", { name: "Keeping" })).toBeDefined();
    });
  });
  describe("visibility and ordering callbacks", () => {
    const ROW_HEIGHT = 50;
    const originalGetBoundingClientRect =
      Element.prototype.getBoundingClientRect;

    // dnd-kit resolves drops from measured rects, and jsdom reports every
    // element as 0x0. Stack the rects so a pointer drag finds a neighbor.
    function stubRowLayout(): void {
      Element.prototype.getBoundingClientRect = function (this: Element) {
        const parent = this.parentElement;
        const index = parent ? Array.from(parent.children).indexOf(this) : 0;
        const top = index * ROW_HEIGHT;
        return {
          x: 0,
          y: top,
          top,
          left: 0,
          right: 200,
          bottom: top + ROW_HEIGHT,
          width: 200,
          height: ROW_HEIGHT,
          toJSON: () => ({}),
        } as DOMRect;
      };
    }

    // dnd-kit swallows the click that follows a drag with a capture-phase
    // `click` listener on the document, torn down on a 50ms timer in
    // PointerSensor.detach(). Outrun it, or every later click in the file gets
    // stopPropagation'd.
    const DND_KIT_CLICK_SUPPRESSION_MS = 50;

    async function dragFirstFilterDown(): Promise<void> {
      const handle = screen.getAllByLabelText(/reorder/iu)[0];
      fireEvent.pointerDown(handle, {
        clientX: 10,
        clientY: 10,
        isPrimary: true,
        button: 0,
        pointerId: 1,
      });
      fireEvent.pointerMove(handle, { clientX: 10, clientY: 40, pointerId: 1 });
      fireEvent.pointerMove(handle, { clientX: 10, clientY: 80, pointerId: 1 });
      fireEvent.pointerUp(handle, { clientX: 10, clientY: 80, pointerId: 1 });
      await new Promise((resolve) => {
        setTimeout(resolve, DND_KIT_CLICK_SUPPRESSION_MS * 2);
      });
    }

    function twoSortableDefs() {
      return [
        createPropertyFilterDef("name", "LISTOGRAM", {
          type: "EXACT_MATCH",
          values: [],
        }),
        createPropertyFilterDef("age", "NUMBER_RANGE", {
          type: "NUMBER_RANGE",
          minValue: undefined,
          maxValue: undefined,
        }),
      ];
    }

    function hiddenDeptDef() {
      return {
        ...createPropertyFilterDef("dept", "MULTI_SELECT", {
          type: "SELECT",
          selectedValues: [],
        }),
        isVisible: false,
      };
    }

    afterEach(() => {
      Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    });

    it("passes the filter key and the unchanged definitions to onFilterAdded", () => {
      const onFilterAdded = vi.fn();
      const definitions = [hiddenDeptDef()];

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={definitions}
          onFilterAdded={onFilterAdded}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /add filter/iu }));
      fireEvent.click(screen.getByRole("menuitem", { name: "dept" }));

      expect(onFilterAdded).toHaveBeenCalledWith("dept", definitions);
    });

    it("reports the shown filter as visible after an add", () => {
      const onFilterVisibilityChange = vi.fn();

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={[hiddenDeptDef()]}
          onFilterVisibilityChange={onFilterVisibilityChange}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /add filter/iu }));
      fireEvent.click(screen.getByRole("menuitem", { name: "dept" }));

      expect(onFilterVisibilityChange).toHaveBeenCalledWith([
        { filterKey: "dept", isVisible: true },
      ]);
    });

    it("renders no add-filter popover in controlled mode, so onFilterAdded never fires", () => {
      const onFilterAdded = vi.fn();

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={[hiddenDeptDef(), ...twoSortableDefs()]}
          addFilterMode="controlled"
          onFilterAdded={onFilterAdded}
        />,
      );

      expect(screen.queryByRole("button", { name: /add filter/iu })).toBeNull();
      expect(onFilterAdded).not.toHaveBeenCalled();
    });

    it("reports the removed filter as hidden in uncontrolled mode", () => {
      const onFilterVisibilityChange = vi.fn();

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={twoSortableDefs()}
          onFilterVisibilityChange={onFilterVisibilityChange}
        />,
      );

      fireEvent.click(
        screen.getByRole("button", { name: "Remove name filter" }),
      );

      expect(onFilterVisibilityChange).toHaveBeenCalledWith([
        { filterKey: "age", isVisible: true },
        { filterKey: "name", isVisible: false },
      ]);
    });

    it("does not report a removal in controlled mode, where nothing is hidden", () => {
      const onFilterRemoved = vi.fn();
      const onFilterVisibilityChange = vi.fn();

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={twoSortableDefs()}
          addFilterMode="controlled"
          onFilterRemoved={onFilterRemoved}
          onFilterVisibilityChange={onFilterVisibilityChange}
        />,
      );

      fireEvent.click(
        screen.getByRole("button", { name: "Remove name filter" }),
      );

      expect(onFilterRemoved).toHaveBeenCalledWith("name");
      expect(onFilterVisibilityChange).not.toHaveBeenCalled();
    });

    it("reports a reorder in controlled mode", async () => {
      stubRowLayout();
      const onFilterVisibilityChange = vi.fn();

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={twoSortableDefs()}
          addFilterMode="controlled"
          enableSorting
          onFilterVisibilityChange={onFilterVisibilityChange}
        />,
      );

      await dragFirstFilterDown();

      expect(onFilterVisibilityChange).toHaveBeenCalledWith([
        { filterKey: "age", isVisible: true },
        { filterKey: "name", isVisible: true },
      ]);
    });

    it("reports a reorder in uncontrolled mode", async () => {
      stubRowLayout();
      const onFilterVisibilityChange = vi.fn();

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={twoSortableDefs()}
          enableSorting
          onFilterVisibilityChange={onFilterVisibilityChange}
        />,
      );

      await dragFirstFilterDown();

      expect(onFilterVisibilityChange).toHaveBeenCalledWith([
        { filterKey: "age", isVisible: true },
        { filterKey: "name", isVisible: true },
      ]);
    });
  });
});
