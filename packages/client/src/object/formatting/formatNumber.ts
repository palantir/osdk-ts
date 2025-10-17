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

import { DurationFormat } from "@formatjs/intl-durationformat";
import type {
  DurationPrecision,
  NumberFormatAffix,
  NumberFormatCurrency,
  NumberFormatCustomUnit,
  NumberFormatDuration,
  NumberFormatOptions,
  NumberFormatRatio,
  NumberFormatScale,
  NumberFormatStandardUnit,
  NumberRatioType,
  NumberScaleType,
  PropertyNumberFormattingRuleType,
} from "@osdk/api";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";
import { resolvePropertyReference } from "./propertyFormattingUtils.js";

/**
 * Extended NumberFormatOptions that includes rounding mode support
 * which is available in modern browsers but not yet in TypeScript types.
 * Only includes modes that are actually supported by Intl.NumberFormat and used in our API.
 */
export interface ExtendedNumberFormatOptions extends Intl.NumberFormatOptions {
  roundingMode?: "ceil" | "floor" | "halfExpand";
  convertNegativeToParenthesis?: boolean;
}

/**
 * Formats a number value according to the specified formatting rule
 */
export function formatNumber(
  value: number,
  numberType: PropertyNumberFormattingRuleType,
  objectData: SimpleOsdkProperties,
  locale: string,
): string | undefined {
  switch (numberType.type) {
    case "standard":
      return formatStandardNumber(
        value,
        numberType.baseFormatOptions,
        locale,
      );

    case "fixedValues":
      return numberType.values[value];

    case "currency":
      return formatCurrency(value, numberType, objectData, locale);

    case "standardUnit":
      return formatStandardUnit(value, numberType, objectData, locale);

    case "customUnit":
      return formatCustomUnit(value, numberType, objectData, locale);

    case "affix":
      return formatAffix(value, numberType, objectData, locale);

    case "duration":
      return formatDuration(value, numberType, locale);

    case "scale":
      return formatScale(value, numberType, locale);

    case "ratio":
      return formatRatio(value, numberType, locale);

    default:
      numberType satisfies never;
      return undefined;
  }
}

function formatStandardNumber(
  value: number,
  options: NumberFormatOptions,
  locale: string,
): string {
  return formatNumberWithAffixes(value, options, locale);
}

function formatCurrency(
  value: number,
  rule: NumberFormatCurrency,
  objectData: SimpleOsdkProperties,
  locale: string,
): string {
  const currencyCode = resolvePropertyReference(rule.currencyCode, objectData);
  if (currencyCode == null) {
    return formatStandardNumber(value, rule.baseFormatOptions, locale);
  }

  const options: ExtendedNumberFormatOptions = {
    ...convertToIntlOptions(rule.baseFormatOptions),
    style: "currency",
    currency: currencyCode,
    currencyDisplay: rule.style === "COMPACT" ? "narrowSymbol" : "symbol",
  };

  return formatWithIntl(value, options, locale);
}

function formatStandardUnit(
  value: number,
  rule: NumberFormatStandardUnit,
  objectData: SimpleOsdkProperties,
  locale: string,
): string {
  const unit = resolvePropertyReference(rule.unit, objectData);
  if (unit == null) {
    return formatStandardNumber(value, rule.baseFormatOptions, locale);
  }

  const options: ExtendedNumberFormatOptions = {
    ...convertToIntlOptions(rule.baseFormatOptions),
    style: "unit",
    unit: unit,
  };

  try {
    return formatWithIntl(value, options, locale);
  } catch (error) {
    const suffix = ` ${unit}`;
    return formatNumberWithAffixes(
      value,
      rule.baseFormatOptions,
      locale,
      "",
      suffix,
    );
  }
}

function formatCustomUnit(
  value: number,
  rule: NumberFormatCustomUnit,
  objectData: SimpleOsdkProperties,
  locale: string,
): string {
  const unit = resolvePropertyReference(rule.unit, objectData);
  const suffix = unit != null ? ` ${unit}` : "";
  return formatNumberWithAffixes(
    value,
    rule.baseFormatOptions,
    locale,
    "",
    suffix,
  );
}

function formatAffix(
  value: number,
  rule: NumberFormatAffix,
  objectData: SimpleOsdkProperties,
  locale: string,
): string {
  const prefix = rule.affix.prefix != null
    ? resolvePropertyReference(rule.affix.prefix, objectData) ?? ""
    : "";
  const suffix = rule.affix.postfix != null
    ? resolvePropertyReference(rule.affix.postfix, objectData) ?? ""
    : "";
  return formatNumberWithAffixes(
    value,
    rule.baseFormatOptions,
    locale,
    prefix,
    suffix,
  );
}

/**
 * Gets the scale divisor for a given scale type
 */
function getScaleDivisor(scaleType: NumberScaleType): number {
  switch (scaleType) {
    case "THOUSANDS":
      return 1e3;
    case "MILLIONS":
      return 1e6;
    case "BILLIONS":
      return 1e9;
    default:
      scaleType satisfies never;
      throw new Error(`Unknown scale type: ${scaleType}`);
  }
}

