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
  ObjectMetadata,
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import type { AccessorColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import type { AsyncValue } from "../../types/AsyncValue.js";
import type { ColumnDefinition } from "../ObjectTableApi.js";

interface UseColumnDefsResult<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
> {
  columns: AccessorColumnDef<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  >[];
}

/**
 * Hook which builds column definitions for tanstack-table given the objectSet
 */
export function useColumnDefs<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
  allObjectProperties?: Record<any, ObjectMetadata.Property>,
): UseColumnDefsResult<Q, RDPs> {
  const columns = useMemo(() => {
    // If columnDefinitions is provided, construct colDefs with it
    if (columnDefinitions) {
      return getColumnsFromColumnDefinitions<Q, RDPs, FunctionColumns>(
        columnDefinitions,
        allObjectProperties,
      );
    }

    // If not, return the default columns from the object properties
    return getDefaultColumns<Q, RDPs>(allObjectProperties);
  }, [columnDefinitions, allObjectProperties]);

  return { columns };
}

function getColumnsFromColumnDefinitions<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  columnDefinitions: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
  objectProperties?: Record<any, ObjectMetadata.Property>,
): Array<
  AccessorColumnDef<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  >
> {
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
      ? objectProperties?.[locator.id]
      : undefined;

    const colKey = locator.id as string;

    const colDef: AccessorColumnDef<
      Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
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
        // Handle async column types
        if (locator.type === "rdp" || locator.type === "function") {
          const cellValue = cellContext.getValue() as
            | AsyncValue<unknown>
            | undefined;

          if (cellValue?.type === "loaded" && cellValue.value != null) {
            return cellValue.value;
          }

          if (cellValue?.type === "loading") {
            return "Loading...";
          }

          return "No Value";
        }

        const object: Osdk.Instance<
          Q,
          "$allBaseProperties",
          PropertyKeys<Q>,
          RDPs
        > = cellContext.row.original;

        return renderCell
          ? renderCell(object, locator)
          : cellContext.getValue();
      },
    };

    return colDef;
  });
}

function getDefaultColumns<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
>(
  objectProperties?: Record<any, ObjectMetadata.Property>,
): Array<
  AccessorColumnDef<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  >
> {
  if (!objectProperties) return [];

  return Object.entries(objectProperties).map(([key, property]) => {
    const colDef: AccessorColumnDef<
      Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
    > = {
      accessorKey: key,
      header: property.displayName ?? key,
    };
    return colDef;
  });
}
