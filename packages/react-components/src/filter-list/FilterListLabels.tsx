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

import { isEqual } from "lodash-es";
import React, {
  createContext,
  type ReactElement,
  type ReactNode,
  useContext,
  useRef,
} from "react";

/**
 * All user-facing strings rendered by the filter list, its header, and every
 * filter input.
 */
export interface FilterListLabels {
  /** @default "Reset filters" */
  resetFilters: string;
  /** @default "Expand filters" */
  expandFilters: string;
  /** @default "Collapse filters" */
  collapseFilters: string;
  /**
   * Shown next to the expand button while the panel is collapsed and no
   * `title` was supplied.
   * @default "Filters"
   */
  collapsedTitle: string;
  /** Label of the built-in add-filter trigger. @default "+ Add filter" */
  addFilter: string;
  /** @default "Search filters" */
  addFilterSearchPlaceholder: string;
  /** @default "No matching filters" */
  addFilterNoMatches: string;

  /** @default (filterLabel) => `Reorder ${filterLabel}` */
  reorderFilter: (filterLabel: string) => string;
  /** Header monocle that toggles the in-filter value search. @default "Search values" */
  toggleFilterSearch: string;
  /** @default (filterLabel) => `Remove ${filterLabel} filter` */
  removeFilter: (filterLabel: string) => string;
  /** Header button that reveals the keeping/excluding row. @default "More actions" */
  moreActions: string;
  /** @default "Search property values..." */
  filterSearchPlaceholder: string;
  /** @default "Search property values" */
  filterSearchAriaLabel: string;
  /** @default "Clear search" */
  clearSearch: string;
  /** Rendered in place of a filter input that threw. @default "Error loading filter" */
  filterLoadError: string;

  /** @default (filterLabel) => `Picked up ${filterLabel} filter` */
  dragPickedUp: (filterLabel: string) => string;
  /** @default "Not over a droppable area" */
  dragNotOverDroppable: string;
  /** @default (position, total) => `Moved to position ${position} of ${total}` */
  dragMovedToPosition: (position: number, total: number) => string;
  /** @default (filterLabel, position) => `Dropped ${filterLabel} filter at position ${position}` */
  dragDroppedAtPosition: (filterLabel: string, position: number) => string;
  /** @default (filterLabel) => `Dropped ${filterLabel} filter back in its original position` */
  dragDroppedInOriginalPosition: (filterLabel: string) => string;
  /** @default (filterLabel) => `Cancelled dragging ${filterLabel} filter` */
  dragCancelled: (filterLabel: string) => string;
  /**
   * Stands in for the filter name in the drag announcements when the dragged
   * filter can no longer be resolved.
   * @default "filter"
   */
  dragUnknownFilter: string;

  /** @default "Keeping" */
  keeping: string;
  /** @default "Excluding" */
  excluding: string;
  /** @default "Approximate count of unique values" */
  uniqueValueCountTooltip: string;
  /** @default (selected, total) => `${selected} of ${total} values` */
  selectedOfTotalValues: (selected: number, total: number) => string;
  /** @default "Clear all" */
  clearAll: string;

  /** Shown in a `FilterPopover` trigger with no selection. @default "Any" */
  popoverEmptySummary: string;

  /** Rendered for the null/undefined value bucket. @default "No value" */
  noValue: string;
  /** Rendered for a literal empty-string value. @default "(empty string)" */
  emptyStringValue: string;

  /** @default (errorMessage) => `Error loading values: ${errorMessage}` */
  valuesLoadError: (errorMessage: string) => string;
  /** @default "No values available" */
  noValuesAvailable: string;
  /** @default "View less" */
  viewLess: string;
  /** @default (count) => `View all (${count})` */
  viewAll: (count: number) => string;

  /** Screen-reader status announced while options load. @default "Loading options" */
  loadingOptions: string;
  /** @default (errorMessage) => `Error loading options: ${errorMessage}` */
  optionsLoadError: (errorMessage: string) => string;
  /** @default "No options available" */
  noOptionsAvailable: string;
  /** @default "No matching options" */
  noMatchingOptions: string;
  /** @default "Select values..." */
  multiSelectPlaceholder: string;
  /** @default "Search values" */
  multiSelectAriaLabel: string;
  /** @default "Select a value..." */
  singleSelectPlaceholder: string;
  /** @default "Select value" */
  singleSelectAriaLabel: string;
  /** @default (propertyLabel) => `Select ${propertyLabel}` */
  selectPropertyAriaLabel: (propertyLabel: string) => string;
  /** @default (propertyLabel) => `Search ${propertyLabel} values` */
  searchPropertyValuesAriaLabel: (propertyLabel: string) => string;

