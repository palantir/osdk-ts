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

function setsIntersect(
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
 * True when a query can skip revalidation: the caller knows which properties
 * were edited AND knows which properties the query depends on AND the two
 * sets are disjoint. Either set being `undefined` means "unknown — be
 * conservative" and forces revalidation.
 *
 * @internal
 */
export function canSkipForProperties(
  editedProperties: ReadonlySet<string> | undefined,
  dependentProperties: ReadonlySet<string> | undefined,
): boolean {
  return editedProperties != null
    && dependentProperties != null
    && !setsIntersect(editedProperties, dependentProperties);
}

/**
 * Build the base set of property names a query depends on from its where
 * clause and intersectWith clauses, plus any caller-supplied `extras`
 * (orderBy keys, groupBy keys, aggregation property names).
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
export function computeDependentProperties(
  rdpConfig: Canonical<Rdp> | undefined,
  canonicalWhere: Canonical<SimpleWhereClause>,
  intersectWith:
    | Canonical<Array<Canonical<SimpleWhereClause>>>
    | undefined,
  ...extras: Iterable<string>[]
): ReadonlySet<string> | undefined {
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

  for (const extra of extras) {
    for (const p of extra) {
      deps.add(p);
    }
  }

  return deps;
}
