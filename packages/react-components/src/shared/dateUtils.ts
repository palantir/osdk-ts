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

/**
 * Date utilities for HTML date inputs.
 *
 * These functions operate on local time by design. HTML <input type="date">
 * returns and expects values in "YYYY-MM-DD" format without timezone info.
 *
 * `parseDateFromInput` appends "T00:00:00" (no "Z") so the date is parsed as
 * local midnight rather than UTC midnight. Without this, negative-offset
 * timezones (e.g. US timezones) would shift "2024-01-15" to Jan 14 locally.
 *
 * Consumers providing dates from an API (typically UTC) should handle
 * UTC-to-local conversion before passing values to these functions.
 */

export function formatDateForInput(date: Date | undefined | null): string {
  if (date == null) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Formats the time portion of a Date as "HH:mm". */
export function formatTime(date: Date): string {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function parseDateFromInput(
  value: string | undefined | null,
): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value + "T00:00:00");
  return isNaN(date.getTime()) ? undefined : date;
}

export function formatDateForDisplay(
  date: Date | undefined | null,
  fallback: string = "",
): string {
  if (date == null) return fallback;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Formats a Date as "2024-06-15 14:30" — space-separated, parsable, for text input editing. */
export function formatDatetimeForInput(
  date: Date | undefined | null,
): string {
  if (date == null) return "";
  return `${formatDateForInput(date)} ${formatTime(date)}`;
}

/**
 * Parses space-separated ("2024-06-15 14:30") or T-separated datetime strings.
 * Inverse of `formatDatetimeForInput`, which joins date and time with a space
 * for readability. Here we replace that space with "T" so `new Date()` parses
 * it as a local datetime (e.g. "2024-06-15T14:30").
 */
export function parseDatetimeFromInput(
  value: string | undefined | null,
): Date | undefined {
  if (!value) return undefined;
  const normalized = value.includes("T") ? value : value.replace(/\s/, "T");
  const date = new Date(normalized);
  return isNaN(date.getTime()) ? undefined : date;
}

/** Returns true if `date` falls within [min, max] (inclusive). */
export function isDateInRange(
  date: Date,
  min: Date | undefined,
  max: Date | undefined,
): boolean {
  if (min != null && date.getTime() < min.getTime()) return false;
  if (max != null && date.getTime() > max.getTime()) return false;
  return true;
}

export function parseDateFromISO(
  value: string | Date | undefined | null,
): Date | undefined {
  if (value == null) return undefined;
  if (value instanceof Date) return value;
  const date = new Date(value);
  return isNaN(date.getTime()) ? undefined : date;
}

/** Parses an "HH:mm" time string into hours and minutes. */
export function parseTimeString(
  timeString: string,
): { hours: number; minutes: number } {
  const [hoursStr, minutesStr] = timeString.split(":");
  const hours = parseInt(hoursStr ?? "0", 10);
  const minutes = parseInt(minutesStr ?? "0", 10);
  return {
    hours: isNaN(hours) ? 0 : hours,
    minutes: isNaN(minutes) ? 0 : minutes,
  };
}

/** Returns the "HH:mm" time value for a date, defaulting to "00:00" when null. */
export function getTimeValue(date: Date | null): string {
  return date != null ? formatTime(date) : "00:00";
}

/**
 * Identifier for an opt-in relative date range — the period the user wants
 * the filter to span, anchored at "now". Consumed by the date filter
 * shortcuts rail; emitting code converts the identifier into an absolute
 * `{ min, max }` Date pair via {@link getRelativeDateRange}.
 */
export type RelativeDatePeriod =
  | "past-hour"
  | "past-day"
  | "past-week"
  | "past-month"
  | "past-3-months"
  | "past-6-months"
  | "past-year"
  | "past-2-years";

const MS_IN_HOUR = 60 * 60 * 1000;
const MS_IN_DAY = 24 * MS_IN_HOUR;
const MS_IN_WEEK = 7 * MS_IN_DAY;

/**
 * Calendar-aware "subtract N months from `from`" that prevents month-end
 * rollover. For example, subtracting one month from Mar 31 returns the last
 * day of February (Feb 28 or Feb 29), not Mar 3 — which is what
 * `setMonth(month - 1)` would produce.
 */
function subtractCalendarMonths(from: Date, months: number): Date {
  const year = from.getFullYear();
  const month = from.getMonth();
  const day = from.getDate();
  const targetYear = year + Math.floor((month - months) / 12);
  const targetMonth = ((month - months) % 12 + 12) % 12;
  const lastDayOfTargetMonth = new Date(
    targetYear,
    targetMonth + 1,
    0,
  ).getDate();
  const clampedDay = Math.min(day, lastDayOfTargetMonth);
  return new Date(
    targetYear,
    targetMonth,
    clampedDay,
    from.getHours(),
    from.getMinutes(),
    from.getSeconds(),
    from.getMilliseconds(),
  );
}

/** Calendar-aware "subtract N years from `from`" preserving month-end. */
function subtractCalendarYears(from: Date, years: number): Date {
  return subtractCalendarMonths(from, years * 12);
}

/**
 * Returns an absolute `{ min, max }` Date range for the given relative
 * period, anchored at `now` (default: `new Date()`).
 *
 * Short periods (`past-hour`, `past-day`, `past-week`) subtract a fixed
 * number of milliseconds. Longer periods use calendar-aware arithmetic so
 * month-end and DST edges don't roll over (e.g. Mar 31 minus one month
 * stays in February).
 */
export function getRelativeDateRange(
  period: RelativeDatePeriod,
  now: Date = new Date(),
): { min: Date; max: Date } {
  const max = new Date(now.getTime());
  let min: Date;
  switch (period) {
    case "past-hour":
      min = new Date(max.getTime() - MS_IN_HOUR);
      break;
    case "past-day":
      min = new Date(max.getTime() - MS_IN_DAY);
      break;
    case "past-week":
      min = new Date(max.getTime() - MS_IN_WEEK);
      break;
    case "past-month":
      min = subtractCalendarMonths(max, 1);
      break;
    case "past-3-months":
      min = subtractCalendarMonths(max, 3);
      break;
    case "past-6-months":
      min = subtractCalendarMonths(max, 6);
      break;
    case "past-year":
      min = subtractCalendarYears(max, 1);
      break;
    case "past-2-years":
      min = subtractCalendarYears(max, 2);
      break;
  }
  return { min, max };
}

/** Human-readable label for a {@link RelativeDatePeriod} (English only). */
export function getRelativeDatePeriodLabel(p: RelativeDatePeriod): string {
  switch (p) {
    case "past-hour":
      return "Past hour";
    case "past-day":
      return "Past day";
    case "past-week":
      return "Past week";
    case "past-month":
      return "Past month";
    case "past-3-months":
      return "Past 3 months";
    case "past-6-months":
      return "Past 6 months";
    case "past-year":
      return "Past year";
    case "past-2-years":
      return "Past 2 years";
  }
}

/**
 * Default ordered list of relative date periods surfaced by the shortcut
 * rail when a consumer opts in with `dateShortcuts: true`.
 */
export const DEFAULT_RELATIVE_DATE_PERIODS: readonly RelativeDatePeriod[] = [
  "past-hour",
  "past-day",
  "past-week",
  "past-month",
  "past-3-months",
  "past-6-months",
  "past-year",
  "past-2-years",
];
