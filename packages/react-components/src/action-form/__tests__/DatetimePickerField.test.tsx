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
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DatetimePickerField } from "../fields/DatetimePickerField.js";

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
      render(
        <DatetimePickerField value={null} onChange={vi.fn()} />,
      );
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
      render(
        <DatetimePickerField value={null} onChange={onChange} />,
      );
      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2024-06-20" } });

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          getFullYear: expect.any(Function),
        }),
      );
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
      render(
        <DatetimePickerField value={null} onChange={onChange} />,
      );
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
      render(
        <DatetimePickerField value={null} onChange={vi.fn()} />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "garbage" } });
      fireEvent.blur(input);

      expect(input.value).toBe("Invalid date");
    });

    it("shows custom invalid date message on blur", () => {
      render(
        <DatetimePickerField
          value={null}
          onChange={vi.fn()}
          invalidDateMessage="Bad date"
        />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "garbage" } });
      fireEvent.blur(input);

      expect(input.value).toBe("Bad date");
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

    it("shows custom out of range message", () => {
      render(
        <DatetimePickerField
          value={null}
          onChange={vi.fn()}
          max={new Date(2024, 0, 20)}
          outOfRangeMessage="Too late"
        />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2024-01-25" } });
      fireEvent.blur(input);

      expect(input.value).toBe("Too late");
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

      // onChange(null) called both on change and on blur
      const nullCalls = onChange.mock.calls.filter(
        (call) => call[0] == null,
      );
      expect(nullCalls.length).toBeGreaterThanOrEqual(1);
    });

    it("displays formatted value after blur with valid date", () => {
      const onChange = vi.fn();
      render(
        <DatetimePickerField value={null} onChange={onChange} />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2024-06-20" } });
      fireEvent.blur(input);

      // After blur, the input should not show an error
      expect(input.value).not.toBe("Invalid date");
      expect(input.value).not.toBe("Out of range");
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
              m == null || d == null || y == null || isNaN(m) || isNaN(d)
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