/**
 * Extracts the localized compact suffix for a given scale.
 * Uses Intl.NumberFormat with compact notation to get the proper i18n suffix.
 */
function getLocalizedCompactSuffix(
  scaleDivisor: number,
  locale: string,
): string {
  const compactFormatter = new Intl.NumberFormat(locale, {
    notation: "compact",
    compactDisplay: "short",
  });

  const parts = compactFormatter.formatToParts(scaleDivisor);
  const compactPart = parts.find(p => p.type === "compact");
  return compactPart?.value ?? "";
}

function formatScale(
  value: number,
  rule: NumberFormatScale,
  locale: string,
): string {
  const scaleDivisor = getScaleDivisor(rule.scaleType);
  const scaledValue = value / scaleDivisor;
  const suffix = getLocalizedCompactSuffix(scaleDivisor, locale);

  return formatNumberWithAffixes(
    scaledValue,
    rule.baseFormatOptions,
    locale,
    "",
    suffix,
  );
}

function getRatioScaledValue(
  value: number,
  ratioType: NumberRatioType,
): number {
  switch (ratioType) {
    case "PERCENTAGE":
      return value * 100;
    case "PER_MILLE":
      return value * 1000;
    case "BASIS_POINTS":
      return value * 10000;
    default:
      ratioType satisfies never;
      throw new Error(`Unknown ratio type: ${ratioType}`);
  }
}

function formatRatio(
  value: number,
  rule: NumberFormatRatio,
  locale: string,
): string {
  // Special case: PERCENTAGE uses Intl's native percent style
  if (rule.ratioType === "PERCENTAGE") {
    const options: ExtendedNumberFormatOptions = {
      ...convertToIntlOptions(rule.baseFormatOptions),
      style: "percent",
    };
    return formatWithIntl(value, options, locale);
  }

  // Other ratio types: scale and add suffix
  const scaledValue = getRatioScaledValue(value, rule.ratioType);

  let suffix: string;
  switch (rule.ratioType) {
    case "PER_MILLE":
      suffix = "‰";
      break;
    case "BASIS_POINTS":
      suffix = " bps";
      break;
    default:
      rule.ratioType satisfies never;
      throw new Error(`Unknown ratio type: ${rule.ratioType}`);
  }

  return formatNumberWithAffixes(
    scaledValue,
    rule.baseFormatOptions,
    locale,
    "",
    suffix,
  );
}

/**
 * Maps notation from OSDK format to Intl format
 */
function mapNotation(
  notation: "STANDARD" | "SCIENTIFIC" | "ENGINEERING" | "COMPACT",
): Intl.NumberFormatOptions["notation"] {
  switch (notation) {
    case "STANDARD":
      return "standard";
    case "SCIENTIFIC":
      return "scientific";
    case "ENGINEERING":
      return "engineering";
    case "COMPACT":
      return "compact";
    default:
      notation satisfies never;
  }
}

/**
 * Maps rounding mode from OSDK format to Intl format
 */
function mapRoundingMode(
  mode: "CEIL" | "FLOOR" | "ROUND_CLOSEST",
): ExtendedNumberFormatOptions["roundingMode"] {
  switch (mode) {
    case "CEIL":
      return "ceil";
    case "FLOOR":
      return "floor";
    case "ROUND_CLOSEST":
      return "halfExpand";
    default:
      mode satisfies never;
      return undefined;
  }
}

function convertToIntlOptions(
  options: NumberFormatOptions,
): ExtendedNumberFormatOptions {
  return {
    useGrouping: options.useGrouping,
    minimumIntegerDigits: options.minimumIntegerDigits,
    minimumFractionDigits: options.minimumFractionDigits,
    maximumFractionDigits: options.maximumFractionDigits,
    minimumSignificantDigits: options.minimumSignificantDigits,
    maximumSignificantDigits: options.maximumSignificantDigits,
    notation: options.notation ? mapNotation(options.notation) : undefined,
    roundingMode: options.roundingMode
      ? mapRoundingMode(options.roundingMode)
      : undefined,
    convertNegativeToParenthesis: options.convertNegativeToParenthesis,
  };
}

/**
 * Applies negative-to-parenthesis conversion if requested
 */
function maybeConvertNegativeToParenthesis(
  formatted: string,
  value: number,
  shouldConvert: boolean,
): string {
  if (shouldConvert && value < 0) {
    return formatted.replace(/^-/, "(") + ")";
  }
  return formatted;
}

/**
 * Formats a number using Intl.NumberFormat with the given options
 */
function formatWithIntl(
  value: number,
  options: ExtendedNumberFormatOptions,
  locale: string,
): string {
  const formatter = new Intl.NumberFormat(locale, options);
  const formatted = formatter.format(value);
  return maybeConvertNegativeToParenthesis(
    formatted,
    value,
    options.convertNegativeToParenthesis ?? false,
  );
}

