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

import type { WhereClause } from "@osdk/api";
import type {
  DerivedProperty,
  InterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
} from "@osdk/client";
import type { ObserveObjectsArgs } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

type InferRdpTypes<
  Q extends ObjectTypeDefinition | InterfaceDefinition,
  WP extends DerivedProperty.Clause<Q> | undefined,
> = WP extends DerivedProperty.Clause<Q> ? {
    [K in keyof WP]: WP[K] extends DerivedProperty.Creator<Q, infer T> ? T
      : never;
  }
  : {};

export interface UseOsdkObjectsOptions<
  T extends ObjectTypeDefinition | InterfaceDefinition,
  WithProps extends DerivedProperty.Clause<T> | undefined = undefined,
> {
  /**
   * Standard OSDK Where with RDP support
   */
  where?: WhereClause<T, InferRdpTypes<T, WithProps>>;

  /**
   *  The preferred page size for the list.
   */
  pageSize?: number;

  /** */
  orderBy?: {
    [K in PropertyKeys<T>]?: "asc" | "desc";
  };

  /**
   * Define derived properties (RDPs) to be computed server-side and attached to each object.
   * These properties will be available on the returned objects alongside their regular properties.
   */
  withProperties?: WithProps;

  /**
   * Causes the list to automatically fetch more as soon as the previous page
   * has been loaded. If a number is provided, it will continue to automatically
   * fetch more until the list is at least that long.
   *
   * - `true`: Fetch all available pages automatically
   * - `number`: Fetch pages until at least this many items are loaded
   * - `undefined` (default): Only fetch the first page, user must call fetchMore()
   *
   * Note: When using `autoFetchMore: true` with large datasets, the initial
   * load may take significant time. Consider using a specific number instead
   * or implementing virtual scrolling.
   *
   * @example
   * // Fetch all todos at once
   * const { data } = useOsdkObjects(Todo, { autoFetchMore: true })
   *
   * @example
   * // Fetch at least 100 todos (with 25 per page, fetches 4 pages)
   * const { data } = useOsdkObjects(Todo, {
   *   autoFetchMore: 100,
   *   pageSize: 25
   * })
   */
  autoFetchMore?: boolean | number;

  /**
   * Upon a list being revalidated, this option determines how the component
   * will be re-rendered with the data.
   *
   * An example to help understand the options:
   *
   * Suppose pageSize is 10 and we have called `fetchMore()` twice. The list is
   * now 30 items long.
   *
   * Upon revalidation, we get the first 10 items of the list. The options behave
   * as follows:
   *
   * - `"in-place"`: The first 10 items of the list are replaced with the new 10
   *   items. The list is now 30 items long, but only the first 10 items are valid.
   * - `"wait"`: The old list is returned until after the next 20 items are loaded
   *   (which will happen automatically). The list is now 30 items long.
   * - `"reset"`: The entire list is replaced with the new 10 items. The list is
   *   now 10 items long.
   */
  // invalidationMode?: "in-place" | "wait" | "reset";

  /**
   * The number of milliseconds to wait after the last observed list change.
   *
   * Two uses of `useOsdkObjects` with the where clause will only trigger one
   * network request if the second is within `dedupeIntervalMs`.
   */
  dedupeIntervalMs?: number;

  /**
   * If provided, the list will be considered this length for the purposes of
   * `invalidationMode` when using the `wait` option. If not provided,
   * the internal expectedLength will be determined by the number of times
   * `fetchMore` has been called.
   */
  // expectedLength?: number | undefined;

  streamUpdates?: boolean;

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
   * // Dependent query - wait for parent data
   * const { data: employee } = useOsdkObject(Employee, employeeId);
   * const { data: reports } = useOsdkObjects(Employee, {
   *   where: { managerId: employee?.id },
   *   enabled: !!employee
   * });
   */
  enabled?: boolean;
}

export interface UseOsdkListResult<
  T extends ObjectTypeDefinition | InterfaceDefinition,
> {
  fetchMore: (() => Promise<unknown>) | undefined;
  data: Osdk.Instance<T>[] | undefined;
  isLoading: boolean;

  error: Error | undefined;

  /**
   * Refers to whether the ordered list of objects (only considering the $primaryKey)
   * is optimistic or not.
   *
   * If you need to know if the contents of the list are optimistic you can
   * do that on a per object basis with useOsdkObject
   */
  isOptimistic: boolean;
}

declare const process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

export function useOsdkObjects<
  Q extends ObjectTypeDefinition | InterfaceDefinition,
  WP extends DerivedProperty.Clause<Q> | undefined = undefined,
>(
  type: Q,
  options?: UseOsdkObjectsOptions<Q, WP>,
): UseOsdkListResult<Q> {
  const {
    pageSize,
    orderBy,
    dedupeIntervalMs,
    where = {},
    streamUpdates,
    withProperties,
    autoFetchMore,
    enabled = true,
  } = options ?? {};
  const { observableClient } = React.useContext(OsdkContext2);

  /*  We want the canonical where clause so that the use of `React.useMemo`
      is stable. No real added cost as we canonicalize internal to
      the ObservableClient anyway.
   */
  const canonWhere = observableClient.canonicalizeWhereClause<Q>(where ?? {});

  // TODO: replace with improved stabilization
  const stableWithProperties = React.useMemo(
    () => withProperties,
    [JSON.stringify(withProperties)],
  );

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectsArgs<Q>>(
          () => ({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `list ${type.apiName} ${JSON.stringify(canonWhere)} [DISABLED]`
            : void 0,
        );
      }
      return makeExternalStore<ObserveObjectsArgs<Q>>(
        (observer) =>
          observableClient.observeList({
            type,
            where: canonWhere,
            dedupeInterval: dedupeIntervalMs ?? 2_000,
            pageSize,
            orderBy,
            streamUpdates,
            withProperties: stableWithProperties,
            autoFetchMore,
          }, observer),
        process.env.NODE_ENV !== "production"
          ? `list ${type.apiName} ${JSON.stringify(canonWhere)}`
          : void 0,
      );
    },
    [
      enabled,
      observableClient,
      type,
      canonWhere,
      dedupeIntervalMs,
      stableWithProperties,
      autoFetchMore,
      pageSize,
      orderBy,
      streamUpdates,
    ],
  );

  const listPayload = React.useSyncExternalStore(subscribe, getSnapShot);

  let error: Error | undefined;
  if (listPayload && "error" in listPayload && listPayload.error) {
    error = listPayload.error;
  } else if (listPayload?.status === "error") {
    error = new Error("Failed to load objects");
  }

  return {
    fetchMore: listPayload?.fetchMore,
    error,
    data: listPayload?.resolvedList as Osdk.Instance<Q>[],
    isLoading: listPayload?.status === "loading",
    isOptimistic: listPayload?.isOptimistic ?? false,
  };
}
