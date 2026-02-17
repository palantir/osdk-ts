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
  AggregateOpts,
  AggregationsResults,
  DerivedProperty,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { ObjectTypeDefinition } from "@osdk/client";
import type { ObserveAggregationArgs } from "@osdk/client/unstable-do-not-use";
import { computeObjectSetCacheKey } from "@osdk/client/unstable-do-not-use";
import React from "react";
import {
  makeExternalStore,
  makeExternalStoreAsync,
} from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

interface UseOsdkAggregationBaseOptions<
  T extends ObjectOrInterfaceDefinition,
  A extends AggregateOpts<T>,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  /**
   * Standard OSDK Where clause to filter objects before aggregation
   */
  where?: WhereClause<T, RDPs>;

  /**
   * Define derived properties (RDPs) to be computed server-side.
   * The derived properties can be used in the where clause and aggregation groupBy/select.
   */
  withProperties?: { [K in keyof RDPs]: DerivedProperty.Creator<T, RDPs[K]> };

  /**
   * Intersect the main query with additional filtered object sets.
   * Each entry creates a separate object set with its own where clause,
   * and the final result is the intersection of all sets.
   */
  intersectWith?: Array<{
    where: WhereClause<T, RDPs>;
  }>;

  /**
   * Aggregation options including groupBy and select
   */
  aggregate: A;

  /**
   * The number of milliseconds to wait after the last observed aggregation change.
   *
   * Two uses of `useOsdkAggregation` with the same parameters will only trigger one
   * network request if the second is within `dedupeIntervalMs`.
   */
  dedupeIntervalMs?: number;
}

export interface UseOsdkAggregationOptions<
  T extends ObjectOrInterfaceDefinition,
  A extends AggregateOpts<T>,
  RDPs extends Record<string, SimplePropertyDef> = {},
> extends UseOsdkAggregationBaseOptions<T, A, RDPs> {}

export interface UseOsdkAggregationOptionsWithObjectSet<
  T extends ObjectTypeDefinition,
  A extends AggregateOpts<T>,
  RDPs extends Record<string, SimplePropertyDef> = {},
> extends UseOsdkAggregationBaseOptions<T, A, RDPs> {
  /**
   * The ObjectSet to aggregate on. Enables aggregation on pivoted, filtered, or composed ObjectSets.
   */
  objectSet: ObjectSet<T>;
}

const EMPTY_WHERE = {};

export interface UseOsdkAggregationResult<
  T extends ObjectOrInterfaceDefinition,
  A extends AggregateOpts<T>,
> {
  data: AggregationsResults<T, A> | undefined;
  isLoading: boolean;
  error: Error | undefined;
  refetch: () => void;
}

declare const process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

/**
 * React hook for performing aggregations on OSDK object sets.
 *
 * Executes server-side aggregations with groupBy and metric calculations on filtered object sets.
 * Supports runtime derived properties and where clauses.
 *
 * @param type - The object or interface type to aggregate
 * @param options - Aggregation configuration including where clause, aggregation spec, and optional derived properties
 * @returns Object containing aggregation results, loading state, error state, and refetch function
 *
 * @example
 * ```tsx
 * // Basic aggregation without ObjectSet
 * const { data, isLoading, error } = useOsdkAggregation(Employee, {
 *   where: { department: "Engineering" },
 *   aggregate: {
 *     groupBy: { department: "exact" },
 *     select: {
 *       avgSalary: { $avg: "salary" },
 *       count: { $count: {} }
 *     }
 *   }
 * });
 *
 * // With a pivoted ObjectSet
 * const pivotedSet = useMemo(() => $(Employee).pivotTo("primaryOffice"), []);
 * const { data } = useOsdkAggregation(Office, {
 *   objectSet: pivotedSet,
 *   aggregate: { $select: { $count: "unordered" } }
 * });
 * ```
 */
