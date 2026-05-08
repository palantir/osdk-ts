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

// Custom popover-based picker, not <input type="date">, so all users see the
// same YYYY-MM-DD format regardless of browser locale. The native date input
// renders the visible text in the user's locale (mm/dd in en-US, dd/mm in en-GB),
// which is inconsistent across viewers of the same dashboard.

import { Input } from "@base-ui/react/input";
import { Popover } from "@base-ui/react/popover";
import classnames from "classnames";
import React, { memo, useCallback, useId, useRef, useState } from "react";
import { LazyDateCalendar } from "../../../shared/calendar/LazyDateCalendar.js";
import {
  formatDateForInput,
  parseDateFromInput,
} from "../../../shared/dateUtils.js";
import styles from "./FilterDatePicker.module.css";

export interface FilterDatePickerProps {
  selectedDate: Date | undefined;
  onChange: (date: Date | undefined) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
  closeOnSelect?: boolean;
}

function FilterDatePickerInner({
  selectedDate,
  onChange,
  minDate,
  maxDate,
  placeholder = "YYYY-MM-DD",
  ariaLabel,
  className,
  closeOnSelect = true,
}: FilterDatePickerProps): React.ReactElement {
  const popoverId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [draftText, setDraftText] = useState<string | undefined>(undefined);

  const displayedValue = draftText ?? formatDateForInput(selectedDate);

  const commitText = useCallback(
    (text: string) => {
      if (text === "") {
        onChange(undefined);
        return;
      }
      const parsed = parseDateFromInput(text);
      if (parsed != null) {
        onChange(parsed);
      }
    },
    [onChange],
  );

  const handleInputChange = useCallback((next: string) => {
    setDraftText(next);
  }, []);

  const handleInputBlur = useCallback(() => {
    if (draftText !== undefined) {
      commitText(draftText);
      setDraftText(undefined);
    }
  }, [draftText, commitText]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        if (draftText !== undefined) {
          commitText(draftText);
          setDraftText(undefined);
        }
        setIsOpen(false);
        inputRef.current?.blur();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setDraftText(undefined);
        setIsOpen(false);
        inputRef.current?.blur();
      }
    },
    [draftText, commitText],
  );

  const handleCalendarSelect = useCallback(
    (date: Date | undefined) => {
      onChange(date);
      setDraftText(undefined);
      if (closeOnSelect) {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    },
    [onChange, closeOnSelect],
  );

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setDraftText(undefined);
    }
  }, []);

  const handleFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <Popover.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Popover.Trigger
        nativeButton={false}
        render={
          <div
            className={classnames(styles.trigger, className)}
            tabIndex={-1}
          />
        }
      >
        <Input
          ref={inputRef}
          className={styles.input}
          type="text"
          value={displayedValue}
          onValueChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={popoverId}
          aria-haspopup="dialog"
          aria-label={ariaLabel}
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner className={styles.positioner} sideOffset={4}>
          <Popover.Popup
            className={styles.popup}
            id={popoverId}
            role="dialog"
            aria-label="date picker"
            finalFocus={false}
          >
            <LazyDateCalendar
              dateSelected={selectedDate}
              onSelect={handleCalendarSelect}
              min={minDate}
              max={maxDate}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

export const FilterDatePicker: React.NamedExoticComponent<
  FilterDatePickerProps
> = memo(FilterDatePickerInner);
