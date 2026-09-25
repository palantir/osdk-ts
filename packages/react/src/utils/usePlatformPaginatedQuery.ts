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

import type { Observer } from "@osdk/client/observable";
import React from "react";

import {
  devToolsMetadata,
  makeExternalStore,
} from "../new/makeExternalStore.js";
import type { QueryResult } from "./usePlatformQuery.js";

interface Page<T> {
  data: T[];
  nextPageToken?: string;
}

interface PaginatedQueryPayload<T> {
  data: T[] | undefined;
  hasMore: boolean;
  isLoading: boolean;
  error?: Error;
}

interface PaginatedQueryResult<T> extends QueryResult<T[]> {
  hasMore: boolean;
  fetchMore: (() => Promise<void>) | undefined;
}

export function usePlatformPaginatedQuery<T>({
  query,
  queryName,
  enabled = true,
  autoFetchMore,
}: {
  query: (pageToken: string | undefined) => Promise<Page<T>>;
  queryName: string;
  enabled?: boolean;
  autoFetchMore?: boolean | number;
}): PaginatedQueryResult<T> {
  const pagination = React.useMemo(() => {
    let observer: Observer<PaginatedQueryPayload<T> | undefined> | undefined;
    let data: T[] | undefined;
    let nextPageToken: string | undefined;
    const seenTokens = new Set<string>();
    let generation = 0;
    let pending: Promise<void> | undefined;
    const minimum =
      autoFetchMore === true
        ? Infinity
        : typeof autoFetchMore === "number"
          ? autoFetchMore
          : 0;

    const publish = (isLoading: boolean, error?: Error) => {
      observer?.next({
        data,
        hasMore: nextPageToken !== undefined,
        isLoading,
        error,
      });
    };

    const fetchMore = (): Promise<void> => {
      if (pending) return pending;
      if (!observer || (data !== undefined && nextPageToken === undefined)) {
        return Promise.resolve();
      }
      const requestGeneration = generation;
      const isCurrent = () =>
        observer !== undefined && generation === requestGeneration;

      // Defer execution so even a synchronous query failure clears the assigned promise.
      pending = Promise.resolve().then(async () => {
        try {
          do {
            if (!isCurrent()) return;
            const page = await query(nextPageToken);
            if (!isCurrent()) return;
            if (page.nextPageToken !== undefined) {
              if (seenTokens.has(page.nextPageToken)) {
                throw new Error(
                  "Received a repeated page token while fetching a platform API list",
                );
              }
              seenTokens.add(page.nextPageToken);
            }
            data = [...(data ?? []), ...page.data];
            nextPageToken = page.nextPageToken;
            publish(nextPageToken !== undefined && data.length < minimum);
          } while (nextPageToken !== undefined && data.length < minimum);
        } catch (error) {
          if (isCurrent()) {
            publish(
              false,
              error instanceof Error ? error : new Error(String(error)),
            );
          }
        } finally {
          if (isCurrent()) pending = undefined;
        }
      });
      publish(true);
      return pending;
    };

    const refetch = () => {
      generation++;
      pending = undefined;
      data = undefined;
      nextPageToken = undefined;
      seenTokens.clear();
      void fetchMore();
    };

    const store = makeExternalStore<PaginatedQueryPayload<T>>(
      (nextObserver) => {
        if (enabled) {
          observer = nextObserver;
          refetch();
        }
        return {
          unsubscribe: () => {
            generation++;
            observer = undefined;
            pending = undefined;
          },
        };
      },
      devToolsMetadata({
        hookType: "usePlatformPaginatedQuery",
        objectType: queryName,
      }),
    );
    return { ...store, fetchMore, refetch };
  }, [query, queryName, enabled, autoFetchMore]);

  const payload = React.useSyncExternalStore(
    pagination.subscribe,
    pagination.getSnapShot,
  );
  return {
    data: payload?.data,
    isLoading: enabled && (payload?.isLoading ?? true),
    error: payload?.error,
    hasMore: payload?.hasMore ?? false,
    fetchMore: payload?.hasMore ? pagination.fetchMore : undefined,
    refetch: pagination.refetch,
  };
}
