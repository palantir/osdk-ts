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

describe("DateRangeHistogramInput", () => {
  it("renders independent From and To inputs", () => {
    render(
      <DateRangeHistogramInput
        valueCountPairs={buckets}
        isLoading={false}
        minValue={undefined}
        maxValue={undefined}
        onChange={vi.fn()}
      />,
    );
    expect(screen.getByLabelText("From")).toBeDefined();
    expect(screen.getByLabelText("To")).toBeDefined();
  });

  describe("independent popovers", () => {
    it("opens only the From popover when From is focused", () => {
      render(
        <DateRangeHistogramInput
          valueCountPairs={buckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={vi.fn()}
        />,
      );
      const fromInput = screen.getByLabelText("From");
      const toInput = screen.getByLabelText("To");

      fireEvent.focus(fromInput);

      expect(fromInput.getAttribute("aria-expanded")).toBe("true");
      expect(toInput.getAttribute("aria-expanded")).toBe("false");
    });

    it("opens only the To popover when To is focused", () => {
      render(
        <DateRangeHistogramInput
          valueCountPairs={buckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={vi.fn()}
        />,
      );
      const fromInput = screen.getByLabelText("From");
      const toInput = screen.getByLabelText("To");

      fireEvent.focus(toInput);

      expect(toInput.getAttribute("aria-expanded")).toBe("true");
      expect(fromInput.getAttribute("aria-expanded")).toBe("false");
    });
  });

  describe("Today and Clear actions", () => {
    it("renders Today and Clear in the From popover", () => {
      render(
        <DateRangeHistogramInput
          valueCountPairs={buckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={vi.fn()}
        />,
      );
      fireEvent.focus(screen.getByLabelText("From"));

      expect(screen.getByRole("button", { name: "Today" })).toBeDefined();
      expect(screen.getByRole("button", { name: "Clear" })).toBeDefined();
    });

    it("renders Today and Clear in the To popover", () => {
      render(
        <DateRangeHistogramInput
          valueCountPairs={buckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={vi.fn()}
        />,
      );
      fireEvent.focus(screen.getByLabelText("To"));

      expect(screen.getByRole("button", { name: "Today" })).toBeDefined();
      expect(screen.getByRole("button", { name: "Clear" })).toBeDefined();
    });

    it("Clear in From input resets only minValue", () => {
      const onChange = vi.fn();
      const min = new Date(2024, 0, 15);
      const max = new Date(2024, 5, 30);
      render(
        <DateRangeHistogramInput
          valueCountPairs={buckets}
          isLoading={false}
          minValue={min}
          maxValue={max}
          onChange={onChange}
        />,
      );
      fireEvent.focus(screen.getByLabelText("From"));
      fireEvent.click(screen.getByRole("button", { name: "Clear" }));

      expect(onChange).toHaveBeenCalledWith(undefined, max);
    });

    it("Today in From input sets minValue to today's date", () => {
      const onChange = vi.fn();
      render(
        <DateRangeHistogramInput
          valueCountPairs={buckets}
          isLoading={false}
          minValue={undefined}
          maxValue={undefined}
          onChange={onChange}
        />,
      );
      fireEvent.focus(screen.getByLabelText("From"));
      fireEvent.click(screen.getByRole("button", { name: "Today" }));

      expect(onChange).toHaveBeenCalledTimes(1);
      const [picked, otherBoundary] = onChange.mock.calls[0];
      expect(picked).toBeInstanceOf(Date);
      const today = new Date();
      expect((picked as Date).getFullYear()).toBe(today.getFullYear());
      expect((picked as Date).getMonth()).toBe(today.getMonth());
      expect((picked as Date).getDate()).toBe(today.getDate());
      expect(otherBoundary).toBeUndefined();
    });
  });

  describe("cross-bound constraints", () => {
    it("blocks picking a From date after the current To", () => {
      // Seed both values so the From calendar opens at the same month as the
      // boundary — otherwise the viewport lands on today's date and the
      // boundary day isn't in the DOM.
      const onChange = vi.fn();
      render(
        <DateRangeHistogramInput
          valueCountPairs={buckets}
          isLoading={false}
          minValue={new Date(2024, 0, 5)}
          maxValue={new Date(2024, 0, 10)}
          onChange={onChange}
        />,
      );
      fireEvent.focus(screen.getByLabelText("From"));

      // 11th is past the cross-bound. Clicking must not propagate.
      fireEvent.click(screen.getByText("11"));
      expect(onChange).not.toHaveBeenCalled();
    });

    it("blocks picking a To date before the current From", () => {
      const onChange = vi.fn();
      render(
        <DateRangeHistogramInput
          valueCountPairs={buckets}
          isLoading={false}
          minValue={new Date(2024, 0, 20)}
          maxValue={new Date(2024, 0, 25)}
          onChange={onChange}
        />,
      );
      fireEvent.focus(screen.getByLabelText("To"));

      // 19th is before the cross-bound. Clicking must not propagate.
      fireEvent.click(screen.getByText("19"));
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
