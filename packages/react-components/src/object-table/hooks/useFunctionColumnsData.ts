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
import { useOsdkClient } from "@osdk/react";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  ColumnDefinition,
  ExtractQueryParameters,
  FunctionColumnLocator,
} from "../ObjectTableApi.js";
import type { AsyncCellData } from "../utils/types.js";

export interface FunctionColumnData {
  [columnId: string]: {
    [objectPrimaryKey: string]: AsyncCellData;
  };
}

type FunctionColumnConfig<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = {
  queryDefinition: QueryDefinition<any>;
  getParams: (
    objectSet: ObjectSet<Q>,
  ) => ExtractQueryParameters<FunctionColumns[keyof FunctionColumns]>;
  columnIds: Array<{
    columnId: string;
    getValue?: (cellData: unknown) => unknown;
    getKey: (
      object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
    ) => string;
  }>;
};

type QueryResult<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = {
  config: FunctionColumnConfig<Q, RDPs, FunctionColumns>;
  result: Record<string, unknown> | null;
  error: Error | null;
  aborted?: boolean;
};

export function useFunctionColumnsData<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  objectSet: ObjectSet<Q> | undefined,
  objects:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined,
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
): FunctionColumnData {
  const client = useOsdkClient();
  const [data, setData] = useState<FunctionColumnData>({});
  const abortControllerRef = useRef<AbortController | null>(null);

  // Function column configurations grouped by unique query definition
  const functionColumnConfigs = useMemo(
    () => getFunctionColumnConfigs(columnDefinitions),
    [columnDefinitions],
  );

  const stableObjects = useStableObjects(objects);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableObjectSet = useMemo(() => objectSet, [JSON.stringify(objectSet)]);

  useEffect(() => {
    if (
      !stableObjects || stableObjects.length === 0
      || functionColumnConfigs.length === 0 || !stableObjectSet
    ) {
      return;
    }

    // Cancel previous requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const executeQueries = async () => {
      if (!stableObjectSet) {
        return;
      }

      initializeFunctionColumnData(
        functionColumnConfigs,
        stableObjects,
        setData,
      );

      // Process query results as they complete
      for await (
        const queryResult of executeQueriesGenerator(
          functionColumnConfigs,
          stableObjectSet,
          client,
          abortController.signal,
        )
      ) {
        if (abortController.signal.aborted) {
          break;
        }

        const { config, result, error, aborted } = queryResult;
        if (!aborted) {
          processQueryResult(config, result, error, stableObjects, setData);
        }
      }
    };

    void executeQueries();

    return () => {
      abortController.abort();
      abortControllerRef.current = null;
    };
  }, [functionColumnConfigs, stableObjects, stableObjectSet, client]);

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
): Array<FunctionColumnConfig<Q, RDPs, FunctionColumns>> {
  if (!columnDefinitions) return [];

  // Group columns by their query definition apiName
  const configsByApiName = new Map<
    string,
    FunctionColumnConfig<Q, RDPs, FunctionColumns>
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

/**
 * Generator that yields query results as they complete
 */
async function* executeQueriesGenerator<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  functionColumnConfigs: Array<FunctionColumnConfig<Q, RDPs, FunctionColumns>>,
  objectSet: ObjectSet<Q>,
  client: ReturnType<typeof useOsdkClient>,
  signal?: AbortSignal,
): AsyncGenerator<QueryResult<Q, RDPs, FunctionColumns>, void, unknown> {
  // Start all queries in parallel
  const queryPromises = functionColumnConfigs.map(config =>
    createQueryPromise(config, objectSet, client, signal)
  ) as Array<Promise<QueryResult<Q, RDPs, FunctionColumns>>>;

  // Create a copy of promises array that we can mutate
  const pendingPromises = [...queryPromises];

  // Yield results as they complete using Promise.race
  while (pendingPromises.length > 0) {
    const result = await Promise.race(
      pendingPromises.map((promise, index) =>
        promise.then(result => ({ result, index }))
      ),
    );

    // Yield the completed result
    yield result.result;

    // Remove the completed promise from the pending list
    pendingPromises.splice(result.index, 1);
  }
}

/**
 * Create a promise that executes a function column query
 */
function createQueryPromise<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  config: FunctionColumnConfig<Q, RDPs, FunctionColumns>,
  objectSet: ObjectSet<Q>,
  client: ReturnType<typeof useOsdkClient>,
  signal?: AbortSignal,
): Promise<QueryResult<Q, RDPs, FunctionColumns>> {
  return new Promise((resolve) => {
    if (signal?.aborted) {
      resolve({ config, result: null, error: null, aborted: true });
      return;
    }

    const params = config.getParams(objectSet);

    client(config.queryDefinition)
      .executeFunction(params)
      .then((result: Record<string, unknown>) => {
        // Check if aborted during execution
        if (signal?.aborted) {
          resolve({ config, result: null, error: null, aborted: true });
        } else {
          resolve({ config, result, error: null });
        }
      })
      .catch((error: unknown) => {
        // Check if aborted during error handling
        if (signal?.aborted) {
          resolve({ config, result: null, error: null, aborted: true });
        } else {
          resolve({
            config,
            result: null,
            error: error instanceof Error ? error : new Error(String(error)),
          });
        }
      });
  });
}

/**
 * Initialize function column data with isLoading state for all columns and objects
 */
function initializeFunctionColumnData<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  functionColumnConfigs: Array<FunctionColumnConfig<Q, RDPs, FunctionColumns>>,
  objects: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[],
  setData: React.Dispatch<React.SetStateAction<FunctionColumnData>>,
): void {
  setData(prev => {
    const newData = { ...prev };

    functionColumnConfigs.forEach(config => {
      config.columnIds.forEach(({ columnId }) => {
        // Initialize column if it doesn't exist
        if (!newData[columnId]) {
          newData[columnId] = {};
        }

        objects.forEach(obj => {
          const key = String(obj.$primaryKey);
          // Only set isLoading state if this object's data doesn't already exist
          if (!newData[columnId][key]) {
            newData[columnId][key] = { isLoading: true };
          }
        });
      });
    });

    return newData;
  });
}

function processQueryResult<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  config: FunctionColumnConfig<Q, RDPs, FunctionColumns>,
  result: Record<string, unknown> | null,
  error: Error | null,
  objects: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[],
  setData: React.Dispatch<React.SetStateAction<FunctionColumnData>>,
): void {
  if (error) {
    // Set error for all objects in all columns that use this query
    config.columnIds.forEach(({ columnId }) => {
      objects.forEach(obj => {
        const key = String(obj.$primaryKey);
        setData(prev => ({
          ...prev,
          [columnId]: {
            ...prev[columnId],
            [key]: {
              error: error instanceof Error
                ? error
                : new Error(String(error)),
              isLoading: false,
            },
          },
        }));
      });
    });
  } else if (result) {
    // Process the FunctionsMap result
    objects.forEach(obj => {
      const key = String(obj.$primaryKey);

      // Process each column that uses this query result
      config.columnIds.forEach(
        ({ columnId, getValue, getKey: columnGetKey }) => {
          const customKey = columnGetKey(obj);
          const rawData = result[customKey];

          const cellData = getValue ? getValue(rawData) : rawData;

          setData(prev => ({
            ...prev,
            [columnId]: {
              ...prev[columnId],
              [key]: {
                data: cellData,
                isLoading: false,
              },
            },
          }));
        },
      );
    });
  }
}
