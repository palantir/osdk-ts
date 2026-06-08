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
  type DatePickerShortcut,
  formatDateForInput,
  formatDatetimeForInput,
  isDateInRange,
  parseDateFromInput,
  parseDatetimeFromInput,
  resolveDateShortcuts,
} from "../dateUtils.js";
import {
  type PortalContainer,
  PortalDismissLayer,
} from "../PortalDismissLayer.js";
import { stopPropagation } from "./calendarShared.js";
import styles from "./DatePicker.module.css";
import commonStyles from "./DatePickerCommon.module.css";
import { LazyDateCalendar } from "./LazyDateCalendar.js";
import { ShortcutBar } from "./ShortcutBar.js";
import { useDateEditState } from "./useDateEditState.js";

/**
 * Props for the shared DatePicker. Used directly by filter-list and
 * object-table; wrapped by action-form's FormFieldRenderer for the
 * `DATETIME_PICKER` field kind. `id` and `error` are optional so non-form
 * callers can omit them.
 *
 * When `formatDate` is omitted, ISO-like format is used (YYYY-MM-DD /
 * YYYY-MM-DD HH:mm).
 */
export interface DatePickerProps {
  /**
   * The HTML `id` attribute for the input element. Used for `<label htmlFor>`
   * association in form contexts. Optional in non-form contexts.
   */
  id?: string;

  /**
   * Visual error state for the input. Set by form validation in
   * action-form contexts; non-form callers typically omit it.
   */
  error?: string;

  /** The currently-selected Date, or `null` for empty. */
  value: Date | null;

  /** Called when the user selects or types a new date. */
  onChange?: (value: Date | null) => void;

  /** Whether the picker is disabled. */
  disabled?: boolean;

  /** The earliest date the user can select. */
  min?: Date;

  /** The latest date the user can select. */
  max?: Date;

  /** Whether to show a time picker alongside the date. */
  showTime?: boolean;

  /**
   * Whether to close the popover after selecting a date.
   * @default true when `showTime` is false, false when `showTime` is true
   */
  closeOnSelection?: boolean;

  /** Placeholder text shown when no value is selected. */
  placeholder?: string;

  /**
   * Formats a Date for display in the input field when not editing.
   * When typing, the input shows the parsable format (YYYY-MM-DD or
   * YYYY-MM-DD HH:mm). Provide a matching `parseDate` if using a custom
   * format.
   */
  formatDate?: (date: Date) => string;

  /**
   * Parses a user-typed string back into a Date. Must be the inverse of
   * `formatDate` — if `formatDate(d)` produces string `s`, then
   * `parseDate(s)` must return an equivalent Date. When omitted, defaults
   * to parsing "YYYY-MM-DD" (date-only) or "YYYY-MM-DD HH:mm" (with time).
   */
  parseDate?: (text: string) => Date | undefined;

  /**
   * Ref forwarded to the portal container element. Used to track portaled
   * content for click-outside detection.
   */
  portalRef?: React.Ref<HTMLDivElement>;

  /**
   * Element that receives the date picker portal. Use this when rendering
   * inside modal dialogs so popovers stay in the dialog's stacking and
   * focus context instead of being appended directly to document.body.
   */
  portalContainer?: PortalContainer;

  /**
   * Accessible label for the input when there is no adjacent `<label>`
   * element.
   */
  ariaLabel?: string;

  /**
   * Popover modality. Defaults to `"trap-focus"`, which traps Tab cycling
   * inside the calendar and renders a transparent dismiss layer over the
   * page. Pass `false` when nesting this picker inside another popover so
   * the inner dismiss layer doesn't intercept clicks intended for the
   * outer popover and base-ui's default outside-click handles dismissal
   * instead.
   */
  modal?: "trap-focus" | false;

  /**
   * Opt-in relative-range shortcut rail rendered alongside the calendar.
   * `true` renders the built-in default shortcuts; an array renders exactly
   * those {@link DatePickerShortcut}s in order; `false` / omitted hides the
   * rail.
   */
  shortcuts?: boolean | DatePickerShortcut[];

  /**
   * Overrides how a clicked shortcut is applied. Receives the absolute
   * `{ min, max }` range the shortcut resolved to. When omitted, the picker
   * commits `min` as the selected date (wall-clock time stripped when
   * `showTime` is false). Range bounds pass this to apply both ends at once.
   */
  onShortcutSelect?: (range: { min: Date; max: Date }) => void;
}

