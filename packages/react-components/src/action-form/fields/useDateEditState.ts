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

import { useCallback, useMemo, useRef, useState } from "react";
import { isDateInRange } from "../../shared/dateUtils.js";

export interface UseDateEditStateConfig {
  value: Date | null;
  displayFormatFn: (date: Date) => string;
  editFormatFn: (date: Date) => string;
  parseFn: (text: string) => Date | undefined;
  min?: Date;
  max?: Date;
}

export interface UseDateEditState {
  isEditing: boolean;
  inputValue: string;
  displayedValue: string;
  inputError: "invalid" | "out-of-range" | null;
  parsedValue: Date | undefined;
  previewDate: Date | undefined;
  startEditing: () => void;
  stopEditing: () => void;
  setInputValue: (value: string) => void;
  commitValue: () => Date | null;
}

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

  const displayedValue = isEditing
    ? inputValue
    : (value != null ? displayFormatFn(value) : "");

  // Parse once, derive inputError + previewDate + parsedValue
  const parsedValue = (isEditing && inputValue !== "")
    ? parseFn(inputValue)
    : undefined;

  const inputError: "invalid" | "out-of-range" | null = (() => {
    if (!isEditing || inputValue === "") return null;
    if (parsedValue == null) return "invalid";
    if (!isDateInRange(parsedValue, min, max)) return "out-of-range";
    return null;
  })();

  const previewDate = (parsedValue != null && inputError == null)
    ? parsedValue
    : undefined;

  const startEditing = useCallback(() => {
    setIsEditing(true);
    setInputValue(value != null ? editFormatFn(value) : "");
  }, [value, editFormatFn]);

  const stopEditing = useCallback(() => {
    setIsEditing(false);
  }, []);

  const commitValue = useCallback((): Date | null => {
    if (inputValue === "") return null;
    const parsed = parseFn(inputValue);
    if (parsed != null && isDateInRange(parsed, min, max)) return parsed;
    return null;
  }, [inputValue, parseFn, min, max]);

  return useMemo(() => ({
    isEditing,
    inputValue,
    displayedValue,
    inputError,
    parsedValue,
    previewDate,
    startEditing,
    stopEditing,
    setInputValue,
    commitValue,
  }), [
    isEditing,
    inputValue,
    displayedValue,
    inputError,
    parsedValue,
    previewDate,
    startEditing,
    stopEditing,
    setInputValue,
    commitValue,
  ]);
}
