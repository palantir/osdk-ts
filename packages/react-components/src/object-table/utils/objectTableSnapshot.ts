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
  functionColumnValues: Map<string, Map<string, unknown>> | undefined
): ObjectTableDataRow<Q, RDPs> {
  const cells = new Map<string, unknown>();

  // Resolve function-backed cells first so a same-named property doesn't
  // overwrite them.
  for (const locator of functionLocators) {
    const columnId = String(locator.id);
    cells.set(
      columnId,
      functionColumnValues?.get(columnId)?.get(locator.getKey(object))
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
  page: PagedObjects<Q, RDPs>
): Promise<Map<string, unknown>> {
  const cellsByKey = new Map<string, unknown>();
  try {
    const params = locator.getFunctionParams(page.objectSet);
    const rawResult = (await executeFunction(params)) as
      | Record<string, unknown>
      | undefined;

    for (const obj of page.objects) {
      const objectKey = locator.getKey(obj);
      const rawCell = rawResult?.[objectKey];
      cellsByKey.set(
        objectKey,
        locator.getValue ? locator.getValue(rawCell) : rawCell
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
    params: unknown
  ) => Promise<unknown>,
  maxConcurrent: number = DEFAULT_MAX_CONCURRENT_REQUESTS
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

  // One entry per task (same index as `tasks`). Each entry is a
  // `Map<objectKey, cellValue>` for that (locator, page) pair, where
  // `objectKey` is `locator.getKey(obj)` and `cellValue` is the unwrapped
  // result — or an `Error` if the page's function call threw.
  const pageMaps = await mapWithConcurrency(tasks, maxConcurrent, (task) =>
    fetchFunctionColumnPage(
      (params) => executeFunction(task.locator.queryDefinition, params),
      task.locator,
      task.page
    )
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
 * Runs `execute` over `tasks` with at most `maxConcurrent` invocations in flight at a
 * time, preserving input order in the returned results. A small fixed pool of
 * workers pulls from a shared cursor until the tasks are exhausted.
 */
async function mapWithConcurrency<T, R>(
  tasks: ReadonlyArray<T>,
  maxConcurrent: number,
  execute: (task: T, index: number) => Promise<R>
): Promise<R[]> {
  // Pre-sized so workers write at their claimed index so input order is preserved.
  const results = new Array<R>(tasks.length);

  // Cap pool at maxConcurrent, but never more workers than tasks (and at least 1).
  const poolSize = Math.max(1, Math.min(maxConcurrent, tasks.length));

  let pointer = 0;

  const runExecute = async (): Promise<void> => {
    while (pointer < tasks.length) {
      const index = pointer;
      pointer++;
      results[index] = await execute(tasks[index], index);
    }
  };

  /**
   * Let's say we have maxConcurrent = 2, and 3 tasks
   * Pool = [_, _], each pool calls runExecute
   * Within each runExecute, there's a loop synchronously execute tasks.
   *
   * So at the beginning, we will have at most 2 concurrent requests, one execute in each pool.
   * The first execute to finish would enter the next loop, and start the next task.
   * The second execute will finish and find that pointer >= tasks.length and exit.
   */
  await Promise.all(Array.from({ length: poolSize }, runExecute));

  return results;
}
