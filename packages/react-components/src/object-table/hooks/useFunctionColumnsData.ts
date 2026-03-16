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
  QueryMetadata,
  SimplePropertyDef,
} from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  ColumnDefinition,
  ColumnDefinitionLocator,
} from "../ObjectTableApi.js";

export interface FunctionColumnData {
  [columnId: string]: {
    [objectPrimaryKey: string]: {
      data?: any;
      loading: boolean;
      error?: Error;
    };
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
  ) => FunctionColumns[keyof FunctionColumns] extends QueryDefinition
    ? FunctionColumns[keyof FunctionColumns]["__DefinitionMetadata"] extends
      QueryMetadata
      ? FunctionColumns[keyof FunctionColumns]["__DefinitionMetadata"][
        "parameters"
      ]
    : never
    : never;
  columnIds: Array<{
    columnId: string;
    propertyKey?: string;
    getKey: (
      object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>,
    ) => string;
  }>;
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

  // Extract function column configurations and group by unique query definition
  const functionColumnConfigs = useMemo(() => {
    if (!columnDefinitions) return [];

    // Group columns by their query definition apiName
    const configsByApiName = new Map<
      string,
      FunctionColumnConfig<Q, RDPs, FunctionColumns>
    >();

    columnDefinitions.forEach((colDef) => {
      if (colDef.locator.type === "function") {
        const locator = colDef.locator as
          & ColumnDefinitionLocator<Q, RDPs, FunctionColumns>
          & { type: "function" };

        const apiName = locator.queryDefinition.apiName;
        const existingConfig = configsByApiName.get(apiName);

        if (existingConfig) {
          // Add this column to the existing config
          existingConfig.columnIds.push({
            columnId: String(locator.id),
            propertyKey: locator.propertyKey,
            getKey: locator.getKey,
          });
        } else {
          // Create new config
          configsByApiName.set(apiName, {
            queryDefinition: locator.queryDefinition,
            getParams: locator.getParams,
            columnIds: [{
              columnId: String(locator.id),
              propertyKey: locator.propertyKey,
              getKey: locator.getKey,
            }],
          });
        }
      }
    });

    return Array.from(configsByApiName.values());
  }, [columnDefinitions]);

  useEffect(() => {
    if (
      !objects || objects.length === 0
      || functionColumnConfigs.length === 0
      || !objectSet
    ) {
      return;
    }

    // Cancel previous requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const fetchAllFunctionColumns = async () => {
      const newData: FunctionColumnData = {};

      // Initialize loading state for all columns and objects
      functionColumnConfigs.forEach(config => {
        config.columnIds.forEach(({ columnId }) => {
          newData[columnId] = {};
          objects.forEach(obj => {
            const key = String(obj.$primaryKey);
            newData[columnId][key] = { loading: true };
          });
        });
      });

      setData(newData);

      // Process query results as they complete
      for await (
        const queryResult of executeQueries(
          functionColumnConfigs,
          objectSet!,
          client,
        )
      ) {
        const { config, result, error } = queryResult;

        if (abortController.signal.aborted) {
          break;
        }

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
                    loading: false,
                  },
                },
              }));
            });
          });
        } else if (result) {
          // Process the FunctionsMap result
          // The result should be a map of object -> value or object -> custom type
          objects.forEach(obj => {
            const key = String(obj.$primaryKey);

            // Process each column that uses this query result
            config.columnIds.forEach(
              ({ columnId, propertyKey, getKey: columnGetKey }) => {
                // Use column-specific getKey function
                const customKey = columnGetKey(obj);
                const rawData = result[customKey];

                let cellData = rawData;

                // If propertyKey is specified, extract that property from custom type
                if (
                  propertyKey && cellData && typeof cellData === "object"
                ) {
                  cellData = cellData[propertyKey];
                }

                setData(prev => ({
                  ...prev,
                  [columnId]: {
                    ...prev[columnId],
                    [key]: {
                      data: cellData,
                      loading: false,
                    },
                  },
                }));
              },
            );
          });
        }
      }
    };

    fetchAllFunctionColumns();

    return () => {
      abortController.abort();
    };
  }, [objects, functionColumnConfigs, client, objectSet]);

  return data;
}

/**
 * Generator function that executes function column queries
 * @param functionColumnConfigs - Array of function column configurations
 * @param objectSet - The object set to query
 * @param client - The OSDK client instance
 * @yields Promise with query result
 */
async function* executeQueries<
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
) {
  for (const config of functionColumnConfigs) {
    const queryPromise = (async () => {
      try {
        const params = config.getParams(objectSet);

        const result = await client(config.queryDefinition).executeFunction(
          params,
        );

        return { config, result, error: null };
      } catch (error) {
        return { config, result: null, error };
      }
    })();

    yield queryPromise;
  }
}
