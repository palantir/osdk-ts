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
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import type {
  ObservableClient,
  Observer,
  Unsubscribable,
} from "@osdk/client/unstable-do-not-use";

/**
 * Configuration for a single mock object.
 */
export interface MockObjectConfig<T extends ObjectTypeDefinition = ObjectTypeDefinition> {
  /** The object type (e.g., Player, Team) */
  objectType: T;
  /** The primary key */
  primaryKey: PrimaryKeyType<T>;
  /** The mock data */
  data: Partial<Osdk.Instance<T>>;
}

/**
 * Configuration for creating a mock observable client.
 */
export interface MockObservableClientConfig {
  /** Pre-populated objects */
  objects?: MockObjectConfig[];
  /** Delay in ms before returning data (simulates network latency) */
  delay?: number;
}

/**
 * Mock observable client for testing.
 */
export interface MockObservableClient extends ObservableClient {
  /**
   * Set mock data for a single object.
   */
  setObjectResponse<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    primaryKey: PrimaryKeyType<T>,
    data: Partial<Osdk.Instance<T>>,
  ): void;

  /**
   * Set mock error for a single object.
   */
  setObjectError<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    primaryKey: PrimaryKeyType<T>,
    error: Error,
  ): void;

  /**
   * Set mock data for a list query.
   */
  setListResponse<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    data: Array<Partial<Osdk.Instance<T>>>,
    where?: WhereClause<T>,
  ): void;

  /**
   * Trigger an update for a specific object.
   */
  emitObjectUpdate<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    primaryKey: PrimaryKeyType<T>,
    data: Partial<Osdk.Instance<T>>,
  ): void;

  /**
   * Get all active subscriptions for debugging.
   */
  getActiveSubscriptions(): { type: string; key: string }[];
}

interface StoredObject {
  data: object;
  error?: Error;
}

interface StoredList {
  data: object[];
  error?: Error;
}

interface Subscription {
  type: "object" | "list";
  key: string;
  observer: Observer<unknown>;
}

/**
 * Creates a mock observable client for testing shape hooks.
 *
 * @param config - Initial configuration
 * @returns A mock observable client with helper methods
 *
 * @example
 * ```typescript
 * const mockClient = createMockObservableClient({
 *   objects: [
 *     {
 *       objectType: Player,
 *       primaryKey: "player-1",
 *       data: { name: "John", age: 25, $primaryKey: "player-1", $apiName: "Player" },
 *     },
 *   ],
 * });
 *
 * // Use in tests
 * const wrapper = ({ children }) => (
 *   <OsdkProvider2 observableClient={mockClient}>
 *     {children}
 *   </OsdkProvider2>
 * );
 *
 * const { result } = renderHook(() => useOsdkObject(Player, "player-1", { shape: SlimPlayer }), { wrapper });
 * ```
 */
