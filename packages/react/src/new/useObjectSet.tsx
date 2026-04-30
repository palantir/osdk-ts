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
  LinkNames,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";

import { getWireObjectSet } from "@osdk/client";
import type { ObserveObjectSetArgs } from "@osdk/client/observable";
import React from "react";
import { extractPayloadError } from "./hookUtils.js";
import {
  devToolsMetadata,
  makeExternalStore,
  type Snapshot,
} from "./makeExternalStore.js";
import { OsdkContext } from "./OsdkContext.js";

export interface UseObjectSetOptions<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  /**
   * Where clause for filtering
   */
  where?: WhereClause<Q, RDPs>;

  /**
   * Derived properties to add to the object set
   */
  withProperties?: { [K in keyof RDPs]: DerivedProperty.Creator<Q, RDPs[K]> };

  /**
   * Object sets to union with
   */
  union?: ObjectSet<Q>[];

  /**
   * Object sets to intersect with
   */
  intersect?: ObjectSet<Q>[];

  /**
   * Object sets to subtract from
   */
  subtract?: ObjectSet<Q>[];

  /**
   * Link to pivot to (changes the type).
   *
   * Cannot be combined with `streamUpdates`. The server does not support
   * websocket subscriptions for link-traversal queries.
   */
  pivotTo?: LinkNames<Q>;

  /**
   * The preferred page size for the list
   */
  pageSize?: number;

  /**
   * Sort order for the results
   */
  orderBy?: {
    [K in PropertyKeys<Q>]?: "asc" | "desc";
  };

  /**
   * Minimum time between fetch requests in milliseconds (defaults to 2000ms)
   */
  dedupeIntervalMs?: number;

  /**
   * Automatically fetch additional pages on initial load.
   *
   * - `true`: Fetch all available pages automatically
   * - `number`: Fetch pages until at least this many items are loaded
   * - `undefined` (default): Only fetch the first page, user must call fetchMore()
   */
  autoFetchMore?: boolean | number;

  /**
   * Enable streaming updates via websocket subscription.
   * When true, the object set will automatically update when matching objects are
   * added, updated, or removed.
   *
   * Cannot be combined with `pivotTo`. The server does not support
   * websocket subscriptions for link-traversal queries.
   *
   * @default false
   */
  streamUpdates?: boolean;

  /**
   * Restrict which properties are returned for each object.
   * When provided, only the specified properties will be fetched,
   * reducing payload sizes for list views.
   */
  $select?: readonly PropertyKeys<Q>[];

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
   * // Dependent query - wait for filter selection
   * const { data: filteredObjects } = useObjectSet(MyObject.all(), {
   *   where: { status: selectedStatus },
   *   enabled: !!selectedStatus
   * });
   */
  enabled?: boolean;
}

export interface UseObjectSetResult<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  /**
   * The fetched data with derived properties
   */
  data:
    | Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>, RDPs>[]
    | undefined;

  /**
   * Whether data is currently being loaded
   */
  isLoading: boolean;

  /**
   * Any error that occurred during fetching
   */
  error: Error | undefined;

  isOptimistic: boolean;

  /**
   * Function to fetch more pages (undefined if no more pages)
   */
  fetchMore: (() => Promise<void>) | undefined;

  hasMore: boolean;

  /**
   * The final ObjectSet after all transformations
   */
  objectSet: ObjectSet<Q, RDPs> | undefined;

  /**
   * The total count of objects matching the query (if available from the API)
   */
  totalCount?: string;

  refetch: () => Promise<void>;
}

const OBJECT_TYPE_PLACEHOLDER = "$__OBJECT__TYPE__PLACEHOLDER";
/**
 * React hook for observing and interacting with OSDK object sets.
 *
 * @typeParam Q - The object type definition
 * @typeParam BaseRDPs - Derived properties that already exist on the input ObjectSet
 * @typeParam RDPs - New derived properties to be added via options.withProperties
 *
 * @param baseObjectSet - The ObjectSet to observe (may already have derived properties)
 * @param options - Options for filtering, sorting, and adding new derived properties
 * @returns Object set data with both existing and new derived properties
 */
// pivotTo overload: streamUpdates is forbidden (the server does not support
// websocket subscriptions for link-traversal queries).
export function useObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  BaseRDPs extends Record<string, SimplePropertyDef> = never,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  baseObjectSet: ObjectSet<Q, BaseRDPs> | undefined,
  options: UseObjectSetOptions<Q, RDPs> & {
    pivotTo: LinkNames<Q>;
    streamUpdates?: never;
  },
): UseObjectSetResult<Q, RDPs>;

// Non-pivotTo overload: pivotTo is forbidden to prevent fallthrough.
export function useObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  BaseRDPs extends Record<string, SimplePropertyDef> = never,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  baseObjectSet: ObjectSet<Q, BaseRDPs> | undefined,
  options?: UseObjectSetOptions<Q, RDPs> & { pivotTo?: never },
): UseObjectSetResult<Q, RDPs>;

