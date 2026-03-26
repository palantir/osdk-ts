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
import { Popover } from "@base-ui/react/popover";
import classnames from "classnames";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  formatDateForInput,
  formatDatetimeForInput,
  parseDateFromInput,
  parseDatetimeFromInput,
} from "../../shared/dateUtils.js";
import type { BaseFormFieldProps } from "../FormFieldApi.js";
import styles from "./DatetimePickerField.module.css";
import { LazyDateCalendar } from "./LazyDateCalendar.js";
import { TimeInput } from "./TimeInput.js";

const INVALID_DATE_MESSAGE = "Invalid date";
const OUT_OF_RANGE_MESSAGE = "Out of range";

interface DatetimePickerInternalProps extends BaseFormFieldProps<Date> {
  id?: string;
  min?: Date;
  max?: Date;
  showTime?: boolean;
  formatDate?: (date: Date) => string;
  parseDate?: (str: string) => Date | false | null;
}

type ParseResult =
  | { status: "valid"; date: Date }
  | { status: "invalid" }
  | { status: "out-of-range"; date: Date };

function parseAndValidate(
  parseFn: (str: string) => Date | false | null | undefined,
  min: Date | undefined,
  max: Date | undefined,
  text: string,
): ParseResult {
  const trimmed = text.trim();
  if (trimmed === "") {
    return { status: "invalid" };
  }
  const result = parseFn(trimmed);
  if (result == null || result === false || isNaN(result.getTime())) {
    return { status: "invalid" };
  }
  if (min != null && result.getTime() < min.getTime()) {
    return { status: "out-of-range", date: result };
  }
  if (max != null && result.getTime() > max.getTime()) {
    return { status: "out-of-range", date: result };
  }
  return { status: "valid", date: result };
}

function extractTime(date: Date | null): string {
  if (date == null) return "00:00";
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function DatetimePickerField({
  id,
  value,
  onChange,
  min,
  max,
  showTime = false,
  formatDate,
  parseDate,
}: DatetimePickerInternalProps): React.ReactElement {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatFn = formatDate
    ?? (showTime ? formatDatetimeForInput : formatDateForInput);
  const parseFn: (str: string) => Date | false | null | undefined = parseDate
    ?? (showTime ? parseDatetimeFromInput : parseDateFromInput);

  const formattedValue = useMemo(
    () => (value != null ? formatFn(value) : ""),
    [value, formatFn],
  );

  const handleInputFocus = useCallback(() => {
    setIsInputFocused(true);
    setIsOpen(true);
    setInputValue(formattedValue);
    setErrorMessage(null);
  }, [formattedValue]);

  const handleInputChange = useCallback(
    (newValue: string) => {
      setInputValue(newValue);
      setErrorMessage(null);

      if (newValue.trim() === "") {
        onChange?.(null);
        return;
      }

      const result = parseAndValidate(parseFn, min, max, newValue);
      if (result.status === "valid") {
        onChange?.(result.date);
      }
    },
    [onChange, parseFn, min, max],
  );

  const handleInputBlur = useCallback(() => {
    setIsInputFocused(false);

    if (inputValue.trim() === "") {
      onChange?.(null);
      setErrorMessage(null);
      return;
    }

    const result = parseAndValidate(parseFn, min, max, inputValue);
    switch (result.status) {
      case "invalid":
        setErrorMessage(INVALID_DATE_MESSAGE);
        return;
      case "out-of-range":
        setErrorMessage(OUT_OF_RANGE_MESSAGE);
        return;
      case "valid":
        setErrorMessage(null);
        onChange?.(result.date);
    }
  }, [inputValue, onChange, parseFn, min, max]);

  const handleCalendarSelect = useCallback(
    (selected: Date | undefined) => {
      if (selected == null) {
        onChange?.(null);
        setInputValue("");
        return;
      }

      const date = new Date(selected.getTime());
      if (showTime && value != null) {
        date.setHours(value.getHours(), value.getMinutes());
      }

      onChange?.(date);
      setInputValue(formatFn(date));
      setIsOpen(false);
      setErrorMessage(null);
    },
    [onChange, formatFn, showTime, value],
  );

  const handleTimeChange = useCallback(
    (timeString: string) => {
      const [hoursStr, minutesStr] = timeString.split(":");
      const hours = parseInt(hoursStr ?? "0", 10);
      const minutes = parseInt(minutesStr ?? "0", 10);

      const base = value != null ? new Date(value.getTime()) : new Date();
      base.setHours(hours, minutes, 0, 0);

      onChange?.(base);
      setInputValue(formatFn(base));
    },
    [value, onChange, formatFn],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      } else if (event.key === "Enter") {
        const result = parseAndValidate(parseFn, min, max, inputValue);
        if (result.status === "valid") {
          onChange?.(result.date);
          setIsOpen(false);
        }
      }
    },
    [inputValue, parseFn, min, max, onChange],
  );

  const displayValue = isInputFocused ? inputValue : formattedValue;
  const hasError = errorMessage != null;

  const footer = showTime
    ? <TimeInput value={extractTime(value)} onChange={handleTimeChange} />
    : undefined;

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger
        render={
          <Input
            ref={inputRef}
            id={id}
            type="text"
            value={hasError && !isInputFocused ? errorMessage : displayValue}
            className={classnames(
              styles.input,
              hasError && !isInputFocused && styles.inputError,
            )}
            onValueChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
          />
        }
      />
      <Popover.Portal>
        <Popover.Positioner sideOffset={4}>
          <Popover.Popup className={styles.popover}>
            <LazyDateCalendar
              dateSelected={value ?? undefined}
              onSelect={handleCalendarSelect}
              min={min}
              max={max}
              footer={footer}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
