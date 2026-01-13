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
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import { useObjectSet } from "@osdk/react/experimental";
import { useMemo } from "react";
import type { AsyncValue } from "../../types/AsyncValue.js";
import type { ColumnDefinition } from "../ObjectTableApi.js";

const PAGE_SIZE = 50;

interface UseObjectTableDataResults<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
> {
  data: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[];
  fetchMore: (() => Promise<void>) | undefined;
}

/**
 * This hook is a wrapper around useObjectSet with async column loading.
 * Base object set loads first (fast columns), then withProperties columns
 * are loaded asynchronously and merged with the base data.
 */
export function useObjectTableData<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
  FunctionColumns extends Record<string, QueryDefinition<{}>> = Record<
    string,
    never
  >,
>(
  objectSet: ObjectSet<Q>,
  columnDefinitions?: Array<ColumnDefinition<Q, RDPs, FunctionColumns>>,
  primaryKeyApiName?: PropertyKeys<Q>,
): UseObjectTableDataResults<Q, RDPs> {
  // Load base object set first (fastest columns)
  const {
    data: baseRows,
    isLoading: isBaseObjectSetLoading,
    ...baseObjectSetResults
  } = useObjectSet<Q, never, RDPs>(
    objectSet,
    {
      pageSize: PAGE_SIZE,
    },
  );

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

    return rdpColumns.reduce<
      { [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]> }
    >(
      (acc, cur) => {
        return {
          ...acc,
          [cur.id]: cur.creator,
        };
      },
      {} as {
        [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]>;
      },
    );
  }, [columnDefinitions]);

  const derivedPropertyKeys = useMemo(
    () => withProperties ? Object.keys(withProperties) : [],
    [withProperties],
  );

  type DerivedPropertyKeys = (typeof derivedPropertyKeys)[number];

  const filterForObjectsInBaseRows: WhereClause<Q, RDPs> | undefined = useMemo(
    () => {
      if (
        !primaryKeyApiName || isBaseObjectSetLoading || !baseRows
      ) {
        return;
      }

      const baseRowPrimaryKeys = baseRows.map(row => row.$primaryKey);

      if (baseRowPrimaryKeys.length === 0) {
        return;
      }

      return {
        [primaryKeyApiName as PropertyKeys<Q>]: {
          $in: baseRowPrimaryKeys,
        },
      } as WhereClause<Q, RDPs>;
    },
    [primaryKeyApiName, baseRows, isBaseObjectSetLoading],
  );

  // Load derived properties
  const { data: dataWithDerivedProperties, isLoading: isAsyncColumnLoading } =
    useObjectSet<Q, never, RDPs>(
      objectSet,
      {
        withProperties,
        pageSize: PAGE_SIZE,
        where: filterForObjectsInBaseRows,
        // Do not fetch when baseRows is not ready or empty
        enabled: filterForObjectsInBaseRows !== undefined,
      },
    );

  // Combine base rows with async column data
  const rows: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[] =
    useMemo(() => {
      const enrichedData = (dataWithDerivedProperties ?? []).reduce(
        (acc, cur) => {
          return {
            ...acc,
            [cur.$primaryKey]: {
              cur,
            },
          };
        },
        {},
      );
      return mergeRowsWithEnrichedData<Q, RDPs, DerivedPropertyKeys>(
        baseRows,
        isBaseObjectSetLoading,
        isAsyncColumnLoading,
        enrichedData,
        derivedPropertyKeys,
      );
    }, [
      baseRows,
      dataWithDerivedProperties,
      derivedPropertyKeys,
      isAsyncColumnLoading,
      isBaseObjectSetLoading,
    ]);

  return {
    data: rows,
    fetchMore: baseObjectSetResults.fetchMore,
  };
}

const mergeRowsWithEnrichedData = <
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
  AsyncColumnKeys extends string = string,
>(
  baseRows:
    | Array<
      Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>
    >
    | undefined,
  isBaseObjectSetLoading: boolean,
  isAsyncColumnLoading: boolean,
  // TODO: Fix types. The string in the second record is the same as asyncColumnKeys
  enrichedData: Partial<
    Record<PrimaryKeyType<Q>, Record<AsyncColumnKeys, AsyncValue<any>>>
  >,
  asyncColumnKeys: AsyncColumnKeys[],
) => {
  if (isBaseObjectSetLoading || !baseRows) {
    return [];
  }
  // The resulting data should respect the sort order of baseRows
  return baseRows.map(row => {
    const rowEnrichedData = enrichedData[row.$primaryKey];
    // TODO: Type the async column values
    const asyncColumnValues: Record<string, AsyncValue<any>> = asyncColumnKeys
      .reduce(
        (acc, colKey) => ({
          ...acc,
          [colKey]: isAsyncColumnLoading
            ? { type: "loading" }
            : rowEnrichedData?.[colKey] != null
            ? rowEnrichedData[colKey]
            : {
              type: "loaded",
              value: undefined,
            },
        }),
        {},
      );

    return {
      ...row,
      ...asyncColumnValues,
    };
  });
};
