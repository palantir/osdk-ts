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

// Format constants matching the existing formatDate implementation
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

const FORMAT_DATE_SHORT: Intl.DateTimeFormatOptions = {
  day: "numeric",
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

const FORMAT_FULL_DATE_TIME_SHORT: Intl.DateTimeFormatOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

// Time constants for relative formatting
const SECOND_MS = 1_000;
const MINUTE_MS = 60 * SECOND_MS;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;
const WEEK_MS = 7 * DAY_MS;
const MONTH_MS = 30 * DAY_MS;
const YEAR_MS = 365 * DAY_MS;

/**
 * Formats a date/timestamp value according to the specified formatting rule
 */
export function formatDateTime(
  value: Date | string,
  format: DatetimeFormat,
  timezone: DatetimeTimezone | undefined,
  objectData: SimpleOsdkProperties,
  userTimezoneOverride?: string,
): string {
  const date = value instanceof Date ? value : new Date(value);

  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date value: ${String(value)}`);
  }

  const resolvedTimezone = resolveTimezone(
    timezone,
    objectData,
    userTimezoneOverride,
  );

  try {
    switch (format.type) {
      case "localizedFormat":
        return formatLocalized(date, format, resolvedTimezone);
      case "stringFormat":
        return formatWithPattern(date, format, resolvedTimezone);
      default:
        throw new Error(
          `Unknown datetime format type: ${
            (format satisfies never as any).type
          }`,
        );
    }
  } catch (error) {
    throw error;
  }
}

function formatLocalized(
  date: Date,
  format: DatetimeLocalizedFormat,
  timezone?: string,
): string {
  const locale = getBrowserLocale();

  // Handle special cases that need custom formatting
  if (format.format === "DATE_FORMAT_RELATIVE_TO_NOW") {
    return formatRelativeToNow(date, locale);
  }

  if (format.format === "DATE_FORMAT_ISO_INSTANT") {
    return date.toISOString();
  }

  const options = getLocalizedFormatOptions(format.format);
  if (!options) {
    // Throw error for unrecognized formats - will be caught by outer handler
    throw new Error(
      `Unrecognized localized format: ${format.format}`,
    );
  }

  // Add timezone if provided
  const finalOptions = timezone ? { ...options, timeZone: timezone } : options;

  try {
    return new Intl.DateTimeFormat(locale, finalOptions).format(date);
  } catch (error) {
    // Re-throw with more context
    throw new Error(
      `Failed to format date with locale "${locale}" and timezone "${timezone}": ${error}`,
    );
  }
}
/**
 * Conversion map from Java DateTimeFormatter patterns to date-fns patterns
 * Only includes patterns that differ between the two libraries
 */
const JAVA_TO_DATE_FNS_MAP: Record<string, string> = {
  // Day of week (your usage - short and long text, not numeric)
  e: "eee", // Short day name (Mon, Tue, Wed)
  ee: "eeee", // Long day name (Monday, Tuesday, Wednesday)

  // Week-based year
  Y: "YYYY", // Week-based year (requires useAdditionalWeekYearTokens in date-fns)

  // Timezone offset
  Z: "XX", // Timezone offset without colon (+0200, -0800)

  // Literal characters
  "'Z'": "[Z]", // Literal 'Z' character (Zulu time indicator)
};

// Sort by length (longest first) to avoid partial matches
const SORTED_JAVA_PATTERNS = Object.keys(JAVA_TO_DATE_FNS_MAP).sort(
  (a, b) => b.length - a.length,
);
const JAVA_PATTERN_REGEX = new RegExp(
  SORTED_JAVA_PATTERNS.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(
    "|",
  ),
  "g",
);

/**
 * Converts a Java DateTimeFormatter pattern to date-fns pattern
 * Warns about unsupported patterns but doesn't throw
 */
function convertJavaPattern(javaPattern: string): string {
  return javaPattern.replace(
    JAVA_PATTERN_REGEX,
    (match) => JAVA_TO_DATE_FNS_MAP[match] ?? match,
  );
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
    throw new Error(
      `Failed to format date with pattern "${format.pattern}": ${error}`,
    );
  }
}

function getLocalizedFormatOptions(
  format: DatetimeLocalizedFormatType,
): Intl.DateTimeFormatOptions | null {
  switch (format) {
    case "DATE_FORMAT_RELATIVE_TO_NOW":
      // This needs special handling, not a simple format option
      return null;

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

    case "DATE_FORMAT_ISO_INSTANT":
      // Special case - return empty options to use ISO format
      return {};

    default:
      throw new Error(
        `Unknown localized datetime format: ${format satisfies never}`,
      );
  }
}

/**
 * Formats a date relative to now (e.g., "2 hours ago", "in 5 minutes", etc.)
 * Uses Intl.RelativeTimeFormat for proper i18n support.
 *
 * @throws Error if Intl.RelativeTimeFormat is not available
 */
function formatRelativeToNow(
  date: Date,
  locale: string,
): string {
  if (Intl.RelativeTimeFormat == null) {
    throw new Error(
      "Intl.RelativeTimeFormat is not available in this environment. Consider using a polyfill.",
    );
  }

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const now = Date.now();
  const dateTime = date.valueOf();
  const diff = dateTime - now;
  const absDiff = Math.abs(diff);

  // Less than a minute
  if (absDiff < MINUTE_MS) {
    const seconds = Math.floor(diff / SECOND_MS);
    return rtf.format(seconds, "second");
  }

  // Less than an hour
  if (absDiff < HOUR_MS) {
    const minutes = Math.floor(diff / MINUTE_MS);
    return rtf.format(minutes, "minute");
  }

  // Less than a day
  if (absDiff < DAY_MS) {
    const hours = Math.floor(diff / HOUR_MS);
    return rtf.format(hours, "hour");
  }

  // Less than a week
  if (absDiff < WEEK_MS) {
    const days = Math.floor(diff / DAY_MS);
    return rtf.format(days, "day");
  }

  // Less than a month
  if (absDiff < MONTH_MS) {
    const weeks = Math.floor(diff / WEEK_MS);
    return rtf.format(weeks, "week");
  }

  // Less than a year
  if (absDiff < YEAR_MS) {
    const months = Math.floor(diff / MONTH_MS);
    return rtf.format(months, "month");
  }

  // More than a year
  const years = Math.floor(diff / YEAR_MS);
  return rtf.format(years, "year");
}

function resolveTimezone(
  timezone: DatetimeTimezone | undefined,
  objectData: SimpleOsdkProperties,
  userTimezoneOverride?: string,
): string | undefined {
  if (!timezone) {
    return userTimezoneOverride;
  }

  switch (timezone.type) {
    case "user":
      return userTimezoneOverride
        ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
    case "static":
      return resolvePropertyReference(timezone.zoneId, objectData)
        ?? userTimezoneOverride;
    default:
      throw new Error(`Unknown timezone type: ${timezone satisfies never}`);
  }
}

function getBrowserLocale(): string {
  if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language;
  }
  return "en-US";
}
