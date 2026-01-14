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
import type { ColumnPinningState } from "@tanstack/react-table";
import { useEffect, useState } from "react";
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
}

export const useColumnPinning = <
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  { columnDefinitions, hasSelectionColumn }: UseColumnPinningProps<
    Q,
    RDPs,
    FunctionColumns
  >,
): [
  ColumnPinningState,
  (
    updater:
      | ColumnPinningState
      | ((old: ColumnPinningState) => ColumnPinningState),
  ) => void,
] => {
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: [],
    right: [],
  });

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

  return [columnPinning, setColumnPinning];
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
