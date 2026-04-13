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
import { describe, expect, it } from "vitest";
import {
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
      expect(result.current.inputValue).toBe("");
      expect(result.current.displayedValue).toBe("");
      expect(result.current.inputError).toBeNull();
      expect(result.current.parsedValue).toBeUndefined();
      expect(result.current.validatedDate).toBeNull();
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
    it("enters editing mode and populates inputValue with editFormatFn", () => {
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({ value: new Date(2024, 0, 15) }),
        )
      );

      act(() => {
        result.current.startEditing();
      });

      expect(result.current.isEditing).toBe(true);
      expect(result.current.inputValue).toBe("2024-01-15");
      expect(result.current.displayedValue).toBe("2024-01-15");
    });

    it("uses editFormatFn not displayFormatFn for input", () => {
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({
            value: new Date(2024, 0, 15),
            displayFormatFn: () => "Jan 15, 2024",
            editFormatFn: formatDateForInput,
          }),
        )
      );

      act(() => {
        result.current.startEditing();
      });

      // While editing, inputValue uses editFormatFn
      expect(result.current.inputValue).toBe("2024-01-15");
      // displayedValue shows the raw inputValue during editing
      expect(result.current.displayedValue).toBe("2024-01-15");
    });

    it("sets empty inputValue when value is null", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });

      expect(result.current.isEditing).toBe(true);
      expect(result.current.inputValue).toBe("");
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

      expect(result.current.inputValue).toBe("2024-06-15");
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

  describe("parsedValue", () => {
    it("is undefined when not editing", () => {
      const { result } = renderHook(() =>
        useDateEditState(
          makeConfig({ value: new Date(2024, 0, 15) }),
        )
      );
      expect(result.current.parsedValue).toBeUndefined();
    });

    it("is undefined for empty input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });

      expect(result.current.parsedValue).toBeUndefined();
    });

    it("is undefined for invalid input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("garbage");
      });

      expect(result.current.parsedValue).toBeUndefined();
    });

    it("returns parsed date for valid input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("2024-06-15");
      });

      expect(result.current.parsedValue).toBeInstanceOf(Date);
      expect(result.current.parsedValue?.getMonth()).toBe(5);
      expect(result.current.parsedValue?.getDate()).toBe(15);
    });
  });

  describe("validatedDate", () => {
    it("is null when not editing", () => {
      const { result } = renderHook(() =>
        useDateEditState(makeConfig({ value: new Date(2024, 0, 15) }))
      );
      expect(result.current.validatedDate).toBeNull();
    });

    it("is null for empty input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });

      expect(result.current.validatedDate).toBeNull();
    });

    it("is null for invalid input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("garbage");
      });

      expect(result.current.validatedDate).toBeNull();
    });

    it("is null for out-of-range input", () => {
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

      expect(result.current.validatedDate).toBeNull();
    });

    it("returns parsed date for valid in-range input", () => {
      const { result } = renderHook(() => useDateEditState(makeConfig()));

      act(() => {
        result.current.startEditing();
      });
      act(() => {
        result.current.setInputValue("2024-06-15");
      });

      expect(result.current.validatedDate).toBeInstanceOf(Date);
      expect(result.current.validatedDate?.getMonth()).toBe(5);
      expect(result.current.validatedDate?.getDate()).toBe(15);
    });
  });

  describe("external value sync", () => {
    it("updates displayedValue when external value changes while not editing", () => {
      const { result, rerender } = renderHook(
        (config: UseDateEditStateConfig) => useDateEditState(config),
        { initialProps: makeConfig({ value: new Date(2024, 0, 15) }) },
      );

      expect(result.current.displayedValue).toBe("2024-01-15");

      rerender(makeConfig({ value: new Date(2024, 6, 20) }));

      expect(result.current.displayedValue).toBe("2024-07-20");
    });

    it("does not overwrite inputValue when external value changes during editing", () => {
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

      // Parent resets value while user is typing
      rerender(makeConfig({ value: new Date(2024, 6, 20) }));

      // inputValue should NOT be overwritten
      expect(result.current.inputValue).toBe("2024-03-20");
    });
  });
});
