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
import { compareNumericStrings } from "./compareNumericStrings.js";

describe(compareNumericStrings, () => {
  /** Sorts a copy of `values` ascending using only the comparator. */
  function sortedAsc(values: string[]): string[] {
    return [...values].sort(compareNumericStrings);
  }

  it("orders integers/longs by value, not lexicographically", () => {
    // Lexicographically this would be 10, 100, 2, 9.
    expect(sortedAsc(["10", "9", "100", "2"])).toEqual([
      "2",
      "9",
      "10",
      "100",
    ]);
  });

  it("preserves precision for longs beyond Number.MAX_SAFE_INTEGER", () => {
    // 2^53 and 2^53 + 1 are indistinguishable as JS numbers.
    expect(compareNumericStrings("9007199254740993", "9007199254740992"))
      .toBe(1);
    expect(compareNumericStrings("9007199254740992", "9007199254740993"))
      .toBe(-1);
    expect(compareNumericStrings("9007199254740992", "9007199254740992"))
      .toBe(0);
  });

  it("orders decimals by value", () => {
    expect(sortedAsc(["10", "9", "100"])).toEqual(["9", "10", "100"]);
    expect(sortedAsc(["1.5", "1.25", "1.125"])).toEqual([
      "1.125",
      "1.25",
      "1.5",
    ]);
  });

  it("preserves precision for large non-integer decimals beyond a double", () => {
    // These differ only in the 17th significant digit, which a double can't
    // represent: Number("9007199254740993.5") === Number("9007199254740993.6").
    expect(sortedAsc([
      "9007199254740993.6",
      "9007199254740993.5",
      "9007199254740993.55",
    ])).toEqual([
      "9007199254740993.5",
      "9007199254740993.55",
      "9007199254740993.6",
    ]);
  });

  it("treats trailing-zero fractions as equal (10 == 10.00)", () => {
    expect(compareNumericStrings("10", "10.00")).toBe(0);
    expect(compareNumericStrings("1.5", "1.50")).toBe(0);
  });

  it("handles signs, including +, -, and -0", () => {
    expect(compareNumericStrings("-1.5", "1.5")).toBe(-1);
    expect(compareNumericStrings("-1.5", "-1.25")).toBe(-1);
    expect(compareNumericStrings("+10", "9")).toBe(1);
    expect(compareNumericStrings("-0.0", "0.0")).toBe(0);
  });

  it("falls back to a Number comparison for exotic forms (e.g. scientific)", () => {
    expect(compareNumericStrings("1e3", "999")).toBe(1);
    expect(compareNumericStrings("999", "1e3")).toBe(-1);
  });

  it("keeps a total order for unparseable values (NaN sorts last)", () => {
    // A non-numeric string can't be compared by value, so it must sort after
    // every finite value and never compare equal to one -- otherwise the
    // comparator is non-transitive and Array.sort is corrupted (see below).
    expect(compareNumericStrings("abc", "10")).toBe(1);
    expect(compareNumericStrings("10", "abc")).toBe(-1);
    expect(compareNumericStrings("abc", "xyz")).toBe(0);
  });

  it("is transitive on junk-containing input, so Array.sort is order-independent", () => {
    // With a non-transitive comparator (junk == 5 and junk == 10 while 5 < 10),
    // even the finite values would be misordered depending on the starting
    // order. A total order keeps the finite values correctly sorted and the junk
    // last regardless of input order (junk-vs-junk is equal, so its relative
    // order tracks input -- that's fine).
    const forward = ["10", "abc", "5", "2", "xyz", "100", "3"];
    const reversed = [...forward].reverse();

    for (const input of [forward, reversed]) {
      const sorted = [...input].sort(compareNumericStrings);
      expect(sorted.slice(0, 5)).toEqual(["2", "3", "5", "10", "100"]);
      expect(sorted.slice(5).sort()).toEqual(["abc", "xyz"]);
    }
  });
});
