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
import { Calendar } from "@blueprintjs/icons";
import classnames from "classnames";
import React, { useCallback, useId, useMemo, useRef, useState } from "react";
import {
  formatDateForInput,
  formatDatetimeForDisplay,
  formatTime,
  isDateInRange,
  parseDateFromInput,
  parseDatetimeFromDisplay,
} from "../../shared/dateUtils.js";
import type { DatetimePickerFieldProps } from "../FormFieldApi.js";
import styles from "./DatetimePickerField.module.css";
import { LazyDateCalendar } from "./LazyDateCalendar.js";

/** Midnight fallback so `extractTime` can reuse `formatTime` when no date is selected. */
const DATE_ZERO = new Date(2000, 0, 1, 0, 0, 0, 0);

const CALENDAR_ICON_SIZE = 16;

function extractTime(date: Date | null): string {
  return formatTime(date ?? DATE_ZERO);
}

export function DatetimePickerField({
  id,
  value,
  onChange,
  min,
  max,
  placeholder,
  formatDate,
  parseDate,
  showTime = false,
  closeOnSelection,
}: DatetimePickerFieldProps): React.ReactElement {
  const shouldCloseOnSelection = closeOnSelection ?? !showTime;
  const popoverId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Format/parse: pick between date-only and datetime variants
  const editFormatFn = showTime ? formatDatetimeForDisplay : formatDateForInput;
  const displayFormatFn = formatDate ?? editFormatFn;
  const parseFn = parseDate
    ?? (showTime ? parseDatetimeFromDisplay : parseDateFromInput);

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

  // --- Derived error state (no useEffect) ---
  const inputError: "invalid" | "out-of-range" | null = (() => {
    if (!isEditing || inputValue === "") return null;
    const parsed = parseFn(inputValue);
    if (parsed == null) return "invalid";
    if (!isDateInRange(parsed, min, max)) return "out-of-range";
    return null;
  })();

  // --- Derived preview date for type-ahead calendar sync ---
  const previewDate: Date | undefined = (() => {
    if (!isEditing || inputValue === "") return undefined;
    const parsed = parseFn(inputValue);
    if (parsed != null && isDateInRange(parsed, min, max)) return parsed;
    return undefined;
  })();

  // --- Shared commit logic ---

  const commitInputValue = useCallback(() => {
    if (inputValue === "") {
      onChange?.(null);
      return;
    }
    const parsed = parseFn(inputValue);
    if (parsed != null && isDateInRange(parsed, min, max)) {
      onChange?.(parsed);
    }
  }, [inputValue, parseFn, min, max, onChange]);

  // --- Input event handlers ---

  const handleFocus = useCallback(() => {
    setIsEditing(true);
    setIsOpen(true);
    setInputValue(value != null ? editFormatFn(value) : "");
  }, [value, editFormatFn]);

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      // If focus moved to the popover (e.g. clicking a calendar day), skip commit —
      // the calendar select handler owns the onChange in that case.
      const relatedTarget = e.relatedTarget ?? document.activeElement;
      if (popoverRef.current?.contains(relatedTarget as Node)) {
        return;
      }
      commitInputValue();
      setIsEditing(false);
    },
    [commitInputValue],
  );

  const handleInputChange = useCallback((newValue: string) => {
    setInputValue(newValue);
  }, []);

  const handleInputClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      // Prevent Popover.Trigger's internal click handler from toggling the
      // popover closed when the user clicks the already-open input.
      e.stopPropagation();
    },
    [],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        commitInputValue();
        setIsEditing(false);
        setIsOpen(false);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setInputValue(value != null ? editFormatFn(value) : "");
        setIsEditing(false);
        setIsOpen(false);
        inputRef.current?.blur();
      } else if (e.key === "Tab" && !e.shiftKey && isOpen) {
        const firstFocusable = popoverRef.current?.querySelector(
          "button, select",
        ) as HTMLElement | null;
        if (firstFocusable != null) {
          e.preventDefault();
          firstFocusable.focus();
        }
      } else if (e.key === "Tab" && e.shiftKey) {
        setIsOpen(false);
      }
    },
    [commitInputValue, value, editFormatFn, isOpen],
  );

  // --- Popover handlers ---

  const handleOpenChange = useCallback((nextOpen: boolean) => {
    setIsOpen(nextOpen);
    if (!nextOpen) {
      setIsEditing(false);
      inputRef.current?.blur();
    }
  }, []);

  // --- Calendar handlers ---

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
      setInputValue(editFormatFn(date));

      if (shouldCloseOnSelection) {
        setIsOpen(false);
        setIsEditing(false);
        inputRef.current?.blur();
      }
    },
    [onChange, showTime, value, shouldCloseOnSelection, editFormatFn],
  );

  const handleTimeChange = useCallback(
    (timeString: string) => {
      const [hoursStr, minutesStr] = timeString.split(":");
      const hours = parseInt(hoursStr ?? "0", 10);
      const minutes = parseInt(minutesStr ?? "0", 10);

      const base = value != null ? new Date(value.getTime()) : new Date();
      base.setHours(hours, minutes, 0, 0);

      onChange?.(base);
    },
    [value, onChange],
  );

  // --- Focus boundary handlers ---

  const handleStartFocusBoundary = useCallback(
    () => {
      // Always redirect to the input. Tab from input into the calendar
      // is handled directly by handleKeyDown, so this boundary only fires
      // from auto-focus on open or Shift+Tab from the first calendar element.
      inputRef.current?.focus();
    },
    [],
  );

  const handleEndFocusBoundary = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      const relatedTarget = e.relatedTarget ?? document.activeElement;
      if (popoverRef.current?.contains(relatedTarget as Node)) {
        inputRef.current?.focus();
        setIsOpen(false);
        setIsEditing(false);
      } else {
        const buttons = popoverRef.current?.querySelectorAll(
          "button, select",
        );
        const lastButton = buttons?.[buttons.length - 1] as
          | HTMLElement
          | null;
        lastButton?.focus();
      }
    },
    [],
  );

  // --- Time footer ---

  const timeValue = extractTime(value);
  const footer = useMemo(
    () =>
      showTime
        ? (
          <div className={styles.osdkDatetimeTimeFooter}>
            <Input
              type="time"
              value={timeValue}
              onValueChange={handleTimeChange}
              className={styles.osdkDatetimeTimeInput}
              aria-label="Time"
            />
          </div>
        )
        : undefined,
    [showTime, timeValue, handleTimeChange],
  );

  const wrapperClassName = classnames(
    styles.osdkDatetimeInputWrapper,
    inputError != null && styles.osdkDatetimeInputWrapperError,
  );

  return (
    <Popover.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Popover.Trigger
        nativeButton={false}
        render={<div className={wrapperClassName} />}
      >
        <Input
          ref={inputRef}
          id={id}
          className={styles.osdkDatetimeInputField}
          type="text"
          value={displayedValue}
          onValueChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={popoverId}
          aria-haspopup="dialog"
        />
        <div className={styles.osdkDatetimeInputIcon}>
          <Calendar size={CALENDAR_ICON_SIZE} />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={4}>
          <Popover.Popup
            ref={popoverRef}
            className={styles.osdkDatetimePopover}
            id={popoverId}
            role="dialog"
            aria-label="date picker"
          >
            <div
              onFocus={handleStartFocusBoundary}
              tabIndex={0}
              aria-label="Start of date picker dialog"
              className={styles.osdkDatetimeFocusBoundary}
            />
            <LazyDateCalendar
              dateSelected={value ?? undefined}
              previewDate={previewDate}
              onSelect={handleCalendarSelect}
              min={min}
              max={max}
              footer={footer}
            />
            <div
              onFocus={handleEndFocusBoundary}
              tabIndex={0}
              aria-label="End of date picker dialog"
              className={styles.osdkDatetimeFocusBoundary}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
