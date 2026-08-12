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

import type React from "react";

import type {
  FilterDefinitionControls,
  FilterState,
} from "../FilterListItemApi.js";

export type RenderFilterInput<D> = (props: {
  definition: D;
  filterKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  searchQuery?: string;
  excludeRowOpen?: boolean;
}) => React.ReactNode;

export interface BaseFilterListProps<D extends FilterDefinitionControls> {
  filterDefinitions?: Array<D>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (filterKey: string, state: FilterState) => void;
  renderInput: RenderFilterInput<D>;
  getFilterKey: (definition: D) => string;
  getFilterLabel: (definition: D) => string;
  /**
   * Display-only fallback state for a filter that has no stored state, used so
   * capability-driven header controls (overflow … menu, search) render for
   * empty/just-added filters. Never written into the filter-state map.
   */
  getEmptyDisplayState?: (definition: D) => FilterState | undefined;
  activeFilterCount: number;
  onReset?: () => void;
  onFilterAdded?: () => void;
  onFilterRemoved?: (filterKey: string) => void;
  onOrderChange?: (orderedKeys: string[]) => void;

  /**
   * Opts into the collapse/expand control. When `false` the panel is always
   * expanded, no collapse control is rendered, and `collapsed` /
   * `defaultCollapsed` are ignored (which warns in development).
   * @default false
   */
  enableCollapse?: boolean;

  /**
   * Controlled mode. When supplied, this prop is the source of truth for
   * whether the panel is collapsed and the component keeps no internal state;
   * re-render with a new value in response to `onCollapsedChange`.
   *
   * If both `collapsed` and `defaultCollapsed` are provided, `collapsed` takes
   * precedence. Requires `enableCollapse`.
   */
  collapsed?: boolean;

  /**
   * Uncontrolled mode. Seeds the panel's internal collapsed state; the
   * component continues to own the state after mount, so later changes to this
   * prop are ignored.
   *
   * If both `collapsed` and `defaultCollapsed` are provided, `collapsed` takes
   * precedence. Requires `enableCollapse`.
   * @default false
   */
  defaultCollapsed?: boolean;

  /**
   * Called whenever the collapsed state changes.
   *
   * @param collapsed The new collapsed state
   */
  onCollapsedChange?: (collapsed: boolean) => void;
  title?: React.ReactNode;
  titleIcon?: React.ReactNode;
  showResetButton?: boolean;
  showActiveFilterCount?: boolean;
  /**
   * Whether the reset button is enabled. Hosts compute this from whether the
   * filter and/or visibility state has diverged from its initial snapshot.
   */
  canReset?: boolean;
  enableSorting?: boolean;
  className?: string;
  renderAddFilterButton?: () => React.ReactNode;
}
