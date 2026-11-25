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

import { toSubmittedValue } from "../toSubmittedValue.js";

describe("toSubmittedValue", () => {
  it("returns undefined for null and undefined", () => {
    expect(toSubmittedValue(null)).toBe(undefined);
    expect(toSubmittedValue(undefined)).toBe(undefined);
  });

  it("converts a Date to an ISO string", () => {
    expect(toSubmittedValue(new Date("2024-01-15T10:30:00.000Z"))).toBe(
      "2024-01-15T10:30:00.000Z",
    );
  });

  it.each([
    [0, "2026-01-15"],
    [5, "2026-06-15"],
    [10, "2026-11-15"],
  ] as const)(
    "preserves the local calendar date for a date-only parameter in month %s",
    (month, expected) => {
      const date = new Date(2026, month, 15);
      expect(toSubmittedValue(date, "datetime")).toBe(expected);
      expect(date.getHours()).toBe(0);
    },
  );

  it("preserves the instant for a timestamp parameter", () => {
    const date = new Date("2026-11-15T14:30:00+09:00");
    expect(toSubmittedValue(date, "timestamp")).toBe(
      "2026-11-15T05:30:00.000Z",
    );
  });

  it.each([undefined, "datetime", "timestamp"] as const)(
    "keeps rejecting invalid Dates for parameter type %s",
    (type) => {
      expect(() => toSubmittedValue(new Date("invalid"), type)).toThrow(
        RangeError,
      );
    },
  );

  it("passes strings and invalid values through for date parameters", () => {
    for (const type of ["datetime", "timestamp"] as const) {
      expect(toSubmittedValue("2026-11-15", type)).toBe("2026-11-15");
      expect(toSubmittedValue("not-a-date", type)).toBe("not-a-date");
      expect(toSubmittedValue(42, type)).toBe(42);
    }
  });

  it("uses the parameter type for each Date in arrays", () => {
    const dates = [new Date(2026, 0, 15), new Date(2026, 5, 15)];
    expect(toSubmittedValue(dates, "datetime")).toEqual([
      "2026-01-15",
      "2026-06-15",
    ]);
    expect(toSubmittedValue(dates, "timestamp")).toEqual(
      dates.map((date) => date.toISOString()),
    );
    expect(toSubmittedValue([dates], "datetime")).toEqual([
      ["2026-01-15", "2026-06-15"],
    ]);
    expect(toSubmittedValue([dates[0], null], "datetime")).toBeUndefined();
  });

  it("converts each Date in an array", () => {
    expect(
      toSubmittedValue([
        new Date("2024-01-15T10:30:00.000Z"),
        new Date("2024-06-01T00:00:00.000Z"),
      ]),
    ).toEqual(["2024-01-15T10:30:00.000Z", "2024-06-01T00:00:00.000Z"]);
  });

  it.each([
    { value: [null, null] },
    { value: [1, undefined] },
    { value: [null, 1] },
    { value: [[1], [null]] },
  ])(
    "omits the whole parameter containing nullish members: $value",
    ({ value }) => {
      expect(toSubmittedValue(value)).toBeUndefined();
    },
  );

  it("passes every other value through unchanged", () => {
    const object = { id: 1 };
    expect(toSubmittedValue("hello")).toBe("hello");
    expect(toSubmittedValue("not-a-date")).toBe("not-a-date");
    expect(toSubmittedValue(3.7)).toBe(3.7);
    expect(toSubmittedValue(false)).toBe(false);
    expect(toSubmittedValue(object)).toBe(object);
  });

  it("passes arrays of other values through unchanged", () => {
    expect(toSubmittedValue(["a", "not-a-date", 2.5])).toEqual([
      "a",
      "not-a-date",
      2.5,
    ]);
    expect(toSubmittedValue([])).toEqual([]);
  });
});
