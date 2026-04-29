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
import { AsyncDropdownField } from "../fields/AsyncDropdownField.js";

afterEach(() => {
  cleanup();
});

const ITEMS = ["Alpha", "Beta", "Gamma"];

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

      // VirtualizedItemList calls onFetchMore synchronously via ref callback
      // when scrollHeight <= clientHeight (short list / HappyDOM has 0 dimensions)
      expect(onFetchMore).toHaveBeenCalled();
    });

    it("hides skeleton footer after fetching all pages", async () => {
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

      // Skeleton should be visible while hasMore is true
      const popup = getPopup();
      expect(popup?.querySelectorAll("[class*='skeleton']")?.length)
        .toBeGreaterThan(0);

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

      // Skeleton should be gone now
      const skeletonBars = getPopup()?.querySelectorAll("[class*='skeleton']");
      expect(skeletonBars?.length ?? 0).toBe(0);
    });

    it("does not call onFetchMore when hasMore is false", async () => {
      const onFetchMore = vi.fn();
      renderAsyncDropdown({ hasMore: false, onFetchMore });
      await openCombobox();

      expect(onFetchMore).not.toHaveBeenCalled();
    });
  });

  describe("footer and empty message", () => {
    it("shows skeleton footer when hasMore is true and items exist", async () => {
      renderAsyncDropdown({ hasMore: true });
      await openCombobox();

      const popup = getPopup();
      expect(popup).not.toBeNull();
      const skeletonBars = popup?.querySelectorAll("[class*='skeleton']");
      expect(skeletonBars?.length).toBeGreaterThan(0);
    });

    it("shows 'Searching' status when searching with no items", async () => {
      render(
        <AsyncDropdownField
          items={[]}
          value={null}
          onChange={vi.fn()}
          isLoading={true}
          isSearching={true}
          hasMore={false}
        />,
      );
      const input = screen.getByRole("combobox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });

      await vi.waitFor(() => {
        const popup = getPopup();
        expect(popup).not.toBeNull();
        expect(popup?.textContent).toContain("Searching");
      });
    });

    it("does not show skeleton footer when loading with no items", async () => {
      render(
        <AsyncDropdownField
          items={[]}
          value={null}
          onChange={vi.fn()}
          isLoading={true}
          isSearching={true}
          hasMore={false}
        />,
      );
      const input = screen.getByRole("combobox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });

      await vi.waitFor(() => {
        const popup = getPopup();
        expect(popup).not.toBeNull();
        const skeletonBars = popup?.querySelectorAll("[class*='skeleton']");
        expect(skeletonBars?.length ?? 0).toBe(0);
      });
    });

    it("shows error in empty message when error with no items", async () => {
      render(
        <AsyncDropdownField
          items={[]}
          value={null}
          onChange={vi.fn()}
          isLoading={false}
          isSearching={false}
          hasMore={false}
          fetchError={new Error("Connection refused")}
        />,
      );
      const input = screen.getByRole("combobox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });

      await vi.waitFor(() => {
        const popup = getPopup();
        expect(popup).not.toBeNull();
        expect(popup?.textContent).toContain("Connection refused");
      });
    });

    it("shows error footer when error with items", async () => {
      renderAsyncDropdown({ fetchError: new Error("Network timeout") });
      await openCombobox();

      const alertElement = document.querySelector("[role='alert']");
      expect(alertElement).not.toBeNull();
      expect(alertElement?.textContent).toBe("Network timeout");
    });

    it("renders no footer when all data is fetched", async () => {
      renderAsyncDropdown({ hasMore: false });
      await openCombobox();

      const alertElement = document.querySelector("[role='alert']");
      const skeletonBars = getPopup()?.querySelectorAll("[class*='skeleton']");
      expect(alertElement).toBeNull();
      expect(skeletonBars?.length ?? 0).toBe(0);
    });
  });

  describe("search query messages", () => {
    function openEmptyCombobox(): void {
      const input = screen.getByRole("combobox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });
    }

    it("shows 'Searching...' when searching with no items", async () => {
      render(
        <AsyncDropdownField
          items={[]}
          value={null}
          onChange={vi.fn()}
          isLoading={true}
          isSearching={true}
          hasMore={false}
        />,
      );
      openEmptyCombobox();

      await vi.waitFor(() => {
        const popup = getPopup();
        expect(popup).not.toBeNull();
        expect(popup?.textContent).toContain("Searching");
      });
    });

    it("shows 'No results' when not loading and no items", async () => {
      render(
        <AsyncDropdownField
          items={[]}
          value={null}
          onChange={vi.fn()}
          isLoading={false}
          isSearching={false}
          hasMore={false}
        />,
      );
      openEmptyCombobox();

      await vi.waitFor(() => {
        const popup = getPopup();
        expect(popup).not.toBeNull();
        expect(popup?.textContent).toContain("No results");
      });
    });
  });
});
