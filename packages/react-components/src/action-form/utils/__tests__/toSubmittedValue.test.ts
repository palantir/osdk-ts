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

  it("converts each Date in an array", () => {
    expect(
      toSubmittedValue([
        new Date("2024-01-15T10:30:00.000Z"),
        new Date("2024-06-01T00:00:00.000Z"),
      ]),
    ).toEqual(["2024-01-15T10:30:00.000Z", "2024-06-01T00:00:00.000Z"]);
  });

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
