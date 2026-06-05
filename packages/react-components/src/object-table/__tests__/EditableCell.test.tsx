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

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { EditableCell } from "../EditableCell.js";
import type { EditFieldConfig } from "../utils/types.js";

describe("EditableCell", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  const defaultProps = {
    initialValue: "initial",
    currentValue: "initial",
    cellId: "row-1_col-1",
    onCellEdit: vi.fn(),
    originalRowData: { id: 1 },
    rowId: "row-1",
    columnId: "col-1",
  };

  it("should clear validation error when validation succeeds", async () => {
    const onCellValidationError = vi.fn();
    const clearCellValidationError = vi.fn();
    const validateEdit = vi.fn()
      .mockResolvedValueOnce("Validation failed")
      .mockResolvedValueOnce(undefined); // Success on second attempt

    render(
      <EditableCell
        {...defaultProps}
        onCellValidationError={onCellValidationError}
        clearCellValidationError={clearCellValidationError}
        validateEdit={validateEdit}
      />,
    );

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "invalid-value" } });
    fireEvent.blur(input);

    await waitFor(() => {
      expect(onCellValidationError).toHaveBeenCalledWith(
        "row-1_col-1",
        "Validation failed",
      );
    });

    onCellValidationError.mockClear();
    clearCellValidationError.mockClear();

    fireEvent.change(input, { target: { value: "valid-value" } });
    fireEvent.blur(input);

    // Should clear validation error when validation succeeded on the second input
    await waitFor(() => {
      expect(onCellValidationError).not.toHaveBeenCalled();
      expect(clearCellValidationError).toHaveBeenCalledWith("row-1_col-1");
    });
  });

  it("should cancel previous validation when a new one starts", async () => {
    vi.useFakeTimers();
    const onCellValidationError = vi.fn();
    const validateEdit = vi.fn().mockImplementation((value) => {
      return new Promise((resolve) => {
        // Simulate async validation
        setTimeout(() => resolve(`Validation error for ${value}`), 100);
      });
    });

    render(
      <EditableCell
        {...defaultProps}
        onCellValidationError={onCellValidationError}
        validateEdit={validateEdit}
      />,
    );

    const input = screen.getByRole("textbox");

    // Type first value
    fireEvent.change(input, { target: { value: "value1" } });
    fireEvent.blur(input);

    // Type second value before first validation completes
    fireEvent.change(input, { target: { value: "value2" } });
    fireEvent.blur(input);

    // Fast forward time to let validations complete
    await vi.advanceTimersByTimeAsync(200);

    // Should only have one validation error for the latest value
    expect(onCellValidationError).toHaveBeenCalledTimes(1);
    expect(onCellValidationError).toHaveBeenCalledWith(
      "row-1_col-1",
      "Validation error for value2",
    );
  });

  it.each([
    { name: "null", value: null },
    { name: "undefined", value: undefined },
    { name: "empty string", value: "" },
  ])(
    "should not commit edit when focusing/blurring a field whose value is $name without typing",
    ({ value }) => {
      const onCellEdit = vi.fn();

      render(
        <EditableCell
          {...defaultProps}
          initialValue={value}
          currentValue={value}
          onCellEdit={onCellEdit}
        />,
      );

      const input = screen.getByRole("textbox");
      fireEvent.focus(input);
      fireEvent.blur(input);

      expect(onCellEdit).not.toHaveBeenCalled();
    },
  );

  describe("DROPDOWN field with boolean values", () => {
    const booleanDropdownConfig: EditFieldConfig<{ id: number }> = {
      fieldComponent: "DROPDOWN",
      getFieldComponentProps: () => ({
        items: [true, false],
      }),
    };

    it("commits true when user picks the 'true' option for a boolean cell", async () => {
      const onCellEdit = vi.fn();
      render(
        <EditableCell
          {...defaultProps}
          initialValue={false}
          currentValue={false}
          isRowFocused={true}
          editFieldConfig={booleanDropdownConfig}
          onCellEdit={onCellEdit}
        />,
      );

      fireEvent.click(screen.getByRole("combobox"));

      await waitFor(() => {
        expect(screen.getByRole("option", { name: "true" })).toBeDefined();
      });

      const trueOption = screen.getByRole("option", { name: "true" });
      fireEvent.mouseMove(trueOption);
      fireEvent.click(trueOption);

      await waitFor(() => {
        expect(onCellEdit).toHaveBeenCalledWith(
          "row-1_col-1",
          expect.objectContaining({ newValue: true }),
        );
      });
    });

    it("highlights the current boolean value in the dropdown popup", async () => {
      render(
        <EditableCell
          {...defaultProps}
          initialValue={true}
          currentValue={true}
          isRowFocused={true}
          editFieldConfig={booleanDropdownConfig}
        />,
      );

      fireEvent.click(screen.getByRole("combobox"));

      await waitFor(() => {
        expect(screen.getByRole("option", { name: "true" })).toBeDefined();
      });

      // The "true" option should reflect the current cell value via
      // aria-selected so the user can see what is currently set.
      expect(
        screen.getByRole("option", { name: "true" }).getAttribute(
          "aria-selected",
        ),
      ).toBe("true");
      expect(
        screen.getByRole("option", { name: "false" }).getAttribute(
          "aria-selected",
        ),
      ).toBe("false");
    });

    it("formats the readonly (non-focused) cell text via itemToStringLabel", () => {
      const itemToStringLabel = vi.fn((item: boolean | undefined) => {
        if (item == null) return "No Value";
        return item ? "Yes" : "No";
      });
      const config: EditFieldConfig<{ id: number }> = {
        fieldComponent: "DROPDOWN",
        getFieldComponentProps: () => ({
          items: [true, false],
          itemToStringLabel,
        }),
      };

      render(
        <EditableCell
          {...defaultProps}
          initialValue={true}
          currentValue={true}
          editFieldConfig={config}
        />,
      );

      expect(itemToStringLabel).toHaveBeenCalledWith(true);
      expect(screen.getByText("Yes")).toBeDefined();
    });

    it("lets itemToStringLabel render an unset readonly cell", () => {
      const itemToStringLabel = vi.fn((item: boolean | undefined) => {
        if (item == null) return "No Value";
        return item ? "Yes" : "No";
      });
      const config: EditFieldConfig<{ id: number }> = {
        fieldComponent: "DROPDOWN",
        getFieldComponentProps: () => ({
          items: [true, false],
          itemToStringLabel,
        }),
      };

      render(
        <EditableCell
          {...defaultProps}
          initialValue={null}
          currentValue={null}
          editFieldConfig={config}
        />,
      );

      expect(itemToStringLabel).toHaveBeenCalled();
      expect(screen.getByText("No Value")).toBeDefined();
    });

    it("commits false when user picks the 'false' option after starting with true", async () => {
      const onCellEdit = vi.fn();
      render(
        <EditableCell
          {...defaultProps}
          initialValue={true}
          currentValue={true}
          isRowFocused={true}
          editFieldConfig={booleanDropdownConfig}
          onCellEdit={onCellEdit}
        />,
      );

      fireEvent.click(screen.getByRole("combobox"));

      await waitFor(() => {
        expect(screen.getByRole("option", { name: "false" })).toBeDefined();
      });

      // base-ui Select ignores clicks on items that aren't the highlighted
      // (activeIndex) item. With mouse, real users hover first; in jsdom
      // we synthesize that with fireEvent.mouseMove to update activeIndex.
      const falseOption = screen.getByRole("option", { name: "false" });
      fireEvent.mouseMove(falseOption);
      fireEvent.click(falseOption);

      await waitFor(() => {
        expect(onCellEdit).toHaveBeenCalledWith(
          "row-1_col-1",
          expect.objectContaining({ newValue: false }),
        );
      });
    });
  });

  it("should not show error if validation is cancelled due to component unmount", async () => {
    vi.useFakeTimers();
    const onCellValidationError = vi.fn();
    const validateEdit = vi.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        // Long running validation
        setTimeout(() => resolve("Should not appear"), 100);
      });
    });

    const { unmount } = render(
      <EditableCell
        {...defaultProps}
        onCellValidationError={onCellValidationError}
        validateEdit={validateEdit}
      />,
    );

    const input = screen.getByRole("textbox");

    // Start validation
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.blur(input);

    unmount();

    // Fast forward to when validation would have completed
    await vi.advanceTimersByTimeAsync(100);

    // Should not have called error handler
    expect(onCellValidationError).not.toHaveBeenCalled();
  });
});
