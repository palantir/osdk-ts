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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DateRangeHistogramInput } from "../DateRangeHistogramInput.js";

// Render the range calendar synchronously so the picker popover (and its
// shortcut rail) mount in happy-dom without resolving React.lazy. The picker's
// own behavior is covered by DateRangePicker's tests; here we only exercise the
// histogram wrapper's wiring (formatDate plumbing + shortcut -> onChange).
vi.mock("../../../../shared/calendar/LazyDateRangeCalendar.js", async () => {
  const { default: DateRangeCalendar } = await vi.importActual<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    typeof import("../../../../shared/calendar/DateRangeCalendar.js")
  >("../../../../shared/calendar/DateRangeCalendar.js");
  return { LazyDateRangeCalendar: DateRangeCalendar };
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

const buckets = [
  { value: new Date(2024, 0, 1), count: 5 },
  { value: new Date(2024, 5, 30), count: 7 },
];

const slashFormat = (d: Date): string =>
  `${String(d.getMonth() + 1).padStart(2, "0")}/${
    String(d.getDate()).padStart(2, "0")
  }/${d.getFullYear()}`;

function renderInput(
  props: Partial<React.ComponentProps<typeof DateRangeHistogramInput>> = {},
) {
  return render(
    <DateRangeHistogramInput
      valueCountPairs={buckets}
      isLoading={false}
      minValue={undefined}
      maxValue={undefined}
      onChange={vi.fn()}
      {...props}
    />,
  );
}

describe("DateRangeHistogramInput", () => {
  it("renders Start and End date inputs", () => {
    renderInput();
    expect(screen.getByLabelText("Start date")).toBeDefined();
    expect(screen.getByLabelText("End date")).toBeDefined();
  });

  it("honors formatDate on the start date input display", () => {
    const min = new Date(2024, 0, 15);
    renderInput({
      minValue: min,
      maxValue: new Date(2024, 5, 30),
      formatDate: slashFormat,
    });
    const startInput = screen.getByLabelText("Start date") as HTMLInputElement;
    expect(startInput.value).toBe(slashFormat(min));
  });

  describe("formatDate plumbing (histogram tooltip)", () => {
    it("uses formatDate for the histogram bar tooltip when provided", () => {
      const { container } = renderInput({ formatDate: slashFormat });
      // The histogram bar tooltip is portaled to document.body when a bar
      // is hovered, so we query there rather than the local container.
      const rects = container.querySelectorAll(
        "rect[class*=\"histogramBar\"]",
      );
      expect(rects.length).toBeGreaterThan(0);
      fireEvent.pointerMove(rects[0], { pointerId: 1 });
      const tooltip = document.body.querySelector("div[class*=\"tooltip\"]");
      expect(tooltip).not.toBeNull();
      expect(tooltip?.textContent ?? "").toMatch(/\d{2}\/\d{2}\/\d{4}/);
    });

    it("uses the default tooltip format when formatDate is omitted", () => {
      const { container } = renderInput();
      const rects = container.querySelectorAll(
        "rect[class*=\"histogramBar\"]",
      );
      expect(rects.length).toBeGreaterThan(0);
      fireEvent.pointerMove(rects[0], { pointerId: 1 });
      const tooltip = document.body.querySelector("div[class*=\"tooltip\"]");
      expect(tooltip).not.toBeNull();
      // ISO format when formatDate is omitted.
      expect(tooltip?.textContent ?? "").toMatch(/^\d{4}-\d{2}-\d{2}/);
    });
  });

  describe("date shortcuts", () => {
    it("renders the shortcut rail inside the picker popover", () => {
      renderInput({ dateShortcuts: true });
      fireEvent.focus(screen.getByLabelText("Start date"));
      expect(screen.getByRole("button", { name: "Past week" })).toBeDefined();
    });

    it("applies a shortcut's range to both bounds in one click", () => {
      // Mid-year date avoids DST boundary drift.
      vi.useFakeTimers({ now: new Date(2024, 5, 15, 12, 0, 0, 0) });
      const onChange = vi.fn();
      renderInput({ dateShortcuts: true, onChange });
      fireEvent.focus(screen.getByLabelText("Start date"));
      fireEvent.click(screen.getByRole("button", { name: "Past week" }));

      expect(onChange).toHaveBeenCalledTimes(1);
      const [min, max] = onChange.mock.calls[0];
      if (!(min instanceof Date) || !(max instanceof Date)) {
        throw new Error("expected both bounds to be Dates");
      }
      expect(max.getTime() - min.getTime()).toBe(7 * 24 * 60 * 60 * 1000);
    });
  });
});
