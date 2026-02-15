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
  LinkedType,
  LinkNames,
  ObjectOrInterfaceDefinition,
} from "@osdk/api";
import type { Osdk, PropertyKeys, WhereClause } from "@osdk/client";
import type { ObserveLinks } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseLinksOptions<
  T extends ObjectOrInterfaceDefinition,
> {
  /**
   * Standard OSDK Where clause for filtering linked objects
   */
  where?: WhereClause<T>;

  /**
   * The preferred page size for the links list.
   */
  pageSize?: number;

  /** Sorting options for the linked objects */
  orderBy?: {
    [K in PropertyKeys<T>]?: "asc" | "desc";
  };

  /**
   * The mode to use for fetching data.
   * - undefined: Fetch data if not already in cache
   * - "force": Always fetch fresh data
   * - "offline": Only use cached data, don't make network requests
   */
  mode?: "force" | "offline";

  /**
   * The number of milliseconds to wait after the last observed link change.
   *
   * Two uses of `useLinks` with the same parameters will only trigger one
   * network request if the second is within `dedupeIntervalMs`.
   */
  dedupeIntervalMs?: number;

  /**
   * Enable or disable the query.
   *
   * When `false`, the query will not automatically execute. It will still
   * return any cached data, but will not fetch from the server.
   *
   * This is useful for:
   * - Lazy/on-demand queries that should wait for user interaction
   * - Dependent queries that need data from another query first
   * - Conditional queries based on component state
   *
   * @default true
   * @example
   * // Dependent query - wait for employee data
   * const { object: employee } = useOsdkObject(Employee, employeeId);
   * const { links: reports } = useLinks(employee, "reports", {
   *   enabled: !!employee
   * });
   */
  enabled?: boolean;
}

export interface UseLinksResult<
  Q extends ObjectOrInterfaceDefinition,
> {
  links: Osdk.Instance<Q>[] | undefined;
  isLoading: boolean;
  error: Error | undefined;

  /**
   * Refers to whether the links are optimistic or not.
   */
  isOptimistic: boolean;

  /**
   * Fetch more linked objects if pagination is supported
   */
  fetchMore: (() => Promise<unknown>) | undefined;

  /**
   * Indicates if there are more linked objects available to fetch
   */
  hasMore: boolean;
}

const emptyArray = Object.freeze([]);

/**
 * Hook to observe links from an object or array of objects.
 *
 * @param objects The source object(s) to observe links from
 * @param linkName The name of the link to observe
 * @param options Optional configuration for the link query
 * @returns UseLinksResult with links data and metadata
 */
export function useLinks<
  T extends ObjectOrInterfaceDefinition,
  L extends LinkNames<T>,
>(
  objects: Osdk.Instance<T> | Array<Osdk.Instance<T>> | undefined,
  linkName: L,
  options: UseLinksOptions<LinkedType<T, L>> = {},
): UseLinksResult<LinkedType<T, L>> {
  const { observableClient } = React.useContext(OsdkContext2);

  const { enabled = true, ...otherOptions } = options;

  const stableWhere = React.useMemo(
    () => otherOptions.where,
    [JSON.stringify(otherOptions.where)],
  );

  const stableOrderBy = React.useMemo(
    () => otherOptions.orderBy,
    [JSON.stringify(otherOptions.orderBy)],
  );

  const objectsKey = React.useMemo(() => {
    if (objects === undefined) return "";
    const arr = Array.isArray(objects) ? objects : [objects];
    return arr.map(obj => `${obj.$apiName}:${obj.$primaryKey}`).join(",");
  }, [objects]);

  // Convert single object to array for consistent handling
  const objectsArray: ReadonlyArray<Osdk.Instance<T>> = React.useMemo(() => {
    return objects === undefined
      ? emptyArray
      : Array.isArray(objects)
      ? objects
      : [objects];
  }, [objectsKey, objects]);

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveLinks.CallbackArgs<T>>(
          () => ({ unsubscribe: () => {} }),
          `links ${linkName} for ${objectsKey} [DISABLED]`,
        );
      }
      return makeExternalStore<ObserveLinks.CallbackArgs<T>>(
        (observer) =>
          observableClient.observeLinks(
            objectsArray,
            linkName,
            {
              linkName,
              where: stableWhere,
              pageSize: otherOptions.pageSize,
              orderBy: stableOrderBy,
              mode: otherOptions.mode,
              dedupeInterval: otherOptions.dedupeIntervalMs ?? 2_000,
            },
            observer,
          ),
        `links ${linkName} for ${objectsKey}`,
      );
    },
    [
      enabled,
      observableClient,
      objectsArray,
      objectsKey,
      linkName,
      stableWhere,
      otherOptions.pageSize,
      stableOrderBy,
      otherOptions.mode,
      otherOptions.dedupeIntervalMs,
    ],
  );

  const payload = React.useSyncExternalStore(
    subscribe,
    getSnapShot,
  );

  return {
    links: payload?.resolvedList,
    isLoading: enabled
      ? (payload?.status === "loading" || payload?.status === "init"
        || !payload)
      : false,
    isOptimistic: payload?.isOptimistic ?? false,
    error: payload?.error,
    fetchMore: payload?.hasMore ? payload?.fetchMore : undefined,
    hasMore: payload?.hasMore ?? false,
  };
}
