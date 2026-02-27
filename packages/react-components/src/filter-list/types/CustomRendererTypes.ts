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
import type { ReactNode } from "react";
import type { BaseFilterState } from "../FilterListItemApi.js";

/**
 * State for custom filter
 */
export interface CustomFilterState<T = Record<string, unknown>>
  extends BaseFilterState
{
  type: "custom";
  customState: T;
}

/**
 * Props passed to custom filter input renderer
 */
export interface CustomFilterInputRendererProps<
  Q extends ObjectTypeDefinition,
  State extends BaseFilterState,
> {
  objectSet: ObjectSet<Q>;
  filterState: State;
  onFilterStateChanged: (newState: State) => void;
}

/**
 * Props passed to custom filter item renderer
 * Includes full item context in addition to input renderer props
 */
export interface CustomFilterItemRendererProps<
  Q extends ObjectTypeDefinition,
  State extends BaseFilterState,
> extends CustomFilterInputRendererProps<Q, State> {
  label: string;
  onRemove?: () => void;
}

/**
 * Filter definition for custom filters
 * Provides full control over rendering and filter logic
 */
export interface CustomFilterDefinition<
  Q extends ObjectTypeDefinition,
  State extends BaseFilterState = CustomFilterState,
> {
  type: "CUSTOM";
  /**
   * Optional unique identifier for stable keying across filter reorders.
   * If provided, takes precedence over `key` for state keying.
   */
  id?: string;
  /**
   * Unique key for this custom filter
   */
  key: string;
  label?: string;
  filterComponent: "CUSTOM";
  filterState: State;
  defaultFilterState?: State;
  /**
   * Render the input portion of the filter
   * Used when rendering within a filter item wrapper
   */
  renderInput?: (
    props: CustomFilterInputRendererProps<Q, State>,
  ) => ReactNode;
  /**
   * Render the complete filter item
   * Used when you need full control over the item appearance
   */
  renderItem?: (
    props: CustomFilterItemRendererProps<Q, State>,
  ) => ReactNode;
  /**
   * Convert filter state to a WhereClause for filtering
   * Required for the filter to affect the object set
   */
  toWhereClause: (state: State) => WhereClause<Q> | undefined;
  /**
   * Controls whether this filter is rendered.
   * When false, the filter is hidden but its state is preserved.
   * @default true
   */
  isVisible?: boolean;
}
