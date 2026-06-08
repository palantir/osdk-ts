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
import { DatePicker } from "../../../shared/calendar/index.js";
import type { DatePickerShortcut } from "../../../shared/dateUtils.js";
import styles from "./SingleDateInput.module.css";

interface SingleDateInputProps {
  selectedDate: Date | undefined;
  onChange: (date: Date | undefined) => void;
  className?: string;
  style?: React.CSSProperties;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  showClearButton?: boolean;
  /** Optional relative-range shortcut rail. */
  dateShortcuts?: boolean | DatePickerShortcut[];
  /** Display formatter for picker idle text. Editing format stays ISO. */
  formatDate?: (date: Date) => string;
}

function SingleDateInputInner({
  selectedDate,
  onChange,
  className,
  style,
  minDate,
  maxDate,
  placeholder,
  showClearButton = true,
  dateShortcuts,
  formatDate,
}: SingleDateInputProps): React.ReactElement {
  const handleClear = useCallback(() => {
    onChange(undefined);
  }, [onChange]);

  const handleChange = useCallback(
    (value: Date | null) => {
      onChange(value ?? undefined);
    },
    [onChange],
  );

  return (
    <div className={classnames(styles.singleDate, className)} style={style}>
      <div className={styles.dateContainer}>
        <DatePicker
          value={selectedDate ?? null}
          onChange={handleChange}
          min={minDate}
          max={maxDate}
          placeholder={placeholder}
          ariaLabel="Select date"
          modal={false}
          formatDate={formatDate}
          shortcuts={dateShortcuts}
        />
        {showClearButton && selectedDate !== undefined && (
          <Button
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear date"
          >
            ×
          </Button>
        )}
      </div>
    </div>
  );
}

export const SingleDateInput: React.NamedExoticComponent<SingleDateInputProps> =
  memo(SingleDateInputInner);
