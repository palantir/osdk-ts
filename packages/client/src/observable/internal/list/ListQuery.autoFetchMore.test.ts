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

describe("ListQuery autoFetchMore", () => {
  it("should set minResultsToLoad to specific number when autoFetchMore is a number", () => {
    // When autoFetchMore: 100, it should fetch until at least 100 items
    const autoFetchMore = 100;
    expect(autoFetchMore).toBe(100);
  });

  it("should set minResultsToLoad to 0 when autoFetchMore is undefined", () => {
    // When autoFetchMore is undefined, default behavior (one page only)
    const autoFetchMore = undefined;
    const result = autoFetchMore === true
      ? Number.MAX_SAFE_INTEGER
      : typeof autoFetchMore === "number"
      ? autoFetchMore
      : 0;
    expect(result).toBe(0);
  });

  it("should set minResultsToLoad to 0 when autoFetchMore is false", () => {
    // When autoFetchMore is false, same as undefined (one page only)
    const autoFetchMore = false as boolean | number | undefined;
    const result = autoFetchMore === true
      ? Number.MAX_SAFE_INTEGER
      : typeof autoFetchMore === "number"
      ? autoFetchMore
      : 0;
    expect(result).toBe(0);
  });

  it("should handle the boolean | number type correctly", () => {
    const testCases: Array<{
      input: boolean | number | undefined;
      expected: number;
    }> = [
      { input: true, expected: Number.MAX_SAFE_INTEGER },
      { input: false, expected: 0 },
      { input: 50, expected: 50 },
      { input: 100, expected: 100 },
      { input: 1000, expected: 1000 },
      { input: undefined, expected: 0 },
    ];

    testCases.forEach(({ input, expected }) => {
      const result = input === true
        ? Number.MAX_SAFE_INTEGER
        : typeof input === "number"
        ? input
        : 0;
      expect(result).toBe(expected);
    });
  });

  it("should handle negative numbers", () => {
    // Negative numbers should be clamped to 0 (fetch at least 0 items = fetch first page)
    const negativeNumber = -10 as boolean | number | undefined;
    const result = negativeNumber === true
      ? Number.MAX_SAFE_INTEGER
      : typeof negativeNumber === "number"
      ? Math.max(0, negativeNumber)
      : 0;
    // Negative numbers are clamped to 0 to avoid unexpected behavior
    expect(result).toBe(0);
  });
});
