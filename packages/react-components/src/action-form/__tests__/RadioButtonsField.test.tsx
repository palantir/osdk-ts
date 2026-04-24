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
import { afterEach, describe, expect, it, vi } from "vitest";
import { RadioButtonsField } from "../fields/RadioButtonsField.js";

const STRING_OPTIONS = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

describe("RadioButtonsField", () => {
  afterEach(cleanup);

  describe("rendering", () => {
    it("renders all options as radio buttons", () => {
      render(<RadioButtonsField value="red" options={STRING_OPTIONS} />);

      expect(screen.getAllByRole("radio")).toHaveLength(3);
      for (const option of STRING_OPTIONS) {
        expect(screen.getByText(option.label)).toBeDefined();
      }
    });
  });

  describe("selection", () => {
    it("marks the matching radio as checked when value is provided", () => {
      render(<RadioButtonsField value="green" options={STRING_OPTIONS} />);

      const greenRadio = screen.getByText("Green")
        .closest("label")!
        .querySelector("[role='radio']")!;
      expect(greenRadio.getAttribute("aria-checked")).toBe("true");
    });

    it("calls onChange with the option value when clicked", () => {
      const onChange = vi.fn();
      render(
        <RadioButtonsField
          value="red"
          options={STRING_OPTIONS}
          onChange={onChange}
        />,
      );

      const radios = screen.getAllByRole("radio");
      fireEvent.click(radios[2]);

      expect(onChange).toHaveBeenCalledWith("blue");
    });
  });

  describe("null value", () => {
    it("renders with no radio selected when value is null", () => {
      render(<RadioButtonsField value={null} options={STRING_OPTIONS} />);

      const radios = screen.getAllByRole("radio");
      for (const radio of radios) {
        expect(radio.getAttribute("aria-checked")).toBe("false");
      }
    });
  });

  describe("orientation", () => {
    it("sets horizontal orientation when specified", () => {
      render(
        <RadioButtonsField
          value="red"
          options={STRING_OPTIONS}
          orientation="horizontal"
        />,
      );

      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup.getAttribute("data-orientation")).toBe("horizontal");
    });

    it("defaults to vertical orientation", () => {
      render(<RadioButtonsField value="red" options={STRING_OPTIONS} />);

      const radioGroup = screen.getByRole("radiogroup");
      expect(radioGroup.getAttribute("data-orientation")).toBe("vertical");
    });
  });

  describe("object values", () => {
    it("works with non-primitive option values", () => {
      const options = [
        { label: "Apple", value: { id: 1, name: "apple" } },
        { label: "Banana", value: { id: 2, name: "banana" } },
      ];
      const appleValue = options[0].value;

      const onChange = vi.fn();
      render(
        <RadioButtonsField
          value={appleValue}
          options={options}
          onChange={onChange}
        />,
      );

      const appleRadio = screen.getByText("Apple")
        .closest("label")!
        .querySelector("[role='radio']")!;
      expect(appleRadio.getAttribute("aria-checked")).toBe("true");

      const radios = screen.getAllByRole("radio");
      fireEvent.click(radios[1]);
      expect(onChange).toHaveBeenCalledWith({ id: 2, name: "banana" });
    });
  });
});
