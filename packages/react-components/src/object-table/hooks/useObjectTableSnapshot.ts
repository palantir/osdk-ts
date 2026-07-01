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
  ObjectTableDataColumn,
  ObjectTableDataRow,
  ObjectTableHandle,
  ObjectTableSnapshot,
  ObjectTableSnapshotOptions,
} from "../ObjectTableApi.js";
import { DEFAULT_PAGE_SIZE, SELECTION_COLUMN_ID } from "../utils/constants.js";
import {
  buildPagedObjectSets,
  extractFunctionLocators,
} from "../utils/functionColumns.js";
import {
  buildSnapshotRow,
  DEFAULT_SNAPSHOT_ROW_LIMIT,
  fetchFunctionColumnValues,
} from "../utils/objectTableSnapshot.js";
import type { OrderBy } from "../utils/types.js";

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
  /** Page size for chunking function-column queries across loaded rows. */
  pageSize?: number;
  /**
   * Total number of objects in the object set, as reported by the
   * underlying list payload. Used to fail fast when `getSnapshot` is called
   * with a `rowLimit` lower than the row count.
   */
  totalCount: string | undefined;

  orderBy: OrderBy<Q> | undefined;
}

/**
 * Builds the {@link ObjectTableHandle} exposed via `ObjectTable`'s `tableRef`.
 *
 * `getSnapshot` reads the table's currently visible columns to decide what to
 * export, rejects up front when the set's `totalCount` exceeds `rowLimit`,
 * otherwise paginates the entire resolved object set, and resolves
 * function-backed column values for the loaded rows.
 */
export function useObjectTableSnapshot<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FunctionColumns extends Record<string, QueryDefinition<{}>>,
>({
  objectOrInterfaceType,
  table,
  columnDefinitions,
  objectSet,
  pageSize = DEFAULT_PAGE_SIZE,
  totalCount,
  orderBy,
}: UseObjectTableSnapshotArgs<Q, RDPs, FunctionColumns>): ObjectTableHandle<
  Q,
  RDPs
> {
  const client = useOsdkClient();

  const functionLocators = useMemo(
    () => extractFunctionLocators<Q, RDPs, FunctionColumns>(columnDefinitions),
    [columnDefinitions]
  );

  const customColumnIds = useMemo(
    () =>
      new Set(
        columnDefinitions
          ?.filter((definition) => definition.locator.type === "custom")
          .map((definition) => String(definition.locator.id)) ?? []
      ),
    [columnDefinitions]
  );

  const getSnapshot = useCallback(
    async (
      options?: ObjectTableSnapshotOptions
    ): Promise<ObjectTableSnapshot<Q, RDPs>> => {
      const rowLimit = options?.rowLimit ?? DEFAULT_SNAPSHOT_ROW_LIMIT;
      const rowLimitExceededError = `Error in getSnapshot: total row count exceeds row limit of ${rowLimit}.`;

      // Fail fast when the caller's row cap is smaller than the matching set.
      // `totalCount` is only available once the list payload has resolved; we
      // skip the check otherwise rather than guess.
      if (totalCount != null) {
        const total = Number(totalCount);
        if (Number.isFinite(total) && total > rowLimit) {
          return Promise.reject(rowLimitExceededError);
        }
      }

      const columns: ObjectTableDataColumn[] = table
        .getVisibleLeafColumns()
        .filter(
          (column) =>
            column.id !== SELECTION_COLUMN_ID && !customColumnIds.has(column.id)
        )
        .map((column) => {
          const meta = column.columnDef.meta;
          const header = column.columnDef.header;
          const name =
            typeof header === "string"
              ? header
              : (meta?.columnName ?? column.id);
          return { id: column.id, name };
        });

      const columnIds = columns.map((column) => column.id);
      const columnIdsSet = new Set(columnIds);

      const loadedObjects: Array<
        Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
      > = [];
      if (objectSet != null && columnIds.length > 0 && rowLimit > 0) {
        for await (const object of objectSet.asyncIter({
          $orderBy: orderBy,
        })) {
          loadedObjects.push(
            object as unknown as Osdk.Instance<
              Q,
              "$allBaseProperties",
              PropertyKeys<Q>,
              RDPs
            >
          );
          // Bound the in-memory load even when `totalCount` was unavailable for
          // the fail-fast check above: once we've pulled more rows than the
          // caller allows, stop and reject rather than draining the whole set.
          if (loadedObjects.length > rowLimit) {
            return Promise.reject(rowLimitExceededError);
          }
        }
      }

      const visibleFunctionLocators = functionLocators.filter((locator) =>
        columnIdsSet.has(String(locator.id))
      );

      let functionColumnValues: Map<string, Map<string, unknown>> | undefined;

      if (visibleFunctionLocators.length > 0 && loadedObjects.length > 0) {
        const pages = buildPagedObjectSets<Q, RDPs>(
          client,
          objectOrInterfaceType,
          loadedObjects,
          pageSize
        );

        if (pages.length > 0) {
          functionColumnValues = await fetchFunctionColumnValues<
            Q,
            RDPs,
            FunctionColumns
          >(visibleFunctionLocators, pages, (queryDefinition, params) =>
            (
              client(queryDefinition) as {
                executeFunction: (params: unknown) => Promise<unknown>;
              }
            ).executeFunction(params)
          );
        }
      }

      const rows: ObjectTableDataRow<Q, RDPs>[] = loadedObjects.map((object) =>
        buildSnapshotRow<Q, RDPs, FunctionColumns>(
          object,
          columnIds,
          visibleFunctionLocators,
          functionColumnValues
        )
      );

      return { columns, rows, totalCount };
    },
    [
      table,
      objectSet,
      objectOrInterfaceType,
      functionLocators,
      customColumnIds,
      client,
      pageSize,
      totalCount,
      orderBy,
    ]
  );

  return useMemo<ObjectTableHandle<Q, RDPs>>(
    () => ({ getSnapshot }),
    [getSnapshot]
  );
}
