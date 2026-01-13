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
  LinkedType,
  LinkNames,
  ObjectTypeDefinition,
  PropertyKeys,
} from "@osdk/api";
import type {
  BaseFilterState,
  FilterState,
  FilterStateByComponentType,
  PropertyTypeFromKey,
  ValidComponentsForPropertyType,
} from "../FilterListItemApi.js";

/**
 * State for "has link" filter
 */
export interface HasLinkFilterState extends BaseFilterState {
  type: "HAS_LINK";
  hasLink: boolean;
}

/**
 * State for linked property filter
 * Wraps the filter state of the linked property
 */
export interface LinkedPropertyFilterState<S extends FilterState = FilterState>
  extends BaseFilterState
{
  type: "LINKED_PROPERTY";
  linkedFilterState: S;
}

/**
 * Filter definition for "Has Link" filter
 * Filters objects based on whether they have any linked objects of the specified type
 */
export interface HasLinkFilterDefinition<
  Q extends ObjectTypeDefinition,
  L extends LinkNames<Q> = LinkNames<Q>,
> {
  type: "hasLink";
  /**
   * Optional unique identifier for stable keying across filter reorders.
   */
  id?: string;
  linkName: L;
  label?: string;
  filterState: HasLinkFilterState;
  defaultFilterState?: HasLinkFilterState;
  /**
   * Controls whether this filter is rendered.
   * When false, the filter is hidden but its state is preserved.
   * @default true
   */
  isVisible?: boolean;
}

/**
 * Filter definition for filtering on a property of linked objects
 */
export interface LinkedPropertyFilterDefinition<
  Q extends ObjectTypeDefinition,
  L extends LinkNames<Q>,
  LinkedQ extends ObjectTypeDefinition = LinkedType<Q, L>,
  LinkedK extends PropertyKeys<LinkedQ> = PropertyKeys<LinkedQ>,
  LinkedC extends ValidComponentsForPropertyType<
    PropertyTypeFromKey<LinkedQ, LinkedK>
  > = ValidComponentsForPropertyType<PropertyTypeFromKey<LinkedQ, LinkedK>>,
> {
  type: "linkedProperty";
  /**
   * Optional unique identifier for stable keying across filter reorders.
   */
  id?: string;
  linkName: L;
  linkedPropertyKey: LinkedK;
  linkedFilterComponent: LinkedC;
  linkedFilterState: FilterStateByComponentType[LinkedC];
  defaultLinkedFilterState?: FilterStateByComponentType[LinkedC];
  label?: string;
  /**
   * Controls whether this filter is rendered.
   * When false, the filter is hidden but its state is preserved.
   * @default true
   */
  isVisible?: boolean;
}

/**
 * Display mode for linked filters
 *
 * - "inline": Show alongside non-linked filters in the main list
 * - "grouped": Group by link type with collapsible sections
 */
export type LinkedFilterDisplayMode = "inline" | "grouped";

/**
 * Configuration for a group of linked filters
 */
export interface LinkedFilterGroupConfig<
  Q extends ObjectTypeDefinition,
  L extends LinkNames<Q> = LinkNames<Q>,
> {
  linkName: L;
  displayMode: LinkedFilterDisplayMode;
  collapsedByDefault?: boolean;
  groupLabel?: string;
}