export function createMockObservableClient(
  config?: MockObservableClientConfig,
): MockObservableClient {
  const { delay = 0 } = config ?? {};

  // Object store: objectType:primaryKey -> data
  const objectStore = new Map<string, StoredObject>();

  // List store: objectType:whereClause -> data[]
  const listStore = new Map<string, StoredList>();

  // Active subscriptions
  const subscriptions: Subscription[] = [];

  function objectKey<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    primaryKey: PrimaryKeyType<T>,
  ): string {
    return `${objectType}:${String(primaryKey)}`;
  }

  function listKey<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    where?: WhereClause<T>,
  ): string {
    return `${objectType}:${JSON.stringify(where ?? {})}`;
  }

  // Pre-populate from config
  if (config?.objects) {
    for (const obj of config.objects) {
      const key = objectKey(obj.objectType.apiName, obj.primaryKey);
      objectStore.set(key, { data: obj.data as object });
    }
  }

  const mockClient: MockObservableClient = {
    // Set object response
    setObjectResponse<T extends ObjectTypeDefinition>(
      objectType: T["apiName"],
      primaryKey: PrimaryKeyType<T>,
      data: Partial<Osdk.Instance<T>>,
    ): void {
      const key = objectKey(objectType, primaryKey);
      objectStore.set(key, { data: data as object });
    },

    // Set object error
    setObjectError<T extends ObjectTypeDefinition>(
      objectType: T["apiName"],
      primaryKey: PrimaryKeyType<T>,
      error: Error,
    ): void {
      const key = objectKey(objectType, primaryKey);
      objectStore.set(key, { data: {}, error });
    },

    // Set list response
    setListResponse<T extends ObjectTypeDefinition>(
      objectType: T["apiName"],
      data: Array<Partial<Osdk.Instance<T>>>,
      where?: WhereClause<T>,
    ): void {
      const key = listKey(objectType, where);
      listStore.set(key, { data: data as object[] });
    },

    // Emit object update
    emitObjectUpdate<T extends ObjectTypeDefinition>(
      objectType: T["apiName"],
      primaryKey: PrimaryKeyType<T>,
      data: Partial<Osdk.Instance<T>>,
    ): void {
      const key = objectKey(objectType, primaryKey);
      objectStore.set(key, { data: data as object });

      // Notify subscribers
      for (const sub of subscriptions) {
        if (sub.type === "object" && sub.key === key) {
          sub.observer.next({
            object: data,
            isOptimistic: false,
            status: "loaded",
            lastUpdated: Date.now(),
          });
        }
      }
    },

    // Get active subscriptions
    getActiveSubscriptions(): { type: string; key: string }[] {
      return subscriptions.map((s) => ({ type: s.type, key: s.key }));
    },

    // Observe object
    observeObject(apiName, pk, _options, subFn): Unsubscribable {
      const key = objectKey(
        typeof apiName === "string" ? apiName : apiName.apiName,
        pk,
      );

      const subscription: Subscription = {
        type: "object",
        key,
        observer: subFn as Observer<unknown>,
      };
      subscriptions.push(subscription);

      // Send initial loading state
      subFn.next({
        object: undefined,
        isOptimistic: false,
        status: "loading",
        lastUpdated: Date.now(),
      });

      // Send data after delay
      setTimeout(() => {
        const stored = objectStore.get(key);
        if (stored?.error) {
          subFn.error(stored.error);
        } else if (stored) {
          (subFn as Observer<unknown>).next({
            object: stored.data,
            isOptimistic: false,
            status: "loaded",
            lastUpdated: Date.now(),
          });
        } else {
          (subFn as Observer<unknown>).next({
            object: undefined,
            isOptimistic: false,
            status: "loaded",
            lastUpdated: Date.now(),
          });
        }
      }, delay);

      return {
        unsubscribe: () => {
          const idx = subscriptions.indexOf(subscription);
          if (idx >= 0) subscriptions.splice(idx, 1);
        },
      };
    },

    // Observe list
    observeList(options, subFn): Unsubscribable {
      const key = listKey(
        options.type.apiName,
        options.where,
      );

      const subscription: Subscription = {
        type: "list",
        key,
        observer: subFn as Observer<unknown>,
      };
      subscriptions.push(subscription);

      // Send initial loading state
      (subFn as Observer<unknown>).next({
        resolvedList: [],
        isOptimistic: false,
        status: "loading",
        lastUpdated: Date.now(),
        fetchMore: async () => {},
        hasMore: false,
      });

      // Send data after delay
      setTimeout(() => {
        const stored = listStore.get(key);
        if (stored?.error) {
          (subFn as Observer<unknown>).error(stored.error);
        } else {
          (subFn as Observer<unknown>).next({
            resolvedList: stored?.data ?? [],
            isOptimistic: false,
            status: "loaded",
            lastUpdated: Date.now(),
            fetchMore: async () => {},
            hasMore: false,
          });
        }
      }, delay);

      return {
        unsubscribe: () => {
          const idx = subscriptions.indexOf(subscription);
          if (idx >= 0) subscriptions.splice(idx, 1);
        },
      };
    },

    // Observe object set - similar to list
    observeObjectSet(objectSet, _options, subFn): Unsubscribable {
      const subscription: Subscription = {
        type: "list",
        key: `objectSet:${JSON.stringify(objectSet)}`,
        observer: subFn as Observer<unknown>,
      };
      subscriptions.push(subscription);

      // Send initial loading state
      (subFn as Observer<unknown>).next({
        resolvedList: [],
        isOptimistic: false,
        status: "loading",
        lastUpdated: Date.now(),
        fetchMore: async () => {},
        hasMore: false,
        objectSet,
      });

      // Send empty data after delay (can be overridden with setListResponse)
      setTimeout(() => {
        (subFn as Observer<unknown>).next({
          resolvedList: [],
          isOptimistic: false,
          status: "loaded",
          lastUpdated: Date.now(),
          fetchMore: async () => {},
          hasMore: false,
          objectSet,
        });
      }, delay);

      return {
        unsubscribe: () => {
          const idx = subscriptions.indexOf(subscription);
          if (idx >= 0) subscriptions.splice(idx, 1);
        },
      };
    },

    // Observe aggregation - stub (supports both sync and async overloads)
    observeAggregation(_options: unknown, subFn: unknown): Unsubscribable & Promise<Unsubscribable> {
      setTimeout(() => {
        (subFn as Observer<unknown>).next({
          data: {},
          isOptimistic: false,
          status: "loaded",
          lastUpdated: Date.now(),
        });
      }, delay);
      const unsub: Unsubscribable = { unsubscribe: () => {} };
      const promise = Promise.resolve(unsub);
      return Object.assign(promise, unsub) as Unsubscribable & Promise<Unsubscribable>;
    },

    // Observe function - stub
    observeFunction(_queryDef, _params, _options, subFn): Unsubscribable {
      setTimeout(() => {
        (subFn as Observer<unknown>).next({
          data: undefined,
          isOptimistic: false,
          status: "loaded",
          lastUpdated: Date.now(),
        });
      }, delay);
      return { unsubscribe: () => {} };
    },

    // Observe links - stub
    observeLinks: ((_objects, _linkName, _options, subFn): Unsubscribable => {
      setTimeout(() => {
        (subFn as Observer<unknown>).next({
          resolvedList: [],
          isOptimistic: false,
          status: "loaded",
          lastUpdated: Date.now(),
          fetchMore: async () => {},
          hasMore: false,
        });
      }, delay);
      return { unsubscribe: () => {} };
    }) as ObservableClient["observeLinks"],

    // Apply action - stub
    applyAction: (async () => {
      return {} as never;
    }) as ObservableClient["applyAction"],

    // Validate action - stub
    validateAction: (async () => {
      return { result: "VALID" } as never;
    }) as ObservableClient["validateAction"],

    // Canonicalize where clause
    canonicalizeWhereClause: ((where) => {
      return where as ReturnType<ObservableClient["canonicalizeWhereClause"]>;
    }) as ObservableClient["canonicalizeWhereClause"],

    // Invalidate object type - stub
    invalidateObjectType: (async () => {}) as ObservableClient["invalidateObjectType"],

    // Invalidate objects - stub
    invalidateObjects: (async () => {}) as ObservableClient["invalidateObjects"],

    // Invalidate all - stub
    invalidateAll: (async () => {}) as ObservableClient["invalidateAll"],

    // Invalidate function - stub
    invalidateFunction: (async () => {}) as ObservableClient["invalidateFunction"],

    // Invalidate functions by object - stub
    invalidateFunctionsByObject: (async () => {}) as ObservableClient["invalidateFunctionsByObject"],
  };

  return mockClient;
}
