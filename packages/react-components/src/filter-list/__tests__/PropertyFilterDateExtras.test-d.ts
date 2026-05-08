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

/**
 * Type-only tests for {@link PropertyFilterDateExtras}. These do not run at
 * runtime — `tsc --noEmit` (the package's typecheck step) verifies that
 * `// @ts-expect-error` lines actually error. If the conditional intersection
 * stops gating `formatDate` to date-typed properties, the
 * `@ts-expect-error` will become a "no error" mismatch and typecheck fails.
 */

import type { PropertyFilterDateExtras } from "../FilterListItemApi.js";

/**
 * For datetime / timestamp, the extras include `formatDate` and `parseDate`
 * with the documented callback signatures.
 */
const dateExtras: PropertyFilterDateExtras<"timestamp"> = {
  formatDate: (d) => d.toISOString(),
  parseDate: (text) => {
    const t = new Date(text);
    return isNaN(t.getTime()) ? undefined : t;
  },
};
void dateExtras;

const datetimeExtras: PropertyFilterDateExtras<"datetime"> = {
  formatDate: (d) => d.toISOString(),
};
void datetimeExtras;

// For non-date property types, `formatDate` and `parseDate` are typed as
// `never`. Attempting to set them to a function must be a TS error.
const numberExtras: PropertyFilterDateExtras<"integer"> = {
  // @ts-expect-error formatDate is `never` for number-typed properties
  formatDate: (d: Date): string => d.toISOString(),
};
void numberExtras;

const stringExtras: PropertyFilterDateExtras<"string"> = {
  // @ts-expect-error parseDate is `never` for string-typed properties
  parseDate: (text: string): Date | undefined => new Date(text),
};
void stringExtras;

// Empty object literals are still allowed — both fields are optional on
// all property types (since the extras either provide them or type them
// as optional `never`).
const numberEmpty: PropertyFilterDateExtras<"integer"> = {};
void numberEmpty;
const stringEmpty: PropertyFilterDateExtras<"string"> = {};
void stringEmpty;
