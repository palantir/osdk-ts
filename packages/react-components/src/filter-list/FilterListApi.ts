/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
import type { FilterDefinition } from "./FilterListItemApi.js";

export interface FilterListProps<Q extends ObjectTypeDefinition> {
  /**
   * The set of objects to be filtered
   */
  objectSet: ObjectSet<Q>;

  /**
   * The definition for all supported filter items in the list
   * If not supplied, all filterable properties will be available
   */
  filterDefinitions?: Array<FilterDefinition<Q>>;

  /**
   * The current where clause to filter the objectSet.
   * If provided, the filter clause is controlled.
   */
  filterClause?: WhereClause<Q>;

  /**
   * Called when the filter clause changes.
   * The filters are joined by the selected filterOperator.
   * Required in controlled mode.
   *
   * @param newClause The updated filter clause
   */
  onFilterClauseChanged?: (newClause: WhereClause<Q>) => void;

  /**
   * The logical operator to join multiple filters
   *
   * @default "and"
   */
  filterOperator?: "and" | "or";

  /**
   * Called when filter state change
   *
   * @param filterKey The key of the updated filter
   * @param newState The updated filter state
   */
  onFilterStateChanged?: (
    filterKey: FilterKey<Q>,
    newState: FilterState<Q>,
  ) => void;

  /**
   * Called when a filter is added
   * If provided, user will be allowed to add filters
   *
   * @param filterKey The key of the added filter
   * @param newDefinitions The filter list with the new filter added
   */
  onFilterAdded?: (
    filterKey: FilterKey<Q>,
    newDefinitions: Array<FilterDefinition<Q>>,
  ) => void;

  /**
   * Called when a filter is removed
   * If provided, user will be allowed to remove filters
   *
   * @param filterKey The key of the removed filter
   * @param newDefinitions The updated filter list with the filter removed
   */
  onFilterRemoved?: (
    filterKey: FilterKey<Q>,
    newDefinitions: Array<FilterDefinition<Q>>,
  ) => void;

  /**
   * Called when filters are reordered
   * If provided, the filter list becomes sortable
   *
   * @param newOrder The updated filter definitions in new order
   */
  onFiltersReordered?: (newOrder: ReadonlyArray<FilterDefinition<Q>>) => void;
}

type FilterKey<Q extends ObjectTypeDefinition> = FilterDefinition<Q>["key"];

type FilterState<Q extends ObjectTypeDefinition> = FilterDefinition<
  Q
>["filterState"];
