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
import type { CellEditInfo, EditableConfig } from "../utils/types.js";

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
}: UseEditableTableProps<Q, RDPs, FunctionColumns>): EditableConfig<
  Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
  unknown
> {
  const [isInEditMode, setIsInEditMode] = useState(enableEditModeByDefault);
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

      onCellValueChanged?.(info);
    },
    [onCellValueChanged],
  );

  const clearEdits = useCallback(() => {
    setCellEdits({});
  }, []);

  const handleSubmitEdits = useCallback(async () => {
    const edits = Object.values(cellEdits);
    await onSubmitEdits?.(edits);
  }, [cellEdits, onSubmitEdits]);

  return {
    isInEditMode,
    onEnableEditMode: setIsInEditMode,
    cellEdits,
    onCellEdit: handleCellEdit,
    onSubmitEdits: onSubmitEdits ? handleSubmitEdits : undefined,
    clearEdits,
    enableEditModeByDefault,
  };
}
