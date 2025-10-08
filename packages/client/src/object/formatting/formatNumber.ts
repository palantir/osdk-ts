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
  PropertyNumberFormattingRuleType,
} from "@osdk/api";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";
import { resolvePropertyReference } from "./propertyFormattingUtils.js";

/**
 * Extended NumberFormatOptions that includes rounding mode support
 * which is available in modern browsers but not yet in TypeScript types
 */
export interface ExtendedNumberFormatOptions extends Intl.NumberFormatOptions {
  roundingMode?:
    | "ceil"
    | "floor"
    | "expand"
    | "trunc"
    | "halfCeil"
    | "halfFloor"
    | "halfExpand"
    | "halfTrunc"
    | "halfEven";
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
        return value.toString();
    }
  } catch (error) {
    // Fallback to basic string representation if formatting fails
    return value.toString();
  }
}

function formatStandardNumber(
  value: number,
  options: NumberFormatOptions,
  locale: string,
): string {
  const formatter = new Intl.NumberFormat(
    locale,
    convertToIntlOptions(options) as Intl.NumberFormatOptions,
  );
  const formattedValue = formatter.format(value);

  // Apply negative to parenthesis conversion if requested
  return options.convertNegativeToParenthesis && value < 0
    ? formattedValue.replace("-", "(") + ")"
    : formattedValue;
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

  const formatter = new Intl.NumberFormat(
    locale,
    options as Intl.NumberFormatOptions,
  );
  const formattedValue = formatter.format(value);

  // Apply negative to parenthesis conversion if requested
  return rule.baseFormatOptions.convertNegativeToParenthesis && value < 0
    ? formattedValue.replace(/^-/, "(") + ")"
    : formattedValue;
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
    const formatter = new Intl.NumberFormat(
      locale,
      options as Intl.NumberFormatOptions,
    );
    const formattedValue = formatter.format(value);

    // Apply negative to parenthesis conversion if requested
    return rule.baseFormatOptions.convertNegativeToParenthesis && value < 0
      ? formattedValue.replace("-", "(") + ")"
      : formattedValue;
  } catch {
    // Fallback if unit is not supported
    const formattedNumber = formatStandardNumber(
      value,
      rule.baseFormatOptions,
      locale,
    );
    return `${formattedNumber} ${unit}`;
  }
}

function formatCustomUnit(
  value: number,
  rule: NumberFormatCustomUnit,
  objectData: SimpleOsdkProperties,
  locale: string,
): string {
  const unit = resolvePropertyReference(rule.unit, objectData);
  const formattedNumber = formatStandardNumber(
    value,
    rule.baseFormatOptions,
    locale,
  );

  if (!unit) {
    return formattedNumber;
  }

  return `${formattedNumber} ${unit}`;
}

