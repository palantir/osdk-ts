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

// IntersectionObserver mock for HappyDOM
let intersectionCallback: IntersectionObserverCallback;
const mockObserve = vi.fn();
const mockUnobserve = vi.fn();

beforeEach(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn((callback: IntersectionObserverCallback) => {
      intersectionCallback = callback;
      return {
        observe: mockObserve,
        unobserve: mockUnobserve,
        disconnect: vi.fn(),
      };
    }),
  );
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  mockObserve.mockClear();
  mockUnobserve.mockClear();
});

const ITEMS = ["Alpha", "Beta", "Gamma"];

function renderAsyncDropdown(overrides: {
  items?: string[];
  isLoading?: boolean;
  hasMore?: boolean;
  onFetchMore?: () => void;
  fetchError?: Error;
  searchQuery?: string;
} = {}) {
  return render(
    <AsyncDropdownField
      items={ITEMS}
      value={null}
      onChange={vi.fn()}
      isLoading={false}
      hasMore={false}
      {...overrides}
    />,
  );
}

async function openCombobox(): Promise<void> {
  const input = screen.getByRole("combobox");
  fireEvent.focus(input);
  fireEvent.keyDown(input, { key: "ArrowDown" });
  await vi.waitFor(() => {
    expect(screen.getByRole("option", { name: "Alpha" })).toBeDefined();
  });
}

function getPopup(): Element | null {
  return document.querySelector("[class*='osdkComboboxPopup']");
}

function simulateIntersection(isIntersecting: boolean): void {
  intersectionCallback(
    [{ isIntersecting } as IntersectionObserverEntry],
    {} as IntersectionObserver,
  );
}

describe("AsyncDropdownField", () => {
  describe("infinite scroll", () => {
    it("calls onFetchMore when sentinel becomes visible and hasMore is true", async () => {
      const onFetchMore = vi.fn();
      renderAsyncDropdown({ hasMore: true, onFetchMore });
      await openCombobox();

      simulateIntersection(true);

      expect(onFetchMore).toHaveBeenCalledTimes(1);
    });

    it("does not call onFetchMore when hasMore is false", async () => {
      const onFetchMore = vi.fn();
      renderAsyncDropdown({ hasMore: false, onFetchMore });
      await openCombobox();

      // No sentinel is rendered when hasMore is false
      expect(onFetchMore).not.toHaveBeenCalled();
    });

    it("does not call onFetchMore when sentinel is not intersecting", async () => {
      const onFetchMore = vi.fn();
      renderAsyncDropdown({ hasMore: true, onFetchMore });
      await openCombobox();

      simulateIntersection(false);

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

    it("shows 'Loading...' empty message when loading with no items", async () => {
      render(
        <AsyncDropdownField
          items={[]}
          value={null}
          onChange={vi.fn()}
          isLoading={true}
          hasMore={false}
        />,
      );
      const input = screen.getByRole("combobox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "ArrowDown" });

      await vi.waitFor(() => {
        const popup = getPopup();
        expect(popup).not.toBeNull();
        expect(popup?.textContent).toContain("Loading");
        expect(popup?.textContent).not.toContain("No results");
      });
    });

    it("does not show skeleton footer when loading with no items", async () => {
      render(
        <AsyncDropdownField
          items={[]}
          value={null}
          onChange={vi.fn()}
          isLoading={true}
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
        expect(popup?.textContent).not.toContain("No results");
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

    it("shows 'Searching...' when loading with a search query and no items", async () => {
      render(
        <AsyncDropdownField
          items={[]}
          value={null}
          onChange={vi.fn()}
          isLoading={true}
          hasMore={false}
          searchQuery="Ali"
        />,
      );
      openEmptyCombobox();

      await vi.waitFor(() => {
        const popup = getPopup();
        expect(popup).not.toBeNull();
        expect(popup?.textContent).toContain("Searching");
        expect(popup?.textContent).not.toContain("No results");
      });
    });

    it("shows 'No matches' when not loading with a search query and no items", async () => {
      render(
        <AsyncDropdownField
          items={[]}
          value={null}
          onChange={vi.fn()}
          isLoading={false}
          hasMore={false}
          searchQuery="Xyz"
        />,
      );
      openEmptyCombobox();

      await vi.waitFor(() => {
        const popup = getPopup();
        expect(popup).not.toBeNull();
        expect(popup?.textContent).toContain("No matches");
        expect(popup?.textContent).toContain("Xyz");
      });
    });
  });
});
