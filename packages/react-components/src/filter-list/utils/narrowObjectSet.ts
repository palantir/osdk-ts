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
import type { WhereClauseFragment } from "../types/WhereClauseTypes.js";

/** What `aggregate("$count")` derives: a non-nullable integer, zero when no linked objects match. */
type LinkCountDef = SimplePropertyDef.Make<"integer", "non-nullable", "single">;

type LinkCountRdps = Record<string, LinkCountDef>;

/**
 * Derived-property names share a namespace with the object type's own
 * properties, so the prefix keeps these from colliding with a real property.
 */
const LINK_COUNT_PREFIX = "osdkFilterListLinkCount_";

function linkCountPropertyName(id: string): string {
  return `${LINK_COUNT_PREFIX}${id.replaceAll(/[^A-Za-z0-9_]/gu, "_")}`;
}

export function narrowObjectSet<Q extends ObjectTypeDefinition>(
  objectSet: ObjectSet<Q>,
  whereClause: WhereClause<Q>,
  linkedFilters: ReadonlyArray<LinkedFilter<Q>>,
): ObjectSet<Q> {
  const hasWhereClause = Object.keys(whereClause).length > 0;
  if (linkedFilters.length === 0) {
    return hasWhereClause ? objectSet.where(whereClause) : objectSet;
  }

  const creators: Record<string, DerivedProperty.Creator<Q, LinkCountDef>> = {};
  const conditions: WhereClauseFragment[] = hasWhereClause
    ? [whereClause as WhereClauseFragment]
    : [];

  for (const filter of linkedFilters) {
    const propertyName = linkCountPropertyName(filter.id);
    creators[propertyName] = createLinkCount(filter);
    conditions.push(
      filter.isExcluding === true
        ? { [propertyName]: 0 }
        : { [propertyName]: { $gt: 0 } },
    );
  }

  const countClause: WhereClauseFragment =
    conditions.length === 1 ? conditions[0] : { $and: conditions };

  // Cast needed because the RDPs are created at runtime.
  return objectSet
    .withProperties(creators)
    .where(countClause as WhereClause<Q, LinkCountRdps>) as ObjectSet<Q>;
}

function createLinkCount<Q extends ObjectTypeDefinition>(
  filter: LinkedFilter<Q>,
): DerivedProperty.Creator<Q, LinkCountDef> {
  return (base) => {
    const linked = base.pivotTo(filter.linkName);
    return (
      filter.innerWhere == null ? linked : linked.where(filter.innerWhere)
    ).aggregate("$count");
  };
}

export function computeDualScopes<Q extends ObjectTypeDefinition>(
  objectSet: ObjectSet<Q> | undefined,
  whereClause: WhereClause<Q>,
  linkedFilters: ReadonlyArray<LinkedFilter<Q>>,
  showFilteredOutValues: boolean | undefined,
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
