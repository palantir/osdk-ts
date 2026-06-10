/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  type DatePickerShortcut,
  type DateRangePickerShortcut,
  DEFAULT_DATE_RANGE_SHORTCUTS,
  DEFAULT_DATE_SHORTCUTS,
  formatDateForDisplay,
  formatDateForInput,
  formatDatetimeForInput,
  formatTime,
  getTimeValue,
  isDateInRange,
  parseDateFromInput,
  parseDateFromISO,
  parseDatetimeFromInput,
  parseTimeString,
  resolveDateRangeShortcuts,
  resolveDateShortcuts,
} from "../dateUtils.js";

describe("formatDateForInput", () => {
  it("formats a date to YYYY-MM-DD", () => {
    expect(formatDateForInput(new Date(2024, 0, 3))).toBe("2024-01-03");
    expect(formatDateForInput(undefined)).toBe("");
  });
});

describe("parseDateFromInput", () => {
  it("parses YYYY-MM-DD to local midnight", () => {
    const date = parseDateFromInput("2024-06-15")!;
    expect(date.getFullYear()).toBe(2024);
    expect(date.getMonth()).toBe(5);
    expect(date.getDate()).toBe(15);
    expect(date.getHours()).toBe(0);
  });

  it("returns undefined for empty or invalid input", () => {
    expect(parseDateFromInput("")).toBeUndefined();
    expect(parseDateFromInput("not-a-date")).toBeUndefined();
  });
});

describe("formatDateForDisplay", () => {
  it("returns fallback for undefined, formats date otherwise", () => {
    expect(formatDateForDisplay(undefined, "N/A")).toBe("N/A");
    expect(formatDateForDisplay(undefined)).toBe("");
    expect(formatDateForDisplay(new Date(2024, 5, 15))).toContain("2024");
  });
});

describe("parseDateFromISO", () => {
  it("parses ISO strings and passes through Date objects", () => {
    const existing = new Date(2024, 5, 15);
    expect(parseDateFromISO(existing)).toBe(existing);
    expect(parseDateFromISO("2024-06-15T12:00:00Z")).toBeInstanceOf(Date);
    expect(parseDateFromISO(undefined)).toBeUndefined();
    expect(parseDateFromISO(null)).toBeUndefined();
    expect(parseDateFromISO("not-a-date")).toBeUndefined();
  });
});

describe("formatTime", () => {
  it("formats hours and minutes with zero-padding", () => {
    expect(formatTime(new Date(2024, 0, 1, 9, 5))).toBe("09:05");
    expect(formatTime(new Date(2024, 0, 1, 14, 30))).toBe("14:30");
    expect(formatTime(new Date(2024, 0, 1, 0, 0))).toBe("00:00");
  });
});

describe("formatDatetimeForInput", () => {
  it("formats a date to YYYY-MM-DD HH:mm (space-separated)", () => {
    expect(formatDatetimeForInput(new Date(2024, 5, 15, 14, 30))).toBe(
      "2024-06-15 14:30",
    );
    expect(formatDatetimeForInput(new Date(2024, 0, 3, 9, 5))).toBe(
      "2024-01-03 09:05",
    );
  });

  it("returns empty string for null or undefined", () => {
    expect(formatDatetimeForInput(null)).toBe("");
    expect(formatDatetimeForInput(undefined)).toBe("");
  });
});

describe("parseDatetimeFromInput", () => {
  it("parses space-separated datetime string", () => {
    const date = parseDatetimeFromInput("2024-06-15 14:30")!;
    expect(date.getFullYear()).toBe(2024);
    expect(date.getMonth()).toBe(5);
    expect(date.getDate()).toBe(15);
    expect(date.getHours()).toBe(14);
    expect(date.getMinutes()).toBe(30);
  });

  it("parses T-separated datetime string", () => {
    const date = parseDatetimeFromInput("2024-06-15T14:30")!;
    expect(date.getFullYear()).toBe(2024);
    expect(date.getHours()).toBe(14);
  });

  it("returns undefined for empty or invalid input", () => {
    expect(parseDatetimeFromInput("")).toBeUndefined();
    expect(parseDatetimeFromInput(null)).toBeUndefined();
    expect(parseDatetimeFromInput(undefined)).toBeUndefined();
    expect(parseDatetimeFromInput("not-a-date")).toBeUndefined();
  });
});

describe("isDateInRange", () => {
  it("returns true when no min/max constraints", () => {
    expect(isDateInRange(new Date(2024, 5, 15), undefined, undefined)).toBe(
      true,
    );
  });

  it("returns true when date is within range", () => {
    const min = new Date(2024, 0, 1);
    const max = new Date(2024, 11, 31);
    expect(isDateInRange(new Date(2024, 5, 15), min, max)).toBe(true);
  });

  it("returns true when date equals min or max (inclusive)", () => {
    const min = new Date(2024, 0, 1);
    const max = new Date(2024, 11, 31);
    expect(isDateInRange(min, min, max)).toBe(true);
    expect(isDateInRange(max, min, max)).toBe(true);
  });

  it("returns false when date is before min", () => {
    const min = new Date(2024, 5, 1);
    expect(isDateInRange(new Date(2024, 4, 31), min, undefined)).toBe(false);
  });

  it("returns false when date is after max", () => {
    const max = new Date(2024, 5, 30);
    expect(isDateInRange(new Date(2024, 6, 1), undefined, max)).toBe(false);
  });
});

