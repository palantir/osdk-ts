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

import type { QueryDefinition } from "@osdk/api";
import { getWireObjectSet } from "@osdk/client";
import React from "react";
import {
  createCompositeExternalStore,
  EMPTY_STORE,
} from "./createCompositeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";
import type {
  UseOsdkFunctionOptions,
  UseOsdkFunctionResult,
} from "./useOsdkFunction.js";

export interface FunctionQueryParams<Q extends QueryDefinition<unknown>> {
  queryDefinition: Q;
  /**
   * Only allow params and enabled options at the query level,
   * other options are not yet supported in this batch context
   */
  options?: UseOsdkFunctionOptions<Q>;
}

export interface UseOsdkFunctionsProps {
  /**
   * Array of query configurations to execute
   */
  queries: Array<FunctionQueryParams<QueryDefinition<unknown>>>;

  /**
   * Whether to enable all queries. When false, no queries will execute.
   * Individual query enabled states are also respected.
   * @default true
   */
  enabled?: boolean;

  /**
   * Maximum number of queries to execute concurrently.
   * When set, queries are subscribed in batches — the next query starts
   * only after a running one completes (status "loaded" or "error").
   * Useful for large payloads that may exceed server time limits.
   *
   * @default undefined (all queries run in parallel)
   */
  maxConcurrent?: number;
}

export type UseOsdkFunctionsResult = Array<
  UseOsdkFunctionResult<QueryDefinition<unknown>>
>;

/**
 * React hook for executing multiple OSDK function queries in parallel.
 *
 * This hook executes multiple function queries with individual configurations,
 * with automatic caching and deduplication via the ObservableClient.
 * Results are returned in the same order as the input queries.
 *
 * Queries with identical function+params share cached results through the
 * Store layer, avoiding duplicate network requests across components.
 *
 * @param options - Configuration options containing the queries to execute
 * @returns Array of results in the same order as input queries, each with the same shape as useOsdkFunction
 */
export function useOsdkFunctions(
  { queries, enabled = true, maxConcurrent }: UseOsdkFunctionsProps,
): UseOsdkFunctionsResult {
  const { observableClient } = React.useContext(OsdkContext2);

  const stableQueriesKey = useStableQueries(queries);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableQueries = React.useMemo(() => queries, [stableQueriesKey]);

  const { subscribe, getSnapshot } = React.useMemo(
    () =>
      !enabled || stableQueries.length === 0
        ? EMPTY_STORE
        : createCompositeExternalStore(
          stableQueries,
          observableClient,
          maxConcurrent,
        ),
    [enabled, maxConcurrent, observableClient, stableQueries],
  );

  const payloads = React.useSyncExternalStore(subscribe, getSnapshot);

  const refetches = React.useMemo(
    () =>
      stableQueries.map((query) => async () => {
        await observableClient.invalidateFunction(
          query.queryDefinition,
          query.options?.params as Record<string, unknown> | undefined,
        );
      }),
    [stableQueries, observableClient],
  );

  return React.useMemo(
    () =>
      stableQueries.map((_, index): UseOsdkFunctionResult<
        QueryDefinition<unknown>
      > => {
        const payload = payloads[index];
        const error = payload?.error
          ?? (payload?.status === "error"
            ? new Error("Failed to execute function")
            : undefined);

        return {
          data: payload?.result as UseOsdkFunctionResult<
            QueryDefinition<unknown>
          >["data"],
          isLoading: payload?.status === "loading",
          error,
          lastUpdated: payload?.lastUpdated ?? 0,
          refetch: refetches[index],
        };
      }),
    [stableQueries, payloads, refetches],
  );
}

/**
 * Normalizes params by converting ObjectSets to their wire representation.
 * This ensures proper comparison of queries containing ObjectSet params.
 */
function normalizeParams(params: any): any {
  if (!params) {
    return params;
  }
  // Check if params is an ObjectSet (has $objectSetInternals)
  if (params.$objectSetInternals) {
    return getWireObjectSet(params);
  }
  // Recursively normalize object properties
  if (typeof params === "object" && !Array.isArray(params)) {
    return Object.fromEntries(
      Object.entries(params).map(([key, value]) => [
        key,
        normalizeParams(value),
      ]),
    );
  }
  return params;
}

/**
 * Memoizes queries with proper ObjectSet serialization.
 * Uses wire representation for ObjectSet params to capture full structure.
 */
function useStableQueries(queries: any) {
  const wireKey = React.useMemo(() => {
    return JSON.stringify(queries.map(q => ({
      apiName: q.queryDefinition.apiName,
      dedupeIntervalMs: q.options?.dedupeIntervalMs,
      params: normalizeParams(q.options?.params),
    })));
  }, [queries]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useMemo(() => queries, [wireKey]);
}
