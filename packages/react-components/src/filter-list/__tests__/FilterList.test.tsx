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

import { FilterList } from "../FilterList.js";
import {
  createHasLinkFilterDef,
  createPropertyFilterDef,
  MockObjectType,
} from "./testUtils.js";

afterEach(cleanup);

describe("FilterList", () => {
  describe("empty-state overflow controls (getEmptyDisplayState wiring)", () => {
    it("renders the overflow … toggle on a freshly added MULTI_SELECT with no stored state", () => {
      const def = createPropertyFilterDef(
        "dept",
        "MULTI_SELECT",
        // Definition default state is empty; useFilterListState seeds only
        // definitions with non-empty filterState into the map, so this filter
        // has no stored state at first render.
        { type: "SELECT", selectedValues: [] },
      );

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={[def]}
        />,
      );

      // Without the getEmptyDisplayState fallback, the overflow toggle would
      // not appear until the user makes a selection.
      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });

    it("renders the overflow … toggle for a HAS_LINK filter with no stored state", () => {
      const def = createHasLinkFilterDef("manager");

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={[def]}
        />,
      );

      // HAS_LINK supports include/exclude via the overflow dropdown.
      expect(
        screen.getByRole("button", { name: /more actions/i }),
      ).toBeDefined();
    });

    it("does not render the overflow toggle for a freshly added NUMBER_RANGE filter", () => {
      const def = createPropertyFilterDef(
        "age",
        "NUMBER_RANGE",
        { type: "NUMBER_RANGE", minValue: undefined, maxValue: undefined },
      );

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={[def]}
        />,
      );

      expect(
        screen.queryByRole("button", { name: /more actions/i }),
      ).toBeNull();
    });

    it("opens the keeping/excluding dropdown when the overflow toggle is clicked on an empty MULTI_SELECT", () => {
      const def = createPropertyFilterDef(
        "dept",
        "MULTI_SELECT",
        { type: "SELECT", selectedValues: [] },
      );

      render(
        <FilterList
          objectType={MockObjectType}
          filterDefinitions={[def]}
        />,
      );

      fireEvent.click(screen.getByRole("button", { name: /more actions/i }));

      // After opening, the include/exclude dropdown trigger should be visible.
      expect(screen.getByRole("button", { name: "Keeping" })).toBeDefined();
    });
  });
});
