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
import { SingleDateFilterInput } from "../inputs/SingleDateFilterInput.js";

// Bypass React.lazy so the DatePicker popover content renders synchronously.
vi.mock("../../shared/calendar/LazyDateCalendar.js", async () => {
  const { default: DateCalendar } = await vi.importActual<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    typeof import("../../shared/calendar/DateCalendar.js")
  >("../../shared/calendar/DateCalendar.js");
  return { LazyDateCalendar: DateCalendar };
});

afterEach(cleanup);

describe("SingleDateFilterInput", () => {
  describe("dateShortcuts", () => {
    it("hides the rail when dateShortcuts is undefined", () => {
      render(
        <SingleDateFilterInput
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
        />,
      );
      expect(
        screen.queryByRole("group", { name: "Relative date shortcuts" }),
      ).toBeNull();
    });

    it("renders the rail when dateShortcuts is true", () => {
      render(
        <SingleDateFilterInput
          filterState={undefined}
          onFilterStateChanged={vi.fn()}
          dateShortcuts={true}
        />,
      );
      const rail = screen.getByRole("group", {
        name: "Relative date shortcuts",
      });
      expect(rail.querySelectorAll("button").length).toBe(8);
    });

    it("snaps the selected date to `now` on click (period's end-of-range)", () => {
      const onFilterStateChanged = vi.fn();
      const before = Date.now();
      render(
        <SingleDateFilterInput
          filterState={undefined}
          onFilterStateChanged={onFilterStateChanged}
          dateShortcuts={["past-week"]}
        />,
      );
      fireEvent.click(screen.getByRole("button", { name: "Past week" }));
      const after = Date.now();
      expect(onFilterStateChanged).toHaveBeenCalledTimes(1);
      const state = onFilterStateChanged.mock.calls[0][0];
      expect(state.type).toBe("SELECT");
      expect(state.selectedValues).toHaveLength(1);
      const picked = state.selectedValues[0];
      if (!(picked instanceof Date)) {
        throw new Error("expected selectedValues[0] to be a Date");
      }
      expect(picked.getTime()).toBeGreaterThanOrEqual(before);
      expect(picked.getTime()).toBeLessThanOrEqual(after);
    });
  });
});
