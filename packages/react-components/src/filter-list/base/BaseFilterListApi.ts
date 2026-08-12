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
   * expanded, no collapse control is rendered, and `defaultCollapsed` is
   * ignored (which warns in development).
   * @default false
   */
  enableCollapse?: boolean;

  /**
   * Uncontrolled mode. Seeds the panel's internal collapsed state; the
   * component continues to own the state after mount, so later changes to this
   * prop are ignored. `onCollapsedChange` still fires.
   *
   * Requires `enableCollapse` — without it there is no collapse control and
   * this is ignored.
   * @default false
   */
  defaultCollapsed?: boolean;

  /**
   * @deprecated Renamed to `defaultCollapsed`. Read once on mount as the
   * initial value and ignored thereafter — collapse is uncontrolled, so this
   * prop never tracked its own value. `defaultCollapsed` wins if both are set.
   */
  collapsed?: boolean;

  /**
   * Called whenever the collapsed state changes, including when the user
   * toggles it. Purely an observer — the component owns the state either way,
   * and collapse works whether or not this is supplied.
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
