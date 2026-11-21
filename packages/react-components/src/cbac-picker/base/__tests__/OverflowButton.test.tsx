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
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { OverflowButtonProps } from "../OverflowButton.js";
import { OverflowButton } from "../OverflowButton.js";

const OVERFLOW_MARKINGS: OverflowButtonProps["overflowMarkings"] = [
  { id: "alpha", label: "Alpha", selectionState: "NONE" },
  { id: "bravo", label: "Bravo", selectionState: "NONE" },
  { id: "alphabet", label: "Alphabet", selectionState: "NONE" },
];

function renderOverflow(onMarkingToggle: (id: string) => void = vi.fn()): void {
  render(
    <OverflowButton
      overflowMarkings={OVERFLOW_MARKINGS}
      hasActiveOverflow={false}
      onMarkingToggle={onMarkingToggle}
    />,
  );
}

function openPopover(): void {
  fireEvent.click(screen.getByRole("button", { name: "+3 more" }));
}

function search(query: string): void {
  fireEvent.change(screen.getByRole("textbox", { name: "Search markings" }), {
    target: { value: query },
  });
}

describe("OverflowButton", () => {
  afterEach(cleanup);

  describe("search", () => {
    it("lists every overflow marking before a query is entered", async () => {
      renderOverflow();
      openPopover();
      expect(
        await screen.findByRole("textbox", { name: "Search markings" }),
      ).toBeDefined();
      for (const { label } of OVERFLOW_MARKINGS) {
        expect(screen.getByRole("button", { name: label })).toBeDefined();
      }
    });

    it("filters markings by label, case-insensitively", async () => {
      renderOverflow();
      openPopover();
      await screen.findByRole("textbox", { name: "Search markings" });
      search("ALPHA");
      expect(screen.getByRole("button", { name: "Alpha" })).toBeDefined();
      expect(screen.getByRole("button", { name: "Alphabet" })).toBeDefined();
      expect(screen.queryByRole("button", { name: "Bravo" })).toBeNull();
    });

    it("ignores whitespace around a query", async () => {
      renderOverflow();
      openPopover();
      await screen.findByRole("textbox", { name: "Search markings" });
      search("  alpha  ");
      expect(screen.getByRole("button", { name: "Alpha" })).toBeDefined();
      expect(screen.getByRole("button", { name: "Alphabet" })).toBeDefined();
      expect(screen.queryByRole("button", { name: "Bravo" })).toBeNull();
    });

    it("shows an empty state when nothing matches", async () => {
      renderOverflow();
      openPopover();
      await screen.findByRole("textbox", { name: "Search markings" });
      search("zulu");
      expect(screen.getByRole("status").textContent).toBe(
        "No matching markings",
      );
      for (const { label } of OVERFLOW_MARKINGS) {
        expect(screen.queryByRole("button", { name: label })).toBeNull();
      }
    });

    it("restores results after clearing a query with no matches", async () => {
      renderOverflow();
      openPopover();
      await screen.findByRole("textbox", { name: "Search markings" });
      search("zulu");
      expect(screen.getByText("No matching markings")).toBeDefined();
      search("");
      expect(screen.queryByText("No matching markings")).toBeNull();
      for (const { label } of OVERFLOW_MARKINGS) {
        expect(screen.getByRole("button", { name: label })).toBeDefined();
      }
    });

    it("toggles a filtered marking by id", async () => {
      const onMarkingToggle = vi.fn();
      renderOverflow(onMarkingToggle);
      openPopover();
      await screen.findByRole("textbox", { name: "Search markings" });
      search("bra");
      fireEvent.click(screen.getByRole("button", { name: "Bravo" }));
      expect(onMarkingToggle).toHaveBeenCalledExactlyOnceWith("bravo");
    });

    it("clears the query when the popover is reopened", async () => {
      renderOverflow();
      openPopover();
      await screen.findByRole("textbox", { name: "Search markings" });
      search("bra");
      fireEvent.keyDown(
        screen.getByRole("textbox", { name: "Search markings" }),
        { key: "Escape" },
      );
      await waitFor(() => {
        expect(
          screen.queryByRole("textbox", { name: "Search markings" }),
        ).toBeNull();
      });
      openPopover();
      const input = await screen.findByRole("textbox", {
        name: "Search markings",
      });
      expect(input).toHaveProperty("value", "");
      for (const { label } of OVERFLOW_MARKINGS) {
        expect(screen.getByRole("button", { name: label })).toBeDefined();
      }
    });
  });
});
