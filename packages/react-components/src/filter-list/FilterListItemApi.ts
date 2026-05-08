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
  CompileTimeMetadata,
  ObjectSet,
  ObjectTypeDefinition,
  PropertyKeys,
  WirePropertyTypes,
} from "@osdk/api";
import type { CustomFilterState } from "./types/CustomRendererTypes.js";
import type { KeywordSearchFilterState } from "./types/KeywordSearchTypes.js";
import type {
  HasLinkFilterState,
  LinkedPropertyFilterState,
} from "./types/LinkedFilterTypes.js";

/**
 * Helper type to extract the property type from an ObjectTypeDefinition given a property key
 */
export type PropertyTypeFromKey<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> = CompileTimeMetadata<Q>["properties"][K]["type"];

/**
 * All available filter component types
 */
export type FilterComponentType =
  | "LISTOGRAM"
  | "DATE_RANGE"
  | "NUMBER_RANGE"
  | "TEXT_TAGS"
  | "CONTAINS_TEXT"
  | "SINGLE_SELECT"
  | "MULTI_SELECT"
  | "SINGLE_DATE"
  | "MULTI_DATE"
  | "TIMELINE"
  | "TOGGLE";

/**
 * Gets valid component types for a given property type
 */
export type ValidComponentsForPropertyType<P extends WirePropertyTypes> =
  P extends "boolean" ? "LISTOGRAM" | "SINGLE_SELECT" | "TOGGLE"
    : P extends "string" ?
        | "LISTOGRAM"
        | "TEXT_TAGS"
        | "CONTAINS_TEXT"
        | "SINGLE_SELECT"
        | "MULTI_SELECT"
    : P extends "datetime" | "timestamp"
      ? "DATE_RANGE" | "SINGLE_DATE" | "MULTI_DATE" | "TIMELINE"
    : P extends
      | "double"
      | "integer"
      | "long"
      | "float"
      | "short"
      | "byte"
      | "decimal" ? "NUMBER_RANGE" | "SINGLE_SELECT" | "MULTI_SELECT"
    : never;

/**
 * Union of all possible filter states
 */
export type FilterState =
  | ExactMatchFilterState<string | boolean>
  | DateRangeFilterState
  | ContainsTextFilterState
  | NumberRangeFilterState
  | SelectFilterState<string | boolean | number>
  | SelectFilterState<Date>
  | TimelineFilterState
  | ToggleFilterState
  | HasLinkFilterState
  | LinkedPropertyFilterState
  | KeywordSearchFilterState
  | CustomFilterState;

/**
 * Maps component types to their corresponding state types
 */
export interface FilterStateByComponentType {
  LISTOGRAM: ExactMatchFilterState<string | boolean>;
  DATE_RANGE: DateRangeFilterState;
  TEXT_TAGS: ExactMatchFilterState<string>;
  CONTAINS_TEXT: ContainsTextFilterState;
  NUMBER_RANGE: NumberRangeFilterState;
  SINGLE_SELECT: SelectFilterState<string | boolean | number>;
  MULTI_SELECT: SelectFilterState<string | boolean | number>;
  SINGLE_DATE: SelectFilterState<Date>;
  MULTI_DATE: SelectFilterState<Date>;
  TIMELINE: TimelineFilterState;
  TOGGLE: ToggleFilterState;
}

/**
 * All filter state discriminator types
 */
export type FilterStateType =
  | "EXACT_MATCH"
  | "DATE_RANGE"
  | "NUMBER_RANGE"
  | "CONTAINS_TEXT"
  | "SELECT"
  | "TIMELINE"
  | "TOGGLE"
  | "hasLink"
  | "linkedProperty"
  | "keywordSearch"
  | "custom";

/**
 * Base interface for all filter states
 * Contains common properties shared across all filter types
 */
export interface BaseFilterState {
  /**
   * The type of filter component
   */
  type: FilterStateType;

  /**
   * If true, the objects satisfying the filter are excluded
   * @default false
   */
  isExcluding?: boolean;

  /**
   * If true, include objects that have no value
   * @default false
   */
  includeNull?: boolean;
}

export interface ExactMatchFilterState<T = string | boolean>
  extends BaseFilterState
{
  type: "EXACT_MATCH";
  values: T[];
}

export interface DateRangeFilterState extends BaseFilterState {
  type: "DATE_RANGE";
  /**
   * The earliest date the user can select
   */
  minValue?: Date;
  /**
   * The latest date the user can select
   */
  maxValue?: Date;
}

export interface ContainsTextFilterState extends BaseFilterState {
  type: "CONTAINS_TEXT";
  value?: string;
}

export interface NumberRangeFilterState extends BaseFilterState {
  type: "NUMBER_RANGE";
  /**
   * Minimum numeric value (inclusive)
   */
  minValue?: number;
  /**
   * Maximum numeric value (inclusive)
   */
  maxValue?: number;
}

/**
 * Consolidated state type for select-based filters.
 * Used by SINGLE_SELECT, MULTI_SELECT, SINGLE_DATE, and MULTI_DATE.
 */
export interface SelectFilterState<T = string | boolean | number | Date>
  extends BaseFilterState
{
  type: "SELECT";
  selectedValues: T[];
}

