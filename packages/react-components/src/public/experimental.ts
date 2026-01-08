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

// ─── Filter List Base (unstyled) ─────────────────────────────────────────────

export { FilterList as BaseFilterList } from "../filter-list/base/FilterList.js";
export type { FilterListComponentProps as BaseFilterListProps } from "../filter-list/base/FilterList.js";

// ─── Filter List (Blueprint styled) ──────────────────────────────────────────

export { FilterList } from "../filter-list/blueprint/FilterList.js";

// Backwards compat aliases
export { FilterList as BlueprintFilterList } from "../filter-list/blueprint/FilterList.js";

export { AddFilterMenu } from "../filter-list/blueprint/AddFilterMenu.js";

export {
  checkboxListInputClassNames,
  containsTextInputClassNames,
  dateRangeInputClassNames,
  filterListClassNames,
  filterListItemClassNames,
  nullValueWrapperClassNames,
  numberRangeInputClassNames,
  toggleInputClassNames,
} from "../filter-list/blueprint/classNames.js";

// ─── Filter List ClassNames Types ─────────────────────────────────────────────

export type {
  CheckboxListInputClassNames,
  ContainsTextInputClassNames,
  DateRangeInputClassNames,
  FilterListClassNames,
  FilterListItemClassNames,
  NullValueWrapperClassNames,
  NumberRangeInputClassNames,
  ToggleInputClassNames,
} from "../filter-list/types/ClassNameOverrides.js";

export { mergeClassNames } from "../filter-list/types/ClassNameOverrides.js";

export type {
  FilterDefinitionUnion,
  FilterKey,
  FilterListProps,
  FilterState,
} from "../filter-list/FilterListApi.js";

export type {
  BaseFilterState,
  CheckboxListFilterState,
  ContainsTextFilterState,
  DateRangeFilterState,
  ExactMatchFilterState,
  FilterComponentType,
  FilterListItemProps,
  FilterStateByComponentType,
  FilterStateType,
  MultiDateFilterState,
  MultiSelectFilterState,
  NumberRangeFilterState,
  OverflowMenuRenderProps,
  PropertyFilterDefinition,
  PropertyFilterDefinition as FilterDefinition,
  PropertyTypeFromKey,
  SingleDateFilterState,
  SingleSelectFilterState,
  TimelineFilterState,
  ToggleFilterState,
  ValidComponentsForPropertyType,
} from "../filter-list/FilterListItemApi.js";

export type {
  FilterDataIndicator,
  FilterInteractionMode,
  FilterItemColor,
  FilterListLayoutMode,
} from "../filter-list/types/FilterDisplayTypes.js";

export type { FilterListTheme } from "../filter-list/types/FilterThemeTypes.js";

export type {
  HasLinkFilterDefinition,
  HasLinkFilterState,
  LinkedFilterDisplayMode,
  LinkedFilterGroupConfig,
  LinkedPropertyFilterDefinition,
  LinkedPropertyFilterState,
} from "../filter-list/types/LinkedFilterTypes.js";

export type {
  KeywordSearchFilterDefinition,
  KeywordSearchFilterState,
  StringPropertyKeys,
} from "../filter-list/types/KeywordSearchTypes.js";

export type {
  CustomFilterDefinition,
  CustomFilterInputRendererProps,
  CustomFilterItemRendererProps,
  CustomFilterState,
} from "../filter-list/types/CustomRendererTypes.js";

export type { FilterListPersistedState } from "../filter-list/types/FilterPanelTypes.js";

export type {
  AddFilterMenuProps,
  FilterCategory,
  FilterTemplate,
} from "../filter-list/types/AddFilterMenuTypes.js";

// ─── Object Table API ─────────────────────────────────────────────────────────

export type { ObjectTableProps } from "../object-table/ObjectTableApi.js";