export function useOsdkAggregation<
  Q extends ObjectOrInterfaceDefinition,
  const A extends AggregateOpts<Q>,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options: UseOsdkAggregationOptions<Q, A, RDPs>,
): UseOsdkAggregationResult<Q, A>;
export function useOsdkAggregation<
  Q extends ObjectTypeDefinition,
  const A extends AggregateOpts<Q>,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options: UseOsdkAggregationOptionsWithObjectSet<Q, A, RDPs>,
): UseOsdkAggregationResult<Q, A>;
export function useOsdkAggregation<
  Q extends ObjectTypeDefinition,
  const A extends AggregateOpts<Q>,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options:
    | UseOsdkAggregationOptions<Q, A, RDPs>
    | UseOsdkAggregationOptionsWithObjectSet<Q, A, RDPs>,
): UseOsdkAggregationResult<Q, A> {
  const {
    where = EMPTY_WHERE,
    withProperties,
    intersectWith,
    aggregate,
    dedupeIntervalMs,
  } = options;
  const objectSet = "objectSet" in options ? options.objectSet : undefined;

  const { observableClient } = React.useContext(OsdkContext2);

  const canonWhere = observableClient.canonicalizeWhereClause<Q>(where);

  const stableCanonWhere = React.useMemo(
    () => canonWhere,
    [JSON.stringify(canonWhere)],
  );

  const objectSetRef = React.useRef(objectSet);
  objectSetRef.current = objectSet;

  const objectSetKeyString = objectSet
    ? computeObjectSetCacheKey(objectSet)
    : undefined;

  const stableWithProperties = React.useMemo(
    () => withProperties,
    [JSON.stringify(withProperties)],
  );

  const stableAggregate = React.useMemo(
    () => aggregate,
    [JSON.stringify(aggregate)],
  );

  const stableIntersectWith = React.useMemo(
    () => intersectWith,
    [JSON.stringify(intersectWith)],
  );

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (objectSetKeyString && objectSetRef.current) {
        return makeExternalStoreAsync<ObserveAggregationArgs<Q, A>>(
          (observer) =>
            observableClient.observeAggregation(
              {
                type: type,
                objectSet: objectSetRef.current!,
                where: stableCanonWhere,
                withProperties: stableWithProperties,
                intersectWith: stableIntersectWith,
                aggregate: stableAggregate,
                dedupeInterval: dedupeIntervalMs ?? 2_000,
              },
              observer,
            ),
          process.env.NODE_ENV !== "production"
            ? `aggregation ${type.apiName} ${objectSetKeyString} ${
              JSON.stringify(stableCanonWhere)
            }`
            : void 0,
        );
      }
      return makeExternalStore<ObserveAggregationArgs<Q, A>>(
        (observer) =>
          // eslint-disable-next-line @typescript-eslint/no-deprecated
          observableClient.observeAggregation(
            {
              type: type,
              where: stableCanonWhere,
              withProperties: stableWithProperties,
              intersectWith: stableIntersectWith,
              aggregate: stableAggregate,
              dedupeInterval: dedupeIntervalMs ?? 2_000,
            },
            observer,
          ),
        process.env.NODE_ENV !== "production"
          ? `aggregation ${type.apiName} ${JSON.stringify(stableCanonWhere)}`
          : void 0,
      );
    },
    [
      observableClient,
      type.apiName,
      type.type,
      objectSetKeyString,
      stableCanonWhere,
      stableWithProperties,
      stableIntersectWith,
      stableAggregate,
      dedupeIntervalMs,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  let error: Error | undefined;
  if (payload && "error" in payload && payload.error) {
    error = payload.error;
  } else if (payload?.status === "error") {
    error = new Error("Failed to execute aggregation");
  }

  const refetch = React.useCallback(async () => {
    await observableClient.invalidateObjectType(type.apiName);
  }, [observableClient, type.apiName]);

  return {
    data: payload?.result as AggregationsResults<Q, A> | undefined,
    isLoading: payload?.status === "loading" || payload?.status === "init"
      || !payload,
    error,
    refetch,
  };
}
