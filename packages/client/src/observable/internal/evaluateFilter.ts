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

/**
 * Evaluates a where clause filter against a value.
 * This is a runtime evaluation function that handles different property types.
 */
export function evaluateFilter(
  f: PossibleWhereClauseFilters,
  realValue: any,
  expected: any,
  strict: boolean,
): boolean {
  switch (f) {
    case "$eq":
      return realValue === expected;
    case "$gt":
      return realValue > expected;
    case "$lt":
      return realValue < expected;
    case "$gte":
      return realValue >= expected;
    case "$lte":
      return realValue <= expected;
    case "$ne":
      return realValue !== expected;
    case "$in":
      return Array.isArray(expected) && expected.includes(realValue);
    case "$isNull":
      return realValue == null;
    case "$startsWith":
      return realValue.startsWith(expected);
    case "$contains":
    case "$containsAllTerms":
    case "$containsAllTermsInOrder":
    case "$containsAnyTerm":
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
