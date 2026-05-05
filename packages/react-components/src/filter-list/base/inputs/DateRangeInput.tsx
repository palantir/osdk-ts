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

import React, { memo, useMemo } from "react";
import {
  formatDateForInput,
  parseDateFromInput,
} from "../../../shared/dateUtils.js";
import { RangeInput, type RangeInputConfig } from "./RangeInput.js";

const defaultDateConfig: RangeInputConfig<Date> = {
  inputType: "date",
  formatValue: formatDateForInput,
  parseValue: parseDateFromInput,
  toNumber: (d) => d.getTime(),
  fromNumber: (t) => new Date(t),
  minLabel: "From",
  maxLabel: "To",
  formatTooltip: (min, max, count) =>
    `${formatDateForInput(min)} - ${
      formatDateForInput(max)
    }: ${count.toLocaleString()}`,
};

interface DateRangeInputProps {
  valueCountPairs: Array<{ value: Date; count: number }>;
  isLoading: boolean;
  minValue: Date | undefined;
  maxValue: Date | undefined;
  onChange: (min: Date | undefined, max: Date | undefined) => void;
  showHistogram?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /**
   * Optional callback used for tooltip + display text. The HTML
   * `<input type="date">` value attribute is unaffected — it always uses
   * ISO `YYYY-MM-DD`.
   */
  formatDate?: (date: Date) => string;
  /**
   * Optional inverse of `formatDate`. Plumbed through `RangeInputConfig`
   * for completeness; the built-in HTML date inputs do not invoke it
   * because the browser controls parsing of `<input type="date">` values.
   */
  parseDate?: (text: string) => Date | undefined;
}

function DateRangeInputInner({
  formatDate,
  parseDate,
  ...rest
}: DateRangeInputProps): React.ReactElement {
  const config = useMemo<RangeInputConfig<Date>>(
    () =>
      formatDate || parseDate
        ? {
          ...defaultDateConfig,
          formatTooltip: (min, max, count) =>
            `${formatDate ? formatDate(min) : formatDateForInput(min)} - ${
              formatDate ? formatDate(max) : formatDateForInput(max)
            }: ${count.toLocaleString()}`,
        }
        : defaultDateConfig,
    [formatDate, parseDate],
  );
  return <RangeInput {...rest} config={config} />;
}

export const DateRangeInput = memo(
  DateRangeInputInner,
) as typeof DateRangeInputInner;
