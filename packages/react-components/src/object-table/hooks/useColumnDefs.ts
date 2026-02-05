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
  ObjectOrInterfaceDefinition,
  Osdk,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { useOsdkMetadata } from "@osdk/react";
import type { AccessorColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import type { ColumnDefinition } from "../ObjectTableApi.js";

interface UseColumnDefsResult<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> {
  columns: AccessorColumnDef<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  >[];

  loading: boolean;

  error: string | undefined;
}

/**
 * Hook which builds column definitions for tanstack-table given the objectSet
 */
export function useColumnDefs<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  objectType: Q,
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
): UseColumnDefsResult<Q, RDPs> {
  const { metadata, loading, error } = useOsdkMetadata(objectType);

  const columns: AccessorColumnDef<
    Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
  >[] = useMemo(() => {
    const objectProperties = metadata?.properties;
    // If columnDefinitions is provided, construct colDefs with it
    if (columnDefinitions) {
      return getColumnsFromColumnDefinitions<Q, RDPs, FunctionColumns>(
        columnDefinitions,
        objectProperties,
      );
    }

    // If not, return the default columns from the object properties
    return getDefaultColumns<Q, RDPs>(objectProperties);
  }, [columnDefinitions, metadata?.properties]);

  return { columns, loading, error };
}

function getColumnsFromColumnDefinitions<
  Q extends ObjectOrInterfaceDefinition,
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
      headerTitle,
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
      header: renderHeader ?? (headerTitle || propertyMetadata?.displayName),
      meta: {
        headerTitle: headerTitle || propertyMetadata?.displayName,
      },
      size: width,
      ...(minWidth ? { minSize: minWidth } : {}),
      ...(maxWidth ? { maxSize: maxWidth } : {}),
      enableResizing: resizable,
      enableSorting: orderable,
      enableColumnFilter: filterable,
      cell: (cellContext) => {
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
  Q extends ObjectOrInterfaceDefinition,
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
