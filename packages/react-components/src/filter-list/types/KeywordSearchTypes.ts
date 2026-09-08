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

import type { ObjectTypeDefinition, PropertyKeys } from "@osdk/api";

import type {
  BaseFilterState,
  FilterDefinitionControls,
} from "../FilterListItemApi.js";

/**
 * Keys of string properties on an object type
 */
export type StringPropertyKeys<Q extends ObjectTypeDefinition> =
  PropertyKeys.Filtered<Q, "string">;

/**
 * State for keyword search filter
 */
export interface KeywordSearchFilterState extends BaseFilterState {
  type: "keywordSearch";
  searchTerm: string;
  /**
   * How multiple terms are combined
   * - "AND": All terms must match
   * - "OR": Any term must match
   */
  operator: "AND" | "OR";
}

/**
 * Filter definition for keyword search across string properties
 */
export interface KeywordSearchFilterDefinition<
  Q extends ObjectTypeDefinition,
  K extends StringPropertyKeys<Q> = StringPropertyKeys<Q>,
> extends FilterDefinitionControls {
  type: "KEYWORD_SEARCH";
  /**
   * Properties to search within
   * - "all": Search all string properties
   * - K[]: Search specific string properties
   */
  properties: "all" | K[];
  label?: string;
  /**
   * Seeds the filter's state on mount, FilterList owns the state from then on
   *
   * @default undefined (filter starts empty)
   */
  defaultFilterState?: KeywordSearchFilterState;

  /**
   * @deprecated Has no effect, remove it.
   */
  filterState?: KeywordSearchFilterState;
}
