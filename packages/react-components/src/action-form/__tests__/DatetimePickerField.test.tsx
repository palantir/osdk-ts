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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DatetimePickerField } from "../fields/DatetimePickerField.js";

// Replace React.lazy wrapper with synchronous DateCalendar to avoid
// Suspense resolution issues in happy-dom. This is a legitimate test
// boundary — we test DatetimePickerField behavior, not the lazy loading mechanism.
vi.mock("../fields/LazyDateCalendar.js", async () => {
  const { default: DateCalendar } = await vi.importActual<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    typeof import("../fields/DateCalendar.js")
  >("../fields/DateCalendar.js");
  return { LazyDateCalendar: DateCalendar };
});

afterEach(cleanup);

describe("DatetimePickerField", () => {
  describe("rendering", () => {
    it("renders a button with formatted date value", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
        />,
      );
      const button = screen.getByRole("button");
      expect(button).toBeDefined();
      expect(button.textContent).toBe("2024-01-15");
    });

    it("renders empty button when value is null", () => {
      render(<DatetimePickerField value={null} onChange={vi.fn()} />);
      const button = screen.getByRole("button");
      // Non-breaking space keeps the button from collapsing to zero height
      expect(button.textContent).toBe("\u00A0");
    });

    it("renders with datetime format when showTime is true", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15, 14, 30)}
          onChange={vi.fn()}
          showTime={true}
        />,
      );
      const button = screen.getByRole("button");
      expect(button.textContent).toBe("2024-01-15 14:30");
    });

    it("renders placeholder when value is null and placeholder is set", () => {
      render(
        <DatetimePickerField
          value={null}
          onChange={vi.fn()}
          placeholder="Pick a date"
        />,
      );
      const button = screen.getByRole("button");
      expect(button.textContent).toBe("Pick a date");
    });
  });

  describe("calendar interaction", () => {
    it("calls onChange when a calendar day is clicked", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={onChange}
        />,
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);

      const dayButton = screen.getByText("20");
      fireEvent.click(dayButton);

      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate.getFullYear()).toBe(2024);
      expect(calledDate.getMonth()).toBe(0);
      expect(calledDate.getDate()).toBe(20);
    });

    it("preserves time when selecting a calendar day with showTime", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15, 14, 30)}
          onChange={onChange}
          showTime={true}
        />,
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);

      const dayButton = screen.getByText("20");
      fireEvent.click(dayButton);

      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate.getDate()).toBe(20);
      expect(calledDate.getHours()).toBe(14);
      expect(calledDate.getMinutes()).toBe(30);
    });
  });

  describe("time input", () => {
    it("renders time input when showTime is true", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15, 14, 30)}
          onChange={vi.fn()}
          showTime={true}
        />,
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);

      const timeInput = document.querySelector(
        "input[type=\"time\"]",
      ) as HTMLInputElement;
      expect(timeInput).not.toBeNull();
      expect(timeInput.value).toBe("14:30");
    });

    it("calls onChange with updated time when time input changes", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15, 14, 30)}
          onChange={onChange}
          showTime={true}
        />,
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);

      const timeInput = document.querySelector(
        "input[type=\"time\"]",
      ) as HTMLInputElement;
      fireEvent.change(timeInput, { target: { value: "16:45" } });

      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate.getHours()).toBe(16);
      expect(calledDate.getMinutes()).toBe(45);
      expect(calledDate.getDate()).toBe(15);
    });
  });

  describe("custom format", () => {
    it("uses custom formatDate for display", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
          formatDate={(d) =>
            `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`}
        />,
      );
      const button = screen.getByRole("button");
      expect(button.textContent).toBe("1/15/2024");
    });
  });
});
