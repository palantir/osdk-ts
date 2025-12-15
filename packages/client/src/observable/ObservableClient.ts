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
  ActionEditResponse,
  ActionValidationResponse,
  AggregateOpts,
  AggregationsResults,
  DerivedProperty,
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
  SimplePropertyDef,
  WhereClause,
  WirePropertyTypes,
} from "@osdk/api";
import { createFetchHeaderMutator } from "@osdk/shared.net.fetch";
import type { ActionSignatureFromDef } from "../actions/applyAction.js";
import { additionalContext, type Client } from "../Client.js";
import { createClientFromContext } from "../createClient.js";
import { OBSERVABLE_USER_AGENT } from "../util/UserAgent.js";
import { type Canonical } from "./internal/Canonical.js";
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
    /**
     * Internal hook used by developer tooling for lifecycle instrumentation.
     * Not part of the public API surface.
     * @internal
     */
    __debugListeners?: {
      onLayerCreated?(id: unknown): void;
      onLayerCleared?(id: unknown): void;
      onServerObjectsModified?(
        objects: Array<{
          objectType: string;
          primaryKey: string;
          operation: "update" | "create" | "delete";
        }>,
      ): void;
    };
  }
}

/**
 * Snapshot of the cache state for introspection.
 */
export interface CacheSnapshot {
  entries: CacheEntry[];
  stats: {
    totalEntries: number;
    totalSize: number;
    totalHits: number;
  };
}

/**
 * Individual cache entry with metadata.
 */
export interface CacheEntry {
  key: string;
  type: "object" | "list" | "link" | "objectSet";
  objectType: string;
  queryParams?: {
    where?: any;
    orderBy?: any;
    pageSize?: number;
    linkName?: string;
  };
  metadata: {
    timestamp: number;
    status: "init" | "loading" | "loaded" | "error";
    hitCount: number;
    size: number;
    isOptimistic: boolean;
  };
  data?: any;
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
  Q extends ObjectOrInterfaceDefinition,
  RDPs extends Record<string, SimplePropertyDef> = {},
> extends CommonObserveOptions, ObserveOptions {
  type: Pick<Q, "apiName" | "type">;
  where?: WhereClause<Q, RDPs>;
  pageSize?: number;
  orderBy?: OrderBy<Q>;
  invalidationMode?: InvalidationMode;
  expectedLength?: number;
  streamUpdates?: boolean;
  withProperties?: DerivedProperty.Clause<Q>;

  /**
   * Automatically fetch additional pages on initial load.
   *
   * - `true`: Fetch all available pages automatically
   * - `number`: Fetch pages until at least this many items are loaded
   * - `undefined` (default): Only fetch the first page, user must call fetchMore()
   *
   * @example
   * // Fetch all todos at once
   * observeList({ type: Todo, autoFetchMore: true }, observer)
   *
   * @example
   * // Fetch at least 100 todos
   * observeList({ type: Todo, autoFetchMore: 100, pageSize: 25 }, observer)
   */
  autoFetchMore?: boolean | number;
  intersectWith?: Array<{
    where: WhereClause<Q, RDPs>;
  }>;
  pivotTo?: string;
}

// TODO: Rename this from `ObserveObjectArgs` => `ObserveObjectCallbackArgs`. Not doing it now to reduce churn
// in repo.
export interface ObserveObjectArgs<T extends ObjectTypeDefinition> {
  object: Osdk.Instance<T> | undefined;
  isOptimistic: boolean;
  status: Status;
  lastUpdated: number;
  __debugMetadata?: {
    servedFromCache: boolean;
  };
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
  __debugMetadata?: {
    servedFromCache: boolean;
  };
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

export interface ObserveAggregationOptions<
  T extends ObjectOrInterfaceDefinition,
  A extends AggregateOpts<T>,
  RDPs extends Record<string, SimplePropertyDef> = {},
> extends CommonObserveOptions, ObserveOptions {
  type: T;
  where?: WhereClause<T, RDPs>;
  withProperties?: DerivedProperty.Clause<T>;
  intersectWith?: Array<{
    where: WhereClause<T, RDPs>;
  }>;
  aggregate: A;
}

export interface ObserveAggregationArgs<
  T extends ObjectOrInterfaceDefinition,
  A extends AggregateOpts<T>,
> {
  result: AggregationsResults<T, A> | undefined;
  status: Status;
  lastUpdated: number;
  error?: Error;
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
  observeList<
    T extends ObjectTypeDefinition | InterfaceDefinition,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveListOptions<T, RDPs>,
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
   * Observe an aggregation query with automatic updates when underlying data changes.
   *
   * @param options - Aggregation configuration including where, aggregate spec, and derived properties
   * @param subFn - Observer that receives aggregation result updates
   * @returns Subscription that can be unsubscribed to stop updates
   *
   * Supports:
   * - Filtering with where clauses
   * - Derived properties (RDPs) via withProperties
   * - Set intersections
   * - GroupBy and metric aggregations
   * - Automatic updates when source data changes
   */
  observeAggregation<
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveAggregationOptions<T, A, RDPs>,
    subFn: Observer<ObserveAggregationArgs<T, A>>,
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
  ) => Promise<ActionEditResponse>;

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
   * Register an action hook for monitoring purposes.
   * This method is a no-op in the base implementation and is only used
   * by monitoring/development tools to track action hook usage.
   *
   * @param action - Action definition being used by a hook
   */
  registerActionHook?: <Q extends ActionDefinition<any>>(action: Q) => void;

