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
  Osdk,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { useOsdkMetadata } from "@osdk/react";
import type { AccessorColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import type { ColumnDefinition } from "../ObjectTableApi.js";

interface UseColumnDefsResult<Q extends ObjectTypeDefinition> {
  columns: AccessorColumnDef<
    Osdk.Instance<Q>
  >[];

  loading: boolean;

  error: string | undefined;
}

/**
 * Hook which builds column definitions for tanstack-table given the objectSet
 */
export function useColumnDefs<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  objectType: Q,
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
): UseColumnDefsResult<Q> {
  const { metadata, loading, error } = useOsdkMetadata(objectType);

  const columns: Array<
    AccessorColumnDef<
      Osdk.Instance<Q>
    >
  > = useMemo(() => {
    // If columnDefinitions is provided, construct colDefs with it
    if (columnDefinitions) {
      return columnDefinitions.map((col) => {
        const {
          locator,
          width,
          minWidth,
          maxWidth,
          resizable,
          orderable,
          filterable,
          renderCell,
          renderHeader,
        } = col;

        const propertyMetadata = locator.type === "property"
          ? metadata?.properties[locator.id]
          : undefined;

        const colKey = locator.id as string;

        const colDef: AccessorColumnDef<
          Osdk.Instance<Q>
        > = {
          id: colKey,
          accessorKey: colKey,
          header: renderHeader ?? propertyMetadata?.displayName,
          size: width,
          minSize: minWidth,
          maxSize: maxWidth,
          enableResizing: resizable,
          enableSorting: orderable,
          enableColumnFilter: filterable,
          cell: (cellContext) => {
            const object: Osdk.Instance<Q> = cellContext.row.original;
            // TODO: Should we rename object to "row" and pass the cellValue instead of locator as locator is not providing much value?
            return renderCell
              ? renderCell(object, locator)
              : cellContext.getValue();
          },
        };

        return colDef;
      });
    }

    // Generate default colDefs with the object metadata
    if (!metadata?.properties) return [];

    return Object.entries(metadata?.properties).map(([key, property]) => {
      const colDef: AccessorColumnDef<
        Osdk.Instance<Q>
      > = {
        accessorKey: key,
        header: property.displayName ?? key,
      };
      return colDef;
    });
  }, [metadata?.properties]);

  return { columns, loading, error };
}
