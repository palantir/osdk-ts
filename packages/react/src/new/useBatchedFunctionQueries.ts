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

import type { CompileTimeMetadata, QueryDefinition } from "@osdk/api";
import type { Client } from "@osdk/client";
import React from "react";
import { useOsdkClient } from "../useOsdkClient.js";
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

export interface UseBatchedFunctionQueriesProps {
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

export type UseBatchedFunctionQueryResult = Array<
  UseOsdkFunctionResult<QueryDefinition<unknown>>
>;

/**
 * React hook for executing multiple OSDK function queries in batch.
 *
 * This hook executes multiple function queries with individual configurations,
 * with automatic batching and caching. Results are returned in the same
 * order as the input queries.
 *
 * @param options - Configuration options containing the queries to execute
 * @returns Array of results in the same order as input queries, each with the same shape as useOsdkFunction
 */
export function useBatchedFunctionQueries(
  options: UseBatchedFunctionQueriesProps,
): UseBatchedFunctionQueryResult {
  const client = useOsdkClient();
  const { queries, enabled = true } = options;

  const [results, setResults] = React.useState<
    UseBatchedFunctionQueryResult
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
      setResults(prev =>
        queries.map((_, index) => ({
          data: prev[index]?.data, // Preserving existing data
          isLoading: queries[index].options?.enabled !== false,
          error: undefined,
          lastUpdated: prev[index]?.lastUpdated || 0,
          refetch: () => {},
        }))
      );

      for await (
        const queryResult of executeQueriesGenerator(
          queries,
          client,
        )
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
              ? new Error(JSON.stringify(error))
              : undefined,
            lastUpdated: Date.now(),
            refetch: () => {
              // Trigger re-execution for this specific query
              const queryClient = client(queries[index].queryDefinition);
              if (
                "executeFunction" in queryClient
                && typeof queryClient.executeFunction === "function"
              ) {
                void queryClient.executeFunction(
                  queries[index].options?.params,
                );
              }
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
    client,
    JSON.stringify(queries.map(q => ({
      apiName: q.queryDefinition.apiName,
      params: q.options?.params,
      enabled: q.options?.enabled,
    }))),
  ]);

  return results;
}

interface QueryResult<Q extends QueryDefinition<unknown>> {
  index: number;
  result?:
    | (CompileTimeMetadata<Q>["signature"] extends (...args: never[]) => infer R
      ? Awaited<R>
      : never)
    | undefined;
  error?: unknown;
}
/**
 * Generator function that executes queries and yields results as they complete
 */
async function* executeQueriesGenerator(
  queries: Array<FunctionQueryParams<QueryDefinition<unknown>>>,
  client: Client,
): AsyncGenerator<QueryResult<QueryDefinition<unknown>>> {
  const queryPromises = queries.map((query, index) =>
    createQueryPromise<typeof query.queryDefinition>(query, index, client)
  );

  const pendingPromises = [...queryPromises];

  // Yield results as they complete using Promise.race
  while (pendingPromises.length > 0) {
    const raceResult = await Promise.race(
      pendingPromises.map((promise, idx) =>
        promise.then(result => ({ result, idx }))
      ),
    );

    yield raceResult.result;

    // Remove the completed promise from the pending list
    void pendingPromises.splice(raceResult.idx, 1);
  }
}

function createQueryPromise<Q extends QueryDefinition<unknown>>(
  query: FunctionQueryParams<Q>,
  index: number,
  client: Client,
): Promise<QueryResult<Q>> {
  // Skip disabled queries
  if (query.options?.enabled === false) {
    return Promise.resolve({ index, result: undefined, error: undefined });
  }

  const queryClient = client(query.queryDefinition);

  if (
    "executeFunction" in queryClient
    && typeof queryClient.executeFunction === "function"
  ) {
    return queryClient.executeFunction(query.options?.params)
      .then((result: unknown) => ({ index, result, error: null }))
      .catch((error: unknown) => ({ index, result: null, error }));
  }

  return Promise.resolve({
    index,
    result: undefined,
    error: new Error("Invalid query definition"),
  });
}
