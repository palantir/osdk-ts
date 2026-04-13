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

import { useCallback, useRef, useState } from "react";
import { isDateInRange } from "../../shared/dateUtils.js";

export interface UseDateEditStateConfig {
  /** The current committed date value (controlled by the parent). */
  value: Date | null;
  /**
   * Formats the date when the input is idle (not focused). Can be locale-friendly
   * like "Jan 15, 2024" — it doesn't need to be parsable since the user isn't typing.
   * When no custom formatDate prop is provided, this is the same as editFormatFn.
   */
  displayFormatFn: (date: Date) => string;
  /**
   * Formats the date when the user starts typing. Must produce a string that
   * parseFn can round-trip back to a Date (e.g. "2024-01-15" or "2024-01-15 14:30").
   */
  editFormatFn: (date: Date) => string;
  /** Parses user-typed text back into a Date. Returns undefined if invalid. */
  parseFn: (text: string) => Date | undefined;
  /** Earliest selectable date (inclusive). */
  min?: Date;
  /** Latest selectable date (inclusive). */
  max?: Date;
}

export interface UseDateEditState {
  /** Whether the user is currently typing in the input. */
  isEditing: boolean;
  /** The raw text in the input during editing. */
  inputValue: string;
  /** The value to show in the input: raw text when editing, formatted date otherwise. */
  displayedValue: string;
  /** Validation error for the current input text: null when valid or not editing. */
  inputError: "invalid" | "out-of-range" | null;
  /**
   * Live parse of inputValue — the Date if parsable, undefined if empty/invalid.
   * Re-derived every render. Only meaningful while isEditing is true.
   * Used for cross-input validation (e.g. DateRangeInputField's overlapping check).
   */
  parsedValue: Date | undefined;
  /**
   * The validated date ready to commit on blur/Enter: the parsed date when valid
   * and in range, null otherwise (invalid, out-of-range, or empty input).
   * Callers use this directly in blur/Enter handlers instead of manually checking
   * parsedValue + inputError.
   */
  validatedDate: Date | null;
  /** Enter editing mode: sets isEditing=true and populates inputValue from the current value. */
  startEditing: () => void;
  /** Exit editing mode without committing. */
  stopEditing: () => void;
  /** Update the raw input text (stable useState setter). */
  setInputValue: (value: string) => void;
}

/**
 * Manages the editing lifecycle for a single date text input.
 *
 * Handles the two-phase display pattern where the input shows a formatted
 * display value when idle and switches to an editable format when focused.
 * Derives validation errors and a parsed date from the current input text
 * without useEffect.
 *
 * Used by DatetimePickerField (1 instance) and DateRangeInputField (2 instances).
 */
export function useDateEditState({
  value,
  displayFormatFn,
  editFormatFn,
  parseFn,
  min,
  max,
}: UseDateEditStateConfig): UseDateEditState {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Sync inputValue when external value changes (e.g. parent resets)
  const prevValueTimeRef = useRef<number | null>(value?.getTime() ?? null);
  const currentValueTime = value?.getTime() ?? null;
  if (prevValueTimeRef.current !== currentValueTime) {
    prevValueTimeRef.current = currentValueTime;
    if (!isEditing) {
      setInputValue(value != null ? editFormatFn(value) : "");
    }
  }

  // When editing, show the raw text for the user to edit; when idle, show the display-formatted value.
  const displayedValue = isEditing
    ? inputValue
    : (value != null ? displayFormatFn(value) : "");

  // Parse the input once per render and derive all validation state from it.
  const parsedValue = (isEditing && inputValue !== "")
    ? parseFn(inputValue)
    : undefined;

  const inputError: "invalid" | "out-of-range" | null = (() => {
    // Not editing: parsedValue is undefined (we skip parsing idle inputs), so
    // without this guard we'd wrongly report "invalid" for a valid committed value.
    // Empty input: the user cleared the field — that means null, not invalid.
    if (!isEditing || inputValue === "") return null;
    if (parsedValue == null) return "invalid";
    if (!isDateInRange(parsedValue, min, max)) return "out-of-range";
    return null;
  })();

  // The validated date ready for onChange, derived from parsedValue + inputError.
  const validatedDate = (inputError == null && parsedValue != null)
    ? parsedValue
    : null;

  const startEditing = useCallback(() => {
    setIsEditing(true);
    setInputValue(value != null ? editFormatFn(value) : "");
  }, [value, editFormatFn]);

  const stopEditing = useCallback(() => {
    setIsEditing(false);
  }, []);

  return {
    isEditing,
    inputValue,
    displayedValue,
    inputError,
    parsedValue,
    validatedDate,
    startEditing,
    stopEditing,
    setInputValue,
  };
}
