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
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import {
  type FunctionQueryParams,
  useOsdkClient2,
  useOsdkFunctions,
  type UseOsdkFunctionsResult,
} from "@osdk/react/experimental";
import { chunk } from "lodash-es";
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
  DEFAULT_MAX_CONCURRENT_REQUESTS,
  DEFAULT_PAGE_SIZE,
} from "../utils/constants.js";
import { stripDerivedPropertiesFromParams } from "../utils/stripDerivedPropertiesFromParams.js";

export interface FunctionColumnData {
  [columnId: string]: {
    [objectPrimaryKey: string]: AsyncCellData;
  };
}

export interface UseFunctionColumnsDataOptions<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  objectOrInterfaceType: Q;
  objects:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined;
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>;
  primaryKeyApiName?: string;
  pageSize?: number;
}

const isObjectType = (
  objectOrInterfaceType: ObjectOrInterfaceDefinition,
): objectOrInterfaceType is ObjectTypeDefinition => {
  return objectOrInterfaceType.type === "object";
};

export function useFunctionColumnsData<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  {
    objectOrInterfaceType,
    objects,
    columnDefinitions,
    primaryKeyApiName,
    pageSize = DEFAULT_PAGE_SIZE,
  }: UseFunctionColumnsDataOptions<Q, RDPs, FunctionColumns>,
): FunctionColumnData {
  const client = useOsdkClient2();
  const prevDataRef = useRef<FunctionColumnData>({});

  const isObjectTypeDefinition = objectOrInterfaceType
    && isObjectType(objectOrInterfaceType);

  const stableObjects = useStableObjects(objects);

  const baseObjectSet: ObjectSet<Q, RDPs> | undefined = useMemo(
    () => {
      return isObjectTypeDefinition
        ? client(objectOrInterfaceType) as ObjectSet<Q, RDPs>
        : undefined;
    },
    [client, isObjectTypeDefinition, objectOrInterfaceType],
  );

  const functionColDefs = useMemo(
    () => extractFunctionLocators<Q, RDPs, FunctionColumns>(columnDefinitions),
    [columnDefinitions],
  );

  const disabled = !objectOrInterfaceType || !stableObjects?.length
    || functionColDefs.length === 0;

  // Construct object sets using the base object set (constructed with object type only)
  // + filter with primary keys of each page's objects
  //
  // When a new page loads, only that page's queries fire — old pages
  // hit the dedupeIntervalMs cache since their params are unchanged.
  const pagedObjectSets = useMemo(() => {
    if (!baseObjectSet || !stableObjects?.length) return [];

    return buildPagedObjectSets(
      baseObjectSet,
      stableObjects,
      primaryKeyApiName,
      pageSize,
    );
  }, [baseObjectSet, stableObjects, primaryKeyApiName, pageSize]);

  const queryGrid = useMemo(() => {
    if (pagedObjectSets.length === 0 || functionColDefs.length === 0) {
      return EMPTY_QUERY_GRID;
    }
    return buildQueryGrid<Q, RDPs, FunctionColumns>(
      pagedObjectSets,
      functionColDefs,
    );
  }, [pagedObjectSets, functionColDefs]);

  const results = useOsdkFunctions({
    queries: queryGrid.queries,
    enabled: !disabled,
    maxConcurrent: DEFAULT_MAX_CONCURRENT_REQUESTS,
  });

  const mergedResults = useMemo(
    () => mergePagedResults(results, queryGrid.numColumns),
    [results, queryGrid.numColumns],
  );

  const data = useMemo(() => {
    const columnData = buildFunctionColumnData(
      mergedResults,
      functionColDefs,
      stableObjects,
      disabled,
      prevDataRef.current,
    );
    prevDataRef.current = columnData;
    return columnData;
  }, [mergedResults, functionColDefs, stableObjects, disabled]);

  return data;
}

/**
 * Pairs a flat queries array with the layout metadata needed to recover per-column
 * results back into per-column groups. The numColumns value is produced by
 * the same function that builds the queries, so the two are always in sync.
 */
interface QueryGrid {
  queries: FunctionQueryParams<QueryDefinition<unknown>>[];
  numColumns: number;
}

interface MergedResult {
  isLoading: boolean;
  error: unknown;
  functionsMap: Record<string, unknown>;
}

const EMPTY_QUERY_GRID: QueryGrid = { queries: [], numColumns: 0 };

