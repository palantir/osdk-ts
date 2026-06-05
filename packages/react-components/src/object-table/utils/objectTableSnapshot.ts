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
import type {
  FunctionColumnLocator,
  ObjectTableDataRow,
} from "../ObjectTableApi.js";
import { DEFAULT_MAX_CONCURRENT_REQUESTS } from "./constants.js";
import type { PagedObjects } from "./functionColumns.js";

/**
 * Default value for `getSnapshot`'s `rowLimit`. When the object set's total
 * row count exceeds this value, {@link ObjectTableHandle.getSnapshot} rejects,
 * guarding against runaway loads over very large object sets.
 */
export const DEFAULT_SNAPSHOT_ROW_LIMIT = 10_000;

/**
 * Builds a single {@link ObjectTableDataRow} for a loaded object. Property and
 * derived-property cells read straight off the object; function-backed cells
 * are looked up in the pre-resolved per-locator values map (whose values are
 * either the raw cell or, for failed pages, an `Error` instance).
 */
export function buildSnapshotRow<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FunctionColumns extends Record<string, QueryDefinition<{}>>,
>(
  object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
  columnIds: ReadonlyArray<string>,
  functionLocators: ReadonlyArray<
    FunctionColumnLocator<Q, RDPs, FunctionColumns>
  >,
  functionColumnValues: Map<string, Map<string, unknown>> | undefined,
): ObjectTableDataRow<Q, RDPs> {
  const cells = new Map<string, unknown>();

  // Resolve function-backed cells first so a same-named property doesn't
  // overwrite them.
  for (const locator of functionLocators) {
    const columnId = String(locator.id);
    cells.set(
      columnId,
      functionColumnValues?.get(columnId)?.get(locator.getKey(object)),
    );
  }

  const source = object as unknown as Record<string, unknown>;
  for (const columnId of columnIds) {
    if (cells.has(columnId)) continue;
    cells.set(columnId, source[columnId]);
  }

  return {
    id: String(object.$primaryKey),
    object,
    getValue: (columnId: string) => cells.get(columnId),
  };
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
 * Each (locator, page) pair is one function call. They run concurrently but no
 * more than `maxConcurrent` are in flight at once, so a wide table over many
 * pages doesn't fire hundreds of requests at the server simultaneously. This
 * mirrors the live function-column path (`useFunctionColumnsData`), which caps
 * concurrency the same way via `useOsdkFunctions`.
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
  maxConcurrent: number = DEFAULT_MAX_CONCURRENT_REQUESTS,
): Promise<Map<string, Map<string, unknown>>> {
  const valuesByColumnId = new Map<string, Map<string, unknown>>();
  for (const locator of locators) {
    valuesByColumnId.set(String(locator.id), new Map());
  }

  // Flatten to one task per (locator, page) so concurrency is bounded across
  // every request, not just within a single locator.
  const tasks = locators.flatMap((locator) =>
    pages.map((page) => ({ columnId: String(locator.id), locator, page }))
  );

  const pageMaps = await mapWithConcurrency(
    tasks,
    maxConcurrent,
    (task) =>
      fetchFunctionColumnPage(
        (params) => executeFunction(task.locator.queryDefinition, params),
        task.locator,
        task.page,
      ),
  );

  pageMaps.forEach((pageMap, index) => {
    const merged = valuesByColumnId.get(tasks[index].columnId);
    if (merged == null) return;
    for (const [key, value] of pageMap) {
      merged.set(key, value);
    }
  });

  return valuesByColumnId;
}

/**
 * Runs `worker` over `items` with at most `limit` invocations in flight at a
 * time, preserving input order in the returned results. A small fixed pool of
 * workers pulls from a shared cursor until the items are exhausted.
 */
async function mapWithConcurrency<T, R>(
  items: ReadonlyArray<T>,
  limit: number,
  worker: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  const poolSize = Math.max(1, Math.min(limit, items.length));
  let cursor = 0;

  const runWorker = async (): Promise<void> => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index], index);
    }
  };

  await Promise.all(Array.from({ length: poolSize }, runWorker));

  return results;
}
