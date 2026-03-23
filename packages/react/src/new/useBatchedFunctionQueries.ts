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
import React from "react";
import { useOsdkClient } from "../useOsdkClient.js";
import type {
  UseOsdkFunctionOptions,
  UseOsdkFunctionResult,
} from "./useOsdkFunction.js";

export interface BatchedFunctionQuery<Q extends QueryDefinition<unknown>> {
  queryDefinition: Q;
  options?: UseOsdkFunctionOptions<Q>;
}

export interface UseBatchedFunctionQueriesOptions {
  /**
   * Array of query configurations to execute
   */
  queries: Array<BatchedFunctionQuery<any>>;

  /**
   * Whether to enable all queries. When false, no queries will execute.
   * Individual query enabled states are also respected.
   * @default true
   */
  enabled?: boolean;
}

export type BatchedFunctionQueryResults<
  T extends Array<BatchedFunctionQuery<any>>,
> = {
  [K in keyof T]: T[K] extends BatchedFunctionQuery<infer Q>
    ? UseOsdkFunctionResult<Q>
    : never;
};

/**
 * React hook for executing multiple OSDK function queries in batch.
 *
 * This hook executes multiple function queries with individual configurations,
 * with automatic batching and caching. Results are returned in the same
 * order as the input queries.
 *
 * @param options - Configuration options containing the queries to execute
 * @returns Array of results in the same order as input queries, each with the same shape as useOsdkFunction
 *
 * @example Basic usage
 * ```tsx
 * const [statsResult, reportsResult] = useBatchedFunctionQueries({
 *   queries: [
 *     {
 *       queryDefinition: calculateEmployeeStats,
 *       options: {
 *         params: { departmentId: "engineering" },
 *       }
 *     },
 *     {
 *       queryDefinition: getEmployeeReports,
 *       options: {
 *         params: { startDate, endDate },
 *         dependsOn: [Employee],
 *       }
 *     }
 *   ],
 * });
 *
 * if (statsResult.isLoading || reportsResult.isLoading) {
 *   return <div>Loading...</div>;
 * }
 * ```
 */
export function useBatchedFunctionQueries<
  T extends Array<BatchedFunctionQuery<any>>,
>(
  options: UseBatchedFunctionQueriesOptions,
): BatchedFunctionQueryResults<T> {
  const client = useOsdkClient();
  const { queries, enabled = true } = options;

  const [results, setResults] = React.useState<
    Array<UseOsdkFunctionResult<any>>
  >(() =>
    queries.map(() => ({
      data: undefined,
      isLoading: false,
      error: undefined,
      lastUpdated: 0,
      refetch: () => {},
    }))
  );

  const abortControllerRef = React.useRef<AbortController | null>(null);

  React.useEffect(() => {
    if (!enabled || queries.length === 0) {
      return;
    }

    // Cancel previous requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const executeQueries = async () => {
      // Initialize loading state for all queries
      setResults(queries.map((_, index) => ({
        data: undefined,
        isLoading: queries[index].options?.enabled !== false,
        error: undefined,
        lastUpdated: 0,
        refetch: () => {},
      })));

      // Execute queries using generator pattern
      for await (
        const queryResult of executeQueriesGenerator(queries, client)
      ) {
        const { index, result, error } = queryResult;

        if (abortController.signal.aborted) {
          break;
        }

        setResults(prev => {
          const newResults = [...prev];
          newResults[index] = {
            data: error ? undefined : result,
            isLoading: false,
            error: error instanceof Error
              ? error
              : error
              ? new Error(String(error))
              : undefined,
            lastUpdated: Date.now(),
            refetch: () => {
              // Trigger re-execution for this specific query
              void (client(queries[index].queryDefinition) as any)(
                queries[index].options?.params,
              );
            },
          };
          return newResults;
        });
      }
    };

    void executeQueries();

    return () => {
      abortController.abort();
    };
  }, [
    enabled,
    queries,
    client,
    JSON.stringify(queries.map(q => ({
      apiName: q.queryDefinition.apiName,
      params: q.options?.params,
      enabled: q.options?.enabled,
    }))),
  ]);

  return results as BatchedFunctionQueryResults<T>;
}

/**
 * Generator function that executes queries and yields results
 */
async function* executeQueriesGenerator<
  T extends Array<BatchedFunctionQuery<any>>,
>(
  queries: T,
  client: ReturnType<typeof useOsdkClient>,
): AsyncGenerator<{ index: number; result?: any; error?: unknown }> {
  // Execute all queries in parallel
  const promises = queries.map(async (query, index) => {
    // Skip disabled queries
    if (query.options?.enabled === false) {
      return { index, result: undefined, error: undefined };
    }

    try {
      const result = await (client(query.queryDefinition) as any)(
        query.options?.params,
      );
      return { index, result, error: null };
    } catch (error) {
      return { index, result: null, error };
    }
  });

  // Yield results as they complete
  for (const promise of promises) {
    const result = await promise;
    yield result;
  }
}
