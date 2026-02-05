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
  | "CHECKBOX_LIST"
  | "TOGGLE";

/**
 * Gets valid component types for a given property type
 */
export type ValidComponentsForPropertyType<P extends WirePropertyTypes> =
  P extends "boolean"
    ? "LISTOGRAM" | "CHECKBOX_LIST" | "SINGLE_SELECT" | "TOGGLE"
    : P extends "string" ?
        | "LISTOGRAM"
        | "TEXT_TAGS"
        | "CONTAINS_TEXT"
        | "SINGLE_SELECT"
        | "MULTI_SELECT"
        | "CHECKBOX_LIST"
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
  CHECKBOX_LIST: SelectFilterState<string>;
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
  | "HAS_LINK"
  | "LINKED_PROPERTY"
  | "KEYWORD_SEARCH"
  | "CUSTOM";

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
 * Used by SINGLE_SELECT, MULTI_SELECT, SINGLE_DATE, MULTI_DATE, and CHECKBOX_LIST.
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
 * A property filter definition specifies configuration for filtering on a single property
 *
 * The component type C must be compatible with the property type derived from the key.
 * For example, boolean properties can only use LISTOGRAM, CHECKBOX_LIST, or SINGLE_SELECT,
 * while string properties can use LISTOGRAM, TEXT_TAGS, CONTAINS_TEXT, SINGLE_SELECT, MULTI_SELECT, or CHECKBOX_LIST.
 */
export interface PropertyFilterDefinition<
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
   * Controls whether this filter is rendered.
   * When false, the filter is hidden but its state is preserved.
   * @default true
   */
  isVisible?: boolean;
}

/**
 * Props for a single filter list item component.
 * Extends PropertyFilterDefinition with runtime props for rendering.
 */
export interface FilterListItemProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  C extends ValidComponentsForPropertyType<
    PropertyTypeFromKey<Q, K>
  > = ValidComponentsForPropertyType<PropertyTypeFromKey<Q, K>>,
> extends PropertyFilterDefinition<Q, K, C> {
  objectSet: ObjectSet<Q>;

  /**
   * Called when the state of the filter changes.
   * Required in controlled mode.
   */
  onFilterStateChanged: (state: FilterStateByComponentType[C]) => void;

  onFilterRemoved?: (key: PropertyKeys<Q>) => void;
}
