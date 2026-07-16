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

import React, {
  createContext,
  type ReactElement,
  type ReactNode,
  useContext,
  useMemo,
} from "react";

/**
 * All user-facing strings rendered by the object table and its
 * sub-components.
 */
export interface ObjectTableLabels {
  /**
   * Shown in the table body when there are no rows and no error, unless a
   * `renderEmptyState` override is supplied.
   * @default "No Data"
   */
  noData: string;
  /**
   * Shown in the table body when data loading fails.
   * @default (errorMessage) => `Error Loading Data: ${errorMessage}`
   */
  errorLoadingData: (errorMessage: string) => string;

  /** @default "Edit Table" */
  editFooterEditTable: string;
  /** @default "Submit Edits" */
  editFooterSubmitEdits: string;
  /** @default "Cancel" */
  editFooterCancel: string;
  /** @default "Select a row to edit data…" */
  editFooterSelectRowToEdit: string;
  /** @default (count) => `${count} modifications` */
  editFooterModificationCount: (count: number) => string;
  /** Shown in the edit-footer badge when a cell fails validation.
   * @default "Validation error" */
  editFooterValidationError: string;

  /**
   * Fallback message surfaced when a column's `validateEdit` rejects (throws)
   * rather than resolving with a message. Messages returned by `validateEdit`
   * itself are surfaced verbatim and are not affected by this label.
   * @default "Validation error"
   */
  cellValidationError: string;

  /** @default "Configure Table Columns" */
  columnConfigTitle: string;
  /** @default "Cancel" */
  columnConfigCancel: string;
  /** @default "Apply" */
  columnConfigApply: string;
  /** @default "Visible Columns" */
  columnConfigVisibleColumns: string;
  /** @default "Drag to reorder" */
  columnConfigDragToReorder: string;
  /** @default "Add or Remove Columns" */
  columnConfigAddOrRemoveColumns: string;
  /** @default "All Columns" */
  columnConfigAllColumns: string;
  /** @default "No visible columns" */
  columnConfigNoVisibleColumns: string;
  /** @default "No matching columns found" */
  columnConfigNoMatchingColumns: string;
  /** @default "Search..." */
  columnConfigSearchPlaceholder: string;
  /** @default "Search available columns" */
  columnConfigSearchAriaLabel: string;

  /** @default "Sort on Multiple Columns" */
  sortDialogTitle: string;
  /** @default "Cancel" */
  sortDialogCancel: string;
  /** @default "Apply" */
  sortDialogApply: string;
  /** @default "Add Column to Sort" */
  sortDialogAddColumnToSort: string;
  /** @default "Search columns" */
  sortDialogSearchPlaceholder: string;
  /** @default "No matching columns" */
  sortDialogNoMatchingColumns: string;
  /** @default (columnName) => `Toggle sort direction for ${columnName}` */
  sortDialogToggleDirection: (columnName: string) => string;

  /** @default "Pin column" */
  headerMenuPinColumn: string;
  /** @default "Unpin Column" */
  headerMenuUnpinColumn: string;
  /** @default "Sort ascending" */
  headerMenuSortAscending: string;
  /** @default "Sort descending" */
  headerMenuSortDescending: string;
  /** @default "Sort on multiple columns" */
  headerMenuSortOnMultipleColumns: string;
  /** @default "Clear all sorts" */
  headerMenuClearAllSorts: string;
  /** @default "Reset Column Size" */
  headerMenuResetColumnSize: string;
  /** @default "Configure Columns" */
  headerMenuConfigureColumns: string;
  /** @default (columnId) => `Open header menu for column with id=${columnId}` */
  headerMenuAriaLabel: (columnId: string) => string;

  /** @default "Error" */
  cellError: string;
  /** @default "No value" */
  cellNoValue: string;

  /** @default "Select all rows" */
  selectAllRows: string;
  /** @default "Deselect all rows" */
  deselectAllRows: string;
  /** @default (rowNumber) => `Select row ${rowNumber}` */
  selectRow: (rowNumber: number) => string;
}

