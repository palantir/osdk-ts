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
  isAndClause,
  isLinkEntry,
  isNotClause,
  isOrClause,
} from "./applyWhereClauseToObjectSet.js";

function isEmptyClause(clause: Record<string, unknown>): boolean {
  return Object.keys(clause).length === 0;
}

interface StripResult {
  clause: Record<string, unknown>;
  hadLinkEntries: boolean;
}

/**
 * Returns a copy of `whereClause` with all link entries (values tagged with
 * `$reverseLink`) removed. Recurses into `$and`/`$or`/`$not` and elides empty
 * children. `hadLinkEntries` is `true` when at least one link entry was
 * removed anywhere in the tree.
 */
export function stripLinkEntries(
  whereClause: Record<string, unknown>,
): StripResult {
  if (isAndClause(whereClause)) {
    return stripCombinator("$and", whereClause.$and);
  }
  if (isOrClause(whereClause)) {
    return stripCombinator("$or", whereClause.$or);
  }
  if (isNotClause(whereClause)) {
    return stripNotClause(whereClause.$not);
  }
  return stripLeaf(whereClause);
}

function stripNotClause(inner: Record<string, unknown>): StripResult {
  const stripped = stripLinkEntries(inner);
  if (isEmptyClause(stripped.clause)) {
    return { clause: {}, hadLinkEntries: stripped.hadLinkEntries };
  }
  return {
    clause: { $not: stripped.clause },
    hadLinkEntries: stripped.hadLinkEntries,
  };
}

function stripLeaf(whereClause: Record<string, unknown>): StripResult {
  let hadLinkEntries = false;
  const filtered: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(whereClause)) {
    if (isLinkEntry(value)) {
      hadLinkEntries = true;
      continue;
    }
    filtered[key] = value;
  }
  return { clause: filtered, hadLinkEntries };
}

function stripCombinator(
  op: "$and" | "$or",
  children: Array<Record<string, unknown>>,
): StripResult {
  const stripped = children.map(stripLinkEntries);
  const nonEmpty = stripped
    .map((c) => c.clause)
    .filter((c) => !isEmptyClause(c));
  const hadLinkEntries = stripped.some((c) => c.hadLinkEntries);
  if (nonEmpty.length === 0) {
    return { clause: {}, hadLinkEntries };
  }
  if (nonEmpty.length === 1) {
    return { clause: nonEmpty[0], hadLinkEntries };
  }
  return { clause: { [op]: nonEmpty }, hadLinkEntries };
}
