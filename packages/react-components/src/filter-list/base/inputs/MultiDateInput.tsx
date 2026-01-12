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

import React, { memo, useCallback } from "react";
import type { MultiDateInputClassNames } from "../../types/ClassNameOverrides.js";
import {
  formatDateForDisplay,
  formatDateForInput,
  parseDateFromInput,
} from "./dateUtils.js";

interface MultiDateInputProps {
  selectedDates: Date[];
  onChange: (dates: Date[]) => void;
  classNames?: MultiDateInputClassNames;
  minDate?: Date;
  maxDate?: Date;
  showClearAll?: boolean;
}

function MultiDateInputInner({
  selectedDates,
  onChange,
  classNames,
  minDate,
  maxDate,
  showClearAll = true,
}: MultiDateInputProps): React.ReactElement {
  const addDate = useCallback(
    (date: Date) => {
      const dateStr = date.toISOString().split("T")[0];
      const exists = selectedDates.some(
        (d) => d.toISOString().split("T")[0] === dateStr,
      );
      if (!exists) {
        onChange([...selectedDates, date].sort((a, b) => a.getTime() - b.getTime()));
      }
    },
    [selectedDates, onChange],
  );

  const removeDate = useCallback(
    (date: Date) => {
      const dateStr = date.toISOString().split("T")[0];
      onChange(
        selectedDates.filter((d) => d.toISOString().split("T")[0] !== dateStr),
      );
    },
    [selectedDates, onChange],
  );

  const clearAll = useCallback(() => {
    onChange([]);
  }, [onChange]);

  const handleDateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const date = parseDateFromInput(e.target.value);
      if (date) {
        addDate(date);
        e.target.value = "";
      }
    },
    [addDate],
  );

  return (
    <div className={classNames?.root}>
      {selectedDates.length > 0 && (
        <div className={classNames?.selectedDatesContainer}>
          {selectedDates.map((date) => (
            <span
              key={date.toISOString()}
              className={classNames?.selectedDateTag}
            >
              {formatDateForDisplay(date)}
              <button
                type="button"
                className={classNames?.selectedDateRemoveButton}
                onClick={() => removeDate(date)}
                aria-label={`Remove ${formatDateForDisplay(date)}`}
              >
                ×
              </button>
            </span>
          ))}
          {showClearAll && selectedDates.length > 1 && (
            <button
              type="button"
              className={classNames?.clearAllButton}
              onClick={clearAll}
              aria-label="Clear all dates"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      <div className={classNames?.calendarContainer}>
        <input
          type="date"
          onChange={handleDateChange}
          min={minDate ? formatDateForInput(minDate) : undefined}
          max={maxDate ? formatDateForInput(maxDate) : undefined}
          aria-label="Add date"
        />
      </div>
    </div>
  );
}

export const MultiDateInput: React.NamedExoticComponent<MultiDateInputProps> =
  memo(MultiDateInputInner);