  /** @default (errorMessage) => `Error loading suggestions: ${errorMessage}` */
  suggestionsLoadError: (errorMessage: string) => string;
  /** @default "Add a tag..." */
  addTagPlaceholder: string;
  /** @default "Add tag" */
  addTagAriaLabel: string;
  /** @default (tagLabel) => `Remove ${tagLabel}` */
  removeTag: (tagLabel: string) => string;
  /** @default (value) => `Press Enter to add "${value}"` */
  pressEnterToAddTag: (value: string) => string;
  /** @default "No suggestions" */
  noSuggestions: string;
  /** @default "Type to add a tag" */
  typeToAddTag: string;

  /** @default "Select date" */
  selectDate: string;
  /** @default "Clear date" */
  clearDate: string;
  /** @default "Add date" */
  addDate: string;
  /** @default "Clear all dates" */
  clearAllDates: string;
  /** @default (dateLabel) => `Remove ${dateLabel}` */
  removeDate: (dateLabel: string) => string;
  /** @default "Clear range" */
  clearRange: string;
  /** @default "Start date" */
  timelineStartDate: string;
  /** @default "End date" */
  timelineEndDate: string;
  /** Sits between the two timeline period labels. @default "to" */
  timelineRangeSeparator: string;

  /** @default "Min" */
  numberRangeMinLabel: string;
  /** @default "Max" */
  numberRangeMaxLabel: string;
  /** @default "From" */
  dateRangeMinLabel: string;
  /** @default "To" */
  dateRangeMaxLabel: string;
  /** Clears both range bounds. @default "Clear" */
  clearRangeFilter: string;
  /** @default "Histogram of value counts" */
  histogramAriaLabel: string;
  /** @default "Failed to load null count" */
  nullCountLoadError: string;

  /** @default "Search..." */
  textSearchPlaceholder: string;
  /** @default (propertyLabel) => `Search ${propertyLabel}...` */
  searchPropertyPlaceholder: (propertyLabel: string) => string;
  /**
   * Fallback filter name for a `KEYWORD_SEARCH` definition without a `label`.
   * @default "Search"
   */
  keywordSearchFilterLabel: string;

  /** @default "Custom filter missing renderInput" */
  customFilterMissingRenderInput: string;
  /** @default "Unsupported filter type" */
  unsupportedFilterType: string;

  /** @default (count) => `${count} selected` */
  summaryMultipleSelected: (count: number) => string;
  /** @default "(No value)" */
  summaryNoValue: string;
  /** @default "Includes empty" */
  summaryIncludesEmpty: string;
  /** @default "Enabled" */
  summaryEnabled: string;
  /** @default "Has link" */
  summaryHasLink: string;
  /** @default "Custom" */
  summaryCustom: string;
}

export const DEFAULT_FILTER_LIST_LABELS: FilterListLabels = {
  resetFilters: "Reset filters",
  expandFilters: "Expand filters",
  collapseFilters: "Collapse filters",
  collapsedTitle: "Filters",
  addFilter: "+ Add filter",
  addFilterSearchPlaceholder: "Search filters",
  addFilterNoMatches: "No matching filters",

  reorderFilter: (filterLabel) => `Reorder ${filterLabel}`,
  toggleFilterSearch: "Search values",
  removeFilter: (filterLabel) => `Remove ${filterLabel} filter`,
  moreActions: "More actions",
  filterSearchPlaceholder: "Search property values...",
  filterSearchAriaLabel: "Search property values",
  clearSearch: "Clear search",
  filterLoadError: "Error loading filter",

  dragPickedUp: (filterLabel) => `Picked up ${filterLabel} filter`,
  dragNotOverDroppable: "Not over a droppable area",
  dragMovedToPosition: (position, total) =>
    `Moved to position ${position} of ${total}`,
  dragDroppedAtPosition: (filterLabel, position) =>
    `Dropped ${filterLabel} filter at position ${position}`,
  dragDroppedInOriginalPosition: (filterLabel) =>
    `Dropped ${filterLabel} filter back in its original position`,
  dragCancelled: (filterLabel) => `Cancelled dragging ${filterLabel} filter`,
  dragUnknownFilter: "filter",

  keeping: "Keeping",
  excluding: "Excluding",
  uniqueValueCountTooltip: "Approximate count of unique values",
  selectedOfTotalValues: (selected, total) =>
    `${selected.toLocaleString()} of ${total.toLocaleString()} values`,
  clearAll: "Clear all",

  popoverEmptySummary: "Any",

  noValue: "No value",
  emptyStringValue: "(empty string)",

  valuesLoadError: (errorMessage) => `Error loading values: ${errorMessage}`,
  noValuesAvailable: "No values available",
  viewLess: "View less",
  viewAll: (count) => `View all (${count})`,

  loadingOptions: "Loading options",
  optionsLoadError: (errorMessage) => `Error loading options: ${errorMessage}`,
  noOptionsAvailable: "No options available",
  noMatchingOptions: "No matching options",
  multiSelectPlaceholder: "Select values...",
  multiSelectAriaLabel: "Search values",
  singleSelectPlaceholder: "Select a value...",
  singleSelectAriaLabel: "Select value",
  selectPropertyAriaLabel: (propertyLabel) => `Select ${propertyLabel}`,
  searchPropertyValuesAriaLabel: (propertyLabel) =>
    `Search ${propertyLabel} values`,

  suggestionsLoadError: (errorMessage) =>
    `Error loading suggestions: ${errorMessage}`,
  addTagPlaceholder: "Add a tag...",
  addTagAriaLabel: "Add tag",
  removeTag: (tagLabel) => `Remove ${tagLabel}`,
  pressEnterToAddTag: (value) => `Press Enter to add "${value}"`,
  noSuggestions: "No suggestions",
  typeToAddTag: "Type to add a tag",

  selectDate: "Select date",
  clearDate: "Clear date",
  addDate: "Add date",
  clearAllDates: "Clear all dates",
  removeDate: (dateLabel) => `Remove ${dateLabel}`,
  clearRange: "Clear range",
  timelineStartDate: "Start date",
  timelineEndDate: "End date",
  timelineRangeSeparator: "to",

  numberRangeMinLabel: "Min",
  numberRangeMaxLabel: "Max",
  dateRangeMinLabel: "From",
  dateRangeMaxLabel: "To",
  clearRangeFilter: "Clear",
  histogramAriaLabel: "Histogram of value counts",
  nullCountLoadError: "Failed to load null count",

  textSearchPlaceholder: "Search...",
  searchPropertyPlaceholder: (propertyLabel) => `Search ${propertyLabel}...`,
  keywordSearchFilterLabel: "Search",

  customFilterMissingRenderInput: "Custom filter missing renderInput",
  unsupportedFilterType: "Unsupported filter type",

  summaryMultipleSelected: (count) => `${count} selected`,
  summaryNoValue: "(No value)",
  summaryIncludesEmpty: "Includes empty",
  summaryEnabled: "Enabled",
  summaryHasLink: "Has link",
  summaryCustom: "Custom",
};

