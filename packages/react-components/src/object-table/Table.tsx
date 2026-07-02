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

import type { Cell, RowData, Table } from "@tanstack/react-table";
import classNames from "classnames";
import React, {
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { PortalContainerProvider } from "../shared/PortalContainerContext.js";
import { useFocusedRow } from "./hooks/useFocusedRow.js";
import { LoadingStateTable } from "./LoadingStateTable.js";
import { NonIdealState } from "./NonIdealState.js";
import { TableBody } from "./TableBody.js";
import { TableEditContainer } from "./TableEditContainer.js";
import { TableHeader } from "./TableHeader.js";
import type { HeaderMenuFeatureFlags } from "./TableHeaderWithPopover.js";
import { SCROLL_FETCH_THRESHOLD } from "./utils/constants.js";
import { isColumnDeclaredEditable } from "./utils/editableUtils.js";
import {
  PortalTrackerProvider,
  usePortalTracker,
} from "./utils/PortalTracker.js";
import type {
  CellEditInfo,
  EditableConfig,
  EditFieldConfig,
} from "./utils/types.js";

import styles from "./Table.module.css";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData = unknown, TValue = unknown> {
    columnName?: string;
    isAsyncColumn?: boolean;
    isVisible?: boolean;
    editable?: boolean | ((object: TData) => boolean);
    dataType?: string;
    /**
     * For columns backed by a `"marking"` property, the marking subtype as
     * surfaced by the platform: `"CBAC"` for classification-based access
     * control or `"MANDATORY"` for mandatory markings. Absent for
     * non-marking columns and for marking columns whose subtype isn't
     * exposed.
     */
    markingType?: "CBAC" | "MANDATORY";
    editFieldConfig?: EditFieldConfig<TData>;
    validateEdit?: (value: unknown) => Promise<string | undefined>;
  }
  interface TableMeta<TData extends RowData = unknown> {
    onCellEdit?: (cellId: string, info: CellEditInfo<TData, unknown>) => void;
    onCellValidationError?: (cellId: string, error: string) => void;
    clearCellValidationError?: (cellId: string) => void;
    cellEdits?: Record<string, CellEditInfo<TData, unknown>>;
    isInEditMode?: boolean;
    validationErrors?: Map<string, string>;
    focusedRowId?: string | null;
  }
}

export interface BaseTableProps<TData extends RowData> {
  table: Table<TData>;
  isLoading?: boolean;
  fetchNextPage?: () => Promise<void>;
  onRowClick?: (row: TData) => void;
  onColumnHeaderClick?: (columnId: string) => void;
  rowHeight?: number;
  renderCellContextMenu?: (
    row: TData,
    cell: Cell<TData, unknown>
  ) => React.ReactNode;
  className?: string;
  error?: Error;
  headerMenuFeatureFlags?: HeaderMenuFeatureFlags;
  editableConfig?: EditableConfig<TData, unknown>;
  getRowAttributes?: (object: TData) => Record<string, string | undefined>;
  /**
   * Whether to render the bottom edit footer. Defaults to `true`; the
   * footer is only rendered when the table has at least one editable
   * column (`hasEditableColumns`).
   */
  showEditFooter?: boolean;
  /**
   * Render override for the empty state. Called when the table has no
   * rows and no error. When omitted, a default "No Data" indicator is
   * rendered.
   */
  renderEmptyState?: () => React.ReactNode;
  /**
   * Controlled focused row id. `undefined` enables internal management
   */
  focusedRowId?: string | null;
  /**
   * Fires whenever the focused row changes, in both controlled and
   * uncontrolled modes.
   */
  onFocusedRowChanged?: (row: TData | null) => void;
}

export function BaseTable<TData extends RowData>(
  props: BaseTableProps<TData>
): ReactElement {
  return (
    <PortalTrackerProvider>
      <BaseTableInner {...props} />
    </PortalTrackerProvider>
  );
}

