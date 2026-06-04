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
import type { PagedObjects } from "./functionColumns.js";

/**
 * Default cap on the number of rows {@link ObjectTableHandle.getSnapshot}
 * will load. Bounds runaway loads against very large object sets.
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
