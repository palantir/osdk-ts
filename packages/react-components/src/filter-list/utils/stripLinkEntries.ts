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

import { REVERSE_LINK_KEY } from "./applyWhereClauseToObjectSet.js";

function isLinkEntry(value: unknown): boolean {
  return typeof value === "object"
    && value != null
    && REVERSE_LINK_KEY in value
    && typeof (value as Record<string, unknown>)[REVERSE_LINK_KEY] === "string";
}

function isEmptyClause(clause: Record<string, unknown>): boolean {
  return Object.keys(clause).length === 0;
}

/**
 * Returns a copy of `whereClause` with all link entries (values tagged with
 * `$reverseLink`) removed. Recurses into `$and`/`$or`/`$not` and elides empty
 * children so the resulting clause is shaped exactly like a property-only
 * `buildWhereClause` output. `hadLinkEntries` is `true` when at least one link
 * entry was removed anywhere in the tree.
 *
 * Used by direct-property facets to compute the "wider" scope for ghost-row
 * discovery, and by `useFilterListState` to emit a `WhereClause<Q>` that
 * matches the SDK type via `onFilterClauseChanged`.
 *
 * @internal
 */
export function stripLinkEntries(
  whereClause: Record<string, unknown>,
): { clause: Record<string, unknown>; hadLinkEntries: boolean } {
  if (Array.isArray((whereClause as { $and?: unknown }).$and)) {
    const children = (whereClause as { $and: Array<Record<string, unknown>> })
      .$and.map(stripLinkEntries);
    const nonEmpty = children
      .map((c) => c.clause)
      .filter((c) => !isEmptyClause(c));
    const hadLinkEntries = children.some((c) => c.hadLinkEntries);
    if (nonEmpty.length === 0) {
      return { clause: {}, hadLinkEntries };
    }
    if (nonEmpty.length === 1) {
      return { clause: nonEmpty[0], hadLinkEntries };
    }
    return { clause: { $and: nonEmpty }, hadLinkEntries };
  }
  if (Array.isArray((whereClause as { $or?: unknown }).$or)) {
    const children = (whereClause as { $or: Array<Record<string, unknown>> })
      .$or.map(stripLinkEntries);
    const nonEmpty = children
      .map((c) => c.clause)
      .filter((c) => !isEmptyClause(c));
    const hadLinkEntries = children.some((c) => c.hadLinkEntries);
    if (nonEmpty.length === 0) {
      return { clause: {}, hadLinkEntries };
    }
    if (nonEmpty.length === 1) {
      return { clause: nonEmpty[0], hadLinkEntries };
    }
    return { clause: { $or: nonEmpty }, hadLinkEntries };
  }
  if ("$not" in whereClause) {
    const inner = stripLinkEntries(
      (whereClause as { $not: Record<string, unknown> }).$not,
    );
    if (isEmptyClause(inner.clause)) {
      return { clause: {}, hadLinkEntries: inner.hadLinkEntries };
    }
    return {
      clause: { $not: inner.clause },
      hadLinkEntries: inner.hadLinkEntries,
    };
  }

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
