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
import type { FetchingState } from "../FormFieldApi.js";

afterEach(cleanup);

const ITEMS = ["Alpha", "Beta", "Gamma"];

function renderAsyncDropdown(overrides: {
  fetchingState: FetchingState;
  onFetchMore?: () => void;
  fetchError?: Error;
}) {
  return render(
    <AsyncDropdownField
      items={ITEMS}
      value={null}
      onChange={vi.fn()}
      query=""
      onQueryChange={vi.fn()}
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

describe("AsyncDropdownField", () => {
  describe("scroll-to-bottom detection", () => {
    it("calls onFetchMore when scrolled to bottom and state is more_available", async () => {
      const onFetchMore = vi.fn();
      renderAsyncDropdown({
        fetchingState: "more_available",
        onFetchMore,
      });
      await openCombobox();

      const popup = getPopup();
      expect(popup).not.toBeNull();

      Object.defineProperty(popup!, "scrollTop", {
        value: 200,
        writable: true,
      });
      Object.defineProperty(popup!, "clientHeight", { value: 100 });
      Object.defineProperty(popup!, "scrollHeight", { value: 300 });
      fireEvent.scroll(popup!);

      expect(onFetchMore).toHaveBeenCalledTimes(1);
    });

    it("does not call onFetchMore when state is all_fetched", async () => {
      const onFetchMore = vi.fn();
      renderAsyncDropdown({
        fetchingState: "all_fetched",
        onFetchMore,
      });
      await openCombobox();

      const popup = getPopup();
      Object.defineProperty(popup!, "scrollTop", {
        value: 200,
        writable: true,
      });
      Object.defineProperty(popup!, "clientHeight", { value: 100 });
      Object.defineProperty(popup!, "scrollHeight", { value: 300 });
      fireEvent.scroll(popup!);

      expect(onFetchMore).not.toHaveBeenCalled();
    });

    it("does not call onFetchMore when not scrolled to bottom", async () => {
      const onFetchMore = vi.fn();
      renderAsyncDropdown({
        fetchingState: "more_available",
        onFetchMore,
      });
      await openCombobox();

      const popup = getPopup();
      Object.defineProperty(popup!, "scrollTop", { value: 50, writable: true });
      Object.defineProperty(popup!, "clientHeight", { value: 100 });
      Object.defineProperty(popup!, "scrollHeight", { value: 300 });
      fireEvent.scroll(popup!);

      expect(onFetchMore).not.toHaveBeenCalled();
    });
  });

  describe("footer states", () => {
    it("renders loading indicator when loading", async () => {
      renderAsyncDropdown({ fetchingState: "loading" });
      await openCombobox();

      // SkeletonBar renders inside the popup after the list items
      const popup = getPopup();
      expect(popup).not.toBeNull();
      // The popup should have more children than just the list and empty
      // (the footer div with SkeletonBar is appended)
      const skeletonBars = popup!.querySelectorAll("[class*='skeleton']");
      expect(skeletonBars.length).toBeGreaterThan(0);
    });

    it("renders error message when error state", async () => {
      renderAsyncDropdown({
        fetchingState: "error",
        fetchError: new Error("Network timeout"),
      });
      await openCombobox();

      const alertElement = document.querySelector("[role='alert']");
      expect(alertElement).not.toBeNull();
      expect(alertElement!.textContent).toBe("Network timeout");
    });

    it("renders fallback error message when no error object", async () => {
      renderAsyncDropdown({ fetchingState: "error" });
      await openCombobox();

      const alertElement = document.querySelector("[role='alert']");
      expect(alertElement).not.toBeNull();
      expect(alertElement!.textContent).toBe("Failed to load");
    });

    it("renders no footer when all_fetched", async () => {
      renderAsyncDropdown({ fetchingState: "all_fetched" });
      await openCombobox();

      const alertElement = document.querySelector("[role='alert']");
      const skeletonBars = getPopup()?.querySelectorAll("[class*='skeleton']");
      expect(alertElement).toBeNull();
      expect(skeletonBars?.length ?? 0).toBe(0);
    });
  });
});
