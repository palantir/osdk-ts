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

import { Input } from "@base-ui/react/input";
import React, { useCallback, useRef, useState } from "react";
import type { NumberInputFieldProps } from "../FormFieldApi.js";
import styles from "./NumberInputField.module.css";

/**
 * Structural regex for valid numeric input. Allows intermediate typing states
 * like "-", "1.", "1e", "1e+" while rejecting obviously invalid strings
 * like "1.2.3" or "+-5".
 */
const VALID_NUMERIC_REGEX = /^[+-]?(\d+\.?\d*|\d*\.?\d+)([eE][+-]?\d*)?$/;

export function NumberInputField({
  id,
  value,
  onChange,
  placeholder,
  min,
  max,
}: NumberInputFieldProps): React.ReactElement {
  const [displayValue, setDisplayValue] = useState<string>(() =>
    formatNumberForDisplay(value)
  );

  const prevValueRef = useRef(value);

  // Sync external value → internal display string
  if (prevValueRef.current !== value) {
    prevValueRef.current = value;
    const currentParsed = parseNumericValue(displayValue);

    if (value !== currentParsed) {
      setDisplayValue(formatNumberForDisplay(value));
    }
  }

  const handleValueChange = useCallback(
    (newValue: string) => {
      if (!isValidInput(newValue)) {
        return;
      }

      setDisplayValue(newValue);
      onChange?.(parseNumericValue(newValue));
    },
    [onChange],
  );

  const handleBlur = useCallback(() => {
    const parsed = parseNumericValue(displayValue);
    if (parsed == null) {
      return;
    }

    const clamped = clampValue(parsed, min, max);
    if (clamped !== parsed) {
      setDisplayValue(String(clamped));
      onChange?.(clamped);
    }
  }, [displayValue, min, max, onChange]);

  return (
    <Input
      id={id}
      className={styles.osdkNumberInput}
      type="text"
      inputMode="decimal"
      value={displayValue}
      onValueChange={handleValueChange}
      onBlur={handleBlur}
      placeholder={placeholder}
    />
  );
}

function isValidInput(text: string): boolean {
  return (
    text === ""
    || text === "-"
    || text === "+"
    || text === "."
    || VALID_NUMERIC_REGEX.test(text)
  );
}

function parseNumericValue(text: string): number | null {
  if (text === "") {
    return null;
  }
  const parsed = Number(text);
  return Number.isNaN(parsed) ? null : parsed;
}

function clampValue(
  value: number,
  min: number | undefined,
  max: number | undefined,
): number {
  let clamped = value;
  if (min != null) {
    clamped = Math.max(clamped, min);
  }
  if (max != null) {
    clamped = Math.min(clamped, max);
  }
  return clamped;
}

function formatNumberForDisplay(value: number | null): string {
  return value != null ? String(value) : "";
}
