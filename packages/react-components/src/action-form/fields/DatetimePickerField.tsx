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
import React, { useCallback, useMemo, useState } from "react";
import {
  formatDateForInput,
  formatDatetimeForDisplay,
} from "../../shared/dateUtils.js";
import type { DatetimePickerFieldProps } from "../FormFieldApi.js";
import styles from "./DatetimePickerField.module.css";
import { LazyDateCalendar } from "./LazyDateCalendar.js";
import { TimeInput } from "./TimeInput.js";

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
  placeholder,
  formatDate,
  showTime = false,
  closeOnSelection = false,
}: DatetimePickerFieldProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const formatFn = formatDate
    ?? (showTime ? formatDatetimeForDisplay : formatDateForInput);

  const formattedValue = useMemo(
    () => (value != null ? formatFn(value) : ""),
    [value, formatFn],
  );

  const handleCalendarSelect = useCallback(
    (selected: Date | undefined) => {
      if (selected == null) {
        onChange?.(null);
        return;
      }

      const date = new Date(selected.getTime());
      if (showTime && value != null) {
        date.setHours(value.getHours(), value.getMinutes());
      }

      onChange?.(date);

      if (closeOnSelection) {
        setIsOpen(false);
      }
    },
    [onChange, showTime, value, closeOnSelection],
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

  const displayText = formattedValue || placeholder || "";
  const hasValue = formattedValue !== "";

  const footer = useMemo(
    () =>
      showTime
        ? <TimeInput value={extractTime(value)} onChange={handleTimeChange} />
        : undefined,
    [showTime, value, handleTimeChange],
  );

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger
        id={id}
        className={classnames(
          styles.triggerButton,
          !hasValue && styles.triggerButtonPlaceholder,
        )}
      >
        {displayText}
      </Popover.Trigger>
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
