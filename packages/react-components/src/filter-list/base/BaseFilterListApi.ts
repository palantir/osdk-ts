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

import type { ObjectTypeDefinition } from "@osdk/api";
import type React from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { FilterListClassNames } from "../types/ClassNameOverrides.js";

export type RenderFilterInput<Q extends ObjectTypeDefinition> = (props: {
  definition: FilterDefinitionUnion<Q>;
  filterKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}) => React.ReactNode;

export interface BaseFilterListProps<Q extends ObjectTypeDefinition> {
  filterDefinitions?: Array<FilterDefinitionUnion<Q>>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (filterKey: string, state: FilterState) => void;
  renderInput: RenderFilterInput<Q>;
  activeFilterCount: number;
  onReset?: () => void;

  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  title?: string;
  titleIcon?: React.ReactNode;
  showResetButton?: boolean;
  showActiveFilterCount?: boolean;
  onFiltersReordered?: (
    newOrder: ReadonlyArray<FilterDefinitionUnion<Q>>,
  ) => void;
  className?: string;
  classNames?: FilterListClassNames;
  renderAddFilterButton?: () => React.ReactNode;
  style?: React.CSSProperties;
}
