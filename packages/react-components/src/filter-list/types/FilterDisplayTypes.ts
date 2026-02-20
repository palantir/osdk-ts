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

/**
 * Layout mode for the filter list
 */
export type FilterListLayoutMode = "vertical" | "pills" | "horizontal";

/**
 * Interaction mode for filter items
 *
 * - "checkbox": Multi-select with checkboxes, supports "Select All" parent
 * - "category": Single-click toggle, visual highlight feedback
 */
export type FilterInteractionMode = "checkbox" | "category";

/**
 * Visual data indicator configuration for filter items
 *
 * - "histogram": Show distribution histogram bars
 * - "count": Show count number only
 * - "none": No data indicator
 */
export type FilterDataIndicator = "histogram" | "count" | "none";

/**
 * Color formatting for filter items
 */
export interface FilterItemColor {
  background?: string;
  text?: string;
  border?: string;
  histogramBar?: string;
}
