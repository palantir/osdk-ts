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
  FilterState,
  PropertyFilterDefinition,
} from "./FilterListItemApi.js";
import type { CustomFilterDefinition } from "./types/CustomRendererTypes.js";
import type { KeywordSearchFilterDefinition } from "./types/KeywordSearchTypes.js";
import type {
  HasLinkFilterDefinition,
  LinkedFilter,
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
 * Everything that changed when a single filter's state changed, in one payload.
 */
export interface FilterChangeEvent<Q extends ObjectTypeDefinition> {
  /** Key of the filter the user changed. */
  filterKey: string;

  /** The changed filter's new state. */
  newState: FilterState;

  /**
   * The combined clause for all active filters.
   *
   * `HAS_LINK` and `LINKED_PROPERTY` filters are not represented in the clause —
   * read `activeLinkedFilters` or `filteredObjectSet` for those.
   */
  filterClause: WhereClause<Q>;

  /**
   * The `objectSet` prop filtered by all active filters, including `HAS_LINK`
   * and `LINKED_PROPERTY`, or `undefined` when no `objectSet` was supplied.
   */
  filteredObjectSet: ObjectSet<Q> | undefined;

  /** The active `HAS_LINK` and `LINKED_PROPERTY` filters. */
  activeLinkedFilters: ReadonlyArray<LinkedFilter<Q>>;
}

export interface FilterListProps<Q extends ObjectTypeDefinition> {
  /**
   * The object type definition for the objects being filtered.
   * Used for metadata resolution (property types, display names).
   */
  objectType: Q;

  /**
   * Optional object set to scope aggregation queries. When omitted,
   * aggregations run against the full object type.
   *
   * Required for `HAS_LINK` and `LINKED_PROPERTY` filters to work.
   */
  objectSet?: ObjectSet<Q>;

  /**
   * Called whenever the filter clause changes. FilterList owns filter state;
   * this is how you read it out, e.g. to feed an `ObjectTable`'s `filter`.
   *
   * `HAS_LINK` and `LINKED_PROPERTY` filters are not represented in the clause
   * — use `onEffectiveObjectSet` for those.
   *
   * @param newClause The updated filter clause
   */
  onFilterClauseChanged?: (newClause: WhereClause<Q>) => void;

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
   * Called when filter state changes
   *
   * @param definition The filter definition whose state changed
   * @param newState The updated filter state
   */
  onFilterStateChanged?: (
    definition: FilterDefinitionUnion<Q>,
    newState: FilterState,
  ) => void;

  /**
   * Called when a filter's state changes, with the new state, the resulting
   * clause, the filtered `ObjectSet` and the active linked filters in a single
   * payload.
   *
   * Prefer this over combining `onFilterStateChanged`, `onFilterClauseChanged`
   * and `onEffectiveObjectSet`, which each report one slice of the same change.
   *
   * @param event The changed filter and everything derived from the change
   */
  onFilterChanged?: (event: FilterChangeEvent<Q>) => void;

  /**
   * Called with the narrowed `ObjectSet` whenever filters change. Requires
   * `objectSet` to be set. `HAS_LINK` and `LINKED_PROPERTY` filters narrow only
   * here, never through the filter clause.
   */
  onEffectiveObjectSet?: (objectSet: ObjectSet<Q>) => void;

  /**
   * When `true`, facets render greyed-out count=0 rows for values present in
   * the unfiltered data but excluded by other active filters.
   * @default false
   */
  showFilteredOutValues?: boolean;

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
   * @deprecated Going away; visibility will always be managed internally.
   * Seed it with `isVisible` on each `filterDefinitions` entry and observe
   * changes with `onFilterVisibilityChange`.
   */
  addFilterMode?: "controlled" | "uncontrolled";

  /**
   * Called after a filter is shown from the built-in "Add filter" popover.
   *
   * @param filterKey The key of the added filter
   * @param newDefinitions Deprecated. The `filterDefinitions` you passed in,
   * unchanged — not the post-add state. Use `onFilterVisibilityChange`.
   */
  onFilterAdded?: (
    filterKey: string,
    /** @deprecated Use `onFilterVisibilityChange`. */
    /* eslint-disable-next-line @typescript-eslint/no-deprecated */
    newDefinitions: Array<FilterDefinitionUnion<Q>>,
  ) => void;

  /**
   * Called after a filter's remove button is clicked, once the filter is
   * hidden and its state cleared.
   *
   * @param filterKey The key of the removed filter
   */
  onFilterRemoved?: (filterKey: string) => void;

  /**
   * Called when filter visibility or ordering changes, i.e. when filters are
   * reordered, added or removed via the built-in show/remove controls, or
   * reset.
   *
   * Visible filters come first, in display order, followed by the hidden ones.
   * Persist this array and feed it back as the order and `isVisible` of
   * `filterDefinitions` to make reordering survive a remount.
   *
   * @param newStates The filters in current display order with their visibility state
   */
  onFilterVisibilityChange?: (
    newStates: Array<{
      filterKey: string;
      isVisible: boolean;
    }>,
  ) => void;

  /**
   * Enable drag-and-drop reordering of filters. When `true`, drag handles are
   * rendered and filters can be reordered.
   *
   * Reorder state is managed internally; persist `onFilterVisibilityChange` to
   * track order across remounts.
   *
   * @default false
   */
  enableSorting?: boolean;

  /**
   * Whether the collapse/expand control is available. When `false` the panel is
   * always expanded, no collapse control is rendered, and `collapsed` /
   * `defaultCollapsed` are ignored.
   * @default true
   */
  enableCollapse?: boolean;

  /**
   * Controlled mode. When supplied, this prop is the source of truth for
   * whether the panel is collapsed and the component keeps no internal state;
   * re-render with a new value in response to `onCollapsedChange`.
   *
   * If both `collapsed` and `defaultCollapsed` are provided, `collapsed` takes
   * precedence. Ignored when `enableCollapse` is `false`.
   */
  collapsed?: boolean;

  /**
   * Uncontrolled mode. Seeds the panel's internal collapsed state; the
   * component continues to own the state after mount, so later changes to this
   * prop are ignored.
   *
   * If both `collapsed` and `defaultCollapsed` are provided, `collapsed` takes
   * precedence. Ignored when `enableCollapse` is `false`.
   * @default false
   */
  defaultCollapsed?: boolean;

  /**
   * Called whenever the collapsed state changes.
   *
   * @param collapsed The new collapsed state
   */
  onCollapsedChange?: (collapsed: boolean) => void;

  /**
   * Seeds filter states from external storage, keyed by `getFilterKey`.
   * Applied over the per-definition `defaultFilterState` seeds on mount, and
   * FilterList owns the states from then on. Also the state the reset button
   * restores to.
   * Use `onFilterStateChanged` to persist changes back out.
   *
   * @default undefined (filters seed from their definitions alone)
   */
  defaultFilterStates?: Map<string, FilterState>;

  /**
   * @deprecated Rename to `defaultFilterStates`.
   */
  initialFilterStates?: Map<string, FilterState>;

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
   * Custom render function for the "Add filter" button. Customizes the trigger
   * element for the built-in add-filter popover; the popover behavior is
   * handled automatically.
   */
  renderAddFilterButton?: () => React.ReactNode;
}
