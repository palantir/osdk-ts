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

import { useCallback, useState } from "react";
import { getCellIdentifier } from "../utils/getCellId.js";
import type { CellIdentifier, CellValueState } from "../utils/types.js";

export interface UseEditableTableProps {
  onCellValueChanged?: (id: CellIdentifier, state: CellValueState) => void;
  onSubmitEdits?: (edits: Record<string, CellValueState>) => void;
}

export interface UseEditableTableResult {
  cellEdits: Record<string, CellValueState>;
  handleCellEdit: (
    cellId: string,
    newValue: unknown,
    oldValue: unknown,
  ) => void;
  handleSubmitEdits: () => void;
  clearEdits: () => void;
}

export function useEditableTable({
  onCellValueChanged,
  onSubmitEdits,
}: UseEditableTableProps): UseEditableTableResult {
  const [cellEdits, setCellEdits] = useState<Record<string, CellValueState>>(
    {},
  );

  const handleCellEdit = useCallback(
    (cellId: string, newValue: unknown, oldValue: unknown) => {
      const cellIdentifier = getCellIdentifier(cellId);
      const state: CellValueState = { newValue, oldValue };
      onCellValueChanged?.(cellIdentifier, state);

      // If value is changed back to original, remove it from edits
      if (newValue === oldValue) {
        setCellEdits(prev => {
          const { [cellId]: _, ...rest } = prev;
          return rest;
        });
        return;
      }

      setCellEdits(prev => ({
        ...prev,
        [cellId]: state,
      }));
    },
    [onCellValueChanged],
  );

  const clearEdits = useCallback(() => {
    setCellEdits({});
  }, []);

  const handleSubmitEdits = useCallback(() => {
    onSubmitEdits?.(cellEdits);
  }, [cellEdits, onSubmitEdits]);

  return {
    cellEdits,
    handleCellEdit,
    handleSubmitEdits,
    clearEdits,
  };
}
