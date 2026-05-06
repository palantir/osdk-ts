/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import {
  addDays,
  addMonths,
  addYears,
  differenceInCalendarDays,
  format,
  startOfDay,
  startOfMonth,
  startOfYear,
} from "date-fns";
import type { HistogramBucket } from "./createHistogramBuckets.js";

export type DateHistogramGranularity = "day" | "month" | "year";

export interface DateHistogramData {
  buckets: Array<HistogramBucket<Date>>;
  /** Period label rendered as the bottom-center subtitle (e.g. "May 2020"). */
  subtitle: string;
  granularity: DateHistogramGranularity;
}

interface ValueCountPair {
  value: Date;
  count: number;
}

/**
 * Picks calendar-aligned histogram buckets for a date series.
 *
 * Granularity is chosen from the data span:
 *   span ≤ 31 days   → daily buckets, ticks "1" / "2" / ... / "31"
 *   span ≤ 365 days  → monthly buckets, ticks "Jan" / "Feb" / ...
 *   span >  365 days → yearly buckets, ticks "2020" / "2021" / ...
 *
 * The subtitle reflects the surrounding calendar context — e.g. "May 2020"
 * for a daily histogram inside one month, "2020" for a monthly histogram
 * inside one year. When the data straddles multiple periods (e.g. monthly
 * histogram across multiple years) the subtitle is empty so the per-bucket
 * tick labels stay self-describing.
 *
 * @param formatDate Optional callback used for the subtitle text in place of
 * the default date-fns format. Per-bucket `tickLabel` strings stay short
 * (number-only or 3-letter month) regardless of `formatDate`.
 */
export function createDateHistogramBuckets(
  pairs: ReadonlyArray<ValueCountPair>,
  range: { min: Date; max: Date },
  formatDate?: (date: Date) => string,
): DateHistogramData {
  if (pairs.length === 0) {
    return { buckets: [], subtitle: "", granularity: "day" };
  }

  const span = Math.max(
    0,
    differenceInCalendarDays(range.max, range.min),
  );

  const granularity: DateHistogramGranularity = span <= 31
    ? "day"
    : span <= 365
    ? "month"
    : "year";

  const buckets: Array<HistogramBucket<Date>> = [];

  if (granularity === "day") {
    const start = startOfDay(range.min);
    const dayCount = span + 1;
    const counts = new Array<number>(dayCount).fill(0);
    for (const { value, count } of pairs) {
      const idx = differenceInCalendarDays(value, start);
      if (idx >= 0 && idx < dayCount) {
        counts[idx] += count;
      }
    }
    for (let i = 0; i < dayCount; i++) {
      const min = addDays(start, i);
      const max = addDays(start, i + 1);
      buckets.push({
        min,
        max,
        count: counts[i],
        tickLabel: format(min, "d"),
      });
    }
  } else if (granularity === "month") {
    const start = startOfMonth(range.min);
    const end = startOfMonth(range.max);
    const months: Date[] = [];
    let cursor = start;
    while (cursor.getTime() <= end.getTime()) {
      months.push(cursor);
      cursor = addMonths(cursor, 1);
    }
    const counts = new Array<number>(months.length).fill(0);
    for (const { value, count } of pairs) {
      const monthStart = startOfMonth(value).getTime();
      const idx = months.findIndex((m) => m.getTime() === monthStart);
      if (idx >= 0) counts[idx] += count;
    }
    for (let i = 0; i < months.length; i++) {
      buckets.push({
        min: months[i],
        max: addMonths(months[i], 1),
        count: counts[i],
        tickLabel: format(months[i], "MMM"),
      });
    }
  } else {
    const start = startOfYear(range.min);
    const end = startOfYear(range.max);
    const years: Date[] = [];
    let cursor = start;
    while (cursor.getTime() <= end.getTime()) {
      years.push(cursor);
      cursor = addYears(cursor, 1);
    }
    const counts = new Array<number>(years.length).fill(0);
    for (const { value, count } of pairs) {
      const yearStart = startOfYear(value).getTime();
      const idx = years.findIndex((y) => y.getTime() === yearStart);
      if (idx >= 0) counts[idx] += count;
    }
    for (let i = 0; i < years.length; i++) {
      buckets.push({
        min: years[i],
        max: addYears(years[i], 1),
        count: counts[i],
        tickLabel: format(years[i], "yyyy"),
      });
    }
  }

  const subtitle = computeSubtitle(
    range.min,
    range.max,
    granularity,
    formatDate,
  );
  return { buckets, subtitle, granularity };
}

function computeSubtitle(
  rangeMin: Date,
  rangeMax: Date,
  granularity: DateHistogramGranularity,
  formatDate?: (date: Date) => string,
): string {
  if (granularity === "day") {
    // Daily within one month: "May 2020". Across months: just the year(s).
    const sameMonth = rangeMin.getFullYear() === rangeMax.getFullYear()
      && rangeMin.getMonth() === rangeMax.getMonth();
    if (sameMonth) {
      return formatDate ? formatDate(rangeMin) : format(rangeMin, "MMMM yyyy");
    }
    const sameYear = rangeMin.getFullYear() === rangeMax.getFullYear();
    if (sameYear) {
      return formatDate ? formatDate(rangeMin) : format(rangeMin, "yyyy");
    }
    return "";
  }
  if (granularity === "month") {
    const sameYear = rangeMin.getFullYear() === rangeMax.getFullYear();
    if (sameYear) {
      return formatDate ? formatDate(rangeMin) : format(rangeMin, "yyyy");
    }
    return "";
  }
  return "";
}