/**
 * Formats a number and optionally adds prefix/suffix
 */
function formatNumberWithAffixes(
  value: number,
  baseOptions: NumberFormatOptions,
  locale: string,
  prefix?: string,
  suffix?: string,
): string {
  const intlOptions = convertToIntlOptions(baseOptions);
  const formatted = formatWithIntl(value, intlOptions, locale);
  return `${prefix || ""}${formatted}${suffix || ""}`;
}

// Duration formatting constants
const MS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;

/**
 * Maps our DurationPrecision to Intl.DurationFormat fractionalDigits
 */
function getPrecisionDigits(precision: DurationPrecision): number {
  switch (precision) {
    case "DAYS":
    case "HOURS":
    case "MINUTES":
    case "SECONDS":
      return 0;
    case "AUTO":
      return 3; // Show milliseconds when relevant
    default:
      precision satisfies never;
      return 0;
  }
}

/**
 * Converts the input value to seconds and builds a duration object
 */
function buildDurationObject(
  value: number,
  baseValue: "SECONDS" | "MILLISECONDS",
  precision: DurationPrecision,
): Record<string, number> {
  const absValue = Math.abs(value);
  const seconds = baseValue === "MILLISECONDS"
    ? absValue / MS_IN_SECOND
    : absValue;

  // Build duration components
  const days = Math.floor(seconds / SECONDS_IN_DAY);
  const remainingAfterDays = seconds % SECONDS_IN_DAY;
  const hours = Math.floor(remainingAfterDays / SECONDS_IN_HOUR);
  const remainingAfterHours = seconds % SECONDS_IN_HOUR;
  const minutes = Math.floor(remainingAfterHours / SECONDS_IN_MINUTE);
  const remainingSeconds = seconds % SECONDS_IN_MINUTE;

  // Apply precision-based rounding
  switch (precision) {
    case "DAYS":
      return { days: Math.round(seconds / SECONDS_IN_DAY) };

    case "HOURS":
      return {
        days,
        hours: Math.round(remainingAfterDays / SECONDS_IN_HOUR),
      };

    case "MINUTES":
      return {
        days,
        hours,
        minutes: Math.round(remainingAfterHours / SECONDS_IN_MINUTE),
      };

    case "SECONDS":
    case "AUTO":
    default:
      return {
        days,
        hours,
        minutes,
        seconds: Math.floor(remainingSeconds),
      };
  }
}

/**
 * Formats duration using Intl.DurationFormat for timecode style
 */
function formatTimecode(
  value: number,
  baseValue: "SECONDS" | "MILLISECONDS",
): string {
  const absValue = Math.abs(value);
  const seconds = baseValue === "MILLISECONDS"
    ? absValue / MS_IN_SECOND
    : absValue;

  const days = Math.floor(seconds / SECONDS_IN_DAY);
  const remainingAfterDays = seconds % SECONDS_IN_DAY;
  const hours = Math.floor(remainingAfterDays / SECONDS_IN_HOUR);
  const remainingAfterHours = seconds % SECONDS_IN_HOUR;
  const minutes = Math.floor(remainingAfterHours / SECONDS_IN_MINUTE);
  const remainingSeconds = seconds % SECONDS_IN_MINUTE;
  const wholeSeconds = Math.floor(remainingSeconds);
  const milliseconds = Math.round((remainingSeconds % 1) * MS_IN_SECOND);

  const totalHours = days * 24 + hours;
  const pad2 = (num: number) => String(num).padStart(2, "0");
  const pad3 = (num: number) => String(num).padStart(3, "0");

  const hasHours = totalHours > 0;
  const hasMilliseconds = milliseconds > 0;

  if (hasHours) {
    const base = `${totalHours}:${pad2(minutes)}:${pad2(wholeSeconds)}`;
    return hasMilliseconds ? `${base}.${pad3(milliseconds)}` : base;
  }

  const base = `${minutes}:${pad2(wholeSeconds)}`;
  return hasMilliseconds ? `${base}.${pad3(milliseconds)}` : base;
}

function formatDuration(
  value: number,
  rule: NumberFormatDuration,
  locale: string,
): string {
  const precision = rule.precision ?? "AUTO";

  if (rule.formatStyle.type === "timecode") {
    return formatTimecode(value, rule.baseValue);
  }

  const duration = buildDurationObject(value, rule.baseValue, precision);

  const formatter = new DurationFormat(locale, {
    style: rule.formatStyle.showFullUnits ? "long" : "narrow",
    fractionalDigits: 0, // Don't show fractional parts in human-readable
  });

  const formatted = formatter.format(duration);

  // Intl.DurationFormat returns empty string for all-zero durations
  // Provide a sensible fallback
  if (formatted === "") {
    if (precision === "DAYS") {
      return rule.formatStyle.showFullUnits ? "0 days" : "0d";
    }
    return rule.formatStyle.showFullUnits ? "0 seconds" : "0s";
  }

  return formatted;
}
