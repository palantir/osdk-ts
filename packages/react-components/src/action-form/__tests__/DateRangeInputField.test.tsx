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
      render(
        <DateRangeInputField value={null} onChange={vi.fn()} />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      expect(startInput.value).toBe("");
      expect(endInput.value).toBe("");
    });

    it("renders a calendar icon", () => {
      render(
        <DateRangeInputField value={[null, null]} onChange={vi.fn()} />,
      );
      const svg = document.querySelector("svg");
      expect(svg).not.toBeNull();
    });
  });

  describe("focus and popover", () => {
    it("opens popover when start input is focused", () => {
      render(
        <DateRangeInputField value={[null, null]} onChange={vi.fn()} />,
      );
      const startInput = screen.getByLabelText("Start date");
      fireEvent.focus(startInput);
      expect(startInput.getAttribute("aria-expanded")).toBe("true");
    });

    it("opens popover when end input is focused", () => {
      render(
        <DateRangeInputField value={[null, null]} onChange={vi.fn()} />,
      );
      const endInput = screen.getByLabelText("End date");
      fireEvent.focus(endInput);
      expect(endInput.getAttribute("aria-expanded")).toBe("true");
    });
  });

  describe("text input editing", () => {
    it("commits start date on blur", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField value={[null, null]} onChange={onChange} />,
      );
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
      const [start, end] = onChange.mock.calls[0][0];
      expect(start?.getDate()).toBe(1);
      expect(end?.getMonth()).toBe(5);
      expect(end?.getDate()).toBe(30);
    });

    it("does not commit invalid start input on blur", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField value={[null, null]} onChange={onChange} />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      fireEvent.focus(startInput);
      fireEvent.change(startInput, { target: { value: "not-a-date" } });
      fireEvent.blur(startInput);

      // Still called but with null (fallback to previous value)
      expect(onChange).toHaveBeenCalledTimes(1);
      const [start] = onChange.mock.calls[0][0];
      expect(start).toBeNull();
    });

    it("commits start on Enter and advances to end input", () => {
      const onChange = vi.fn();
      render(
        <DateRangeInputField value={[null, null]} onChange={onChange} />,
      );
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
    it("shows error class for invalid input", () => {
      render(
        <DateRangeInputField value={[null, null]} onChange={vi.fn()} />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      fireEvent.focus(startInput);
      fireEvent.change(startInput, { target: { value: "garbage" } });

      const wrapper = startInput.closest(
        "[class*='osdkDateRangeInputWrapper']",
      );
      expect(wrapper?.className).toContain("Error");
    });

    it("shows error class for overlapping dates (end < start)", () => {
      render(
        <DateRangeInputField
          value={[new Date(2024, 5, 15), null]}
          onChange={vi.fn()}
        />,
      );
      const endInput = screen.getByLabelText("End date") as HTMLInputElement;
      fireEvent.focus(endInput);
      fireEvent.change(endInput, { target: { value: "2024-01-01" } });

      const wrapper = endInput.closest("[class*='osdkDateRangeInputWrapper']");
      expect(wrapper?.className).toContain("Error");
    });

    it("clears error when valid input is typed", () => {
      render(
        <DateRangeInputField value={[null, null]} onChange={vi.fn()} />,
      );
      const startInput = screen.getByLabelText(
        "Start date",
      ) as HTMLInputElement;
      fireEvent.focus(startInput);

      fireEvent.change(startInput, { target: { value: "garbage" } });
      const wrapper = startInput.closest(
        "[class*='osdkDateRangeInputWrapper']",
      );
      expect(wrapper?.className).toContain("Error");

      fireEvent.change(startInput, { target: { value: "2024-06-15" } });
      expect(wrapper?.className).not.toContain("Error");
    });
  });

  describe("accessibility", () => {
    it("has combobox role and aria attributes on both inputs", () => {
      render(
        <DateRangeInputField value={[null, null]} onChange={vi.fn()} />,
      );
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
