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

const FORMAT_MONTH_AND_DAY: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
};

const FORMAT_MONTH: Intl.DateTimeFormatOptions = {
  month: "long",
};

const FORMAT_MONTH_SHORT: Intl.DateTimeFormatOptions = {
  month: "short",
};

const FORMAT_WEEKDAY: Intl.DateTimeFormatOptions = {
  weekday: "long",
};

const FORMAT_WEEKDAY_SHORT: Intl.DateTimeFormatOptions = {
  weekday: "short",
};

const FORMAT_DATE_SHORT: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
};

const FORMAT_DATE_LONG_MONTH: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
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

const FORMAT_DATE_TIME_WITHOUT_SECONDS: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  weekday: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const FORMAT_DATE_TIME_WITHOUT_MINUTES: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  weekday: "short",
  year: "numeric",
  hour: "numeric",
};

const FORMAT_DATE_TIME_SHORT: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const FORMAT_DATE_TIME_SHORT_24_HR: Intl.DateTimeFormatOptions = {
  day: "numeric",
  hour: "numeric",
  hour12: false,
  minute: "numeric",
  month: "short",
  year: "numeric",
};

const FORMAT_TIME: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const FORMAT_MEDIUM_DATE_LONG_TIME: Intl.DateTimeFormatOptions = {
  dateStyle: "medium",
  timeStyle: "long",
};

const FORMAT_DATE_DEFAULT: Intl.DateTimeFormatOptions = {};

const FORMAT_DAY_TIME: Intl.DateTimeFormatOptions = {
  weekday: "short",
  hour: "numeric",
  minute: "numeric",
};

const FORMAT_FULL_DATE_TIME_SHORT: Intl.DateTimeFormatOptions = {
  weekday: "short",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const FORMAT_SHORT_TIME: Intl.DateTimeFormatOptions = {
  timeStyle: "short",
};

const FORMAT_LONG_DATE_NO_YEAR: Intl.DateTimeFormatOptions = {
  weekday: "long",
  month: "long",
  day: "numeric",
};

const FORMAT_DATE_TIME_SHORT_WITH_WEEKDAY: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  weekday: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const FORMAT_TIME_SHORT: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
};

const FORMAT_DATE_TIME_WITHOUT_YEAR_OR_DAY_OF_WEEK: Intl.DateTimeFormatOptions =
  {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
  };

const FORMAT_DATE_TIME_WITHOUT_DAY_OF_WEEK_WITH_SECONDS:
  Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

const FORMAT_DATE_TIME_WITHOUT_YEAR_OR_DAY_OF_WEEK_WITH_SECONDS:
  Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
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
    return String(value);
  }

  const resolvedTimezone = resolveTimezone(
    timezone,
    objectData,
    userTimezoneOverride,
  );

  switch (format.type) {
    case "localizedFormat":
      return formatLocalized(date, format, resolvedTimezone);
    case "stringFormat":
      return formatWithPattern(date, format, resolvedTimezone);
    default:
      return date.toISOString();
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
    // Fallback for unrecognized formats
    return date.toISOString();
  }

  // Add timezone if provided
  const finalOptions = timezone ? { ...options, timeZone: timezone } : options;

  try {
    return new Intl.DateTimeFormat(locale, finalOptions).format(date);
  } catch (error) {
    // Fallback to ISO string if formatting fails
    return date.toISOString();
  }
}

