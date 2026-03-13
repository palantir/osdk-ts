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

  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  title?: string;
  titleIcon?: React.ReactNode;
  showResetButton?: boolean;
  showActiveFilterCount?: boolean;
  enableSorting?: boolean;
  className?: string;
  renderAddFilterButton?: () => React.ReactNode;
}
