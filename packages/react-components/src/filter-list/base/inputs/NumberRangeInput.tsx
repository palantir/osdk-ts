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

function parseNumber(value: string): number | undefined {
  if (value === "") return undefined;
  const parsed = parseFloat(value);
  return isNaN(parsed) ? undefined : parsed;
}

const numberConfig: RangeInputConfig<number> = {
  inputType: "number",
  formatValue: formatNumber,
  parseValue: parseNumber,
  toNumber: (v) => v,
  fromNumber: (v) => v,
  minLabel: "Min",
  maxLabel: "Max",
  formatTooltip: (min, max, count) =>
    `${min.toFixed(1)} - ${max.toFixed(1)}: ${count.toLocaleString()}`,
  formatPlaceholder: (value) => value.toFixed(0),
  inputProps: { step: "any" },
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
}

function NumberRangeInputInner(
  props: NumberRangeInputProps,
): React.ReactElement {
  return <RangeInput {...props} config={numberConfig} />;
}

export const NumberRangeInput = memo(
  NumberRangeInputInner,
) as typeof NumberRangeInputInner;
