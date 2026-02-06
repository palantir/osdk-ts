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

/**
 * Props for a single filter list item component
 */
export interface FilterListItemProps<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  C extends ValidComponentsForPropertyType<
    PropertyTypeFromKey<Q, K>
  > = ValidComponentsForPropertyType<PropertyTypeFromKey<Q, K>>,
> extends FilterDefinition<Q, K, C> {
  objectSet: ObjectSet<Q>;

  /**
   * Called when the state of the filter changes.
   * Required in controlled mode.
   */
  onFilterStateChanged: (state: FilterStateByComponentType[C]) => void;

  onFilterRemoved?: (key: PropertyKeys<Q>) => void;
}

/**
 * A filter definition specifies configuration for a single filter
 *
 * The component type C must be compatible with the property type derived from the key.
 * For example, boolean properties can only use LISTOGRAM,
 * while string properties can use LISTOGRAM, TEXT_TAGS, or CONTAINS_TEXT.
 */
export interface FilterDefinition<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  C extends ValidComponentsForPropertyType<
    PropertyTypeFromKey<Q, K>
  > = ValidComponentsForPropertyType<PropertyTypeFromKey<Q, K>>,
> {
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
}

/**
 * Helper type to extract the property type from an ObjectTypeDefinition given a property key
 */
type PropertyTypeFromKey<
  Q extends ObjectTypeDefinition,
  K extends PropertyKeys<Q>,
> = CompileTimeMetadata<Q>["properties"][K]["type"];

export type FilterComponentType =
  | "LISTOGRAM"
  | "DATE_RANGE"
  | "NUMBER_RANGE"
  | "TEXT_TAGS"
  | "CONTAINS_TEXT";

/**
 * Gets valid component types for a given property type
 */
export type ValidComponentsForPropertyType<P extends WirePropertyTypes> =
  P extends "boolean" ? "LISTOGRAM"
    : P extends "string" ? "LISTOGRAM" | "TEXT_TAGS" | "CONTAINS_TEXT"
    : P extends "datetime" | "timestamp" ? "DATE_RANGE"
    : P extends
      | "double"
      | "integer"
      | "long"
      | "float"
      | "short"
      | "byte"
      | "decimal" ? "NUMBER_RANGE"
    : never;

/**
 * Union of all possible filter states
 */
export type FilterState =
  | ExactMatchFilterState<string | boolean>
  | DateRangeFilterState
  | ContainsTextFilterState
  | NumberRangeFilterState;

/**
 * Maps component types to their corresponding state types
 */
export interface FilterStateByComponentType {
  LISTOGRAM: ExactMatchFilterState<string | boolean>;
  DATE_RANGE: DateRangeFilterState;
  TEXT_TAGS: ExactMatchFilterState<string>;
  CONTAINS_TEXT: ContainsTextFilterState;
  NUMBER_RANGE: NumberRangeFilterState;
}

type FilterStateType =
  | "EXACT_MATCH"
  | "DATE_RANGE"
  | "NUMBER_RANGE"
  | "CONTAINS_TEXT";

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
