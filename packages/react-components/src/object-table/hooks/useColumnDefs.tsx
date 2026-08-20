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
import type {
  AccessorColumnDef,
  AccessorFnColumnDef,
  AccessorKeyColumnDef,
} from "@tanstack/react-table";
import React, { useMemo } from "react";

import { NonEditableCellInEditMode } from "../components/NonEditableCellInEditMode.js";
import { renderDefaultCell } from "../DefaultCellRenderer.js";
import type { ColumnDefinition } from "../ObjectTableApi.js";
import { shouldShowEditableCell } from "../utils/shouldShowEditableCell.js";

export interface UseColumnDefsResult<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
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
  RDPs extends Record<string, SimplePropertyDef> = {},
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
  RDPs extends Record<string, SimplePropertyDef> = {},
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
      editable,
      getCellValue,
      renderCell,
      renderHeader,
      columnName,
    } = col;

    const editFieldConfig = col.editable ? col.editFieldConfig : undefined;
    const validateEdit = col.editable ? col.validateEdit : undefined;

    const propertyMetadata =
      locator.type === "property" ? objectProperties?.[locator.id] : undefined;

    const colKey = locator.id as string;

    // An explicit cellValueType wins: custom and derived columns have no
    // ontology metadata to fall back on.
    const dataType = col.cellValueType ?? getDataType(propertyMetadata);

    const markingType =
      propertyMetadata?.typeMetadata?.type === "marking"
        ? propertyMetadata.typeMetadata.markingType
        : undefined;

    // `accessorFn` routes the value through `getCellValue`, so everything
    // downstream that reads `cellContext.getValue()` — default rendering, the
    // editor, the context menu — picks it up without further plumbing.
    const accessor:
      | Pick<
          AccessorFnColumnDef<
            Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
          >,
          "accessorFn"
        >
      | Pick<
          AccessorKeyColumnDef<
            Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
          >,
          "accessorKey"
        > = getCellValue
      ? { accessorFn: (object) => getCellValue(object, locator) }
      : { accessorKey: colKey };

    const colDef: AccessorColumnDef<
      Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
    > = {
      id: colKey,
      ...accessor,
      header: renderHeader ?? (columnName || propertyMetadata?.displayName),
      meta: {
        columnName: columnName || propertyMetadata?.displayName,
        isAsyncColumn: locator.type === "function",
        isVisible: col.isVisible !== false,
        editable,
        editFieldConfig,
        dataType,
        markingType,
        validateEdit,
      },
      size: width,
      ...(minWidth ? { minSize: minWidth } : {}),
      ...(maxWidth ? { maxSize: maxWidth } : {}),
      enableResizing: resizable,
      // Function-backed columns must be sorted on the frontend, so disable sorting for now
      enableSorting: locator.type === "function" ? false : orderable,
      cell: (cellContext) => {
        const object: Osdk.Instance<
          Q,
          "$allBaseProperties",
          PropertyKeys<Q>,
          RDPs
        > = cellContext.row.original;

        const meta = cellContext.table.options.meta;

        if (renderCell) {
          const isEditable = shouldShowEditableCell(
            editable,
            object,
            meta?.onCellEdit,
            meta?.isInEditMode,
          );

          // Only use renderCell when a cell is not editable
          if (!isEditable) {
            const cell = renderCell(object, locator, cellContext.getValue());
            // Apply edit mode styling if the cell renderer is used in edit mode
            return meta?.isInEditMode ? (
              <NonEditableCellInEditMode>{cell}</NonEditableCellInEditMode>
            ) : (
              cell
            );
          }
        }

        return renderDefaultCell(cellContext);
      },
    };

    return colDef;
  });
}

function getDefaultColumns<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
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
      meta: {
        dataType: getDataType(property),
      },
    };
    return colDef;
  });
}

/**
 * The property's `WirePropertyTypes` value, used for type-aware rendering such
 * as the header's and multi-sort dialog's sort icons.
 *
 * Structured types (arrays, structs) carry an object rather than a wire type
 * string, and a column may have no metadata at all (e.g. function-backed
 * columns), so both yield `undefined`.
 */
function getDataType(
  property: ObjectMetadata.Property | undefined,
): string | undefined {
  return typeof property?.type === "string" && property.type.length > 0
    ? property.type
    : undefined;
}
