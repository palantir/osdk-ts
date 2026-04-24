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

export interface MockObjectConfig<
  T extends ObjectTypeDefinition = ObjectTypeDefinition,
> {
  objectType: T;
  primaryKey: PrimaryKeyType<T>;
  data: Partial<Osdk.Instance<T>>;
}

export interface MockObservableClientConfig {
  objects?: MockObjectConfig[];
  delay?: number;
}

export interface MockObservableClient extends ObservableClient {
  setObjectResponse<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    primaryKey: PrimaryKeyType<T>,
    data: Partial<Osdk.Instance<T>>,
  ): void;

  setObjectError<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    primaryKey: PrimaryKeyType<T>,
    error: Error,
  ): void;

  setListResponse<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    data: Array<Partial<Osdk.Instance<T>>>,
    where?: WhereClause<T>,
  ): void;

  emitObjectUpdate<T extends ObjectTypeDefinition>(
    objectType: T["apiName"],
    primaryKey: PrimaryKeyType<T>,
    data: Partial<Osdk.Instance<T>>,
  ): void;

  getActiveSubscriptions(): { type: string; key: string }[];
}

interface Subscription {
  type: "object" | "list";
  key: string;
  observer: Observer<unknown>;
}

const NOOP_ASYNC = async () => {};

function makeListPayload(
  status: "init" | "loading" | "loaded" | "error",
  data: object[] = [],
  extra?: object,
): object {
  return {
    resolvedList: data,
    isOptimistic: false,
    status,
    lastUpdated: Date.now(),
    fetchMore: NOOP_ASYNC,
    hasMore: false,
    ...extra,
  };
}

function makeObjectPayload(
  status: "init" | "loading" | "loaded" | "error",
  object?: object,
): object {
  return { object, isOptimistic: false, status, lastUpdated: Date.now() };
}

