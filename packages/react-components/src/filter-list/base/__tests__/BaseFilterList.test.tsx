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
  describe("collapse is opt-in", () => {
    it("renders no header or collapse control by default", () => {
      renderBase();
      expect(screen.queryByRole("button")).toBeNull();
      expect(isCollapsed()).toBe(false);
    });

    it("stays expanded and warns when defaultCollapsed is set without enableCollapse", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      renderBase({ defaultCollapsed: true });

      expect(isCollapsed()).toBe(false);
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining(
          "`defaultCollapsed` was set but collapse is disabled",
        ),
      );
      warn.mockRestore();
    });

    it("warns naming the deprecated prop when collapsed is set without enableCollapse", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      renderBase({ collapsed: true });

      expect(isCollapsed()).toBe(false);
      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("`collapsed` was set but collapse is disabled"),
      );
      warn.mockRestore();
    });

    it("warns even when the ignored value is false, since it is still inert", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      renderBase({ collapsed: false });

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining("`collapsed` was set but collapse is disabled"),
      );
      warn.mockRestore();
    });

    it("does not warn when no collapse props are supplied at all", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      renderBase();

      expect(warn).not.toHaveBeenCalled();
      warn.mockRestore();
    });
  });

  describe("collapse without onCollapsedChange", () => {
    it("renders collapsed when defaultCollapsed is set and no handler is supplied", () => {
      renderBase({ enableCollapse: true, defaultCollapsed: true });
      expect(isCollapsed()).toBe(true);
    });

    it("renders the collapse button when no handler is supplied", () => {
      renderBase({ enableCollapse: true });
      expect(getCollapseButton()).toBeDefined();
    });

    it("collapses and expands on its own with no handler supplied", () => {
      renderBase({ enableCollapse: true });
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
      renderBase({ enableCollapse: true, onCollapsedChange });

      fireEvent.click(getCollapseButton());
      expect(onCollapsedChange).toHaveBeenLastCalledWith(true);
      expect(isCollapsed()).toBe(true);

      fireEvent.click(getExpandButton());
      expect(onCollapsedChange).toHaveBeenLastCalledWith(false);
      expect(isCollapsed()).toBe(false);
    });

    it("ignores a changed defaultCollapsed after mount", () => {
      const { rerender } = renderBase({
        enableCollapse: true,
        defaultCollapsed: true,
      });
      expect(isCollapsed()).toBe(true);

      rerender(
        <BaseFilterList<TestDef>
          filterStates={EMPTY_STATES}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          activeFilterCount={0}
          enableCollapse={true}
          defaultCollapsed={false}
        />,
      );
      expect(isCollapsed()).toBe(true);
    });
  });

  describe("controlled mode", () => {
    it("renders the value from the collapsed prop", () => {
      renderBase({ enableCollapse: true, collapsed: true });
      expect(isCollapsed()).toBe(true);
    });

    it("does not move on its own when the caller ignores the callback", () => {
      const onCollapsedChange = vi.fn();
      renderBase({ enableCollapse: true, collapsed: false, onCollapsedChange });

      fireEvent.click(getCollapseButton());

      expect(onCollapsedChange).toHaveBeenCalledWith(true);
      expect(isCollapsed()).toBe(false);
    });

    it("fires the callback even with no controlled value change", () => {
      const onCollapsedChange = vi.fn();
      renderBase({ enableCollapse: true, collapsed: true, onCollapsedChange });

      fireEvent.click(getExpandButton());
      expect(onCollapsedChange).toHaveBeenCalledWith(false);
    });

    it("follows the caller re-rendering with a new value", () => {
      const { rerender } = renderBase({
        enableCollapse: true,
        collapsed: false,
      });
      expect(isCollapsed()).toBe(false);

      rerender(
        <BaseFilterList<TestDef>
          filterStates={EMPTY_STATES}
          onFilterStateChanged={vi.fn()}
          renderInput={stubRenderInput}
          getFilterKey={getFilterKey}
          getFilterLabel={getFilterLabel}
          activeFilterCount={0}
          enableCollapse={true}
          collapsed={true}
        />,
      );
      expect(isCollapsed()).toBe(true);
    });

    it("takes precedence over defaultCollapsed", () => {
      renderBase({
        enableCollapse: true,
        collapsed: false,
        defaultCollapsed: true,
      });
      expect(isCollapsed()).toBe(false);
    });

    it("works without onCollapsedChange, which is only a listener", () => {
      renderBase({ enableCollapse: true, collapsed: true });
      expect(isCollapsed()).toBe(true);
      expect(getExpandButton()).toBeDefined();
    });
  });

  describe("enableCollapse", () => {
    it("omits the collapse button and stays expanded when explicitly disabled", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      renderBase({ enableCollapse: false, defaultCollapsed: true });

      expect(isCollapsed()).toBe(false);
      expect(
        screen.queryByRole("button", { name: "Collapse filters" }),
      ).toBeNull();
      expect(
        screen.queryByRole("button", { name: "Expand filters" }),
      ).toBeNull();
      warn.mockRestore();
    });

    it("still renders a header for other reasons when collapse is disabled", () => {
      renderBase({ enableCollapse: false, title: "Filters" });
      expect(screen.getByText("Filters")).toBeDefined();
      expect(
        screen.queryByRole("button", { name: "Collapse filters" }),
      ).toBeNull();
    });
  });

  describe("onCollapsedChange does not gate the control", () => {
    it("renders the collapse button with no handler in either mode", () => {
      renderBase({ enableCollapse: true });
      expect(getCollapseButton()).toBeDefined();
      cleanup();

      renderBase({ enableCollapse: true, collapsed: false });
      expect(getCollapseButton()).toBeDefined();
    });

    it("does not render the control when only the handler is supplied", () => {
      renderBase({ onCollapsedChange: vi.fn() });
      expect(
        screen.queryByRole("button", { name: "Collapse filters" }),
      ).toBeNull();
    });
  });
});
