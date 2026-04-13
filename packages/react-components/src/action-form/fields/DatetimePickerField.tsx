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
import React, { useCallback, useId, useRef, useState } from "react";
import {
  formatDateForInput,
  formatDatetimeForDisplay,
  getTimeValue,
  parseDateFromInput,
  parseDatetimeFromDisplay,
  parseTimeString,
} from "../../shared/dateUtils.js";
import type { DatetimePickerFieldProps } from "../FormFieldApi.js";
import { CALENDAR_ICON_SIZE, stopPropagation } from "./calendarShared.js";
import commonStyles from "./DatePickerCommon.module.css";
import styles from "./DatetimePickerField.module.css";
import { LazyDateCalendar } from "./LazyDateCalendar.js";
import { TimeFooter } from "./TimeFooter.js";
import { useDateEditState } from "./useDateEditState.js";

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

  // Format/parse: pick between date-only and datetime variants
  const editFormatFn = showTime ? formatDatetimeForDisplay : formatDateForInput;
  const displayFormatFn = formatDate ?? editFormatFn;
  const parseFn = parseDate
    ?? (showTime ? parseDatetimeFromDisplay : parseDateFromInput);

  const {
    inputValue: editInputValue,
    displayedValue,
    inputError,
    previewDate,
    startEditing,
    stopEditing,
    setInputValue: setEditInputValue,
    commitValue,
  } = useDateEditState({
    value,
    displayFormatFn,
    editFormatFn,
    parseFn,
    min,
    max,
  });

  // --- Input event handlers ---

  const handleFocus = useCallback(() => {
    startEditing();
    setIsOpen(true);
  }, [startEditing]);

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      // If focus moved to the popover (e.g. clicking a calendar day), skip commit —
      // the calendar select handler owns the onChange in that case.
      const relatedTarget = e.relatedTarget ?? document.activeElement;
      if (popoverRef.current?.contains(relatedTarget as Node)) {
        return;
      }
      if (editInputValue === "") {
        onChange?.(null);
      } else {
        const committed = commitValue();
        if (committed != null) {
          onChange?.(committed);
        }
      }
      stopEditing();
    },
    [editInputValue, commitValue, stopEditing, onChange],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (editInputValue === "") {
          onChange?.(null);
        } else {
          const committed = commitValue();
          if (committed != null) {
            onChange?.(committed);
          }
        }
        stopEditing();
        setIsOpen(false);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setEditInputValue(value != null ? editFormatFn(value) : "");
        stopEditing();
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
    [
      editInputValue,
      commitValue,
      stopEditing,
      setEditInputValue,
      value,
      editFormatFn,
      isOpen,
      onChange,
    ],
  );

  // --- Popover handlers ---

  const handleOpenChange = useCallback((nextOpen: boolean) => {
    setIsOpen(nextOpen);
    if (!nextOpen) {
      stopEditing();
      inputRef.current?.blur();
    }
  }, [stopEditing]);

  // --- Calendar handlers ---

  const handleCalendarSelect = useCallback(
    (selected: Date | undefined) => {
      if (selected == null) {
        onChange?.(null);
        setEditInputValue("");
        return;
      }

      const date = new Date(selected.getTime());
      if (showTime && value != null) {
        date.setHours(value.getHours(), value.getMinutes());
      }

      onChange?.(date);
      setEditInputValue(editFormatFn(date));

      if (shouldCloseOnSelection) {
        setIsOpen(false);
        stopEditing();
        inputRef.current?.blur();
      }
    },
    [
      onChange,
      showTime,
      value,
      shouldCloseOnSelection,
      editFormatFn,
      setEditInputValue,
      stopEditing,
    ],
  );

  const handleTimeChange = useCallback(
    (timeString: string) => {
      const { hours, minutes } = parseTimeString(timeString);
      const base = value != null ? new Date(value.getTime()) : new Date();
      base.setHours(hours, minutes, 0, 0);
      onChange?.(base);
    },
    [value, onChange],
  );

  // --- Focus boundary handlers ---

  const handleStartFocusBoundary = useCallback(
    () => {
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
        stopEditing();
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
    [stopEditing],
  );

  // --- Time footer ---

  const timeFooter = showTime
    ? (
      <TimeFooter
        startTimeValue={getTimeValue(value)}
        onStartTimeChange={handleTimeChange}
      />
    )
    : undefined;

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
          className={commonStyles.osdkDatePickerInput}
          type="text"
          value={displayedValue}
          onValueChange={setEditInputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={stopPropagation}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={popoverId}
          aria-haspopup="dialog"
        />
        <div className={commonStyles.osdkDatePickerIcon}>
          <Calendar size={CALENDAR_ICON_SIZE} />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={4}>
          <Popover.Popup
            ref={popoverRef}
            className={commonStyles.osdkDatePickerPopover}
            id={popoverId}
            role="dialog"
            aria-label="date picker"
          >
            <div
              onFocus={handleStartFocusBoundary}
              tabIndex={0}
              aria-label="Start of date picker dialog"
              className={commonStyles.osdkDatePickerFocusBoundary}
            />
            <LazyDateCalendar
              dateSelected={value ?? undefined}
              previewDate={previewDate}
              onSelect={handleCalendarSelect}
              min={min}
              max={max}
              footer={timeFooter}
            />
            <div
              onFocus={handleEndFocusBoundary}
              tabIndex={0}
              aria-label="End of date picker dialog"
              className={commonStyles.osdkDatePickerFocusBoundary}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
