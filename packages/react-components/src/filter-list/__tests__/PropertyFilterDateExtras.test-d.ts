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

const datetimeExtras: PropertyFilterDateExtras<"datetime"> = {
  formatDate: (d) => d.toISOString(),
};
void datetimeExtras;

// For non-date property types, `formatDate` is typed as `never`. Setting
// it to a function must be a TS error.
const numberExtras: PropertyFilterDateExtras<"integer"> = {
  // @ts-expect-error formatDate is `never` for number-typed properties
  formatDate: (d: Date): string => d.toISOString(),
};
void numberExtras;

const stringExtras: PropertyFilterDateExtras<"string"> = {
  // @ts-expect-error formatDate is `never` for string-typed properties
  formatDate: (d: Date): string => d.toISOString(),
};
void stringExtras;

// Empty object literals are still allowed — `formatDate` is optional on
// all property types (either documented or typed as optional `never`).
const numberEmpty: PropertyFilterDateExtras<"integer"> = {};
void numberEmpty;
const stringEmpty: PropertyFilterDateExtras<"string"> = {};
void stringEmpty;

// For datetime / timestamp, `dateShortcuts` is allowed as a boolean or a
// custom DatePickerShortcut[].
const dateShortcutsBool: PropertyFilterDateExtras<"timestamp"> = {
  dateShortcuts: true,
};
void dateShortcutsBool;
const dateShortcutsArr: PropertyFilterDateExtras<"datetime"> = {
  dateShortcuts: [
    { label: "Last 6 hours", range: (now) => ({ min: now, max: now }) },
  ],
};
void dateShortcutsArr;

// For non-date property types, `dateShortcuts` is `never` — setting it must
// be a TS error.
const numberShortcuts: PropertyFilterDateExtras<"integer"> = {
  // @ts-expect-error dateShortcuts is `never` for number-typed properties
  dateShortcuts: true,
};
void numberShortcuts;
const stringShortcuts: PropertyFilterDateExtras<"string"> = {
  // @ts-expect-error dateShortcuts is `never` for string-typed properties
  dateShortcuts: true,
};
void stringShortcuts;

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
