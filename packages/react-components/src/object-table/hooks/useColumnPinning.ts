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
  ObjectTypeDefinition,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import type { ColumnPinningState, OnChangeFn } from "@tanstack/react-table";
import { useCallback, useEffect, useState } from "react";
import type { ObjectTableProps } from "../ObjectTableApi.js";
import { SELECTION_COLUMN_ID } from "../utils/constants.js";

interface UseColumnPinningProps<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  columnDefinitions: ObjectTableProps<
    Q,
    RDPs,
    FunctionColumns
  >["columnDefinitions"];

  hasSelectionColumn?: boolean;

  onColumnsPinnedChanged?: ObjectTableProps<
    Q,
    RDPs,
    FunctionColumns
  >["onColumnsPinnedChanged"];
}

interface UseColumnPinningResults {
  columnPinning: ColumnPinningState;
  onColumnPinningChange: OnChangeFn<ColumnPinningState>;
}

export const useColumnPinning = <
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  { columnDefinitions, hasSelectionColumn, onColumnsPinnedChanged }:
    UseColumnPinningProps<
      Q,
      RDPs,
      FunctionColumns
    >,
): UseColumnPinningResults => {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: [],
    right: [],
  });

  // Set default column pinning
  useEffect(() => {
    const defaultColumnPinningState = getColumnPinningStateFromColumnDefs(
      columnDefinitions,
    );
    const maybePinnedSelectionColumn = hasSelectionColumn
      ? [SELECTION_COLUMN_ID]
      : [];
    setColumnPinning({
      left: [
        ...maybePinnedSelectionColumn,
        ...(defaultColumnPinningState.left ?? []),
      ],
      right: [
        ...(defaultColumnPinningState.right ?? []),
      ],
    });
  }, [columnDefinitions, hasSelectionColumn]);

  const onColumnPinningChange: OnChangeFn<ColumnPinningState> = useCallback(
    (updater) => {
      const newPinning = typeof updater === "function"
        ? updater(columnPinning)
        : updater;

      setColumnPinning(newPinning);

      if (onColumnsPinnedChanged) {
        const newStates = convertColumnPinningStateToArray(newPinning);
        const stateWithoutSelectionCol = newStates.filter(state =>
          state.columnId !== SELECTION_COLUMN_ID
        );
        onColumnsPinnedChanged(stateWithoutSelectionCol);
      }
    },
    [columnPinning, onColumnsPinnedChanged],
  );

  return { columnPinning, onColumnPinningChange };
};

const getColumnPinningStateFromColumnDefs = <
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  columnDefinitions: ObjectTableProps<
    Q,
    RDPs,
    FunctionColumns
  >["columnDefinitions"],
): ColumnPinningState => {
  if (!columnDefinitions) {
    return {};
  }
  const columnPinningState: ColumnPinningState = columnDefinitions.reduce<
    ColumnPinningState
  >(
    (acc, colDef) => {
      const { locator, pinned } = colDef;
      const colKey: string = locator.id.toString();
      const isPinned = pinned != null && pinned !== "none";
      if (!isPinned) {
        return acc;
      }

      if (pinned === "left") {
        return {
          ...acc,
          left: [...(acc.left ?? []), colKey],
        };
      }

      return {
        ...acc,
        right: [...(acc.right ?? []), colKey],
      };
    },
    { left: [], right: [] },
  );
  return columnPinningState;
};

/**
 * Converts ColumnPinningState to array format for the callback
 */
function convertColumnPinningStateToArray(
  pinningState: ColumnPinningState,
): Array<{
  columnId: string;
  pinned: "left" | "right" | "none";
}> {
  const result: Array<{
    columnId: string;
    pinned: "left" | "right" | "none";
  }> = [];

  // Add left pinned columns
  if (pinningState.left) {
    pinningState.left.forEach((columnId) => {
      result.push({ columnId, pinned: "left" });
    });
  }

  // Add right pinned columns
  if (pinningState.right) {
    pinningState.right.forEach((columnId) => {
      result.push({ columnId, pinned: "right" });
    });
  }

  return result;
}
