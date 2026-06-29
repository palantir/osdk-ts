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

import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { createDateHistogramBuckets } from "../createDateHistogramBuckets.js";
import { niceTicks } from "../createHistogramBuckets.js";
import { DateRangeHistogramInput } from "../DateRangeHistogramInput.js";
import { NumberRangeInput } from "../NumberRangeInput.js";

afterEach(cleanup);

describe("niceTicks", () => {
  it("returns [0] for non-positive max", () => {
    expect(niceTicks(0)).toEqual([0]);
    expect(niceTicks(-5)).toEqual([0]);
  });

  it("returns 0..max for small integers (1, 2, 3)", () => {
    expect(niceTicks(1)).toEqual([0, 1]);
    expect(niceTicks(2)).toEqual([0, 1, 2]);
    expect(niceTicks(3)).toEqual([0, 1, 2, 3]);
  });

  it("rounds to 1/2/5 × 10^n for larger values", () => {
    const t10 = niceTicks(10);
    expect(t10[0]).toBe(0);
    expect(t10[t10.length - 1]).toBe(10);
    // step is 2, so ticks are 0,2,4,6,8,10
    expect(t10).toEqual([0, 2, 4, 6, 8, 10]);

    const t27 = niceTicks(27);
    expect(t27[0]).toBe(0);
    expect(t27[t27.length - 1]).toBeGreaterThanOrEqual(27);

    const t1000 = niceTicks(1000);
    expect(t1000[0]).toBe(0);
    expect(t1000[t1000.length - 1]).toBe(1000);
    // Step rounds to a nice 1/2/5 × 10^n value
    const step = t1000[1] - t1000[0];
    expect([100, 200, 250, 500].includes(step)).toBe(true);
  });
});

describe("createDateHistogramBuckets", () => {
  it("returns empty when there are no value pairs", () => {
    const result = createDateHistogramBuckets([], {
      min: new Date(2020, 0, 1),
      max: new Date(2020, 0, 31),
    });
    expect(result.buckets).toEqual([]);
    expect(result.subtitle).toBe("");
  });

  it("uses daily buckets within a single month", () => {
    const pairs = [
      { value: new Date(2020, 4, 1), count: 1 },
      { value: new Date(2020, 4, 15), count: 3 },
      { value: new Date(2020, 4, 31), count: 2 },
    ];
    const result = createDateHistogramBuckets(pairs, {
      min: new Date(2020, 4, 1),
      max: new Date(2020, 4, 31),
    });
    expect(result.granularity).toBe("day");
    expect(result.buckets).toHaveLength(31);
    expect(result.subtitle).toBe("2020-05");
    // Bucket for May 15 should have count 3
    expect(result.buckets[14].count).toBe(3);
    expect(result.buckets[14].tickLabel).toBe("15");
  });

  it("uses monthly buckets when span is < 1 year", () => {
    const pairs = [
      { value: new Date(2020, 0, 15), count: 5 },
      { value: new Date(2020, 5, 10), count: 7 },
      { value: new Date(2020, 11, 31), count: 2 },
    ];
    const result = createDateHistogramBuckets(pairs, {
      min: new Date(2020, 0, 1),
      max: new Date(2020, 11, 31),
    });
    expect(result.granularity).toBe("month");
    expect(result.buckets).toHaveLength(12);
    expect(result.subtitle).toBe("2020");
    const expectedJune = new Intl.DateTimeFormat(undefined, {
      month: "short",
    }).format(new Date(2020, 5, 1));
    expect(result.buckets[5].tickLabel).toBe(expectedJune);
    expect(result.buckets[5].count).toBe(7);
  });

  it("uses yearly buckets when span > 1 year", () => {
    const pairs = [
      { value: new Date(2018, 4, 15), count: 4 },
      { value: new Date(2020, 5, 10), count: 8 },
      { value: new Date(2024, 11, 31), count: 1 },
    ];
    const result = createDateHistogramBuckets(pairs, {
      min: new Date(2018, 0, 1),
      max: new Date(2024, 11, 31),
    });
    expect(result.granularity).toBe("year");
    expect(result.buckets).toHaveLength(7);
    expect(result.buckets[0].tickLabel).toBe("2018");
    expect(result.buckets[0].count).toBe(4);
  });

  it("uses formatDate for the subtitle when provided", () => {
    const pairs = [{ value: new Date(2020, 4, 15), count: 1 }];
    const result = createDateHistogramBuckets(
      pairs,
      { min: new Date(2020, 4, 1), max: new Date(2020, 4, 31) },
      (d) => `custom-${d.getFullYear()}`
    );
    expect(result.subtitle).toBe("custom-2020");
  });

  it("keeps short-month x-tick labels even when formatDate is provided", () => {
    const pairs = [
      { value: new Date(2020, 0, 15), count: 5 },
      { value: new Date(2020, 5, 10), count: 7 },
      { value: new Date(2020, 11, 31), count: 2 },
    ];
    const result = createDateHistogramBuckets(
      pairs,
      { min: new Date(2020, 0, 1), max: new Date(2020, 11, 31) },
      (d) => `custom-${d.getFullYear()}-${d.getMonth()}`
    );
    expect(result.granularity).toBe("month");
    const expectedJune = new Intl.DateTimeFormat(undefined, {
      month: "short",
    }).format(new Date(2020, 5, 1));
    expect(result.buckets[5].tickLabel).toBe(expectedJune);
  });

  it("uses formatTickLabel to override month x-tick labels", () => {
    const pairs = [
      { value: new Date(2020, 0, 15), count: 5 },
      { value: new Date(2020, 5, 10), count: 7 },
    ];
    const result = createDateHistogramBuckets(
      pairs,
      { min: new Date(2020, 0, 1), max: new Date(2020, 11, 31) },
      (d) => `custom-${d.getFullYear()}`,
      (d, granularity) => `${granularity}:${d.getMonth()}`
    );
    expect(result.buckets[5].tickLabel).toBe("month:5");
  });
});

