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
import type {
  ObservableClient,
  ObserveObjectsCallbackArgs,
  Observer,
  Unsubscribable,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import { extractPayloadError, makeExternalStore } from "./makeExternalStore.js";
import {
  getClientId,
  isSuspenseOption,
  setupSuspenseStore,
} from "./makeSuspenseExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

/** @internal */
export interface _CreateListObservationOptions<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  type: Pick<Q, "apiName" | "type">;
  rids?: readonly string[];
  where?: WhereClause<Q, RDPs>;
  dedupeInterval: number;
  pageSize?: number;
  orderBy?: { [K in PropertyKeys<Q>]?: "asc" | "desc" };
  streamUpdates?: boolean;
  withProperties?: DerivedProperty.Clause<Q>;
  autoFetchMore?: boolean | number;
  intersectWith?: Array<{ where: WhereClause<Q, RDPs> }>;
  pivotTo?: LinkNames<Q>;
  select?: readonly PropertyKeys<Q>[];
}

/** @internal */
export function _createListObservation<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  observableClient: ObservableClient,
  options: _CreateListObservationOptions<Q, RDPs>,
): (
  observer: Observer<ObserveObjectsCallbackArgs<Q, RDPs> | undefined>,
) => Unsubscribable {
  return (observer) =>
    observableClient.observeList({
      type: options.type,
      rids: options.rids,
      where: options.where,
      dedupeInterval: options.dedupeInterval,
      pageSize: options.pageSize,
      orderBy: options.orderBy,
      streamUpdates: options.streamUpdates,
      withProperties: options.withProperties,
      autoFetchMore: options.autoFetchMore,
      ...(options.intersectWith
        ? { intersectWith: options.intersectWith }
        : {}),
      ...(options.pivotTo ? { pivotTo: options.pivotTo } : {}),
      ...(options.select ? { select: options.select } : {}),
    }, observer);
}

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

  /**
   * Restrict which properties are returned for each object.
   * When provided, only the specified properties will be fetched,
   * reducing payload sizes for list views.
   *
   * @example
   * // Only fetch name and status properties
   * useOsdkObjects(Employee, { $select: ["name", "status"] })
   */
  $select?: readonly PropertyKeys<T>[];
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

export interface UseOsdkListSuspenseResult<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
  EXTRA_OPTIONS extends never | "$rid" = never,
