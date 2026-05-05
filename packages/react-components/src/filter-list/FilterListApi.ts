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

import type {
  LinkNames,
  ObjectSet,
  ObjectTypeDefinition,
  WhereClause,
} from "@osdk/api";
import type React from "react";
import type { ReactNode } from "react";
import type {
  FilterState as FilterStateType,
  PropertyFilterDefinition,
} from "./FilterListItemApi.js";
import type { CustomFilterDefinition } from "./types/CustomRendererTypes.js";
import type { KeywordSearchFilterDefinition } from "./types/KeywordSearchTypes.js";
import type {
  HasLinkFilterDefinition,
  LinkedPropertyFilterDefinition,
} from "./types/LinkedFilterTypes.js";
import type { StaticValuesFilterDefinition } from "./types/StaticValuesTypes.js";

/**
 * Distributes LinkedPropertyFilterDefinition over each link name individually,
 * so that LinkedQ/LinkedK/LinkedC defaults resolve correctly per link.
 */
type DistributeLinkedProperty<
  Q extends ObjectTypeDefinition,
  L extends LinkNames<Q>,
> = L extends LinkNames<Q> ? LinkedPropertyFilterDefinition<Q, L> : never;

/**
 * Union type of all filter definition types
 */
export type FilterDefinitionUnion<Q extends ObjectTypeDefinition> =
  | PropertyFilterDefinition<Q>
  | HasLinkFilterDefinition<Q>
  | DistributeLinkedProperty<Q, LinkNames<Q>>
  | KeywordSearchFilterDefinition<Q>
  | CustomFilterDefinition<Q>
  | StaticValuesFilterDefinition<Q>;

/**
 * Extract the key from a filter definition union
 */
type ExtractFilterKey<D> = D extends { key: infer K } ? K
  : D extends { linkName: infer L } ? L
  : never;

export type FilterKey<Q extends ObjectTypeDefinition> = ExtractFilterKey<
  FilterDefinitionUnion<Q>
>;

/**
 * Extract the filter state from a filter definition union
 */
type ExtractFilterState<D> = D extends { filterState: infer S } ? S : never;

export type FilterState<Q extends ObjectTypeDefinition> = ExtractFilterState<
  FilterDefinitionUnion<Q>
>;

/**
 * Map from filter definition objects to their current state.
 * Uses object identity for keys, ensuring stable lookups across reorders.
 */
export type FilterStatesMap<Q extends ObjectTypeDefinition> = Map<
  FilterDefinitionUnion<Q>,
  FilterStateType
>;

export interface FilterListProps<Q extends ObjectTypeDefinition> {
  /**
   * The object type definition for the objects being filtered.
   * Used for metadata resolution (property types, display names).
   */
  objectType: Q;

  /**
   * Optional object set to scope aggregation queries.
   * When provided, filter aggregations (e.g. listogram counts) are scoped to this set.
   * When omitted, aggregations run against the full object type.
   */
  objectSet?: ObjectSet<Q>;

  /**
   * Optional title to display in the filter list header
   */
  title?: ReactNode;

  /**
   * Optional icon to display next to the title
   */
  titleIcon?: React.ReactNode;

  /**
   * The definition for all supported filter items in the list
   * If not supplied, all filterable properties will be available
   */
  filterDefinitions?: Array<FilterDefinitionUnion<Q>>;

  /**
   * The current where clause to filter the objectSet.
   * If provided, the filter clause is controlled.
   */
  filterClause?: WhereClause<Q>;

  /**
   * Called when the filter clause changes.
   * Required in controlled mode.
   *
   * @param newClause The updated filter clause
   */
  onFilterClauseChanged?: (newClause: WhereClause<Q>) => void;

  /**
   * Called when filter state changes
   *
   * @param definition The filter definition whose state changed
   * @param newState The updated filter state
   */
  onFilterStateChanged?: (
    definition: FilterDefinitionUnion<Q>,
    newState: FilterStateType,
  ) => void;

  /**
   * Controls how filter visibility (add/remove) is managed.
   *
   * - `"uncontrolled"` (default): FilterList manages visibility internally.
   *   An "Add filter" popover is rendered for filters with `isVisible: false`,
   *   and each visible filter shows a remove button.
   * - `"controlled"`: The consumer manages which filters are visible via
   *   `filterDefinitions`. Filters with `isVisible: false` are excluded from
   *   the rendered list.
   *
   * @default "uncontrolled"
   */
  addFilterMode?: "controlled" | "uncontrolled";

  /**
   * Called when a filter is added (shown).
   *
   * In uncontrolled mode, this fires when a user selects a hidden filter
   * from the "Add filter" popover.
   *
   * @param filterKey The key of the added filter
   * @param newDefinitions The current filter definitions array
   */
  onFilterAdded?: (
    filterKey: FilterKey<Q>,
    newDefinitions: Array<FilterDefinitionUnion<Q>>,
  ) => void;

  /**
   * Called when a filter is removed (hidden).
   *
   * In uncontrolled mode, this fires as a notification after the filter
   * is hidden internally.
   *
   * @param filterKey The key of the removed filter
   */
  onFilterRemoved?: (filterKey: FilterKey<Q>) => void;

  /**
   * Called when filter visibility or ordering changes, i.e. when filters
   * are reordered, or (in uncontrolled mode) added or
   * removed via the built-in show/remove controls.
   *
   * Useful for persisting filter configuration in saved states. The
   * returned array lists every filter in current display order, with
   * visible filters first followed by hidden filters.
   *
   * In controlled mode (`addFilterMode: "controlled"`), this fires only
   * for reorder events; show/hide are managed externally via
   * `filterDefinitions`.
   *
   * @param newStates The filters in current display order with their visibility state
   */
  onFilterVisibilityChange?: (
    newStates: Array<{
      filterKey: FilterKey<Q>;
      isVisible: boolean;
    }>,
  ) => void;

  /**
   * Enable drag-and-drop reordering of filters.
   * When true, drag handles are rendered and filters can be reordered.
   * Reorder state is managed internally; consumers who need to track order
   * should use controlled filterDefinitions.
   */
  enableSorting?: boolean;

  /**
   * Whether the filter list panel is collapsed
   */
  collapsed?: boolean;

  /**
   * Called when the collapsed state changes
   */
  onCollapsedChange?: (collapsed: boolean) => void;

  /**
   * Initial filter states for hydrating from external storage.
   * These states are merged over definition defaults on mount.
   * Use onFilterStateChanged to persist state changes externally.
   */
  initialFilterStates?: Map<string, FilterStateType>;

  /**
   * Show reset filters button in header
   */
  showResetButton?: boolean;

  /**
   * Called when reset button is clicked
   */
  onReset?: () => void;

  /**
   * Show count of active filters in header
   */
  showActiveFilterCount?: boolean;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Custom render function for the "Add filter" button.
   *
   * - In uncontrolled mode: customizes the trigger element for the built-in
   *   add-filter popover. The popover behavior is handled automatically.
   * - In controlled mode: replaces the entire add-filter button area.
   *   The consumer is responsible for all add-filter behavior.
   */
  renderAddFilterButton?: () => React.ReactNode;
}
