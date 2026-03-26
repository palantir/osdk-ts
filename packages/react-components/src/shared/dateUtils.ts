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

export function formatDatetimeForInput(
  date: Date | undefined | null,
): string {
  if (date == null) return "";
  return `${formatDateForInput(date)}T${formatTime(date)}`;
}

/**
 * Parses a datetime-local input string (e.g. "2024-01-15T14:30") into a Date.
 * Delegates to `parseDateFromISO` since the parsing logic is identical for
 * string inputs — datetime-local strings already include the time component
 * and have no "Z" suffix, so `new Date()` parses them as local time.
 */
export function parseDatetimeFromInput(
  value: string | undefined | null,
): Date | undefined {
  if (!value) return undefined;
  return parseDateFromISO(value);
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

/** Formats a Date as "2024-06-15 14:30" — space-separated, more readable than T. */
export function formatDatetimeForDisplay(
  date: Date | undefined | null,
): string {
  if (date == null) return "";
  return `${formatDateForInput(date)} ${formatTime(date)}`;
}

/** Parses space-separated ("2024-06-15 14:30") or T-separated datetime strings. */
export function parseDatetimeFromDisplay(
  value: string | undefined | null,
): Date | undefined {
  if (!value) return undefined;
  const normalized = value.includes("T") ? value : value.replace(" ", "T");
  const date = new Date(normalized);
  return isNaN(date.getTime()) ? undefined : date;
}

export function parseDateFromISO(
  value: string | Date | undefined | null,
): Date | undefined {
  if (value == null) return undefined;
  if (value instanceof Date) return value;
  const date = new Date(value);
  return isNaN(date.getTime()) ? undefined : date;
}
