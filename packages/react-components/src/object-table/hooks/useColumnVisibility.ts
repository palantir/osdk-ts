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
  ColumnDef,
  ColumnOrderState,
  OnChangeFn,
  VisibilityState,
} from "@tanstack/react-table";
import { useCallback, useEffect, useState } from "react";

interface UseColumnVisibilityProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
  TData = unknown,
> {
  allColumns: ColumnDef<TData>[];
  onColumnVisibilityChanged?: (
    newStates: Array<{
      columnId: PropertyKeys<Q> | keyof RDPs | keyof FunctionColumns;
      isVisible: boolean;
    }>,
  ) => void;
  hasSelectionColumn?: boolean;
}

interface UseColumnVisibilityResult {
  columnVisibility: VisibilityState;
  onColumnVisibilityChange: OnChangeFn<VisibilityState>;
  columnOrder: ColumnOrderState;
  onColumnOrderChange: OnChangeFn<ColumnOrderState>;
}

export const useColumnVisibility = <
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
  TData = unknown,
>(
  {
    allColumns,
    onColumnVisibilityChanged,
    hasSelectionColumn,
  }: UseColumnVisibilityProps<Q, RDPs, FunctionColumns, TData>,
): UseColumnVisibilityResult => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    () => getColumnVisibilityState<TData>(allColumns),
  );

  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    () => getColumnOrder(allColumns),
  );

  useEffect(() => {
    setColumnVisibility(getColumnVisibilityState<TData>(allColumns));
  }, [allColumns]);

  useEffect(() => {
    setColumnOrder(getColumnOrder(allColumns));
  }, [allColumns, hasSelectionColumn]);

  const onColumnVisibilityChange: OnChangeFn<VisibilityState> = useCallback(
    (updaterOrValue) => {
      setColumnVisibility((prev) => {
        const newState = typeof updaterOrValue === "function"
          ? updaterOrValue(prev)
          : updaterOrValue;

        if (onColumnVisibilityChanged) {
          const changes = Object.entries(newState).map(
            ([columnId, isVisible]) => ({
              columnId,
              isVisible,
            }),
          );
          onColumnVisibilityChanged(changes);
        }

        return newState;
      });
    },
    [onColumnVisibilityChanged],
  );

  const onColumnOrderChange: OnChangeFn<ColumnOrderState> = useCallback(
    (updaterOrValue) => {
      setColumnOrder((prev) => {
        const newState = typeof updaterOrValue === "function"
          ? updaterOrValue(prev)
          : updaterOrValue;
        return newState;
      });
    },
    [],
  );

  return {
    columnVisibility,
    onColumnVisibilityChange,
    columnOrder,
    onColumnOrderChange,
  };
};

const getColumnVisibilityState = <TData>(
  allColumns: ColumnDef<TData>[],
): VisibilityState => {
  return allColumns.reduce(
    (acc, col) => {
      const colId = col.id ?? (col as { accessorKey?: string }).accessorKey;
      if (colId) {
        return {
          ...acc,
          [colId]: col.meta?.isVisible !== false,
        };
      }
      return acc;
    },
    {},
  );
};

const getColumnOrder = <TData>(
  allColumns: ColumnDef<TData>[],
): ColumnOrderState => {
  return allColumns
    .map(col => col.id ?? (col as { accessorKey?: string }).accessorKey)
    .filter((id): id is string => id != null);
};
