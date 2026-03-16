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
import {
  getSuspenseExternalStore,
  throwIfSuspenseNeeded,
} from "./makeSuspenseExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";
import { _createListObservation } from "./useOsdkObjects.js";

const EMPTY_WHERE = {};

export interface UseOsdkObjectsSuspenseOptions<
  T extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  rids?: readonly string[];
  where?: WhereClause<T, RDPs>;
  orderBy?: {
    [K in PropertyKeys<T>]?: "asc" | "desc";
  };
  pageSize?: number;
  withProperties?: { [K in keyof RDPs]: DerivedProperty.Creator<T, RDPs[K]> };
  dedupeIntervalMs?: number;
  intersectWith?: Array<{
    where: WhereClause<T, RDPs>;
  }>;
  pivotTo?: LinkNames<T>;
  autoFetchMore?: boolean | number;
  streamUpdates?: boolean;
  $select?: readonly PropertyKeys<T>[];
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

export function useOsdkObjectsSuspense<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
>(
  type: Q,
  options: UseOsdkObjectsSuspenseOptions<Q> & {
    pivotTo: L;
    rids: readonly string[];
  },
): UseOsdkListSuspenseResult<LinkedType<Q, L>, {}, "$rid">;

export function useOsdkObjectsSuspense<
  Q extends ObjectOrInterfaceDefinition,
  L extends LinkNames<Q>,
>(
  type: Q,
  options: UseOsdkObjectsSuspenseOptions<Q> & { pivotTo: L },
): UseOsdkListSuspenseResult<LinkedType<Q, L>>;

export function useOsdkObjectsSuspense<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options: UseOsdkObjectsSuspenseOptions<Q, RDPs> & {
    rids: readonly string[];
  },
): UseOsdkListSuspenseResult<Q, RDPs, "$rid">;

export function useOsdkObjectsSuspense<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options?: UseOsdkObjectsSuspenseOptions<Q, RDPs>,
): UseOsdkListSuspenseResult<Q, RDPs>;

export function useOsdkObjectsSuspense<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  type: Q,
  options?: UseOsdkObjectsSuspenseOptions<Q, RDPs>,
):
  | UseOsdkListSuspenseResult<Q, RDPs>
  | UseOsdkListSuspenseResult<Q, RDPs, "$rid">
  | UseOsdkListSuspenseResult<LinkedType<Q, LinkNames<Q>>>
  | UseOsdkListSuspenseResult<LinkedType<Q, LinkNames<Q>>, {}, "$rid">
{
  // useContext is safe before throw - context is on the fiber tree, not hook state
  const { observableClient } = React.useContext(OsdkContext2);

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

  const canonWhere = observableClient.canonicalizeWhereClause<Q, RDPs>(
    where ?? EMPTY_WHERE,
  );

  // Build stable cache key from all observation parameters
  const cacheKey = `list:${type.apiName}:${JSON.stringify(canonWhere)}`
    + `:${JSON.stringify(rids ?? null)}`
    + `:${pageSize ?? ""}:${dedupeIntervalMs ?? ""}`
    + `:${JSON.stringify(orderBy ?? null)}`
    + `:${streamUpdates ?? ""}:${JSON.stringify(autoFetchMore ?? null)}`
    + `:${JSON.stringify(withProperties ?? null)}`
    + `:${JSON.stringify(intersectWith ?? null)}`
    + `:${pivotTo ?? ""}:${JSON.stringify($select ?? null)}`;

  // Check Store for already-loaded data (read-only, no side effects)
  const peekResult = observableClient.peekListData({
    type,
    rids,
    where: canonWhere,
    pageSize,
    orderBy,
    withProperties,
    intersectWith,
    pivotTo,
    select: $select,
  });

  const store = getSuspenseExternalStore<ObserveObjectsCallbackArgs<Q, RDPs>>(
    cacheKey,
    _createListObservation(observableClient, {
      type,
      rids,
      where: canonWhere,
      dedupeInterval: dedupeIntervalMs ?? 2_000,
      pageSize,
      orderBy,
      streamUpdates,
      withProperties,
      autoFetchMore,
      intersectWith,
      pivotTo,
      select: $select,
    }),
    peekResult
      ? {
        status: peekResult.status,
        isOptimistic: peekResult.isOptimistic,
        resolvedList: undefined,
        fetchMore: () => Promise.resolve(),
        hasMore: false,
        lastUpdated: 0,
        totalCount: peekResult.totalCount,
      }
      : undefined,
  );

  // Throw BEFORE hooks - React resets hook state on Suspense retry
  throwIfSuspenseNeeded<ObserveObjectsCallbackArgs<Q, RDPs>>(
    store,
    (p) => p?.resolvedList != null,
    store.getSnapShot,
  );

  // Data is available, set up subscription for live updates
  const listPayload = React.useSyncExternalStore(
    store.subscribe,
    store.getSnapShot,
  );

  return React.useMemo(() => ({
    fetchMore: listPayload?.hasMore ? listPayload.fetchMore : undefined,
    data: listPayload?.resolvedList ?? [],
    isOptimistic: listPayload?.isOptimistic ?? false,
    totalCount: listPayload?.totalCount,
  }), [listPayload]);
}
