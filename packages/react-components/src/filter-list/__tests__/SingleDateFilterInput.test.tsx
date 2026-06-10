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
  it("sets the selected date to the period start (midnight) when a shortcut is clicked", () => {
    // Mid-year date avoids DST boundary drift.
    const now = new Date(2024, 5, 15, 12, 0, 0, 0);
    vi.useFakeTimers({ now });
    const onFilterStateChanged = vi.fn();
    render(
      <SingleDateFilterInput
        filterState={undefined}
        onFilterStateChanged={onFilterStateChanged}
        dateShortcuts={[
          {
            label: "Past week",
            date: (n) => new Date(n.getTime() - 7 * 24 * 60 * 60 * 1000),
          },
        ]}
      />,
    );
    fireEvent.focus(screen.getByRole("combobox"));
    fireEvent.click(screen.getByRole("button", { name: "Past week" }));
    expect(onFilterStateChanged).toHaveBeenCalledTimes(1);
    const state = onFilterStateChanged.mock.calls[0][0];
    expect(state.type).toBe("SELECT");
    const picked = state.selectedValues[0];
    if (!(picked instanceof Date)) {
      throw new Error("expected selectedValues[0] to be a Date");
    }
    // SingleDateInput is date-only, so wall-clock time is stripped: the
    // shortcut commits midnight of the period-start day rather than the
    // exact hh:mm carried by the shortcut's date.
    const periodStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const expected = new Date(
      periodStart.getFullYear(),
      periodStart.getMonth(),
      periodStart.getDate(),
    );
    expect(picked.getTime()).toBe(expected.getTime());
  });
});
