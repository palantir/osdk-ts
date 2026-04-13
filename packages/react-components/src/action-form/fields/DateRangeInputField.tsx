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
import type { DateRange as RdpDateRange } from "react-day-picker";
import {
  formatDateForInput,
  isDateInRange,
  parseDateFromInput,
} from "../../shared/dateUtils.js";
import type { DateRange, DateRangeInputFieldProps } from "../FormFieldApi.js";
import styles from "./DateRangeInputField.module.css";
import { LazyDateRangeCalendar } from "./LazyDateRangeCalendar.js";

type ActiveBoundary = "start" | "end";

const EMPTY_RANGE: DateRange = [null, null];
const CALENDAR_ICON_SIZE = 16;

export function DateRangeInputField({
  id,
  value = EMPTY_RANGE,
  onChange,
  min,
  max,
  placeholderStart,
  placeholderEnd,
  allowSingleDayRange = true,
  formatDate,
  parseDate,
}: DateRangeInputFieldProps): React.ReactElement {
  const popoverId = useId();
  const startInputRef = useRef<HTMLInputElement>(null);
  const endInputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [activeBoundary, setActiveBoundary] = useState<ActiveBoundary>(
    "start",
  );
  const [startInputValue, setStartInputValue] = useState("");
  const [endInputValue, setEndInputValue] = useState("");
  const [isEditingStart, setIsEditingStart] = useState(false);
  const [isEditingEnd, setIsEditingEnd] = useState(false);

  const [startDate, endDate] = value ?? EMPTY_RANGE;

  const formatFn = formatDate ?? formatDateForInput;
  const parseFn = parseDate ?? parseDateFromInput;

  // Sync input values when external value changes
  const prevStartTimeRef = useRef<number | null>(
    startDate?.getTime() ?? null,
  );
  const prevEndTimeRef = useRef<number | null>(endDate?.getTime() ?? null);

  const currentStartTime = startDate?.getTime() ?? null;
  const currentEndTime = endDate?.getTime() ?? null;

  if (prevStartTimeRef.current !== currentStartTime) {
    prevStartTimeRef.current = currentStartTime;
    if (!isEditingStart) {
      setStartInputValue(startDate != null ? formatFn(startDate) : "");
    }
  }
  if (prevEndTimeRef.current !== currentEndTime) {
    prevEndTimeRef.current = currentEndTime;
    if (!isEditingEnd) {
      setEndInputValue(endDate != null ? formatFn(endDate) : "");
    }
  }

  const displayedStart = isEditingStart
    ? startInputValue
    : (startDate != null ? formatFn(startDate) : "");

  const displayedEnd = isEditingEnd
    ? endInputValue
    : (endDate != null ? formatFn(endDate) : "");

  // --- Derived error state ---
  const inputError: "invalid" | "out-of-range" | "overlapping" | null = (() => {
    if (!isEditingStart && !isEditingEnd) return null;

    if (isEditingStart && startInputValue !== "") {
      const parsed = parseFn(startInputValue);
      if (parsed == null) return "invalid";
      if (!isDateInRange(parsed, min, max)) return "out-of-range";
    }
    if (isEditingEnd && endInputValue !== "") {
      const parsed = parseFn(endInputValue);
      if (parsed == null) return "invalid";
      if (!isDateInRange(parsed, min, max)) return "out-of-range";
    }

    // Check overlapping: end < start
    const parsedStart = isEditingStart
      ? parseFn(startInputValue)
      : startDate ?? undefined;
    const parsedEnd = isEditingEnd
      ? parseFn(endInputValue)
      : endDate ?? undefined;

    if (parsedStart != null && parsedEnd != null) {
      if (
        !allowSingleDayRange && parsedEnd.getTime() === parsedStart.getTime()
      ) {
        return "overlapping";
      }
      if (parsedEnd.getTime() < parsedStart.getTime()) {
        return "overlapping";
      }
    }

    return null;
  })();

  // --- Commit helpers ---

  const commitStart = useCallback((): Date | null => {
    if (startInputValue === "") return null;
    const parsed = parseFn(startInputValue);
    if (parsed != null && isDateInRange(parsed, min, max)) return parsed;
    return startDate ?? null;
  }, [startInputValue, parseFn, min, max, startDate]);

  const commitEnd = useCallback((): Date | null => {
    if (endInputValue === "") return null;
    const parsed = parseFn(endInputValue);
    if (parsed != null && isDateInRange(parsed, min, max)) return parsed;
    return endDate ?? null;
  }, [endInputValue, parseFn, min, max, endDate]);

  // --- Focus handlers ---

  const handleStartFocus = useCallback(() => {
    setIsEditingStart(true);
    setActiveBoundary("start");
    setIsOpen(true);
    setStartInputValue(startDate != null ? formatFn(startDate) : "");
  }, [startDate, formatFn]);

  const handleEndFocus = useCallback(() => {
    setIsEditingEnd(true);
    setActiveBoundary("end");
    setIsOpen(true);
    setEndInputValue(endDate != null ? formatFn(endDate) : "");
  }, [endDate, formatFn]);

  // --- Blur handlers ---

  const handleStartBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const related = e.relatedTarget ?? document.activeElement;
      if (
        popoverRef.current?.contains(related as Node)
        || endInputRef.current === related
      ) {
        return;
      }
      const newStart = commitStart();
      onChange?.([newStart, endDate ?? null]);
      setIsEditingStart(false);
    },
    [commitStart, endDate, onChange],
  );

  const handleEndBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const related = e.relatedTarget ?? document.activeElement;
      if (
        popoverRef.current?.contains(related as Node)
        || startInputRef.current === related
      ) {
        return;
      }
      const newEnd = commitEnd();
      onChange?.([startDate ?? null, newEnd]);
      setIsEditingEnd(false);
    },
    [commitEnd, startDate, onChange],
  );

  // --- Input change handlers ---

  const handleStartInputChange = useCallback((newValue: string) => {
    setStartInputValue(newValue);
  }, []);

  const handleEndInputChange = useCallback((newValue: string) => {
    setEndInputValue(newValue);
  }, []);

  // --- Click handlers ---

  const handleInputClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
    },
    [],
  );

  // --- Keyboard handlers ---

  const handleStartKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const newStart = commitStart();
        onChange?.([newStart, endDate ?? null]);
        setIsEditingStart(false);
        // Auto-advance to end
        endInputRef.current?.focus();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setStartInputValue(startDate != null ? formatFn(startDate) : "");
        setIsEditingStart(false);
        setIsOpen(false);
        startInputRef.current?.blur();
      } else if (e.key === "Tab" && !e.shiftKey) {
        // Let Tab naturally move to end input
      } else if (e.key === "Tab" && e.shiftKey) {
        setIsOpen(false);
      }
    },
    [commitStart, endDate, onChange, startDate, formatFn],
  );

  const handleEndKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const newEnd = commitEnd();
        onChange?.([startDate ?? null, newEnd]);
        setIsEditingEnd(false);
        setIsOpen(false);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setEndInputValue(endDate != null ? formatFn(endDate) : "");
        setIsEditingEnd(false);
        setIsOpen(false);
        endInputRef.current?.blur();
      } else if (e.key === "Tab" && !e.shiftKey && isOpen) {
        const firstButton = popoverRef.current?.querySelector(
          "button, select",
        ) as HTMLElement | null;
        if (firstButton != null) {
          e.preventDefault();
          firstButton.focus();
        }
      } else if (e.key === "Tab" && e.shiftKey) {
        // Let Shift+Tab naturally move to start input
      }
    },
    [commitEnd, startDate, onChange, endDate, formatFn, isOpen],
  );

  // --- Popover handlers ---

  const handleOpenChange = useCallback((nextOpen: boolean) => {
    setIsOpen(nextOpen);
    if (!nextOpen) {
      setIsEditingStart(false);
      setIsEditingEnd(false);
      startInputRef.current?.blur();
      endInputRef.current?.blur();
    }
  }, []);

  // --- Calendar handlers ---

  const handleRangeSelect = useCallback(
    (range: RdpDateRange | undefined) => {
      const newStart = range?.from ?? null;
      const newEnd = range?.to ?? null;

      onChange?.([newStart, newEnd]);
      setStartInputValue(newStart != null ? formatFn(newStart) : "");
      setEndInputValue(newEnd != null ? formatFn(newEnd) : "");

      if (newStart != null && newEnd == null) {
        // Start selected, advance to end
        setActiveBoundary("end");
        endInputRef.current?.focus();
      } else if (newStart != null && newEnd != null) {
        // Full range selected — close and blur
        setIsOpen(false);
        setIsEditingStart(false);
        setIsEditingEnd(false);
        startInputRef.current?.blur();
        endInputRef.current?.blur();
      }
    },
    [onChange, formatFn],
  );

  // --- Focus boundary handlers ---

  const handleStartFocusBoundary = useCallback(
    () => {
      // Always redirect to the active input. Tab into the calendar
      // is handled by handleEndKeyDown, so this boundary only fires
      // from auto-focus on open or Shift+Tab from the first calendar element.
      const activeRef = activeBoundary === "start"
        ? startInputRef
        : endInputRef;
      activeRef.current?.focus();
    },
    [activeBoundary],
  );

  const handleEndFocusBoundary = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      const related = e.relatedTarget ?? document.activeElement;
      if (popoverRef.current?.contains(related as Node)) {
        const activeRef = activeBoundary === "start"
          ? startInputRef
          : endInputRef;
        activeRef.current?.focus();
        setIsOpen(false);
        setIsEditingStart(false);
        setIsEditingEnd(false);
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
    [activeBoundary],
  );

  // --- Calendar selected range ---

  const calendarSelected: RdpDateRange | undefined =
    startDate != null || endDate != null
      ? { from: startDate ?? undefined, to: endDate ?? undefined }
      : undefined;

  const hasError = inputError != null;

  const startWrapperClassName = classnames(
    styles.osdkDateRangeInputWrapper,
    hasError && isEditingStart && styles.osdkDateRangeInputWrapperError,
  );

  const endWrapperClassName = classnames(
    styles.osdkDateRangeInputWrapper,
    hasError && isEditingEnd && styles.osdkDateRangeInputWrapperError,
  );

  return (
    <Popover.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Popover.Trigger
        nativeButton={false}
        render={<div className={styles.osdkDateRangeContainer} />}
      >
        <div className={startWrapperClassName}>
          <Input
            ref={startInputRef}
            id={id != null ? `${id}-start` : undefined}
            className={styles.osdkDateRangeInput}
            type="text"
            value={displayedStart}
            onValueChange={handleStartInputChange}
            onFocus={handleStartFocus}
            onBlur={handleStartBlur}
            onClick={handleInputClick}
            onKeyDown={handleStartKeyDown}
            placeholder={placeholderStart}
            role="combobox"
            aria-expanded={isOpen && activeBoundary === "start"}
            aria-controls={popoverId}
            aria-haspopup="dialog"
            aria-label="Start date"
          />
          <div className={styles.osdkDateRangeIcon}>
            <Calendar size={CALENDAR_ICON_SIZE} />
          </div>
        </div>
        <div className={endWrapperClassName}>
          <Input
            ref={endInputRef}
            id={id != null ? `${id}-end` : undefined}
            className={styles.osdkDateRangeInput}
            type="text"
            value={displayedEnd}
            onValueChange={handleEndInputChange}
            onFocus={handleEndFocus}
            onBlur={handleEndBlur}
            onClick={handleInputClick}
            onKeyDown={handleEndKeyDown}
            placeholder={placeholderEnd}
            role="combobox"
            aria-expanded={isOpen && activeBoundary === "end"}
            aria-controls={popoverId}
            aria-haspopup="dialog"
            aria-label="End date"
          />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={4}>
          <Popover.Popup
            ref={popoverRef}
            className={styles.osdkDateRangePopover}
            id={popoverId}
            role="dialog"
            aria-label="date range picker"
          >
            <div
              onFocus={handleStartFocusBoundary}
              tabIndex={0}
              aria-label="Start of date range picker dialog"
              className={styles.osdkDateRangeFocusBoundary}
            />
            <LazyDateRangeCalendar
              selected={calendarSelected}
              onSelect={handleRangeSelect}
              min={min}
              max={max}
            />
            <div
              onFocus={handleEndFocusBoundary}
              tabIndex={0}
              aria-label="End of date range picker dialog"
              className={styles.osdkDateRangeFocusBoundary}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
