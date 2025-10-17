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
  DatetimeFormat,
  DatetimeLocalizedFormat,
  DatetimeStringFormat,
  DatetimeTimezone,
} from "@osdk/api";
import type { DatetimeLocalizedFormatType } from "@osdk/foundry.ontologies";
import { format as formatDate } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import type { SimpleOsdkProperties } from "../SimpleOsdkProperties.js";
import { resolvePropertyReference } from "./propertyFormattingUtils.js";

/**
 * Formats a date/timestamp value according to the specified formatting rule
 */
export function formatDateTime(
  value: Date,
  format: DatetimeFormat,
  timezone: DatetimeTimezone | undefined,
  objectData: SimpleOsdkProperties,
  locale: string,
  userTimezoneOverride?: string,
): string | undefined {
  const date = value instanceof Date ? value : new Date(value);
  if (isNaN(date.getTime())) {
    return undefined;
  }

  const resolvedTimezone = resolveTimezone(
    timezone,
    objectData,
    userTimezoneOverride,
  );

  switch (format.type) {
    case "localizedFormat":
      return formatLocalized(date, format, locale, resolvedTimezone);
    case "stringFormat":
      return formatWithPattern(date, format, resolvedTimezone);
    default:
      format satisfies never;
      return undefined;
  }
}

const INVALID_DATE_STRING = "Invalid date or timezone";

function formatLocalized(
  date: Date,
  format: DatetimeLocalizedFormat,
  locale: string,
  timezone: string | undefined,
): string | undefined {
  if (format.format === "DATE_FORMAT_ISO_INSTANT") {
    return date.toISOString();
  }
  if (format.format === "DATE_FORMAT_RELATIVE_TO_NOW") {
    // TODO (relative time formatting)
    return undefined;
  }

  const options = getLocalizedFormatOptions(format.format);
  try {
    return new Intl.DateTimeFormat(
      locale,
      timezone ? { ...options, timeZone: timezone } : options,
    ).format(date);
  } catch (_e) {
    // If a property reference is an invalid timezone we specifically say that it's invalid instead of returning undefined;
    return INVALID_DATE_STRING;
  }
}

function getLocalizedFormatOptions(
  format: Exclude<
    DatetimeLocalizedFormatType,
    "DATE_FORMAT_RELATIVE_TO_NOW" | "DATE_FORMAT_ISO_INSTANT"
  >,
): Intl.DateTimeFormatOptions {
  switch (format) {
    case "DATE_FORMAT_DATE":
      return FORMAT_DATE;

    case "DATE_FORMAT_YEAR_AND_MONTH":
      return FORMAT_YEAR_AND_MONTH;

    case "DATE_FORMAT_DATE_TIME":
      return FORMAT_DATE_TIME;

    case "DATE_FORMAT_DATE_TIME_SHORT":
      return FORMAT_DATE_TIME_SHORT;

    case "DATE_FORMAT_TIME":
      return FORMAT_TIME;

    default:
      format satisfies never;
      return {};
  }
}

const FORMAT_DATE: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  weekday: "short",
  year: "numeric",
};

const FORMAT_YEAR_AND_MONTH: Intl.DateTimeFormatOptions = {
  month: "short",
  year: "numeric",
};

const FORMAT_DATE_TIME: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  weekday: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const FORMAT_DATE_TIME_SHORT: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const FORMAT_TIME: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

function resolveTimezone(
  timezone: DatetimeTimezone | undefined,
  objectData: SimpleOsdkProperties,
  userTimezoneOverride?: string,
): string | undefined {
  if (userTimezoneOverride != null) {
    return userTimezoneOverride;
  }
  if (timezone == null) {
    return undefined;
  }

  switch (timezone.type) {
    case "user":
      return undefined;
    case "static":
      return resolvePropertyReference(timezone.zoneId, objectData);
    default:
      timezone satisfies never;
      return undefined;
  }
}

/**
 * Conversion map from Java DateTimeFormatter patterns to date-fns patterns similar
 * to how internal implementations does it.
 * Only includes patterns that differ between the two libraries
 */
const JAVA_TO_DATE_FNS_MAP: Record<string, string> = {
  // Day of week (your usage - short and long text, not numeric)
  e: "eee", // Short day name (Mon, Tue, Wed)
  ee: "eeee", // Long day name (Monday, Tuesday, Wednesday)

  // Week-based year
  Y: "YYYY",

  // Timezone offset
  Z: "XX", // Timezone offset without colon (+0200, -0800)
};

// Sort by length (longest first) to avoid partial matches
const SORTED_JAVA_PATTERNS = Object.keys(JAVA_TO_DATE_FNS_MAP).sort(
  (a, b) => b.length - a.length,
);

/**
 * Converts a Java DateTimeFormatter pattern to date-fns pattern
 * Handles quoted literals properly (both Java and date-fns use single quotes)
 */
function convertJavaPattern(javaPattern: string): string {
  let result = "";
  let inQuote = false;

  for (let i = 0; i < javaPattern.length; i++) {
    const char = javaPattern[i];

    if (char === "'") {
      inQuote = !inQuote;
      result += char;
      continue;
    }

    if (inQuote) {
      // Inside quotes, keep everything as-is
      result += char;
    } else {
      // Outside quotes, check for patterns to convert
      let matched = false;
      for (const pattern of SORTED_JAVA_PATTERNS) {
        if (javaPattern.substring(i, i + pattern.length) === pattern) {
          result += JAVA_TO_DATE_FNS_MAP[pattern];
          i += pattern.length - 1;
          matched = true;
          break;
        }
      }
      if (!matched) {
        result += char;
      }
    }
  }

  return result;
}

function formatWithPattern(
  date: Date,
  format: DatetimeStringFormat,
  timezone?: string,
): string {
  const convertedPattern = convertJavaPattern(format.pattern);

  try {
    // Check if pattern includes 'Z' which means always display UTC
    const shouldAlwaysDisplayUtc = format.pattern.includes("'Z'");
    const targetTimezone = shouldAlwaysDisplayUtc ? "UTC" : (timezone ?? "UTC");

    // If we have a timezone to format in, use date-fns-tz
    if (timezone || shouldAlwaysDisplayUtc) {
      return formatInTimeZone(date, targetTimezone, convertedPattern);
    }

    // Otherwise use regular date-fns in browser's local timezone
    return formatDate(date, convertedPattern);
  } catch (error) {
    return INVALID_DATE_STRING;
  }
}
