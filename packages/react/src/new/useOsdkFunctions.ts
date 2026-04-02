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
import type { Snapshot } from "./makeExternalStore.js";
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
  options?: Pick<
    UseOsdkFunctionOptions<Q>,
    "params" | "enabled" | "dedupeIntervalMs"
  >;
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
}

export type UseOsdkFunctionsResult = Array<
  UseOsdkFunctionResult<QueryDefinition<unknown>>
>;

type FunctionPayload = ObserveFunctionCallbackArgs<QueryDefinition<unknown>>;

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
  { queries, enabled = true }: UseOsdkFunctionsProps,
): UseOsdkFunctionsResult {
  const { observableClient } = React.useContext(OsdkContext2);

  const stableQueriesKey = JSON.stringify(queries.map(q => ({
    apiName: q.queryDefinition.apiName,
    params: q.options?.params,
    enabled: q.options?.enabled,
    dedupeIntervalMs: q.options?.dedupeIntervalMs,
  })));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableQueries = React.useMemo(() => queries, [stableQueriesKey]);

  // Create a composite external store that manages N subscriptions
  // We can't reuse makeExternalStore directly because it wraps a
  // single Observer, but we need N observers funneled into one useSyncExternalStore.
  const { subscribe, getSnapshot } = React.useMemo(
    () => {
      const count = stableQueries.length;

      if (!enabled || count === 0) {
        const empty: Array<Snapshot<FunctionPayload>> = [];
        return {
          subscribe: () => () => {},
          getSnapshot: () => empty,
        };
      }

      // Mutable snapshot array — replaced (never mutated in place) on each
      // observer callback so that useSyncExternalStore sees a new reference.
      let current: Array<Snapshot<FunctionPayload>> = stableQueries.map(
        () => undefined,
      );

      const updateSlot = (
        index: number,
        value: Snapshot<FunctionPayload>,
      ) => {
        const next = [...current];
        next[index] = value;
        current = next;
      };

      return {
        getSnapshot: () => current,
        subscribe: (notifyUpdate: () => void) => {
          const subscriptions: Array<{ unsubscribe: () => void }> = [];

          stableQueries.forEach((query, index) => {
            if (query.options?.enabled === false) {
              return;
            }

            const params = query.options?.params as
              | Record<string, unknown>
              | undefined;

            const sub = observableClient.observeFunction(
              query.queryDefinition,
              params,
              { dedupeInterval: query.options?.dedupeIntervalMs ?? 2_000 },
              {
                next: (payload: FunctionPayload | undefined) => {
                  updateSlot(
                    index,
                    payload as Snapshot<FunctionPayload>,
                  );
                  notifyUpdate();
                },
                error: (error: unknown) => {
                  updateSlot(index, {
                    ...(current[index] ?? {}),
                    error: error instanceof Error
                      ? error
                      : new Error(String(error)),
                  } as Snapshot<FunctionPayload>);
                  notifyUpdate();
                },
                complete: () => {},
              },
            );

            subscriptions.push(sub);
          });

          return () => {
            subscriptions.forEach(sub => sub.unsubscribe());
          };
        },
      };
    },
    [enabled, observableClient, stableQueries],
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