const FilterListLabelsContext = createContext<FilterListLabels>(
  DEFAULT_FILTER_LIST_LABELS,
);

export interface FilterListLabelsProviderProps {
  labels?: Partial<FilterListLabels>;
  children: ReactNode;
}

/**
 * Supplies overridden {@link FilterListLabels} to descendant filter-list
 * sub-components via context. Merges `labels` over the labels from the nearest
 * ancestor provider, so a wrapping `FilterList`/`BaseFilterList` and an inner
 * `FilterInput` can each override a different subset.
 *
 * The provided value keeps a stable identity across renders whenever the
 * merged labels are equal, so callers can pass an inline `labels` object
 * without re-rendering every label consumer.
 */
export function FilterListLabelsProvider({
  labels,
  children,
}: FilterListLabelsProviderProps): ReactElement {
  const parent = useContext(FilterListLabelsContext);
  const merged = labels != null ? { ...parent, ...labels } : parent;

  // Reuse the previous value when the merge is equal so an inline `labels`
  // object (new identity each render) doesn't churn the context.
  const stableRef = useRef(merged);
  if (!isEqual(stableRef.current, merged)) {
    stableRef.current = merged;
  }

  return (
    <FilterListLabelsContext.Provider value={stableRef.current}>
      {children}
    </FilterListLabelsContext.Provider>
  );
}

/**
 * Returns the fully-resolved {@link FilterListLabels} for the current subtree.
 * When no {@link FilterListLabelsProvider} is present, returns
 * {@link DEFAULT_FILTER_LIST_LABELS}.
 */
export function useFilterListLabels(): FilterListLabels {
  return useContext(FilterListLabelsContext);
}

/**
 * Wraps `Inner` so it accepts an optional `labels` prop and supplies the merged
 * {@link FilterListLabels} to its subtree.
 *
 * For generic components, e.g. `FilterList` use
 * {@link FilterListLabelsProvider} directly to preserve their type parameters.
 */
export function withFilterListLabels<P extends object>(
  Inner: React.ComponentType<P>,
): React.FC<P & { labels?: Partial<FilterListLabels> }> {
  function LabelledComponent(
    props: P & { labels?: Partial<FilterListLabels> },
  ): ReactElement {
    const { labels, ...rest } = props;
    return (
      <FilterListLabelsProvider labels={labels}>
        <Inner {...(rest as unknown as P)} />
      </FilterListLabelsProvider>
    );
  }
  LabelledComponent.displayName = `withFilterListLabels(${Inner.displayName})`;
  return LabelledComponent;
}

/**
 * Resolves a single label for the pure helpers (`getFilterLabel`,
 * `summarizeFilterValue`) that accept an optional `labels` override but cannot
 * read React context.
 */
export function resolveLabel<K extends keyof FilterListLabels>(
  labels: Partial<FilterListLabels> | undefined,
  key: K,
): FilterListLabels[K] {
  return labels?.[key] ?? DEFAULT_FILTER_LIST_LABELS[key];
}
