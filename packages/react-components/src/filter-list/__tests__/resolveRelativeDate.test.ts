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

import { describe, expect, it } from "vitest";

import {
  formatRelativeBound,
  resolveRelativeDateBound,
} from "../utils/resolveRelativeDate.js";

// Use local midnight so setHours(0,0,0,0) in resolveRelativeDateBound
// doesn't shift the date. We compare using getFullYear/getMonth/getDate
// to stay timezone-independent.
const NOW = new Date(2026, 7, 15); // Aug 15, 2026 local midnight

function expectDate(
  result: Date | undefined,
  year: number,
  month: number,
  day: number,
) {
  expect(result).toBeDefined();
  expect(result!.getFullYear()).toBe(year);
  expect(result!.getMonth()).toBe(month);
  expect(result!.getDate()).toBe(day);
  expect(result!.getHours()).toBe(0);
  expect(result!.getMinutes()).toBe(0);
  expect(result!.getSeconds()).toBe(0);
  expect(result!.getMilliseconds()).toBe(0);
}

function expectEndOfDay(
  result: Date | undefined,
  year: number,
  month: number,
  day: number,
) {
  expect(result).toBeDefined();
  expect(result!.getFullYear()).toBe(year);
  expect(result!.getMonth()).toBe(month);
  expect(result!.getDate()).toBe(day);
  expect(result!.getHours()).toBe(23);
  expect(result!.getMinutes()).toBe(59);
  expect(result!.getSeconds()).toBe(59);
  expect(result!.getMilliseconds()).toBe(999);
}

describe("resolveRelativeDateBound", () => {
  describe("ago direction", () => {
    it("subtracts days", () => {
      const result = resolveRelativeDateBound(
        { count: 7, unit: "days", direction: "ago" },
        false,
        NOW,
      );
      expectDate(result, 2026, 7, 8); // Aug 8
    });

    it("subtracts weeks", () => {
      const result = resolveRelativeDateBound(
        { count: 2, unit: "weeks", direction: "ago" },
        false,
        NOW,
      );
      expectDate(result, 2026, 7, 1); // Aug 1
    });

    it("subtracts months", () => {
      const result = resolveRelativeDateBound(
        { count: 3, unit: "months", direction: "ago" },
        false,
        NOW,
      );
      expectDate(result, 2026, 4, 15); // May 15
    });

    it("subtracts years", () => {
      const result = resolveRelativeDateBound(
        { count: 1, unit: "years", direction: "ago" },
        false,
        NOW,
      );
      expectDate(result, 2025, 7, 15); // Aug 15, 2025
    });
  });

  describe("fromNow direction", () => {
    it("adds days", () => {
      const result = resolveRelativeDateBound(
        { count: 5, unit: "days", direction: "fromNow" },
        false,
        NOW,
      );
      expectDate(result, 2026, 7, 20); // Aug 20
    });

    it("adds weeks", () => {
      const result = resolveRelativeDateBound(
        { count: 1, unit: "weeks", direction: "fromNow" },
        false,
        NOW,
      );
      expectDate(result, 2026, 7, 22); // Aug 22
    });

    it("adds months", () => {
      const result = resolveRelativeDateBound(
        { count: 2, unit: "months", direction: "fromNow" },
        false,
        NOW,
      );
      expectDate(result, 2026, 9, 15); // Oct 15
    });

    it("adds years", () => {
      const result = resolveRelativeDateBound(
        { count: 3, unit: "years", direction: "fromNow" },
        false,
        NOW,
      );
      expectDate(result, 2029, 7, 15); // Aug 15, 2029
    });
  });

  it("count 0 returns today at midnight", () => {
    const result = resolveRelativeDateBound(
      { count: 0, unit: "days", direction: "ago" },
      false,
      NOW,
    );
    expectDate(result, 2026, 7, 15);
  });

  it("always resets time to midnight regardless of input time", () => {
    const afternoon = new Date(2026, 7, 15, 15, 30, 45, 123);
    const result = resolveRelativeDateBound(
      { count: 1, unit: "days", direction: "ago" },
      false,
      afternoon,
    );
    expectDate(result, 2026, 7, 14);
  });

  it("endOfDay sets time to 23:59:59.999 on the same day", () => {
    const result = resolveRelativeDateBound(
      { count: 7, unit: "days", direction: "ago" },
      true,
      NOW,
    );
    // 7 days ago = Aug 8, at end of day
    expectEndOfDay(result, 2026, 7, 8);
  });

  it("endOfDay with count 0 gives today at 23:59:59.999", () => {
    const result = resolveRelativeDateBound(
      { count: 0, unit: "days", direction: "ago" },
      true,
      NOW,
    );
    expectEndOfDay(result, 2026, 7, 15);
  });

  describe("day-of-month clamping", () => {
    it("Mar 31 minus 1 month clamps to Feb 28", () => {
      const mar31 = new Date(2026, 2, 31); // Mar 31 2026
      const result = resolveRelativeDateBound(
        { count: 1, unit: "months", direction: "ago" },
        false,
        mar31,
      );
      // Feb 2026 has 28 days — must clamp, not overflow to Mar 3
      expectDate(result, 2026, 1, 28);
    });

    it("May 31 minus 1 month clamps to Apr 30", () => {
      const may31 = new Date(2026, 4, 31); // May 31 2026
      const result = resolveRelativeDateBound(
        { count: 1, unit: "months", direction: "ago" },
        false,
        may31,
      );
      // Apr has 30 days — must clamp, not overflow to May 1
      expectDate(result, 2026, 3, 30);
    });

    it("Jan 31 plus 1 month clamps to Feb 28", () => {
      const jan31 = new Date(2026, 0, 31); // Jan 31 2026
      const result = resolveRelativeDateBound(
        { count: 1, unit: "months", direction: "fromNow" },
        false,
        jan31,
      );
      // Feb 2026 has 28 days — must clamp, not overflow to Mar 3
      expectDate(result, 2026, 1, 28);
    });

    it("Feb 29 leap year minus 1 year clamps to Feb 28", () => {
      const feb29 = new Date(2024, 1, 29); // Feb 29 2024 (leap year)
      const result = resolveRelativeDateBound(
        { count: 1, unit: "years", direction: "ago" },
        false,
        feb29,
      );
      // 2023 is not a leap year — must clamp, not overflow to Mar 1
      expectDate(result, 2023, 1, 28);
    });

    it("Jan 31 minus 1 month gives Dec 31 (no clamping needed)", () => {
      const jan31 = new Date(2026, 0, 31); // Jan 31
      const result = resolveRelativeDateBound(
        { count: 1, unit: "months", direction: "ago" },
        false,
        jan31,
      );
      // Dec has 31 days — no overflow
      expectDate(result, 2025, 11, 31);
    });
  });
});

describe("formatRelativeBound", () => {
  it("formats count 0 as Today", () => {
    expect(
      formatRelativeBound({ count: 0, unit: "days", direction: "ago" }),
    ).toBe("Today");
  });

  it("formats singular unit", () => {
    expect(
      formatRelativeBound({ count: 1, unit: "months", direction: "ago" }),
    ).toBe("1 month ago");
  });

  it("formats plural unit", () => {
    expect(
      formatRelativeBound({ count: 7, unit: "days", direction: "ago" }),
    ).toBe("7 days ago");
  });

  it("formats fromNow direction", () => {
    expect(
      formatRelativeBound({ count: 5, unit: "days", direction: "fromNow" }),
    ).toBe("5 days from now");
  });
});
