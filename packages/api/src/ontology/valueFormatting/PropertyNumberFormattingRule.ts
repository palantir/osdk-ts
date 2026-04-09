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

import type { PropertyTypeReferenceOrStringConstant } from "./PropertyValueFormattingUtils.js";

export interface PropertyNumberFormattingRule {
  type: "number";
  numberType: PropertyNumberFormattingRuleType;
}

export type PropertyNumberFormattingRuleType =
  | NumberFormatStandard
  | NumberFormatFixedValues
  | NumberFormatCurrency
  | NumberFormatStandardUnit
  | NumberFormatCustomUnit
  | NumberFormatAffix
  | NumberFormatDuration
  | NumberFormatScale
  | NumberFormatRatio;

/**
 * Base number formatting options.
 */
export interface NumberFormatOptions {
  useGrouping?: boolean;
  convertNegativeToParenthesis?: boolean;
  minimumIntegerDigits?: number;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  minimumSignificantDigits?: number;
  maximumSignificantDigits?: number;
  notation?: NumberFormatNotation;
  roundingMode?: NumberRoundingMode;
}

/**
 * Number notation style.
 */
export type NumberFormatNotation =
  | "STANDARD"
  | "SCIENTIFIC"
  | "ENGINEERING"
  | "COMPACT";

/**
 * Number rounding behavior.
 */
export type NumberRoundingMode = "CEIL" | "FLOOR" | "ROUND_CLOSEST";

/**
 * Standard number formatting with configurable options.
 */
export interface NumberFormatStandard {
  type: "standard";
  baseFormatOptions: NumberFormatOptions;
}

/**
 * Map integer values to custom strings.
 */
export interface NumberFormatFixedValues {
  type: "fixedValues";
  values: Record<number, string>;
}

/**
 * Format numbers as currency values.
 */
export interface NumberFormatCurrency {
  type: "currency";
  baseFormatOptions: NumberFormatOptions;
  style: NumberFormatCurrencyStyle;
  currencyCode: PropertyTypeReferenceOrStringConstant;
}

export type NumberFormatCurrencyStyle = "STANDARD" | "COMPACT";

/**
 * Format numbers with standard units supported by Intl.NumberFormat.
 */
export interface NumberFormatStandardUnit {
  type: "standardUnit";
  baseFormatOptions: NumberFormatOptions;
  unit: PropertyTypeReferenceOrStringConstant;
}

/**
 * Format numbers with custom units.
 */
export interface NumberFormatCustomUnit {
  type: "customUnit";
  baseFormatOptions: NumberFormatOptions;
  unit: PropertyTypeReferenceOrStringConstant;
}

/**
 * Attach text before and/or after the formatted number.
 */
export interface NumberFormatAffix {
  type: "affix";
  baseFormatOptions: NumberFormatOptions;
  affix: Affix;
}

export interface Affix {
  prefix?: PropertyTypeReferenceOrStringConstant;
  postfix?: PropertyTypeReferenceOrStringConstant;
}

/**
 * Format numeric values representing time durations.
 */
export interface NumberFormatDuration {
  type: "duration";
  formatStyle: DurationFormatStyle;
  precision?: DurationPrecision;
  baseValue: DurationBaseValue;
}

export type DurationFormatStyle = HumanReadableFormat | TimeCodeFormat;

export interface HumanReadableFormat {
  type: "humanReadable";
  showFullUnits?: boolean;
}

export interface TimeCodeFormat {
  type: "timecode";
}

export type DurationPrecision =
  | "DAYS"
  | "HOURS"
  | "MINUTES"
  | "SECONDS"
  | "AUTO";
export type DurationBaseValue = "SECONDS" | "MILLISECONDS";

/**
 * Scale numeric values by the specified factor.
 */
export interface NumberFormatScale {
  type: "scale";
  scaleType: NumberScaleType;
  baseFormatOptions: NumberFormatOptions;
}

export type NumberScaleType = "THOUSANDS" | "MILLIONS" | "BILLIONS";

/**
 * Display values as ratios with different scaling factors.
 */
export interface NumberFormatRatio {
  type: "ratio";
  ratioType: NumberRatioType;
  baseFormatOptions: NumberFormatOptions;
}

export type NumberRatioType = "PERCENTAGE" | "PER_MILLE" | "BASIS_POINTS";
