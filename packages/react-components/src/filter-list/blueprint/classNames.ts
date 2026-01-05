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

import { Icon } from "@blueprintjs/core";
import React from "react";
import type {
  CheckboxListInputClassNames,
  ContainsTextInputClassNames,
  ContainsTextInputRenderProps,
  DateRangeInputClassNames,
  FilterListClassNames,
  FilterListItemClassNames,
  NullValueWrapperClassNames,
  NumberRangeInputClassNames,
  ToggleInputClassNames,
} from "../types/ClassNameOverrides.js";

/**
 * Blueprint class names for FilterListItem component
 */
export const filterListItemClassNames: FilterListItemClassNames = {
  root: "filter-list__item",
  header: "filter-list__item-header bp6-interactive",
  headerButton: "filter-list__item-header-button",
  chevron: "filter-list__item-chevron",
  label: "filter-list__item-label",
  excludeBadge: "filter-list__item-exclude-badge bp6-tag bp6-minimal bp6-small",
  excludeToggle:
    "bp6-button bp6-minimal bp6-small filter-list__item-exclude-toggle",
  excludeIcon: "bp6-icon",
  overflowMenu:
    "bp6-button bp6-minimal bp6-small filter-list__item-overflow-menu",
  content: "filter-list__item-content",
};

/**
 * Blueprint class names for CheckboxListInput component
 */
export const checkboxListInputClassNames: CheckboxListInputClassNames = {
  root: "filter-input--checkbox-list",
  selectAllContainer: "filter-input--checkbox-list-select-all",
  selectAllCheckbox: "bp6-control bp6-checkbox",
  selectAllLabel: "",
  checkboxRow: "filter-input__checkbox-row",
  histogramBar: "filter-input__histogram-bar",
  checkbox: "bp6-control bp6-checkbox",
  checkboxIndicator: "bp6-control-indicator",
  checkboxLabel: "",
  valueText: "filter-input__value-text",
  count: "filter-input__count",
  loadingMessage: "bp6-text-muted bp6-text-small",
  errorMessage: "bp6-text-small bp6-intent-danger",
  emptyMessage: "bp6-text-muted bp6-text-small",
  moreIndicator: "filter-input__view-all-link",
};

/**
 * Blueprint class names for ContainsTextInput component
 */
export const containsTextInputClassNames: ContainsTextInputClassNames = {
  root: "filter-input--text",
  inputGroup: "bp6-input-group",
  searchIcon: "bp6-icon bp6-icon-search",
  input: "bp6-input",
  clearButton: "bp6-button bp6-minimal bp6-small filter-input__clear",
  clearIcon: "bp6-icon bp6-icon-cross",
};

export const containsTextInputRenderProps: ContainsTextInputRenderProps = {
  renderSearchIcon: () => React.createElement(Icon, { icon: "search" }),
  renderClearIcon: () => React.createElement(Icon, { icon: "cross" }),
};

/**
 * Blueprint class names for ToggleInput component
 */
export const toggleInputClassNames: ToggleInputClassNames = {
  root: "filter-input--toggle",
  switch: "bp6-control bp6-switch",
  switchIndicator: "bp6-control-indicator",
  label: "",
};

/**
 * Blueprint class names for NumberRangeInput component
 */
export const numberRangeInputClassNames: NumberRangeInputClassNames = {
  root: "filter-input--number-range",
  histogramContainer: "filter-input__histogram-container",
  histogramBar: "filter-input__histogram-bar-vertical",
  inputsContainer: "filter-input__range-inputs",
  inputWrapper: "filter-input__range-input-wrapper",
  inputLabel: "filter-input__range-label bp6-text-muted bp6-text-small",
  input: "bp6-input bp6-small",
  separator: "filter-input__range-separator",
  loadingMessage: "bp6-text-muted bp6-text-small",
};

/**
 * Blueprint class names for DateRangeInput component
 */
export const dateRangeInputClassNames: DateRangeInputClassNames = {
  root: "filter-input--date-range",
  inputsContainer: "filter-input__range-inputs",
  inputWrapper: "filter-input__range-input-wrapper",
  inputLabel: "filter-input__range-label bp6-text-muted bp6-text-small",
  input: "bp6-input bp6-small",
  separator: "filter-input__range-separator",
  loadingMessage: "bp6-text-muted bp6-text-small",
};

/**
 * Blueprint class names for NullValueWrapper component
 */
export const nullValueWrapperClassNames: NullValueWrapperClassNames = {
  root: "filter-input__null-wrapper",
  nullValueRow: "filter-input__null-value-row",
  checkbox: "bp6-control bp6-checkbox",
  checkboxIndicator: "bp6-control-indicator",
  label: "filter-input__null-label",
  count: "filter-input__count",
};

/**
 * Blueprint class names for FilterList component (includes all nested classNames)
 */
export const filterListClassNames: FilterListClassNames = {
  root: "filter-list",
  header: "filter-list__header",
  collapseButton:
    "bp6-button bp6-minimal bp6-small filter-list__collapse-button",
  collapseIcon: "bp6-icon",
  titleContainer: "filter-list__title-container",
  titleIcon: "filter-list__title-icon",
  title: "filter-list__title",
  activeCount: "filter-list__active-count bp6-text-muted bp6-text-small",
  resetButton: "bp6-button bp6-minimal bp6-small bp6-intent-primary",
  content: "filter-list__content",
  contentEmpty:
    "filter-list__content filter-list__content--empty bp6-text-muted",
  addButtonContainer: "filter-list__add-button--fixed",
  addButton:
    "bp6-button bp6-minimal bp6-intent-primary filter-list__add-button",
  item: filterListItemClassNames,
  checkboxListInput: checkboxListInputClassNames,
  containsTextInput: containsTextInputClassNames,
  containsTextInputRenderProps: containsTextInputRenderProps,
  toggleInput: toggleInputClassNames,
  numberRangeInput: numberRangeInputClassNames,
  dateRangeInput: dateRangeInputClassNames,
  nullValueWrapper: nullValueWrapperClassNames,
};
