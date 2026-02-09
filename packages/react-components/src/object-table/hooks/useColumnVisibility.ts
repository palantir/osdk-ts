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
import type { ObjectTableProps } from "../ObjectTableApi.js";

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
  columnDefinitions?: ObjectTableProps<
    Q,
    RDPs,
    FunctionColumns
  >["columnDefinitions"];
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
    columnDefinitions,
    onColumnVisibilityChanged,
    hasSelectionColumn,
  }: UseColumnVisibilityProps<Q, RDPs, FunctionColumns, TData>,
): UseColumnVisibilityResult => {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    {},
  );

  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    [],
  );

  useEffect(() => {
    let initialVisibility: VisibilityState;

    if (columnDefinitions) {
      // Use columnDefinitions to determine visibility
      initialVisibility = columnDefinitions.reduce((acc, colDef) => {
        return {
          ...acc,
          [colDef.locator.id]: colDef.isVisible !== false,
        };
      }, {});
    } else {
      // Default: all columns visible
      initialVisibility = allColumns.reduce((acc, col) => {
        const colId = col.id ?? (col as { accessorKey?: string }).accessorKey;
        if (colId) {
          return {
            ...acc,
            [colId]: true,
          };
        }
        return acc;
      }, {});
    }

    setColumnVisibility(initialVisibility);
  }, [columnDefinitions, allColumns]);

  useEffect(() => {
    let initialColumnOrder: ColumnOrderState;

    if (columnDefinitions) {
      initialColumnOrder = columnDefinitions.map(colDef =>
        String(colDef.locator.id)
      );
    } else {
      // Default: order based on allColumns (excluding selection column which is handled separately)
      initialColumnOrder = allColumns
        .map(col => col.id ?? (col as { accessorKey?: string }).accessorKey)
        .filter((id): id is string => id !== undefined);
    }

    setColumnOrder(initialColumnOrder);
  }, [columnDefinitions, allColumns, hasSelectionColumn]);

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
