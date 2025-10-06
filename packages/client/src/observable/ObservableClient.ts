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
  ActionDefinition,
  ActionValidationResponse,
  InterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
  WhereClause,
  WirePropertyTypes,
} from "@osdk/api";
import { createFetchHeaderMutator } from "@osdk/shared.net.fetch";
import type { ActionSignatureFromDef } from "../actions/applyAction.js";
import { additionalContext, type Client } from "../Client.js";
import { createClientFromContext } from "../createClient.js";
import { OBSERVABLE_USER_AGENT } from "../util/UserAgent.js";
import type { Canonical } from "./internal/Canonical.js";
import type { ObserveObjectSetOptions } from "./internal/objectset/ObjectSetQueryOptions.js";
import { ObservableClientImpl } from "./internal/ObservableClientImpl.js";
import { Store } from "./internal/Store.js";
import type {
  CommonObserveOptions,
  InvalidationMode,
  ObserveOptions,
  Observer,
  Status,
} from "./ObservableClient/common.js";
import type { ObserveLinks } from "./ObservableClient/ObserveLink.js";
import type { OptimisticBuilder } from "./OptimisticBuilder.js";

export namespace ObservableClient {
  export interface ApplyActionOptions {
    optimisticUpdate?: (ctx: OptimisticBuilder) => void;
  }
}

export interface ObserveObjectOptions<
  T extends ObjectTypeDefinition | InterfaceDefinition,
> extends ObserveOptions {
  apiName: T["apiName"] | T;
  pk: PrimaryKeyType<T>;
  select?: PropertyKeys<T>[];
}

export type OrderBy<Q extends ObjectTypeDefinition | InterfaceDefinition> = {
  [K in PropertyKeys<Q>]?: "asc" | "desc" | undefined;
};

export interface ObserveListOptions<
  Q extends ObjectTypeDefinition | InterfaceDefinition,
> extends CommonObserveOptions, ObserveOptions {
  type: Pick<Q, "apiName" | "type">;
  where?: WhereClause<Q>;
  pageSize?: number;
  orderBy?: OrderBy<Q>;
  invalidationMode?: InvalidationMode;
  expectedLength?: number;
  streamUpdates?: boolean;
}

// TODO: Rename this from `ObserveObjectArgs` => `ObserveObjectCallbackArgs`. Not doing it now to reduce churn
// in repo.
export interface ObserveObjectArgs<T extends ObjectTypeDefinition> {
  object: Osdk.Instance<T> | undefined;
  isOptimistic: boolean;
  status: Status;
  lastUpdated: number;
}

// TODO: Rename this from `ObserveObjectsArgs` => `ObserveObjectsCallbackArgs`. Not doing it now to reduce churn
export interface ObserveObjectsArgs<
  T extends ObjectTypeDefinition | InterfaceDefinition,
> {
  resolvedList: Array<Osdk.Instance<T>>;
  isOptimistic: boolean;
  lastUpdated: number;
  fetchMore: () => Promise<void>;
  hasMore: boolean;
  status: Status;
}

export interface ObserveObjectSetArgs<
  T extends ObjectTypeDefinition | InterfaceDefinition,
  RDPs extends Record<
    string,
    WirePropertyTypes | undefined | Array<WirePropertyTypes>
  > = {},
> {
  resolvedList: Array<
    Osdk.Instance<T, "$allBaseProperties", PropertyKeys<T>, RDPs>
  >;
  isOptimistic: boolean;
  lastUpdated: number;
  fetchMore: () => Promise<void>;
  hasMore: boolean;
  status: Status;
  objectSet: ObjectSet<T, RDPs>;
}

/**
 * User facing callback args for `observeLink`
 */
export interface ObserveLinkCallbackArgs<
  T extends ObjectTypeDefinition | InterfaceDefinition,
> {
  resolvedList: Osdk.Instance<T>[];
  isOptimistic: boolean;
  lastUpdated: number;
  fetchMore: () => Promise<void>;
  hasMore: boolean;
  status: Status;
}

/**
 * Public interface for reactive data management with automatic updates.
 *
 * The ObservableClient provides a reactive data layer with:
 * - Real-time object and collection observation
 * - Automatic cache updates when data changes
 * - Optimistic updates for immediate UI feedback
 * - Pagination support for large collections
 * - Link traversal for relationship navigation
 */
