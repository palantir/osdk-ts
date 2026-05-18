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

import type {
  LinkNames,
  ObjectSet,
  ObjectTypeDefinition,
  WhereClause,
} from "@osdk/api";

export const REVERSE_LINK_KEY = "$reverseLink";

interface LinkEntry {
  [REVERSE_LINK_KEY]: string;
  [key: string]: unknown;
}

function isLinkEntry(value: unknown): value is LinkEntry {
  return typeof value === "object"
    && value != null
    && REVERSE_LINK_KEY in value
    && typeof (value as Record<string, unknown>)[REVERSE_LINK_KEY] === "string";
}

function isAndClause(
  value: Record<string, unknown>,
): value is { $and: unknown[] } {
  return Array.isArray((value as { $and?: unknown }).$and);
}

function isOrClause(
  value: Record<string, unknown>,
): value is { $or: unknown[] } {
  return Array.isArray((value as { $or?: unknown }).$or);
}

function isNotClause(
  value: Record<string, unknown>,
): value is { $not: Record<string, unknown> } {
  return "$not" in value;
}

/**
 * Walks an extended where-clause tree and composes a narrowed `ObjectSet<Q>`
 * from `objectSet`. Recognized clause shapes:
 *
 * - `{ $and: [...] }` → `intersect`
 * - `{ $or: [...] }` → `union`
 * - `{ $not: ... }` → `subtract`
 * - property entry `{ key: filter }` → `.where({ key: filter })`
 * - link entry `{ [linkName]: { $reverseLink: rev, ...inner } }` →
 *   `.pivotTo(linkName).where(inner).pivotTo(rev)`
 *
 * Multiple property entries at the same level are combined into a single
 * `.where()` call; multiple link entries each produce their own pivot
 * composition; the results are `.intersect()`-ed.
 *
 * Used by FilterList to apply per-filter excluding-self clauses (which may
 * include link entries) to a base `ObjectSet` without requiring SDK changes.
 * Link entries carry the `$reverseLink` sentinel naming the inverse link the
 * helper uses to pivot back to `Q`.
 *
 * @internal
 */
export function applyWhereClauseToObjectSet<Q extends ObjectTypeDefinition>(
  objectSet: ObjectSet<Q>,
  whereClause: Record<string, unknown>,
): ObjectSet<Q> {
  return applyInner(objectSet, whereClause);
}

function applyInner<Q extends ObjectTypeDefinition>(
  base: ObjectSet<Q>,
  whereClause: Record<string, unknown>,
): ObjectSet<Q> {
  if (isAndClause(whereClause)) {
    const children = whereClause.$and as Array<Record<string, unknown>>;
    if (children.length === 0) {
      return base;
    }
    if (children.length === 1) {
      return applyInner(base, children[0]);
    }
    const composed = children.map((c) => applyInner(base, c));
    const [first, ...rest] = composed;
    return first.intersect(...rest);
  }

  if (isOrClause(whereClause)) {
    const children = whereClause.$or as Array<Record<string, unknown>>;
    if (children.length === 0) {
      return base;
    }
    if (children.length === 1) {
      return applyInner(base, children[0]);
    }
    const composed = children.map((c) => applyInner(base, c));
    const [first, ...rest] = composed;
    return first.union(...rest);
  }

  if (isNotClause(whereClause)) {
    const excluded = applyInner(base, whereClause.$not);
    return base.subtract(excluded);
  }

  const propertyEntries: Record<string, unknown> = {};
  const linkEntries: Array<[string, LinkEntry]> = [];

  for (const [key, value] of Object.entries(whereClause)) {
    if (isLinkEntry(value)) {
      linkEntries.push([key, value]);
    } else {
      propertyEntries[key] = value;
    }
  }

  const components: ObjectSet<Q>[] = [];

  if (Object.keys(propertyEntries).length > 0) {
    components.push(base.where(propertyEntries as WhereClause<Q>));
  }

  for (const [linkName, value] of linkEntries) {
    const { [REVERSE_LINK_KEY]: reverseLink, ...innerWhere } = value;
    const linked = base.pivotTo(linkName as LinkNames<Q>) as ObjectSet<
      ObjectTypeDefinition
    >;
    const filtered = applyInner(linked, innerWhere);
    const back = filtered.pivotTo(
      reverseLink as LinkNames<ObjectTypeDefinition>,
    ) as ObjectSet<Q>;
    components.push(back);
  }

  if (components.length === 0) {
    return base;
  }
  if (components.length === 1) {
    return components[0];
  }
  const [first, ...rest] = components;
  return first.intersect(...rest);
}
