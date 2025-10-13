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

import type {
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
}

/**
 * Type declarations for Intl.DurationFormat (not yet in TypeScript standard types)
 * These are based on the TC39 proposal and current browser implementations
 */
interface DurationFormatInput {
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  microseconds?: number;
  nanoseconds?: number;
}

interface DurationFormatOptions {
  style?: "long" | "short" | "narrow" | "digital";
  localeMatcher?: "best fit" | "lookup";
}

interface DurationFormatConstructor {
  new(locales?: string | string[], options?: DurationFormatOptions): {
    format(duration: DurationFormatInput): string;
  };
}

declare global {
  namespace Intl {
    const DurationFormat: DurationFormatConstructor | undefined;
  }
}

/**
 * Formats a number value according to the specified formatting rule
 */
export function formatNumber(
  value: number,
  numberType: PropertyNumberFormattingRuleType,
  objectData: SimpleOsdkProperties,
  locale: string,
): string {
  try {
    switch (numberType.type) {
      case "standard":
        return formatStandardNumber(
          value,
          numberType.baseFormatOptions,
          locale,
        );

      case "fixedValues":
        return numberType.values[value] ?? value.toString();

      case "currency":
        return formatCurrency(value, numberType, objectData, locale);

      case "standardUnit":
        return formatStandardUnit(value, numberType, objectData, locale);

      case "customUnit":
        return formatCustomUnit(value, numberType, objectData, locale);

      case "affix":
        return formatAffix(value, numberType, objectData, locale);

      case "duration":
        return formatDuration(value, numberType);

      case "scale":
        return formatScale(value, numberType, locale);

      case "ratio":
        return formatRatio(value, numberType, locale);

      default:
        throw new Error(
          `Unknown number format type: ${
            (numberType satisfies never as any).type
          }`,
        );
    }
  } catch (error) {
    return value.toString();
  }
}

/**
 * Applies negative-to-parenthesis conversion if requested
 */
function applyNegativeToParenthesis(
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
  return formatter.format(value);
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
  const withAffixes = `${prefix || ""}${formatted}${suffix || ""}`;
  return applyNegativeToParenthesis(
    withAffixes,
    value,
    baseOptions.convertNegativeToParenthesis ?? false,
  );
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
  if (!currencyCode) {
    return formatStandardNumber(value, rule.baseFormatOptions, locale);
  }

  const options: ExtendedNumberFormatOptions = {
    ...convertToIntlOptions(rule.baseFormatOptions),
    style: "currency",
    currency: currencyCode,
    currencyDisplay: rule.style === "COMPACT" ? "narrowSymbol" : "symbol",
  };

  const formatted = formatWithIntl(value, options, locale);
  return applyNegativeToParenthesis(
    formatted,
    value,
    rule.baseFormatOptions.convertNegativeToParenthesis ?? false,
  );
}

function formatStandardUnit(
  value: number,
  rule: NumberFormatStandardUnit,
  objectData: SimpleOsdkProperties,
  locale: string,
): string {
  const unit = resolvePropertyReference(rule.unit, objectData);
  if (!unit) {
    return formatStandardNumber(value, rule.baseFormatOptions, locale);
  }

  const options: ExtendedNumberFormatOptions = {
    ...convertToIntlOptions(rule.baseFormatOptions),
    style: "unit",
    unit: unit,
  };

  try {
    const formatted = formatWithIntl(value, options, locale);
    return applyNegativeToParenthesis(
      formatted,
      value,
      rule.baseFormatOptions.convertNegativeToParenthesis ?? false,
    );
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
  const suffix = unit ? ` ${unit}` : "";
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
  const prefix = rule.affix.prefix
    ? resolvePropertyReference(rule.affix.prefix, objectData) ?? ""
    : "";
  const suffix = rule.affix.postfix
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

function formatDuration(value: number, rule: NumberFormatDuration): string {
  const totalSeconds = rule.baseValue === "MILLISECONDS" ? value / 1000 : value;

  if (rule.formatStyle.type === "timecode") {
    return formatAsTimecode(totalSeconds);
  }
  return formatAsHumanReadable(
    totalSeconds,
    rule.formatStyle.showFullUnits,
    rule.precision,
  );
}

function formatAsTimecode(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return `${hours.toString().padStart(2, "0")}:${
    minutes.toString().padStart(2, "0")
  }:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Formats a duration in human-readable format.
 * Uses Intl.DurationFormat for proper i18n support.
 *
 * @throws Error if Intl.DurationFormat is not available
 */
function formatAsHumanReadable(
  totalSeconds: number,
  showFullUnits = false,
  precision: string = "AUTO",
): string {
  if (Intl.DurationFormat == null) {
    throw new Error(
      "Intl.DurationFormat is not available in this environment. Consider using a polyfill.",
    );
  }

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  // Build duration object based on precision
  const duration: DurationFormatInput = {};

  if (days > 0 && (precision === "AUTO" || precision === "DAYS")) {
    duration.days = days;
  }
  if (
    hours > 0 && precision !== "DAYS"
    && (precision === "AUTO" || precision === "HOURS")
  ) {
    duration.hours = hours;
  }
  if (
    minutes > 0 && precision !== "DAYS" && precision !== "HOURS"
    && (precision === "AUTO" || precision === "MINUTES")
  ) {
    duration.minutes = minutes;
  }
  if (
    (seconds > 0 || Object.keys(duration).length === 0) && precision !== "DAYS"
    && precision !== "HOURS" && precision !== "MINUTES"
  ) {
    duration.seconds = seconds;
  }

  // Determine style based on showFullUnits
  const style = showFullUnits ? "long" : "narrow";

  // TypeScript doesn't know DurationFormat exists, but we checked it at runtime
  const DurationFormatConstructor = Intl
    .DurationFormat as DurationFormatConstructor;
  const formatter = new DurationFormatConstructor(undefined, { style });
  return formatter.format(duration);
}

function getScaledValueAndSuffix(
  value: number,
  scaleType: NumberScaleType,
): { scaledValue: number; suffix: string } {
  switch (scaleType) {
    case "THOUSANDS":
      return { scaledValue: value / 1000, suffix: "K" };
    case "MILLIONS":
      return { scaledValue: value / 1000000, suffix: "M" };
    case "BILLIONS":
      return { scaledValue: value / 1000000000, suffix: "B" };
    default:
      throw new Error(`Unknown scale type: ${scaleType satisfies never}`);
  }
}

function formatScale(
  value: number,
  rule: NumberFormatScale,
  locale: string,
): string {
  const { scaledValue, suffix } = getScaledValueAndSuffix(
    value,
    rule.scaleType,
  );
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
      throw new Error(`Unknown ratio type: ${ratioType satisfies never}`);
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
    const formatted = formatWithIntl(value, options, locale);
    return applyNegativeToParenthesis(
      formatted,
      value,
      rule.baseFormatOptions.convertNegativeToParenthesis ?? false,
    );
  }

  // Other ratio types: scale and add suffix
  const scaledValue = getRatioScaledValue(value, rule.ratioType);

  let suffix: string;
  // TypeScript knows rule.ratioType can only be "PER_MILLE" | "BASIS_POINTS" here
  // because we checked for PERCENTAGE above
  switch (rule.ratioType) {
    case "PER_MILLE":
      suffix = "‰";
      break;
    case "BASIS_POINTS":
      suffix = " bps";
      break;
    default:
      throw new Error(`Unknown ratio type: ${rule.ratioType satisfies never}`);
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
      throw new Error(`Unknown notation type: ${notation satisfies never}`);
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
      throw new Error(`Unknown rounding mode: ${mode satisfies never}`);
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
  };
}
