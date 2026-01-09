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

import type { ReactNode } from "react";
import type { FilterComponentType } from "../FilterListItemApi.js";
import type { FilterDataIndicator } from "./FilterDisplayTypes.js";

/**
 * Category for organizing filters in the add filter menu
 */
export type FilterCategory =
  | "ALL_PROPERTIES"
  | "SINGLE_PROPERTY"
  | "LINKED_OBJECT";

/**
 * Template for a filter that can be added via the add filter menu
 */
export interface FilterTemplate {
  /**
   * Unique identifier for the template
   */
  id: string;

  /**
   * Display label for the filter
   */
  label: string;

  /**
   * Property key this filter applies to
   */
  key: string;

  /**
   * The type of filter component to use
   */
  filterComponent: FilterComponentType;

  /**
   * Icon to display next to the filter label.
   * Can be a string (icon name) or a ReactNode for custom icons.
   */
  icon: string | ReactNode;

  /**
   * Type of data indicator to show (histogram, count, none)
   */
  dataIndicator?: FilterDataIndicator;

  /**
   * Whether to show a "Select All" option for checkbox lists
   */
  showSelectAll?: boolean;

  /**
   * Maximum number of visible items before scrolling
   */
  maxVisibleItems?: number;

  /**
   * Whether multiple instances of this filter can be added
   */
  allowMultiple: boolean;

  /**
   * Category for grouping in the add filter menu
   */
  category: FilterCategory;
}

/**
 * Props for the add filter menu component
 */
export interface AddFilterMenuProps {
  /**
   * Available filter templates to display
   */
  templates: FilterTemplate[];

  /**
   * Current count of active filters by key
   */
  activeCounts: Record<string, number>;

  /**
   * Called when a filter template is selected
   */
  onSelectFilter: (template: FilterTemplate) => void;

  /**
   * Called when the menu should be closed
   */
  onClose: () => void;
}
