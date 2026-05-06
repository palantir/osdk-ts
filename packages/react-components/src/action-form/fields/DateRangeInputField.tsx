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
import type { DateRange as RdpDateRange } from "react-day-picker";
import {
  formatDateForDisplay,
  formatDateForInput,
  formatDatetimeForInput,
  getTimeValue,
  parseDateFromInput,
  parseDatetimeFromInput,
  parseTimeString,
} from "../../shared/dateUtils.js";
import { type DateRangeInputFieldProps, EMPTY_RANGE } from "../FormFieldApi.js";
import { stopPropagation } from "./calendarShared.js";
import commonStyles from "./DatePickerCommon.module.css";
import styles from "./DateRangeInputField.module.css";
import { LazyDateRangeCalendar } from "./LazyDateRangeCalendar.js";
import { PortalDismissLayer } from "./PortalDismissLayer.js";
import { TimePicker } from "./TimePicker.js";
import { useDateEditState } from "./useDateEditState.js";

type ActiveBoundary = "start" | "end";

// Shared props for both start/end inputs. role="combobox" because each input
// triggers a shared popup (the calendar popover) — matching WAI-ARIA combobox pattern.
const SHARED_INPUT_PROPS = {
  className: commonStyles.osdkDatePickerInput,
  type: "text" as const,
  onClick: stopPropagation,
  autoComplete: "off" as const,
  role: "combobox" as const,
  "aria-haspopup": "dialog" as const,
} as const;

export const DateRangeInputField: React.NamedExoticComponent<
  DateRangeInputFieldProps
