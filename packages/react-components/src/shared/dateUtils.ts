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

import { subDays, subHours, subMonths, subWeeks, subYears } from "date-fns";

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
 * A date range represented as a start/end tuple. Either element may be
 * `null` when the range is partially selected.
 */
export type DateRange = readonly [Date | null, Date | null];

/**
 * Internal catalog of built-in relative periods used to construct
 * {@link DEFAULT_DATE_SHORTCUTS}. Labels follow Workshop's relative-range
 * wording. Consumers customize via {@link DatePickerShortcut}.
 */
type RelativeDatePeriod = keyof typeof RELATIVE_DATE_PERIODS;

const RELATIVE_DATE_PERIODS = {
  "past-hour": {
    label: "Past hour",
    subtract: (d: Date): Date => subHours(d, 1),
  },
  "past-day": {
    label: "Past 24 hours",
    subtract: (d: Date): Date => subDays(d, 1),
  },
  "past-week": {
    label: "Past week",
    subtract: (d: Date): Date => subWeeks(d, 1),
  },
  "past-month": {
    label: "Past month",
    subtract: (d: Date): Date => subMonths(d, 1),
  },
  "past-3-months": {
    label: "Past 3 months",
    subtract: (d: Date): Date => subMonths(d, 3),
  },
  "past-6-months": {
    label: "Past 6 months",
    subtract: (d: Date): Date => subMonths(d, 6),
  },
  "past-year": {
    label: "Past year",
    subtract: (d: Date): Date => subYears(d, 1),
  },
  "past-2-years": {
    label: "Past 2 years",
    subtract: (d: Date): Date => subYears(d, 2),
  },
} as const;

/** Returns the date for the given built-in period, anchored at now. */
function getRelativeDate(
  period: RelativeDatePeriod,
  now: Date = new Date(),
): Date {
  return RELATIVE_DATE_PERIODS[period].subtract(new Date(now.getTime()));
}

/** Returns the [start, end] range for the given built-in period, anchored at now. */
function getRelativeDateRange(
  period: RelativeDatePeriod,
  now: Date = new Date(),
): DateRange {
  const max = new Date(now.getTime());
  return [RELATIVE_DATE_PERIODS[period].subtract(max), max];
}

const DEFAULT_RELATIVE_DATE_PERIODS: readonly RelativeDatePeriod[] = [
  "past-hour",
  "past-day",
  "past-week",
  "past-month",
  "past-3-months",
  "past-6-months",
  "past-year",
  "past-2-years",
];

/**
 * A user-defined shortcut for a single-date picker. The picker renders a
 * button labeled {@link label}; clicking it computes a date from the current
 * time (wall-clock time stripped for date-only pickers).
 */
export interface DatePickerShortcut {
  /** Text shown on the shortcut button. */
  label: string;
  /** Computes the single date this shortcut selects, given the current time. */
  date: (now: Date) => Date;
}

/**
 * A user-defined shortcut for a date-range picker. The picker renders a button
 * labeled {@link label}; clicking it computes a {@link DateRange} and applies
 * both bounds at once.
 */
export interface DateRangePickerShortcut {
  /** Text shown on the shortcut button. */
  label: string;
  /** Computes the date range this shortcut selects, given the current time. */
  dateRange: (now: Date) => DateRange;
}

/**
 * Built-in single-date shortcuts used when a single-date picker's
 * `dateShortcuts: true`. Exported so consumers can spread and extend them,
 * e.g. `[...DEFAULT_DATE_SHORTCUTS, { label: "Last 6 hours", date }]`.
 */
export const DEFAULT_DATE_SHORTCUTS: readonly DatePickerShortcut[] =
  DEFAULT_RELATIVE_DATE_PERIODS.map((period) => ({
    label: RELATIVE_DATE_PERIODS[period].label,
    date: (now: Date) => getRelativeDate(period, now),
  }));

/**
 * Built-in range shortcuts used when a date-range picker's
 * `dateShortcuts: true`. Exported so consumers can spread and extend them,
 * e.g.
 * `[...DEFAULT_DATE_RANGE_SHORTCUTS, { label: "Last 6 hours", dateRange }]`.
 */
export const DEFAULT_DATE_RANGE_SHORTCUTS: readonly DateRangePickerShortcut[] =
  DEFAULT_RELATIVE_DATE_PERIODS.map((period) => ({
    label: RELATIVE_DATE_PERIODS[period].label,
    dateRange: (now: Date) => getRelativeDateRange(period, now),
  }));

/**
 * Resolves a single-date `dateShortcuts` prop to a shortcut list, or
 * `undefined` to hide the rail. `true` yields {@link DEFAULT_DATE_SHORTCUTS}; a
 * non-empty array is returned as-is; `false` / empty array / `undefined` hide
 * the rail.
 */
export function resolveDateShortcuts(
  prop: boolean | DatePickerShortcut[] | undefined,
): readonly DatePickerShortcut[] | undefined {
  if (prop === true) {
    return DEFAULT_DATE_SHORTCUTS;
  }
  if (Array.isArray(prop) && prop.length > 0) {
    return prop;
  }
  return undefined;
}

/**
 * Resolves a date-range `dateShortcuts` prop to a shortcut list, or `undefined`
 * to hide the rail. `true` yields {@link DEFAULT_DATE_RANGE_SHORTCUTS}; a
 * non-empty array is returned as-is; `false` / empty array / `undefined` hide
 * the rail.
 */
export function resolveDateRangeShortcuts(
  prop: boolean | DateRangePickerShortcut[] | undefined,
): readonly DateRangePickerShortcut[] | undefined {
  if (prop === true) {
    return DEFAULT_DATE_RANGE_SHORTCUTS;
  }
  if (Array.isArray(prop) && prop.length > 0) {
    return prop;
  }
  return undefined;
}