export const DatePicker: React.NamedExoticComponent<DatePickerProps> = React
  .memo(function DatePicker({
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
    ariaLabel,
    modal = "trap-focus",
    disabled = false,
    shortcuts,
    onShortcutSelect,
  }: DatePickerProps) {
    const isModal = modal !== false;
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

    // Single normalization gate: when the time picker is hidden, strip
    // hours/minutes/seconds so consumers receive a pure calendar date (local
    // midnight). Defined before useDateEditState so the hook's commit path also
    // goes through this gate.
    const handleChange = useCallback(
      (date: Date | null) => {
        if (onChange == null) {
          return;
        }
        if (date != null && !showTime) {
          const dateOnly = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
          );
          onChange(dateOnly);
        } else {
          onChange(date);
        }
      },
      [onChange, showTime],
    );

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
      onChange: handleChange,
    });

    const activeDateValue = isEditing && inputError == null
      ? dateValue
      : (value ?? undefined);

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

    const resolvedShortcuts = resolveDateShortcuts(shortcuts);

    const handleShortcutSelect = useCallback(
      (range: { min: Date; max: Date }) => {
        // Close the picker first so it exits edit mode before the value-sync
        // path runs — otherwise the input keeps any in-progress typing.
        closePopover();
        if (onShortcutSelect != null) {
          onShortcutSelect(range);
        } else {
          // Default: commit the range start. handleChange's `!showTime` gate
          // strips wall-clock time to local midnight for date-only pickers.
          handleChange(range.min);
        }
      },
      [closePopover, onShortcutSelect, handleChange],
    );

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
        } else if (e.key === "Tab" && !e.shiftKey && isOpen && isModal) {
          // Move focus from the text input into the calendar popover.
          // The popover doesn't auto-focus on open (to keep the cursor in the input),
          // so Tab manually bridges focus to the first interactive calendar element.
          // Only meaningful when the popover traps focus; when non-modal we let
          // the browser advance focus naturally to the next document element.
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
      [commitAndStopEditing, closePopover, isOpen, isModal],
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
          handleChange(null);
          setInputValue("");
          return;
        }

        const date = new Date(selected.getTime());
        handleChange(date);
        setDateValue(date);
        setVisibleCalendarMonth(date);

        if (shouldCloseOnSelection) {
          closePopover();
        }
      },
      [
        handleChange,
        shouldCloseOnSelection,
        setDateValue,
        setInputValue,
        closePopover,
      ],
    );

    const handleTimeChange = useCallback(
      (time: Date) => {
        handleChange(time);
        setDateValue(time);
      },
      [handleChange, setDateValue],
    );

    const handleCalendarClear = useCallback(() => {
      handleChange(null);
      setDateValue(null);
    }, [handleChange, setDateValue]);

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

    const wrapperClassName = classnames(
      commonStyles.osdkDatePickerInputWrapper,
      styles.osdkDatetimeInputWrapper,
      inputError != null && commonStyles.osdkDatePickerInputWrapperError,
    );
    const isPopoverOpen = !disabled && isOpen;

    // Keep Popover.Trigger on the input itself. Moving it to the wrapper would
    // make click handling simpler, but it would also nest an interactive combobox
    // inside an interactive trigger and reintroduce the axe violation.
    return (
      <Popover.Root
        open={isPopoverOpen}
        onOpenChange={handleOpenChange}
        // When `modal === "trap-focus"`, base-ui traps Tab cycling and we render
        // a transparent dismiss layer for outside-click. When `false`, we rely
        // on base-ui's default outside-click — required for nested popover use
        // (e.g. inside FilterPopover) where a fullscreen dismiss layer would
        // intercept clicks intended for the parent.
        modal={modal}
      >
        <div
          ref={wrapperRef}
          className={wrapperClassName}
          data-disabled={disabled || undefined}
        >
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
                disabled={disabled}
                onFocus={handleFocus}
                onPointerDown={handlePointerDown}
                onBlur={handleBlur}
                onClick={stopPropagation}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                autoComplete="off"
                role="combobox"
                aria-expanded={isPopoverOpen}
                aria-controls={popoverId}
                aria-haspopup="dialog"
                aria-label={ariaLabel}
              />
            }
          />
        </div>
        <Popover.Portal ref={portalRef} container={portalContainer}>
          {isModal && (
            <PortalDismissLayer
              className={commonStyles.osdkDatePickerDismissLayer}
              onDismiss={closePopover}
            />
          )}
          <Popover.Positioner
            anchor={wrapperRef}
            className={commonStyles.osdkDatePickerPositioner}
            sideOffset={4}
            side="bottom"
            align="start"
          >
            <Popover.Popup
              ref={popoverRef}
              className={commonStyles.osdkDatePickerPopover}
              id={popoverId}
              role="dialog"
              aria-label="Date picker"
              // Disable base-ui's automatic focus restoration to the trigger on close.
              // We manage focus ourselves via closePopover() which blurs the input.
              finalFocus={false}
            >
              {isModal && (
                <div
                  onFocus={handleStartFocusBoundary}
                  tabIndex={0}
                  aria-label="Start of date picker dialog"
                  className={commonStyles.osdkDatePickerFocusBoundary}
                />
              )}
              {resolvedShortcuts != null && (
                <div className={commonStyles.osdkDatePickerPopoverLeftRail}>
                  <ShortcutBar
                    shortcuts={resolvedShortcuts}
                    onSelect={handleShortcutSelect}
                  />
                </div>
              )}
              <div className={commonStyles.osdkDatePickerPopoverCalendar}>
                <LazyDateCalendar
                  dateSelected={activeDateValue}
                  onSelect={handleCalendarSelect}
                  onTimeChange={showTime ? handleTimeChange : undefined}
                  onClear={handleCalendarClear}
                  month={visibleCalendarMonth}
                  onMonthChange={setVisibleCalendarMonth}
                  min={min}
                  max={max}
                />
              </div>
              {isModal && (
                <div
                  onFocus={handleEndFocusBoundary}
                  tabIndex={0}
                  aria-label="End of date picker dialog"
                  className={commonStyles.osdkDatePickerFocusBoundary}
                />
              )}
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    );
  });
