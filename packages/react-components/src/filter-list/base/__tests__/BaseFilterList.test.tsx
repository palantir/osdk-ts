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

import type { FilterDefinitionUnion } from "../../FilterListApi.js";
import type { FilterState } from "../../FilterListItemApi.js";
import { getFilterKey } from "../../utils/getFilterKey.js";
import { getFilterLabel } from "../../utils/getFilterLabel.js";
import { BaseFilterList } from "../BaseFilterList.js";
import type { RenderFilterInput } from "../BaseFilterListApi.js";

afterEach(cleanup);

type TestDef = FilterDefinitionUnion<any>;

const EMPTY_STATES = new Map<string, FilterState>();

const stubRenderInput: RenderFilterInput<TestDef> = () => (
  <div data-testid="filter-input" />
);

function renderBase(
  props: Partial<React.ComponentProps<typeof BaseFilterList<TestDef>>> = {},
): ReturnType<typeof render> {
  return render(
    <BaseFilterList<TestDef>
      filterStates={EMPTY_STATES}
      onFilterStateChanged={vi.fn()}
      renderInput={stubRenderInput}
      getFilterKey={getFilterKey}
      getFilterLabel={getFilterLabel}
      activeFilterCount={0}
      {...props}
    />,
  );
}

/** The collapsed rail is the only element carrying `data-collapsed`. */
function getRail(): HTMLElement | null {
  return document.querySelector('[data-collapsed="true"]');
}

function isCollapsed(): boolean {
  return getRail() != null;
}

/** Only ever called while expanded, where the rail is absent and the label is unique. */
function getCollapseButton(): HTMLElement {
  return screen.getByRole("button", { name: "Collapse filters" });
}

/**
 * Scoped to the rail: the header stays mounted while collapsed (hidden via CSS,
 * which jsdom does not apply) and its toggle carries the same label.
 */
function getExpandButton(): HTMLElement {
  const rail = getRail();
  if (rail == null) {
    throw new Error("Expected the collapsed rail to be rendered");
  }
  return within(rail).getByRole("button", { name: "Expand filters" });
}

describe("BaseFilterList", () => {
  describe("collapse without onCollapsedChange", () => {
    it("renders collapsed when defaultCollapsed is set and no handler is supplied", () => {
      renderBase({ defaultCollapsed: true });
      expect(isCollapsed()).toBe(true);
    });

    it("renders the collapse button when no handler is supplied", () => {
      renderBase();
      expect(getCollapseButton()).toBeDefined();
    });

    it("collapses and expands on its own with no handler supplied", () => {
      renderBase();
      expect(isCollapsed()).toBe(false);

      fireEvent.click(getCollapseButton());
      expect(isCollapsed()).toBe(true);

      fireEvent.click(getExpandButton());
      expect(isCollapsed()).toBe(false);
    });
  });

  describe("onCollapsedChange as an observer", () => {
    it("fires on collapse and expand while the component owns the state", () => {
      const onCollapsedChange = vi.fn();
      renderBase({ onCollapsedChange });

      fireEvent.click(getCollapseButton());
      expect(onCollapsedChange).toHaveBeenLastCalledWith(true);
      expect(isCollapsed()).toBe(true);

      fireEvent.click(getExpandButton());
      expect(onCollapsedChange).toHaveBeenLastCalledWith(false);
      expect(isCollapsed()).toBe(false);
    });

    it("does not defer to the caller re-rendering with a new value", () => {
      const { rerender } = renderBase({ defaultCollapsed: true });
      expect(isCollapsed()).toBe(true);

      rerender(
        <BaseFilterList<TestDef>
          filterStates={EMPTY_STATES}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          activeFilterCount={0}
          defaultCollapsed={false}
        />,
      );
      expect(isCollapsed()).toBe(true);
    });
  });

  describe("enableCollapse", () => {
    it("omits the collapse button and stays expanded when disabled", () => {
      renderBase({ enableCollapse: false, defaultCollapsed: true });
      expect(isCollapsed()).toBe(false);
      expect(
        screen.queryByRole("button", { name: "Collapse filters" }),
      ).toBeNull();
      expect(
        screen.queryByRole("button", { name: "Expand filters" }),
      ).toBeNull();
    });

    it("renders no header at all when collapse is disabled and nothing else needs one", () => {
      renderBase({ enableCollapse: false });
      expect(screen.queryByRole("button")).toBeNull();
    });
  });

  describe("deprecated collapsed prop", () => {
    it("seeds the initial state when defaultCollapsed is absent", () => {
      renderBase({ collapsed: true });
      expect(isCollapsed()).toBe(true);
    });

    it("loses to defaultCollapsed when both are supplied", () => {
      renderBase({ collapsed: true, defaultCollapsed: false });
      expect(isCollapsed()).toBe(false);
    });
  });
});