export interface TimelineFilterState extends BaseFilterState {
  type: "TIMELINE";
  startDate?: Date;
  endDate?: Date;
  granularity?: "day" | "week" | "month" | "quarter" | "year";
}

export interface ToggleFilterState extends BaseFilterState {
  type: "TOGGLE";
  enabled: boolean;
}

/**
 * Optional date formatting/parsing callbacks. Mixed into
 * `PropertyFilterDefinition` only when the property is `datetime` or
 * `timestamp` — see {@link PropertyFilterDateExtras}.
 *
 * Display surfaces (date-range histogram tooltip, multi-date chip text,
 * timeline labels) call `formatDate` when provided; otherwise dates render
 * via the default locale-aware formatter.
 *
 * `parseDate` is the inverse of `formatDate`. It is plumbed through for
 * consumers that build text-based date inputs but is not invoked by the
 * built-in HTML `<input type="date">` controls (the browser handles those).
 *
 * Both functions receive/return `Date` instances in local time. If the
 * property is a UTC ISO string and you want a different timezone, do that
 * conversion inside your callback.
 */
export interface DateFormattingProps {
  formatDate?: (date: Date) => string;
  parseDate?: (text: string) => Date | undefined;
}

/**
 * Conditionally adds `formatDate` / `parseDate` to a property filter
 * definition only for `datetime` / `timestamp` properties. For other
 * property types these fields are typed as `never` so attempting to set
 * them is a TypeScript error.
 */
export type PropertyFilterDateExtras<P extends WirePropertyTypes> = P extends
  "datetime" | "timestamp" ? DateFormattingProps
  : { formatDate?: never; parseDate?: never };

interface PropertyFilterDefinitionBase<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  C extends ValidComponentsForPropertyType<
    PropertyTypeFromKey<Q, K>
  > = ValidComponentsForPropertyType<PropertyTypeFromKey<Q, K>>,
> {
  /**
   * Discriminator for filter definition type
   */
  type: "PROPERTY";

  /**
   * Optional unique identifier for stable keying across filter reorders.
   */
  id?: string;

  /**
   * The property key to filter on
   */
  key: K;

  /**
   * Display label for the filter
   */
  label?: string;

  /**
   * The filter component type to render
   * Must be compatible with the property type derived from the key, see ValidComponentsForPropertyType
   */
  filterComponent: C;

  /**
   * The current state of the filter.
   * If provided, the filter is controlled.
   */
  filterState: FilterStateByComponentType[C];

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
   * Custom display function for filter values.
   * Replaces the default string display in dropdown items, chips, and listogram rows.
   * The returned string is also used for search matching within filter dropdowns.
   */
  renderValue?: (value: string) => string;

  /**
   * Show aggregation counts next to filter option values.
   * Applies to LISTOGRAM, SINGLE_SELECT, and MULTI_SELECT components.
   * @default true for LISTOGRAM and MULTI_SELECT, false for SINGLE_SELECT
   */
  showCount?: boolean;

  /**
   * When true, clicking a bar in the histogram replaces the filter range
   * with that bucket's `[min, max]`. Only applies to histogram-rendering
   * filter components (`NUMBER_RANGE` and `DATE_RANGE`); ignored on other
   * component types.
   *
   * Click replaces the current range — clicking a second bar discards the
   * previous selection. Multi-bucket selection / shift+click union is NOT
   * supported in v1.
   *
   * @default false
   */
  clickToFilter?: boolean;

  /**
   * Controls whether this filter is rendered.
   * When false, the filter is hidden but its state is preserved.
   * @default true
   */
  isVisible?: boolean;
}

/**
 * A property filter definition specifies configuration for filtering on a single property
 *
 * The component type C must be compatible with the property type derived from the key.
 * For example, boolean properties can only use LISTOGRAM or SINGLE_SELECT,
 * while string properties can use LISTOGRAM, TEXT_TAGS, CONTAINS_TEXT, SINGLE_SELECT, or MULTI_SELECT.
 *
 * Date and datetime properties may additionally specify `formatDate` and `parseDate` — see
 * {@link PropertyFilterDateExtras}.
 */
export type PropertyFilterDefinition<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  C extends ValidComponentsForPropertyType<
    PropertyTypeFromKey<Q, K>
  > = ValidComponentsForPropertyType<PropertyTypeFromKey<Q, K>>,
> =
  & PropertyFilterDefinitionBase<Q, K, C>
  & PropertyFilterDateExtras<PropertyTypeFromKey<Q, K>>;

/**
 * Props for a single filter list item component.
 * Extends PropertyFilterDefinition with runtime props for rendering.
 */
export type FilterListItemProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  C extends ValidComponentsForPropertyType<
    PropertyTypeFromKey<Q, K>
  > = ValidComponentsForPropertyType<PropertyTypeFromKey<Q, K>>,
> = PropertyFilterDefinition<Q, K, C> & {
  objectSet: ObjectSet<Q>;

  /**
   * Called when the state of the filter changes.
   * Required in controlled mode.
   */
  onFilterStateChanged: (state: FilterStateByComponentType[C]) => void;

  onFilterRemoved?: (key: PropertyKeys<Q>) => void;
};
