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
  ObjectSet,
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
} from "@osdk/client/observable";
import React from "react";
import { extractPayloadError, isPayloadLoading } from "./hookUtils.js";
import {
  devToolsMetadata,
  makeExternalStore,
  type Snapshot,
} from "./makeExternalStore.js";
import {
  getClientId,
  getSuspenseExternalStore,
  isSuspenseOption,
  throwIfSuspenseNeeded,
} from "./makeSuspenseExternalStore.js";
import { OsdkContext } from "./OsdkContext.js";

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
  $loadPropertySecurityMetadata?: boolean;
  $includeAllBaseObjectProperties?: boolean;
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
    observableClient.observeList<Q, RDPs>({
      type: options.type,
      rids: options.rids,
      where: options.where,
      dedupeInterval: options.dedupeInterval,
      pageSize: options.pageSize,
      orderBy: options.orderBy,
      streamUpdates: options.streamUpdates,
      withProperties: options.withProperties,
      autoFetchMore: options.autoFetchMore,
      $includeAllBaseObjectProperties: options.$includeAllBaseObjectProperties,
      ...(options.intersectWith
        ? { intersectWith: options.intersectWith }
        : {}),
      ...(options.pivotTo ? { pivotTo: options.pivotTo } : {}),
      ...(options.select ? { select: options.select } : {}),
      ...(options.$loadPropertySecurityMetadata
        ? {
          $loadPropertySecurityMetadata: options.$loadPropertySecurityMetadata,
        }
        : {}),
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
   * ```tsx
   * // Fetch specific objects by RID
   * useOsdkObjects(Employee, { rids: ['ri.foo.123', 'ri.foo.456'] });
   * ```
   *
   * @example
   * ```tsx
   * // Fetch specific objects by RID, filtered by status
   * useOsdkObjects(Employee, {
   *   rids: ['ri.foo.123', 'ri.foo.456', 'ri.foo.789'],
   *   where: { status: 'active' },
   * });
   * ```
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
   *
   * Cannot be combined with `streamUpdates`. The server does not support
   * websocket subscriptions for link-traversal queries.
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

  /**
   * Enable streaming updates via websocket subscription.
   *
   * Cannot be combined with `pivotTo`. The server does not support
   * websocket subscriptions for link-traversal queries.
   */
  streamUpdates?: boolean;

  /**
   * Restrict which properties are returned for each object.
   * When provided, only the specified properties will be fetched,
   * reducing payload sizes for list views.
   *
   * @example
   * ```tsx
   * // Only fetch name and status properties
   * useOsdkObjects(Employee, { $select: ["name", "status"] });
   * ```
   */
  $select?: readonly PropertyKeys<T>[];

  /**
   * When true, loads per-property security metadata (marking requirements)
   * alongside each object. The returned objects will have `$propertySecurities`
   * populated with conjunctive/disjunctive marking requirements per property.
   */
  $loadPropertySecurityMetadata?: boolean;

  /**
   * When true, includes all properties of the underlying concrete object type
   * for interface queries. Has no effect for non-interface queries.
   */
  $includeAllBaseObjectProperties?: boolean;
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

  hasMore: boolean;

  objectSet: ObjectSet<T, RDPs> | undefined;

  refetch: () => Promise<void>;
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

// Suspense pivotTo overloads
export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options:
    & Omit<UseOsdkObjectsOptions<Q, RDPs>, "enabled">
    & { suspense: true; pivotTo: L; rids: readonly string[] },
): UseOsdkListSuspenseResult<LinkedType<Q, L>, {}, "$rid">;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options:
    & Omit<UseOsdkObjectsOptions<Q, RDPs>, "enabled">
    & { suspense: true; pivotTo: L },
): UseOsdkListSuspenseResult<LinkedType<Q, L>>;

// Suspense non-pivotTo overloads
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

// pivotTo overloads: streamUpdates is forbidden (the server does not support
// websocket subscriptions for link-traversal queries).
export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
>(
  type: Q,
  options: UseOsdkObjectsOptions<Q, {}> & {
    pivotTo: L;
    rids: readonly string[];
    streamUpdates?: never;
  },
): UseOsdkListResult<LinkedType<Q, L>, {}, "$rid">;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
>(
  type: Q,
  options: UseOsdkObjectsOptions<Q, {}> & {
    pivotTo: L;
    streamUpdates?: never;
  },
): UseOsdkListResult<LinkedType<Q, L>, {}>;

// Non-pivotTo overloads: pivotTo is forbidden to prevent fallthrough from the
// pivotTo overloads above (which would give the wrong return type).
export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options: UseOsdkObjectsOptions<Q, RDPs> & {
    rids: readonly string[];
    pivotTo?: never;
  },
): UseOsdkListResult<Q, RDPs, "$rid">;

