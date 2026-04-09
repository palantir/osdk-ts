/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  WhereClause,
} from "@osdk/api";
import {
  type FunctionQueryParams,
  useOsdkFunctions,
  type UseOsdkFunctionsResult,
} from "@osdk/react/experimental";
import { useMemo, useRef } from "react";
import type {
  ColumnDefinition,
  FunctionColumnLocator,
} from "../ObjectTableApi.js";
import { addFilterClauseToObjectSet } from "../utils/addFilterClauseToObjectSet.js";
import {
  type AsyncCellData,
  createAsyncCellData,
} from "../utils/AsyncCellData.js";
import {
  DEFAULT_FUNCTION_COLUMN_DEDUPE_INTERVAL_MS,
  DEFAULT_PAGE_SIZE,
} from "../utils/constants.js";
import { stripDerivedPropertiesFromParams } from "../utils/stripDerivedPropertiesFromParams.js";

export interface FunctionColumnData {
  [columnId: string]: {
    [objectPrimaryKey: string]: AsyncCellData;
  };
}

type FunctionColumnEntry<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> = {
  columnId: string;
  getValue?: (cellData: unknown) => unknown;
  getKey: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
  ) => string;
};

// Re-export for backward compatibility
export const DEFAULT_DEDUPE_INTERVAL_MS: number =
  DEFAULT_FUNCTION_COLUMN_DEDUPE_INTERVAL_MS;

export function useFunctionColumnsData<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  objectSet: ObjectSet<Q, RDPs> | undefined,
  objects:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined,
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
  primaryKeyApiName?: string,
  maxConcurrentRequests?: number,
  pageSize?: number,
): FunctionColumnData {
  const prevDataRef = useRef<FunctionColumnData>({});
  const resolvedPageSize = pageSize ?? DEFAULT_PAGE_SIZE;

  const stableObjects = useStableObjects(objects);

  // TODO: replace with useDeepEqual when it's added
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableObjectSet = useMemo(() => objectSet, [JSON.stringify(objectSet)]);

  // Chunk objects into pages and create a filtered object set per page.
  // When a new page loads, only the new page's query fires — old pages
  // hit the dedupeIntervalMs cache since their params are unchanged.
  const pagedObjectSets = useMemo(() => {
    if (!stableObjectSet || !stableObjects?.length) return [];

    if (!primaryKeyApiName) {
      return [stripDerivedPropertiesFromParams(stableObjectSet)];
    }

    const pages = chunk(stableObjects ?? [], resolvedPageSize);
    return pages.map(page => {
      const whereClause = {
        [primaryKeyApiName]: {
          $in: page.map(obj => obj.$primaryKey),
        },
      } as WhereClause<Q, RDPs>;

      return stripDerivedPropertiesFromParams(
        addFilterClauseToObjectSet(stableObjectSet, whereClause),
      );
    });
  }, [primaryKeyApiName, stableObjectSet, stableObjects, resolvedPageSize]);

  // Column entries depend only on columnDefinitions, keeping a stable reference
  // across page changes so prevDataRef is preserved during loading
  const columnEntries = useMemo(
    () => {
      if (!columnDefinitions) return [];

      const entries: FunctionColumnEntry<Q, RDPs>[] = [];
      for (const colDef of columnDefinitions) {
        if (colDef.locator.type !== "function") continue;

        const locator = colDef.locator as FunctionColumnLocator<
          Q,
          RDPs,
          FunctionColumns
        >;

        entries.push({
          columnId: String(locator.id),
          getValue: locator.getValue,
          getKey: locator.getKey,
        });
      }
      return entries;
    },
    [columnDefinitions],
  );

  const disabled = !stableObjectSet || !stableObjects?.length
    || columnEntries.length === 0;

  // Build queries: one per (page, column) pair.
  // Layout: [page0_col0, page0_col1, ..., page1_col0, page1_col1, ...]
  const queries = useMemo(
    () => {
      if (disabled || !columnDefinitions || pagedObjectSets.length === 0) {
        return [];
      }

      const resultQueries: FunctionQueryParams<QueryDefinition<unknown>>[] = [];

      for (const pagedObjectSet of pagedObjectSets) {
        for (const colDef of columnDefinitions) {
          if (colDef.locator.type !== "function") continue;

          const locator = colDef.locator as FunctionColumnLocator<
            Q,
            RDPs,
            FunctionColumns
          >;

          resultQueries.push({
            queryDefinition: locator.queryDefinition,
            options: {
              params: stripDerivedPropertiesFromParams(
                locator.getFunctionParams(
                  pagedObjectSet as ObjectSet<Q, RDPs>,
                ),
              ),
              dedupeIntervalMs: locator.dedupeIntervalMs
                ?? DEFAULT_FUNCTION_COLUMN_DEDUPE_INTERVAL_MS,
            } as FunctionQueryParams<QueryDefinition<unknown>>["options"],
          });
        }
      }

      return resultQueries;
    },
    [disabled, columnDefinitions, pagedObjectSets],
  );

  const results = useOsdkFunctions(
    {
      queries,
      enabled: !disabled,
      maxConcurrent: maxConcurrentRequests,
    },
  );

  // Merge paged results back into one result per column.
  // Results are laid out as [page0_col0, page0_col1, ..., page1_col0, ...]
  // Each column's page results are merged into a single functionsMap.
  const mergedResults = useMemo(
    () => mergePagedResults(results, columnEntries.length),
    [results, columnEntries.length],
  );

  const data = useMemo(() => {
    const columnData = buildFunctionColumnData(
      mergedResults,
      columnEntries,
      stableObjects,
      disabled,
      prevDataRef.current,
    );
    prevDataRef.current = columnData;
    return columnData;
  }, [mergedResults, columnEntries, stableObjects, disabled]);

  return data;
}

