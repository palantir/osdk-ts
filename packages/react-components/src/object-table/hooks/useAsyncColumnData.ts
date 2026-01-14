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
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import { useObjectSet } from "@osdk/react/experimental";
import { useEffect, useMemo, useState } from "react";
import type { AsyncValue } from "../../types/AsyncValue.js";

interface UseAsyncColumnDataProps<
  Q extends ObjectTypeDefinition,
  DerivedPropertyKey extends string,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
> {
  objectSet: ObjectSet<Q>;
  baseRows?: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[];
  withProperties?: {
    [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]>;
  };
  primaryKeyApiName?: PropertyKeys<Q>;
  derivedPropertyKeys?: DerivedPropertyKey[];
}

interface UseAsyncColumnDataResults<
  Q extends ObjectTypeDefinition,
  RDPs extends Record<string, SimplePropertyDef> = Record<
    string,
    never
  >,
> {
  rows: Osdk.Instance<
    Q,
    "$allBaseProperties",
    PropertyKeys<Q>,
    RDPs
  >[];
}

type DerivedPropertyMap<
  Q extends ObjectTypeDefinition,
  DerivedPropertyKey extends string,
  RDPs extends Record<string, SimplePropertyDef>,
> = Record<
  DerivedPropertyKey,
  Osdk.Instance<Q, "$allBaseProperties", never, RDPs>[DerivedPropertyKey]
>;

type EnrichedData<
  Q extends ObjectTypeDefinition,
  DerivedPropertyKey extends string,
  RDPs extends Record<string, SimplePropertyDef>,
> = Record<
  PrimaryKeyType<Q>,
  DerivedPropertyMap<Q, DerivedPropertyKey, RDPs>
>;

export function useAsyncColumnData<
  Q extends ObjectTypeDefinition,
  DerivedPropertyKey extends string,
  RDPs extends Record<string, SimplePropertyDef>,
>(
  {
    objectSet,
    baseRows,
    withProperties,
    primaryKeyApiName,
    derivedPropertyKeys,
  }: UseAsyncColumnDataProps<Q, DerivedPropertyKey, RDPs>,
): UseAsyncColumnDataResults<Q, RDPs> {
  // Store enriched data keyed by primary key
  const [enrichedData, setEnrichedData] = useState<
    EnrichedData<Q, DerivedPropertyKey, RDPs>
  >({} as EnrichedData<Q, DerivedPropertyKey, RDPs>);

  // Build filter to fetch only rows present in baseRows
  const filter = useMemo(() => {
    if (!primaryKeyApiName || !baseRows?.length) {
      return undefined;
    }

    return {
      [primaryKeyApiName as PropertyKeys<Q>]: {
        $in: baseRows.map(row => row.$primaryKey),
      },
    } as WhereClause<Q, RDPs>;
  }, [primaryKeyApiName, baseRows]);

  // Fetch derived properties for current baseRows
  const {
    data: derivedData,
    isLoading: isDerivedPropertiesLoading,
    error: derivedPropertiesError,
  } = useObjectSet<Q, never, RDPs>(objectSet, {
    withProperties,
    where: filter,
    enabled: filter != null,
  });

  // Accumulate enriched data as it loads
  useEffect(() => {
    if (!isDerivedPropertiesLoading && derivedData) {
      setEnrichedData(prev => {
        const updated = mergeEnrichedData<Q, DerivedPropertyKey, RDPs>(
          prev,
          derivedData,
          derivedPropertyKeys,
        );
        // Only update if data actually changed
        return JSON.stringify(prev) === JSON.stringify(updated)
          ? prev
          : updated;
      });
    }
  }, [derivedData, derivedPropertyKeys, isDerivedPropertiesLoading]);

  // Merge baseRows with enriched data
  const rows = useMemo(
    () =>
      mergeRowsWithEnrichedData(
        baseRows,
        enrichedData,
        isDerivedPropertiesLoading,
        derivedPropertyKeys,
        derivedPropertiesError,
      ),
    [
      baseRows,
      enrichedData,
      isDerivedPropertiesLoading,
      derivedPropertyKeys,
      derivedPropertiesError,
    ],
  );

  return { rows };
}

/**
 * Merges newly loaded derived properties into the accumulated enriched data.
 * Preserves previously loaded data while adding new rows.
 */
function mergeEnrichedData<
  Q extends ObjectTypeDefinition,
  DerivedPropertyKey extends string,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  prev: EnrichedData<Q, DerivedPropertyKey, RDPs>,
  newData: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[],
  derivedPropertyKeys?: DerivedPropertyKey[],
): EnrichedData<Q, DerivedPropertyKey, RDPs> {
  const result = { ...prev };

  for (const row of newData) {
    const derivedProperties = Object.fromEntries(
      (derivedPropertyKeys ?? []).map(key => [key, row[key]]),
    ) as DerivedPropertyMap<Q, DerivedPropertyKey, RDPs>;

    result[row.$primaryKey] = {
      ...result[row.$primaryKey],
      ...derivedProperties,
    };
  }

  return result;
}

/**
 * Merges baseRows with enriched derived property data.
 * Returns rows immediately with loading/loaded/failed states for async columns.
 * Preserves loaded state for rows that were previously enriched.
 */
function mergeRowsWithEnrichedData<
  Q extends ObjectTypeDefinition,
  DerivedPropertyKey extends string,
  RDPs extends Record<string, SimplePropertyDef> = Record<string, never>,
>(
  baseRows:
    | Array<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>>
    | undefined,
  enrichedData: Record<PrimaryKeyType<Q>, Record<DerivedPropertyKey, unknown>>,
  isDerivedPropertiesLoading: boolean,
  derivedPropertyKeys?: DerivedPropertyKey[],
  derivedPropertiesError?: Error,
): Array<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>> {
  if (!baseRows) {
    return [];
  }

  return baseRows.map(row => {
    const rowEnrichedData = enrichedData[row.$primaryKey];

    const asyncColumnValues = Object.fromEntries(
      (derivedPropertyKeys ?? []).map(colKey => {
        // Check if this specific column has been loaded for this row
        const hasColumnData = rowEnrichedData != null
          && colKey in rowEnrichedData;

        const asyncValue: AsyncValue<unknown> = hasColumnData
          ? { type: "loaded", value: rowEnrichedData[colKey] }
          : isDerivedPropertiesLoading
          ? { type: "loading" }
          : derivedPropertiesError
          ? { type: "failed", error: derivedPropertiesError, value: undefined }
          : { type: "loaded", value: undefined };

        return [colKey, asyncValue];
      }),
    );

    return {
      ...row,
      ...asyncColumnValues,
    };
  });
}
