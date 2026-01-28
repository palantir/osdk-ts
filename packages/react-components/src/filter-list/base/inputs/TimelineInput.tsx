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

import classnames from "classnames";
import React, { memo, useCallback } from "react";
import {
  formatDateForDisplay,
  formatDateForInput,
  parseDateFromInput,
} from "./dateUtils.js";
import styles from "./TimelineInput.module.css";

interface TimelineInputProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
  onChange: (startDate: Date | undefined, endDate: Date | undefined) => void;
  className?: string;
  style?: React.CSSProperties;
  minDate?: Date;
  maxDate?: Date;
}

function TimelineInputInner({
  startDate,
  endDate,
  onChange,
  className,
  style,
  minDate,
  maxDate,
}: TimelineInputProps): React.ReactElement {
  const handleStartChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const date = parseDateFromInput(e.target.value);
      onChange(date, endDate);
    },
    [endDate, onChange],
  );

  const handleEndChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const date = parseDateFromInput(e.target.value);
      onChange(startDate, date);
    },
    [startDate, onChange],
  );

  const handleClear = useCallback(() => {
    onChange(undefined, undefined);
  }, [onChange]);

  return (
    <div className={classnames(styles.timeline, className)} style={style}>
      <div className={styles.labels}>
        <span>{formatDateForDisplay(startDate, "—")}</span>
        <span>to</span>
        <span>{formatDateForDisplay(endDate, "—")}</span>
        {(startDate || endDate) && (
          <button type="button" onClick={handleClear} aria-label="Clear range">
            ×
          </button>
        )}
      </div>

      <div className={styles.brush}>
        <input
          type="date"
          className={styles.input}
          value={formatDateForInput(startDate)}
          onChange={handleStartChange}
          min={minDate ? formatDateForInput(minDate) : undefined}
          max={endDate
            ? formatDateForInput(endDate)
            : maxDate
            ? formatDateForInput(maxDate)
            : undefined}
          aria-label="Start date"
        />
        <span>—</span>
        <input
          type="date"
          className={styles.input}
          value={formatDateForInput(endDate)}
          onChange={handleEndChange}
          min={startDate
            ? formatDateForInput(startDate)
            : minDate
            ? formatDateForInput(minDate)
            : undefined}
          max={maxDate ? formatDateForInput(maxDate) : undefined}
          aria-label="End date"
        />
      </div>
    </div>
  );
}

export const TimelineInput: React.NamedExoticComponent<TimelineInputProps> =
  memo(TimelineInputInner);
