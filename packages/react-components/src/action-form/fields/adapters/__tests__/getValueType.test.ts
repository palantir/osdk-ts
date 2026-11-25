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

import { getValueType } from "../getValueType.js";

describe("getValueType", () => {
  it.each([
    ["string", "a"],
    ["number", 1],
    ["boolean", true],
    ["bigint", 1n],
    ["symbol", Symbol("s")],
    ["function", () => undefined],
    ["object", {}],
    ["object", null],
    ["undefined", undefined],
    ["date", new Date()],
    ["file", new File([], "a.txt")],
  ])("names a %s", (expected, value) => {
    expect(getValueType(value)).toBe(expected);
  });

  it("names an empty array without a subtype", () => {
    expect(getValueType([])).toBe("array");
  });

  it("names the item type of an array", () => {
    expect(getValueType([1, 2])).toBe("array<number>");
    expect(getValueType([new Date()])).toBe("array<date>");
  });

  it("lists each distinct item type of a mixed array once, in order", () => {
    expect(getValueType([1, "a", 2])).toBe("array<number | string>");
  });

  it("names nested arrays without their item types", () => {
    expect(getValueType([[1], [2]])).toBe("array<array>");
    expect(getValueType([[1], "a"])).toBe("array<array | string>");
  });
});
