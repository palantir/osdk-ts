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
  WhereClause,
} from "@osdk/api";
import type {
  BaseFilterState,
  FilterState,
  FilterStateByComponentType,
  PropertyTypeFromKey,
  ValidComponentsForPropertyType,
} from "../FilterListItemApi.js";

/**
 * Distributive form keeps `linkName`, `reverseLinkName`, and `innerWhere`
 * correlated per link, so `narrowObjectSet` can apply the pivot without
 * casting away the link-side generic.
 */
export type LinkedFilter<Q extends ObjectTypeDefinition> = {
  [L in LinkNames<Q>]: {
    linkName: L;
    reverseLinkName: LinkNames<LinkedType<Q, L>>;
    innerWhere: WhereClause<LinkedType<Q, L>>;
  };
}[LinkNames<Q>];

/** Shared empty default for `LinkedFilter` arrays — avoids new-array-per-render. */
export const EMPTY_LINKED_FILTERS: readonly never[] = [];

/**
 * State for "has link" filter
 */
export interface HasLinkFilterState extends BaseFilterState {
  type: "hasLink";
  hasLink: boolean;
}

/**
 * State for linked property filter
 * Wraps the filter state of the linked property
 */
export interface LinkedPropertyFilterState<S extends FilterState = FilterState>
  extends BaseFilterState
{
  type: "linkedProperty";
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
  type: "HAS_LINK";
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
  type: "LINKED_PROPERTY";
  /**
   * Optional unique identifier for stable keying across filter reorders.
   */
  id?: string;
  linkName: L;
  /**
   * Name of the link on the linked object type that points back to `Q`. Used
   * to invert the pivot when applying the filter's narrowing to the source
   * object set. Required.
   */
  reverseLinkName: LinkNames<LinkedQ>;
  linkedPropertyKey: LinkedK;
  linkedFilterComponent: LinkedC;
  linkedFilterState: FilterStateByComponentType[LinkedC];
  defaultLinkedFilterState?: FilterStateByComponentType[LinkedC];
  filterState: LinkedPropertyFilterState<FilterStateByComponentType[LinkedC]>;
  label?: string;

  /**
   * Show aggregation counts next to filter option values.
   * Applies to LISTOGRAM, SINGLE_SELECT, and MULTI_SELECT linked components.
   * @default true for LISTOGRAM and MULTI_SELECT, false for SINGLE_SELECT
   */
  showCount?: boolean;

  /**
   * Controls whether this filter is rendered.
   * When false, the filter is hidden but its state is preserved.
   * @default true
   */
  isVisible?: boolean;
}
