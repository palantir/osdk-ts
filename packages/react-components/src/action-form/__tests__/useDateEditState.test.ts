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

import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  formatDateForDisplay,
  formatDateForInput,
  parseDateFromInput,
} from "../../shared/dateUtils.js";
import type { UseDateEditStateConfig } from "../fields/useDateEditState.js";
import { useDateEditState } from "../fields/useDateEditState.js";

function makeConfig(
  overrides: Partial<UseDateEditStateConfig> = {},
): UseDateEditStateConfig {
  return {
    value: null,
    displayFormatFn: formatDateForInput,
    editFormatFn: formatDateForInput,
    parseFn: parseDateFromInput,
    ...overrides,
  };
}

describe("useDateEditState", () => {
  describe("initial state", () => {
    it("starts not editing with empty input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      expect(result.current.isEditing).toBe(false);
      expect(result.current.displayedValue).toBe("");
      expect(result.current.inputError).toBeNull();
      expect(result.current.dateValue).toBeUndefined();
    });

    it("displays formatted value when not editing", () => {
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({ value: new Date(2024, 0, 15) }),
        )
      );

      expect(result.current.isEditing).toBe(false);
      expect(result.current.displayedValue).toBe("2024-01-15");
    });

    it("uses displayFormatFn when not editing", () => {
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({
            value: new Date(2024, 0, 15),
            displayFormatFn: () => "custom display",
          }),
        )
      );

      expect(result.current.displayedValue).toBe("custom display");
    });
  });

  describe("startEditing", () => {
    it("switches displayedValue from display format to edit format", () => {
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({
            value: new Date(2024, 0, 15),
            displayFormatFn: formatDateForDisplay, // "Jan 15, 2024"
            editFormatFn: formatDateForInput, // "2024-01-15"
          }),
        )
      );

      // Not editing: displayedValue uses displayFormatFn
      expect(result.current.displayedValue).toBe("Jan 15, 2024");

      act(() => {
        result.current.startEditing();
      });

      expect(result.current.isEditing).toBe(true);
      expect(result.current.displayedValue).toBe("2024-01-15");
    });

    it("sets empty displayedValue when value is null", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });

      expect(result.current.isEditing).toBe(true);
      expect(result.current.displayedValue).toBe("");
    });
  });

  describe("stopEditing", () => {
    it("exits editing mode", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });
      expect(result.current.isEditing).toBe(true);

      act(() => {
        result.current.stopEditing();
      });
      expect(result.current.isEditing).toBe(false);
    });

    it("reverts displayedValue to the committed value", () => {
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({
            value: new Date(2024, 0, 15),
            displayFormatFn: formatDateForDisplay,
          }),
        )
      );

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("invalid-date");
      });
      expect(result.current.displayedValue).toBe("invalid-date");

      act(() => {
        result.current.stopEditing();
      });

      expect(result.current.displayedValue).toBe("Jan 15, 2024");
    });

    it("does not call onChange", () => {
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({ value: new Date(2024, 0, 15), onChange }),
        )
      );

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("2024-06-15");
      });
      act(() => {
        result.current.stopEditing();
      });

      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("commitAndStopEditing", () => {
    it("calls onChange with validated date for valid input", () => {
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateEditState(makeConfig({ onChange }))
      );

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("2024-06-15");
      });
      act(() => {
        result.current.commitAndStopEditing();
      });

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0]).toEqual(new Date(2024, 5, 15));
      expect(result.current.isEditing).toBe(false);
    });

    it("calls onChange with null for empty input", () => {
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({ value: new Date(2024, 0, 15), onChange }),
        )
      );

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("");
      });
      act(() => {
        result.current.commitAndStopEditing();
      });

      expect(onChange).toHaveBeenCalledWith(null);
      expect(result.current.isEditing).toBe(false);
    });

    it("does not call onChange for invalid input", () => {
      const onChange = vi.fn();
      const { result } = renderHook(() =>
        useDateEditState(makeConfig({ onChange }))
      );

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("garbage");
      });
      act(() => {
        result.current.commitAndStopEditing();
      });

      expect(onChange).not.toHaveBeenCalled();
      expect(result.current.isEditing).toBe(false);
    });

    it("does not throw when onChange is not provided", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("2024-06-15");
      });
      act(() => {
        result.current.commitAndStopEditing();
      });

      expect(result.current.isEditing).toBe(false);
    });
  });

  describe("setInputValue", () => {
    it("updates the raw input text", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("2024-06-15");
      });

      expect(result.current.displayedValue).toBe("2024-06-15");
    });
  });

  describe("setDateValue", () => {
    it("setDateValue formats with editFormatFn", () => {
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({
            value: null,
            editFormatFn: formatDateForInput,
          }),
        )
      );

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setDateValue(new Date(2024, 5, 15));
      });

      expect(result.current.displayedValue).toBe("2024-06-15");
    });
  });

  describe("inputError", () => {
    it("returns null when not editing", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));
      expect(result.current.inputError).toBeNull();
    });

    it("returns null for empty input while editing", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });

      expect(result.current.inputError).toBeNull();
    });

    it("returns 'invalid' for non-parsable input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("not-a-date");
      });

      expect(result.current.inputError).toBe("invalid");
    });

    it("returns 'out-of-range' for date outside min/max", () => {
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({
            min: new Date(2024, 0, 1),
            max: new Date(2024, 11, 31),
          }),
        )
      );

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("2025-06-15");
      });

      expect(result.current.inputError).toBe("out-of-range");
    });

    it("returns null for valid in-range date", () => {
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({
            min: new Date(2024, 0, 1),
            max: new Date(2024, 11, 31),
          }),
        )
      );

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("2024-06-15");
      });

      expect(result.current.inputError).toBeNull();
    });
  });

  describe("dateValue", () => {
    it("is undefined for empty input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });

      expect(result.current.dateValue).toBeUndefined();
    });

    it("is undefined for invalid input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("garbage");
      });

      expect(result.current.dateValue).toBeUndefined();
    });

    it("returns parsed date for valid input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("2024-06-15");
      });

      expect(result.current.dateValue).toBeInstanceOf(Date);
      expect(result.current.dateValue?.getMonth()).toBe(5);
      expect(result.current.dateValue?.getDate()).toBe(15);
    });
  });

  describe("external value sync", () => {
    it("updates displayedValue when external value changes while not editing", () => {
      const { result, rerender } = renderHook(
        (config: UseDateEditStateConfig) => useDateEditState(config),
        {
          initialProps: makeConfig({
            value: new Date(2024, 0, 15),
            displayFormatFn: formatDateForDisplay, // locale format
            editFormatFn: formatDateForInput,
          }),
        },
      );

      expect(result.current.displayedValue).toBe("Jan 15, 2024");

      rerender(
        makeConfig({
          value: new Date(2024, 6, 20),
          displayFormatFn: formatDateForDisplay,
          editFormatFn: formatDateForInput,
        }),
      );

      expect(result.current.displayedValue).toBe("Jul 20, 2024");
    });

    it("does not overwrite user edits when external value changes during editing", () => {
      const { result, rerender } = renderHook(
        (config: UseDateEditStateConfig) => useDateEditState(config),
        { initialProps: makeConfig({ value: new Date(2024, 0, 15) }) },
      );

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("2024-03-20");
      });

      // Intentional: user's unsaved edits are preserved when the parent
      // value changes. The hook only syncs when not editing.
      rerender(makeConfig({ value: new Date(2024, 6, 20) }));

      expect(result.current.displayedValue).toBe("2024-03-20");
    });
  });
});
