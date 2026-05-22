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

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("SingleDateFilterInput", () => {
  it(
    "renders the shortcut rail inside the date picker popover and sets the "
      + "selected date to the period's start when a shortcut is clicked",
    () => {
      // Anchor `now` to a mid-year, non-DST-boundary date so subWeeks(now, 1)
      // is exactly 7×24h earlier. Without this, `date-fns`'s wall-clock-aware
      // subtraction can produce ±1h diffs on spring-forward / fall-back days.
      const now = new Date(2024, 5, 15, 12, 0, 0, 0);
      vi.useFakeTimers({ now });
      const onFilterStateChanged = vi.fn();
      const MS_IN_WEEK = 7 * 24 * 60 * 60 * 1000;
      render(
        <SingleDateFilterInput
          filterState={undefined}
          onFilterStateChanged={onFilterStateChanged}
          dateShortcuts={["past-week"]}
        />,
      );
      // The shortcut button is rendered inside the date picker popover, which
      // is closed by default. Focus the input to open the popover.
      expect(screen.queryByRole("button", { name: "Past week" })).toBeNull();
      fireEvent.focus(screen.getByRole("combobox"));
      fireEvent.click(screen.getByRole("button", { name: "Past week" }));
      expect(onFilterStateChanged).toHaveBeenCalledTimes(1);
      const state = onFilterStateChanged.mock.calls[0][0];
      expect(state.type).toBe("SELECT");
      const picked = state.selectedValues[0];
      if (!(picked instanceof Date)) {
        throw new Error("expected selectedValues[0] to be a Date");
      }
      expect(picked.getTime()).toBe(now.getTime() - MS_IN_WEEK);
    },
  );
});