export const DEFAULT_OBJECT_TABLE_LABELS: ObjectTableLabels = {
  noData: "No Data",
  errorLoadingData: (errorMessage) => `Error Loading Data: ${errorMessage}`,

  editFooterEditTable: "Edit Table",
  editFooterSubmitEdits: "Submit Edits",
  editFooterCancel: "Cancel",
  editFooterSelectRowToEdit: "Select a row to edit data…",
  editFooterModificationCount: (count) => `${count} modifications`,
  editFooterValidationError: "Validation error",

  cellValidationError: "Validation error",

  columnConfigTitle: "Configure Table Columns",
  columnConfigCancel: "Cancel",
  columnConfigApply: "Apply",
  columnConfigVisibleColumns: "Visible Columns",
  columnConfigDragToReorder: "Drag to reorder",
  columnConfigAddOrRemoveColumns: "Add or Remove Columns",
  columnConfigAllColumns: "All Columns",
  columnConfigNoVisibleColumns: "No visible columns",
  columnConfigNoMatchingColumns: "No matching columns found",
  columnConfigSearchPlaceholder: "Search...",
  columnConfigSearchAriaLabel: "Search available columns",

  sortDialogTitle: "Sort on Multiple Columns",
  sortDialogCancel: "Cancel",
  sortDialogApply: "Apply",
  sortDialogAddColumnToSort: "Add Column to Sort",
  sortDialogSearchPlaceholder: "Search columns",
  sortDialogNoMatchingColumns: "No matching columns",
  sortDialogToggleDirection: (columnName) =>
    `Toggle sort direction for ${columnName}`,

  headerMenuPinColumn: "Pin column",
  headerMenuUnpinColumn: "Unpin Column",
  headerMenuSortAscending: "Sort ascending",
  headerMenuSortDescending: "Sort descending",
  headerMenuSortOnMultipleColumns: "Sort on multiple columns",
  headerMenuClearAllSorts: "Clear all sorts",
  headerMenuResetColumnSize: "Reset Column Size",
  headerMenuConfigureColumns: "Configure Columns",
  headerMenuAriaLabel: (columnId) =>
    `Open header menu for column with id=${columnId}`,

  cellError: "Error",
  cellNoValue: "No value",

  selectAllRows: "Select all rows",
  deselectAllRows: "Deselect all rows",
  selectRow: (rowNumber) => `Select row ${rowNumber}`,
};

const ObjectTableLabelsContext = createContext<ObjectTableLabels>(
  DEFAULT_OBJECT_TABLE_LABELS
);

export interface ObjectTableLabelsProviderProps {
  labels?: Partial<ObjectTableLabels>;
  children: ReactNode;
}

/**
 * Supplies overridden {@link ObjectTableLabels} to descendant table
 * sub-components via context. Merges `labels` over the labels from the nearest
 * ancestor provider, so a wrapping `ObjectTable`/`BaseTable` and an inner
 * dialog can each override a different subset.
 */
export function ObjectTableLabelsProvider({
  labels,
  children,
}: ObjectTableLabelsProviderProps): ReactElement {
  const parent = useContext(ObjectTableLabelsContext);
  const value = useMemo(
    () => (labels != null ? { ...parent, ...labels } : parent),
    [parent, labels]
  );

  return (
    <ObjectTableLabelsContext.Provider value={value}>
      {children}
    </ObjectTableLabelsContext.Provider>
  );
}

/**
 * Returns the fully-resolved {@link ObjectTableLabels} for the current subtree.
 * When no {@link ObjectTableLabelsProvider} is present, returns
 * {@link DEFAULT_OBJECT_TABLE_LABELS}.
 */
export function useObjectTableLabels(): ObjectTableLabels {
  return useContext(ObjectTableLabelsContext);
}

/**
 * Wraps `Inner` so it accepts an optional `labels` prop and supplies the merged
 * {@link ObjectTableLabels} to its subtree. Used by the standalone,
 * externally-rendered sub-components (e.g. the dialogs) so each one doesn't
 * repeat the provider-boundary boilerplate.
 *
 * Not usable for generic components (the wrapper is monomorphic); `BaseTable`
 * renders {@link ObjectTableLabelsProvider} directly to preserve its `TData`
 * type parameter.
 */
export function withObjectTableLabels<P extends object>(
  Inner: React.ComponentType<P>
): React.FC<P & { labels?: Partial<ObjectTableLabels> }> {
  function LabelledComponent(
    props: P & { labels?: Partial<ObjectTableLabels> }
  ): ReactElement {
    const { labels, ...rest } = props;
    return (
      <ObjectTableLabelsProvider labels={labels}>
        <Inner {...(rest as unknown as P)} />
      </ObjectTableLabelsProvider>
    );
  }
  LabelledComponent.displayName = `withObjectTableLabels(${Inner.displayName})`;
  return LabelledComponent;
}
