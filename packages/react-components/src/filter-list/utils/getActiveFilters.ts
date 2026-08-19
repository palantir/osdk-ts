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

import type { ObjectTypeDefinition } from "@osdk/api";

import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type {
  ActiveClauseFilter,
  ActiveFilter,
} from "../types/ActiveFilterTypes.js";
import type {
  LinkedFilter,
  LinkedPropertyFilterState,
} from "../types/LinkedFilterTypes.js";
import type { PropertyTypeInfo } from "./filterStateToWhereClause.js";
import {
  buildWhereClause,
  getActiveLinkedFilters,
} from "./filterStateToWhereClause.js";
import { getFilterKey } from "./getFilterKey.js";

/**
 * Returns every active filter in definition order, tagged with its kind.
 *
 * A clause-producing filter counts as active only when it contributes a clause,
 * so a seeded-but-empty filter (or a `CUSTOM` filter whose `toWhereClause`
 * returns nothing) is left out.
 */
export function getActiveFilters<Q extends ObjectTypeDefinition>(
  definitions: Array<FilterDefinitionUnion<Q>> | undefined,
  filterStates: Map<string, FilterState>,
  propertyTypes?: Map<string, PropertyTypeInfo>,
): Array<ActiveFilter<Q>> {
  if (!definitions || definitions.length === 0) {
    return [];
  }

  // Reuse the link records `narrowObjectSet` consumes so the two agree on which
  // link filters are active and on the predicate each one applies.
  const linkedByKey = new Map<string, LinkedFilter<Q>>(
    getActiveLinkedFilters(definitions, filterStates).map((filter) => [
      filter.id,
      filter,
    ]),
  );

  const result: Array<ActiveFilter<Q>> = [];

  for (const definition of definitions) {
    const filterKey = getFilterKey(definition);
    const state = filterStates.get(filterKey);
    if (state == null) {
      continue;
    }

    if (
      definition.type === "HAS_LINK" ||
      definition.type === "LINKED_PROPERTY"
    ) {
      const linked = linkedByKey.get(filterKey);
      if (linked == null) {
        continue;
      }
      const common = {
        kind: definition.type,
        filterKey,
        definition,
        state,
        linkName: linked.linkName,
        isExcluding: linked.isExcluding === true,
      };
      result.push(
        (definition.type === "HAS_LINK"
          ? common
          : {
              ...common,
              innerState: (state as LinkedPropertyFilterState)
                .linkedFilterState,
              innerWhere: linked.innerWhere,
            }) as ActiveFilter<Q>,
      );
      continue;
    }

    const clause = buildWhereClause([definition], filterStates, propertyTypes);
    if (Object.keys(clause).length === 0) {
      continue;
    }
    result.push({
      kind: definition.type,
      filterKey,
      definition,
      state,
      clause,
    } as ActiveClauseFilter<Q>);
  }

  return result;
}
