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

const PAGE_SIZE = 50;

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
): UseOsdkListResult<Q, RDPs> {
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

    return rdpColumns.reduce<
      { [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]> }
    >(
      (acc, cur) => {
        return {
          ...acc,
          [cur.id]: cur.creator,
        };
      },
      {} as { [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]> },
    );
  }, [columnDefinitions]);

  // When objectSet is provided and it's an object type, use useObjectSet. Otherwise, use useOsdkObjects.
  const isObjectType = objectOrInterfaceType.type === "object";
  const shouldUseObjectSet = !!objectSet && isObjectType;

  // "as any" needed due to generic constraint
  // useObjectSet requires an ObjectTypeDefinition, but Q can be either ObjectTypeDefinition or InterfaceTypeDefinition
  const objectSetResult = useObjectSet(
    objectSet as any,
    {
      ...(objectSetOptions as any),
      withProperties: withProperties as any,
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

  // Return the appropriate result based on which hook is enabled
  if (shouldUseObjectSet) {
    // eslint-disable-next-line no-console
    console.debug(
      "Using useObjectSet for data fetching in ObjectTable because objectSet is provided and objectType is an object.",
    );
    // Convert UseObjectSetResult to UseOsdkListResult format
    return {
      ...objectSetResult,
      isOptimistic: false, // ObjectSet doesn't support optimistic updates
    } as UseOsdkListResult<Q, RDPs>;
  }

  // eslint-disable-next-line no-console
  console.debug(
    "Using useOsdkObjects for data fetching in ObjectTable because objectSet is not provided or objectType is an interface.",
  );
  return osdkObjectsResult;
}
