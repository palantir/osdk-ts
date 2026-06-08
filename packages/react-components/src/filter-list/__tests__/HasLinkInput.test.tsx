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

import type { ObjectTypeDefinition, WhereClause } from "@osdk/api";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { FilterInput } from "../FilterInput.js";
import type { FilterState } from "../FilterListItemApi.js";
import { createHasLinkFilterDef, MockObjectType } from "./testUtils.js";

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

const EMPTY_WHERE = {} as WhereClause<typeof MockObjectType>;

interface RenderOptions {
  filterState?: FilterState | undefined;
  onFilterStateChanged?: (state: FilterState) => void;
  excludeRowOpen?: boolean;
}

function renderHasLinkInput({
  filterState,
  onFilterStateChanged = vi.fn(),
  excludeRowOpen,
}: RenderOptions = {}) {
  return render(
    <FilterInput
      objectType={MockObjectType as ObjectTypeDefinition}
      definition={createHasLinkFilterDef("manager")}
      filterState={filterState}
      onFilterStateChanged={onFilterStateChanged}
      whereClause={EMPTY_WHERE}
      excludeRowOpen={excludeRowOpen}
    />,
  );
}

afterEach(cleanup);

describe("HasLinkInput", () => {
  describe("toggle behavior", () => {
    it("renders a switch reflecting the current hasLink value", () => {
      renderHasLinkInput({
        filterState: { type: "hasLink", hasLink: true },
      });

      const toggle = screen.getByRole("switch");
      expect(toggle.getAttribute("aria-checked")).toBe("true");
    });

    it("defaults the switch to off when filterState is undefined", () => {
      renderHasLinkInput({ filterState: undefined });

      const toggle = screen.getByRole("switch");
      expect(toggle.getAttribute("aria-checked")).toBe("false");
    });

    it("emits a hasLink state preserving isExcluding when the switch is toggled on", () => {
      const onFilterStateChanged = vi.fn();
      renderHasLinkInput({
        filterState: { type: "hasLink", hasLink: false, isExcluding: true },
        onFilterStateChanged,
      });

      fireEvent.click(screen.getByRole("switch"));

      expect(onFilterStateChanged).toHaveBeenCalledWith({
        type: "hasLink",
        hasLink: true,
        isExcluding: true,
      });
    });

    it("emits hasLink=true with isExcluding=false when undefined initial state is toggled", () => {
      const onFilterStateChanged = vi.fn();
      renderHasLinkInput({
        filterState: undefined,
        onFilterStateChanged,
      });

      fireEvent.click(screen.getByRole("switch"));

      expect(onFilterStateChanged).toHaveBeenCalledWith({
        type: "hasLink",
        hasLink: true,
        isExcluding: false,
      });
    });
  });

  describe("exclude row", () => {
    it("renders the keeping/excluding dropdown when excludeRowOpen is true", () => {
      renderHasLinkInput({
        filterState: { type: "hasLink", hasLink: true },
        excludeRowOpen: true,
      });

      expect(screen.getByRole("button", { name: "Keeping" })).toBeDefined();
    });

    it("reflects isExcluding=true on the dropdown label", () => {
      renderHasLinkInput({
        filterState: { type: "hasLink", hasLink: true, isExcluding: true },
        excludeRowOpen: true,
      });

      expect(screen.getByRole("button", { name: "Excluding" })).toBeDefined();
    });

    it("renders Clear all when the filter has an active hasLink=true state", () => {
      renderHasLinkInput({
        filterState: { type: "hasLink", hasLink: true },
        excludeRowOpen: true,
      });

      expect(screen.getByText("Clear all")).toBeDefined();
    });

    it("does not render Clear all when hasLink is false (no active state)", () => {
      renderHasLinkInput({
        filterState: { type: "hasLink", hasLink: false },
        excludeRowOpen: true,
      });

      // hasLink=false means the filter has no active where-clause effect; the
      // Clear all button is gated on filterHasActiveState.
      expect(screen.queryByText("Clear all")).toBeNull();
    });

    it("clears hasLink (preserving isExcluding) when Clear all is clicked", () => {
      const onFilterStateChanged = vi.fn();
      renderHasLinkInput({
        filterState: { type: "hasLink", hasLink: true, isExcluding: true },
        onFilterStateChanged,
        excludeRowOpen: true,
      });

      fireEvent.click(screen.getByText("Clear all"));

      expect(onFilterStateChanged).toHaveBeenCalledWith({
        type: "hasLink",
        hasLink: false,
        isExcluding: true,
      });
    });
  });
});
