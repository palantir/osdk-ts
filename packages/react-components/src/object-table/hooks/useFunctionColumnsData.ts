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
} from "@osdk/api";
import {
  composeObjectSet,
  type FunctionQueryParams,
  useOsdkFunctions,
} from "@osdk/react/experimental";

import { useMemo } from "react";
import type {
  ColumnDefinition,
  FunctionColumnLocator,
  ObjectSetOptions,
} from "../ObjectTableApi.js";
import {
  type AsyncCellData,
  createAsyncCellData,
} from "../utils/AsyncCellData.js";

export interface FunctionColumnData {
  [columnId: string]: {
    [objectPrimaryKey: string]: AsyncCellData;
  };
}

type FunctionColumnConfig<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> = {
  queryDefinition: QueryDefinition<unknown>;
  getParams: (
    objectSet: ObjectSet<Q>,
  ) => unknown;
  columnIds: Array<{
    columnId: string;
    getValue?: (cellData: unknown) => unknown;
    getKey: (
      object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
    ) => string;
  }>;
  dedupeIntervalMs?: number;
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
  objectSet: ObjectSet<Q> | undefined,
  objectSetOptions: ObjectSetOptions<Q> | undefined,
  objects:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined,
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
): FunctionColumnData {
  // Function column configurations grouped by unique query definition
  const functionColumnConfigs = useMemo(
    () => getFunctionColumnConfigs(columnDefinitions),
    [columnDefinitions],
  );

  const stableObjects = useStableObjects(objects);

  // TODO: replace with useDeepEqual when it's added
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableObjectSet = useMemo(() => objectSet, [JSON.stringify(objectSet)]);

  // Intentionally omitting withProperties as it causes an error when present in the function param
  const composedObjectSet = useMemo(() => {
    return composeObjectSet(stableObjectSet, objectSetOptions ?? {});
  }, [stableObjectSet, objectSetOptions]);

  const disabled = !stableObjectSet || !stableObjects?.length
    || functionColumnConfigs.length === 0;

  // Prepare queries for useOsdkFunctions
  const queries = useMemo(
    () => {
      if (disabled) {
        return [];
      }

      return functionColumnConfigs.map(
        (config): FunctionQueryParams<QueryDefinition<unknown>> => ({
          queryDefinition: config.queryDefinition,
          options: {
            params: config.getParams(composedObjectSet!),
            dedupeIntervalMs: config.dedupeIntervalMs
              ?? DEFAULT_DEDUPE_INTERVAL_MS,
          } as FunctionQueryParams<QueryDefinition<unknown>>["options"],
        }),
      );
    },
    [disabled, functionColumnConfigs, composedObjectSet],
  );

  const results = useOsdkFunctions(
    {
      queries,
      enabled: !disabled,
    },
  );

  const data = useMemo(() => {
    const columnData: FunctionColumnData = {};

    if (disabled || !stableObjects) return columnData;

    results.forEach((result, index) => {
      const config = functionColumnConfigs[index];
      if (!config) return;

      const functionsMap = result.data as Record<string, unknown> | undefined;

      config.columnIds.forEach(
        ({ columnId, getValue, getKey: columnGetKey }) => {
          if (!columnData[columnId]) {
            columnData[columnId] = {};
          }

          stableObjects.forEach(obj => {
            const key = String(obj.$primaryKey);

            if (result.isLoading) {
              columnData[columnId][key] = createAsyncCellData({
                isLoading: true,
              });
            } else if (result.error) {
              columnData[columnId][key] = createAsyncCellData({
                error: result.error,
                isLoading: false,
              });
            } else if (functionsMap) {
              const customKey = columnGetKey(obj);
              const rawData = functionsMap[customKey];
              const cellData = getValue ? getValue(rawData) : rawData;
              columnData[columnId][key] = createAsyncCellData({
                data: cellData,
                isLoading: false,
              });
            }
          });
        },
      );
    });

    return columnData;
  }, [results, functionColumnConfigs, stableObjects, disabled]);

  return data;
}

function getFunctionColumnConfigs<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
): Array<FunctionColumnConfig<Q, RDPs>> {
  if (!columnDefinitions) return [];

  // Group columns by their query definition apiName
  const configsByApiName = new Map<
    string,
    FunctionColumnConfig<Q, RDPs>
  >();

  columnDefinitions.forEach((colDef) => {
    if (colDef.locator.type === "function") {
      const locator = colDef.locator as FunctionColumnLocator<
        Q,
        RDPs,
        FunctionColumns
      >;

      const apiName = locator.queryDefinition.apiName;
      const existingConfig = configsByApiName.get(apiName);

      if (existingConfig) {
        // Add this column to the existing config
        existingConfig.columnIds.push({
          columnId: String(locator.id),
          getValue: locator.getValue,
          getKey: locator.getKey,
        });
        // When multiple columns share a query, use the shortest dedupe interval
        if (locator.dedupeIntervalMs != null) {
          existingConfig.dedupeIntervalMs = existingConfig.dedupeIntervalMs
              != null
            ? Math.min(
              existingConfig.dedupeIntervalMs,
              locator.dedupeIntervalMs,
            )
            : locator.dedupeIntervalMs;
        }
      } else {
        // Create new config
        configsByApiName.set(apiName, {
          queryDefinition: locator.queryDefinition,
          getParams: locator.getFunctionParams,
          columnIds: [{
            columnId: String(locator.id),
            getValue: locator.getValue,
            getKey: locator.getKey,
          }],
          dedupeIntervalMs: locator.dedupeIntervalMs,
        });
      }
    }
  });

  return Array.from(configsByApiName.values());
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
