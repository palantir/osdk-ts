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

import { Button } from "@blueprintjs/core";
import { DateInput } from "@blueprintjs/datetime";
import classnames from "classnames";
import { enUS } from "date-fns/locale";
import React, { memo, useCallback } from "react";

import styles from "./SingleDateInput.module.css";

const SELECT_DATE_INPUT_PROPS = { "aria-label": "Select date" };

interface SingleDateInputProps {
  selectedDate: Date | undefined;
  onChange: (date: Date | undefined) => void;
  className?: string;
  style?: React.CSSProperties;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  showClearButton?: boolean;
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
  formatDate,
}: SingleDateInputProps): React.ReactElement {
  const handleClear = useCallback(() => {
    onChange(undefined);
  }, [onChange]);

  const handleChange = useCallback(
    (isoDate: string | null) => {
      onChange(isoDate == null ? undefined : new Date(isoDate));
    },
    [onChange],
  );

  return (
    <div className={classnames(styles.singleDate, className)} style={style}>
      <div className={styles.dateContainer}>
        <DateInput
          value={selectedDate?.toISOString() ?? null}
          onChange={handleChange}
          minDate={minDate}
          maxDate={maxDate}
          placeholder={placeholder}
          inputProps={SELECT_DATE_INPUT_PROPS}
          formatDate={formatDate}
          locale={enUS}
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
