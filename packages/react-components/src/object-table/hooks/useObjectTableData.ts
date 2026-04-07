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
  DerivedProperty,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { UseOsdkListResult } from "@osdk/react/experimental";
import { useObjectSet, useOsdkObjects } from "@osdk/react/experimental";
import type { SortingState } from "@tanstack/react-table";
import { useMemo } from "react";
import type { ColumnDefinition, ObjectSetOptions } from "../ObjectTableApi.js";
import type { AsyncCellData } from "../utils/AsyncCellData.js";
import { useFunctionColumnsData } from "./useFunctionColumnsData.js";

const PAGE_SIZE = 50;

type WithProperties<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
> = {
  [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]>;
};

interface UseObjectTableDataResult<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> extends Omit<UseOsdkListResult<Q, RDPs>, "isOptimistic"> {}
/**
 * This hook is a wrapper that conditionally uses either useObjectSet or useOsdkObjects
 * based on whether an objectSet prop is provided.
 * It extracts RDP locators from columnDefinitions and applies withProperties
 * to return data containing the derived properties.
 */
export function useObjectTableData<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  objectOrInterfaceType: Q,
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
  filter?: WhereClause<Q, RDPs>,
  sorting?: SortingState,
  objectSet?: ObjectSet<Q>,
  objectSetOptions?: ObjectSetOptions<Q>,
): UseObjectTableDataResult<Q, RDPs> {
  const orderBy = useMemo(() => {
    if (!sorting || sorting.length === 0) {
      return undefined;
    }

    return sorting.reduce<{ [K in PropertyKeys<Q>]?: "asc" | "desc" }>(
      (acc, sort) => {
        acc[sort.id as PropertyKeys<Q>] = sort.desc ? "desc" : "asc";
        return acc;
      },
      {},
    );
  }, [sorting]);

  // Extract derived properties definition
  const withProperties = useMemo(() => {
    if (!columnDefinitions) {
      return;
    }

    const rdpColumns = columnDefinitions.map(colDef => colDef.locator).filter(
      (colLocator) => {
        return colLocator.type === "rdp";
      },
    );

    if (!rdpColumns.length) {
      return;
    }

    return rdpColumns.reduce<WithProperties<Q, RDPs>>(
      (acc, cur) => {
        return {
          ...acc,
          [cur.id]: cur.creator,
        };
      },
      {} as WithProperties<Q, RDPs>,
    );
  }, [columnDefinitions]);

  // When objectSet is provided and it's an object type, use useObjectSet. Otherwise, use useOsdkObjects.
  const isObjectType = objectOrInterfaceType.type === "object";
  const shouldUseObjectSet = !!objectSet && isObjectType;

  // When shouldUseObjectSet is true, we know objectSet is defined
  // and objectOrInterfaceType is an ObjectTypeDefinition
  const objectSetResult = useObjectSet(
    shouldUseObjectSet ? objectSet as ObjectSet<Q, RDPs> : undefined as any,
    {
      ...(objectSetOptions as ObjectSetOptions<Q>),
      withProperties: withProperties as WithProperties<
        Q,
        RDPs
      >,
      where: filter,
      orderBy,
      pageSize: PAGE_SIZE,
      enabled: shouldUseObjectSet,
    },
  );

  const osdkObjectsResult = useOsdkObjects<
    Q,
    RDPs
  >(
    objectOrInterfaceType,
    {
      withProperties,
      pageSize: PAGE_SIZE,
      where: filter,
      orderBy,
      enabled: !shouldUseObjectSet,
    },
  );

  // Get the result from the appropriate hook
  const baseResult = shouldUseObjectSet ? objectSetResult : osdkObjectsResult;

  // Call useFunctionColumnsData to get function column data
  const functionColumnData = useFunctionColumnsData<Q, RDPs, FunctionColumns>(
    baseResult.wireObjectSet,
    baseResult.data,
    columnDefinitions,
  );

  // Merge function column data into each object
  const mergedData = useMemo(() => {
    if (!baseResult.data) return baseResult.data;

    return baseResult.data.map(obj => {
      const objKey = String(obj.$primaryKey);
      const functionData: Record<string, AsyncCellData> = {};

      // Collect all function column data for this object
      Object.entries(functionColumnData).forEach(([columnId, columnData]) => {
        if (columnData[objKey]) {
          functionData[columnId] = columnData[objKey];
        }
      });

      // Return object with function data merged in
      return {
        ...obj,
        ...functionData,
      };
    });
  }, [baseResult.data, functionColumnData]);

  // Return the result with merged data
  return {
    ...baseResult,
    data: mergedData,
  } as UseObjectTableDataResult<Q, RDPs>;
}
