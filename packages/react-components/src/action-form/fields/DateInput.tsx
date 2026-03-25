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

const DEFAULT_INVALID_DATE_MESSAGE = "Invalid date";
const DEFAULT_OUT_OF_RANGE_MESSAGE = "Out of range";

export interface DateInputProps extends BaseFormFieldProps<Date> {
  id?: string;
  min?: Date;
  max?: Date;
  showTime?: boolean;
  invalidDateMessage?: string;
  outOfRangeMessage?: string;
  formatDate?: (date: Date) => string;
  parseDate?: (str: string) => Date | false | null;
}

export function DateInput({
  id,
  value,
  onChange,
  min,
  max,
  showTime = false,
  formatDate,
  parseDate,
  invalidDateMessage = DEFAULT_INVALID_DATE_MESSAGE,
  outOfRangeMessage = DEFAULT_OUT_OF_RANGE_MESSAGE,
}: DateInputProps): React.ReactElement {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const defaultFormatDate = useMemo(
    (): (date: Date) => string =>
      showTime
        ? (d) => formatDatetimeForInput(d)
        : (d) => formatDateForInput(d),
    [showTime],
  );

  const defaultParseDate = useMemo(
    (): (str: string) => Date | undefined =>
      showTime ? parseDatetimeFromInput : parseDateFromInput,
    [showTime],
  );

  const formatFn = formatDate ?? defaultFormatDate;
  const parseFn: (str: string) => Date | false | null | undefined = parseDate
    ?? defaultParseDate;

  const formattedValue = useMemo(
    () => (value != null ? formatFn(value) : ""),
    [value, formatFn],
  );

  type ParseResult =
    | { status: "valid"; date: Date }
    | { status: "invalid" }
    | { status: "out-of-range"; date: Date };

  const parseAndValidate = useCallback(
    (text: string): ParseResult => {
      if (text === "") {
        return { status: "invalid" };
      }
      const result = parseFn(text);
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
    },
    [parseFn, min, max],
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

      if (newValue === "") {
        onChange?.(null);
        return;
      }

      const result = parseAndValidate(newValue);
      if (result.status === "valid") {
        onChange?.(result.date);
      }
    },
    [onChange, parseAndValidate],
  );

  const handleInputBlur = useCallback(() => {
    setIsInputFocused(false);

    if (inputValue === "") {
      onChange?.(null);
      setErrorMessage(null);
      return;
    }

    const result = parseAndValidate(inputValue);
    switch (result.status) {
      case "invalid":
        setErrorMessage(invalidDateMessage);
        return;
      case "out-of-range":
        setErrorMessage(outOfRangeMessage);
        return;
      case "valid":
        setErrorMessage(null);
        onChange?.(result.date);
    }
  }, [
    inputValue,
    onChange,
    parseAndValidate,
    invalidDateMessage,
    outOfRangeMessage,
  ]);

  const handleCalendarSelect = useCallback(
    (selected: Date | undefined) => {
      if (selected == null) {
        onChange?.(null);
        setInputValue("");
        return;
      }

      // Preserve existing time when selecting a calendar day
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
        const result = parseAndValidate(inputValue);
        if (result.status === "valid") {
          onChange?.(result.date);
          setIsOpen(false);
        }
      }
    },
    [inputValue, parseAndValidate, onChange],
  );

  const timeValue = useMemo(() => {
    if (value == null) return "00:00";
    const hours = String(value.getHours()).padStart(2, "0");
    const minutes = String(value.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }, [value]);

  const displayValue = isInputFocused ? inputValue : formattedValue;
  const hasError = errorMessage != null;

  const footer = showTime
    ? <TimeInput value={timeValue} onChange={handleTimeChange} />
    : undefined;

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger
        render={
          <input
            ref={inputRef}
            id={id}
            type="text"
            value={hasError && !isInputFocused ? errorMessage : displayValue}
            className={classnames(
              styles.input,
              hasError && !isInputFocused && styles.inputError,
            )}
            onChange={(e) => handleInputChange(e.target.value)}
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
              selected={value ?? undefined}
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
