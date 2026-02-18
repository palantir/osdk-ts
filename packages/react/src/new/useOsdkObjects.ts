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
  DerivedProperty,
  LinkedType,
  LinkNames,
  ObjectOrInterfaceDefinition,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { ObserveObjectsCallbackArgs } from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseOsdkObjectsOptions<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  /**
   * Fetch objects by their RIDs (Resource Identifiers).
   * When provided, starts with a static objectset containing these RIDs.
   * Can be combined with `where` to filter the RID set, and with `orderBy` to sort results.
   *
   * @example
   * // Fetch specific objects by RID
   * useOsdkObjects(Employee, { rids: ['ri.foo.123', 'ri.foo.456'] })
   *
   * @example
   * // Fetch specific objects by RID, filtered by status
   * useOsdkObjects(Employee, {
   *   rids: ['ri.foo.123', 'ri.foo.456', 'ri.foo.789'],
   *   where: { status: 'active' }
   * })
   */
  rids?: readonly string[];

  /**
   * Standard OSDK Where clause with RDP support.
   * When used with `rids`, filters the RID set.
   * When used alone, filters all objects of the type.
   */
  where?: WhereClause<T, RDPs>;

  /**
   * Sort results by one or more properties.
   */
  orderBy?: {
    [K in PropertyKeys<T>]?: "asc" | "desc";
  };

  /**
   * The preferred page size for the list.
   */
  pageSize?: number;

  /**
   * Define derived properties (RDPs) to be computed server-side and attached to each object.
   * These properties will be available on the returned objects alongside their regular properties.
   */
  withProperties?: { [K in keyof RDPs]: DerivedProperty.Creator<T, RDPs[K]> };

  /**
   * The number of milliseconds to wait after the last observed list change.
   *
   * Two uses of `useOsdkObjects` with the same parameters will only trigger one
   * network request if the second is within `dedupeIntervalMs`.
   */
  dedupeIntervalMs?: number;

  /**
   * Enable or disable the query.
   *
   * When `false`, the query will not automatically execute. It will still
   * return any cached data, but will not fetch from the server.
   *
   * @default true
   */
  enabled?: boolean;

  /**
   * Intersect the results with additional object sets.
   * Each element defines a where clause for an object set to intersect with.
   * The final result will only include objects that match ALL conditions.
   */
  intersectWith?: Array<{
    where: WhereClause<T, RDPs>;
  }>;

  /**
   * Pivot to related objects through a link.
   * This changes the return type from T to the linked object type.
   */
  pivotTo?: LinkNames<T>;

  /**
   * Causes the list to automatically fetch more as soon as the previous page
   * has been loaded. If a number is provided, it will continue to automatically
   * fetch more until the list is at least that long.
   *
   * - `true`: Fetch all available pages automatically
   * - `number`: Fetch pages until at least this many items are loaded
   * - `undefined` (default): Only fetch the first page, user must call fetchMore()
   */
  autoFetchMore?: boolean | number;

  streamUpdates?: boolean;
}

export interface UseOsdkListResult<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  EXTRA_OPTIONS extends never | "$rid" = never,
> {
  /**
   * Function to fetch more pages (undefined if no more pages)
   */
  fetchMore: (() => Promise<void>) | undefined;

  /**
   * The fetched data with derived properties
   */
  data:
    | Osdk.Instance<
      T,
      "$allBaseProperties" | EXTRA_OPTIONS,
      PropertyKeys<T>,
      RDPs
    >[]
    | undefined;

  /**
   * Whether data is currently being loaded
   */
  isLoading: boolean;

  /**
   * Any error that occurred during fetching
   */
  error: Error | undefined;

  /**
   * Refers to whether the ordered list of objects (only considering the $primaryKey)
   * is optimistic or not.
   *
   * If you need to know if the contents of the list are optimistic you can
   * do that on a per object basis with useOsdkObject
   */
  isOptimistic: boolean;

  /**
   * The total count of objects matching the query (if available from the API)
   */
  totalCount?: string;
}

const EMPTY_WHERE = {};

declare const process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
>(
  type: Q,
  options: UseOsdkObjectsOptions<Q> & { pivotTo: L },
): UseOsdkListResult<LinkedType<Q, L>>;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options: UseOsdkObjectsOptions<Q, RDPs> & { rids: readonly string[] },
): UseOsdkListResult<Q, RDPs, "$rid">;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options?: UseOsdkObjectsOptions<Q, RDPs>,
): UseOsdkListResult<Q, RDPs>;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options?: UseOsdkObjectsOptions<Q, RDPs>,
):
  | UseOsdkListResult<Q, RDPs>
  | UseOsdkListResult<Q, RDPs, "$rid">
  | UseOsdkListResult<LinkedType<Q, LinkNames<Q>>>
{
  const { observableClient } = React.useContext(OsdkContext2);

  const {
    pageSize,
    dedupeIntervalMs,
    withProperties,
    enabled = true,
    rids,
    where,
    orderBy,
    streamUpdates,
    autoFetchMore,
    intersectWith,
    pivotTo,
  } = options ?? {};

  const canonWhere = observableClient.canonicalizeWhereClause<
    Q,
    RDPs
  >(where ?? EMPTY_WHERE);

  const stableCanonWhere = React.useMemo(
    () => canonWhere,
    [JSON.stringify(canonWhere)],
  );

  const stableRids = React.useMemo(
    () => rids,
    [JSON.stringify(rids)],
  );

  const stableWithProperties = React.useMemo(
    () => withProperties,
    [JSON.stringify(withProperties)],
  );

  const stableIntersectWith = React.useMemo(
    () => intersectWith,
    [JSON.stringify(intersectWith)],
  );

  const stableOrderBy = React.useMemo(
    () => orderBy,
    [JSON.stringify(orderBy)],
  );

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<
          ObserveObjectsCallbackArgs<Q, RDPs>
        >(
          () => ({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `list ${type.apiName} [DISABLED]`
            : void 0,
        );
      }

      return makeExternalStore<
        ObserveObjectsCallbackArgs<Q, RDPs>
      >(
        (observer) =>
          observableClient.observeList({
            type,
            rids: stableRids,
            where: stableCanonWhere,
            dedupeInterval: dedupeIntervalMs ?? 2_000,
            pageSize,
            orderBy: stableOrderBy,
            streamUpdates,
            withProperties: stableWithProperties,
            autoFetchMore,
            ...(stableIntersectWith
              ? { intersectWith: stableIntersectWith }
              : {}),
            ...(pivotTo ? { pivotTo } : {}),
          }, observer),
        process.env.NODE_ENV !== "production"
          ? `list ${type.apiName} ${
            stableRids ? `[${stableRids.length} rids]` : ""
          } ${JSON.stringify(stableCanonWhere)}`
          : void 0,
      );
    },
    [
      enabled,
      observableClient,
      type.apiName,
      type.type,
      stableRids,
      stableCanonWhere,
      dedupeIntervalMs,
      pageSize,
      stableOrderBy,
      streamUpdates,
      stableWithProperties,
      autoFetchMore,
      stableIntersectWith,
      pivotTo,
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
    fetchMore: listPayload?.hasMore ? listPayload.fetchMore : undefined,
    error,
    data: listPayload?.resolvedList,
    isLoading: enabled
      ? (listPayload?.status === "loading" || listPayload?.status === "init"
        || !listPayload)
      : false,
    isOptimistic: listPayload?.isOptimistic ?? false,
    totalCount: listPayload?.totalCount,
  };
}
