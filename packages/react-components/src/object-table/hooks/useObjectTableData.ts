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
import {
  useObjectSet,
  type UseOsdkListResult,
  useOsdkObjects,
} from "@osdk/react";
import type { SortingState } from "@tanstack/react-table";
import { useMemo } from "react";

import type { ColumnDefinition, ObjectSetOptions } from "../ObjectTableApi.js";
import type { AsyncCellData } from "../utils/AsyncCellData.js";
import {
  DEFAULT_OBJECT_TABLE_DEDUPE_INTERVAL_MS,
  DEFAULT_PAGE_SIZE,
} from "../utils/constants.js";
import { useFunctionColumnsData } from "./useFunctionColumnsData.js";

type WithProperties<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
> = {
  [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]>;
};

export interface UseObjectTableDataProps<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
> {
  /** The object or interface type to load rows for. */
  objectOrInterfaceType: Q;
  /**
   * Column definitions. Used to extract derived-property (`rdp`) and
   * function-column locators so the correct `withProperties` / function data
   * is fetched. Optional — omit to load the type's base properties only.
   */
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>;
  /** Server-side `where` clause applied to the query. */
  filter?: WhereClause<Q, RDPs>;
  /** TanStack sorting state, converted to an OSDK `orderBy` internally. */
  sorting?: SortingState;
  /**
   * A pre-built object set to page through instead of fetching by type. When
   * provided, rows come from this set (filter / ordering still applied).
   */
  objectSet?: ObjectSet<Q>;
  /** Extra options forwarded to `useObjectSet` when `objectSet` is provided. */
  objectSetOptions?: ObjectSetOptions<Q>;
  /**
   * Minimum interval between duplicate requests, in milliseconds.
   * @default 60000
   */
  dedupeIntervalMs?: number;
  /**
   * Number of rows to request per page.
   * @default 50
   */
  pageSize?: number;
  /** Whether to subscribe to live updates for the loaded objects. */
  streamUpdates?: boolean;
}

export interface UseObjectTableDataResult<
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
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>({
  objectOrInterfaceType,
  columnDefinitions,
  filter,
  sorting,
  objectSet,
  objectSetOptions,
  dedupeIntervalMs = DEFAULT_OBJECT_TABLE_DEDUPE_INTERVAL_MS,
  pageSize = DEFAULT_PAGE_SIZE,
  streamUpdates,
}: UseObjectTableDataProps<Q, RDPs, FunctionColumns>): UseObjectTableDataResult<
  Q,
  RDPs
> {
  const orderBy = useMemo(() => {
    if (!sorting || sorting.length === 0) {
      return undefined;
    }

    return sorting.reduce<{ [K in PropertyKeys<Q>]?: "asc" | "desc" }>(
      (acc, sort) => {
        acc[sort.id as PropertyKeys<Q>] = sort.desc ? "desc" : "asc";
        return acc;
      },
      {}
    );
  }, [sorting]);

  // Extract derived properties definition
  const withProperties = useMemo(() => {
    if (!columnDefinitions) {
      return;
    }

    const rdpColumns = columnDefinitions
      .map((colDef) => colDef.locator)
      .filter((colLocator) => {
        return colLocator.type === "rdp";
      });

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
      {} as WithProperties<Q, RDPs>
    );
  }, [columnDefinitions]);

  // Use the caller's objectSet whenever provided (object or interface types), else fetch
  // by type. For an interface objectSet, rows carry interface-declared props (+ withProperties)
  // only, not the full underlying object — see the objectSet prop docs.
  const shouldUseObjectSet = !!objectSet;

  const objectSetResult = useObjectSet(
    shouldUseObjectSet ? (objectSet as ObjectSet<Q, RDPs>) : (undefined as any),
    {
      ...(objectSetOptions as ObjectSetOptions<Q>),
      withProperties: withProperties as WithProperties<Q, RDPs>,
      where: filter,
      orderBy,
      pageSize,
      enabled: shouldUseObjectSet,
      dedupeIntervalMs,
      streamUpdates,
    }
  );

  const osdkObjectsResult = useOsdkObjects<Q, RDPs>(objectOrInterfaceType, {
    withProperties,
    pageSize,
    where: filter,
    orderBy,
    enabled: !shouldUseObjectSet,
    dedupeIntervalMs,
    streamUpdates,
  });

  // Get the result from the appropriate hook
  const baseResult = shouldUseObjectSet ? objectSetResult : osdkObjectsResult;

  // Call useFunctionColumnsData to get function column data
  const functionColumnData = useFunctionColumnsData<Q, RDPs, FunctionColumns>({
    objectOrInterfaceType,
    objects: baseResult.data,
    columnDefinitions,
    pageSize,
  });

  // Merge function column data into each object
  const mergedData = useMemo(() => {
    if (!baseResult.data) return baseResult.data;

    return baseResult.data.map((obj) => {
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
