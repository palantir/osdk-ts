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

import {
  formatRelativeBound,
  resolveRelativeDateBound,
  resolveRelativeDates,
} from "../utils/resolveRelativeDate.js";

const NOW = new Date("2026-08-15T12:00:00.000Z");

describe("resolveRelativeDateBound", () => {
  describe("ago direction", () => {
    it("subtracts days", () => {
      const result = resolveRelativeDateBound(
        { count: 7, unit: "days", direction: "ago" },
        NOW,
      );
      expect(result.toISOString()).toBe("2026-08-08T12:00:00.000Z");
    });

    it("subtracts weeks", () => {
      const result = resolveRelativeDateBound(
        { count: 2, unit: "weeks", direction: "ago" },
        NOW,
      );
      expect(result.toISOString()).toBe("2026-08-01T12:00:00.000Z");
    });

    it("subtracts months", () => {
      const result = resolveRelativeDateBound(
        { count: 3, unit: "months", direction: "ago" },
        NOW,
      );
      expect(result.toISOString()).toBe("2026-05-15T12:00:00.000Z");
    });

    it("subtracts years", () => {
      const result = resolveRelativeDateBound(
        { count: 1, unit: "years", direction: "ago" },
        NOW,
      );
      expect(result.toISOString()).toBe("2025-08-15T12:00:00.000Z");
    });
  });

  describe("fromNow direction", () => {
    it("adds days", () => {
      const result = resolveRelativeDateBound(
        { count: 5, unit: "days", direction: "fromNow" },
        NOW,
      );
      expect(result.toISOString()).toBe("2026-08-20T12:00:00.000Z");
    });

    it("adds weeks", () => {
      const result = resolveRelativeDateBound(
        { count: 1, unit: "weeks", direction: "fromNow" },
        NOW,
      );
      expect(result.toISOString()).toBe("2026-08-22T12:00:00.000Z");
    });

    it("adds months", () => {
      const result = resolveRelativeDateBound(
        { count: 2, unit: "months", direction: "fromNow" },
        NOW,
      );
      expect(result.toISOString()).toBe("2026-10-15T12:00:00.000Z");
    });

    it("adds years", () => {
      const result = resolveRelativeDateBound(
        { count: 3, unit: "years", direction: "fromNow" },
        NOW,
      );
      expect(result.toISOString()).toBe("2029-08-15T12:00:00.000Z");
    });
  });

  it("count 0 returns now", () => {
    const result = resolveRelativeDateBound(
      { count: 0, unit: "days", direction: "ago" },
      NOW,
    );
    expect(result.toISOString()).toBe(NOW.toISOString());
  });

  it("handles month day clamping (Jan 31 minus 1 month)", () => {
    const jan31 = new Date("2026-01-31T12:00:00.000Z");
    const result = resolveRelativeDateBound(
      { count: 1, unit: "months", direction: "ago" },
      jan31,
    );
    // Dec 31 — JS setMonth auto-adjusts
    expect(result.getMonth()).toBe(11); // December
    expect(result.getDate()).toBe(31);
  });
});

describe("resolveRelativeDates", () => {
  it("resolves both bounds", () => {
    const state = {
      type: "DATE_RANGE" as const,
      isRelative: true,
      relativeMin: {
        count: 30,
        unit: "days" as const,
        direction: "ago" as const,
      },
      relativeMax: {
        count: 0,
        unit: "days" as const,
        direction: "fromNow" as const,
      },
    };
    const { minValue, maxValue } = resolveRelativeDates(state, NOW);
    expect(minValue).toBeDefined();
    expect(maxValue).toBeDefined();
    expect(minValue!.toISOString()).toBe("2026-07-16T12:00:00.000Z");
    expect(maxValue!.toISOString()).toBe(NOW.toISOString());
  });

  it("returns undefined for absent bounds", () => {
    const state = {
      type: "DATE_RANGE" as const,
      isRelative: true,
      relativeMin: {
        count: 7,
        unit: "days" as const,
        direction: "ago" as const,
      },
    };
    const { minValue, maxValue } = resolveRelativeDates(state, NOW);
    expect(minValue).toBeDefined();
    expect(maxValue).toBeUndefined();
  });

  it("returns both undefined when neither bound is set", () => {
    const state = { type: "DATE_RANGE" as const, isRelative: true };
    const { minValue, maxValue } = resolveRelativeDates(state, NOW);
    expect(minValue).toBeUndefined();
    expect(maxValue).toBeUndefined();
  });
});

describe("formatRelativeBound", () => {
  it("formats count 0 as Today", () => {
    expect(
      formatRelativeBound({ count: 0, unit: "days", direction: "ago" }),
    ).toBe("Today");
  });

  it("formats singular unit", () => {
    expect(
      formatRelativeBound({ count: 1, unit: "months", direction: "ago" }),
    ).toBe("1 month ago");
  });

  it("formats plural unit", () => {
    expect(
      formatRelativeBound({ count: 7, unit: "days", direction: "ago" }),
    ).toBe("7 days ago");
  });

  it("formats fromNow direction", () => {
    expect(
      formatRelativeBound({ count: 5, unit: "days", direction: "fromNow" }),
    ).toBe("5 days from now");
  });
});
