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

import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";
import { ChevronDown, ChevronUp } from "@blueprintjs/icons";
import React, { useCallback, useRef, useState } from "react";
import type { NumberInputFieldProps } from "../FormFieldApi.js";
import styles from "./NumberInputField.module.css";

/**
 * Structural regex for valid numeric input.
 *
 * Allows intermediate typing states that will become valid numbers:
 * ""  — user cleared the field (all groups are optional)
 * "-" — user started typing a negative number
 * "." — user started typing a decimal like ".5"
 * "+" — user started typing an explicitly positive number
 * "1.", "1e", "1e+" — partial but structurally valid
 *
 * Rejects obviously invalid strings like "1.2.3" or "+-5".
 */
const VALID_NUMERIC_REGEX = /^[+-.]?(\d+\.?\d*|\d*\.?\d+)?([eE][+-]?\d*)?$/;

const DEFAULT_STEP = 1;
const CHEVRON_SIZE = 12;

// TODO: Add min/max validation so the field can surface
// out-of-range errors through the form validation system.
export function NumberInputField({
  id,
  value,
  onChange,
  placeholder,
  min: _min,
  max: _max,
  step,
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

  const applyStep = useCallback(
    (direction: 1 | -1) => {
      const current = parseNumericValue(displayValue) ?? 0;
      const delta = direction * (step ?? DEFAULT_STEP);
      const next = current + delta;
      const formatted = formatNumberForDisplay(next);
      setDisplayValue(formatted);
      onChange?.(next);
    },
    [displayValue, onChange, step],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
        return;
      }
      e.preventDefault();
      applyStep(e.key === "ArrowUp" ? 1 : -1);
    },
    [applyStep],
  );

  const handleStepUp = useCallback(() => {
    applyStep(1);
  }, [applyStep]);

  const handleStepDown = useCallback(() => {
    applyStep(-1);
  }, [applyStep]);

  return (
    <div className={styles.osdkNumberInputWrapper}>
      <Input
        id={id}
        className={styles.osdkNumberInputField}
        type="text"
        inputMode="decimal"
        value={displayValue}
        onValueChange={handleValueChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      <div className={styles.osdkNumberInputStepper}>
        <Button
          className={styles.osdkNumberInputStepButton}
          aria-label="Increment"
          tabIndex={-1}
          onClick={handleStepUp}
        >
          <ChevronUp size={CHEVRON_SIZE} />
        </Button>
        <Button
          className={styles.osdkNumberInputStepButton}
          aria-label="Decrement"
          tabIndex={-1}
          onClick={handleStepDown}
        >
          <ChevronDown size={CHEVRON_SIZE} />
        </Button>
      </div>
    </div>
  );
}

function isValidInput(text: string): boolean {
  return VALID_NUMERIC_REGEX.test(text);
}

function parseNumericValue(text: string): number | null {
  if (text === "") {
    return null;
  }
  const parsed = Number(text);
  return Number.isNaN(parsed) ? null : parsed;
}

function formatNumberForDisplay(value: number | null): string {
  return value != null ? String(value) : "";
}
