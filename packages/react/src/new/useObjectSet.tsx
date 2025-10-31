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
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PropertyKeys,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";

import {
  computeObjectSetCacheKey,
  type ObserveObjectSetArgs,
} from "@osdk/client/unstable-do-not-use";
import React from "react";
import { makeExternalStore } from "./makeExternalStore.js";
import { OsdkContext2 } from "./OsdkContext2.js";

export interface UseObjectSetOptions<
  Q extends ObjectTypeDefinition,
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
   * Link to pivot to (changes the type)
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
   * Enable streaming updates via websocket subscription.
   * When true, the object set will automatically update when matching objects are
   * added, updated, or removed.
   *
   * @default false
   */
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
   * // Dependent query - wait for filter selection
   * const { data: filteredObjects } = useObjectSet(MyObject.all(), {
   *   where: { status: selectedStatus },
   *   enabled: !!selectedStatus
   * });
   */
  enabled?: boolean;
}

export interface UseObjectSetResult<
  Q extends ObjectTypeDefinition,
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

  /**
   * Function to fetch more pages (undefined if no more pages)
   */
  fetchMore: (() => Promise<void>) | undefined;

  /**
   * The final ObjectSet after all transformations
   */
  objectSet: ObjectSet<Q, RDPs>;
}

declare const process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

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
export function useObjectSet<
  Q extends ObjectTypeDefinition,
  BaseRDPs extends Record<string, SimplePropertyDef> = never,
  RDPs extends Record<string, SimplePropertyDef> = {},
>(
  baseObjectSet: ObjectSet<Q, BaseRDPs>,
  options: UseObjectSetOptions<Q, RDPs> = {},
): UseObjectSetResult<Q, RDPs> {
  const { observableClient } = React.useContext(OsdkContext2);

  const { enabled = true, streamUpdates, ...otherOptions } = options;

  // Compute a stable cache key for the ObjectSet and options
  // dedupeIntervalMs and enabled are excluded as they don't affect the data
  const stableKey = computeObjectSetCacheKey(baseObjectSet, {
    where: otherOptions.where,
    withProperties: otherOptions.withProperties,
    union: otherOptions.union,
    intersect: otherOptions.intersect,
    subtract: otherOptions.subtract,
    pivotTo: otherOptions.pivotTo,
    pageSize: otherOptions.pageSize,
    orderBy: otherOptions.orderBy,
  });

  const { subscribe, getSnapShot } = React.useMemo(
    () => {
      if (!enabled) {
        return makeExternalStore<ObserveObjectSetArgs<Q, RDPs>>(
          () => ({ unsubscribe: () => {} }),
          process.env.NODE_ENV !== "production"
            ? `objectSet ${stableKey} [DISABLED]`
            : void 0,
        );
      }
      return makeExternalStore<ObserveObjectSetArgs<Q, RDPs>>(
        (observer) => {
          const subscription = observableClient.observeObjectSet(
            baseObjectSet as ObjectSet<Q>,
            {
              where: otherOptions.where,
              withProperties: otherOptions.withProperties,
              union: otherOptions.union,
              intersect: otherOptions.intersect,
              subtract: otherOptions.subtract,
              pivotTo: otherOptions.pivotTo,
              pageSize: otherOptions.pageSize,
              orderBy: otherOptions.orderBy,
              dedupeInterval: otherOptions.dedupeIntervalMs ?? 2_000,
              streamUpdates,
            },
            observer,
          );
          return subscription;
        },
        process.env.NODE_ENV !== "production"
          ? `objectSet ${stableKey}`
          : void 0,
      );
    },
    [enabled, observableClient, stableKey, streamUpdates],
  );

  const payload = React.useSyncExternalStore(subscribe, getSnapShot);

  return {
    data: payload?.resolvedList as Osdk.Instance<
      Q,
      "$allBaseProperties",
      PropertyKeys<Q>,
      RDPs
    >[],
    isLoading: payload?.status === "loading" || (!payload && true) || false,
    error: payload && "error" in payload
      ? payload.error
      : undefined,
    fetchMore: payload?.fetchMore,
    objectSet: payload?.objectSet as ObjectSet<Q, RDPs> || baseObjectSet,
  };
}
