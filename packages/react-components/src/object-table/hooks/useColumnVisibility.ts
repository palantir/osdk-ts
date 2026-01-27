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
import type { VisibilityState } from "@tanstack/react-table";
import { useMemo } from "react";
import type { ObjectTableProps } from "../ObjectTableApi.js";

interface UseColumnVisibilityProps<
  Q extends ObjectOrInterfaceDefinition,
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
}

export const useColumnVisibility = <
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  { columnDefinitions }: UseColumnVisibilityProps<
    Q,
    RDPs,
    FunctionColumns
  >,
): VisibilityState | undefined => {
  const columnVisibility = useMemo(() => {
    if (columnDefinitions) {
      const colVisibility: VisibilityState = columnDefinitions.reduce(
        (acc, colDef) => {
          if (colDef.isVisible !== undefined) {
            const { locator } = colDef;
            const colKey = locator.id;

            return {
              ...acc,
              [colKey]: colDef.isVisible,
            };
          }
          return acc;
        },
        {},
      );

      return colVisibility;
    }
  }, [columnDefinitions]);

  return columnVisibility;
};
