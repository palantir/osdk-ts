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

import {
  SortAlphabetical,
  SortAlphabeticalDesc,
  SortAsc,
  SortDesc,
  SortNumerical,
  SortNumericalDesc,
} from "@blueprintjs/icons";
import { describe, expect, it } from "vitest";

import { getSortIcons } from "../getSortIcons.js";

describe(getSortIcons, () => {
  it.each(["string", "cipherText", "marking"])(
    "uses the alphabetical icons for %s",
    (dataType) => {
      expect(getSortIcons(dataType)).toEqual({
        asc: SortAlphabetical,
        desc: SortAlphabeticalDesc,
      });
    },
  );

  it.each(["byte", "decimal", "double", "float", "integer", "long", "short"])(
    "uses the numerical icons for %s",
    (dataType) => {
      expect(getSortIcons(dataType)).toEqual({
        asc: SortNumerical,
        desc: SortNumericalDesc,
      });
    },
  );

  it.each(["datetime", "timestamp"])(
    "uses the directional icons for %s, since Blueprint has no chronological glyph",
    (dataType) => {
      expect(getSortIcons(dataType)).toEqual({
        asc: SortAsc,
        desc: SortDesc,
      });
    },
  );

  it.each(["boolean", "attachment", "geopoint", "vector", "someFutureType"])(
    "falls back to the directional icons for %s",
    (dataType) => {
      expect(getSortIcons(dataType)).toEqual({
        asc: SortAsc,
        desc: SortDesc,
      });
    },
  );

  it("falls back to the directional icons when the type is unknown", () => {
    expect(getSortIcons(undefined)).toEqual({
      asc: SortAsc,
      desc: SortDesc,
    });
  });

  it("returns a stable reference so memoized consumers don't re-render", () => {
    expect(getSortIcons("string")).toBe(getSortIcons("string"));
    expect(getSortIcons("double")).toBe(getSortIcons("integer"));
    expect(getSortIcons(undefined)).toBe(getSortIcons("boolean"));
  });
});