function formatAffix(
  value: number,
  rule: NumberFormatAffix,
  objectData: SimpleOsdkProperties,
  locale: string,
): string {
  const prefix = rule.affix.prefix
    ? resolvePropertyReference(rule.affix.prefix, objectData)
    : "";
  const postfix = rule.affix.postfix
    ? resolvePropertyReference(rule.affix.postfix, objectData)
    : "";
  const formattedNumber = formatStandardNumber(
    value,
    rule.baseFormatOptions,
    locale,
  );

  return `${prefix ?? ""}${formattedNumber}${postfix ?? ""}`;
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

function formatAsHumanReadable(
  totalSeconds: number,
  showFullUnits = false,
  precision: string = "AUTO",
): string {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  const parts: string[] = [];

  if (days > 0 && (precision === "AUTO" || precision === "DAYS")) {
    parts.push(
      `${days} ${showFullUnits ? (days === 1 ? "day" : "days") : "d"}`,
    );
  }
  if (
    hours > 0 && precision !== "DAYS"
    && (precision === "AUTO" || precision === "HOURS")
  ) {
    parts.push(
      `${hours} ${showFullUnits ? (hours === 1 ? "hour" : "hours") : "h"}`,
    );
  }
  if (
    minutes > 0 && precision !== "DAYS" && precision !== "HOURS"
    && (precision === "AUTO" || precision === "MINUTES")
  ) {
    parts.push(
      `${minutes} ${
        showFullUnits ? (minutes === 1 ? "minute" : "minutes") : "m"
      }`,
    );
  }
  if (
    (seconds > 0 || parts.length === 0) && precision !== "DAYS"
    && precision !== "HOURS" && precision !== "MINUTES"
  ) {
    parts.push(
      `${seconds} ${
        showFullUnits ? (seconds === 1 ? "second" : "seconds") : "s"
      }`,
    );
  }

  return parts.join(" ");
}

function formatScale(
  value: number,
  rule: NumberFormatScale,
  locale: string,
): string {
  let scaledValue = value;
  let suffix = "";

  switch (rule.scaleType) {
    case "THOUSANDS":
      scaledValue = value / 1000;
      suffix = "K";
      break;
    case "MILLIONS":
      scaledValue = value / 1000000;
      suffix = "M";
      break;
    case "BILLIONS":
      scaledValue = value / 1000000000;
      suffix = "B";
      break;
  }

  const formattedNumber = formatStandardNumber(
    scaledValue,
    rule.baseFormatOptions,
    locale,
  );
  return `${formattedNumber}${suffix}`;
}

function formatRatio(
  value: number,
  rule: NumberFormatRatio,
  locale: string,
): string {
  let scaledValue = value;

  switch (rule.ratioType) {
    case "PERCENTAGE":
      scaledValue = value * 100;
      break;
    case "PER_MILLE":
      scaledValue = value * 1000;
      break;
    case "BASIS_POINTS":
      scaledValue = value * 10000;
      break;
  }

  const options: ExtendedNumberFormatOptions = convertToIntlOptions(
    rule.baseFormatOptions,
  );

  if (rule.ratioType === "PERCENTAGE") {
    options.style = "percent";
    // Use original value for percent style
    const formatter = new Intl.NumberFormat(
      locale,
      options as Intl.NumberFormatOptions,
    );
    const formattedValue = formatter.format(value);

    // Apply negative to parenthesis conversion if requested
    return rule.baseFormatOptions.convertNegativeToParenthesis && value < 0
      ? formattedValue.replace("-", "(") + ")"
      : formattedValue;
  }

  const formattedNumber = formatStandardNumber(
    scaledValue,
    rule.baseFormatOptions,
    locale,
  );

  switch (rule.ratioType) {
    case "PER_MILLE":
      return `${formattedNumber}‰`;
    case "BASIS_POINTS":
      return `${formattedNumber} bps`;
    default:
      return formattedNumber;
  }
}

function convertToIntlOptions(
  options: NumberFormatOptions,
): ExtendedNumberFormatOptions {
  const intlOptions: ExtendedNumberFormatOptions = {};

  if (options.useGrouping !== undefined) {
    intlOptions.useGrouping = options.useGrouping;
  }

  if (options.minimumIntegerDigits !== undefined) {
    intlOptions.minimumIntegerDigits = options.minimumIntegerDigits;
  }

  if (options.minimumFractionDigits !== undefined) {
    intlOptions.minimumFractionDigits = options.minimumFractionDigits;
  }

  if (options.maximumFractionDigits !== undefined) {
    intlOptions.maximumFractionDigits = options.maximumFractionDigits;
  }

  if (options.minimumSignificantDigits !== undefined) {
    intlOptions.minimumSignificantDigits = options.minimumSignificantDigits;
  }

  if (options.maximumSignificantDigits !== undefined) {
    intlOptions.maximumSignificantDigits = options.maximumSignificantDigits;
  }

  if (options.notation !== undefined) {
    switch (options.notation) {
      case "STANDARD":
        intlOptions.notation = "standard";
        break;
      case "SCIENTIFIC":
        intlOptions.notation = "scientific";
        break;
      case "ENGINEERING":
        intlOptions.notation = "engineering";
        break;
      case "COMPACT":
        intlOptions.notation = "compact";
        break;
    }
  }

  // Map rounding modes from OSDK to Intl format
  if (options.roundingMode !== undefined) {
    switch (options.roundingMode) {
      case "CEIL":
        intlOptions.roundingMode = "ceil";
        break;
      case "FLOOR":
        intlOptions.roundingMode = "floor";
        break;
      case "ROUND_CLOSEST":
        intlOptions.roundingMode = "halfExpand";
        break;
    }
  }

  // Note: convertNegativeToParenthesis is handled separately after formatting

  return intlOptions;
}
