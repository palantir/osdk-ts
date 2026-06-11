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
import { isNumericStringType } from "./resolvePropertyType.js";

/**
 * Evaluates a where clause filter against a value.
 * This is a runtime evaluation function that handles different property types.
 *
 * @param propertyType - the declared type of the property being filtered, used
 * to compare decimal/long (wire-encoded as strings) numerically rather than
 * lexicographically for the ordered operators. Undefined for properties whose
 * type can't be resolved, in which case the native comparison is used.
 */
export function evaluateFilter(
  f: PossibleWhereClauseFilters,
  realValue: any,
  expected: any,
  strict: boolean,
  propertyType?: string,
): boolean {
  switch (f) {
    case "$eq": {
      const c = numericCompare(realValue, expected, propertyType);
      return c != null ? c === 0 : realValue === expected;
    }
    case "$gt": {
      const c = numericCompare(realValue, expected, propertyType);
      return c != null ? c > 0 : realValue > expected;
    }
    case "$lt": {
      const c = numericCompare(realValue, expected, propertyType);
      return c != null ? c < 0 : realValue < expected;
    }
    case "$gte": {
      const c = numericCompare(realValue, expected, propertyType);
      return c != null ? c >= 0 : realValue >= expected;
    }
    case "$lte": {
      const c = numericCompare(realValue, expected, propertyType);
      return c != null ? c <= 0 : realValue <= expected;
    }
    case "$ne": {
      const c = numericCompare(realValue, expected, propertyType);
      return c != null ? c !== 0 : realValue !== expected;
    }
    case "$in":
      if (!Array.isArray(expected)) {
        return false;
      }
      if (isNumericStringType(propertyType)) {
        return expected.some((e) => {
          const c = numericCompare(realValue, e, propertyType);
          return c != null ? c === 0 : realValue === e;
        });
      }
      return expected.includes(realValue);
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
 * Returns the numeric ordering (-1/0/1) of two values when the property is a
 * decimal/long, or undefined when the native comparison operators should be
 * used instead (real strings, dates, or values that aren't numbers/strings).
 *
 * Real (wire) decimal/long values arrive as strings, but public number filters
 * (e.g. `{ long: { $gt: 5 } }`) supply JS numbers, so both operands are
 * normalized to their numeric-string form before the exact comparison. When
 * either operand can't be normalized to a numeric string (a non-numeric or
 * empty value, or a non-finite number), this returns undefined so the caller
 * falls back to native comparison -- which keeps the old strict `===`/`!==`
 * semantics for $eq/$ne rather than coercing junk (Number("") === 0) into a
 * wrong numeric match.
 *
 * Integer number literals are stringified via BigInt so even huge values stay
 * in plain decimal form and on the exact comparison path; a fractional number
 * literal at a magnitude that JS prints in exponent form (|x| < 1e-6) still
 * falls back to double-precision Number() comparison.
 */
function numericCompare(
  realValue: unknown,
  expected: unknown,
  propertyType: string | undefined,
): number | undefined {
  if (!isNumericStringType(propertyType)) {
    return undefined;
  }
  const r = toComparableNumericString(realValue);
  const e = toComparableNumericString(expected);
  if (r == null || e == null) {
    return undefined;
  }
  return compareNumericStrings(r, e);
}

/**
 * Normalizes a filter/real value to the numeric-string form
 * `compareNumericStrings` expects, or undefined when the value isn't a usable
 * number so the caller falls back to native comparison.
 *
 * - Strings are accepted only when they actually denote a finite number; empty,
 *   whitespace, and non-numeric strings yield undefined (rather than being
 *   coerced, e.g. Number("") === 0, into a wrong match on a numeric column).
 * - Numbers must be finite. Integers are stringified via BigInt so large values
 *   (e.g. 1e21) stay in plain decimal form instead of the exponent notation
 *   String() would emit, which would bypass the exact BigInt comparison path.
 */
function toComparableNumericString(value: unknown): string | undefined {
  if (typeof value === "string") {
    return value.trim() !== "" && Number.isFinite(Number(value))
      ? value
      : undefined;
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      return undefined;
    }
    return Number.isInteger(value) ? BigInt(value).toString() : String(value);
  }
  return undefined;
}
