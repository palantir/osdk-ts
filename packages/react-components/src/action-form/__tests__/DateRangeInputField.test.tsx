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
      expect(startInput.value).toBe("2024-01-15");
      expect(endInput.value).toBe("2024-06-30");
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
      fireEvent.focus(startInput);
      expect(startInput.getAttribute("aria-expanded")).toBe("true");
    });

    it("opens popover when end input is focused", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const endInput = screen.getByLabelText("End date");
      fireEvent.focus(endInput);
      expect(endInput.getAttribute("aria-expanded")).toBe("true");
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
      expect(start?.getFullYear()).toBe(2024);
      expect(start?.getMonth()).toBe(2);
      expect(start?.getDate()).toBe(20);
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
      expect(end?.getDate()).toBe(30);
      expect(end?.getMonth()).toBe(5);
      expect(end?.getFullYear()).toBe(2024);
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
      expect(start?.getDate()).toBe(15);
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

      expect(startInput.value).toBe("2024-01-15");
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

    it("clears invalid state when valid input is typed", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);

      fireEvent.change(startInput, { target: { value: "garbage" } });
      expect(startInput.getAttribute("aria-invalid")).toBe("true");

      fireEvent.change(startInput, { target: { value: "2024-06-15" } });
      expect(startInput.getAttribute("aria-invalid")).not.toBe("true");
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

    it("closes popover on Escape from start input", () => {
      render(<DateRangeInputField value={[null, null]} onChange={vi.fn()} />);
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);
      expect(startInput.getAttribute("aria-expanded")).toBe("true");

      fireEvent.keyDown(startInput, { key: "Escape" });
      expect(startInput.getAttribute("aria-expanded")).toBe("false");
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

      fireEvent.keyDown(endInput, { key: "Escape" });
      expect(endInput.getAttribute("aria-expanded")).toBe("false");
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