describe("RangeInput SVG histogram", () => {
  // 10-day span keeps every bucket below the count-label-skipping
  // threshold so all labels render — easier to assert against.
  const dateBuckets = [
    { value: new Date(2020, 4, 1), count: 5 },
    { value: new Date(2020, 4, 5), count: 8 },
    { value: new Date(2020, 4, 10), count: 2 },
  ];

  it("renders the histogram as an <svg> element", () => {
    const { container } = render(
      <DateRangeHistogramInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />
    );
    expect(container.querySelector("svg")).toBeDefined();
    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("renders one <rect> per bucket", () => {
    const { container } = render(
      <DateRangeHistogramInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />
    );
    const rects = container.querySelectorAll("svg rect");
    // Daily bucketer for May 1–10 → 10 buckets
    expect(rects.length).toBe(10);
  });

  it("renders bar count <text> labels for buckets with count > 0", () => {
    const { container } = render(
      <DateRangeHistogramInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />
    );
    const countLabels = container.querySelectorAll(
      'g[class*="countLabels"] text'
    );
    expect(countLabels.length).toBeGreaterThan(0);
    const rendered = Array.from(countLabels).map((t) => t.textContent);
    expect(rendered).toContain("8");
  });

  it("renders x-axis tick <text> labels for date histograms", () => {
    const { container } = render(
      <DateRangeHistogramInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />
    );
    const tickLabels = container.querySelectorAll('g[class*="xTicks"] text');
    expect(tickLabels.length).toBeGreaterThan(0);
  });

  it("renders the subtitle <text> below the histogram", () => {
    const { container } = render(
      <DateRangeHistogramInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />
    );
    const subtitle = container.querySelector('text[class*="subtitle"]');
    expect(subtitle?.textContent).toBe("2020-05");
  });

  it("renders y-axis axisLines + numeric tick labels", () => {
    const { container } = render(
      <DateRangeHistogramInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />
    );
    const axisLines = container.querySelectorAll('line[class*="axisLine"]');
    const yLabels = container.querySelectorAll('text[class*="yAxisLabel"]');
    expect(axisLines.length).toBeGreaterThan(1);
    expect(yLabels.length).toBeGreaterThan(1);
    const yValues = Array.from(yLabels).map((l) => l.textContent);
    expect(yValues).toContain("0");
  });

  it("does not stretch to nice round ticks when max ≤ 3", () => {
    const tinyBuckets = [
      { value: new Date(2020, 4, 1), count: 1 },
      { value: new Date(2020, 4, 15), count: 3 },
    ];
    const { container } = render(
      <DateRangeHistogramInput
        valueCountPairs={tinyBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />
    );
    const yValues = Array.from(
      container.querySelectorAll('text[class*="yAxisLabel"]')
    ).map((l) => l.textContent);
    // niceTicks(3) → [0, 1, 2, 3] — must NOT round to 5/10
    expect(yValues).toEqual(["0", "1", "2", "3"]);
  });

  it("numeric histogram renders axisLines + bar count labels (parity with date)", () => {
    const numericPairs = [
      { value: 10, count: 2 },
      { value: 50, count: 5 },
      { value: 90, count: 3 },
    ];
    const { container } = render(
      <NumberRangeInput
        valueCountPairs={numericPairs}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />
    );
    const svg = container.querySelector("svg");
    expect(svg).not.toBeNull();
    const axisLines = container.querySelectorAll('line[class*="axisLine"]');
    expect(axisLines.length).toBeGreaterThan(1);
    const countLabels = container.querySelectorAll(
      'g[class*="countLabels"] text'
    );
    expect(countLabels.length).toBeGreaterThan(0);
  });

  describe("clickToFilter (drag-to-select range)", () => {
    // RangeInput migrated from mouse* to pointer* + setPointerCapture so
    // touch and stylus work, and so dragging that exits the SVG still
    // resolves cleanly via pointercancel. Tests dispatch matching
    // pointer events. The clientX/Y on bare fireEvent calls is 0/0 in
    // happy-dom, so the handler falls back to the bar's data-bucket-index
    // attribute (which is set on each rect).
    const firePointerDown = (el: Element) =>
      fireEvent.pointerDown(el, { pointerId: 1 });
    const firePointerMove = (el: Element) =>
      fireEvent.pointerMove(el, { pointerId: 1 });
    const firePointerUp = (el: Element) =>
      fireEvent.pointerUp(el, { pointerId: 1 });
    // Aliases mirror the original test names so existing assertions stay
    // readable. fireEnd targets the SVG (where setPointerCapture routes
    // the up event) instead of the document.
    const fireMouseDown = firePointerDown;
    const fireMouseEnter = firePointerMove;
    const fireDocumentMouseUp = () => {
      const svg = document.querySelector("svg");
      if (svg != null) {
        firePointerUp(svg);
      }
    };

    it("does not invoke onChange when clickToFilter is omitted", () => {
      const onChange =
        vi.fn<(min: Date | undefined, max: Date | undefined) => void>();
      const { container } = render(
        <DateRangeHistogramInput
          valueCountPairs={dateBuckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={onChange}
        />
      );
      const rects = container.querySelectorAll('rect[class*="histogramBar"]');
      expect(rects.length).toBeGreaterThan(0);
      fireMouseDown(rects[0]);
      fireDocumentMouseUp();
      expect(onChange).not.toHaveBeenCalled();
    });

    it("single mousedown+mouseup on one bar sets the range to that bucket", () => {
      const onChange =
        vi.fn<(min: Date | undefined, max: Date | undefined) => void>();
      const { container } = render(
        <DateRangeHistogramInput
          valueCountPairs={dateBuckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={onChange}
          clickToFilter={true}
        />
      );
      const rects = container.querySelectorAll('rect[class*="histogramBar"]');
      fireMouseDown(rects[0]);
      fireDocumentMouseUp();
      expect(onChange).toHaveBeenCalledTimes(1);
      const [min, max] = onChange.mock.calls[0];
      expect(min?.getDate()).toBe(1);
      expect(max?.getDate()).toBe(2);
    });

    it("drag from bar 0 to bar 3 commits a range covering all four buckets", () => {
      const onChange =
        vi.fn<(min: Date | undefined, max: Date | undefined) => void>();
      const { container } = render(
        <DateRangeHistogramInput
          valueCountPairs={dateBuckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={onChange}
          clickToFilter={true}
        />
      );
      const rects = container.querySelectorAll('rect[class*="histogramBar"]');
      fireMouseDown(rects[0]);
      fireMouseEnter(rects[1]);
      fireMouseEnter(rects[2]);
      fireMouseEnter(rects[3]);
      fireDocumentMouseUp();
      expect(onChange).toHaveBeenCalledTimes(1);
      const [min, max] = onChange.mock.calls[0];
      // Daily buckets May 1..10; bucket 0 is [May 1, May 2], bucket 3 is
      // [May 4, May 5] → committed range = [May 1, May 5]
      expect(min?.getDate()).toBe(1);
      expect(max?.getDate()).toBe(5);
    });

    it("drag in reverse (bar 3 → bar 0) still commits with min < max", () => {
      const onChange =
        vi.fn<(min: Date | undefined, max: Date | undefined) => void>();
      const { container } = render(
        <DateRangeHistogramInput
          valueCountPairs={dateBuckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={onChange}
          clickToFilter={true}
        />
      );
      const rects = container.querySelectorAll('rect[class*="histogramBar"]');
      fireMouseDown(rects[3]);
      fireMouseEnter(rects[2]);
      fireMouseEnter(rects[1]);
      fireMouseEnter(rects[0]);
      fireDocumentMouseUp();
      expect(onChange).toHaveBeenCalledTimes(1);
      const [min, max] = onChange.mock.calls[0];
      expect(min?.getDate()).toBe(1);
      expect(max?.getDate()).toBe(5);
    });

    it('sets data-click-to-filter="true" on rects when enabled', () => {
      const { container } = render(
        <DateRangeHistogramInput
          valueCountPairs={dateBuckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={vi.fn()}
          clickToFilter={true}
        />
      );
      const rects = container.querySelectorAll('rect[class*="histogramBar"]');
      const allEnabled = Array.from(rects).every(
        (r) => r.getAttribute("data-click-to-filter") === "true"
      );
      expect(allEnabled).toBe(true);
    });

    it("does NOT set data-click-to-filter when disabled", () => {
      const { container } = render(
        <DateRangeHistogramInput
          valueCountPairs={dateBuckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={vi.fn()}
        />
      );
      const rects = container.querySelectorAll('rect[class*="histogramBar"]');
      const noneEnabled = Array.from(rects).every(
        (r) => !r.hasAttribute("data-click-to-filter")
      );
      expect(noneEnabled).toBe(true);
    });

    it("pointer fallback in inter-bar gap snaps to the nearer bar", () => {
      // happy-dom does not implement SVG matrix transforms, so by default
      // `bucketIndexAtClient` short-circuits to null and only the bar-rect
      // `data-bucket-index` path runs. Mock the minimum surface so the
      // pixel-fallback (round-to-nearest-bar-center) is exercised.
      const ctm = {
        inverse() {
          return this;
        },
      };
      const getScreenCTMSpy = vi
        .spyOn(SVGSVGElement.prototype, "getScreenCTM")
        .mockReturnValue(ctm as unknown as DOMMatrix);
      const createSVGPointSpy = vi
        .spyOn(SVGSVGElement.prototype, "createSVGPoint")
        .mockImplementation(() => {
          const pt = { x: 0, y: 0 } as {
            x: number;
            y: number;
            matrixTransform: (m: unknown) => { x: number; y: number };
          };
          pt.matrixTransform = () => ({ x: pt.x, y: pt.y });
          return pt as unknown as DOMPoint;
        });

      try {
        const onChange =
          vi.fn<(min: number | undefined, max: number | undefined) => void>();
        const numericPairs = [
          { value: 10, count: 1 },
          { value: 20, count: 1 },
          { value: 30, count: 1 },
          { value: 40, count: 1 },
          { value: 50, count: 1 },
        ];
        const { container } = render(
          <NumberRangeInput
            valueCountPairs={numericPairs}
            isLoading={false}
            minValue={undefined}
            maxValue={undefined}
            onChange={onChange}
            clickToFilter={true}
          />
        );
        const svg = container.querySelector("svg");
        expect(svg).not.toBeNull();
        const rects = container.querySelectorAll('rect[class*="histogramBar"]');
        const bucketCount = rects.length;
        expect(bucketCount).toBeGreaterThanOrEqual(3);
        // SVG geometry constants — must match RangeInput.tsx.
        const PAD_LEFT = 30;
        const PLOT_W = 360;
        const BAR_GAP = 2;
        const slotW = (PLOT_W + BAR_GAP) / bucketCount;
        // Pixel in the gap between bar 1 and bar 2, biased toward bar 2.
        // Old Math.floor formula would map this to bar 1; new
        // round-to-nearest-bar-center maps it to bar 2.
        const bar2LeftEdge = PAD_LEFT + 2 * slotW;
        const closerToBar2 = bar2LeftEdge - BAR_GAP / 2 + 0.5;
        if (svg != null) {
          fireEvent.pointerDown(svg, {
            pointerId: 1,
            clientX: closerToBar2,
            clientY: 50,
          });
          fireEvent.pointerUp(svg, {
            pointerId: 1,
            clientX: closerToBar2,
            clientY: 50,
          });
        }
        expect(onChange).toHaveBeenCalledTimes(1);
        // Cross-check: clicking directly on bar 2's rect should yield the
        // same onChange args as the gap-click. If they match, the fallback
        // correctly snaps to bar 2 rather than bar 1.
        const gapCall = onChange.mock.calls[0];
        onChange.mockClear();
        cleanup();
        getScreenCTMSpy.mockRestore();
        createSVGPointSpy.mockRestore();

        const onChange2 =
          vi.fn<(min: number | undefined, max: number | undefined) => void>();
        const { container: container2 } = render(
          <NumberRangeInput
            valueCountPairs={numericPairs}
            isLoading={false}
            minValue={undefined}
            maxValue={undefined}
            onChange={onChange2}
            clickToFilter={true}
          />
        );
        const rects2 = container2.querySelectorAll(
          'rect[class*="histogramBar"]'
        );
        firePointerDown(rects2[2]);
        const svg2 = container2.querySelector("svg");
        if (svg2 != null) {
          firePointerUp(svg2);
        }
        expect(onChange2).toHaveBeenCalledTimes(1);
        expect(onChange2.mock.calls[0]).toEqual(gapCall);
      } finally {
        getScreenCTMSpy.mockRestore();
        createSVGPointSpy.mockRestore();
      }
    });

    it("selection band does not extend to buckets adjacent to the filter boundaries", () => {
      // Reproduces the off-by-one band bug: with a filter aligned exactly
      // on bucket boundaries — the same shape committed by drag-to-select
      // (`onChange(bucket[lo].min, bucket[hi].max)`) — the band must cover
      // only bars lo..hi, not lo-1..hi+1. Because buckets are half-open
      // [min, max), the shared endpoints between adjacent buckets must use
      // strict comparison to avoid pulling neighbors into the band.
      const pairs = [
        { value: new Date(2020, 4, 1), count: 1 },
        { value: new Date(2020, 4, 5), count: 1 },
        { value: new Date(2020, 4, 10), count: 1 },
      ];
      // 10 daily buckets May 1..10. minValue=bucket[3].min=May 4,
      // maxValue=bucket[5].max=May 7. Bars 3, 4, 5 should be in-range.
      const { container } = render(
        <DateRangeHistogramInput
          valueCountPairs={pairs}
          isLoading={false}
          minValue={new Date(2020, 4, 4)}
          maxValue={new Date(2020, 4, 7)}
          onChange={vi.fn()}
        />
      );
      const rects = container.querySelectorAll('rect[class*="histogramBar"]');
      const inRangeIndices: number[] = [];
      rects.forEach((r, i) => {
        if (r.getAttribute("data-in-range") === "true") {
          inRangeIndices.push(i);
        }
      });
      expect(inRangeIndices).toEqual([3, 4, 5]);
    });
  });

  it("numeric histogram x-axis renders all nice tick labels when they fit", () => {
    const numericPairs = [
      { value: 10, count: 2 },
      { value: 50, count: 5 },
      { value: 90, count: 3 },
    ];
    const { container } = render(
      <NumberRangeInput
        valueCountPairs={numericPairs}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />
    );
    const tickLabels = container.querySelectorAll('g[class*="xTicks"] text');
    const labelTexts = Array.from(tickLabels).map((t) => t.textContent);
    expect(labelTexts).toContain("10");
    expect(labelTexts).toContain("90");
    expect(tickLabels.length).toBeGreaterThanOrEqual(2);
  });

  it("numeric histogram x-axis drops ticks when wide labels would overlap", () => {
    const numericPairs = [
      { value: 100_000_000, count: 1 },
      { value: 500_000_000, count: 2 },
      { value: 900_000_000, count: 1 },
    ];
    const { container } = render(
      <NumberRangeInput
        valueCountPairs={numericPairs}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />
    );
    const tickLabels = container.querySelectorAll('g[class*="xTicks"] text');
    const labelTexts = Array.from(tickLabels).map((t) => t.textContent);
    expect(tickLabels.length).toBeGreaterThanOrEqual(2);
    expect(labelTexts[0]).toBeTruthy();
    expect(labelTexts[labelTexts.length - 1]).toBeTruthy();
  });
});
