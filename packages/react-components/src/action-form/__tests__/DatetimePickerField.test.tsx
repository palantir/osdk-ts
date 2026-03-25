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
    it("renders an input with formatted date value", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
        />,
      );
      const input = screen.getByRole("textbox");
      expect(input).toBeDefined();
      expect((input as HTMLInputElement).value).toBe("2024-01-15");
    });

    it("renders empty input when value is null", () => {
      render(<DatetimePickerField value={null} onChange={vi.fn()} />);
      const input = screen.getByRole("textbox");
      expect((input as HTMLInputElement).value).toBe("");
    });

    it("renders with datetime format when showTime is true", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15, 14, 30)}
          onChange={vi.fn()}
          showTime={true}
        />,
      );
      const input = screen.getByRole("textbox");
      expect((input as HTMLInputElement).value).toBe("2024-01-15T14:30");
    });
  });

  describe("typing", () => {
    it("calls onChange with parsed Date when user types a valid ISO date", () => {
      const onChange = vi.fn();
      render(<DatetimePickerField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2024-06-20" } });

      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate.getFullYear()).toBe(2024);
      expect(calledDate.getMonth()).toBe(5); // June = 5
      expect(calledDate.getDate()).toBe(20);
    });

    it("calls onChange(null) when user clears the input", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={onChange}
        />,
      );
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "" } });

      expect(onChange).toHaveBeenCalledWith(null);
    });

    it("does not call onChange when user types invalid text", () => {
      const onChange = vi.fn();
      render(<DatetimePickerField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "not-a-date" } });

      expect(onChange).not.toHaveBeenCalled();
    });

    it("does not call onChange when typed date is out of range", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={null}
          onChange={onChange}
          min={new Date(2024, 0, 10)}
          max={new Date(2024, 0, 20)}
        />,
      );
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2024-01-25" } });

      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("blur validation", () => {
    it("shows invalid date message on blur with invalid text", () => {
      render(<DatetimePickerField value={null} onChange={vi.fn()} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "garbage" } });
      fireEvent.blur(input);

      expect(input.value).toBe("Invalid date");
    });

    it("shows out of range message on blur when date exceeds max", () => {
      render(
        <DatetimePickerField
          value={null}
          onChange={vi.fn()}
          max={new Date(2024, 0, 20)}
        />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2024-01-25" } });
      fireEvent.blur(input);

      expect(input.value).toBe("Out of range");
    });

    it("calls onChange(null) on blur with empty input", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={onChange}
        />,
      );
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "" } });
      fireEvent.blur(input);

      // onChange(null) called on both change and blur
      expect(onChange).toHaveBeenCalledWith(null);
      expect(onChange).toHaveBeenCalledTimes(2);
    });

    it("displays formatted value after blur with valid date", () => {
      const onChange = vi.fn();
      render(<DatetimePickerField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2024-06-20" } });
      fireEvent.blur(input);

      // After blur, the input should not show an error
      expect(input.value).not.toBe("Invalid date");
      expect(input.value).not.toBe("Out of range");
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
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);

      const dayButton = screen.getByText("20");
      fireEvent.click(dayButton);

      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate.getFullYear()).toBe(2024);
      expect(calledDate.getMonth()).toBe(0);
      expect(calledDate.getDate()).toBe(20);
    });

    it("updates input value after calendar selection", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
        />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.focus(input);

      const dayButton = screen.getByText("20");
      fireEvent.click(dayButton);

      expect(input.value).toBe("2024-01-20");
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
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);

      const dayButton = screen.getByText("20");
      fireEvent.click(dayButton);

      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate.getDate()).toBe(20);
      expect(calledDate.getHours()).toBe(14);
      expect(calledDate.getMinutes()).toBe(30);
    });
  });

  describe("keyboard", () => {
    it("submits valid date on Enter key", () => {
      const onChange = vi.fn();
      render(<DatetimePickerField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2024-06-20" } });

      // onChange called once from the change event
      expect(onChange).toHaveBeenCalledTimes(1);
      onChange.mockClear();

      fireEvent.keyDown(input, { key: "Enter" });

      // Enter re-submits the parsed date
      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate.getFullYear()).toBe(2024);
      expect(calledDate.getMonth()).toBe(5);
      expect(calledDate.getDate()).toBe(20);
    });

    it("does not submit invalid date on Enter key", () => {
      const onChange = vi.fn();
      render(<DatetimePickerField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "not-a-date" } });
      fireEvent.keyDown(input, { key: "Enter" });

      expect(onChange).not.toHaveBeenCalled();
    });

    it("blurs input on Escape key", () => {
      render(<DatetimePickerField value={null} onChange={vi.fn()} />);
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: "Escape" });

      expect(document.activeElement).not.toBe(input);
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
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);

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
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);

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

  describe("custom format/parse", () => {
    it("uses custom formatDate for display", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
          formatDate={(d) =>
            `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`}
          parseDate={(s) => {
            const [m, d, y] = s.split("/").map(Number);
            if (m == null || d == null || y == null) return null;
            return new Date(y, m - 1, d);
          }}
        />,
      );
      const input = screen.getByRole("textbox");
      expect((input as HTMLInputElement).value).toBe("1/15/2024");
    });

    it("uses custom parseDate when typing", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={null}
          onChange={onChange}
          formatDate={(d) =>
            `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`}
          parseDate={(s) => {
            const [m, d, y] = s.split("/").map(Number);
            if (
              m == null
              || d == null
              || y == null
              || isNaN(m)
              || isNaN(d)
              || isNaN(y)
            ) {
              return null;
            }
            return new Date(y, m - 1, d);
          }}
        />,
      );
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "6/20/2024" } });

      expect(onChange).toHaveBeenCalled();
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate.getFullYear()).toBe(2024);
      expect(calledDate.getMonth()).toBe(5);
      expect(calledDate.getDate()).toBe(20);
    });
  });
});
