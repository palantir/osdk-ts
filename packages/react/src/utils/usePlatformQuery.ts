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

import type { Observer } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "../new/makeExternalStore.js";

export interface UseQueryOptions<T> {
  /**
   * Enable or disable the query.
   *
   * When `false`, the query will not automatically execute.
   *
   * This is useful for:
   * - Lazy/on-demand queries that should wait for user interaction
   * - Dependent queries that need data from another query first
   * - Conditional queries based on component state
   *
   * @default true
   * });
   */
  enabled?: boolean;
  queryName: string;
  query: () => Promise<T>;
}

export interface QueryResult<T> {
  data: T | undefined;
  isLoading: boolean;
  error: Error | undefined;
  refetch: () => void;
}

interface QueryPayload<T> {
  data: T | undefined;
  status: "loading" | "success" | "error";
}

export function usePlatformQuery<T>(
  { query, queryName, enabled = true }: UseQueryOptions<T>,
): QueryResult<T> {
  const observerRef = React.useRef<Observer<QueryPayload<T> | undefined>>();

  const handleQuery = React.useCallback(() => {
    const observer = observerRef.current;
    if (observer == null) return;

    observer.next({
      status: "loading",
      data: undefined,
    });

    query()
      .then((data) => {
        observer.next({
          status: "success",
          data,
        });
      })
      .catch((err: unknown) => {
        observer.error(err);
      });
  }, [query]);

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<QueryPayload<T>>(
          () => ({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `${queryName} Query [DISABLED]`
            : undefined,
        );
      }

      return makeExternalStore<QueryPayload<T>>(
        (observer: Observer<QueryPayload<T> | undefined>) => {
          observerRef.current = observer;
          handleQuery();
          return {
            unsubscribe: () => {
              observerRef.current = undefined;
            },
          };
        },
        queryName,
      );
    },
    [enabled, queryName, handleQuery],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  let error: Error | undefined;
  if (payload && "error" in payload && payload.error != null) {
    error = payload.error;
  } else if (payload?.status === "error") {
    error = new Error(`Failed to query platform API: ${queryName}`);
  }

  return {
    data: payload?.data,
    isLoading: enabled ? (payload?.status === "loading" || !payload) : false,
    error,
    refetch: handleQuery,
  };
}