> = React.memo(function DateRangeInputField({
  id,
  value,
  onChange,
  min,
  max,
  placeholderStart,
  placeholderEnd,
  allowSingleDayRange = true,
  showTime = false,
  formatDate,
  parseDate,
  portalContainer,
}: DateRangeInputFieldProps) {
  const shouldCloseOnSelection = !showTime;
  const popoverId = useId();
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  // When focus returns to an input after Tab exits the popover boundary, the
  // next input focus should not reopen the calendar before native Tab can
  // continue to the following form field.
  const skipReopenRef = useRef(false);
  // Tracks which input (start/end) owns the shared calendar popover.
  // Used to restore focus to the correct input when Tab-cycling through
  // focus boundaries and when the calendar selects a range endpoint.
  const [activeBoundary, setActiveBoundary] = useState<ActiveBoundary>("start");

  const [startDate, endDate] = value ?? EMPTY_RANGE;

  // editFormatFn produces a parsable string for typing (e.g. "2024-01-15" or "2024-01-15 14:30").
  // displayFormatFn produces a human-readable string for idle state (e.g. "Jan 15, 2024").
  const editFormatFn = showTime ? formatDatetimeForInput : formatDateForInput;
  const displayFormatFn = formatDate
    ?? (showTime ? formatDatetimeForInput : formatDateForDisplay);
  const parseFn = parseDate
    ?? (showTime ? parseDatetimeFromInput : parseDateFromInput);

  // Wrap onChange to handle tuple construction and overlap rejection.
  // Clearing (null) is always allowed; overlap is checked for non-null dates.
  const startOnChange = useCallback(
    (date: Date | null) => {
      if (date != null && isOverlapping(date, endDate, allowSingleDayRange)) {
        return;
      }
      onChange?.([date, endDate ?? null]);
    },
    [endDate, onChange, allowSingleDayRange],
  );

  const endOnChange = useCallback(
    (date: Date | null) => {
      if (date != null && isOverlapping(startDate, date, allowSingleDayRange)) {
        return;
      }
      onChange?.([startDate ?? null, date]);
    },
    [startDate, onChange, allowSingleDayRange],
  );

  const {
    isEditing: isEditingStart,
    dateValue: startParsedValue,
    inputError: startInputError,
    displayedValue: displayedStart,
    startEditing: beginStartEditing,
    stopEditing: stopStartEditing,
    commitAndStopEditing: commitStartAndStopEditing,
    setInputValue: setStartInputValue,
    setDateValue: setStartDateValue,
  } = useDateEditState({
    value: startDate,
    displayFormatFn,
    editFormatFn,
    parseFn,
    min,
    max,
    onChange: startOnChange,
  });
  const {
    isEditing: isEditingEnd,
    dateValue: endParsedValue,
    inputError: endInputError,
    displayedValue: displayedEnd,
    startEditing: beginEndEditing,
    stopEditing: stopEndEditing,
    commitAndStopEditing: commitEndAndStopEditing,
    setInputValue: setEndInputValue,
    setDateValue: setEndDateValue,
  } = useDateEditState({
    value: endDate,
    displayFormatFn,
    editFormatFn,
    parseFn,
    min,
    max,
    onChange: endOnChange,
  });

  // --- Cross-input error: overlapping range (live feedback while typing) ---
  // Blur/Enter handlers prevent overlapping values from being committed,
  // so this only fires during editing for immediate red-border feedback.
  const hasOverlapError = (() => {
    if (!isEditingStart && !isEditingEnd) return false;
    const effectiveStart = isEditingStart
      ? startParsedValue
      : (startDate ?? undefined);
    const effectiveEnd = isEditingEnd
      ? endParsedValue
      : (endDate ?? undefined);
    return isOverlapping(effectiveStart, effectiveEnd, allowSingleDayRange);
  })();

  const startInvalid = startInputError != null || hasOverlapError;
  const endInvalid = endInputError != null || hasOverlapError;

  // --- Focus handlers ---

  const getActiveInputRef = useCallback(
    () => activeBoundary === "start" ? startInputRef : endInputRef,
    [activeBoundary],
  );

  const beginEditing = useCallback(
    (boundary: ActiveBoundary) => {
      if (boundary === "start") {
        beginStartEditing();
      } else {
        beginEndEditing();
      }
      setActiveBoundary(boundary);
    },
    [beginStartEditing, beginEndEditing],
  );

  const handleInputFocus = useCallback(
    (boundary: ActiveBoundary) => {
      beginEditing(boundary);
      if (skipReopenRef.current) {
        skipReopenRef.current = false;
        return;
      }
      setIsOpen(true);
    },
    [beginEditing],
  );

  const handleStartFocus = useCallback(() => {
    handleInputFocus("start");
  }, [handleInputFocus]);

  const handleEndFocus = useCallback(() => {
    handleInputFocus("end");
  }, [handleInputFocus]);

  const closePopoverForBoundaryExit = useCallback(() => {
    skipReopenRef.current = true;
    setIsOpen(false);
    stopStartEditing();
    stopEndEditing();
    getActiveInputRef().current?.focus();
  }, [getActiveInputRef, stopStartEditing, stopEndEditing]);

  // --- Blur handlers ---

  const handleStartBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const related = e.relatedTarget ?? document.activeElement;
      if (popoverRef.current?.contains(related as Node)) {
        // Focus moved into the popover portal — the field is still logically
        // active, so suppress the blur from bubbling to parent containers.
        e.stopPropagation();
        return;
      }
      if (endInputRef.current === related) {
        return;
      }
      commitStartAndStopEditing();
    },
    [commitStartAndStopEditing],
  );

  const handleEndBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const related = e.relatedTarget ?? document.activeElement;
      if (popoverRef.current?.contains(related as Node)) {
        e.stopPropagation();
        return;
      }
      if (startInputRef.current === related) {
        return;
      }
      commitEndAndStopEditing();
    },
    [commitEndAndStopEditing],
  );

  // --- Popover helpers ---

  // Shared close sequence: dismiss the popover, reset both editing states,
  // and blur both inputs so focus doesn't linger after the calendar disappears.
  const closePopover = useCallback(() => {
    setIsOpen(false);
    stopStartEditing();
    stopEndEditing();
    startInputRef.current?.blur();
    endInputRef.current?.blur();
  }, [stopStartEditing, stopEndEditing]);

  // --- Keyboard handlers ---

  const handleStartKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        commitStartAndStopEditing();
        // Auto-advance to end
        endInputRef.current?.focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closePopover();
      } else if (e.key === "Tab" && e.shiftKey) {
        setIsOpen(false);
      }
    },
    [commitStartAndStopEditing, closePopover],
  );

  const handleEndKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        commitEndAndStopEditing();
        closePopover();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closePopover();
      } else if (e.key === "Tab" && !e.shiftKey && isOpen) {
        // Tab from the end input bridges focus into the popover. The popover
        // doesn't auto-focus on open (to keep the cursor in the input for typing),
        // so we manually focus the first interactive element (nav button or select).
        const firstButton = popoverRef.current?.querySelector<HTMLElement>(
          "button, select",
        );
        if (firstButton != null) {
          e.preventDefault();
          firstButton.focus();
        }
      }
    },
    [commitEndAndStopEditing, closePopover, isOpen],
  );

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

  const handleRangeSelect = useCallback(
    (range: RdpDateRange | undefined) => {
      const newStart = range?.from ?? null;
      const newEnd = range?.to ?? null;

      onChange?.([newStart, newEnd]);

      if (newStart != null && newEnd == null) {
        // Start selected — commit the start and advance to end.
        // displayedValue handles the display format after stopEditing.
        stopStartEditing();
        setActiveBoundary("end");
        endInputRef.current?.focus();
      } else if (
        newStart != null
        && newEnd != null
        && shouldCloseOnSelection
      ) {
        // Full range selected — close and blur.
        closePopover();
      } else if (newStart != null && newEnd != null) {
        // Full range selected but popover stays open (showTime) —
        // inputs remain in editing mode, so update with editFormatFn.
        setStartDateValue(newStart);
        setEndDateValue(newEnd);
      }
    },
    [
      onChange,
      shouldCloseOnSelection,
      closePopover,
      stopStartEditing,
      setStartDateValue,
      setEndDateValue,
    ],
  );

  // --- Time handlers ---

  const handleStartTimeChange = useCallback(
    (timeString: string) => {
      const { hours, minutes } = parseTimeString(timeString);
      const base = startDate != null
        ? new Date(startDate.getTime())
        : new Date();
      base.setHours(hours, minutes, 0, 0);
      onChange?.([base, endDate ?? null]);
      setStartDateValue(base);
    },
    [startDate, endDate, onChange, setStartDateValue],
  );

  const handleEndTimeChange = useCallback(
    (timeString: string) => {
      const { hours, minutes } = parseTimeString(timeString);
      const base = endDate != null ? new Date(endDate.getTime()) : new Date();
      base.setHours(hours, minutes, 0, 0);
      onChange?.([startDate ?? null, base]);
      setEndDateValue(base);
    },
    [startDate, endDate, onChange, setEndDateValue],
  );

  // --- Focus boundary handlers ---
  // Visually-hidden sentinels at the top/bottom of the popover that trap Tab
  // cycling between the text inputs and calendar.

  // Start boundary (top): Shift+Tab past the first calendar element redirects
  // focus to whichever input is currently active.
  const handleStartFocusBoundary = useCallback(() => {
    getActiveInputRef().current?.focus();
  }, [getActiveInputRef]);

  // End boundary (bottom): Two cases —
  // (1) Tab past the last calendar element (focus came from inside the popover)
  //     → close the popover and return focus to the active input so the next
  //       native Tab continues to the next form field.
  // (2) Focus entered from outside the popover (e.g. reverse Tab from the page)
  //     → redirect to the last interactive element inside the popover.
  const handleEndFocusBoundary = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      const related = e.relatedTarget ?? document.activeElement;
      if (popoverRef.current?.contains(related as Node)) {
        closePopoverForBoundaryExit();
      } else {
        const buttons = popoverRef.current?.querySelectorAll<HTMLElement>(
          "button, select",
        );
        const lastButton = buttons?.[buttons.length - 1];
        lastButton?.focus();
      }
    },
    [closePopoverForBoundaryExit],
  );

  // --- Calendar selected range ---

  const calendarSelected: RdpDateRange | undefined =
    startDate != null || endDate != null
      ? { from: startDate ?? undefined, to: endDate ?? undefined }
      : undefined;

  const timeFooter = showTime
    ? (
      <div className={styles.osdkDateRangeTimeRow}>
        <TimePicker
          value={getTimeValue(startDate)}
          onChange={handleStartTimeChange}
          label="Start time"
        />
        <TimePicker
          value={getTimeValue(endDate)}
          onChange={handleEndTimeChange}
          label="End time"
        />
      </div>
    )
    : undefined;

  const sharedInputProps = {
    ...SHARED_INPUT_PROPS,
    "aria-controls": popoverId,
  };

  return (
    <Popover.Root
      open={isOpen}
      onOpenChange={handleOpenChange}
      // Uses pointer-down outside dismissal so the click that opens the picker
      // is not reinterpreted after the portal dismiss layer appears.
      modal="trap-focus"
    >
      <Popover.Trigger
        nativeButton={false}
        render={<div className={styles.osdkDateRangeContainer} />}
      >
        <div
          className={classnames(
            commonStyles.osdkDatePickerInputWrapper,
            styles.osdkDateRangeInputWrapper,
            startInvalid && commonStyles.osdkDatePickerInputWrapperError,
          )}
        >
          <Input
            ref={startInputRef}
            id={id != null ? `${id}-start` : undefined}
            value={displayedStart}
            onValueChange={setStartInputValue}
            onFocus={handleStartFocus}
            onBlur={handleStartBlur}
            onKeyDown={handleStartKeyDown}
            placeholder={placeholderStart}
            aria-expanded={isOpen && activeBoundary === "start"}
            aria-label="Start date"
            aria-invalid={startInvalid || undefined}
            {...sharedInputProps}
          />
        </div>
        <div
          className={classnames(
            commonStyles.osdkDatePickerInputWrapper,
            styles.osdkDateRangeInputWrapper,
            endInvalid && commonStyles.osdkDatePickerInputWrapperError,
          )}
        >
          <Input
            ref={endInputRef}
            id={id != null ? `${id}-end` : undefined}
            value={displayedEnd}
            onValueChange={setEndInputValue}
            onFocus={handleEndFocus}
            onBlur={handleEndBlur}
            onKeyDown={handleEndKeyDown}
            placeholder={placeholderEnd}
            aria-expanded={isOpen && activeBoundary === "end"}
            aria-label="End date"
            aria-invalid={endInvalid || undefined}
            {...sharedInputProps}
          />
        </div>
      </Popover.Trigger>
      <Popover.Portal container={portalContainer}>
        <PortalDismissLayer
          className={commonStyles.osdkDatePickerDismissLayer}
          onDismiss={closePopover}
        />
        <Popover.Positioner
          className={commonStyles.osdkDatePickerPositioner}
          sideOffset={4}
        >
          <Popover.Popup
            ref={popoverRef}
            className={commonStyles.osdkDatePickerPopover}
            id={popoverId}
            role="dialog"
            aria-label="date range picker"
            // Disable base-ui's automatic focus restoration to the trigger on close.
            // We manage focus ourselves via closePopover() which blurs the inputs.
            finalFocus={false}
          >
            <div
              onFocus={handleStartFocusBoundary}
              tabIndex={0}
              aria-label="Start of date range picker dialog"
              className={commonStyles.osdkDatePickerFocusBoundary}
            />
            <LazyDateRangeCalendar
              selected={calendarSelected}
              onSelect={handleRangeSelect}
              min={min}
              max={max}
            />
            {timeFooter}
            <div
              onFocus={handleEndFocusBoundary}
              tabIndex={0}
              aria-label="End of date range picker dialog"
              className={commonStyles.osdkDatePickerFocusBoundary}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
});

/** True when the end boundary is before (or same-day when disallowed) the start. */
function isOverlapping(
  start: Date | null | undefined,
  end: Date | null | undefined,
  allowSingleDayRange: boolean,
): boolean {
  if (start == null || end == null) return false;
  if (!allowSingleDayRange && end.getTime() === start.getTime()) return true;
  return end.getTime() < start.getTime();
}