  /**
   * Register an object hook for monitoring purposes.
   * This method is a no-op in the base implementation and is only used
   * by monitoring/development tools to track object hook usage.
   *
   * @param objectType - Object type being observed by a hook
   * @param primaryKey - Primary key of the object (optional for list queries)
   */
  registerObjectHook?: <Q extends ObjectTypeDefinition>(
    objectType: Q["apiName"] | Q,
    primaryKey?: PrimaryKeyType<Q>,
  ) => void;

  /**
   * Register a list hook for monitoring purposes.
   * This method is a no-op in the base implementation and is only used
   * by monitoring/development tools to track list hook usage.
   *
   * @param objectType - Object type being observed by a hook
   * @param options - List options (where, orderBy, etc.)
   */
  registerListHook?: <Q extends ObjectTypeDefinition | InterfaceDefinition>(
    objectType: Q["apiName"] | Q,
    options?: {
      where?: WhereClause<Q>;
      orderBy?: OrderBy<Q>;
      pageSize?: number;
    },
  ) => void;

  /**
   * Register a link hook for monitoring purposes.
   * This method is a no-op in the base implementation and is only used
   * by monitoring/development tools to track link hook usage.
   *
   * @param sourceObject - Source object or objects for the link
   * @param linkName - Name of the link being traversed
   */
  registerLinkHook?: <Q extends ObjectTypeDefinition>(
    sourceObject: Osdk.Instance<Q> | Osdk.Instance<Q>[],
    linkName: string,
  ) => void;

  /**
   * Register an ObjectSet hook for monitoring purposes.
   * This method is a no-op in the base implementation and is only used
   * by monitoring/development tools to track ObjectSet hook usage.
   *
   * @param objectSet - ObjectSet being observed by a hook
   */
  registerObjectSetHook?: <Q extends ObjectTypeDefinition>(
    objectSet: ObjectSet<Q>,
  ) => void;

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

  /**
   * Get a snapshot of the current cache state for introspection.
   * Returns all cache entries with metadata including type, timestamps, and status.
   *
   * @returns Promise that resolves to a CacheSnapshot with all entries and statistics
   * @internal - For development/debugging tools only
   */
  getCacheSnapshot(): Promise<CacheSnapshot>;

  canonicalizeWhereClause: <
    T extends ObjectTypeDefinition | InterfaceDefinition,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    where: WhereClause<T, RDPs>,
  ) => Canonical<WhereClause<T, RDPs>>;
}

export function createObservableClient(
  client: Client,
  mockManager?: any,
): ObservableClient {
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
  return new ObservableClientImpl(new Store(tweakedClient, mockManager));
}

export interface Unsubscribable {
  unsubscribe: () => void;
}
