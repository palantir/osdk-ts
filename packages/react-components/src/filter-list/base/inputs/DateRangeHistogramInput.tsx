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

import React, { memo, useCallback, useMemo } from "react";
import {
  type DatePickerShortcut,
  formatDateForInput,
} from "../../../shared/dateUtils.js";
import { createDateHistogramBuckets } from "./createDateHistogramBuckets.js";
import { RangeInput, type RangeInputConfig } from "./RangeInput.js";

const defaultDateConfig: RangeInputConfig<Date> = {
  inputType: "date",
  formatValue: formatDateForInput,
  parseValue: () => undefined,
  toNumber: (d) => d.getTime(),
  fromNumber: (t) => new Date(t),
  minLabel: "From",
  maxLabel: "To",
  formatTooltip: (min, max, count) =>
    `${formatDateForInput(min)} - ${
      formatDateForInput(max)
    }: ${count.toLocaleString()}`,
};

interface DateRangeHistogramInputProps {
  valueCountPairs: Array<{ value: Date; count: number }>;
  isLoading: boolean;
  minValue: Date | undefined;
  maxValue: Date | undefined;
  onChange: (min: Date | undefined, max: Date | undefined) => void;
  showHistogram?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /**
   * Consumer-provided display formatter. Routes through the shared
   * `DateRangePicker`'s idle text, the histogram tooltip, the period
   * subtitle, and (when `formatTickLabel` is omitted) the histogram x-tick
   * labels. The picker's internal value remains ISO `YYYY-MM-DD`.
   */
  formatDate?: (date: Date) => string;
  clickToFilter?: boolean;
  /** Optional relative-range shortcut rail. */
  dateShortcuts?: boolean | DatePickerShortcut[];
}

function DateRangeHistogramInputInner({
  formatDate,
  valueCountPairs,
  dateShortcuts,
  onChange,
  ...rest
}: DateRangeHistogramInputProps): React.ReactElement {
  const config = useMemo<RangeInputConfig<Date>>(
    () =>
      formatDate != null
        ? {
          ...defaultDateConfig,
          formatDate,
          formatTooltip: (min, max, count) =>
            `${formatDate(min)} - ${
              formatDate(max)
            }: ${count.toLocaleString()}`,
        }
        : defaultDateConfig,
    [formatDate],
  );

  const histogramData = useMemo(() => {
    if (valueCountPairs.length === 0) {
      return undefined;
    }
    let minMs = Infinity;
    let maxMs = -Infinity;
    for (const { value } of valueCountPairs) {
      const t = value.getTime();
      if (t < minMs) {
        minMs = t;
      }
      if (t > maxMs) {
        maxMs = t;
      }
    }
    if (!Number.isFinite(minMs) || !Number.isFinite(maxMs)) {
      return undefined;
    }
    const { buckets, subtitle } = createDateHistogramBuckets(
      valueCountPairs,
      { min: new Date(minMs), max: new Date(maxMs) },
      formatDate,
    );
    return { buckets, subtitle };
  }, [valueCountPairs, formatDate]);

  const handleShortcutSelect = useCallback(
    (range: { min: Date; max: Date }) => {
      onChange(range.min, range.max);
    },
    [onChange],
  );

  return (
    <RangeInput
      {...rest}
      onChange={onChange}
      valueCountPairs={valueCountPairs}
      config={config}
      histogramData={histogramData}
      dateShortcuts={dateShortcuts}
      onDateShortcutSelect={handleShortcutSelect}
    />
  );
}

export const DateRangeHistogramInput = memo(
  DateRangeHistogramInputInner,
) as typeof DateRangeHistogramInputInner;
