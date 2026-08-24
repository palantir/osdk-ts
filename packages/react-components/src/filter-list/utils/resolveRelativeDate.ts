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

import type { RelativeDateBound } from "../FilterListItemApi.js";

/**
 * Resolves a single {@link RelativeDateBound} to an absolute `Date`.
 *
 * @param bound     The relative bound to resolve.
 * @param endOfDay  When `true`, sets time to 23:59:59.999 (inclusive upper
 *                  bound). When `false` (default), sets time to 00:00:00.000.
 * @param now       Reference point (defaults to `new Date()`). Injectable for
 *                  deterministic tests.
 */
export function resolveRelativeDateBound(
  bound: RelativeDateBound,
  endOfDay: boolean = false,
  now: Date = new Date(),
): Date {
  const result = new Date(now);
  const sign = bound.direction === "ago" ? -1 : 1;

  switch (bound.unit) {
    case "days":
      result.setDate(result.getDate() + sign * bound.count);
      break;
    case "weeks":
      result.setDate(result.getDate() + sign * bound.count * 7);
      break;
    case "months":
      result.setMonth(result.getMonth() + sign * bound.count);
      break;
    case "years":
      result.setFullYear(result.getFullYear() + sign * bound.count);
      break;
  }

  if (endOfDay) {
    result.setHours(23, 59, 59, 999);
  } else {
    result.setHours(0, 0, 0, 0);
  }

  return result;
}

/**
 * Produces a human-readable label for a single {@link RelativeDateBound}.
 *
 * Examples:
 * - `{ count: 0, unit: "days", direction: "ago" }` → `"Today"`
 * - `{ count: 7, unit: "days", direction: "ago" }` → `"7 days ago"`
 * - `{ count: 1, unit: "months", direction: "fromNow" }` → `"1 month from now"`
 */
export function formatRelativeBound(bound: RelativeDateBound): string {
  if (bound.count === 0) {
    return "Today";
  }

  // Singularize the unit label when count is 1 (e.g. "1 month ago").
  const unitLabel =
    bound.count === 1 ? bound.unit.replace(/s$/u, "") : bound.unit;

  const directionLabel = bound.direction === "ago" ? "ago" : "from now";

  return `${bound.count} ${unitLabel} ${directionLabel}`;
}
