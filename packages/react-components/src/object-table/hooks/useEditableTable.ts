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
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { useCallback, useState } from "react";
import type { ObjectTableProps } from "../ObjectTableApi.js";
import { getCellIdentifier } from "../utils/getCellId.js";
import type { CellValueState } from "../utils/types.js";

export interface UseEditableTableProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  onCellValueChanged?: ObjectTableProps<
    Q,
    RDPs,
    FunctionColumns
  >["onCellValueChanged"];

  onSubmitEdits?: ObjectTableProps<
    Q,
    RDPs,
    FunctionColumns
  >["onSubmitEdits"];
}

export interface UseEditableTableResult {
  cellEdits: Record<string, CellValueState>;
  handleCellEdit: (
    cellId: string,
    state: CellValueState,
  ) => void;
  handleSubmitEdits: () => Promise<void>;
  clearEdits: () => void;
}

export function useEditableTable<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>({
  onCellValueChanged,
  onSubmitEdits,
}: UseEditableTableProps<Q, RDPs, FunctionColumns>): UseEditableTableResult {
  const [cellEdits, setCellEdits] = useState<Record<string, CellValueState>>(
    {},
  );

  const handleCellEdit = useCallback(
    (cellId: string, state: CellValueState) => {
      const cellIdentifier = getCellIdentifier(cellId);

      // If value is changed back to original, remove it from edits
      if (state.newValue === state.oldValue) {
        setCellEdits(prev => {
          const { [cellId]: _, ...rest } = prev;
          return rest;
        });
      } else {
        setCellEdits(prev => ({
          ...prev,
          [cellId]: state,
        }));
      }

      onCellValueChanged?.(cellIdentifier, state);
    },
    [onCellValueChanged],
  );

  const clearEdits = useCallback(() => {
    setCellEdits({});
  }, []);

  const handleSubmitEdits = useCallback(async () => {
    await onSubmitEdits?.(cellEdits);
  }, [cellEdits, onSubmitEdits]);

  return {
    cellEdits,
    handleCellEdit,
    handleSubmitEdits,
    clearEdits,
  };
}
