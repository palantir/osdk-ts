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

/** Type-only tests for {@link PropertyFilterDateExtras}; verified by tsc. */

import type { PropertyFilterDateExtras } from "../FilterListItemApi.js";

// For datetime / timestamp, the extras include `formatDate`.
const dateExtras: PropertyFilterDateExtras<"timestamp"> = {
  formatDate: (d) => d.toISOString(),
};
void dateExtras;

// For non-date property types, `formatDate` is typed as `never`. Setting
// it to a function must be a TS error.
const numberExtras: PropertyFilterDateExtras<"integer"> = {
  // @ts-expect-error formatDate is `never` for number-typed properties
  formatDate: (d: Date): string => d.toISOString(),
};
void numberExtras;

// Empty object literals are still allowed — `formatDate` is optional on
// all property types (either documented or typed as optional `never`).
const numberEmpty: PropertyFilterDateExtras<"integer"> = {};
void numberEmpty;

// DATE_RANGE accepts a boolean or a custom DateRangePickerShortcut[] (range).
const rangeShortcutsBool: PropertyFilterDateExtras<"timestamp", "DATE_RANGE"> =
  {
    dateShortcuts: true,
  };
void rangeShortcutsBool;
const rangeShortcutsArr: PropertyFilterDateExtras<"datetime", "DATE_RANGE"> = {
  dateShortcuts: [
    { label: "Last 6 hours", dateRange: (now) => [now, now] },
  ],
};
void rangeShortcutsArr;

// A single-date-shaped shortcut is rejected for DATE_RANGE.
const wrongRangeShortcut: PropertyFilterDateExtras<"timestamp", "DATE_RANGE"> =
  {
    // @ts-expect-error DATE_RANGE shortcuts use `dateRange`, not `date`
    dateShortcuts: [{ label: "Yesterday", date: (now: Date) => now }],
  };
void wrongRangeShortcut;

// SINGLE_DATE has no shortcut rail (matches Workshop); dateShortcuts is `never`.
const singleDateShortcuts: PropertyFilterDateExtras<
  "timestamp",
  "SINGLE_DATE"
> = {
  // @ts-expect-error SINGLE_DATE does not support dateShortcuts
  dateShortcuts: true,
};
void singleDateShortcuts;

// For non-date property types, `dateShortcuts` is `never` — setting it must
// be a TS error.
const numberShortcuts: PropertyFilterDateExtras<"integer"> = {
  // @ts-expect-error dateShortcuts is `never` for number-typed properties
  dateShortcuts: true,
};
void numberShortcuts;

// dateShortcuts is gated to DATE_RANGE / SINGLE_DATE filter components.
const multiDateShortcuts: PropertyFilterDateExtras<"timestamp", "MULTI_DATE"> =
  {
    // @ts-expect-error dateShortcuts is `never` for MULTI_DATE filter component
    dateShortcuts: true,
  };
void multiDateShortcuts;

const timelineShortcuts: PropertyFilterDateExtras<"timestamp", "TIMELINE"> = {
  // @ts-expect-error dateShortcuts is `never` for TIMELINE filter component
  dateShortcuts: true,
};
void timelineShortcuts;
