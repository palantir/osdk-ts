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
  DerivedProperty,
  ObjectSet,
  ObjectTypeDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { LinkedFilter } from "../types/LinkedFilterTypes.js";

/**
 * A filter that narrows the object set using runtime derived properties (RDPs).
 * Unlike a plain `WhereClause<Q>` or a {@link LinkedFilter}, this carries the
 * `withProperties` clause that introduces the derived property names, plus a
 * `where` that references those names. Applied as
 * `objectSet.withProperties(withProperties).where(where)`.
 *
 * Use this for predicates that cannot be expressed without an aggregation over
 * a link — e.g. "the latest linked row of a given kind has value X".
 */
export interface DerivedNarrowing<Q extends ObjectTypeDefinition> {
  withProperties: DerivedProperty.Clause<Q>;
  where: WhereClause<Q, Record<string, SimplePropertyDef>>;
}

export function narrowObjectSet<Q extends ObjectTypeDefinition>(
  objectSet: ObjectSet<Q>,
  whereClause: WhereClause<Q>,
  linkedFilters: ReadonlyArray<LinkedFilter<Q>>,
  derivedNarrowings?: ReadonlyArray<DerivedNarrowing<Q>>,
): ObjectSet<Q> {
  let narrowed = Object.keys(whereClause).length === 0
    ? objectSet
    : objectSet.where(whereClause);
  for (const filter of linkedFilters) {
    narrowed = narrowed.intersect(applyLinkedFilter(narrowed, filter));
  }
  if (derivedNarrowings != null && derivedNarrowings.length > 0) {
    narrowed = applyDerivedNarrowings(narrowed, derivedNarrowings);
  }
  return narrowed;
}

function applyLinkedFilter<Q extends ObjectTypeDefinition>(
  base: ObjectSet<Q>,
  filter: LinkedFilter<Q>,
): ObjectSet<Q> {
  // reverseLinkName's pointing back to Q is a semantic invariant we can't encode
  // in the type system, so the final result is cast to ObjectSet<Q>.
  return base
    .pivotTo(filter.linkName)
    .where(filter.innerWhere)
    .pivotTo(filter.reverseLinkName) as ObjectSet<Q>;
}

function applyDerivedNarrowings<Q extends ObjectTypeDefinition>(
  base: ObjectSet<Q>,
  narrowings: ReadonlyArray<DerivedNarrowing<Q>>,
): ObjectSet<Q> {
  let mergedProperties: DerivedProperty.Clause<Q> = {};
  const wheres: Array<WhereClause<Q, Record<string, SimplePropertyDef>>> = [];
  for (const narrowing of narrowings) {
    mergedProperties = { ...mergedProperties, ...narrowing.withProperties };
    wheres.push(narrowing.where);
  }
  const combinedWhere: WhereClause<Q, Record<string, SimplePropertyDef>> =
    wheres.length === 1 ? wheres[0] : { $and: wheres };

  // withProperties widens the second type parameter to the derived properties;
  // the result is still an ObjectSet over Q at runtime (derived properties are
  // additive), so we cast back to ObjectSet<Q> like applyLinkedFilter does.
  return base.withProperties(mergedProperties).where(
    combinedWhere,
  ) as ObjectSet<
    Q
  >;
}

export function computeDualScopes<Q extends ObjectTypeDefinition>(
  objectSet: ObjectSet<Q> | undefined,
  whereClause: WhereClause<Q>,
  linkedFilters: ReadonlyArray<LinkedFilter<Q>>,
  showFilteredOutValues: boolean | undefined,
  derivedNarrowings?: ReadonlyArray<DerivedNarrowing<Q>>,
): {
  scoped: ObjectSet<Q> | undefined;
  emptySource: ObjectSet<Q> | undefined;
} {
  if (objectSet == null) {
    return { scoped: undefined, emptySource: undefined };
  }
  const scoped = narrowObjectSet(
    objectSet,
    whereClause,
    linkedFilters,
    derivedNarrowings,
  );
  if (!showFilteredOutValues || linkedFilters.length === 0) {
    return { scoped, emptySource: undefined };
  }
  // emptySource intentionally drops the linked + derived narrowings so the
  // facet can surface values that the current narrowings filter out.
  return { scoped, emptySource: narrowObjectSet(objectSet, whereClause, []) };
}
