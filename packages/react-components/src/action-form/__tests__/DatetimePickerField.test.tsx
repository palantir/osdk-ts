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
    it("renders an input with locale-friendly date value", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      expect(input).toBeDefined();
      expect(input.value).toBe("Jan 15, 2024");
    });

    it("renders empty input when value is null", () => {
      render(<DatetimePickerField value={null} onChange={vi.fn()} />);
      const input = screen.getByRole("combobox") as HTMLInputElement;
      expect(input.value).toBe("");
    });

    it("renders with datetime format when showTime is true", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15, 14, 30)}
          onChange={vi.fn()}
          showTime={true}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      expect(input.value).toBe("2024-01-15 14:30");
    });

    it("renders placeholder when value is null and placeholder is set", () => {
      render(
        <DatetimePickerField
          value={null}
          onChange={vi.fn()}
          placeholder="Pick a date"
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      expect(input.placeholder).toBe("Pick a date");
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
      const input = screen.getByRole("combobox");
      fireEvent.focus(input);

      const dayButton = screen.getByText("20");
      fireEvent.click(dayButton);

      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate).toEqual(new Date(2024, 0, 20));
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
      const input = screen.getByRole("combobox");
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

  describe("time input", () => {
    it("renders time input when showTime is true", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15, 14, 30)}
          onChange={vi.fn()}
          showTime={true}
        />,
      );
      const input = screen.getByRole("combobox");
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
      const input = screen.getByRole("combobox");
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

    it("updates input text when time changes", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15, 14, 30)}
          onChange={onChange}
          showTime={true}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      fireEvent.focus(input);

      const timeInput = document.querySelector(
        "input[type=\"time\"]",
      ) as HTMLInputElement;
      fireEvent.change(timeInput, { target: { value: "16:45" } });

      // The main input text should reflect the new time
      expect(input.value).toBe("2024-01-15 16:45");
    });
  });

  describe("custom format", () => {
    it("uses custom formatDate for display when not editing", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
          formatDate={(d) =>
            `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      expect(input.value).toBe("1/15/2024");
    });
  });

  describe("text input editing", () => {
    it("commits a valid typed date on blur", () => {
      const onChange = vi.fn();
      render(<DatetimePickerField value={null} onChange={onChange} />);
      const input = screen.getByRole("combobox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2024-03-20" } });
      fireEvent.blur(input);

      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate).toEqual(new Date(2024, 2, 20));
    });

    it("does not call onChange for invalid input on blur", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={onChange}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "not-a-date" } });
      fireEvent.blur(input);

      expect(onChange).not.toHaveBeenCalled();
    });

    it("fires onChange(null) when input is cleared and blurred", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={onChange}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "" } });
      fireEvent.blur(input);

      expect(onChange).toHaveBeenCalledWith(null);
    });

    it("commits on Enter key and closes popover", () => {
      const onChange = vi.fn();
      render(<DatetimePickerField value={null} onChange={onChange} />);
      const input = screen.getByRole("combobox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2024-06-01" } });

      // Popover is open before Enter
      expect(screen.getByRole("dialog")).toBeDefined();

      fireEvent.keyDown(input, { key: "Enter" });

      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate.getMonth()).toBe(5);
      expect(calledDate.getDate()).toBe(1);

      // Popover is closed after Enter
      expect(screen.queryByRole("dialog")).toBeNull();
    });

    it("reverts on Escape key", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2099-12-31" } });
      fireEvent.keyDown(input, { key: "Escape" });

      // After Escape, the locale-friendly display format is restored
      expect(input.value).toBe("Jan 15, 2024");
    });

    it("does not call onChange for out-of-range date on blur", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={null}
          onChange={onChange}
          min={new Date(2024, 0, 1)}
          max={new Date(2024, 11, 31)}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2025-06-15" } });
      fireEvent.blur(input);

      expect(onChange).not.toHaveBeenCalled();
    });

    it("uses custom parseDate prop", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={null}
          onChange={onChange}
          formatDate={(d) =>
            `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`}
          parseDate={(text) => {
            const [m, d, y] = text.split("/").map(Number);
            if (m == null || d == null || y == null) return undefined;
            const date = new Date(y, m - 1, d);
            return isNaN(date.getTime()) ? undefined : date;
          }}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "3/20/2024" } });
      fireEvent.blur(input);

      expect(onChange).toHaveBeenCalledTimes(1);
      const calledDate: Date = onChange.mock.calls[0][0];
      expect(calledDate).toEqual(new Date(2024, 2, 20));
    });

    it("switches between display and edit format on focus/blur", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;

      // Idle: locale-friendly display format
      expect(input.value).toBe("Jan 15, 2024");

      // Focus: switches to edit format (parsable by the input)
      fireEvent.focus(input);
      expect(input.value).toBe("2024-01-15");

      // Blur: reverts to display format
      fireEvent.blur(input);
      expect(input.value).toBe("Jan 15, 2024");
    });
  });

  describe("error recovery", () => {
    it("reverts displayed value to last valid on blur with invalid input", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "garbage" } });
      fireEvent.blur(input);

      // Should revert to the locale-friendly formatted original value
      expect(input.value).toBe("Jan 15, 2024");
    });
  });

  describe("focus management", () => {
    it("does not auto-focus calendar dropdowns when the popover opens", () => {
      render(<DatetimePickerField value={null} onChange={vi.fn()} />);
      const input = screen.getByRole("combobox");
      fireEvent.focus(input);

      // Calendar dropdowns should not steal focus from the text input
      const selects = document.querySelectorAll("select");
      for (const select of Array.from(selects)) {
        expect(document.activeElement).not.toBe(select);
      }
    });

    it("blurs input after Enter key closes popover", () => {
      render(<DatetimePickerField value={null} onChange={vi.fn()} />);
      const input = screen.getByRole("combobox") as HTMLInputElement;
      input.focus();
      expect(document.activeElement).toBe(input);
      fireEvent.change(input, { target: { value: "2024-06-01" } });
      fireEvent.keyDown(input, { key: "Enter" });

      expect(document.activeElement).not.toBe(input);
    });

    it("blurs input when tabbing past end of popover", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
        />,
      );
      const input = screen.getByRole("combobox") as HTMLInputElement;

      // Open popover via fireEvent (triggers React onFocus → setIsOpen(true)).
      // Also use .focus() so document.activeElement tracks correctly.
      input.focus();
      fireEvent.focus(input);

      const dialog = screen.getByRole("dialog");

      // Find the end-of-popover focus sentinel inside the dialog.
      const endSentinel = dialog.querySelector(
        "[aria-label='End of date picker dialog']",
      ) as HTMLElement;

      // Simulate Tab reaching the sentinel from inside the popover.
      // relatedTarget inside the popover triggers the "close" branch.
      fireEvent.focus(endSentinel, { relatedTarget: dialog });

      expect(document.activeElement).not.toBe(input);
    });

    it("popover closes after selecting a date (closeOnSelection)", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={onChange}
        />,
      );
      const input = screen.getByRole("combobox");
      fireEvent.focus(input);
      expect(input.getAttribute("aria-expanded")).toBe("true");

      const dayButton = screen.getByText("20");
      fireEvent.click(dayButton);

      // Popover should be closed
      expect(input.getAttribute("aria-expanded")).toBe("false");
    });

    it("allows month navigation after selecting a date", () => {
      render(
        <DatetimePickerField
          value={new Date(2024, 0, 15)}
          onChange={vi.fn()}
        />,
      );
      const input = screen.getByRole("combobox");
      fireEvent.focus(input);

      // Calendar should show January 2024
      const monthSelect = document.querySelector("select") as HTMLSelectElement;
      expect(monthSelect.value).toBe("0"); // January = 0

      // Click next month
      const nextButton = screen.getByRole("button", {
        name: "Go to next month",
      });
      fireEvent.click(nextButton);

      // Calendar should now show February
      expect(monthSelect.value).toBe("1"); // February = 1
    });
  });

  describe("accessibility", () => {
    it("has combobox role and aria attributes", () => {
      render(<DatetimePickerField value={null} onChange={vi.fn()} />);
      const input = screen.getByRole("combobox");
      expect(input.getAttribute("aria-haspopup")).toBe("dialog");
      expect(input.getAttribute("aria-expanded")).toBe("false");
    });

    it("sets aria-expanded to true when popover is open", () => {
      render(<DatetimePickerField value={null} onChange={vi.fn()} />);
      const input = screen.getByRole("combobox");
      expect(screen.queryByRole("dialog")).toBeNull();
      fireEvent.focus(input);
      expect(input.getAttribute("aria-expanded")).toBe("true");
      expect(screen.getByRole("dialog")).toBeDefined();
    });
  });
});
