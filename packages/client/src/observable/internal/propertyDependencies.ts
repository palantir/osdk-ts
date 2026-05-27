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

import type { Canonical } from "./Canonical.js";
import { collectWhereClauseProperties } from "./collectWhereClauseProperties.js";
import type { Rdp } from "./RdpCanonicalizer.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";

/**
 * @internal
 */
export function setsIntersect(
  a: ReadonlySet<string>,
  b: ReadonlySet<string>,
): boolean {
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  for (const v of small) {
    if (large.has(v)) {
      return true;
    }
  }
  return false;
}

/**
 * Build the base set of property names a query depends on from its where
 * clause and intersectWith clauses. Callers (e.g. ListQuery, AggregationQuery)
 * mutate the returned set to add their own contributions (orderBy keys,
 * groupBy keys, select properties).
 *
 * Returns `undefined` when the dependencies cannot be determined statically
 * and the caller must invalidate conservatively. This happens when:
 *  - the query carries an RDP config (`withProperties`). Where clauses on
 *    such queries can reference derived names, but the per-action diff only
 *    sees underlying-property changes, so a same-type RDP query would
 *    incorrectly skip when its backing property is edited.
 *  - a where clause contains `$title` or another key whose backing property
 *    is not statically known (see `collectWhereClauseProperties`).
 *
 * @internal
 */
export function computeBaseDependencies(
  rdpConfig: Canonical<Rdp> | undefined,
  canonicalWhere: Canonical<SimpleWhereClause>,
  intersectWith:
    | Canonical<Array<Canonical<SimpleWhereClause>>>
    | undefined,
): Set<string> | undefined {
  if (rdpConfig != null) {
    return undefined;
  }

  const fromWhere = collectWhereClauseProperties(canonicalWhere);
  if (fromWhere === undefined) {
    return undefined;
  }
  const deps = new Set<string>(fromWhere);

  if (intersectWith) {
    for (const clause of intersectWith) {
      const collected = collectWhereClauseProperties(clause);
      if (collected === undefined) {
        return undefined;
      }
      for (const p of collected) {
        deps.add(p);
      }
    }
  }

  return deps;
}
