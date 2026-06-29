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
        <FilterList objectType={MockObjectType} filterDefinitions={[def]} />
      );

      // On first render the … shows from the state buildInitialStates seeds
      // out of `definition.filterState`
      expect(
        screen.getByRole("button", { name: /more actions/i })
      ).toBeDefined();

      // Removing clears the stored state and hides the filter.
      fireEvent.click(
        screen.getByRole("button", { name: "Remove dept filter" })
      );
      expect(
        screen.queryByRole("button", { name: /more actions/i })
      ).toBeNull();

      // Re-add it through the "+ Add filter" menu
      fireEvent.click(screen.getByRole("button", { name: /add filter/i }));
      fireEvent.click(screen.getByRole("menuitem", { name: "dept" }));

      expect(
        screen.getByRole("button", { name: /more actions/i })
      ).toBeDefined();
    });

    it("keeps the more-action … toggle on a HAS_LINK filter after it is removed and re-added", () => {
      const def = createHasLinkFilterDef("manager");

      render(
        <FilterList objectType={MockObjectType} filterDefinitions={[def]} />
      );

      expect(
        screen.getByRole("button", { name: /more actions/i })
      ).toBeDefined();

      fireEvent.click(
        screen.getByRole("button", { name: "Remove manager filter" })
      );
      expect(
        screen.queryByRole("button", { name: /more actions/i })
      ).toBeNull();

      fireEvent.click(screen.getByRole("button", { name: /add filter/i }));
      fireEvent.click(screen.getByRole("menuitem", { name: "manager" }));

      expect(
        screen.getByRole("button", { name: /more actions/i })
      ).toBeDefined();
    });

    it("keeps the more-action … toggle on a LINKED_PROPERTY filter after it is removed and re-added", () => {
      const def = createLinkedPropertyFilterDef("manager", "fullName");

      render(
        <FilterList objectType={MockObjectType} filterDefinitions={[def]} />
      );

      expect(
        screen.getByRole("button", { name: /more actions/i })
      ).toBeDefined();

      fireEvent.click(
        screen.getByRole("button", { name: "Remove manager filter" })
      );
      expect(
        screen.queryByRole("button", { name: /more actions/i })
      ).toBeNull();

      fireEvent.click(screen.getByRole("button", { name: /add filter/i }));
      fireEvent.click(screen.getByRole("menuitem", { name: "manager" }));

      // The linked filter is not seeded either; the … reappears via the
      // getEmptyDisplayState fallback (unwrapped to the inner EXACT_MATCH state).
      expect(
        screen.getByRole("button", { name: /more actions/i })
      ).toBeDefined();
    });

    it("does not render the more-action toggle for a freshly added NUMBER_RANGE filter", () => {
      const def = createPropertyFilterDef("age", "NUMBER_RANGE", {
        type: "NUMBER_RANGE",
        minValue: undefined,
        maxValue: undefined,
      });

      render(
        <FilterList objectType={MockObjectType} filterDefinitions={[def]} />
      );

      expect(
        screen.queryByRole("button", { name: /more actions/i })
      ).toBeNull();
    });

    it("opens the keeping/excluding dropdown when the more-action toggle is clicked on an empty MULTI_SELECT", () => {
      const def = createPropertyFilterDef("dept", "MULTI_SELECT", {
        type: "SELECT",
        selectedValues: [],
      });

      render(
        <FilterList objectType={MockObjectType} filterDefinitions={[def]} />
      );

      fireEvent.click(screen.getByRole("button", { name: /more actions/i }));

      // After opening, the include/exclude dropdown trigger should be visible.
      expect(screen.getByRole("button", { name: "Keeping" })).toBeDefined();
    });
  });
});
