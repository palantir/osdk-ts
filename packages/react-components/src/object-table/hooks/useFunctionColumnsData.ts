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
import { useBatchedFunctionQueries } from "@osdk/react/experimental";
import type {
  FunctionQueryParams,
  UseOsdkFunctionResult,
} from "@osdk/react/experimental";
import { useEffect, useMemo, useState } from "react";
import type {
  ColumnDefinition,
  ExtractQueryParameters,
  FunctionColumnLocator,
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
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> = {
  queryDefinition: QueryDefinition<any>;
  getParams: (
    objectSet: ObjectSet<Q, RDPs>,
  ) => ExtractQueryParameters<FunctionColumns[keyof FunctionColumns]>;
  columnIds: Array<{
    columnId: string;
    getValue?: (cellData: unknown) => unknown;
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
  objectSet: ObjectSet<Q, RDPs> | undefined,
  objects:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined,
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
): FunctionColumnData {
  const [data, setData] = useState<FunctionColumnData>({});
  // Function column configurations grouped by unique query definition
  const functionColumnConfigs = useMemo(
    () => getFunctionColumnConfigs(columnDefinitions),
    [columnDefinitions],
  );

  const stableObjects = useStableObjects(objects);

  // TODO: replace with useDeepEqual when it's added
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableObjectSet = useMemo(() => objectSet, [JSON.stringify(objectSet)]);

  const disabled = !stableObjectSet || !stableObjects?.length
    || functionColumnConfigs.length === 0;

  useEffect(() => {
    if (disabled) {
      return;
    }

    initializeFunctionColumnData(
      functionColumnConfigs,
      stableObjects,
      setData,
    );
  }, [disabled, functionColumnConfigs, stableObjectSet, stableObjects]);

  // Prepare queries for useBatchedFunctionQueries
  const queries: Array<FunctionQueryParams<QueryDefinition<unknown>>> = useMemo(
    () => {
      if (disabled) {
        return [];
      }

      return functionColumnConfigs.map(config => ({
        queryDefinition: config.queryDefinition,
        options: {
          params: config.getParams(stableObjectSet),
        },
      }));
    },
    [disabled, functionColumnConfigs, stableObjectSet],
  );

  const results = useBatchedFunctionQueries(
    {
      queries,
      enabled: !disabled,
    },
  );

  // Process results incrementally as they change
  useEffect(() => {
    if (disabled) {
      return;
    }

    results.forEach((result, index) => {
      const config = functionColumnConfigs[index];

      if (!config) return;

      setData(prev => {
        const newData = { ...prev };

        processQueryResult(
          newData,
          result,
          config,
          stableObjects,
        );

        return newData;
      });
    });
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
            newData[columnId][key] = createAsyncCellData({
              isLoading: true,
            });
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
  columnData: FunctionColumnData,
  result: UseOsdkFunctionResult<QueryDefinition<unknown>>,
  config: FunctionColumnConfig<Q, RDPs, FunctionColumns>,
  objects: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[],
): void {
  if (result.isLoading) {
    // Set loading state for all objects in all columns that use this query
    config.columnIds.forEach(({ columnId }) => {
      if (!columnData[columnId]) {
        columnData[columnId] = {};
      }
      objects.forEach(obj => {
        const key = String(obj.$primaryKey);
        // Preserve existing data while updating loading state
        const existingData = columnData[columnId][key];
        columnData[columnId][key] = createAsyncCellData({
          data: existingData?.data,
          isLoading: true,
        });
      });
    });
  } else if (result.error) {
    // Set error state for all objects in all columns that use this query
    config.columnIds.forEach(({ columnId }) => {
      if (!columnData[columnId]) {
        columnData[columnId] = {};
      }
      objects.forEach(obj => {
        const key = String(obj.$primaryKey);
        columnData[columnId][key] = createAsyncCellData({
          error: result.error,
          isLoading: false,
        });
      });
    });
  } else if (result.data) {
    // Process the FunctionsMap result
    const functionsMap = result.data as Record<string, unknown>;
    objects.forEach(obj => {
      const key = String(obj.$primaryKey);

      // Process each column that uses this query result
      config.columnIds.forEach(
        ({ columnId, getValue, getKey: columnGetKey }) => {
          if (!columnData[columnId]) {
            columnData[columnId] = {};
          }
          const customKey = columnGetKey(obj);
          const rawData = functionsMap[customKey];
          const cellData = getValue ? getValue(rawData) : rawData;

          columnData[columnId][key] = createAsyncCellData({
            data: cellData,
            isLoading: false,
          });
        },
      );
    });
  }
}
