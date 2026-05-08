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
  formatDateForInput,
  formatDatetimeForInput,
  isDateInRange,
  parseDateFromInput,
  parseDatetimeFromInput,
} from "../../shared/dateUtils.js";
import type { DatetimePickerFieldProps } from "../FormFieldApi.js";
import { stopPropagation } from "./calendarShared.js";
import commonStyles from "./DatePickerCommon.module.css";
import styles from "./DatetimePickerField.module.css";
import { LazyDateCalendar } from "./LazyDateCalendar.js";
import { PortalDismissLayer } from "./PortalDismissLayer.js";
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
  portalContainer,
}: DatetimePickerFieldProps) {
  const shouldCloseOnSelection = closeOnSelection ?? !showTime;
  const popoverId = useId();
  // The wrapper is only a visual/positioning anchor. The input itself remains
  // the Popover.Trigger so axe does not see an interactive wrapper around an
  // interactive combobox.
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  // activeDateValue is the selected/typed date; visibleCalendarMonth is only
  // the calendar viewport. Keeping the viewport separate lets typed dates jump
  // the calendar while next/previous month navigation still works.
  const [visibleCalendarMonth, setVisibleCalendarMonth] = useState<
    Date | undefined
  >(value ?? new Date());
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
    isEditing,
    displayedValue,
    inputError,
    dateValue,
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
    setVisibleCalendarMonth(value ?? undefined);
    setIsOpen(true);
  }, [startEditing, value]);

  const handlePointerDown = useCallback(() => {
    // Opening from pointer-down keeps mouse interactions in sync with focus
    // editing before Base UI's later click trigger handler runs.
    inputRef.current?.focus();
    handleFocus();
  }, [handleFocus]);

  const handleInputValueChange = useCallback(
    (nextValue: string) => {
      setInputValue(nextValue);
      const parsedDate = nextValue !== "" ? parseFn(nextValue) : undefined;
      if (parsedDate != null && isDateInRange(parsedDate, min, max)) {
        setVisibleCalendarMonth(parsedDate);
      }
    },
    [max, min, parseFn, setInputValue],
  );

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
      setVisibleCalendarMonth(date);

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

  const handleCalendarClear = useCallback(() => {
    onChange?.(null);
    setDateValue(null);
  }, [onChange, setDateValue]);

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

  // --- Time picker ---

  const activeDateValue = isEditing && inputError == null
    ? dateValue
    : (value ?? undefined);

  const timeFooter = showTime
    ? (
      <div className={styles.osdkDatetimeTimeFooter}>
        <TimePicker
          value={activeDateValue ?? null}
          onChange={handleTimeChange}
        />
      </div>
    )
    : undefined;

  const wrapperClassName = classnames(
    commonStyles.osdkDatePickerInputWrapper,
    styles.osdkDatetimeInputWrapper,
    inputError != null && commonStyles.osdkDatePickerInputWrapperError,
  );

  // Keep Popover.Trigger on the input itself. Moving it to the wrapper would
  // make click handling simpler, but it would also nest an interactive combobox
  // inside an interactive trigger and reintroduce the axe violation.
  return (
    <Popover.Root
      open={isOpen}
      onOpenChange={handleOpenChange}
      // Uses pointer-down outside dismissal so the click that opens the picker
      // is not reinterpreted after the portal dismiss layer appears.
      modal="trap-focus"
    >
      <div ref={wrapperRef} className={wrapperClassName}>
        <Popover.Trigger
          nativeButton={false}
          render={
            <Input
              ref={inputRef}
              id={id}
              className={commonStyles.osdkDatePickerInput}
              type="text"
              value={displayedValue}
              onValueChange={handleInputValueChange}
              onFocus={handleFocus}
              onPointerDown={handlePointerDown}
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
          }
        />
      </div>
      <Popover.Portal ref={portalRef} container={portalContainer}>
        <PortalDismissLayer
          className={commonStyles.osdkDatePickerDismissLayer}
          onDismiss={closePopover}
        />
        <Popover.Positioner
          anchor={wrapperRef}
          className={commonStyles.osdkDatePickerPositioner}
          sideOffset={4}
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
              dateSelected={activeDateValue}
              onSelect={handleCalendarSelect}
              onClear={handleCalendarClear}
              month={visibleCalendarMonth}
              onMonthChange={setVisibleCalendarMonth}
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
});