function formatWithPattern(
  date: Date,
  format: DatetimeStringFormat,
  timezone?: string,
): string {
  // For custom patterns, we'll use the built-in toLocaleString with custom options
  // In a production system, you might want to use a library like date-fns or dayjs
  // to handle complex patterns
  const locale = getBrowserLocale();
  const options: Intl.DateTimeFormatOptions = parsePattern(format.pattern);

  if (timezone) {
    options.timeZone = timezone;
  }

  try {
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch (error) {
    // Fallback to ISO string if pattern formatting fails
    return date.toISOString();
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
      // Fallback to a reasonable default
      return FORMAT_DATE_TIME_SHORT;
  }
}

/**
 * Formats a date relative to now (e.g., "2 hours ago", "Tomorrow", etc.)
 * This is a simplified version - a full implementation would include i18n support
 */
function formatRelativeToNow(date: Date, locale: string): string {
  const now = Date.now();
  const dateTime = date.valueOf();
  const diff = dateTime - now;
  const absDiff = Math.abs(diff);
  const isPast = diff < 0;

  // Less than a minute
  if (absDiff < MINUTE_MS) {
    const seconds = Math.floor(absDiff / SECOND_MS);
    if (seconds < 5) {
      return "now";
    }
    return isPast ? `${seconds} seconds ago` : `in ${seconds} seconds`;
  }

  // Less than an hour
  if (absDiff < HOUR_MS) {
    const minutes = Math.floor(absDiff / MINUTE_MS);
    return isPast
      ? `${minutes} minute${minutes !== 1 ? "s" : ""} ago`
      : `in ${minutes} minute${minutes !== 1 ? "s" : ""}`;
  }

  // Less than a day
  if (absDiff < DAY_MS) {
    const hours = Math.floor(absDiff / HOUR_MS);
    return isPast
      ? `${hours} hour${hours !== 1 ? "s" : ""} ago`
      : `in ${hours} hour${hours !== 1 ? "s" : ""}`;
  }

  // Check if it's yesterday, today, or tomorrow
  if (isToday(date)) {
    const timeFormatter = new Intl.DateTimeFormat(locale, FORMAT_TIME_SHORT);
    return `today at ${timeFormatter.format(date)}`;
  }

  if (isYesterday(date)) {
    const timeFormatter = new Intl.DateTimeFormat(locale, FORMAT_TIME_SHORT);
    return `yesterday at ${timeFormatter.format(date)}`;
  }

  if (isTomorrow(date)) {
    const timeFormatter = new Intl.DateTimeFormat(locale, FORMAT_TIME_SHORT);
    return `tomorrow at ${timeFormatter.format(date)}`;
  }

  // Less than a week
  if (absDiff < WEEK_MS) {
    const days = Math.floor(absDiff / DAY_MS);
    return isPast
      ? `${days} day${days !== 1 ? "s" : ""} ago`
      : `in ${days} day${days !== 1 ? "s" : ""}`;
  }

  // Less than a month
  if (absDiff < MONTH_MS) {
    const weeks = Math.floor(absDiff / WEEK_MS);
    return isPast
      ? `${weeks} week${weeks !== 1 ? "s" : ""} ago`
      : `in ${weeks} week${weeks !== 1 ? "s" : ""}`;
  }

  // Less than a year
  if (absDiff < YEAR_MS) {
    const months = Math.floor(absDiff / MONTH_MS);
    return isPast
      ? `${months} month${months !== 1 ? "s" : ""} ago`
      : `in ${months} month${months !== 1 ? "s" : ""}`;
  }

  // More than a year - just show the date
  const formatter = new Intl.DateTimeFormat(locale, FORMAT_DATE_SHORT);
  return formatter.format(date);
}

function getMidnightTonight(): Date {
  const date = new Date();
  date.setMilliseconds(999);
  date.setSeconds(59);
  date.setMinutes(59);
  date.setHours(23);
  return date;
}

function isToday(date: Date): boolean {
  const midnightTonight = getMidnightTonight();
  const endYesterday = new Date(midnightTonight.getTime() - DAY_MS);
  return date > endYesterday && date <= midnightTonight;
}

function isYesterday(date: Date): boolean {
  const midnightTonight = getMidnightTonight();
  const endYesterday = new Date(midnightTonight.getTime() - DAY_MS);
  const startYesterday = new Date(midnightTonight.getTime() - 2 * DAY_MS);
  return date > startYesterday && date <= endYesterday;
}

function isTomorrow(date: Date): boolean {
  const midnightTonight = getMidnightTonight();
  const midnightTomorrow = new Date(midnightTonight.getTime() + DAY_MS);
  return date > midnightTonight && date <= midnightTomorrow;
}

function parsePattern(pattern: string): Intl.DateTimeFormatOptions {
  // This is a simplified pattern parser
  // In production, you'd want to support more complex patterns
  const options: Intl.DateTimeFormatOptions = {};

  // Common patterns
  if (pattern.includes("yyyy") || pattern.includes("YYYY")) {
    options.year = "numeric";
  } else if (pattern.includes("yy") || pattern.includes("YY")) {
    options.year = "2-digit";
  }

  if (pattern.includes("MMMM")) {
    options.month = "long";
  } else if (pattern.includes("MMM")) {
    options.month = "short";
  } else if (pattern.includes("MM")) {
    options.month = "2-digit";
  } else if (pattern.includes("M")) {
    options.month = "numeric";
  }

  if (pattern.includes("dd") || pattern.includes("DD")) {
    options.day = "2-digit";
  } else if (pattern.includes("d") || pattern.includes("D")) {
    options.day = "numeric";
  }

  if (pattern.includes("HH") || pattern.includes("hh")) {
    options.hour = "2-digit";
  } else if (pattern.includes("H") || pattern.includes("h")) {
    options.hour = "numeric";
  }

  if (pattern.includes("mm")) {
    options.minute = "2-digit";
  } else if (pattern.includes("m")) {
    options.minute = "numeric";
  }

  if (pattern.includes("ss")) {
    options.second = "2-digit";
  } else if (pattern.includes("s")) {
    options.second = "numeric";
  }

  if (pattern.includes("EEEE")) {
    options.weekday = "long";
  } else if (pattern.includes("EEE") || pattern.includes("E")) {
    options.weekday = "short";
  }

  // Handle 12/24 hour format
  if (pattern.includes("a") || pattern.includes("A")) {
    options.hour12 = true;
  } else if (pattern.includes("H")) {
    options.hour12 = false;
  }

  return options;
}

function resolveTimezone(
  timezone: DatetimeTimezone | undefined,
  objectData: SimpleOsdkProperties,
  userTimezoneOverride?: string,
): string | undefined {
  if (!timezone) {
    return userTimezoneOverride;
  }

  if (timezone.type === "user") {
    return userTimezoneOverride
      ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  if (timezone.type === "static") {
    return resolvePropertyReference(timezone.zoneId, objectData)
      ?? userTimezoneOverride;
  }

  return userTimezoneOverride;
}

function getBrowserLocale(): string {
  if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language;
  }
  return "en-US";
}