function BaseTableInner<TData extends RowData>({
  table,
  isLoading,
  fetchNextPage,
  onRowClick,
  onColumnHeaderClick,
  rowHeight,
  renderCellContextMenu,
  className,
  error,
  headerMenuFeatureFlags,
  editableConfig,
  getRowAttributes,
  showEditFooter = true,
  renderEmptyState,
  focusedRowId: focusedRowIdProp,
  onFocusedRowChanged,
}: BaseTableProps<TData>): ReactElement {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const objectTablePortalRef = useRef<HTMLDivElement>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const getRowById = useCallback(
    (id: string) => {
      try {
        return table.getRow(id, true)?.original ?? null;
      } catch {
        // table.getRow throws when the id no longer matches a row
        // (e.g. the row was removed or has not loaded yet). Treat a
        // missing row as "no focus" rather than crashing.
        return null;
      }
    },
    [table]
  );

  const { focusedRowId, setFocusedRowId } = useFocusedRow<TData>({
    focusedRowId: focusedRowIdProp,
    onFocusedRowChanged,
    getRowById,
  });
  const portalTracker = usePortalTracker();

  // Sync focusedRowId into table meta so cell renderers (which only
  // receive `table`) can read it without extra prop drilling.
  // Assigned synchronously so children see the current value in the
  // same render pass. This is safe because meta is a mutable bag that
  // TanStack Table never snapshots or shallow-compares.
  if (table.options.meta) {
    table.options.meta.focusedRowId = focusedRowId;
  }

  // Using a ref to prevent duplicate fetches from rapid scroll events while a fetch is in-flight
  const fetchingRef = useRef(false);

  useEffect(() => {
    if (!isLoading || fetchNextPage == null) {
      setIsLoadingMore(false);
    }
  }, [isLoading, fetchNextPage]);

  const fetchMoreOnEndReached = useCallback(
    async (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement && !fetchingRef.current && !isLoadingMore) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (
          scrollHeight - scrollTop - clientHeight < SCROLL_FETCH_THRESHOLD &&
          !isLoading &&
          fetchNextPage != null
        ) {
          fetchingRef.current = true;
          setIsLoadingMore(true);
          try {
            await fetchNextPage();
          } finally {
            fetchingRef.current = false;
          }
        }
      }
    },
    [fetchNextPage, isLoading, isLoadingMore]
  );

  const handleScroll = useCallback(
    async (e: React.UIEvent<HTMLDivElement>) => {
      await fetchMoreOnEndReached(e.currentTarget);
    },
    [fetchMoreOnEndReached]
  );

  const rows = table.getRowModel().rows;
  const headerGroups = table.getHeaderGroups();
  const hasData = rows.length > 0;

  const hasEditableColumns = table
    .getAllColumns()
    .some((column) =>
      isColumnDeclaredEditable(column.columnDef.meta?.editable)
    );

  // Use pointerdown instead of click to detect outside interactions.
  // base-ui's Select renders a full-screen backdrop that intercepts
  // pointerdown to close the popup. By the time the click event fires,
  // the backdrop is unmounted and event.target falls through to <body>,
  // which would incorrectly trigger the outside-click handler.
  // At pointerdown time the backdrop is still in the DOM, so
  // portalTracker.containsElement correctly identifies it.
  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        tableContainerRef.current &&
        !tableContainerRef.current.contains(target) &&
        !portalTracker?.containsElement(target)
      ) {
        setFocusedRowId(null);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [portalTracker, setFocusedRowId]);

  return (
    <PortalContainerProvider container={objectTablePortalRef}>
      <div
        ref={objectTablePortalRef}
        className={classNames(styles.osdkTableWrapper, className)}
      >
        <div
          ref={tableContainerRef}
          className={styles.osdkTableContainer}
          onScroll={handleScroll}
        >
          <table>
            {isLoading && !hasData ? (
              <LoadingStateTable
                table={table}
                headerGroups={headerGroups}
                rowHeight={rowHeight}
                tableContainerRef={tableContainerRef}
              />
            ) : (
              <>
                <TableHeader
                  table={table}
                  headerMenuFeatureFlags={headerMenuFeatureFlags}
                  onColumnHeaderClick={onColumnHeaderClick}
                />
                <TableBody
                  rows={rows}
                  tableContainerRef={tableContainerRef}
                  onRowClick={onRowClick}
                  rowHeight={rowHeight}
                  renderCellContextMenu={renderCellContextMenu}
                  isLoadingMore={isLoadingMore}
                  headerGroups={headerGroups}
                  focusedRowId={focusedRowId}
                  setFocusedRowId={setFocusedRowId}
                  isInEditMode={editableConfig?.editModeState.isActive}
                  getRowAttributes={getRowAttributes}
                />
              </>
            )}
          </table>
          {!hasData &&
            error == null &&
            (renderEmptyState != null ? (
              renderEmptyState()
            ) : (
              <NonIdealState message={"No Data"} />
            ))}
          {error != null && (
            <NonIdealState message={`Error Loading Data: ${error.message}`} />
          )}
        </div>
        {showEditFooter && hasEditableColumns && editableConfig && (
          <TableEditContainer
            editableConfig={editableConfig}
            hasFocusedRow={focusedRowId != null}
          />
        )}
      </div>
    </PortalContainerProvider>
  );
}
