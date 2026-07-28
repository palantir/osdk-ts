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

// Replace the lazy single-date calendar with a synchronous import so the
// popover renders in happy-dom without resolving React.lazy.
vi.mock("../../../../shared/calendar/LazyDateCalendar.js", async () => {
  const { default: DateCalendar } = await vi.importActual<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    typeof import("../../../../shared/calendar/DateCalendar.js")
  >("../../../../shared/calendar/DateCalendar.js");
  return { LazyDateCalendar: DateCalendar };
});

afterEach(cleanup);

const buckets = [
  { value: new Date(2024, 0, 1), count: 5 },
  { value: new Date(2024, 5, 30), count: 7 },
];

const slashFormat = (d: Date): string =>
  `${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(
    2,
    "0"
  )}/${d.getFullYear()}`;

function renderInput(
  props: Partial<React.ComponentProps<typeof DateRangeHistogramInput>> = {}
) {
  return render(
    <DateRangeHistogramInput
      valueCountPairs={buckets}
      isLoading={false}
      minValue={undefined}
      maxValue={undefined}
      onChange={vi.fn()}
      {...props}
    />
  );
}

describe("DateRangeHistogramInput", () => {
  it("renders independent From and To inputs", () => {
    renderInput();
    expect(screen.getByLabelText("From")).toBeDefined();
    expect(screen.getByLabelText("To")).toBeDefined();
  });

  describe("independent popovers", () => {
    it("opens only the From popover when From is focused", () => {
      renderInput();
      const fromInput = screen.getByLabelText("From");
      const toInput = screen.getByLabelText("To");

      fireEvent.focus(fromInput);

      expect(fromInput.getAttribute("aria-expanded")).toBe("true");
      expect(toInput.getAttribute("aria-expanded")).toBe("false");
    });

    it("opens only the To popover when To is focused", () => {
      renderInput();
      const fromInput = screen.getByLabelText("From");
      const toInput = screen.getByLabelText("To");

      fireEvent.focus(toInput);

      expect(toInput.getAttribute("aria-expanded")).toBe("true");
      expect(fromInput.getAttribute("aria-expanded")).toBe("false");
    });
  });

  describe("Today and Clear actions", () => {
    it("renders Today and Clear in the From popover", () => {
      renderInput();
      fireEvent.focus(screen.getByLabelText("From"));

      expect(screen.getByRole("button", { name: "Today" })).toBeDefined();
      expect(screen.getByRole("button", { name: "Clear" })).toBeDefined();
    });

    it("renders Today and Clear in the To popover", () => {
      renderInput();
      fireEvent.focus(screen.getByLabelText("To"));

      expect(screen.getByRole("button", { name: "Today" })).toBeDefined();
      expect(screen.getByRole("button", { name: "Clear" })).toBeDefined();
    });

    it("Clear in From input resets only minValue", () => {
      const onChange = vi.fn();
      const min = new Date(2024, 0, 15);
      const max = new Date(2024, 5, 30);
      renderInput({ minValue: min, maxValue: max, onChange });
      fireEvent.focus(screen.getByLabelText("From"));
      fireEvent.click(screen.getByRole("button", { name: "Clear" }));

      expect(onChange).toHaveBeenCalledWith(undefined, max);
    });

    it("Today in From input sets minValue to today's date", () => {
      const onChange = vi.fn();
      renderInput({ onChange });
      fireEvent.focus(screen.getByLabelText("From"));
      fireEvent.click(screen.getByRole("button", { name: "Today" }));

      expect(onChange).toHaveBeenCalledTimes(1);
      const [picked, otherBoundary] = onChange.mock.calls[0];
      if (!(picked instanceof Date)) {
        throw new Error("expected picked to be a Date");
      }
      const today = new Date();
      expect(picked.getFullYear()).toBe(today.getFullYear());
      expect(picked.getMonth()).toBe(today.getMonth());
      expect(picked.getDate()).toBe(today.getDate());
      expect(otherBoundary).toBeUndefined();
    });
  });

  describe("cross-bound constraints", () => {
    it("blocks picking a From date after the current To", () => {
      // Seed both values so the From calendar opens at the same month as the
      // boundary — otherwise the viewport lands on today's date and the
      // boundary day isn't in the DOM.
      const onChange = vi.fn();
      renderInput({
        minValue: new Date(2024, 0, 5),
        maxValue: new Date(2024, 0, 10),
        onChange,
      });
      fireEvent.focus(screen.getByLabelText("From"));

      // 11th is past the cross-bound. Clicking must not propagate.
      fireEvent.click(screen.getByText("11"));
      expect(onChange).not.toHaveBeenCalled();
    });

    it("blocks picking a To date before the current From", () => {
      const onChange = vi.fn();
      renderInput({
        minValue: new Date(2024, 0, 20),
        maxValue: new Date(2024, 0, 25),
        onChange,
      });
      fireEvent.focus(screen.getByLabelText("To"));

      // 19th is before the cross-bound. Clicking must not propagate.
      fireEvent.click(screen.getByText("19"));
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("formatDate plumbing", () => {
    it("uses formatDate for the histogram bar tooltip when provided", () => {
      const { container } = renderInput({ formatDate: slashFormat });
      // The histogram bar tooltip is portaled to document.body when a bar
      // is hovered, so we query there rather than the local container.
      const rects = container.querySelectorAll('rect[class*="histogramBar"]');
      expect(rects.length).toBeGreaterThan(0);
      fireEvent.pointerMove(rects[0], { pointerId: 1 });
      const tooltip = document.body.querySelector('div[class*="tooltip"]');
      expect(tooltip).not.toBeNull();
      expect(tooltip?.textContent ?? "").toMatch(/\d{2}\/\d{2}\/\d{4}/u);
    });

    it("honors formatDate on the From input display", () => {
      const min = new Date(2024, 0, 15);
      renderInput({ minValue: min, formatDate: slashFormat });
      const fromInput = screen.getByLabelText("From") as HTMLInputElement;
      expect(fromInput.value).toBe(slashFormat(min));
    });

    it("uses the default tooltip format when formatDate is omitted", () => {
      const { container } = renderInput();
      const rects = container.querySelectorAll('rect[class*="histogramBar"]');
      expect(rects.length).toBeGreaterThan(0);
      fireEvent.pointerMove(rects[0], { pointerId: 1 });
      const tooltip = document.body.querySelector('div[class*="tooltip"]');
      expect(tooltip).not.toBeNull();
      // ISO format when formatDate is omitted.
      expect(tooltip?.textContent ?? "").toMatch(/^\d{4}-\d{2}-\d{2}/u);
    });
  });
});
