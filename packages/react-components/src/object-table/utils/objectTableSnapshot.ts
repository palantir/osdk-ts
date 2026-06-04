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
import type {
  ColumnDefinition,
  FunctionColumnLocator,
  ObjectTableSnapshotColumn,
} from "../ObjectTableApi.js";
import { SELECTION_COLUMN_ID } from "./constants.js";
import type { PagedObjects } from "./functionColumns.js";

/**
 * Default cap on the number of rows {@link ObjectTableHandle.getSnapshot}
 * will load. Bounds runaway loads against very large object sets.
 */
export const DEFAULT_SNAPSHOT_MAX_ROWS = 10_000;

/**
 * Minimal description of a table leaf column, decoupled from `@tanstack/react-table`
 * so the column-selection logic is testable in isolation.
 */
export interface SnapshotLeafColumn {
  /** Column id (a property key, derived-property key, or custom id). */
  id: string;
  /** Display name shown in the table header. */
  name: string;
}

/**
 * Computes the set of column ids whose values are exportable for every row —
 * i.e. `property`, `rdp`, and `function` columns. Property and rdp values live
 * on the loaded object; function-column values are fetched per page during
 * snapshot collection.
 *
 * Returns `undefined` when no explicit `columnDefinitions` are provided: in
 * that case the table renders the object type's properties directly and there
 * is no exclusion set to apply.
 */
export function getExportableColumnIds<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FunctionColumns extends Record<string, QueryDefinition<{}>>,
>(
  columnDefinitions:
    | Array<ColumnDefinition<Q, RDPs, FunctionColumns>>
    | undefined,
): Set<string> | undefined {
  if (columnDefinitions == null) {
    return undefined;
  }
  const ids = new Set<string>();
  for (const { locator } of columnDefinitions) {
    if (
      locator.type === "property"
      || locator.type === "rdp"
      || locator.type === "function"
    ) {
      ids.add(String(locator.id));
    }
  }
  return ids;
}

/**
 * Partitions the table's visible leaf columns into the snapshot columns and
 * the display names of columns excluded from the snapshot.
 *
 * - The selection column is dropped silently (never included, never reported).
 * - When `exportableIds` is provided, columns absent from it (custom-rendered
 *   columns with no underlying value) are excluded and reported.
 *
 * Column order is preserved, so the result reflects the table's current
 * visibility, ordering, and pinning.
 */
export function selectSnapshotColumns(
  leafColumns: ReadonlyArray<SnapshotLeafColumn>,
  exportableIds: ReadonlySet<string> | undefined,
): { columns: ObjectTableSnapshotColumn[]; excludedColumns: string[] } {
  const columns: ObjectTableSnapshotColumn[] = [];
  const excludedColumns: string[] = [];

  for (const column of leafColumns) {
    if (column.id === SELECTION_COLUMN_ID) {
      continue;
    }
    if (exportableIds != null && !exportableIds.has(column.id)) {
      excludedColumns.push(column.name);
      continue;
    }
    columns.push({ id: column.id, name: column.name });
  }

  return { columns, excludedColumns };
}

/**
 * Projects a loaded object into a snapshot row keyed by column id, holding the
 * raw cell value for each column so the caller can format it as needed.
 */
export function buildSnapshotRow(
  object: unknown,
  columnIds: ReadonlyArray<string>,
): Record<string, unknown> {
  const source = object as Record<string, unknown>;
  const row: Record<string, unknown> = {};
  for (const id of columnIds) {
    row[id] = source[id];
  }
  return row;
}

/**
 * Executes a function-backed column for one page, applies `getValue`, and
 * returns a map keyed by `locator.getKey(obj)` so callers can merge values
 * back onto each row.
 *
 * On query failure, every object in the page maps to the thrown `Error`,
 * so the caller surfaces a per-cell error rather than dropping the column.
 */
export async function fetchFunctionColumnPage<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FunctionColumns extends Record<string, QueryDefinition<{}>>,
>(
  executeFunction: (params: unknown) => Promise<unknown>,
  locator: FunctionColumnLocator<Q, RDPs, FunctionColumns>,
  page: PagedObjects<Q, RDPs>,
): Promise<Map<string, unknown>> {
  const cellsByKey = new Map<string, unknown>();
  try {
    const params = locator.getFunctionParams(page.objectSet);
    const rawResult = await executeFunction(params) as
      | Record<string, unknown>
      | undefined;

    for (const obj of page.objects) {
      const objectKey = locator.getKey(obj);
      const rawCell = rawResult?.[objectKey];
      cellsByKey.set(
        objectKey,
        locator.getValue ? locator.getValue(rawCell) : rawCell,
      );
    }
  } catch (cause) {
    const error = cause instanceof Error ? cause : new Error(String(cause));
    for (const obj of page.objects) {
      cellsByKey.set(locator.getKey(obj), error);
    }
  }
  return cellsByKey;
}

/**
 * Resolves async column values for all loaded rows by paginating each function
 * locator across the rows. Returns the per-locator map of `getKey(obj)` →
 * cell value (already `getValue`-unwrapped, or an `Error` for failed pages).
 *
 * Pages run in parallel per locator; locators run in parallel with each other.
 */
export async function fetchFunctionColumnValues<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FunctionColumns extends Record<string, QueryDefinition<{}>>,
>(
  locators: ReadonlyArray<FunctionColumnLocator<Q, RDPs, FunctionColumns>>,
  pages: ReadonlyArray<PagedObjects<Q, RDPs>>,
  executeFunction: (
    queryDefinition: QueryDefinition<{}>,
    params: unknown,
  ) => Promise<unknown>,
): Promise<Map<string, Map<string, unknown>>> {
  const valuesByColumnId = new Map<string, Map<string, unknown>>();

  await Promise.all(
    locators.map(async (locator) => {
      const columnId = String(locator.id);
      const merged = new Map<string, unknown>();
      const pageMaps = await Promise.all(
        pages.map((page) =>
          fetchFunctionColumnPage(
            (params) => executeFunction(locator.queryDefinition, params),
            locator,
            page,
          )
        ),
      );
      for (const pageMap of pageMaps) {
        for (const [key, value] of pageMap) {
          merged.set(key, value);
        }
      }
      valuesByColumnId.set(columnId, merged);
    }),
  );

  return valuesByColumnId;
}