describe("parseTimeString", () => {
  it("parses HH:mm time string", () => {
    expect(parseTimeString("14:30")).toEqual({ hours: 14, minutes: 30 });
    expect(parseTimeString("09:05")).toEqual({ hours: 9, minutes: 5 });
    expect(parseTimeString("00:00")).toEqual({ hours: 0, minutes: 0 });
  });

  it("defaults to 0 for missing parts", () => {
    expect(parseTimeString("")).toEqual({ hours: 0, minutes: 0 });
    expect(parseTimeString("14")).toEqual({ hours: 14, minutes: 0 });
  });
});

describe("getTimeValue", () => {
  it("returns formatted time for a date", () => {
    expect(getTimeValue(new Date(2024, 0, 1, 14, 30))).toBe("14:30");
    expect(getTimeValue(new Date(2024, 0, 1, 9, 5))).toBe("09:05");
  });

  it("returns 00:00 for null", () => {
    expect(getTimeValue(null)).toBe("00:00");
  });
});

describe("date shortcuts", () => {
  function dateFor(label: string, now: Date): Date {
    const shortcut = DEFAULT_DATE_SHORTCUTS.find((s) => s.label === label);
    if (shortcut == null) {
      throw new Error(`no default shortcut labeled "${label}"`);
    }
    return shortcut.date(now);
  }

  function rangeFor(label: string, now: Date): [Date, Date] {
    const shortcut = DEFAULT_DATE_RANGE_SHORTCUTS.find((s) =>
      s.label === label
    );
    if (shortcut == null) {
      throw new Error(`no default range shortcut labeled "${label}"`);
    }
    const [min, max] = shortcut.dateRange(now);
    if (min == null || max == null) {
      throw new Error(`range shortcut "${label}" produced a null bound`);
    }
    return [min, max];
  }

  it("resolves a range shortcut's [start, end] relative to now", () => {
    const now = new Date(2024, 5, 15, 12, 0, 0, 0);
    const [min, max] = rangeFor("Past week", now);
    expect(max.getTime()).toBe(now.getTime());
    expect(max.getTime() - min.getTime()).toBe(7 * 24 * 60 * 60 * 1000);
  });

  it("exposes both default shortcut sets in order with English labels", () => {
    const expectedLabels = [
      "Past hour",
      "Past 24 hours",
      "Past week",
      "Past month",
      "Past 3 months",
      "Past 6 months",
      "Past year",
      "Past 2 years",
    ];
    expect(DEFAULT_DATE_SHORTCUTS.map((s) => s.label)).toEqual(expectedLabels);
    expect(DEFAULT_DATE_RANGE_SHORTCUTS.map((s) => s.label)).toEqual(
      expectedLabels,
    );
  });

  it("clamps Past month from a 31st to the last day of the prior shorter month", () => {
    // Mar 31 - 1 month should land on Feb 29 in a leap year (date-fns clamps).
    const min = dateFor("Past month", new Date(2024, 2, 31, 12, 0, 0, 0));
    expect(min.getFullYear()).toBe(2024);
    expect(min.getMonth()).toBe(1);
    expect(min.getDate()).toBe(29);
  });

  it("clamps Past year from Feb 29 to Feb 28 of the prior non-leap year", () => {
    // Feb 29 2024 - 1 year should land on Feb 28 2023.
    const min = dateFor("Past year", new Date(2024, 1, 29, 12, 0, 0, 0));
    expect(min.getFullYear()).toBe(2023);
    expect(min.getMonth()).toBe(1);
    expect(min.getDate()).toBe(28);
  });

  it("crosses the year boundary cleanly for Past 3 months", () => {
    // Feb 15 2024 - 3 months → Nov 15 2023.
    const min = dateFor("Past 3 months", new Date(2024, 1, 15, 12, 0, 0, 0));
    expect(min.getFullYear()).toBe(2023);
    expect(min.getMonth()).toBe(10);
    expect(min.getDate()).toBe(15);
  });

  it("resolveDateShortcuts maps true to defaults and false/empty to undefined", () => {
    expect(resolveDateShortcuts(true)).toBe(DEFAULT_DATE_SHORTCUTS);
    expect(resolveDateShortcuts(false)).toBeUndefined();
    expect(resolveDateShortcuts(undefined)).toBeUndefined();
    expect(resolveDateShortcuts([])).toBeUndefined();
  });

  it("resolveDateRangeShortcuts maps true to defaults and false/empty to undefined", () => {
    expect(resolveDateRangeShortcuts(true)).toBe(DEFAULT_DATE_RANGE_SHORTCUTS);
    expect(resolveDateRangeShortcuts(false)).toBeUndefined();
    expect(resolveDateRangeShortcuts(undefined)).toBeUndefined();
    expect(resolveDateRangeShortcuts([])).toBeUndefined();
  });

  it("resolveDateShortcuts returns a custom shortcut array verbatim", () => {
    const custom: DatePickerShortcut[] = [
      {
        label: "Yesterday",
        date: (now) => new Date(now.getTime() - 24 * 60 * 60 * 1000),
      },
    ];
    expect(resolveDateShortcuts(custom)).toBe(custom);
  });

  it("resolveDateRangeShortcuts returns a custom shortcut array verbatim", () => {
    const custom: DateRangePickerShortcut[] = [
      {
        label: "Last 6 hours",
        dateRange: (now) => [
          new Date(now.getTime() - 6 * 60 * 60 * 1000),
          now,
        ],
      },
    ];
    expect(resolveDateRangeShortcuts(custom)).toBe(custom);
  });
});
