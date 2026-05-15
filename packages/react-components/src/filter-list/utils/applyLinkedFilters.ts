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
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { buildPropertyKeyClause } from "./filterStateToWhereClause.js";
import { getFilterKey } from "./getFilterKey.js";

/**
 * Computes `base.pivotTo(linkName).where(innerWhere).pivotTo(reverseLinkName)`,
 * widening through `ObjectSet<ObjectTypeDefinition>` so TypeScript doesn't
 * have to reconcile the dynamic link-name chain. The runtime shape is
 * guaranteed by construction (pivot forward → filter → pivot back to `Q`).
 */
function narrowingPivot<Q extends ObjectTypeDefinition>(
  base: ObjectSet<Q>,
  linkName: LinkNames<Q>,
  innerWhere: Record<string, unknown>,
  reverseLinkName: string,
): ObjectSet<Q> {
  const linked = base.pivotTo(linkName) as ObjectSet<ObjectTypeDefinition>;
  const filtered = linked.where(
    innerWhere as WhereClause<ObjectTypeDefinition>,
  );
  return filtered.pivotTo(
    reverseLinkName as LinkNames<ObjectTypeDefinition>,
  ) as ObjectSet<Q>;
}

/**
 * Builds a narrowed `ObjectSet` by intersecting `baseObjectSet` with each
 * `LINKED_PROPERTY` filter's selection. For every LINKED_PROPERTY definition
 * whose inner state has selections AND that declares `reverseLinkName`, this
 * computes:
 *
 *   base.intersect(
 *     base.pivotTo(linkName).where(<inner-where>).pivotTo(reverseLinkName)
 *   )
 *
 * Filters with empty selections are skipped. Filters missing `reverseLinkName`
 * are skipped (with a one-time `console.warn` in non-production builds) since
 * the helper can't invert the pivot without that information. Non-LINKED_PROPERTY
 * definitions are ignored — direct property filters are applied via the
 * `filterClause` on the resulting query, not via objectSet narrowing.
 *
 * @param baseObjectSet The unfiltered base scope to narrow.
 * @param definitions   The full filter definition list (LINKED_PROPERTY ones
 *                      are matched against `filterStates` by their filter key).
 * @param filterStates  Map of current filter states keyed by `getFilterKey`.
 *                      Typically obtained via FilterList's
 *                      `onFilterStatesChanged` callback.
 * @returns A narrowed `ObjectSet`. When no linked filters apply, returns
 *          `baseObjectSet` unchanged.
 */
export function applyLinkedFilters<Q extends ObjectTypeDefinition>(
  baseObjectSet: ObjectSet<Q>,
  definitions: Array<FilterDefinitionUnion<Q>>,
  filterStates: Map<string, FilterState>,
): ObjectSet<Q> {
  let result = baseObjectSet;

  for (const definition of definitions) {
    if (definition.type !== "LINKED_PROPERTY") {
      continue;
    }
    const state = filterStates.get(getFilterKey(definition));
    if (!state || state.type !== "linkedProperty") {
      continue;
    }
    // PropertyKeys generally narrows to `string`, but in this context the
    // LinkedQ generic may widen to ObjectTypeDefinition, surfacing the raw
    // `string | number | symbol` shape. The runtime value is always a string.
    const innerWhere = buildPropertyKeyClause(
      definition.linkedPropertyKey as string,
      state.linkedFilterState,
    );
    if (innerWhere === undefined) {
      continue;
    }
    if (definition.reverseLinkName == null) {
      // Skipped silently — without reverseLinkName the helper cannot invert
      // the pivot back to Q, so this filter contributes no narrowing. The
      // contract is documented on LinkedPropertyFilterDefinition.reverseLinkName.
      continue;
    }

    const narrowingSet = narrowingPivot(
      baseObjectSet,
      definition.linkName,
      innerWhere,
      definition.reverseLinkName as string,
    );
    result = result.intersect(narrowingSet);
  }

  return result;
}
