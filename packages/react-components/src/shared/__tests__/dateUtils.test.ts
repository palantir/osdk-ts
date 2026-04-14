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
