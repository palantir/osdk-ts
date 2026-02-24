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

export function formatDateForInput(date: Date | undefined): string {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function parseDateFromInput(value: string): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value + "T00:00:00");
  return isNaN(date.getTime()) ? undefined : date;
}

export function formatDateForDisplay(
  date: Date | undefined,
  fallback: string = "",
): string {
  if (!date) return fallback;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function parseDateFromISO(
  value: string | Date | undefined | null,
): Date | undefined {
  if (value == null) return undefined;
  if (value instanceof Date) return value;
  const date = new Date(value);
  return isNaN(date.getTime()) ? undefined : date;
}
