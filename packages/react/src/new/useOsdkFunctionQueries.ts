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
import type { ObserveFunctionCallbackArgs } from "@osdk/client/unstable-do-not-use";
import React from "react";
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
  options?: Pick<UseOsdkFunctionOptions<Q>, "params" | "enabled">;
}

export interface useOsdkFunctionQueriesProps {
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
}

export type UseOsdkFunctionQueriesResult = Array<
  Omit<UseOsdkFunctionResult<QueryDefinition<unknown>>, "refetch">
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
export function useOsdkFunctionQueries(
  { queries, enabled = true }: useOsdkFunctionQueriesProps,
): UseOsdkFunctionQueriesResult {
  const { observableClient } = React.useContext(OsdkContext2);

  const [results, setResults] = React.useState<
    UseOsdkFunctionQueriesResult
  >(() =>
    queries.map(() => ({
      data: undefined,
      isLoading: false,
      error: undefined,
      lastUpdated: 0,
    }))
  );

  const stableQueriesKey = JSON.stringify(queries.map(q => ({
    apiName: q.queryDefinition.apiName,
    params: q.options?.params,
    enabled: q.options?.enabled,
  })));

  React.useEffect(() => {
    if (!enabled || queries.length === 0) {
      return;
    }

    const subscriptions: Array<{ unsubscribe: () => void }> = [];

    // Initialize loading state, preserving existing data
    setResults(prev =>
      queries.map((query, index) => ({
        data: prev[index]?.data,
        isLoading: query.options?.enabled !== false,
        error: undefined,
        lastUpdated: prev[index]?.lastUpdated ?? 0,
        refetch: () => {
          void observableClient.invalidateFunction(
            query.queryDefinition,
            query.options?.params as Record<string, unknown> | undefined,
          );
        },
      }))
    );

    queries.forEach((query, index) => {
      if (query.options?.enabled === false) {
        return;
      }

      const params = query.options?.params as
        | Record<string, unknown>
        | undefined;

      const sub = observableClient.observeFunction(
        query.queryDefinition,
        params,
        { dedupeInterval: 2_000 },
        {
          next: (
            payload:
              | ObserveFunctionCallbackArgs<QueryDefinition<unknown>>
              | undefined,
          ) => {
            setResults(prev => {
              const newResults = [...prev];
              const error = payload?.error
                ?? (payload?.status === "error"
                  ? new Error("Failed to execute function")
                  : undefined);

              newResults[index] = {
                data: payload?.result as UseOsdkFunctionResult<
                  QueryDefinition<unknown>
                >["data"],
                isLoading: payload?.status === "loading",
                error,
                lastUpdated: payload?.lastUpdated ?? 0,
                refetch: () => {
                  void observableClient.invalidateFunction(
                    query.queryDefinition,
                    params,
                  );
                },
              };
              return newResults;
            });
          },
          error: (err: unknown) => {
            setResults(prev => {
              const newResults = [...prev];
              newResults[index] = {
                ...prev[index],
                data: undefined,
                isLoading: false,
                error: err instanceof Error ? err : new Error(String(err)),
                lastUpdated: Date.now(),
                refetch: prev[index].refetch,
              };
              return newResults;
            });
          },
          complete: () => {},
        },
      );

      subscriptions.push(sub);
    });

    return () => {
      subscriptions.forEach(sub => sub.unsubscribe());
    };
  }, [
    enabled,
    observableClient,
    stableQueriesKey,
  ]);

  return results;
}
