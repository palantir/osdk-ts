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

import React, { memo } from "react";
import { RangeInput, type RangeInputConfig } from "./RangeInput.js";

function formatNumber(value: number | undefined): string {
  return value !== undefined ? String(value) : "";
}

function parseFloatValue(value: string): number | undefined {
  if (value === "") {
    return undefined;
  }
  const parsed = parseFloat(value);
  return isNaN(parsed) ? undefined : parsed;
}

function parseIntValue(value: string): number | undefined {
  if (value === "") {
    return undefined;
  }
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? undefined : parsed;
}

function formatTooltip(min: number, max: number, count: number): string {
  return `${min.toFixed(1)} - ${max.toFixed(1)}: ${count.toLocaleString()}`;
}

function formatPlaceholder(value: number): string {
  return value.toFixed(0);
}

// Integer subset of bucket `[a, b)` (or `[a, b]` for the last bucket,
// which `createHistogramBuckets` treats as closed at the right endpoint
// via index clamping) is `[ceil(a), ceil(b) - 1]` or `[ceil(a), floor(b)]`
// respectively. Returning `undefined` cancels the commit when the bucket
// contains no integer values — preferable to emitting a filter outside
// the visually-selected bar. `long`s exceeding `Number.MAX_SAFE_INTEGER`
// have already lost precision in the upstream OSDK aggregation, so
// `Math.ceil` here is no worse than the status quo.
function clampIntegerRange(
  min: number,
  max: number,
  isLastBucket: boolean,
): { min: number; max: number } | undefined {
  const lo = Math.ceil(min);
  const hi = isLastBucket ? Math.floor(max) : Math.ceil(max) - 1;
  if (hi < lo) {
    return undefined;
  }
  return { min: lo, max: hi };
}

const FLOAT_CONFIG: RangeInputConfig<number> = {
  inputType: "number",
  formatValue: formatNumber,
  parseValue: parseFloatValue,
  toNumber: (v) => v,
  fromNumber: (v) => v,
  minLabel: "Min",
  maxLabel: "Max",
  formatTooltip,
  formatPlaceholder,
  inputProps: { step: "any" },
};

const INTEGER_CONFIG: RangeInputConfig<number> = {
  inputType: "number",
  formatValue: formatNumber,
  parseValue: parseIntValue,
  toNumber: (v) => v,
  fromNumber: (v) => v,
  minLabel: "Min",
  maxLabel: "Max",
  formatTooltip,
  formatPlaceholder,
  inputProps: { step: "1" },
  clampCommitRange: clampIntegerRange,
};

interface NumberRangeInputProps {
  valueCountPairs: Array<{ value: number; count: number }>;
  isLoading: boolean;
  minValue: number | undefined;
  maxValue: number | undefined;
  onChange: (min: number | undefined, max: number | undefined) => void;
  showHistogram?: boolean;
  className?: string;
  style?: React.CSSProperties;
  clickToFilter?: boolean;
  /**
   * When true, the histogram emits integer min/max on commit and the
   * Min/Max inputs use `step="1"` with `parseInt` parsing. Used by
   * integer-typed properties (`integer`, `long`, `short`, `byte`).
   */
  isInteger?: boolean;
}

function NumberRangeInputInner({
  isInteger = false,
  ...rest
}: NumberRangeInputProps): React.ReactElement {
  return (
    <RangeInput {...rest} config={isInteger ? INTEGER_CONFIG : FLOAT_CONFIG} />
  );
}

export const NumberRangeInput = memo(
  NumberRangeInputInner,
) as typeof NumberRangeInputInner;
