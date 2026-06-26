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

export { BaseFilterList } from "../../filter-list/base/BaseFilterList.js";
export type {
  BaseFilterListProps,
  RenderFilterInput,
} from "../../filter-list/base/BaseFilterListApi.js";
import { FilterList as _FilterList } from "../../filter-list/FilterList.js";
import { withOsdkMetrics } from "../../util/withOsdkMetrics.js";
export const FilterList: typeof _FilterList = withOsdkMetrics(
  _FilterList,
  "FilterList",
);

export type {
  FilterDefinitionUnion,
  FilterListProps,
} from "../../filter-list/FilterListApi.js";
export { DEFAULT_DATE_RANGE_SHORTCUTS } from "../../filter-list/FilterListItemApi.js";
export type {
  DateRangePickerShortcut,
  FilterComponentType,
  FilterDefinitionControls,
  FilterListItemProps,
  FilterState,
  PropertyFilterDefinition,
} from "../../filter-list/FilterListItemApi.js";
export {
  deserializeFilterStates,
  serializeFilterStates,
} from "../../filter-list/utils/filterStateSerialization.js";

export { FilterPopover } from "../../filter-list/base/FilterPopover.js";
export type { FilterPopoverProps } from "../../filter-list/base/FilterPopover.js";

export { FilterInput } from "../../filter-list/FilterInput.js";
export type { FilterInputProps } from "../../filter-list/FilterInput.js";

export { useFilterListState } from "../../filter-list/hooks/useFilterListState.js";
export type { UseFilterListStateResult } from "../../filter-list/hooks/useFilterListState.js";

export {
  filterHasActiveState,
  NO_VALUE,
} from "../../filter-list/utils/filterValues.js";
export { getFilterKey } from "../../filter-list/utils/getFilterKey.js";
export { getFilterLabel } from "../../filter-list/utils/getFilterLabel.js";
export { summarizeFilterValue } from "../../filter-list/utils/summarizeFilterValue.js";

export type { LinkedFilter } from "../../filter-list/types/LinkedFilterTypes.js";
export { narrowObjectSet } from "../../filter-list/utils/narrowObjectSet.js";
