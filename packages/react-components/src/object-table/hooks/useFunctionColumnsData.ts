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
import { useObjectSet } from "@osdk/react/experimental";
import {
  type FunctionQueryParams,
  useOsdkFunctionQueries,
} from "@osdk/react/unstable-do-not-use";

import { useMemo } from "react";
import type {
  ColumnDefinition,
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
> = {
  queryDefinition: QueryDefinition<unknown>;
  getParams: (
    objectSet: ObjectSet<Q, RDPs>,
  ) => unknown;
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
  // Function column configurations grouped by unique query definition
  const functionColumnConfigs = useMemo(
    () => getFunctionColumnConfigs(columnDefinitions),
    [columnDefinitions],
  );

  const stableObjects = useStableObjects(objects);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableObjectSet = useMemo(() => objectSet, [JSON.stringify(objectSet)]);

  const primaryKeyApiName = objectSet?.$objectSetInternals.def.type === "object"
    ? objectSet.$objectSetInternals.def.primaryKeyApiName
    : undefined;

  const primaryKeyWhereClause = useMemo(() => {
    if (!primaryKeyApiName || !stableObjects?.length) return undefined;
    return {
      [primaryKeyApiName]: {
        $in: [stableObjects.map(obj => obj.$primaryKey)[0]],
      },
    } as WhereClause<Q, RDPs>;
  }, [primaryKeyApiName, stableObjects]);

  const hasObjectSet = !!stableObjectSet;
  const shouldNarrow = hasObjectSet && primaryKeyWhereClause != null;

  // TODO: Doesn't work when RDP is present
  const {
    objectSet: narrowedObjectSet,
    isLoading: isObjectSetLoading,
  } = useObjectSet<Q, RDPs, RDPs>(
    objectSet!, // safe to assert due to shouldNarrow condition
    {
      // where: {},
      enabled: shouldNarrow,
    },
  );

  console.log("zzz", narrowedObjectSet, isObjectSetLoading);

  const effectiveObjectSet = shouldNarrow ? narrowedObjectSet : stableObjectSet;

  const disabled = !effectiveObjectSet || !stableObjects?.length
    || functionColumnConfigs.length === 0
    || (shouldNarrow && isObjectSetLoading);

  // Prepare queries for useOsdkFunctionQueries
  const queries = useMemo(
    () => {
      if (disabled) {
        console.log("zzz disabled ", effectiveObjectSet);
        return [];
      }
      console.log("zzz enabled ", effectiveObjectSet);

      return functionColumnConfigs.map(
        (config): FunctionQueryParams<QueryDefinition<unknown>> => ({
          queryDefinition: config.queryDefinition,
          options: {
            params: config.getParams(effectiveObjectSet),
          } as FunctionQueryParams<QueryDefinition<unknown>>["options"],
        }),
      );
    },
    [disabled, functionColumnConfigs, effectiveObjectSet],
  );

  const results = useOsdkFunctionQueries(
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
