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
import React, { useCallback, useId, useRef, useState } from "react";
import {
  POPUP_COLLISION_PADDING,
  POPUP_SIDE_OFFSET,
} from "../../base-components/popupPositioning.js";
import {
  formatDateForInput,
  formatDatetimeForInput,
  parseDateFromInput,
  parseDatetimeFromInput,
} from "../../shared/dateUtils.js";
import type { DatetimePickerFieldProps } from "../FormFieldApi.js";
import { stopPropagation } from "./calendarShared.js";
import commonStyles from "./DatePickerCommon.module.css";
import styles from "./DatetimePickerField.module.css";
import { LazyDateCalendar } from "./LazyDateCalendar.js";
import { TimePicker } from "./TimePicker.js";
import { useDateEditState } from "./useDateEditState.js";

export const DatetimePickerField: React.NamedExoticComponent<
  DatetimePickerFieldProps
> = React.memo(function DatetimePickerField({
  id,
  value,
  onChange,
  error,
  min,
  max,
  placeholder,
  formatDate,
  parseDate,
  showTime = false,
  closeOnSelection,
  portalRef,
}: DatetimePickerFieldProps) {
  const shouldCloseOnSelection = closeOnSelection ?? !showTime;
  const popoverId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  // When true, the next handleFocus call skips reopening the popover.
  // Set before focusing the input from a popover boundary exit so that
  // Tab/Shift-Tab proceeds to the adjacent form field naturally.
  const skipReopenRef = useRef(false);

  // Format/parse: pick between date-only and datetime variants.
  // editFormatFn produces a parsable string for typing (e.g. "2024-01-15" or "2024-01-15 14:30").
  // displayFormatFn produces the idle string. Defaults stay deterministic so
  // users in different browser locales see the same date in form inputs.
  const editFormatFn = showTime ? formatDatetimeForInput : formatDateForInput;
  const displayFormatFn = formatDate
    ?? (showTime ? formatDatetimeForInput : formatDateForInput);
  const parseFn = parseDate
    ?? (showTime ? parseDatetimeFromInput : parseDateFromInput);

  const {
    displayedValue,
    inputError,
    startEditing,
    stopEditing,
    commitAndStopEditing,
    setInputValue,
    setDateValue,
  } = useDateEditState({
    value,
    displayFormatFn,
    editFormatFn,
    parseFn,
    min,
    max,
    onChange,
  });

  // --- Input event handlers ---

  const handleFocus = useCallback(() => {
    if (skipReopenRef.current) {
      skipReopenRef.current = false;
      startEditing();
      return;
    }
    startEditing();
    setIsOpen(true);
  }, [startEditing]);

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const relatedTarget = e.relatedTarget ?? document.activeElement;
      if (popoverRef.current?.contains(relatedTarget as Node)) {
        // Focus moved into the popover portal (e.g. clicking a calendar day).
        // The field is still logically active, so suppress the blur from
        // bubbling — parent containers should not treat this as a field exit.
        e.stopPropagation();
        return;
      }
      commitAndStopEditing();
    },
    [commitAndStopEditing],
  );

  // Shared close sequence: dismiss the popover, reset editing state, and
  // blur the input so focus doesn't linger after the calendar disappears.
  // Uses stopEditing (not commitAndStopEditing) to avoid double-firing
  // onChange when called from calendar-select or after Enter already committed.
  const closePopover = useCallback(() => {
    setIsOpen(false);
    stopEditing();
    inputRef.current?.blur();
  }, [stopEditing]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        commitAndStopEditing();
        setIsOpen(false);
        inputRef.current?.blur();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closePopover();
      } else if (e.key === "Tab" && !e.shiftKey && isOpen) {
        // Move focus from the text input into the calendar popover.
        // The popover doesn't auto-focus on open (to keep the cursor in the input),
        // so Tab manually bridges focus to the first interactive calendar element.
        const firstFocusable = popoverRef.current?.querySelector<HTMLElement>(
          "button, select",
        );
        if (firstFocusable != null) {
          e.preventDefault();
          firstFocusable.focus();
        }
      } else if (e.key === "Tab" && e.shiftKey) {
        setIsOpen(false);
      }
    },
    [commitAndStopEditing, closePopover, isOpen],
  );

  // --- Popover handlers ---

  // Called by base-ui when the popover opens or closes (e.g. click outside, Escape).
  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) {
        setIsOpen(true);
      } else {
        closePopover();
      }
    },
    [closePopover],
  );

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
      setDateValue(date);

      if (shouldCloseOnSelection) {
        closePopover();
      }
    },
    [
      onChange,
      showTime,
      value,
      shouldCloseOnSelection,
      setDateValue,
      setInputValue,
      closePopover,
    ],
  );

  const handleTimeChange = useCallback(
    (time: Date) => {
      onChange?.(time);
      setDateValue(time);
    },
    [onChange, setDateValue],
  );

  // --- Focus boundary handlers ---
  // Visually-hidden elements at the start/end of the popover that trap Tab
  // cycling between the text input and calendar. Without these, Tab would
  // escape the popover into the page behind it.

  const handleStartFocusBoundary = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleEndFocusBoundary = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      const relatedTarget = e.relatedTarget ?? document.activeElement;
      if (popoverRef.current?.contains(relatedTarget as Node)) {
        // Tab reached the end of the popover. Close the popover and
        // return focus to the input without reopening it, so the next
        // Tab advances to the next form field.
        skipReopenRef.current = true;
        setIsOpen(false);
        stopEditing();
        inputRef.current?.focus();
      } else {
        const buttons = popoverRef.current?.querySelectorAll<HTMLElement>(
          "button, select",
        );
        const lastButton = buttons?.[buttons.length - 1];
        lastButton?.focus();
      }
    },
    [stopEditing],
  );

  // --- Time picker (rendered as a popover sibling, not a DayPicker footer,
  // so the border-top can span the full popover width via negative margins) ---

  const timeFooter = showTime
    ? (
      <div className={styles.osdkDatetimeTimeFooter}>
        <TimePicker value={value} onChange={handleTimeChange} />
      </div>
    )
    : undefined;

  const wrapperClassName = classnames(
    commonStyles.osdkDatePickerInputWrapper,
    styles.osdkDatetimeInputWrapper,
    inputError != null && commonStyles.osdkDatePickerInputWrapperError,
  );

  return (
    <Popover.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Popover.Trigger
        nativeButton={false}
        render={<div className={wrapperClassName} tabIndex={-1} />}
      >
        <Input
          ref={inputRef}
          id={id}
          className={commonStyles.osdkDatePickerInput}
          type="text"
          value={displayedValue}
          onValueChange={setInputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={stopPropagation}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={popoverId}
          aria-haspopup="dialog"
        />
      </Popover.Trigger>
      <Popover.Portal ref={portalRef}>
        <Popover.Positioner
          sideOffset={POPUP_SIDE_OFFSET}
          collisionPadding={POPUP_COLLISION_PADDING}
        >
          <Popover.Popup
            ref={popoverRef}
            className={commonStyles.osdkDatePickerPopover}
            id={popoverId}
            role="dialog"
            aria-label="date picker"
            // Disable base-ui's automatic focus restoration to the trigger on close.
            // We manage focus ourselves via closePopover() which blurs the input.
            finalFocus={false}
          >
            <div
              onFocus={handleStartFocusBoundary}
              tabIndex={0}
              aria-label="Start of date picker dialog"
              className={commonStyles.osdkDatePickerFocusBoundary}
            />
            <LazyDateCalendar
              dateSelected={value ?? undefined}
              onSelect={handleCalendarSelect}
              onClear={() => onChange?.(null)}
              min={min}
              max={max}
            />
            {timeFooter}
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
});