/** Filters columnDefinitions down to only function-backed locators. */
function extractFunctionLocators<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  columnDefinitions:
    | Array<ColumnDefinition<Q, RDPs, FunctionColumns>>
    | undefined,
): FunctionColumnLocator<Q, RDPs, FunctionColumns>[] {
  if (!columnDefinitions) return [];

  return columnDefinitions
    .filter(colDef => colDef.locator.type === "function")
    .map(colDef =>
      colDef.locator as FunctionColumnLocator<Q, RDPs, FunctionColumns>
    );
}

/** Chunks objects into pages and creates a filtered ObjectSet per page. */
function buildPagedObjectSets<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  objectSet: ObjectSet<Q, RDPs>,
  objects: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[],
  primaryKeyApiName: string | undefined,
  pageSize: number,
): unknown[] {
  if (!primaryKeyApiName) {
    return [stripDerivedPropertiesFromParams(objectSet)];
  }

  return chunk(objects, pageSize).map(page => {
    const whereClause = {
      [primaryKeyApiName]: {
        $in: page.map(obj => obj.$primaryKey),
      },
    } as WhereClause<Q, RDPs>;

    return stripDerivedPropertiesFromParams(
      addFilterClauseToObjectSet(objectSet, whereClause),
    );
  });
}

/**
 * Builds a flat query array and the layout metadata needed to recover per-column results.
 *
 * Layout: [page0_col0, page0_col1, ..., page1_col0, page1_col1, ...]
 * Page-first ordering ensures first concurrent queries prioritizes the first page,
 * so visible rows get all their columns populated before later pages.
 */
function buildQueryGrid<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  pagedObjectSets: unknown[],
  functionColDefs: FunctionColumnLocator<Q, RDPs, FunctionColumns>[],
): QueryGrid {
  const queries: FunctionQueryParams<QueryDefinition<unknown>>[] = [];

  for (const pagedObjectSet of pagedObjectSets) {
    for (const locator of functionColDefs) {
      queries.push({
        queryDefinition: locator.queryDefinition,
        options: {
          params: locator.getFunctionParams(
            pagedObjectSet as ObjectSet<Q, RDPs>,
          ),
          dedupeIntervalMs: locator.dedupeIntervalMs
            ?? DEFAULT_FUNCTION_COLUMN_DEDUPE_INTERVAL_MS,
        } as FunctionQueryParams<QueryDefinition<unknown>>["options"],
      });
    }
  }

  return { queries, numColumns: functionColDefs.length };
}

/**
 * Merges paged results into one merged result per column.
 * Each column has results spread across pages — this combines their
 * functionsMaps so buildFunctionColumnData can look up any object by key.
 *
 * Relies on QueryGrid layout: results[i] belongs to column (i % numColumns).
 * i.e. the first N results are the first page of each column, the next N results are the second page, etc.
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
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  results: MergedResult[],
  functionColDefs: FunctionColumnLocator<Q, RDPs, FunctionColumns>[],
  objects:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined,
  disabled: boolean,
  prevColumnData: FunctionColumnData,
): FunctionColumnData {
  const columnData: FunctionColumnData = {};

  if (disabled || !objects) return columnData;

  results.forEach((result, index) => {
    const locator = functionColDefs[index];
    if (!locator) return;

    const columnId = String(locator.id);

    columnData[columnId] = {};

    objects.forEach(obj => {
      const key = String(obj.$primaryKey);
      const prevData = prevColumnData[columnId]?.[key]?.data;

      columnData[columnId][key] = createAsyncCellData(
        resolveCell(
          result,
          locator.getKey(obj),
          locator.getValue,
          prevData,
        ),
      );
    });
  });

  return columnData;
}

/** Resolves the cell state: error, loaded, or loading with previous data. */
function resolveCell(
  result: MergedResult,
  objectKey: string,
  getValue: ((cellData: unknown) => unknown) | undefined,
  prevData: unknown,
): Omit<AsyncCellData, "__asyncCell"> {
  if (result.error) {
    return { isLoading: false, error: result.error };
  }
  if (objectKey in result.functionsMap) {
    const rawData = result.functionsMap[objectKey];
    return { isLoading: false, data: getValue ? getValue(rawData) : rawData };
  }
  // Key not in results — still loading, or query returned no data for this object
  // Return with previous data
  return { isLoading: result.isLoading, data: prevData };
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
