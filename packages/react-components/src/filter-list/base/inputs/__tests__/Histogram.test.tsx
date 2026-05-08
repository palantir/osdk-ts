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
import { DateRangeInput } from "../DateRangeInput.js";
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
    expect(result.subtitle).toBe("May 2020");
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
    expect(result.buckets[5].tickLabel).toBe("Jun");
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
      (d) => `custom-${d.getFullYear()}`,
    );
    expect(result.subtitle).toBe("custom-2020");
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
      <DateRangeInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />,
    );
    expect(container.querySelector("svg")).toBeDefined();
    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("renders one <rect> per bucket", () => {
    const { container } = render(
      <DateRangeInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />,
    );
    const rects = container.querySelectorAll("svg rect");
    // Daily bucketer for May 1–10 → 10 buckets
    expect(rects.length).toBe(10);
  });

  it("renders bar count <text> labels for buckets with count > 0", () => {
    const { container } = render(
      <DateRangeInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />,
    );
    const countLabels = container.querySelectorAll(
      "g[class*=\"countLabels\"] text",
    );
    expect(countLabels.length).toBeGreaterThan(0);
    const rendered = Array.from(countLabels).map((t) => t.textContent);
    expect(rendered).toContain("8");
  });

  it("renders x-axis tick <text> labels for date histograms", () => {
    const { container } = render(
      <DateRangeInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />,
    );
    const tickLabels = container.querySelectorAll("g[class*=\"xTicks\"] text");
    expect(tickLabels.length).toBeGreaterThan(0);
  });

  it("renders the subtitle <text> below the histogram", () => {
    const { container } = render(
      <DateRangeInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />,
    );
    const subtitle = container.querySelector("text[class*=\"subtitle\"]");
    expect(subtitle?.textContent).toBe("May 2020");
  });

  it("renders y-axis axisLines + numeric tick labels", () => {
    const { container } = render(
      <DateRangeInput
        valueCountPairs={dateBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />,
    );
    const axisLines = container.querySelectorAll("line[class*=\"axisLine\"]");
    const yLabels = container.querySelectorAll("text[class*=\"yAxisLabel\"]");
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
      <DateRangeInput
        valueCountPairs={tinyBuckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />,
    );
    const yValues = Array.from(
      container.querySelectorAll("text[class*=\"yAxisLabel\"]"),
    ).map((l) => l.textContent);
    // niceTicks(3) → [0, 1, 2, 3] — must NOT round to 5/10
    expect(yValues).toEqual(["0", "1", "2", "3"]);
  });

  it(
    "numeric histogram renders axisLines + bar count labels (parity with date)",
    () => {
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
        />,
      );
      const svg = container.querySelector("svg");
      expect(svg).not.toBeNull();
      const axisLines = container.querySelectorAll(
        "line[class*=\"axisLine\"]",
      );
      expect(axisLines.length).toBeGreaterThan(1);
      const countLabels = container.querySelectorAll(
        "g[class*=\"countLabels\"] text",
      );
      expect(countLabels.length).toBeGreaterThan(0);
    },
  );

  describe("clickToFilter (drag-to-select range)", () => {
    const fireMouseDown = (el: Element) => fireEvent.mouseDown(el);
    const fireMouseEnter = (el: Element) => fireEvent.mouseEnter(el);
    const fireDocumentMouseUp = () =>
      document.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));

    it("does not invoke onChange when clickToFilter is omitted", () => {
      const onChange = vi.fn();
      const { container } = render(
        <DateRangeInput
          valueCountPairs={dateBuckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={onChange}
        />,
      );
      const rects = container.querySelectorAll(
        "rect[class*=\"histogramBar\"]",
      );
      expect(rects.length).toBeGreaterThan(0);
      fireMouseDown(rects[0]);
      fireDocumentMouseUp();
      expect(onChange).not.toHaveBeenCalled();
    });

    it(
      "single mousedown+mouseup on one bar sets the range to that bucket",
      () => {
        const onChange = vi.fn();
        const { container } = render(
          <DateRangeInput
            valueCountPairs={dateBuckets}
            isLoading={false}
            minValue={undefined}
            maxValue={undefined}
            onChange={onChange}
            clickToFilter={true}
          />,
        );
        const rects = container.querySelectorAll(
          "rect[class*=\"histogramBar\"]",
        );
        fireMouseDown(rects[0]);
        fireDocumentMouseUp();
        expect(onChange).toHaveBeenCalledTimes(1);
        const [min, max] = onChange.mock.calls[0];
        expect((min as Date).getDate()).toBe(1);
        expect((max as Date).getDate()).toBe(2);
      },
    );

    it(
      "drag from bar 0 to bar 3 commits a range covering all four buckets",
      () => {
        const onChange = vi.fn();
        const { container } = render(
          <DateRangeInput
            valueCountPairs={dateBuckets}
            isLoading={false}
            minValue={undefined}
            maxValue={undefined}
            onChange={onChange}
            clickToFilter={true}
          />,
        );
        const rects = container.querySelectorAll(
          "rect[class*=\"histogramBar\"]",
        );
        fireMouseDown(rects[0]);
        fireMouseEnter(rects[1]);
        fireMouseEnter(rects[2]);
        fireMouseEnter(rects[3]);
        fireDocumentMouseUp();
        expect(onChange).toHaveBeenCalledTimes(1);
        const [min, max] = onChange.mock.calls[0];
        // Daily buckets May 1..10; bucket 0 is [May 1, May 2], bucket 3 is
        // [May 4, May 5] → committed range = [May 1, May 5]
        expect((min as Date).getDate()).toBe(1);
        expect((max as Date).getDate()).toBe(5);
      },
    );

    it("drag in reverse (bar 3 → bar 0) still commits with min < max", () => {
      const onChange = vi.fn();
      const { container } = render(
        <DateRangeInput
          valueCountPairs={dateBuckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={onChange}
          clickToFilter={true}
        />,
      );
      const rects = container.querySelectorAll(
        "rect[class*=\"histogramBar\"]",
      );
      fireMouseDown(rects[3]);
      fireMouseEnter(rects[2]);
      fireMouseEnter(rects[1]);
      fireMouseEnter(rects[0]);
      fireDocumentMouseUp();
      expect(onChange).toHaveBeenCalledTimes(1);
      const [min, max] = onChange.mock.calls[0];
      expect((min as Date).getDate()).toBe(1);
      expect((max as Date).getDate()).toBe(5);
    });

    it("sets data-click-to-filter=\"true\" on rects when enabled", () => {
      const { container } = render(
        <DateRangeInput
          valueCountPairs={dateBuckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={vi.fn()}
          clickToFilter={true}
        />,
      );
      const rects = container.querySelectorAll(
        "rect[class*=\"histogramBar\"]",
      );
      const allEnabled = Array.from(rects).every(
        (r) => r.getAttribute("data-click-to-filter") === "true",
      );
      expect(allEnabled).toBe(true);
    });

    it("does NOT set data-click-to-filter when disabled", () => {
      const { container } = render(
        <DateRangeInput
          valueCountPairs={dateBuckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={vi.fn()}
        />,
      );
      const rects = container.querySelectorAll(
        "rect[class*=\"histogramBar\"]",
      );
      const noneEnabled = Array.from(rects).every(
        (r) => !r.hasAttribute("data-click-to-filter"),
      );
      expect(noneEnabled).toBe(true);
    });
  });

  it(
    "numeric histogram x-axis ticks are min/max only — no per-bucket numeric labels",
    () => {
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
        />,
      );
      const tickLabels = container.querySelectorAll(
        "g[class*=\"xTicks\"] text",
      );
      // niceNum-style helper rounds to 5/10 etc., but the bucketer creates
      // 20 evenly-spaced buckets across [10, 90]. We only render ticks at
      // the first and last buckets — exactly 2 tick texts.
      expect(tickLabels.length).toBe(2);
    },
  );
});
