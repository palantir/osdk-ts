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

import type { LinkNames, ObjectTypeDefinition, WhereClause } from "@osdk/api";
import type { ReactNode } from "react";
import type {
  FilterState as FilterStateUnion,
  PropertyFilterDefinition,
} from "./FilterListItemApi.js";
import type { FilterTemplate } from "./types/AddFilterMenuTypes.js";
import type { CustomFilterDefinition } from "./types/CustomRendererTypes.js";
import type { FilterListLayoutMode } from "./types/FilterDisplayTypes.js";
import type { FilterListPersistedState } from "./types/FilterPanelTypes.js";
import type { FilterListTheme } from "./types/FilterThemeTypes.js";
import type { KeywordSearchFilterDefinition } from "./types/KeywordSearchTypes.js";
import type {
  HasLinkFilterDefinition,
  LinkedFilterDisplayMode,
  LinkedFilterGroupConfig,
  LinkedPropertyFilterDefinition,
} from "./types/LinkedFilterTypes.js";

/**
 * Union type of all filter definition types
 */
export type FilterDefinitionUnion<Q extends ObjectTypeDefinition> =
  | PropertyFilterDefinition<Q>
  | HasLinkFilterDefinition<Q>
  | LinkedPropertyFilterDefinition<Q, LinkNames<Q>>
  | KeywordSearchFilterDefinition<Q>
  | CustomFilterDefinition<Q>;

/**
 * Extract the key from a filter definition union
 */
export type FilterKey<Q extends ObjectTypeDefinition> =
  FilterDefinitionUnion<Q> extends infer D ? D extends { key: infer K } ? K
    : D extends { linkName: infer L } ? L
    : never
    : never;

/**
 * Extract the filter state from a filter definition union
 */
export type FilterState<Q extends ObjectTypeDefinition> =
  FilterDefinitionUnion<Q> extends infer D
    ? D extends { filterState: infer S } ? S
    : never
    : never;

export interface FilterListProps<Q extends ObjectTypeDefinition> {
  /**
   * The object type definition for the objects to be filtered
   */
  objectType: Q;

  /**
   * Title displayed in the panel header
   */
  title?: string;

  /**
   * Icon displayed before the title
   */
  titleIcon?: ReactNode;

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
   * Called when filter state changes
   *
   * @param filterKey The key of the updated filter
   * @param newState The updated filter state
   */
  onFilterStateChanged?: (
    filterKey: FilterKey<Q>,
    newState: FilterStateUnion,
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
    newDefinitions: Array<FilterDefinitionUnion<Q>>,
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
    newDefinitions: Array<FilterDefinitionUnion<Q>>,
  ) => void;

  /**
   * Called when filters are reordered
   * If provided, the filter list becomes sortable
   *
   * @param newOrder The updated filter definitions in new order
   */
  onFiltersReordered?: (
    newOrder: ReadonlyArray<FilterDefinitionUnion<Q>>,
  ) => void;

  /**
   * Layout mode for the filter list
   * - "vertical": Standard vertical list (default)
   * - "pills": Compact pill/chip layout
   * - "horizontal": Horizontal scrolling layout
   */
  layoutMode?: FilterListLayoutMode;

  /**
   * Show global keyword search at the top of the filter list
   */
  showGlobalSearch?: boolean;

  /**
   * Show drag handles for sortable filters
   */
  showDragHandles?: boolean;

  /**
   * Custom drag handle renderer
   */
  renderDragHandle?: () => ReactNode;

  /**
   * Display mode for linked filters
   * - "inline": Show alongside non-linked filters
   * - "grouped": Group by link type with collapsible sections
   */
  linkedFilterDisplay?: LinkedFilterDisplayMode;

  /**
   * Configuration for linked filter groups
   * Only applicable when linkedFilterDisplay is "grouped"
   */
  linkedFilterGroups?: Array<LinkedFilterGroupConfig<Q>>;

  /**
   * Controlled collapsed state
   */
  collapsed?: boolean;

  /**
   * Default collapsed state (uncontrolled)
   */
  defaultCollapsed?: boolean;

  /**
   * Called when collapsed state changes
   */
  onCollapsedChange?: (collapsed: boolean) => void;

  /**
   * Show reset filters button in header
   */
  showResetButton?: boolean;

  /**
   * Called when reset button is clicked
   */
  onReset?: () => void;

  /**
   * Show add filter button at bottom
   */
  showAddFilterButton?: boolean;

  /**
   * Available filter templates for the "Add filter" menu.
   * When provided along with showAddFilterButton, clicking the button
   * shows a popover with these templates organized by category.
   */
  filterTemplates?: FilterTemplate[];

  /**
   * Called when a filter template is selected from the add filter menu.
   * The consumer should create a new filter definition and add it to filterDefinitions.
   */
  onFilterTemplateSelected?: (template: FilterTemplate) => void;

  /**
   * Position of the add filter button
   * - "fixed": Fixed at the bottom of the panel
   * - "inline": Scrolls with the filter list content
   * @default "fixed"
   */
  addFilterPosition?: "fixed" | "inline";

  /**
   * Show count of active filters in header
   */
  showActiveFilterCount?: boolean;

  /**
   * Apply filters immediately on change
   * If false, an "Apply" button is shown
   * @default true
   */
  applyOnChange?: boolean;

  /**
   * When true, an empty selection means "include all"
   * When false, an empty selection means "exclude all"
   * @default true
   */
  emptySelectionMeansAll?: boolean;

  /**
   * Key for session persistence
   * If provided, filter state will be persisted to session storage
   */
  persistenceKey?: string;

  /**
   * Called when filter state should be persisted
   */
  onPersistState?: (state: FilterListPersistedState<Q>) => void;

  /**
   * Initial persisted state to restore
   */
  initialPersistedState?: FilterListPersistedState<Q>;

  /**
   * Theme configuration for CSS custom properties
   */
  theme?: FilterListTheme;

  /**
   * Additional CSS class name
   */
  className?: string;
}
