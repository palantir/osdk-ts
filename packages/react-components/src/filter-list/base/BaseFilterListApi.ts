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
import type { FilterState } from "../FilterListItemApi.js";

export type RenderFilterInput<D> = (props: {
  definition: D;
  filterKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  searchQuery?: string;
  excludeRowOpen?: boolean;
  /**
   * Per-filter where clause supplied by `FilterList`'s internal pipeline.
   *
   * Type-erased here so this OSDK-agnostic base does not depend on
   * `WhereClause<Q>`. The FilterList wrapper casts it back to the typed
   * shape before passing it to `FilterInput`. Consumers passing their own
   * `renderInput` function can ignore this field.
   */
  whereClauseForFilter?: unknown;
}) => React.ReactNode;

export interface BaseFilterListProps<D> {
  filterDefinitions?: Array<D>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (filterKey: string, state: FilterState) => void;
  renderInput: RenderFilterInput<D>;
  getFilterKey: (definition: D) => string;
  getFilterLabel: (definition: D) => string;
  activeFilterCount: number;
  onReset?: () => void;
  onFilterAdded?: () => void;
  onFilterRemoved?: (filterKey: string) => void;
  /**
   * Per-filter where clauses keyed by `filterKey`. Forwarded down to each
   * `FilterListItem` so the internal `renderInput` can read its filter's
   * clause without closing over the whole map (which would invalidate
   * memoization on every selection).
   */
  perFilterWhereClauses?: ReadonlyMap<string, unknown>;

  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  title?: React.ReactNode;
  titleIcon?: React.ReactNode;
  showResetButton?: boolean;
  showActiveFilterCount?: boolean;
  hasVisibilityChanges?: boolean;
  enableSorting?: boolean;
  className?: string;
  renderAddFilterButton?: () => React.ReactNode;
  /**
   * Layout orientation. When `"horizontal"`, the filter list arranges its
   * items as a row instead of a column. Default `"vertical"`.
   */
  orientation?: "vertical" | "horizontal";
  /**
   * In horizontal mode, classifies each filter as either an inline input
   * (rendered directly next to its label) or a popover trigger (rendered
   * as a button that opens the input UI in a popover). Ignored in
   * vertical mode where everything renders inline.
   */
  getFilterRenderMode?: (definition: D) => "inline" | "trigger";
  /**
   * In horizontal mode, the trigger label shown above the filter's
   * popover. Receives the filter definition and current state and returns
   * a short summary like "Status: Active" or "Sites: 3 selected". Ignored
   * for `"inline"` filters.
   */
  summarizeFilterValue?: (
    definition: D,
    filterState: FilterState | undefined,
  ) => React.ReactNode;
}