export function createMockObservableClient(
  config?: MockObservableClientConfig,
): MockObservableClient {
  const { delay = 0 } = config ?? {};

  const objectStore = new Map<string, { data: object; error?: Error }>();
  const listStore = new Map<string, { data: object[]; error?: Error }>();
  const subscriptions: Subscription[] = [];

  function objectKey(objectType: string, primaryKey: unknown): string {
    return `${objectType}:${String(primaryKey)}`;
  }

  function listKey(objectType: string, where?: unknown): string {
    return `${objectType}:${JSON.stringify(where ?? {})}`;
  }

  function trackSub(
    type: "object" | "list",
    key: string,
    observer: Observer<unknown>,
  ): Unsubscribable {
    const sub: Subscription = { type, key, observer };
    subscriptions.push(sub);
    return {
      unsubscribe: () => {
        const idx = subscriptions.indexOf(sub);
        if (idx >= 0) {
          subscriptions.splice(idx, 1);
        }
      },
    };
  }

  if (config?.objects) {
    for (const obj of config.objects) {
      objectStore.set(
        objectKey(obj.objectType.apiName, obj.primaryKey),
        { data: obj.data as object },
      );
    }
  }

  const mockClient: MockObservableClient = {
    setObjectResponse(objectType, primaryKey, data) {
      objectStore.set(objectKey(objectType, primaryKey), {
        data: data as object,
      });
    },

    setObjectError(objectType, primaryKey, error) {
      objectStore.set(objectKey(objectType, primaryKey), {
        data: {},
        error,
      });
    },

    setListResponse(objectType, data, where) {
      listStore.set(listKey(objectType, where), { data: data as object[] });
    },

    emitObjectUpdate(objectType, primaryKey, data) {
      const key = objectKey(objectType, primaryKey);
      objectStore.set(key, { data: data as object });
      for (const sub of subscriptions) {
        if (sub.type === "object" && sub.key === key) {
          sub.observer.next(makeObjectPayload("loaded", data as object));
        }
      }
    },

    getActiveSubscriptions() {
      return subscriptions.map((s) => ({ type: s.type, key: s.key }));
    },

    observeObject(apiName, pk, _options, subFn): Unsubscribable {
      const key = objectKey(
        typeof apiName === "string" ? apiName : apiName.apiName,
        pk,
      );
      const unsub = trackSub("object", key, subFn as Observer<unknown>);

      (subFn as Observer<unknown>).next(makeObjectPayload("loading"));
      setTimeout(() => {
        const stored = objectStore.get(key);
        if (stored?.error) {
          subFn.error(stored.error);
        } else {
          (subFn as Observer<unknown>).next(
            makeObjectPayload("loaded", stored?.data),
          );
        }
      }, delay);

      return unsub;
    },

    observeList(options, subFn): Unsubscribable {
      const key = listKey(options.type.apiName, options.where);
      const obs = subFn as Observer<unknown>;
      const unsub = trackSub("list", key, obs);

      obs.next(makeListPayload("loading"));
      setTimeout(() => {
        const stored = listStore.get(key);
        if (stored?.error) {
          obs.error(stored.error);
        } else {
          obs.next(makeListPayload("loaded", stored?.data ?? []));
        }
      }, delay);

      return unsub;
    },

    observeObjectSet(objectSet, _options, subFn): Unsubscribable {
      const obs = subFn as Observer<unknown>;
      const unsub = trackSub(
        "list",
        `objectSet:${JSON.stringify(objectSet)}`,
        obs,
      );

      obs.next(makeListPayload("loading", [], { objectSet }));
      setTimeout(() => {
        obs.next(makeListPayload("loaded", [], { objectSet }));
      }, delay);

      return unsub;
    },

    observeAggregation(
      _options: unknown,
      subFn: unknown,
    ): Unsubscribable & Promise<Unsubscribable> {
      setTimeout(() => {
        (subFn as Observer<unknown>).next({
          data: {},
          isOptimistic: false,
          status: "loaded",
          lastUpdated: Date.now(),
        });
      }, delay);
      const unsub: Unsubscribable = { unsubscribe: () => {} };
      return Object.assign(Promise.resolve(unsub), unsub) as
        & Unsubscribable
        & Promise<Unsubscribable>;
    },

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

    observeLinks: ((_objects, _linkName, _options, subFn): Unsubscribable => {
      setTimeout(() => {
        (subFn as Observer<unknown>).next({
          linkedObjectsBySourcePrimaryKey: new Map(),
          resolvedList: [],
          isOptimistic: false,
          status: "loaded",
          lastUpdated: Date.now(),
          fetchMore: NOOP_ASYNC,
          hasMore: false,
        });
      }, delay);
      return { unsubscribe: () => {} };
    }) as ObservableClient["observeLinks"],

    applyAction: (async () => ({}) as never) as ObservableClient["applyAction"],
    validateAction:
      (async () => ({ result: "VALID" }) as never) as ObservableClient[
        "validateAction"
      ],
    canonicalizeWhereClause: ((where) =>
      where as ReturnType<
        ObservableClient["canonicalizeWhereClause"]
      >) as ObservableClient["canonicalizeWhereClause"],
    invalidateObjectType:
      NOOP_ASYNC as ObservableClient["invalidateObjectType"],
    invalidateObjects: NOOP_ASYNC as ObservableClient["invalidateObjects"],
    invalidateAll: NOOP_ASYNC as ObservableClient["invalidateAll"],
    invalidateFunction: NOOP_ASYNC as ObservableClient["invalidateFunction"],
    invalidateFunctionsByObject:
      NOOP_ASYNC as ObservableClient["invalidateFunctionsByObject"],
    canonicalizeOptions:
      ((options) => options) as ObservableClient["canonicalizeOptions"],
    getCacheSnapshot: () =>
      Promise.resolve({
        entries: [],
        stats: { totalEntries: 0, totalSize: 0 },
      }),
    observeMediaMetadata: ((
      _coords,
      _options,
      _observer,
    ) => ({
      unsubscribe: () => {},
    })) as ObservableClient["observeMediaMetadata"],
  };

  return mockClient;
}
