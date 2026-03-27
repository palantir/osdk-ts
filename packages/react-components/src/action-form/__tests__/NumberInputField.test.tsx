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
import { NumberInputField } from "../fields/NumberInputField.js";

afterEach(cleanup);

describe("NumberInputField", () => {
  describe("rendering", () => {
    it("renders an input with the numeric value as text", () => {
      render(<NumberInputField value={42} onChange={vi.fn()} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("42");
    });

    it("renders empty string when value is null", () => {
      render(<NumberInputField value={null} onChange={vi.fn()} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("");
    });

    it("renders placeholder when provided", () => {
      render(
        <NumberInputField
          value={null}
          onChange={vi.fn()}
          placeholder="Enter number"
        />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.placeholder).toBe("Enter number");
    });

    it("renders decimal values", () => {
      render(<NumberInputField value={12.5} onChange={vi.fn()} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("12.5");
    });

    it("renders negative values", () => {
      render(<NumberInputField value={-7} onChange={vi.fn()} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("-7");
    });
  });

  describe("user input and onChange", () => {
    it("calls onChange with parsed number for valid integer input", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "42" } });
      expect(onChange).toHaveBeenCalledWith(42);
    });

    it("calls onChange with parsed number for decimal input", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "12.5" } });
      expect(onChange).toHaveBeenCalledWith(12.5);
    });

    it("calls onChange with null when input is cleared", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={42} onChange={onChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "" } });
      expect(onChange).toHaveBeenCalledWith(null);
    });

    it("calls onChange with null for intermediate states", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox");

      fireEvent.change(input, { target: { value: "-" } });
      expect(onChange).toHaveBeenCalledWith(null);

      onChange.mockClear();
      fireEvent.change(input, { target: { value: "1e" } });
      expect(onChange).toHaveBeenCalledWith(null);
    });

    it("handles scientific notation input", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "1e5" } });
      expect(onChange).toHaveBeenCalledWith(100000);
    });

    it("handles negative numbers", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "-5" } });
      expect(onChange).toHaveBeenCalledWith(-5);
    });

    it("preserves display when typing trailing decimal point", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "1." } });
      expect(onChange).toHaveBeenCalledWith(1);
      expect(input.value).toBe("1.");
    });
  });

  describe("character filtering", () => {
    it("rejects non-numeric characters", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "abc" } });
      expect(input.value).toBe("");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("rejects mixed valid and invalid characters", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "12a3" } });
      expect(input.value).toBe("");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("rejects structurally invalid numeric strings", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;

      fireEvent.change(input, { target: { value: "1.2.3" } });
      expect(input.value).toBe("");
      expect(onChange).not.toHaveBeenCalled();

      fireEvent.change(input, { target: { value: "+-5" } });
      expect(input.value).toBe("");
    });

    it("allows all valid numeric characters", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      fireEvent.change(input, { target: { value: "1.5e+3" } });
      expect(input.value).toBe("1.5e+3");
      expect(onChange).toHaveBeenCalledWith(1500);
    });
  });

  describe("external value sync", () => {
    it("updates display when external value changes", () => {
      const { rerender } = render(
        <NumberInputField value={10} onChange={vi.fn()} />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("10");

      rerender(<NumberInputField value={20} onChange={vi.fn()} />);
      expect(input.value).toBe("20");
    });

    it("does not reset display when external value is numerically equal", () => {
      const onChange = vi.fn();
      const { rerender } = render(
        <NumberInputField value={null} onChange={onChange} />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;

      // User types "42.0" which parses to 42
      fireEvent.change(input, { target: { value: "42.0" } });
      expect(input.value).toBe("42.0");

      // Parent re-renders with value={42} — should NOT reset to "42"
      rerender(<NumberInputField value={42} onChange={onChange} />);
      expect(input.value).toBe("42.0");
    });

    it("updates display when external value changes from null to number", () => {
      const { rerender } = render(
        <NumberInputField value={null} onChange={vi.fn()} />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("");

      rerender(<NumberInputField value={5} onChange={vi.fn()} />);
      expect(input.value).toBe("5");
    });

    it("clears display when external value changes to null", () => {
      const { rerender } = render(
        <NumberInputField value={42} onChange={vi.fn()} />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.value).toBe("42");

      rerender(<NumberInputField value={null} onChange={vi.fn()} />);
      expect(input.value).toBe("");
    });
  });

  describe("props", () => {
    it("passes id to the input element", () => {
      render(
        <NumberInputField id="my-field" value={null} onChange={vi.fn()} />,
      );
      const input = document.getElementById("my-field");
      expect(input).not.toBeNull();
    });

    it("sets inputMode to decimal", () => {
      render(<NumberInputField value={null} onChange={vi.fn()} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      expect(input.inputMode).toBe("decimal");
    });
  });

  describe("clamp on blur", () => {
    it("clamps value to min on blur", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} min={0} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;

      fireEvent.change(input, { target: { value: "-5" } });
      onChange.mockClear();

      fireEvent.blur(input);
      expect(input.value).toBe("0");
      expect(onChange).toHaveBeenCalledWith(0);
    });

    it("clamps value to max on blur", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} max={100} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;

      fireEvent.change(input, { target: { value: "200" } });
      onChange.mockClear();

      fireEvent.blur(input);
      expect(input.value).toBe("100");
      expect(onChange).toHaveBeenCalledWith(100);
    });

    it("does not clamp when value is within bounds", () => {
      const onChange = vi.fn();
      render(
        <NumberInputField
          value={null}
          onChange={onChange}
          min={0}
          max={100}
        />,
      );
      const input = screen.getByRole("textbox") as HTMLInputElement;

      fireEvent.change(input, { target: { value: "50" } });
      onChange.mockClear();

      fireEvent.blur(input);
      expect(input.value).toBe("50");
      expect(onChange).not.toHaveBeenCalled();
    });

    it("does not clamp intermediate states on blur", () => {
      const onChange = vi.fn();
      render(<NumberInputField value={null} onChange={onChange} min={0} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;

      fireEvent.change(input, { target: { value: "-" } });
      onChange.mockClear();

      fireEvent.blur(input);
      expect(input.value).toBe("-");
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
