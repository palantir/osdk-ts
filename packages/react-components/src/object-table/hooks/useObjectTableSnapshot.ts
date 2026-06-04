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
  ObjectSet,
  Osdk,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import type { Table } from "@tanstack/react-table";
import { useCallback, useMemo } from "react";
import type {
  ColumnDefinition,
  ObjectTableHandle,
  ObjectTableSnapshot,
  ObjectTableSnapshotOptions,
} from "../ObjectTableApi.js";
import { DEFAULT_PAGE_SIZE } from "../utils/constants.js";
import {
  buildPagedObjectSets,
  extractFunctionLocators,
} from "../utils/functionColumns.js";
import {
  buildSnapshotRow,
  DEFAULT_SNAPSHOT_MAX_ROWS,
  fetchFunctionColumnValues,
  getExportableColumnIds,
  selectSnapshotColumns,
  type SnapshotLeafColumn,
} from "../utils/objectTableSnapshot.js";

interface UseObjectTableSnapshotArgs<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FunctionColumns extends Record<string, QueryDefinition<{}>>,
> {
  /**
   * The object or interface type the table is rendering. Used to construct a
   * base object set for chunking function-column queries by primary key.
   */
  objectOrInterfaceType: Q;
  table: Table<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>>;
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>;
  /**
   * The object set the table resolved to (filter / ordering / unions applied,
   * derived properties included). Rows are loaded by paginating this set.
   */
  objectSet: ObjectSet<Q, RDPs> | undefined;
  /** Primary key apiName used to chunk loaded rows when fetching async columns. */
  primaryKeyApiName: string | undefined;
  /** Page size for chunking function-column queries across loaded rows. */
  pageSize?: number;
}

/**
 * Builds the {@link ObjectTableHandle} exposed via `ObjectTable`'s `apiRef`.
 *
 * `getSnapshot` reads the table's currently visible columns to decide what to
 * export, paginates the resolved object set (up to `maxRows`), and resolves
 * function-backed column values for the loaded rows.
 */
export function useObjectTableSnapshot<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FunctionColumns extends Record<string, QueryDefinition<{}>>,
>(
  {
    objectOrInterfaceType,
    table,
    columnDefinitions,
    objectSet,
    primaryKeyApiName,
    pageSize = DEFAULT_PAGE_SIZE,
  }: UseObjectTableSnapshotArgs<Q, RDPs, FunctionColumns>,
): ObjectTableHandle {
  const client = useOsdkClient();

  const exportableIds = useMemo(
    () => getExportableColumnIds(columnDefinitions),
    [columnDefinitions],
  );

  const functionLocators = useMemo(
    () => extractFunctionLocators<Q, RDPs, FunctionColumns>(columnDefinitions),
    [columnDefinitions],
  );

  const getSnapshot = useCallback(
    async (
      options?: ObjectTableSnapshotOptions,
    ): Promise<ObjectTableSnapshot> => {
      const maxRows = options?.maxRows ?? DEFAULT_SNAPSHOT_MAX_ROWS;

      const leafColumns: SnapshotLeafColumn[] = table
        .getVisibleLeafColumns()
        .map((column) => {
          const meta = column.columnDef.meta;
          const header = column.columnDef.header;
          const name = meta?.columnName
            ?? (typeof header === "string" ? header : undefined)
            ?? column.id;
          return { id: column.id, name };
        });

      const { columns, excludedColumns } = selectSnapshotColumns(
        leafColumns,
        exportableIds,
      );
      const columnIds = columns.map((column) => column.id);
      const includedColumnIds = new Set(columnIds);

      type LoadedObject = Osdk.Instance<
        Q,
        "$allBaseProperties",
        PropertyKeys<Q>,
        RDPs
      >;
      const loadedObjects: Array<LoadedObject> = [];
      if (objectSet != null && columnIds.length > 0 && maxRows > 0) {
        for await (const object of objectSet.asyncIter()) {
          loadedObjects.push(object as unknown as LoadedObject);
          if (loadedObjects.length >= maxRows) {
            break;
          }
        }
      }

      const visibleFunctionLocators = functionLocators.filter((locator) =>
        includedColumnIds.has(String(locator.id))
      );

      let functionColumnValues:
        | Map<string, Map<string, unknown>>
        | undefined;
      if (
        visibleFunctionLocators.length > 0
        && loadedObjects.length > 0
      ) {
        const pages = buildPagedObjectSets<Q, RDPs>(
          client,
          objectOrInterfaceType,
          loadedObjects,
          primaryKeyApiName,
          pageSize,
        );
        if (pages.length > 0) {
          functionColumnValues = await fetchFunctionColumnValues<
            Q,
            RDPs,
            FunctionColumns
          >(
            visibleFunctionLocators,
            pages,
            (queryDefinition, params) =>
              (
                client(queryDefinition) as {
                  executeFunction: (params: unknown) => Promise<unknown>;
                }
              ).executeFunction(params),
          );
        }
      }

      const rows = loadedObjects.map((object) => {
        const row = buildSnapshotRow(object, columnIds);
        if (functionColumnValues) {
          for (const locator of visibleFunctionLocators) {
            const columnId = String(locator.id);
            const value = functionColumnValues.get(columnId)?.get(
              locator.getKey(object),
            );
            row[columnId] = value;
          }
        }
        return row;
      });

      return { columns, rows, excludedColumns };
    },
    [
      table,
      exportableIds,
      objectSet,
      objectOrInterfaceType,
      functionLocators,
      client,
      primaryKeyApiName,
      pageSize,
    ],
  );

  return useMemo<ObjectTableHandle>(() => ({ getSnapshot }), [getSnapshot]);
}
