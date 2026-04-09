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

// Function column data is readOnly and can be cached aggressively,
// so we set a longer dedupe interval to maximize cache hits
export const DEFAULT_DEDUPE_INTERVAL_MS = 300_000; // 5 minutes

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
): FunctionColumnData {
  const prevDataRef = useRef<FunctionColumnData>({});

  const stableObjects = useStableObjects(objects);

  // TODO: replace with useDeepEqual when it's added
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableObjectSet = useMemo(() => objectSet, [JSON.stringify(objectSet)]);

  const transformedObjectSet = useMemo(() => {
    if (!stableObjectSet) {
      return stableObjectSet;
    }

    if (!primaryKeyApiName) {
      return stripDerivedPropertiesFromParams(stableObjectSet);
    }

    const whereClause = {
      [primaryKeyApiName]: {
        $in: stableObjects?.map(obj => obj.$primaryKey) ?? [],
      },
    } as WhereClause<Q, RDPs>;

    return stripDerivedPropertiesFromParams(
      addFilterClauseToObjectSet(stableObjectSet, whereClause),
    );
  }, [primaryKeyApiName, stableObjectSet, stableObjects]);

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

  // Build queries from columnDefinitions and the current object set
  const queries = useMemo(
    () => {
      if (disabled || !transformedObjectSet || !columnDefinitions) {
        return [];
      }

      const resultQueries: FunctionQueryParams<QueryDefinition<unknown>>[] = [];

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
            params: locator.getFunctionParams(
              transformedObjectSet as ObjectSet<Q, RDPs>,
            ),
            dedupeIntervalMs: locator.dedupeIntervalMs
              ?? DEFAULT_DEDUPE_INTERVAL_MS,
          } as FunctionQueryParams<QueryDefinition<unknown>>["options"],
        });
      }

      return resultQueries;
    },
    [disabled, columnDefinitions, transformedObjectSet],
  );

  const results = useOsdkFunctions(
    {
      queries,
      enabled: !disabled,
      maxConcurrent: maxConcurrentRequests,
    },
  );

  const data = useMemo(() => {
    const columnData = buildFunctionColumnData(
      results,
      columnEntries,
      stableObjects,
      disabled,
      prevDataRef.current,
    );
    prevDataRef.current = columnData;
    return columnData;
  }, [results, columnEntries, stableObjects, disabled]);

  return data;
}

function buildFunctionColumnData<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  results: UseOsdkFunctionsResult,
  columnEntries: FunctionColumnEntry<Q, RDPs>[],
  objects:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined,
  disabled: boolean,
  prevColumnData: FunctionColumnData,
): FunctionColumnData {
  const columnData: FunctionColumnData = {};

  if (disabled || !objects) return columnData;

  results.forEach((result, index) => {
    const entry = columnEntries[index];
    if (!entry) return;

    const { columnId, getValue, getKey: columnGetKey } = entry;
    const functionsMap = result.data as Record<string, unknown> | undefined;

    columnData[columnId] = {};

    objects.forEach(obj => {
      const key = String(obj.$primaryKey);
      const prevData = prevColumnData[columnId]?.[key]?.data;

      columnData[columnId][key] = createAsyncCellData(
        resolveCell(
          result,
          functionsMap,
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
  result: UseOsdkFunctionsResult[number],
  functionsMap: Record<string, unknown> | undefined,
  objectKey: string,
  getValue: ((cellData: unknown) => unknown) | undefined,
  prevData: unknown,
): Omit<AsyncCellData, "__asyncCell"> {
  if (result.error) {
    return { isLoading: false, error: result.error };
  }
  if (functionsMap) {
    const rawData = functionsMap[objectKey];
    return { isLoading: false, data: getValue ? getValue(rawData) : rawData };
  }
  // Loading or no result yet — retain previous data
  return { isLoading: true, data: prevData };
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