export interface ObservableClient extends ObserveLinks {
  /**
   * Observe a single object with automatic updates when it changes.
   *
   * @param apiName - The object type definition or name
   * @param pk - The object's primary key
   * @param options - Observation options including deduplication interval
   * @param subFn - Observer that receives object state updates
   * @returns Subscription that can be unsubscribed to stop updates
   *
   * The observer will receive:
   * - Initial loading state if data not cached
   * - Loaded state with the object data
   * - Updates when the object changes
   * - Error state if fetch fails
   */
  observeObject<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
    options: ObserveOptions,
    subFn: Observer<ObserveObjectArgs<T>>,
  ): Unsubscribable;

  /**
   * Observe a filtered and sorted collection of objects.
   *
   * @param options - Filter, sort, and pagination options
   * @param subFn - Observer that receives collection state updates
   * @returns Subscription that can be unsubscribed to stop updates
   *
   * Supports:
   * - Filtering with where clauses
   * - Sorting with orderBy
   * - Pagination via fetchMore() in the payload
   * - Automatic updates when any matching object changes
   */
  observeList<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveListOptions<T>,
    subFn: Observer<ObserveObjectsArgs<T>>,
  ): Unsubscribable;

  /**
   * Observe an ObjectSet with automatic updates when matching objects change.
   *
   * @param baseObjectSet - The base ObjectSet to observe
   * @param options - Options for transforming and observing the ObjectSet
   * @param subFn - Observer that receives ObjectSet state updates
   * @returns Subscription that can be unsubscribed to stop updates
   *
   * Supports all ObjectSet operations:
   * - Filtering with where clauses
   * - Derived properties with withProperties
   * - Set operations (union, intersect, subtract)
   * - Link traversal with pivotTo
   * - Sorting and pagination
   */
  observeObjectSet<
    T extends ObjectTypeDefinition,
    RDPs extends Record<
      string,
      WirePropertyTypes | undefined | Array<WirePropertyTypes>
    > = {},
  >(
    baseObjectSet: ObjectSet<T>,
    options: ObserveObjectSetOptions<T, RDPs>,
    subFn: Observer<ObserveObjectSetArgs<T, RDPs>>,
  ): Unsubscribable;

  /**
   * Execute an action with optional optimistic updates.
   *
   * @param action - Action definition to execute
   * @param args - Arguments for the action
   * @param opts - Options including optimistic updates
   * @returns Promise that resolves when the action completes
   *
   * When providing optimistic updates:
   * - Changes appear immediately in the UI
   * - Server request still happens in background
   * - On success, server data replaces optimistic data
   * - On failure, optimistic changes automatically roll back
   */
  applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args:
      | Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0]
      | Array<Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0]>,
    opts?: ObservableClient.ApplyActionOptions,
  ) => Promise<unknown>;

  /**
   * Validate action parameters without executing the action.
   *
   * @param action - Action definition to validate
   * @param args - Arguments to validate
   * @returns Promise with validation result
   *
   * Use this to:
   * - Pre-validate forms before submission
   * - Display warnings or errors in the UI
   * - Enable/disable action buttons based on validity
   */
  validateAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
  ) => Promise<ActionValidationResponse>;

  /**
   * Invalidates the entire cache, forcing all queries to refetch.
   * Use sparingly as this can cause significant network traffic.
   */
  invalidateAll(): Promise<void>;

  /**
   * Invalidates specific objects in the cache.
   * @param objects - Single object or array of objects to invalidate
   */
  invalidateObjects(
    objects:
      | Osdk.Instance<ObjectTypeDefinition>
      | ReadonlyArray<Osdk.Instance<ObjectTypeDefinition>>,
  ): Promise<void>;

  /**
   * Invalidates all cached data for a specific object type.
   * This includes:
   * - All objects of the specified type
   * - All lists containing objects of this type
   * - All links where the source is of this type
   *
   * @param type - Object type definition or API name string
   * @returns Promise that resolves when invalidation is complete
   */
  invalidateObjectType<T extends ObjectTypeDefinition>(
    type: T | T["apiName"],
  ): Promise<void>;

  canonicalizeWhereClause: <
    T extends ObjectTypeDefinition | InterfaceDefinition,
  >(
    where: WhereClause<T>,
  ) => Canonical<WhereClause<T>>;
}

export function createObservableClient(client: Client): ObservableClient {
  // First we need a modified client that adds an extra header so we know its
  // an observable client
  const tweakedClient = createClientFromContext({
    ...client[additionalContext],

    fetch: createFetchHeaderMutator(
      client[additionalContext].fetch,
      (headers) => {
        headers.set(
          "Fetch-User-Agent",
          [
            headers.get("Fetch-User-Agent"),
            OBSERVABLE_USER_AGENT,
          ].filter(x => x && x?.length > 0).join(" "),
        );
        return headers;
      },
    ),
  });

  // Then we use that client instead. Because the `client` does not hold
  // any real state, this whole thing works.
  return new ObservableClientImpl(new Store(tweakedClient));
}

export interface Unsubscribable {
  unsubscribe: () => void;
}
