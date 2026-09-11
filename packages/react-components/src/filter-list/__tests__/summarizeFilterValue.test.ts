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

import { summarizeFilterValue } from "../utils/summarizeFilterValue.js";
import { createDateRangeState, createPropertyFilterDef } from "./testUtils.js";

describe("summarizeFilterValue", () => {
  describe("relative DATE_RANGE", () => {
    it("formats both relative bounds", () => {
      const def = createPropertyFilterDef(
        "createdAt",
        "DATE_RANGE",
        createDateRangeState(),
      );
      const state = createDateRangeState(undefined, undefined, {
        relativeState: {
          relativeMin: { count: 7, unit: "days", direction: "ago" },
          relativeMax: { count: 0, unit: "days", direction: "fromNow" },
        },
      });
      expect(summarizeFilterValue(def, state)).toBe("7 days ago – Today");
    });

    it("shows Indefinitely for null min bound", () => {
      const def = createPropertyFilterDef(
        "createdAt",
        "DATE_RANGE",
        createDateRangeState(),
      );
      const state = createDateRangeState(undefined, undefined, {
        relativeState: {
          relativeMin: null,
          relativeMax: { count: 0, unit: "days", direction: "fromNow" },
        },
      });
      expect(summarizeFilterValue(def, state)).toBe("Indefinitely – Today");
    });

    it("shows Indefinitely for null max bound", () => {
      const def = createPropertyFilterDef(
        "createdAt",
        "DATE_RANGE",
        createDateRangeState(),
      );
      const state = createDateRangeState(undefined, undefined, {
        relativeState: {
          relativeMin: { count: 5, unit: "months", direction: "ago" },
          relativeMax: null,
        },
      });
      expect(summarizeFilterValue(def, state)).toBe(
        "5 months ago – Indefinitely",
      );
    });

    it("shows both Indefinitely when both bounds are null", () => {
      const def = createPropertyFilterDef(
        "createdAt",
        "DATE_RANGE",
        createDateRangeState(),
      );
      const state = createDateRangeState(undefined, undefined, {
        relativeState: { relativeMin: null, relativeMax: null },
      });
      expect(summarizeFilterValue(def, state)).toBe(
        "Indefinitely – Indefinitely",
      );
    });

    it("singularizes unit for count 1", () => {
      const def = createPropertyFilterDef(
        "createdAt",
        "DATE_RANGE",
        createDateRangeState(),
      );
      const state = createDateRangeState(undefined, undefined, {
        relativeState: {
          relativeMin: { count: 1, unit: "months", direction: "ago" },
          relativeMax: { count: 1, unit: "weeks", direction: "fromNow" },
        },
      });
      expect(summarizeFilterValue(def, state)).toBe(
        "1 month ago – 1 week from now",
      );
    });
  });
});
