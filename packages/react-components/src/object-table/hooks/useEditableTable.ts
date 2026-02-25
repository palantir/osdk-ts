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
import type { CellEditEvent } from "../utils/types.js";

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
  enableEditModeByDefault: boolean;

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
  isInEditMode: boolean;
  handleEnableEditMode?: (enabled: boolean) => void;
  cellEdits: Record<string, CellEditEvent<any, unknown>>;
  handleCellEdit: (
    cellId: string,
    event: CellEditEvent<any, unknown>,
  ) => void;
  handleSubmitEdits?: () => Promise<void>;
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
  enableEditModeByDefault,
  onCellValueChanged,
  onSubmitEdits,
}: UseEditableTableProps<Q, RDPs, FunctionColumns>): UseEditableTableResult {
  const [isInEditMode, setIsInEditMode] = useState(enableEditModeByDefault);
  const [cellEdits, setCellEdits] = useState<
    Record<string, CellEditEvent<any, unknown>>
  >(
    {},
  );

  const handleEnableEditMode = useCallback((enabled: boolean) => {
    setIsInEditMode(enabled);
  }, []);

  const handleCellEdit = useCallback(
    (cellId: string, event: CellEditEvent<any, unknown>) => {
      // If value is changed back to original, remove it from edits
      if (event.newValue === event.oldValue) {
        setCellEdits(prev => {
          const { [cellId]: _, ...rest } = prev;
          return rest;
        });
      } else {
        setCellEdits(prev => ({
          ...prev,
          [cellId]: event,
        }));
      }

      onCellValueChanged?.(event);
    },
    [onCellValueChanged],
  );

  const clearEdits = useCallback(() => {
    setCellEdits({});
  }, []);

  const handleSubmitEdits = useCallback(async () => {
    const edits = Object.values(cellEdits);
    await onSubmitEdits?.(edits, clearEdits);
  }, [cellEdits, onSubmitEdits, clearEdits]);

  return {
    isInEditMode,
    handleEnableEditMode: !enableEditModeByDefault
      ? handleEnableEditMode
      : undefined,
    cellEdits,
    handleCellEdit,
    handleSubmitEdits: onSubmitEdits ? handleSubmitEdits : undefined,
  };
}
