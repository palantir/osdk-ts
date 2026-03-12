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
import type {
  CellEditInfo,
  EditableConfig,
  EditModeState,
} from "../utils/types.js";

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
  onCellValueChanged,
  onSubmitEdits,
}: UseEditableTableProps<Q, RDPs, FunctionColumns>): EditableConfig<
  Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
  unknown
> {
  const [isActive, setActive] = useState<boolean>(
    editMode === "always",
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
  const [validationErrors, setValidationErrors] = useState<Map<string, string>>(
    new Map(),
  );

  const clearValidationError = useCallback((cellId: string) => {
    setValidationErrors(prev => {
      const newErrors = new Map(prev);
      newErrors.delete(cellId);
      return newErrors;
    });
  }, []);

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
      clearValidationError(cellId);

      onCellValueChanged?.(info);
    },
    [onCellValueChanged, clearValidationError],
  );

  const clearEdits = useCallback(() => {
    setCellEdits({});
    setValidationErrors(new Map());
  }, []);

  const handleSubmitEdits = useCallback(async () => {
    const edits = Object.values(cellEdits);
    return onSubmitEdits ? onSubmitEdits(edits) : false;
  }, [cellEdits, onSubmitEdits]);

  const onCellValidationError = useCallback(
    (cellId: string, errorMessage: string) => {
      setValidationErrors(prev => {
        const newErrors = new Map(prev);
        newErrors.set(cellId, errorMessage);
        return newErrors;
      });
    },
    [],
  );

  const editModeState: EditModeState = editMode === "always"
    ? { type: "always", isActive: true }
    : { type: "manual", isActive, setActive };

  return {
    cellEdits,
    onCellEdit: handleCellEdit,
    onSubmitEdits: onSubmitEdits ? handleSubmitEdits : undefined,
    clearEdits,
    editModeState,
    onCellValidationError,
    validationErrors,
  };
}
