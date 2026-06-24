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

import type { PossibleWhereClauseFilters } from "@osdk/api";
import invariant from "tiny-invariant";
import { compareNumericStrings } from "./compareNumericStrings.js";
import { isStringEncodedNumericType } from "./resolvePropertyType.js";

/**
 * Evaluates a where clause filter against a value.
 * This is a runtime evaluation function that handles different property types.
 */
export function evaluateFilter(
  f: PossibleWhereClauseFilters,
  realValue: any,
  expected: any,
  strict: boolean,
  // Declared property type (e.g. "long"/"decimal"). When it's a string-encoded
  // numeric type, value comparisons route through compareNumericStrings so they
  // compare by value rather than lexicographically/precision-sensitively.
  propertyType?: string,
): boolean {
  // `long`/`decimal` arrive over the wire as strings, so the value-comparison
  // filters must compare them by value rather than lexicographically ("10" <
  // "2") and precision-sensitively ("5.30" !== "5.3"). `numeric` selects that
  // path per operator below; keeping a single switch means a new filter only
  // has to be handled in one place.
  const numeric = isStringEncodedNumericType(propertyType);
  switch (f) {
    case "$eq":
      return numeric
        ? numericCompare(realValue, expected) === 0
        : realValue === expected;
    case "$gt":
      return numeric
        ? numericCompare(realValue, expected) > 0
        : realValue > expected;
    case "$lt":
      return numeric
        ? numericCompare(realValue, expected) < 0
        : realValue < expected;
    case "$gte":
      return numeric
        ? numericCompare(realValue, expected) >= 0
        : realValue >= expected;
    case "$lte":
      return numeric
        ? numericCompare(realValue, expected) <= 0
        : realValue <= expected;
    case "$ne":
      return numeric
        ? numericCompare(realValue, expected) !== 0
        : realValue !== expected;
    case "$in":
      return Array.isArray(expected)
        && (numeric
          ? expected.some(e => numericCompare(realValue, e) === 0)
          : expected.includes(realValue));
    case "$isNull":
      return realValue == null;
    case "$startsWith":
      return typeof realValue === "string" && realValue.startsWith(expected);
    case "$contains":
    case "$containsAllTerms":
    case "$containsAllTermsInOrder":
    case "$containsAnyTerm":
    case "$interval":
    case "$matchesRegex":
    case "$intersects":
    case "$within":
      // for these we will strictly say no and loosely say yes
      // so that they don't change things now but may if reloaded
      return !strict;

    default:
      // same thing here as the above cases but we will catch the
      // exhaustive check in dev
      if (process.env.NODE_ENV !== "production") {
        const exhaustive: never = f;
        invariant(false, `Unknown where filter ${f}`);
      }
      return !strict;
  }
}

/**
 * Compares two values from a string-encoded numeric column by value, returning
 * the usual comparator sign (negative / 0 / positive). Coerces via String() so
 * a cross-type expected (e.g. `$eq("10", 10)`) still compares numerically.
 *
 * Returns NaN when either side has no value (null/undefined). NaN is
 * incomparable, so every ordered comparison against it is false and `=== 0` is
 * false, while `!== 0` is true -- i.e. a missing value matches nothing and is
 * "not equal" to a present one, with no special-casing needed at the call site.
 */
function numericCompare(a: unknown, b: unknown): number {
  if (a == null || b == null) {
    return NaN;
  }
  return compareNumericStrings(String(a), String(b));
}
