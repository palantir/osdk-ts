/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type * as Api from "@osdk/api";

import type * as FilterListItemApi from "../../filter-list/FilterListItemApi.js";
import * as Stable from "../filter-list.js";

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const BaseFilterList: typeof Stable.BaseFilterList =
  Stable.BaseFilterList;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type BaseFilterListProps<D extends Stable.FilterDefinitionControls> =
  Stable.BaseFilterListProps<D>;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type RenderFilterInput<D> = Stable.RenderFilterInput<D>;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const FilterList: typeof Stable.FilterList = Stable.FilterList;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type FilterChangeEvent<Q extends Api.ObjectTypeDefinition> =
  Stable.FilterChangeEvent<Q>;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type FilterChangeReason = Stable.FilterChangeReason;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type FilterChangeSnapshot<Q extends Api.ObjectTypeDefinition> =
  Stable.FilterChangeSnapshot<Q>;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type FilterDefinitionUnion<Q extends Api.ObjectTypeDefinition> =
  Stable.FilterDefinitionUnion<Q>;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type FilterListProps<Q extends Api.ObjectTypeDefinition> =
  Stable.FilterListProps<Q>;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type FilterComponentType = Stable.FilterComponentType;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type FilterDefinitionControls = Stable.FilterDefinitionControls;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type FilterState = Stable.FilterState;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type PropertyFilterDefinition<
  Q extends Api.ObjectTypeDefinition,
  K extends Api.PropertyKeys<Q> = Api.PropertyKeys<Q>,
  C extends FilterListItemApi.ValidComponentsForPropertyType<
    FilterListItemApi.PropertyTypeFromKey<Q, K>
  > = FilterListItemApi.ValidComponentsForPropertyType<
    FilterListItemApi.PropertyTypeFromKey<Q, K>
  >,
> = Stable.PropertyFilterDefinition<Q, K, C>;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const deserializeFilterStates: typeof Stable.deserializeFilterStates =
  Stable.deserializeFilterStates;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const serializeFilterStates: typeof Stable.serializeFilterStates =
  Stable.serializeFilterStates;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const FilterPopover: typeof Stable.FilterPopover = Stable.FilterPopover;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type FilterPopoverProps = Stable.FilterPopoverProps;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const FilterInput: typeof Stable.FilterInput = Stable.FilterInput;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type FilterInputProps<Q extends Api.ObjectTypeDefinition> =
  Stable.FilterInputProps<Q>;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const useFilterListState: typeof Stable.useFilterListState =
  Stable.useFilterListState;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type UseFilterListStateResult<Q extends Api.ObjectTypeDefinition> =
  Stable.UseFilterListStateResult<Q>;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const filterHasActiveState: typeof Stable.filterHasActiveState =
  Stable.filterHasActiveState;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const NO_VALUE: typeof Stable.NO_VALUE = Stable.NO_VALUE;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const getFilterKey: typeof Stable.getFilterKey = Stable.getFilterKey;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const getFilterLabel: typeof Stable.getFilterLabel =
  Stable.getFilterLabel;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const summarizeFilterValue: typeof Stable.summarizeFilterValue =
  Stable.summarizeFilterValue;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export type LinkedFilter<Q extends Api.ObjectTypeDefinition> =
  Stable.LinkedFilter<Q>;

/** @deprecated Import from `@osdk/react-components/filter-list` instead. */
export const narrowObjectSet: typeof Stable.narrowObjectSet =
  Stable.narrowObjectSet;
