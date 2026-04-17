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
import { DateRangeInputField } from "../fields/DateRangeInputField.js";

vi.mock("../fields/LazyDateRangeCalendar.js", async () => {
  const { default: DateRangeCalendar } = await vi.importActual<
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    typeof import("../fields/DateRangeCalendar.js")
  >("../fields/DateRangeCalendar.js");
  return { LazyDateRangeCalendar: DateRangeCalendar };
});

afterEach(cleanup);

describe("DateRangeInputField", () => {
  describe("rendering", () => {
    it("renders two inputs with placeholders", () => {
      render(
        <DateRangeInputField
          value={[null, null]}
          onChange={vi.fn()}
          placeholderStart="Start"
          placeholderEnd="End"
        />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      expect(startInput.placeholder).toBe("Start");
      expect(endInput.placeholder).toBe("End");
    });

    it("renders formatted dates when value is provided", () => {
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 15), new Date(2024, 5, 30)]}
          onChange={vi.fn()}
        />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      expect(startInput.value).toBe("Jan 15, 2024");
      expect(endInput.value).toBe("Jun 30, 2024");
    });

    it("renders empty inputs when value is null", () => {
      render(<DateRangeInputField value={null} onChange={vi.fn()} />);
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      expect(startInput.value).toBe("");
      expect(endInput.value).toBe("");
    });
  });

  describe("focus and popover", () => {
    it("opens popover when start input is focused", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const startInput = screen.getByLabelText("Start date");
      expect(screen.queryByRole("dialog")).toBeNull();
      fireEvent.focus(startInput);
      expect(startInput.getAttribute("aria-expanded")).toBe("true");
      expect(screen.getByRole("dialog")).toBeDefined();
    });

    it("opens popover when end input is focused", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const endInput = screen.getByLabelText("End date");
      expect(screen.queryByRole("dialog")).toBeNull();
      fireEvent.focus(endInput);
      expect(endInput.getAttribute("aria-expanded")).toBe("true");
      expect(screen.getByRole("dialog")).toBeDefined();
    });
  });

  describe("text input editing", () => {
    it("commits start date on blur", () => {
      const onChange = vi.fn();
      render(<DateRangeInputField value={[null, null]} onChange={onChange} />);
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      fireEvent.focus(startInput);
      fireEvent.change(startInput, { target: { value: "2024-03-20" } });
      fireEvent.blur(startInput);

      expect(onChange).toHaveBeenCalledTimes(1);
      const [start, end] = onChange.mock.calls[0][0];
      expect(start).toEqual(new Date(2024, 2, 20));
      expect(end).toBeNull();
    });

    it("commits end date on blur", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 1), null]}
          onChange={onChange}
        />,
      );
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      fireEvent.focus(endInput);
      fireEvent.change(endInput, { target: { value: "2024-06-30" } });
      fireEvent.blur(endInput);

      expect(onChange).toHaveBeenCalledTimes(1);
      const [, end] = onChange.mock.calls[0][0];
      expect(end).toEqual(new Date(2024, 5, 30));
    });

    it("does not commit invalid start input on blur", () => {
      const onChange = vi.fn();
      render(<DateRangeInputField value={[null, null]} onChange={onChange} />);
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      fireEvent.focus(startInput);
      fireEvent.change(startInput, { target: { value: "not-a-date" } });
      fireEvent.blur(startInput);

      // Invalid input is silently reverted — onChange is not called
      expect(onChange).not.toHaveBeenCalled();
    });

    it("commits start on Enter and advances to end input", () => {
      const onChange = vi.fn();
      render(<DateRangeInputField value={[null, null]} onChange={onChange} />);
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      fireEvent.focus(startInput);
      fireEvent.change(startInput, { target: { value: "2024-01-15" } });
      fireEvent.keyDown(startInput, { key: "Enter" });

      expect(onChange).toHaveBeenCalledTimes(1);
      const [start] = onChange.mock.calls[0][0];
      expect(start).toEqual(new Date(2024, 0, 15));
      const endInput = screen.getByLabelText("End date");
      expect(document.activeElement).toBe(endInput);
    });

    it("reverts on Escape key", () => {
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 15), null]}
          onChange={vi.fn()}
        />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      fireEvent.focus(startInput);
      fireEvent.change(startInput, { target: { value: "2099-12-31" } });
      fireEvent.keyDown(startInput, { key: "Escape" });

      expect(startInput.value).toBe("Jan 15, 2024");
    });
  });

  describe("error state", () => {
    it("marks input as invalid for unparsable text", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);
      fireEvent.change(startInput, { target: { value: "garbage" } });

      expect(startInput.getAttribute("aria-invalid")).toBe("true");
    });

    it("marks input as invalid for overlapping dates (end < start)", () => {
      render(
        <DateRangeInputField
          value={[new Date(2024, 5, 15), null]}
          onChange={vi.fn()}
        />,
      );
      const endInput = screen.getByLabelText("End date");
      fireEvent.focus(endInput);
      fireEvent.change(endInput, { target: { value: "2024-01-01" } });

      expect(endInput.getAttribute("aria-invalid")).toBe("true");
    });

    it("does not show error on start input after selecting a start date via calendar", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);

      // Select a start day on the calendar
      const day15 = screen.getAllByText("15")[0];
      fireEvent.click(day15);

      // Start input should NOT be marked invalid — we're still picking the end date
      expect(startInput.getAttribute("aria-invalid")).not.toBe("true");
    });

    it("clears invalid state when valid input is typed", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);

      fireEvent.change(startInput, { target: { value: "garbage" } });
      expect(startInput.getAttribute("aria-invalid")).toBe("true");

      fireEvent.change(startInput, { target: { value: "2024-06-15" } });
      expect(startInput.getAttribute("aria-invalid")).not.toBe("true");
    });

    it("reverts start input on blur when typed start would overlap end", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 1), new Date(2024, 5, 15)]}
          onChange={onChange}
        />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      fireEvent.focus(startInput);
      fireEvent.change(startInput, { target: { value: "2024-12-01" } });
      fireEvent.blur(startInput);

      expect(onChange).not.toHaveBeenCalled();
      expect(startInput.value).toBe("Jan 1, 2024");
    });

    it("reverts end input on blur when typed end would overlap start", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField
          value={[new Date(2024, 5, 15), new Date(2024, 11, 31)]}
          onChange={onChange}
        />,
      );
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      fireEvent.focus(endInput);
      fireEvent.change(endInput, { target: { value: "2024-01-01" } });
      fireEvent.blur(endInput);

      expect(onChange).not.toHaveBeenCalled();
      expect(endInput.value).toBe("Dec 31, 2024");
    });

    it("reverts start input on Enter when typed start would overlap end", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 1), new Date(2024, 5, 15)]}
          onChange={onChange}
        />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      fireEvent.focus(startInput);
      fireEvent.change(startInput, { target: { value: "2024-12-01" } });
      fireEvent.keyDown(startInput, { key: "Enter" });

      expect(onChange).not.toHaveBeenCalled();
    });

    it("reverts end input on Enter when typed end would overlap start", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField
          value={[new Date(2024, 5, 15), new Date(2024, 11, 31)]}
          onChange={onChange}
        />,
      );
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      fireEvent.focus(endInput);
      fireEvent.change(endInput, { target: { value: "2024-01-01" } });
      fireEvent.keyDown(endInput, { key: "Enter" });

      expect(onChange).not.toHaveBeenCalled();
    });

    it("reverts end input when same day and allowSingleDayRange is false", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField
          value={[new Date(2024, 5, 15), new Date(2024, 11, 31)]}
          onChange={onChange}
          allowSingleDayRange={false}
        />,
      );
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      fireEvent.focus(endInput);
      fireEvent.change(endInput, { target: { value: "2024-06-15" } });
      fireEvent.blur(endInput);

      expect(onChange).not.toHaveBeenCalled();
      expect(endInput.value).toBe("Dec 31, 2024");
    });
  });

  describe("focus management", () => {
    it("does not move focus to calendar dropdowns when popover opens via start", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);

      // The month/year dropdowns inside the calendar should not have focus
      const selects = document.querySelectorAll("select");
      for (const select of Array.from(selects)) {
        expect(document.activeElement).not.toBe(select);
      }
    });

    it("does not move focus to calendar dropdowns when popover opens via end", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const endInput = screen.getByLabelText("End date");
      fireEvent.focus(endInput);

      const selects = document.querySelectorAll("select");
      for (const select of Array.from(selects)) {
        expect(document.activeElement).not.toBe(select);
      }
    });

    it("blurs end input after Enter key closes popover", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 1), null]}
          onChange={onChange}
        />,
      );
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      endInput.focus();
      fireEvent.focus(endInput);
      expect(document.activeElement).toBe(endInput);

      fireEvent.change(endInput, { target: { value: "2024-06-30" } });
      fireEvent.keyDown(endInput, { key: "Enter" });

      expect(document.activeElement).not.toBe(endInput);
    });

    it("closes popover on Escape from start input", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);
      expect(startInput.getAttribute("aria-expanded")).toBe("true");
      expect(screen.getByRole("dialog")).toBeDefined();

      fireEvent.keyDown(startInput, { key: "Escape" });
      expect(startInput.getAttribute("aria-expanded")).toBe("false");
      expect(screen.queryByRole("dialog")).toBeNull();
    });

    it("blurs inputs when tabbing past end of popover", () => {
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 15), null]}
          onChange={vi.fn()}
        />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      startInput.focus();
      fireEvent.focus(startInput);
      expect(document.activeElement).toBe(startInput);

      const dialog = screen.getByRole("dialog");
      const endSentinel = dialog.querySelector(
        "[aria-label='End of date range picker dialog']",
      ) as HTMLElement;

      // Simulate Tab reaching the sentinel from inside the popover.
      fireEvent.focus(endSentinel, { relatedTarget: dialog });

      expect(document.activeElement).not.toBe(startInput);
      const endInput = screen.getByLabelText("End date");
      expect(document.activeElement).not.toBe(endInput);
    });

    it("closes popover on Escape from end input", () => {
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 1), null]}
          onChange={vi.fn()}
        />,
      );
      const endInput = screen.getByLabelText("End date");
      fireEvent.focus(endInput);
      expect(endInput.getAttribute("aria-expanded")).toBe("true");
      expect(screen.getByRole("dialog")).toBeDefined();

      fireEvent.keyDown(endInput, { key: "Escape" });
      expect(endInput.getAttribute("aria-expanded")).toBe("false");
      expect(screen.queryByRole("dialog")).toBeNull();
    });
  });

  describe("time picker (showTime)", () => {
    it("renders time inputs when showTime is true", () => {
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 15, 10, 30), new Date(2024, 0, 20, 14, 0)]}
          onChange={vi.fn()}
          showTime={true}
        />,
      );
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);

      const timeInputs = document.querySelectorAll("input[type=\"time\"]");
      expect(timeInputs.length).toBe(2);
    });

    it("does not render time inputs when showTime is false", () => {
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 15), null]}
          onChange={vi.fn()}
        />,
      );
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);

      const timeInputs = document.querySelectorAll("input[type=\"time\"]");
      expect(timeInputs.length).toBe(0);
    });

    it("calls onChange with updated start time", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 15, 10, 0), new Date(2024, 0, 20)]}
          onChange={onChange}
          showTime={true}
        />,
      );
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);

      const startTimeInput = document.querySelector(
        "input[aria-label='Start time']",
      ) as HTMLInputElement;
      fireEvent.change(startTimeInput, { target: { value: "14:30" } });

      expect(onChange).toHaveBeenCalledTimes(1);
      const [start] = onChange.mock.calls[0][0];
      expect(start?.getHours()).toBe(14);
      expect(start?.getMinutes()).toBe(30);
      expect(start?.getDate()).toBe(15);
    });

    it("calls onChange with updated end time", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 15), new Date(2024, 0, 20, 9, 0)]}
          onChange={onChange}
          showTime={true}
        />,
      );
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);

      const endTimeInput = document.querySelector(
        "input[aria-label='End time']",
      ) as HTMLInputElement;
      fireEvent.change(endTimeInput, { target: { value: "16:45" } });

      expect(onChange).toHaveBeenCalledTimes(1);
      const [, end] = onChange.mock.calls[0][0];
      expect(end?.getHours()).toBe(16);
      expect(end?.getMinutes()).toBe(45);
      expect(end?.getDate()).toBe(20);
    });

    it("shows datetime format in inputs when showTime is true", () => {
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 15, 10, 30), new Date(2024, 0, 20, 14, 0)]}
          onChange={vi.fn()}
          showTime={true}
        />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      expect(startInput.value).toBe("2024-01-15 10:30");
      expect(endInput.value).toBe("2024-01-20 14:00");
    });

    it("keeps popover open after range selection when showTime is true", () => {
      render(
        <DateRangeInputField
          value={[null, null]}
          onChange={vi.fn()}
          showTime={true}
        />,
      );
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);
      expect(startInput.getAttribute("aria-expanded")).toBe("true");

      // Select start day (use first match — two-month calendar has duplicates)
      const day15s = screen.getAllByText("15");
      fireEvent.click(day15s[0]);

      // Select end day
      const day20s = screen.getAllByText("20");
      fireEvent.click(day20s[0]);

      // Popover should still be open since showTime is true
      const endInput = screen.getByLabelText("End date");
      const startExpanded = startInput.getAttribute("aria-expanded");
      const endExpanded = endInput.getAttribute("aria-expanded");
      expect(startExpanded === "true" || endExpanded === "true").toBe(true);
    });
  });

  describe("custom format", () => {
    it("uses custom formatDate for display when not editing", () => {
      render(
        <DateRangeInputField
          value={[new Date(2024, 0, 15), null]}
          onChange={vi.fn()}
          formatDate={(d) =>
            `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`}
        />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      expect(startInput.value).toBe("1/15/2024");
    });

    it("uses custom parseDate for typed input", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField
          value={[null, null]}
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
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      fireEvent.focus(startInput);
      fireEvent.change(startInput, { target: { value: "3/20/2024" } });
      fireEvent.blur(startInput);

      expect(onChange).toHaveBeenCalledTimes(1);
      const [start] = onChange.mock.calls[0][0];
      expect(start).toEqual(new Date(2024, 2, 20));
    });
  });

  describe("accessibility", () => {
    it("has combobox role and aria attributes on both inputs", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const startInput = screen.getByLabelText("Start date");
      const endInput = screen.getByLabelText("End date");

      expect(startInput.getAttribute("role")).toBe("combobox");
      expect(startInput.getAttribute("aria-haspopup")).toBe("dialog");
      expect(startInput.getAttribute("aria-expanded")).toBe("false");

      expect(endInput.getAttribute("role")).toBe("combobox");
      expect(endInput.getAttribute("aria-haspopup")).toBe("dialog");
      expect(endInput.getAttribute("aria-expanded")).toBe("false");
    });
  });
});
