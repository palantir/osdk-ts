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
import { formatMilliseconds } from "./format.js";

describe("formatMilliseconds", () => {
  it("formats sub-second values as ms", () => {
    expect(formatMilliseconds(500, true)).toBe("500 ms");
    expect(formatMilliseconds(0, true)).toBe("0 ms");
    expect(formatMilliseconds(999, true)).toBe("999 ms");
  });

  it("formats sub-second values without space", () => {
    expect(formatMilliseconds(500, false)).toBe("500ms");
    expect(formatMilliseconds(42, false)).toBe("42ms");
  });

  it("formats even seconds without decimal", () => {
    expect(formatMilliseconds(1000, true)).toBe("1 s");
    expect(formatMilliseconds(2000, true)).toBe("2 s");
    expect(formatMilliseconds(5000, false)).toBe("5s");
  });

  it("formats fractional seconds with one decimal", () => {
    expect(formatMilliseconds(1500, true)).toBe("1.5 s");
    expect(formatMilliseconds(2300, false)).toBe("2.3s");
  });

  it("formats even minutes without decimal", () => {
    expect(formatMilliseconds(60000, true)).toBe("1 m");
    expect(formatMilliseconds(120000, false)).toBe("2m");
  });

  it("formats fractional minutes with one decimal", () => {
    expect(formatMilliseconds(90000, true)).toBe("1.5 m");
    expect(formatMilliseconds(150000, false)).toBe("2.5m");
  });

  it("boundary: 999ms stays as ms", () => {
    expect(formatMilliseconds(999, true)).toBe("999 ms");
  });

  it("boundary: 1000ms becomes 1s", () => {
    expect(formatMilliseconds(1000, true)).toBe("1 s");
  });

  it("boundary: 59999ms stays as seconds", () => {
    const result = formatMilliseconds(59999, true);
    expect(result).toContain("s");
    expect(result).not.toContain("m");
  });

  it("boundary: 60000ms becomes 1m", () => {
    expect(formatMilliseconds(60000, true)).toBe("1 m");
  });
});
