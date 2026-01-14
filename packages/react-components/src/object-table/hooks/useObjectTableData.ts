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
  PropertyKeys,
  QueryDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { useObjectSet } from "@osdk/react/experimental";
import { useMemo } from "react";
import type { ColumnDefinition } from "../ObjectTableApi.js";
import { useAsyncColumnData } from "./useAsyncColumnData.js";

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
  isLoading: boolean;
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
  type DerivedPropertyKey = (typeof derivedPropertyKeys)[number];

  // Get rows with slower columns that are loaded async
  const { rows } = useAsyncColumnData<
    Q,
    DerivedPropertyKey,
    RDPs
  >({
    objectSet,
    baseRows,
    withProperties,
    primaryKeyApiName,
    derivedPropertyKeys,
  });

  return {
    data: rows,
    fetchMore: baseObjectSetResults.fetchMore,
    isLoading: isBaseObjectSetLoading,
  };
}