interface MergedResult {
  isLoading: boolean;
  error: unknown;
  functionsMap: Record<string, unknown>;
}

/**
 * Merges paged results into one merged result per column.
 * Each column has results spread across pages — this combines their
 * functionsMaps so buildFunctionColumnData can look up any object by key.
 */
function mergePagedResults(
  results: UseOsdkFunctionsResult,
  numColumns: number,
): MergedResult[] {
  if (numColumns === 0) return [];

  const merged: MergedResult[] = Array.from(
    { length: numColumns },
    () => ({ isLoading: false, error: undefined, functionsMap: {} }),
  );

  results.forEach((result, index) => {
    const columnIndex = index % numColumns;
    const entry = merged[columnIndex];

    if (result.isLoading) {
      entry.isLoading = true;
    }
    if (result.error) {
      entry.error = result.error;
    }
    const pageData = result.data as Record<string, unknown> | undefined;
    if (pageData) {
      Object.assign(entry.functionsMap, pageData);
    }
  });

  return merged;
}

function buildFunctionColumnData<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  mergedResults: MergedResult[],
  columnEntries: FunctionColumnEntry<Q, RDPs>[],
  objects:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined,
  disabled: boolean,
  prevColumnData: FunctionColumnData,
): FunctionColumnData {
  const columnData: FunctionColumnData = {};

  if (disabled || !objects) return columnData;

  mergedResults.forEach((merged, index) => {
    const entry = columnEntries[index];
    if (!entry) return;

    const { columnId, getValue, getKey: columnGetKey } = entry;

    columnData[columnId] = {};

    objects.forEach(obj => {
      const key = String(obj.$primaryKey);
      const prevData = prevColumnData[columnId]?.[key]?.data;

      columnData[columnId][key] = createAsyncCellData(
        resolveCell(
          merged,
          columnGetKey(obj),
          getValue,
          prevData,
        ),
      );
    });
  });

  return columnData;
}

/** Resolves the cell state: error, loaded, or loading with previous data. */
function resolveCell(
  merged: MergedResult,
  objectKey: string,
  getValue: ((cellData: unknown) => unknown) | undefined,
  prevData: unknown,
): Omit<AsyncCellData, "__asyncCell"> {
  if (merged.error) {
    return { isLoading: false, error: merged.error };
  }
  if (objectKey in merged.functionsMap) {
    const rawData = merged.functionsMap[objectKey];
    return { isLoading: false, data: getValue ? getValue(rawData) : rawData };
  }
  // Key not in results — still loading, or query returned no data for this object
  return { isLoading: merged.isLoading, data: prevData };
}

function chunk<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const useStableObjects = <
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  objects:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined,
):
  | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
  | undefined =>
{
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => objects, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(
      (objects ?? []).map(item => ({
        $apiName: item.$apiName,
        $primaryKey: item.$primaryKey,
      })).sort((a, b) => {
        if (a.$apiName !== b.$apiName) {
          return a.$apiName.localeCompare(b.$apiName);
        }
        return String(a.$primaryKey).localeCompare(String(b.$primaryKey));
      }),
    ),
  ]);
};