export function useObjectSet<
  Q extends ObjectOrInterfaceDefinition,
  BaseRDPs extends Record<string, SimplePropertyDef> = never,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  baseObjectSet: ObjectSet<Q, BaseRDPs> | undefined,
  options: UseObjectSetOptions<Q, RDPs> = {},
): UseObjectSetResult<Q, RDPs> {
  const { observableClient } = React.useContext(OsdkContext);

  const { enabled: enabledOption = true, streamUpdates, ...otherOptions } =
    options;
  const enabled = enabledOption && baseObjectSet != null;

  // Track object type to detect when we switch to a different object type
  const objectTypeKey = enabled && baseObjectSet
    ? baseObjectSet.$objectSetInternals.def.apiName
    : OBJECT_TYPE_PLACEHOLDER;

  const previousObjectTypeRef = React.useRef<string>(objectTypeKey);
  const previousCompletedPayloadRef = React.useRef<
    Snapshot<ObserveObjectSetArgs<Q, RDPs>> | undefined
  >();
  // TODO: Is it expected to only clear the previousCompletedPayloadRef when the object type changes?
  // What if the same object type is queried with different filters, should we also clear the cache?
  const objectTypeChanged = previousObjectTypeRef.current !== objectTypeKey;
  if (objectTypeChanged) {
    previousObjectTypeRef.current = objectTypeKey;
    previousCompletedPayloadRef.current = undefined;
  }

  // canonicalizeOptions stabilizes complex query identity options.
  // pageSize is a view level concern (handled per subscriber, not part of
  // query identity), and pivotTo is a plain string that does not need
  // stabilization.
  const canonOptions = observableClient.canonicalizeOptions({
    where: otherOptions.where,
    withProperties: otherOptions.withProperties,
    orderBy: otherOptions.orderBy,
    union: otherOptions.union,
    intersect: otherOptions.intersect,
    subtract: otherOptions.subtract,
    $select: otherOptions.$select,
  });

  const objectSetKey = baseObjectSet
    ? JSON.stringify(getWireObjectSet(baseObjectSet as ObjectSet<Q>))
    : undefined;

  const baseObjectSetRef = React.useRef(baseObjectSet);
  baseObjectSetRef.current = baseObjectSet;

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectSetArgs<Q, RDPs>>(
          () => ({ unsubscribe: () => {} }),
          devToolsMetadata({
            hookType: "useObjectSet",
            objectType: objectTypeKey,
          }),
        );
      }

      const initialValue = objectTypeChanged
        ? undefined
        : previousCompletedPayloadRef.current;

      return makeExternalStore<ObserveObjectSetArgs<Q, RDPs>>(
        (observer) => {
          if (!baseObjectSetRef.current) {
            return { unsubscribe: () => {} };
          }
          const subscription = observableClient.observeObjectSet(
            baseObjectSetRef.current as ObjectSet<Q>,
            {
              where: canonOptions.where,
              withProperties: canonOptions.withProperties,
              union: canonOptions.union,
              intersect: canonOptions.intersect,
              subtract: canonOptions.subtract,
              pivotTo: otherOptions.pivotTo,
              pageSize: otherOptions.pageSize,
              orderBy: canonOptions.orderBy,
              dedupeInterval: otherOptions.dedupeIntervalMs ?? 2_000,
              autoFetchMore: otherOptions.autoFetchMore,
              streamUpdates,
              select: canonOptions.$select,
            },
            observer,
          );
          return subscription;
        },
        devToolsMetadata({
          hookType: "useObjectSet",
          objectType: objectTypeKey,
        }),
        initialValue,
      );
    },
    [
      enabled,
      observableClient,
      objectSetKey,
      canonOptions.where,
      canonOptions.withProperties,
      canonOptions.orderBy,
      canonOptions.union,
      canonOptions.intersect,
      canonOptions.subtract,
      canonOptions.$select,
      otherOptions.pivotTo,
      otherOptions.pageSize,
      otherOptions.autoFetchMore,
      otherOptions.dedupeIntervalMs,
      streamUpdates,
      objectTypeKey,
    ],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);
  if (payload && isPayloadCompleted(payload)) {
    previousCompletedPayloadRef.current = payload;
  }

  const typeApiName = baseObjectSet?.$objectSetInternals.def.apiName;

  const refetch = React.useCallback(async () => {
    if (typeApiName) {
      await observableClient.invalidateObjectType(typeApiName);
    }
  }, [observableClient, typeApiName]);

  return React.useMemo(() => {
    const lastLoaded = isPayloadCompleted(payload)
      ? payload
      : previousCompletedPayloadRef.current;
    return {
      data: lastLoaded?.resolvedList as Osdk.Instance<
        Q,
        "$allBaseProperties",
        PropertyKeys<Q>,
        RDPs
      >[],
      isLoading: enabled
        ? !isPayloadCompleted(payload)
        : false,
      error: extractPayloadError(lastLoaded, "Failed to load object set"),
      isOptimistic: payload?.isOptimistic ?? false,
      fetchMore: payload?.hasMore ? payload.fetchMore : undefined,
      hasMore: payload?.hasMore ?? false,
      objectSet: lastLoaded?.objectSet as ObjectSet<Q, RDPs> | undefined,
      totalCount: lastLoaded?.totalCount,
      refetch,
    };
  }, [payload, refetch, enabled]);
}

function isPayloadCompleted<
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef>,
>(
  payload: Snapshot<ObserveObjectSetArgs<Q, RDPs>>,
): boolean {
  if (payload != null && "error" in payload) {
    return true;
  }

  if (payload?.status == null) {
    return false;
  }

  switch (payload.status) {
    case "loaded":
    case "error":
      return true;
    case "loading":
    case "init":
      return false;
    default:
      payload.status satisfies never;
      return false;
  }
}
