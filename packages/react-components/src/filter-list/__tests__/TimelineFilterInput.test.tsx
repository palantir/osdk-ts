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
import { TimelineFilterInput } from "../inputs/TimelineFilterInput.js";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("TimelineFilterInput", () => {
  it("emits a TIMELINE filter state with absolute startDate/endDate on shortcut click", () => {
    // Anchor `now` to a mid-year, non-DST-boundary date so subDays(now, 1) is
    // exactly 24h earlier — `date-fns` is wall-clock aware and would otherwise
    // produce ±1h diffs on spring-forward / fall-back days.
    vi.useFakeTimers({ now: new Date(2024, 5, 15, 12, 0, 0, 0) });
    const onFilterStateChanged = vi.fn();
    render(
      <TimelineFilterInput
        filterState={undefined}
        onFilterStateChanged={onFilterStateChanged}
        dateShortcuts={["past-day"]}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Past day" }));
    expect(onFilterStateChanged).toHaveBeenCalledTimes(1);
    const state = onFilterStateChanged.mock.calls[0][0];
    expect(state.type).toBe("TIMELINE");
    if (
      !(state.startDate instanceof Date) || !(state.endDate instanceof Date)
    ) {
      throw new Error("expected startDate and endDate to be Dates");
    }
    expect(state.endDate.getTime() - state.startDate.getTime()).toBe(
      24 * 60 * 60 * 1000,
    );
  });
});
