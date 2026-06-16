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
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AsyncDropdownField } from "../fields/AsyncDropdownField.js";

// useInfiniteScroll uses IntersectionObserver which HappyDOM doesn't implement.
// This mock fires the callback immediately on observe(), simulating an
// always-visible sentinel (matching HappyDOM's 0-dimension layout).
beforeEach(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn(function MockIntersectionObserver(
      this: IntersectionObserver,
      callback: IntersectionObserverCallback,
    ) {
      return {
        observe: vi.fn((target: Element) => {
          callback(
            [{ isIntersecting: true, target } as IntersectionObserverEntry],
            this,
          );
        }),
        disconnect: vi.fn(),
        unobserve: vi.fn(),
      };
    }),
  );
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

const ITEMS = ["Alpha", "Beta", "Gamma"];
const NOOP = (): void => {};

function renderAsyncDropdown(overrides: {
  items?: string[];
  isLoading?: boolean;
  isSearching?: boolean;
  hasMore?: boolean;
  onFetchMore?: () => void;
  fetchError?: Error;
} = {}) {
  return render(
    <AsyncDropdownField
      items={ITEMS}
      value={null}
      onChange={vi.fn()}
      isLoading={false}
      isSearching={false}
      hasMore={false}
      onFetchMore={NOOP}
      {...overrides}
    />,
  );
}

async function openCombobox(): Promise<void> {
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.keyDown(input, { key: "ArrowDown" });
  // In virtualized mode, items render inside VirtualizedItemList and may
  // not immediately have role="option" in HappyDOM (no layout engine),
  // so check for the popup container instead.
  await vi.waitFor(() => {
    expect(getPopup()).not.toBeNull();
  });
}

function getPopup(): Element | null {
  return document.querySelector("[class*='osdkComboboxPopup']");
}

describe("AsyncDropdownField", () => {
  describe("infinite scroll", () => {
    it("calls onFetchMore when popup opens and list fits without scrollbar", async () => {
      const onFetchMore = vi.fn();
      renderAsyncDropdown({ hasMore: true, onFetchMore });
      await openCombobox();

      // The virtualizer renders all items for short lists (including the
      // sentinel at count+1). The sentinel's ref callback fires on mount,
      // triggering onFetchMore.
      expect(onFetchMore).toHaveBeenCalled();
    });

    it("stops calling onFetchMore after fetching all pages", async () => {
      const onFetchMore = vi.fn();
      const { rerender } = render(
        <AsyncDropdownField
          items={["Alpha"]}
          value={null}
          onChange={vi.fn()}
          isLoading={false}
          isSearching={false}
          hasMore={true}
          onFetchMore={onFetchMore}
        />,
      );

      const input = screen.getByRole("combobox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });
      await vi.waitFor(() => {
        expect(getPopup()).not.toBeNull();
      });

      // onFetchMore should have been called while hasMore was true
      expect(onFetchMore).toHaveBeenCalled();

      // Simulate fetchMore completing — parent re-renders with all items loaded
      rerender(
        <AsyncDropdownField
          items={["Alpha", "Beta"]}
          value={null}
          onChange={vi.fn()}
          isLoading={false}
          isSearching={false}
          hasMore={false}
          onFetchMore={onFetchMore}
        />,
      );

      // Record calls at this point — no new calls should happen after settling
      const callsAfterRerender = onFetchMore.mock.calls.length;
      await vi.waitFor(() => {
        expect(onFetchMore.mock.calls.length).toBe(callsAfterRerender);
      });
    });

    it("does not call onFetchMore when hasMore is false", async () => {
      const onFetchMore = vi.fn();
      renderAsyncDropdown({ hasMore: false, onFetchMore });
      await openCombobox();

      expect(onFetchMore).not.toHaveBeenCalled();
    });
  });

  describe("popup status messages", () => {
    it("shows 'Searching' when searching with no items", async () => {
      renderAsyncDropdown({ items: [], isLoading: true, isSearching: true });
      await openCombobox();

      await vi.waitFor(() => {
        expect(getPopup()?.textContent).toContain("Searching");
      });
    });

    it("shows 'Loading' when loading with no items and not searching", async () => {
      renderAsyncDropdown({ items: [], isLoading: true });
      await openCombobox();

      await vi.waitFor(() => {
        expect(getPopup()?.textContent).toContain("Loading");
      });
    });

    it("shows 'No results' when not loading and no items", async () => {
      renderAsyncDropdown({ items: [] });
      await openCombobox();

      await vi.waitFor(() => {
        expect(getPopup()?.textContent).toContain("No results");
      });
    });

    it("shows error message when fetch fails with no items", async () => {
      renderAsyncDropdown({
        items: [],
        fetchError: new Error("Connection refused"),
      });
      await openCombobox();

      await vi.waitFor(() => {
        expect(getPopup()?.textContent).toContain("Connection refused");
      });
    });

    it("shows error alert when fetch fails with items already loaded", async () => {
      renderAsyncDropdown({ fetchError: new Error("Network timeout") });
      await openCombobox();

      const alertElement = document.querySelector("[role='alert']");
      expect(alertElement).not.toBeNull();
      expect(alertElement?.textContent).toBe("Network timeout");
    });

    it("shows no status message when all data is loaded", async () => {
      renderAsyncDropdown({ hasMore: false });
      await openCombobox();

      expect(document.querySelector("[role='alert']")).toBeNull();
      const skeletonBars = getPopup()?.querySelectorAll("[class*='skeleton']");
      expect(skeletonBars?.length ?? 0).toBe(0);
    });
  });
});
