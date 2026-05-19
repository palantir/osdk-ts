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

const KNOWN_TOP_LEVEL_OPS = new Set(["$and", "$or", "$not"]);

interface LinkEntry {
  [REVERSE_LINK_KEY]: string;
  [key: string]: unknown;
}

export function isLinkEntry(value: unknown): value is LinkEntry {
  if (typeof value !== "object" || value == null) {
    return false;
  }
  if (!(REVERSE_LINK_KEY in value)) {
    return false;
  }
  return typeof (value as { [REVERSE_LINK_KEY]: unknown })[REVERSE_LINK_KEY]
    === "string";
}

export function isAndClause(
  value: Record<string, unknown>,
): value is { $and: Array<Record<string, unknown>> } {
  return Array.isArray((value as { $and?: unknown }).$and);
}

export function isOrClause(
  value: Record<string, unknown>,
): value is { $or: Array<Record<string, unknown>> } {
  return Array.isArray((value as { $or?: unknown }).$or);
}

export function isNotClause(
  value: Record<string, unknown>,
): value is { $not: Record<string, unknown> } {
  const inner = (value as { $not?: unknown }).$not;
  return typeof inner === "object" && inner != null;
}

/**
 * Walks an extended where-clause tree and composes a narrowed `ObjectSet<Q>`.
 * Recognized clause shapes:
 *
 * - `{ $and: [...] }` → `intersect`
 * - `{ $or: [...] }` → `union`
 * - `{ $not: ... }` → `subtract`
 * - property entry `{ key: filter }` → `.where({ key: filter })`
 * - link entry `{ [linkName]: { $reverseLink: rev, ...inner } }` →
 *   `.pivotTo(linkName).where(inner).pivotTo(rev)`
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
    return applyCombinator(
      base,
      whereClause.$and,
      (first, rest) => first.intersect(...rest),
    );
  }
  if (isOrClause(whereClause)) {
    return applyCombinator(
      base,
      whereClause.$or,
      (first, rest) => first.union(...rest),
    );
  }
  if (isNotClause(whereClause)) {
    return base.subtract(applyInner(base, whereClause.$not));
  }

  const { propertyEntries, linkEntries } = splitEntries(whereClause);
  const components: ObjectSet<Q>[] = [];
  if (Object.keys(propertyEntries).length > 0) {
    components.push(base.where(propertyEntries as WhereClause<Q>));
  }
  for (const [linkName, entry] of linkEntries) {
    components.push(buildLinkComponent(base, linkName, entry));
  }
  return intersectAll(base, components);
}

function splitEntries(
  whereClause: Record<string, unknown>,
): {
  propertyEntries: Record<string, unknown>;
  linkEntries: Array<[string, LinkEntry]>;
} {
  const propertyEntries: Record<string, unknown> = {};
  const linkEntries: Array<[string, LinkEntry]> = [];
  for (const [key, value] of Object.entries(whereClause)) {
    if (isLinkEntry(value)) {
      linkEntries.push([key, value]);
      continue;
    }
    if (key.startsWith("$") && !KNOWN_TOP_LEVEL_OPS.has(key)) {
      // eslint-disable-next-line no-console
      console.warn(
        `[FilterList] applyWhereClauseToObjectSet ignoring unrecognized top-level operator "${key}"`,
      );
      continue;
    }
    propertyEntries[key] = value;
  }
  return { propertyEntries, linkEntries };
}

function buildLinkComponent<Q extends ObjectTypeDefinition>(
  base: ObjectSet<Q>,
  linkName: string,
  entry: LinkEntry,
): ObjectSet<Q> {
  const { [REVERSE_LINK_KEY]: reverseLink, ...innerWhere } = entry;
  const linked = base.pivotTo(linkName as LinkNames<Q>) as ObjectSet<
    ObjectTypeDefinition
  >;
  const filtered = applyInner(linked, innerWhere);
  // Cast assumes reverseLink resolves back to Q. The reverseLinkName type
  // doesn't constrain the target — misconfiguration errors at SDK runtime,
  // not compile time.
  return filtered.pivotTo(
    reverseLink as LinkNames<ObjectTypeDefinition>,
  ) as ObjectSet<Q>;
}

function intersectAll<Q extends ObjectTypeDefinition>(
  base: ObjectSet<Q>,
  components: ObjectSet<Q>[],
): ObjectSet<Q> {
  if (components.length === 0) {
    return base;
  }
  if (components.length === 1) {
    return components[0];
  }
  const [first, ...rest] = components;
  return first.intersect(...rest);
}

function applyCombinator<Q extends ObjectTypeDefinition>(
  base: ObjectSet<Q>,
  children: Array<Record<string, unknown>>,
  combine: (first: ObjectSet<Q>, rest: ObjectSet<Q>[]) => ObjectSet<Q>,
): ObjectSet<Q> {
  if (children.length === 0) {
    return base;
  }
  if (children.length === 1) {
    return applyInner(base, children[0]);
  }
  const composed = children.map((c) => applyInner(base, c));
  const [first, ...rest] = composed;
  return combine(first, rest);
}
