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
  Osdk,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { useCallback, useState } from "react";
import type { ObjectTableProps } from "../ObjectTableApi.js";
import type { CellEditInfo, EditableConfig, EditMode } from "../utils/types.js";

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
  editMode?: "always" | "manual";
  enableEditModeByDefault?: boolean;

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

export interface UseEditableTableResult<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
> extends EditableConfig<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
    unknown
  > {
  onCellValidationError: (cellId: string) => void;
  validationErrors: Set<string>;
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
  editMode = "manual",
  enableEditModeByDefault,
  onCellValueChanged,
  onSubmitEdits,
}: UseEditableTableProps<Q, RDPs, FunctionColumns>): UseEditableTableResult<
  Q,
  RDPs
> {
  const [isActive, setActive] = useState(
    editMode === "always" || (enableEditModeByDefault && editMode === "manual")
  );
  const [cellEdits, setCellEdits] = useState<
    Record<
      string,
      CellEditInfo<
        Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
        unknown
      >
    >
  >(
    {},
  );
  const [validationErrors, setValidationErrors] = useState<Set<string>>(
    new Set(),
  );

  const handleCellEdit = useCallback(
    (
      cellId: string,
      info: CellEditInfo<
        Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
        unknown
      >,
    ) => {
      // If value is changed back to original, remove it from edits
      if (info.newValue === info.oldValue) {
        setCellEdits(prev => {
          const { [cellId]: _, ...rest } = prev;
          return rest;
        });
      } else {
        setCellEdits(prev => ({
          ...prev,
          [cellId]: info,
        }));
      }

      // Clear validation error for this cell when it's successfully edited
      setValidationErrors(prev => {
        const newErrors = new Set(prev);
        newErrors.delete(cellId);
        return newErrors;
      });

      onCellValueChanged?.(info);
    },
    [onCellValueChanged],
  );

  const clearEdits = useCallback(() => {
    setCellEdits({});
    setValidationErrors(new Set());
  }, []);

  const handleSubmitEdits = useCallback(async () => {
    const edits = Object.values(cellEdits);
    return onSubmitEdits ? onSubmitEdits(edits) : false;
  }, [cellEdits, onSubmitEdits]);

  const onCellValidationError = useCallback((cellId: string) => {
    setValidationErrors(prev => {
      const newErrors = new Set(prev);
      newErrors.add(cellId);
      return newErrors;
    });
  }, []);

  const editModeConfig: EditMode = editMode === "always"
    ? { type: "always", isActive: true }
    : { type: "manual", isActive, setActive };

  return {
    cellEdits,
    onCellEdit: handleCellEdit,
    onSubmitEdits: onSubmitEdits ? handleSubmitEdits : undefined,
    clearEdits,
    editMode: editModeConfig,
    onCellValidationError,
    validationErrors,
  };
}
