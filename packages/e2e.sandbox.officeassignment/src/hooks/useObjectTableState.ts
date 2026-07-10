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

import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
  SimplePropertyDef,
} from "@osdk/api";
import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";
import React from "react";

import type { PinDirection } from "../types/table.js";
import { applyVisibilityState } from "../utils/applyVisibilityState.js";

/** Order-by entry over an object type's properties and its display RDP columns. */
export type OrderByEntry<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> = {
  property: PropertyKeys<Q> | keyof RDPs;
  direction: "asc" | "desc";
};

interface UseObjectTableStateReturn<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
> {
  orderBy: Array<OrderByEntry<Q, RDPs>> | undefined;
  effectiveColumnDefs: Array<ColumnDefinition<Q, RDPs>>;
  handleOrderByChanged: (orderBy: Array<OrderByEntry<Q, RDPs>>) => void;
  handleColumnVisibilityChanged: (
    changes: Array<{ columnId: string; isVisible: boolean }>,
  ) => void;
  handleColumnResize: (columnId: string, size: number | null) => void;
  handleColumnsPinnedChanged: (
    states: Array<{ columnId: string; pinned: PinDirection }>,
  ) => void;
}

/**
 * Holds an ObjectTable's order-by, column visibility/ordering, sizing, and pinning state, and
 * derives the effective column definitions. Keeps all state locally in React.
 */
export function useObjectTableState<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
>(
  baseColumnDefs: Array<ColumnDefinition<Q, RDPs>>,
  defaultOrderBy: Array<OrderByEntry<Q, RDPs>>,
): UseObjectTableStateReturn<Q, RDPs> {
  const [orderBy, setOrderBy] = React.useState<
    Array<OrderByEntry<Q, RDPs>> | undefined
  >(defaultOrderBy);
  const [columnVisibility, setColumnVisibility] = React.useState<
    Array<{ id: string; isVisible: boolean }> | undefined
  >(undefined);
  const [columnSizing, setColumnSizing] = React.useState<
    Record<string, number>
  >({});
  const [columnPinning, setColumnPinning] = React.useState<
    Record<string, PinDirection> | undefined
  >(undefined);

  const effectiveColumnDefs = React.useMemo(
    () =>
      applyVisibilityState(
        baseColumnDefs,
        columnVisibility,
        (def) => String(def.locator.id),
        (def) => {
          const id = String(def.locator.id);
          return {
            ...def,
            width: columnSizing[id] ?? def.width,
            pinned: columnPinning != null ? columnPinning[id] : def.pinned,
          };
        },
      ),
    [baseColumnDefs, columnVisibility, columnSizing, columnPinning],
  );

  const handleOrderByChanged = React.useCallback(
    (newOrderBy: Array<OrderByEntry<Q, RDPs>>) => {
      setOrderBy(newOrderBy);
    },
    [],
  );

  const handleColumnVisibilityChanged = React.useCallback(
    (changes: Array<{ columnId: string; isVisible: boolean }>) => {
      setColumnVisibility(
        changes.map(({ columnId, isVisible }) => ({ id: columnId, isVisible })),
      );
    },
    [],
  );

  const handleColumnResize = React.useCallback(
    (columnId: string, size: number | null) => {
      setColumnSizing((prev) => {
        const next = { ...prev };
        if (size == null) {
          delete next[columnId];
        } else {
          next[columnId] = size;
        }
        return next;
      });
    },
    [],
  );

  const handleColumnsPinnedChanged = React.useCallback(
    (states: Array<{ columnId: string; pinned: PinDirection }>) => {
      const pinning: Record<string, PinDirection> = {};
      for (const { columnId, pinned } of states) {
        pinning[columnId] = pinned;
      }
      setColumnPinning(pinning);
    },
    [],
  );

  return {
    orderBy,
    effectiveColumnDefs,
    handleOrderByChanged,
    handleColumnVisibilityChanged,
    handleColumnResize,
    handleColumnsPinnedChanged,
  };
}
