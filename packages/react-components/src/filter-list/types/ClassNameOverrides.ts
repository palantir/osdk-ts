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

import type React from "react";

/**
 * Class name overrides for FilterList component elements.
 * Users can pass custom class names to style any element.
 */
export interface FilterListClassNames {
  root?: string;
  header?: string;
  collapseButton?: string;
  collapseIcon?: string;
  titleContainer?: string;
  titleIcon?: string;
  title?: string;
  activeCount?: string;
  resetButton?: string;
  content?: string;
  contentEmpty?: string;
  addButtonContainer?: string;
  addButton?: string;
  item?: FilterListItemClassNames;
  checkboxListInput?: CheckboxListInputClassNames;
  containsTextInput?: ContainsTextInputClassNames;
  containsTextInputRenderProps?: ContainsTextInputRenderProps;
  toggleInput?: ToggleInputClassNames;
  numberRangeInput?: NumberRangeInputClassNames;
  dateRangeInput?: DateRangeInputClassNames;
  nullValueWrapper?: NullValueWrapperClassNames;
}

/**
 * Class name overrides for FilterListItem component elements.
 */
export interface FilterListItemClassNames {
  root?: string;
  header?: string;
  headerButton?: string;
  chevron?: string;
  label?: string;
  excludeBadge?: string;
  excludeToggle?: string;
  excludeIcon?: string;
  overflowMenu?: string;
  content?: string;
}

/**
 * Class name overrides for CheckboxListInput component elements.
 */
export interface CheckboxListInputClassNames {
  root?: string;
  searchContainer?: string;
  searchInput?: string;
  searchClearButton?: string;
  selectionInfo?: string;
  selectionCount?: string;
  clearAllButton?: string;
  selectAllContainer?: string;
  selectAllCheckbox?: string;
  selectAllLabel?: string;
  checkboxRow?: string;
  histogramBar?: string;
  checkbox?: string;
  checkboxIndicator?: string;
  checkboxLabel?: string;
  valueText?: string;
  count?: string;
  loadingMessage?: string;
  errorMessage?: string;
  emptyMessage?: string;
  moreIndicator?: string;
}

/**
 * Render props for ContainsTextInput icons.
 */
export interface ContainsTextInputRenderProps {
  renderSearchIcon?: () => React.ReactNode;
  renderClearIcon?: () => React.ReactNode;
}

/**
 * Class name overrides for ContainsTextInput component elements.
 */
export interface ContainsTextInputClassNames {
  root?: string;
  inputGroup?: string;
  searchIcon?: string;
  input?: string;
  clearButton?: string;
  clearIcon?: string;
}

/**
 * Class name overrides for ToggleInput component elements.
 */
export interface ToggleInputClassNames {
  root?: string;
  switch?: string;
  switchIndicator?: string;
  label?: string;
}

/**
 * Class name overrides for range input components (NumberRangeInput, DateRangeInput).
 */
export interface RangeInputClassNames {
  root?: string;
  histogramContainer?: string;
  histogramBar?: string;
  inputsContainer?: string;
  inputWrapper?: string;
  inputLabel?: string;
  input?: string;
  separator?: string;
  loadingMessage?: string;
  errorMessage?: string;
}

export type NumberRangeInputClassNames = RangeInputClassNames;
export type DateRangeInputClassNames = RangeInputClassNames;

/**
 * Class name overrides for NullValueWrapper component elements.
 */
export interface NullValueWrapperClassNames {
  root?: string;
  nullValueRow?: string;
  checkbox?: string;
  checkboxIndicator?: string;
  label?: string;
  count?: string;
}

/**
 * Class name overrides for SingleSelectInput component elements.
 */
export interface SingleSelectInputClassNames {
  root?: string;
  selectContainer?: string;
  select?: string;
  clearButton?: string;
  loadingMessage?: string;
  errorMessage?: string;
  emptyMessage?: string;
}

/**
 * Class name overrides for MultiSelectInput component elements.
 */
export interface MultiSelectInputClassNames {
  root?: string;
  inputContainer?: string;
  input?: string;
  tagContainer?: string;
  tag?: string;
  tagRemoveButton?: string;
  clearAllButton?: string;
  dropdown?: string;
  dropdownItem?: string;
  dropdownItemSelected?: string;
  loadingMessage?: string;
  errorMessage?: string;
  emptyMessage?: string;
}

/**
 * Class name overrides for SingleDateInput component elements.
 */
export interface SingleDateInputClassNames {
  root?: string;
  inputContainer?: string;
  input?: string;
  clearButton?: string;
  loadingMessage?: string;
  errorMessage?: string;
}

/**
 * Class name overrides for ListogramInput component elements.
 */
export interface ListogramInputClassNames {
  root?: string;
  barContainer?: string;
  barRow?: string;
  barRowSelected?: string;
  barLabel?: string;
  bar?: string;
  barFill?: string;
  barCount?: string;
  loadingMessage?: string;
  errorMessage?: string;
  emptyMessage?: string;
}

/**
 * Class name overrides for TextTagsInput component elements.
 */
export interface TextTagsInputClassNames {
  root?: string;
  inputContainer?: string;
  input?: string;
  tagContainer?: string;
  tag?: string;
  tagRemoveButton?: string;
  suggestionList?: string;
  suggestionItem?: string;
  loadingMessage?: string;
  errorMessage?: string;
}

/**
 * Class name overrides for MultiDateInput component elements.
 */
export interface MultiDateInputClassNames {
  root?: string;
  calendarContainer?: string;
  selectedDatesContainer?: string;
  selectedDateTag?: string;
  selectedDateRemoveButton?: string;
  clearAllButton?: string;
  loadingMessage?: string;
  errorMessage?: string;
}

/**
 * Class name overrides for TimelineInput component elements.
 */
export interface TimelineInputClassNames {
  root?: string;
  chartContainer?: string;
  brushContainer?: string;
  selectedRange?: string;
  rangeLabels?: string;
  loadingMessage?: string;
  errorMessage?: string;
}

/**
 * Utility function to merge class names, filtering out undefined values.
 * Returns undefined if no class names are provided (avoids empty className="" in DOM).
 */
export function mergeClassNames(
  ...classNames: Array<string | undefined>
): string | undefined {
  const merged = classNames.filter(Boolean).join(" ");
  return merged.length > 0 ? merged : undefined;
}
