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

import { Button } from "@base-ui/react/button";
import classnames from "classnames";
import React, { memo, useCallback } from "react";
import { DatetimePickerField } from "../../../action-form/fields/DatetimePickerField.js";
import {
  formatDateForDisplay,
  formatDateForInput,
} from "../../../shared/dateUtils.js";
import styles from "./MultiDateInput.module.css";
import sharedStyles from "./shared.module.css";

interface MultiDateInputProps {
  selectedDates: Date[];
  onChange: (dates: Date[]) => void;
  className?: string;
  style?: React.CSSProperties;
  minDate?: Date;
  maxDate?: Date;
  showClearAll?: boolean;
}

function MultiDateInputInner({
  selectedDates,
  onChange,
  className,
  style,
  minDate,
  maxDate,
  showClearAll = true,
}: MultiDateInputProps): React.ReactElement {
  const addDate = useCallback(
    (date: Date | null) => {
      if (date == null) return;
      const dateStr = formatDateForInput(date);
      const exists = selectedDates.some(
        (d) => formatDateForInput(d) === dateStr,
      );
      if (!exists) {
        onChange(
          [...selectedDates, date].sort((a, b) => a.getTime() - b.getTime()),
        );
      }
    },
    [selectedDates, onChange],
  );

  const removeDate = useCallback(
    (date: Date) => {
      const dateStr = formatDateForInput(date);
      onChange(
        selectedDates.filter((d) => formatDateForInput(d) !== dateStr),
      );
    },
    [selectedDates, onChange],
  );

  const clearAll = useCallback(() => {
    onChange([]);
  }, [onChange]);

  return (
    <div className={classnames(styles.multiDate, className)} style={style}>
      {selectedDates.length > 0 && (
        <div className={sharedStyles.tagContainer}>
          {selectedDates.map((date) => (
            <span key={date.toISOString()} className={sharedStyles.tag}>
              {formatDateForDisplay(date)}
              <Button
                className={sharedStyles.tagRemove}
                // eslint-disable-next-line react/jsx-no-bind
                onClick={() =>
                  removeDate(date)}
                aria-label={`Remove ${formatDateForDisplay(date)}`}
              >
                ×
              </Button>
            </span>
          ))}
          {showClearAll && selectedDates.length > 1 && (
            <Button
              className={styles.clearAll}
              onClick={clearAll}
              aria-label="Clear all dates"
            >
              Clear all
            </Button>
          )}
        </div>
      )}

      <div className={styles.calendarContainer}>
        <DatetimePickerField
          value={null}
          onChange={addDate}
          min={minDate}
          max={maxDate}
          ariaLabel="Add date"
        />
      </div>
    </div>
  );
}

export const MultiDateInput: React.NamedExoticComponent<MultiDateInputProps> =
  memo(MultiDateInputInner);