> {
  data: Osdk.Instance<
    T,
    "$allBaseProperties" | EXTRA_OPTIONS,
    PropertyKeys<T>,
    RDPs
  >[];
  fetchMore: (() => Promise<void>) | undefined;
  isOptimistic: boolean;
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
  options:
    & Omit<UseOsdkObjectsOptions<Q>, "enabled">
    & { suspense: true; pivotTo: L; rids: readonly string[] },
): UseOsdkListSuspenseResult<LinkedType<Q, L>, {}, "$rid">;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
>(
  type: Q,
  options:
    & Omit<UseOsdkObjectsOptions<Q>, "enabled">
    & { suspense: true; pivotTo: L },
): UseOsdkListSuspenseResult<LinkedType<Q, L>>;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options:
    & Omit<UseOsdkObjectsOptions<Q, RDPs>, "enabled">
    & { suspense: true; rids: readonly string[] },
): UseOsdkListSuspenseResult<Q, RDPs, "$rid">;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options:
    & Omit<UseOsdkObjectsOptions<Q, RDPs>, "enabled">
    & { suspense: true },
): UseOsdkListSuspenseResult<Q, RDPs>;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
>(
  type: Q,
  options: UseOsdkObjectsOptions<Q> & { pivotTo: L; rids: readonly string[] },
): UseOsdkListResult<LinkedType<Q, L>, {}, "$rid">;

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
  options?:
    | UseOsdkObjectsOptions<Q, RDPs>
    | (Omit<UseOsdkObjectsOptions<Q, RDPs>, "enabled"> & { suspense: true }),
):
  | UseOsdkListResult<Q, RDPs>
  | UseOsdkListResult<Q, RDPs, "$rid">
  | UseOsdkListResult<LinkedType<Q, LinkNames<Q>>>
  | UseOsdkListResult<LinkedType<Q, LinkNames<Q>>, {}, "$rid">
  | UseOsdkListSuspenseResult<Q, RDPs>
  | UseOsdkListSuspenseResult<Q, RDPs, "$rid">
  | UseOsdkListSuspenseResult<LinkedType<Q, LinkNames<Q>>>
  | UseOsdkListSuspenseResult<LinkedType<Q, LinkNames<Q>>, {}, "$rid">
{
  const { observableClient } = React.useContext(OsdkContext2);

  const isSuspense = isSuspenseOption(options);

  const {
    pageSize,
    dedupeIntervalMs,
    withProperties,
    rids,
    where,
    orderBy,
    streamUpdates,
    autoFetchMore,
    intersectWith,
    pivotTo,
    $select,
  } = options ?? {};

  const enabled = isSuspense
    ? true
    : (options != null && "enabled" in options
      ? options.enabled ?? true
      : true);

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

  const stableSelect = React.useMemo(
    () => $select,
    [JSON.stringify($select)],
  );

  const observationFactory = React.useMemo(
    () =>
      _createListObservation<Q, RDPs>(observableClient, {
        type,
        rids: stableRids,
        where: stableCanonWhere,
        dedupeInterval: dedupeIntervalMs ?? 2_000,
        pageSize,
        orderBy: stableOrderBy,
        streamUpdates,
        withProperties: stableWithProperties,
        autoFetchMore,
        intersectWith: stableIntersectWith,
        pivotTo,
        select: stableSelect,
      }),
    [
      observableClient,
      type,
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
      stableSelect,
    ],
  );

  const baseStore = React.useMemo(
    () => {
      if (isSuspense || !enabled) {
        return makeExternalStore<
          ObserveObjectsCallbackArgs<Q, RDPs>
        >(
          () => ({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `list ${type.apiName} [INACTIVE]`
            : void 0,
        );
      }

      return makeExternalStore<
        ObserveObjectsCallbackArgs<Q, RDPs>
      >(
        observationFactory,
        process.env.NODE_ENV !== "production"
          ? `list ${type.apiName} ${
            stableRids ? `[${stableRids.length} rids]` : ""
          } ${JSON.stringify(stableCanonWhere)}`
          : void 0,
      );
    },
    [
      isSuspense,
      enabled,
      observationFactory,
      type.apiName,
      stableRids,
      stableCanonWhere,
    ],
  );

  let { subscribe, getSnapShot } = baseStore;
  if (isSuspense) {
    const cacheKey =
      `${getClientId(observableClient)}:list:${type.apiName}:${
        JSON.stringify(stableCanonWhere)
      }`
      + `:${JSON.stringify(stableRids ?? null)}`
      + `:${pageSize ?? ""}:${dedupeIntervalMs ?? ""}`
      + `:${JSON.stringify(stableOrderBy ?? null)}`
      + `:${streamUpdates ?? ""}:${JSON.stringify(autoFetchMore ?? null)}`
      + `:${JSON.stringify(stableWithProperties ?? null)}`
      + `:${JSON.stringify(stableIntersectWith ?? null)}`
      + `:${pivotTo ?? ""}:${JSON.stringify(stableSelect ?? null)}`;

    ({ subscribe, getSnapShot } = setupSuspenseStore<
      ObserveObjectsCallbackArgs<Q, RDPs>
    >(
      cacheKey,
      observationFactory,
      undefined,
      (p) => p?.resolvedList != null,
    ));
  }

  const listPayload = React.useSyncExternalStore(subscribe, getSnapShot);

  return React.useMemo(() => {
    if (isSuspense) {
      return {
        fetchMore: listPayload?.hasMore ? listPayload.fetchMore : undefined,
        data: listPayload?.resolvedList ?? [],
        isOptimistic: listPayload?.isOptimistic ?? false,
        totalCount: listPayload?.totalCount,
      };
    }

    return {
      fetchMore: listPayload?.hasMore ? listPayload.fetchMore : undefined,
      error: extractPayloadError(listPayload, "Failed to load objects"),
      data: listPayload?.resolvedList,
      isLoading: enabled
        ? (listPayload?.status === "loading" || listPayload?.status === "init"
          || !listPayload)
        : false,
      isOptimistic: listPayload?.isOptimistic ?? false,
      totalCount: listPayload?.totalCount,
    };
  }, [listPayload, enabled, isSuspense]);
}
