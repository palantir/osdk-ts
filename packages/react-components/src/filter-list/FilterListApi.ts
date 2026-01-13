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
import type { ReactNode } from "react";
import type {
  FilterState as FilterStateType,
  PropertyFilterDefinition,
} from "./FilterListItemApi.js";
import type { FilterTemplate } from "./types/AddFilterMenuTypes.js";
import type { CustomFilterDefinition } from "./types/CustomRendererTypes.js";
import type { KeywordSearchFilterDefinition } from "./types/KeywordSearchTypes.js";
import type {
  HasLinkFilterDefinition,
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
   * The object set to filter. The type definition is extracted from this.
   */
  objectSet: ObjectSet<Q>;

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
    newState: FilterStateType,
  ) => void;

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
   * Additional CSS class name
   */
  className?: string;
}
