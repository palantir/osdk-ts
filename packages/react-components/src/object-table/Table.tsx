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
  ObjectOrInterfaceDefinition,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import type {
  Cell,
  OnChangeFn,
  RowData,
  SortingState,
  Table,
} from "@tanstack/react-table";
import classNames from "classnames";
import React, {
  type ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { LoadingStateTable } from "./LoadingStateTable.js";
import { NonIdealState } from "./NonIdealState.js";
import type { ColumnDefinition } from "./ObjectTableApi.js";
import styles from "./Table.module.css";
import { TableBody } from "./TableBody.js";
import { TableHeader } from "./TableHeader.js";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    headerTitle?: string;
  }
}

export interface BaseTableProps<
  TData extends RowData,
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  table: Table<TData>;
  isLoading?: boolean;
  fetchNextPage?: () => Promise<void>;
  onRowClick?: (row: TData) => void;
  rowHeight?: number;
  renderCellContextMenu?: (
    row: TData,
    cell: Cell<TData, unknown>,
  ) => React.ReactNode;
  className?: string;
  error?: Error;
  onSortChange?: OnChangeFn<SortingState>;
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>;
  onColumnVisibilityChanged?: (
    newStates: Array<{
      columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns;
      isVisible: boolean;
    }>,
  ) => void;
}

export function BaseTable<
  TData extends RowData,
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  {
    table,
    isLoading,
    fetchNextPage,
    onRowClick,
    rowHeight,
    renderCellContextMenu,
    className,
    error,
    onSortChange,
    onColumnVisibilityChanged,
  }: BaseTableProps<TData, Q, RDPs, FunctionColumns>,
): ReactElement {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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
          scrollHeight - scrollTop - clientHeight < 100
          && !isLoading && fetchNextPage != null
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
    [fetchNextPage, isLoading, isLoadingMore],
  );

  const handleScroll = useCallback(
    async (e: React.UIEvent<HTMLDivElement>) => {
      await fetchMoreOnEndReached(e.currentTarget);
    },
    [fetchMoreOnEndReached],
  );

  const rows = table.getRowModel().rows;
  const headerGroups = table.getHeaderGroups();
  const hasData = rows.length > 0;

  return (
    <div
      ref={tableContainerRef}
      className={classNames(styles.osdkTableContainer, className)}
      onScroll={handleScroll}
    >
      <table>
        {isLoading && !hasData
          ? (
            <LoadingStateTable
              table={table}
              headerGroups={headerGroups}
              rowHeight={rowHeight}
              tableContainerRef={tableContainerRef}
            />
          )
          : (
            <>
              <TableHeader
                table={table}
                onSortChange={onSortChange}
                onColumnVisibilityChanged={onColumnVisibilityChanged}
              />
              <TableBody
                rows={rows}
                tableContainerRef={tableContainerRef}
                onRowClick={onRowClick}
                rowHeight={rowHeight}
                renderCellContextMenu={renderCellContextMenu}
                isLoadingMore={isLoadingMore}
                headerGroups={headerGroups}
              />
            </>
          )}
      </table>
      {!hasData && error == null && <NonIdealState message={"No Data"} />}
      {error != null && (
        <NonIdealState message={`Error Loading Data: ${error.message}`} />
      )}
    </div>
  );
}
