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

import deepEqual from "fast-deep-equal";
import invariant from "tiny-invariant";
function is$and(whereClause) {
  if (process.env.NODE_ENV !== "production") {
    if ("$and" in whereClause) {
      !Array.isArray(whereClause.$and) ? process.env.NODE_ENV !== "production" ? invariant(false, "expected $and to be an array") : invariant(false) : void 0;
      !(Object.keys(whereClause).length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false, "expected only $and to be present") : invariant(false) : void 0;
    }
  }
  return "$and" in whereClause;
}
function is$or(whereClause) {
  if (process.env.NODE_ENV !== "production") {
    if ("$or" in whereClause) {
      !Array.isArray(whereClause.$or) ? process.env.NODE_ENV !== "production" ? invariant(false, "expected $or to be an array") : invariant(false) : void 0;
      !(Object.keys(whereClause).length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false, "expected only $or to be present") : invariant(false) : void 0;
    }
  }
  return "$or" in whereClause;
}
function is$not(whereClause) {
  if (process.env.NODE_ENV !== "production") {
    if ("$not" in whereClause) {
      !(Object.keys(whereClause).length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false, "expected only $not to be present") : invariant(false) : void 0;
    }
  }
  return "$not" in whereClause;
}
export function objectSortaMatchesWhereClause(o, whereClause, strict) {
  if (deepEqual({}, whereClause)) {
    return true;
  }
  if (is$and(whereClause)) {
    return whereClause.$and.every(w => objectSortaMatchesWhereClause(o, w, strict));
  }
  if (is$or(whereClause)) {
    return whereClause.$or.some(w => objectSortaMatchesWhereClause(o, w, strict));
  }
  if (is$not(whereClause)) {
    return !objectSortaMatchesWhereClause(o, whereClause.$not, strict);
  }
  return Object.entries(whereClause).every(([key, filter]) => {
    if (typeof filter === "object") {
      const realValue = o[key];
      const [f] = Object.keys(filter);
      const expected = filter[f];
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
          return expected.$in.includes(realValue);
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
            process.env.NODE_ENV !== "production" ? invariant(false, `Unknown where filter ${f}`) : invariant(false);
          }
          return !strict;
      }
    }
    if (key in o) {
      if (o[key] === filter) {
        return true;
      }
    }
    return false;
  });
}
//# sourceMappingURL=objectMatchesWhereClause.js.map