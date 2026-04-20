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

import type { ObjectTypeDefinition, WhereClause } from "@osdk/api";
import type {
  FilterState,
  FilterStateByComponentType,
} from "../FilterListItemApi.js";

/**
 * Component types that support static values.
 * These components can display a fixed list of string values without OSDK aggregation.
 */
export type StaticValuesComponentType =
  | "LISTOGRAM"
  | "SINGLE_SELECT"
  | "MULTI_SELECT"
  | "TEXT_TAGS";

/**
 * Filter definition for static (non-OSDK) value lists.
 * Renders built-in filter components with user-provided values instead of
 * fetching values via OSDK aggregation queries.
 */
export interface StaticValuesFilterDefinition<
  Q extends ObjectTypeDefinition,
  C extends StaticValuesComponentType = StaticValuesComponentType,
> {
  type: "STATIC_VALUES";

  /**
   * Optional unique identifier for stable keying across filter reorders.
   * If provided, takes precedence over `key` for state keying.
   */
  id?: string;

  /**
   * Key used for state management and auto WHERE clause generation.
   * When `toWhereClause` is not provided, this is used as the property key
   * in the generated WHERE clause.
   */
  key: string;

  /**
   * Display label for the filter
   */
  label?: string;

  /**
   * The filter component type to render
   */
  filterComponent: C;

  /**
   * The current state of the filter
   */
  filterState: FilterStateByComponentType[C];

  /**
   * The static list of values to display in the filter component.
   * These are rendered directly without OSDK aggregation.
   */
  values: string[];

  /**
   * Custom display function for filter values.
   * Replaces the default string display in dropdown items, chips, and listogram rows.
   */
  renderValue?: (value: string) => string;

  /**
   * Maps filter values to colors for visual differentiation.
   * Used by LISTOGRAM (per-row bar colors).
   */
  colorMap?: Record<string, string>;

  /**
   * Configuration for LISTOGRAM display mode.
   * Only applies when filterComponent is "LISTOGRAM".
   */
  listogramConfig?: {
    displayMode?: "full" | "count" | "minimal";
    /**
     * Number of items shown before "View all" link appears
     * @default 5
     */
    maxVisibleItems?: number;
  };

  /**
   * Optional custom WHERE clause generator.
   * When provided, this is used instead of auto-generating a WHERE clause
   * from the `key` and filter state.
   */
  toWhereClause?: (state: FilterState) => WhereClause<Q> | undefined;

  /**
   * Controls whether this filter is rendered.
   * When false, the filter is hidden but its state is preserved.
   * @default true
   */
  isVisible?: boolean;
}