export function useOsdkObjects<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options?:
    & UseOsdkObjectsOptions<Q, RDPs>
    & { pivotTo?: never },
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
  | UseOsdkListResult<LinkedType<Q, LinkNames<Q>>, {}>
  | UseOsdkListResult<LinkedType<Q, LinkNames<Q>>, {}, "$rid">
  | UseOsdkListSuspenseResult<Q, RDPs>
  | UseOsdkListSuspenseResult<Q, RDPs, "$rid">
  | UseOsdkListSuspenseResult<LinkedType<Q, LinkNames<Q>>>
  | UseOsdkListSuspenseResult<LinkedType<Q, LinkNames<Q>>, {}, "$rid">
{
  const { observableClient } = React.useContext(OsdkContext);

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
    $loadPropertySecurityMetadata,
    $includeAllBaseObjectProperties,
  } = options ?? {};

  const enabled = isSuspense
    ? true
    : (options != null && "enabled" in options
      ? options.enabled ?? true
      : true);

  const canonOptions = observableClient.canonicalizeOptions({
    where,
    withProperties,
    orderBy,
    intersectWith,
    $select,
  });

  const stableRids = React.useMemo(
    () => rids,
    [JSON.stringify(rids)],
  );

  const observationFactory = React.useMemo(
    () =>
      _createListObservation<Q, RDPs>(observableClient, {
        type,
        rids: stableRids,
        where: canonOptions.where,
        dedupeInterval: dedupeIntervalMs ?? 2_000,
        pageSize,
        orderBy: canonOptions.orderBy,
        streamUpdates,
        withProperties: canonOptions.withProperties,
        autoFetchMore,
        intersectWith: canonOptions.intersectWith,
        pivotTo,
        select: canonOptions.$select,
        $loadPropertySecurityMetadata,
        $includeAllBaseObjectProperties,
      }),
    [
      observableClient,
      type.apiName,
      type.type,
      stableRids,
      canonOptions.where,
      dedupeIntervalMs,
      pageSize,
      canonOptions.orderBy,
      streamUpdates,
      canonOptions.withProperties,
      autoFetchMore,
      canonOptions.intersectWith,
      pivotTo,
      canonOptions.$select,
      $loadPropertySecurityMetadata,
      $includeAllBaseObjectProperties,
    ],
  );

  const baseStore = React.useMemo(
    () => {
      if (isSuspense || !enabled) {
        return makeExternalStore<
          ObserveObjectsCallbackArgs<Q, RDPs>
        >(
          () => ({ unsubscribe: () => {} }),
          devToolsMetadata({
            hookType: "useOsdkObjects",
            objectType: type.apiName,
          }),
        );
      }

      return makeExternalStore<
        ObserveObjectsCallbackArgs<Q, RDPs>
      >(
        observationFactory,
        devToolsMetadata({
          hookType: "useOsdkObjects",
          objectType: type.apiName,
          where: canonOptions.where,
          orderBy: canonOptions.orderBy,
          pageSize,
        }),
      );
    },
    [
      isSuspense,
      enabled,
      observationFactory,
      type.apiName,
      canonOptions.where,
      canonOptions.orderBy,
      pageSize,
    ],
  );

  const cacheKey = isSuspense
    ? JSON.stringify([
      getClientId(observableClient),
      "list",
      type.apiName,
      stableRids ?? null,
      canonOptions.where ?? null,
      pageSize ?? null,
      dedupeIntervalMs ?? null,
      canonOptions.orderBy ?? null,
      streamUpdates ?? null,
      autoFetchMore ?? null,
      canonOptions.withProperties ?? null,
      canonOptions.intersectWith ?? null,
      pivotTo ?? null,
      canonOptions.$select ?? null,
      $loadPropertySecurityMetadata ?? null,
      $includeAllBaseObjectProperties ?? null,
    ])
    : null;

  const hasListData = React.useCallback(
    (p: Snapshot<ObserveObjectsCallbackArgs<Q, RDPs>>) =>
      p?.resolvedList != null,
    [],
  );

  const suspenseStore = React.useMemo(
    () =>
      cacheKey === null
        ? undefined
        : getSuspenseExternalStore<ObserveObjectsCallbackArgs<Q, RDPs>>(
          cacheKey,
          observationFactory,
          hasListData,
        ),
    [cacheKey, observationFactory, hasListData],
  );

  if (suspenseStore !== undefined) {
    throwIfSuspenseNeeded(suspenseStore, hasListData);
  }

  const subscribe = suspenseStore?.subscribe ?? baseStore.subscribe;
  const getSnapShot = suspenseStore?.getSnapShot ?? baseStore.getSnapShot;

  const listPayload = React.useSyncExternalStore(subscribe, getSnapShot);

  const refetch = React.useCallback(async () => {
    await observableClient.invalidateObjectType(type.apiName);
  }, [observableClient, type.apiName]);

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
      isLoading: isPayloadLoading(listPayload, enabled),
      isOptimistic: listPayload?.isOptimistic ?? false,
      totalCount: listPayload?.totalCount,
      hasMore: listPayload?.hasMore ?? false,
      objectSet: listPayload?.objectSet,
      refetch,
    };
  }, [listPayload, enabled, refetch, isSuspense]);
}
