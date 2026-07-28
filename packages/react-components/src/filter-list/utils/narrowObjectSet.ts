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

import type { ObjectSet, ObjectTypeDefinition, WhereClause } from "@osdk/api";

import type { LinkedFilter } from "../types/LinkedFilterTypes.js";

export function narrowObjectSet<Q extends ObjectTypeDefinition>(
  objectSet: ObjectSet<Q>,
  whereClause: WhereClause<Q>,
  linkedFilters: ReadonlyArray<LinkedFilter<Q>>
): ObjectSet<Q> {
  let narrowed =
    Object.keys(whereClause).length === 0
      ? objectSet
      : objectSet.where(whereClause);
  for (const filter of linkedFilters) {
    narrowed = narrowed.intersect(applyLinkedFilter(narrowed, filter));
  }
  return narrowed;
}

function applyLinkedFilter<Q extends ObjectTypeDefinition>(
  base: ObjectSet<Q>,
  filter: LinkedFilter<Q>
): ObjectSet<Q> {
  // reverseLinkName's pointing back to Q is a semantic invariant we can't encode
  // in the type system, so the final result is cast to ObjectSet<Q>.
  return base
    .pivotTo(filter.linkName)
    .where(filter.innerWhere)
    .pivotTo(filter.reverseLinkName) as ObjectSet<Q>;
}

export function computeDualScopes<Q extends ObjectTypeDefinition>(
  objectSet: ObjectSet<Q> | undefined,
  whereClause: WhereClause<Q>,
  linkedFilters: ReadonlyArray<LinkedFilter<Q>>,
  showFilteredOutValues: boolean | undefined
): {
  scoped: ObjectSet<Q> | undefined;
  emptySource: ObjectSet<Q> | undefined;
} {
  if (objectSet == null) {
    return { scoped: undefined, emptySource: undefined };
  }
  const scoped = narrowObjectSet(objectSet, whereClause, linkedFilters);
  if (!showFilteredOutValues || linkedFilters.length === 0) {
    return { scoped, emptySource: undefined };
  }
  return { scoped, emptySource: narrowObjectSet(objectSet, whereClause, []) };
}
