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
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import { delay } from "msw";
import { BehaviorSubject } from "rxjs";
import invariant from "tiny-invariant";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import { additionalContext, type Client } from "../../Client.js";
import type { Logger } from "../../Logger.js";
import { DEBUG_REFCOUNTS } from "../DebugFlags.js";
import type { ListPayload } from "../ListPayload.js";
import type { ObjectPayload } from "../ObjectPayload.js";
import type {
  ObserveListOptions,
  ObserveObjectOptions,
  OrderBy,
  Unsubscribable,
} from "../ObservableClient.js";
import type { OptimisticBuilder } from "../OptimisticBuilder.js";
import type { SubFn } from "../types.js";
import type { CacheKey } from "./CacheKey.js";
import { CacheKeys } from "./CacheKeys.js";
import type { Canonical } from "./Canonical.js";
import {
  type Changes,
  createChangedObjects,
  DEBUG_ONLY__changesToString,
} from "./ChangedObjects.js";
import type { Entry } from "./Layer.js";
import { Layer } from "./Layer.js";
import type { ListCacheKey, ListQueryOptions } from "./ListQuery.js";
import { isListCacheKey, ListQuery } from "./ListQuery.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
import { ObjectQuery } from "./ObjectQuery.js";
import { type OptimisticId } from "./OptimisticId.js";
import { runOptimisticJob } from "./OptimisticJob.js";
import type { Query } from "./Query.js";
import { RefCounts } from "./RefCounts.js";
import { WeakMapWithEntries } from "./WeakMapWithEntries.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

const ACTION_DELAY = process.env.NODE_ENV === "production" ? 0 : 1000;

/*
    Work still to do:
    - [x] testing for optimistic writes
    - [x] automatic invalidation of actions
    - [x] automatic optimistic list updates
    - [x] useOsdkObjects
    - [x] imply offline for objects passed directly
    - [ ] websocket subscriptions
    - [ ] links
    - [ ] add pagination
    - [ ] sub-selection support
    - [ ] interfaces
    - [ ] setup defaults
    - [ ] reduce updates in react
*/

export interface SubjectPayload<KEY extends CacheKey> extends Entry<KEY> {
  isOptimistic: boolean;
}

export interface BatchContext {
  changes: Changes;
  createLayerIfNeeded: () => void;
  optimisticWrite: boolean;

  write: <K extends CacheKey<string, any, any>>(
    k: K,
    v: Entry<K>["value"],
    status: Entry<K>["status"],
  ) => Entry<K>;

  read: <K extends CacheKey<string, any, any>>(
    k: K,
  ) => Entry<K> | undefined;
}

interface UpdateOptions {
  optimisticId?: OptimisticId;
}

export namespace Store {
  export interface ApplyActionOptions {
    optimisticUpdate?: (ctx: OptimisticBuilder) => void;
  }
}

function createInitEntry(cacheKey: CacheKey): Entry<any> {
  return {
    cacheKey,
    status: "init",
    value: undefined,
    lastUpdated: 0,
  };
}

/*
  Notes:
    - Subjects are one per type per store (by cache key)
    - Data is one per layer per cache key
*/

export class OrderByCanonicalizer {
  // crappy version
  #map = new Map<string, Record<string, "asc" | "desc" | undefined>>();

  canonicalize: <T>(
    orderBy: Record<string, "asc" | "desc" | undefined>,
  ) => Canonical<Record<string, "asc" | "desc" | undefined>> = (orderBy) => {
    if (this.#map.has(JSON.stringify(orderBy))) {
      return this.#map.get(JSON.stringify(orderBy))! as Canonical<
        Record<string, "asc" | "desc" | undefined>
      >;
    } else {
      this.#map.set(JSON.stringify(orderBy), orderBy);
      return orderBy as Canonical<Record<string, "asc" | "desc" | undefined>>;
    }
  };
}

export class Store {
  whereCanonicalizer: WhereClauseCanonicalizer = new WhereClauseCanonicalizer();
  orderByCanonicalizer: OrderByCanonicalizer = new OrderByCanonicalizer();
  #truthLayer: Layer = new Layer(undefined, undefined);
  #topLayer: Layer;
  client: Client;

  /** @internal */
  logger?: Logger;

  #queries: WeakMapWithEntries<
    CacheKey<string, any, any>,
    Query<any, any, any>
  > = new WeakMapWithEntries();

  #cacheKeyToSubject = new WeakMap<
    CacheKey<string, any, any>,
    BehaviorSubject<SubjectPayload<any>>
  >();
  #cacheKeys: CacheKeys;

  #refCounts = new RefCounts<CacheKey>(
    DEBUG_REFCOUNTS ? 15_000 : 60_000,
    (k) => this.#cleanupCacheKey(k),
  );

  #finalizationRegistry: FinalizationRegistry<() => void>;

  constructor(client: Client) {
    this.client = client;
    this.logger = client[additionalContext].logger;
    this.#topLayer = this.#truthLayer;
    this.#cacheKeys = new CacheKeys(
      this.whereCanonicalizer,
      this.orderByCanonicalizer,
      (k) => {
        if (DEBUG_REFCOUNTS) {
          const cacheKeyType = k.type;
          const otherKeys = k.otherKeys;
          // eslint-disable-next-line no-console
          console.log(
            `CacheKeys.onCreate(${cacheKeyType}, ${JSON.stringify(otherKeys)})`,
          );

          this.#finalizationRegistry.register(k, () => {
            // eslint-disable-next-line no-console
            console.log(
              `CacheKey Finalization(${cacheKeyType}, ${
                JSON.stringify(otherKeys)
              })`,
            );
          });
        }

        this.#refCounts.register(k);
      },
    );

    setInterval(() => {
      this.#refCounts.gc();
    }, 1000);

    this.#finalizationRegistry = new FinalizationRegistry<() => void>(
      (cleanupCallback) => {
        try {
          cleanupCallback();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(
            "Caught an error while running a finalization callback",
            e,
          );
        }
      },
    );
  }

  /**
   * Called after a key is no longer retained and the timeout has elapsed
   * @param key
   */
  #cleanupCacheKey = (key: CacheKey<string, any, any>) => {
    const subject = this.peekSubject(key);

    if (DEBUG_REFCOUNTS) {
      // eslint-disable-next-line no-console
      console.log(
        `CacheKey cleaning up (${
          JSON.stringify({
            closed: subject?.closed,
            observed: subject?.observed,
          })
        })`,
        JSON.stringify([key.type, ...key.otherKeys], null, 2),
      );
    }
    this.#cacheKeys.remove(key);
    if (process.env.NODE_ENV !== "production") {
      invariant(subject);
    }

    if (subject) {
      subject.complete();
      this.#cacheKeyToSubject.delete(key);
    }

    this.#queries.get(key)?.dispose();
    this.#queries.delete(key);
  };

  applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts?: Store.ApplyActionOptions,
  ) => Promise<unknown> = (action, args, opts) => {
    return new ActionApplication(this).applyAction(action, args, opts);
  };

  removeLayer(layerId: OptimisticId): void {
    invariant(
      layerId != null,
      "undefined is the reserved layerId for the truth layer",
    );
    // 1. collect all cache keys for a given layerId
    let currentLayer: Layer | undefined = this.#topLayer;
    const cacheKeys = new Map<CacheKey<string, any, any>, Entry<any>>();
    while (currentLayer != null && currentLayer.parentLayer != null) {
      if (currentLayer.layerId === layerId) {
        for (const [k, v] of currentLayer.entries()) {
          if (cacheKeys.has(k)) continue;
          cacheKeys.set(k, v);
        }
      }

      currentLayer = currentLayer.parentLayer;
    }

    // 2. remove the layers from the chain
    this.#topLayer = this.#topLayer.removeLayer(layerId);

    // 3. check each cache key to see if it is different in the new chain
    for (const [k, oldEntry] of cacheKeys) {
      const currentEntry = this.#topLayer.get(k);

      // 4. if different, update the subject
      if (oldEntry !== currentEntry) {
        const x = currentEntry ?? createInitEntry(k);
        // We are going to be pretty lazy here and just re-emit the value.
        // In the future it may benefit us to deep equal check her but I think
        // the subjects are effectively doing this anyway.
        this.peekSubject(k)?.next(
          {
            // eslint-disable-next-line @typescript-eslint/no-misused-spread
            ...(currentEntry ?? createInitEntry(k)),
            isOptimistic:
              currentEntry?.value !== this.#truthLayer.get(k)?.value,
          },
        );
      }
    }
  }

  getCacheKey<K extends CacheKey<string, any, any>>(
    type: K["type"],
    ...args: K["__cacheKey"]["args"]
  ): K {
    return this.#refCounts.register(this.#cacheKeys.get(type, ...args));
  }

  peekSubject = <KEY extends CacheKey<string, any, any>>(
    cacheKey: KEY,
  ):
    | BehaviorSubject<SubjectPayload<KEY>>
    | undefined =>
  {
    return this.#cacheKeyToSubject.get(cacheKey);
  };

  getSubject = <KEY extends CacheKey<string, any, any>>(
    cacheKey: KEY,
  ): BehaviorSubject<SubjectPayload<KEY>> => {
    let subject = this.#cacheKeyToSubject.get(cacheKey);
    if (!subject) {
      const initialValue: Entry<KEY> = this.#topLayer.get(cacheKey)
        ?? createInitEntry(cacheKey);

      subject = new BehaviorSubject({
        // eslint-disable-next-line @typescript-eslint/no-misused-spread
        ...initialValue,
        isOptimistic:
          initialValue.value !== this.#truthLayer.get(cacheKey)?.value,
      });
      this.#cacheKeyToSubject.set(cacheKey, subject);
    }

    return subject;
  };

  public observeObject<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
    options: ObserveObjectOptions<T>,
    subFn: SubFn<ObjectPayload>,
  ): Unsubscribable {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const query = this.getObjectQuery(apiName, pk);
    this.#refCounts.retain(query.cacheKey);

    if (options.mode !== "offline") {
      query.revalidate(options.mode === "force")
        .catch(e => {
          // we don't want observeObject() to return a promise,
          // so we settle for logging an error here instead of
          // dropping it on the floor.
          if (this.logger) {
            this.logger.error("Unhandled error in observeObject", e);
          } else {
            throw e;
          }
        });
    }
    const sub = query.subscribe({ next: subFn });

    return {
      unsubscribe: () => {
        sub.unsubscribe();
        this.#refCounts.release(query.cacheKey);
      },
    };
  }

  public observeList<T extends ObjectTypeDefinition>(
    options: ObserveListOptions<T>,
    subFn: SubFn<ListPayload>,
  ): Unsubscribable {
    // the ListQuery represents the shared state of the list
    const query = this.getListQuery(
      options.objectType,
      options.where ?? {},
      options.orderBy ?? {},
      options,
    );
    this.#refCounts.retain(query.cacheKey);

    if (options.mode !== "offline") {
      void query.revalidate(options.mode === "force");
    }
    const sub = query.subscribe({ next: subFn });

    if (options.streamUpdates) {
      const miniDef = {
        type: "object",
        apiName: (typeof options.objectType === "string"
          ? options.objectType
          : options.objectType.apiName),
      } as T;
      let objectSet: ObjectSet<T> = this.client(miniDef);
      if (options.where) {
        objectSet = objectSet.where(options.where ?? {});
      }
      const store = this;
      const websocketSubscription = objectSet.subscribe({
        onChange({ object, state }) {
          if (process.env.NODE_ENV !== "production") {
            store.logger?.debug(
              { methodName: "onError" },
              "updates",
              state,
              object,
            );
          }

          const cacheKey = store.getCacheKey<ObjectCacheKey>(
            "object",
            object.$objectType,
            object.$primaryKey,
          );
          const type = store.#peekQuery(cacheKey) == null
            ? "addedObjects"
            : "modifiedObjects";

          const changes = createChangedObjects();
          changes[type].set(
            object.$objectType,
            object,
          );

          if (state === "ADDED_OR_UPDATED") {
            // todo, can we do the update without
            // the extra invalidation? maybe a flag to updateObject
            store.updateObject(
              object.$objectType,
              object,
            );
            store.maybeRevalidateLists(changes).catch(err => {
              // eslint-disable-next-line no-console
              console.error("Unhandled error in maybeRevalidateLists", err);
            });
          }
        },

        onError(errors) {
          if (process.env.NODE_ENV !== "production") {
            store.logger?.info(
              { methodName: "onError" },
              "subscription errors",
              errors,
            );
          }
        },

        onOutOfDate() {
          if (process.env.NODE_ENV !== "production") {
            store.logger?.info(
              { methodName: "onOutOfDate" },
            );
          }
        },

        onSuccessfulSubscription() {
          if (process.env.NODE_ENV !== "production") {
            store.logger?.info(
              { methodName: "onSuccessfulSubscription" },
            );
          }
        },
      });

      sub.add(() => {
        if (process.env.NODE_ENV !== "production") {
          store.logger?.info(
            { methodName: "observeList" },
            "Unsubscribing from websocket",
          );
        }

        websocketSubscription.unsubscribe();
      });
    }

    return {
      unsubscribe: () => {
        sub.unsubscribe();
        this.#refCounts.release(query.cacheKey);
      },
    };
  }

  #peekQuery<K extends CacheKey<string, any, any>>(
    cacheKey: K,
  ): K["__cacheKey"]["query"] | undefined {
    return this.#queries.get(cacheKey) as K["__cacheKey"]["query"] | undefined;
  }

  #getQuery<K extends CacheKey>(
    cacheKey: K,
    createQuery: () => K["__cacheKey"]["query"],
  ): K["__cacheKey"]["query"] {
    let query = this.#peekQuery(cacheKey);
    if (!query) {
      query = createQuery();
      this.#queries.set(cacheKey, query);
    }
    return query;
  }

  public getListQuery<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    where: WhereClause<T>,
    orderBy: Record<string, "asc" | "desc" | undefined>,
    opts: ListQueryOptions,
  ): ListQuery {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const canonWhere = this.whereCanonicalizer.canonicalize(where);
    const canonOrderBy = this.orderByCanonicalizer.canonicalize(orderBy);
    const listCacheKey = this.getCacheKey<ListCacheKey>(
      "list",
      apiName,
      canonWhere,
      canonOrderBy,
    );

    return this.#getQuery(listCacheKey, () => {
      return new ListQuery(
        this,
        this.getSubject(listCacheKey),
        apiName,
        canonWhere,
        canonOrderBy,
        listCacheKey,
        opts,
      );
    });
  }

  public getObjectQuery<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
  ): ObjectQuery {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const objectCacheKey = this.getCacheKey<ObjectCacheKey>(
      "object",
      apiName,
      pk,
    );

    return this.#getQuery(objectCacheKey, () =>
      new ObjectQuery(
        this,
        this.getSubject(objectCacheKey),
        apiName,
        pk,
        objectCacheKey,
        { dedupeInterval: 0 },
      ));
  }

  public getObject<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: string | number,
  ): Osdk.Instance<T> | undefined {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const objectCacheKey = this.getCacheKey<ObjectCacheKey>(
      "object",
      apiName,
      pk,
    );
    const objEntry = this.#topLayer.get(objectCacheKey);
    return objEntry?.value as Osdk.Instance<T> | undefined;
  }

  batch = <X>(
    { optimisticId, changes = createChangedObjects() }: {
      optimisticId?: OptimisticId;
      changes?: Changes;
    },
    batchFn: (batchContext: BatchContext) => X,
  ): {
    batchResult: BatchContext;
    retVal: X;
  } => {
    invariant(
      optimisticId === undefined || !!optimisticId,
      "optimistic must be undefined or not falsy",
    );

    let needsLayer = optimisticId !== undefined;
    const batchContext: BatchContext = {
      changes,
      createLayerIfNeeded: () => {
        if (needsLayer) {
          this.#topLayer = this.#topLayer.addLayer(optimisticId);
          needsLayer = false;
        }
      },
      optimisticWrite: !!optimisticId,
      write: (cacheKey, value, status) => {
        const oldTopValue = this.#topLayer.get(cacheKey);

        if (optimisticId) batchContext.createLayerIfNeeded();

        const writeLayer = optimisticId
          ? this.#topLayer
          : this.#truthLayer;
        const newValue = {
          cacheKey,
          value,
          lastUpdated: Date.now(),
          status,
        };

        writeLayer.set(cacheKey, newValue);

        const newTopValue = this.#topLayer.get(cacheKey);

        if (oldTopValue !== newTopValue) {
          this.#cacheKeyToSubject.get(cacheKey)?.next({
            ...newValue,
            isOptimistic:
              newTopValue?.value !== this.#truthLayer.get(cacheKey)?.value,
          });
        }

        return newValue;
      },
      read: (cacheKey) => {
        return optimisticId
          ? this.#topLayer.get(cacheKey)
          : this.#truthLayer.get(cacheKey);
      },
    };

    const retVal = batchFn(batchContext);
    this.maybeUpdateLists(changes, optimisticId);

    return { batchResult: batchContext, retVal: retVal };
  };

  public invalidateObject<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
  ): Promise<unknown> {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    // inevitably we will want an internal version of this and a "public" one
    // so we can avoid extra requests

    const query = this.getObjectQuery(apiName, pk);

    return query.revalidate(true);

    // potentially trigger updates of the lists that included this object?
    // TODO
    // could we detect that a list WOULD include it?
  }

  public async maybeRevalidateLists(
    changes: Changes,
  ): Promise<void> {
    if (process.env.NODE_ENV !== "production") {
      // todo
      this.logger?.trace(
        { methodName: "maybeRevalidateList" },
        DEBUG_ONLY__changesToString(changes),
      );
    }

    try {
      const promises: Array<Promise<unknown>> = [];
      for (const [cacheKey, v] of this.#truthLayer.entries()) {
        if (isListCacheKey(cacheKey)) {
          const promise = this.#peekQuery(cacheKey)?.maybeRevalidate(changes);
          if (promise) promises.push(promise);
        }
      }
      await Promise.all(promises);
    } finally {
      if (process.env.NODE_ENV !== "production") {
        // todo
        this.logger?.trace(
          { methodName: "maybeRevalidateList" },
          "in finally",
          DEBUG_ONLY__changesToString(changes),
        );
      }
    }
  }

  public maybeUpdateLists(
    changes: Changes,
    optimisticId: OptimisticId | undefined,
  ): void {
    for (const cacheKey of this.#queries.keys()) {
      if (isListCacheKey(cacheKey)) {
        if (!changes.modifiedLists.has(cacheKey)) {
          // fixme should this return a promise?
          this.#peekQuery(cacheKey)?.maybeUpdate(changes, optimisticId);
        }
      }
    }
  }

  /**
   * @param apiName
   * @param changes The changes we know about / to update
   * @returns
   */
  public invalidateObjectType<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    changes: Changes | undefined,
  ): Promise<unknown[]> {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    if (process.env.NODE_ENV !== "production") {
      this.logger?.info(
        { methodName: "invalidateObjectType" },
        changes ? DEBUG_ONLY__changesToString(changes) : void 0,
      );
    }

    const promises: Array<Promise<unknown>> = [];

    for (const [cacheKey, v] of this.#truthLayer.entries()) {
      if (isListCacheKey(cacheKey, apiName)) {
        if (!changes || !changes.modifiedLists.has(cacheKey)) {
          const promise = this.#peekQuery(cacheKey)?.revalidate(true);

          if (promise) {
            promises.push(promise);
            changes?.modifiedLists.add(cacheKey);
          }
        }
      }
    }

    return Promise.all(promises);
  }

  public invalidateList<T extends ObjectTypeDefinition>(
    { objectType, where, orderBy }: {
      objectType: T["apiName"] | T;
      where?: WhereClause<T>;
      orderBy?: OrderBy<T>;
    },
  ): void {
    if (typeof objectType !== "string") {
      objectType = objectType.apiName;
    }

    where = this.whereCanonicalizer.canonicalize(where ?? {});
    orderBy = this.orderByCanonicalizer.canonicalize(orderBy ?? {});

    const cacheKey = this.getCacheKey<ListCacheKey>(
      "list",
      objectType,
      where as Canonical<WhereClause<T>>,
      orderBy as Canonical<OrderBy<T>>,
    );

    void this.#peekQuery(cacheKey)?.revalidate(true);
  }

  public updateObject(
    apiName: string | ObjectTypeDefinition,
    value: Osdk.Instance<ObjectTypeDefinition>,
    { optimisticId }: UpdateOptions = {},
  ): Osdk.Instance<ObjectTypeDefinition> {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const query = this.getObjectQuery(apiName, value.$primaryKey);

    return this.batch({ optimisticId }, (batch) => {
      return query.writeToStore(value, "loaded", batch);
    }).retVal.value!;
  }

  /**
   * Updates the internal state of a list and will create a new internal query if needed.
   *
   * @param apiName
   * @param where
   * @param orderBy
   * @param values
   * @param param4
   * @param opts
   */
  public updateList<T extends ObjectTypeDefinition>(
    {
      objectType: apiName,
      where,
      orderBy,
    }: {
      objectType: T["apiName"] | T;
      where: WhereClause<T>;
      orderBy: OrderBy<T>;
    },
    values: Osdk.Instance<T>[],
    { optimisticId }: UpdateOptions = {},
    opts: ListQueryOptions = { dedupeInterval: 0 },
  ): void {
    const query = this.getListQuery(apiName, where ?? {}, orderBy ?? {}, opts);

    this.batch({ optimisticId }, (b) => {
      query.updateList(values, false, "loaded", b);
    });
  }

  retain(cacheKey: CacheKey<string, any, any>): void {
    this.#refCounts.retain(cacheKey);
  }

  release(cacheKey: CacheKey<string, any, any>): void {
    this.#refCounts.release(cacheKey);
  }
}

export class ActionApplication {
  constructor(private store: Store) {}

  applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts?: Store.ApplyActionOptions,
  ) => Promise<unknown> = (action, args, { optimisticUpdate } = {}) => {
    const removeOptimisticResult = runOptimisticJob(
      this.store,
      optimisticUpdate,
    );
    return (async () => {
      try {
        // The types for client get confused when we dynamically applyAction so we
        // have to deal with the `any` here and force cast it to what it should be.
        // TODO: Update the types so this doesn't happen!

        const actionResults: ActionEditResponse = await this.store.client(
          action,
        ).applyAction(args as any, { $returnEdits: true });

        if (ACTION_DELAY > 0) {
          // eslint-disable-next-line no-console
          console.log("action done, pausing");
          await delay(ACTION_DELAY);
          // eslint-disable-next-line no-console
          console.log("action done, pausing done");
        }
        await this._invalidateActionEditResponse(actionResults);
        return actionResults;
      } finally {
        if (process.env.NODE_ENV !== "production") {
          this.store.logger?.debug(
            "optimistic action complete; remove the results",
          );
        }
        // make sure this happens even if the action fails
        await removeOptimisticResult();
      }
    })();
  };

  _invalidateActionEditResponse = async (
    value: ActionEditResponse,
  ): Promise<ActionEditResponse> => {
    const typesToInvalidate = new Set<string>();

    let changes: Changes | undefined;
    if (value.type === "edits") {
      const promisesToWait: Promise<any>[] = [];
      // TODO we need an backend update for deletes
      for (const obj of value.modifiedObjects) {
        promisesToWait.push(
          this.store.invalidateObject(obj.objectType, obj.primaryKey),
        );
      }

      for (const obj of value.addedObjects) {
        promisesToWait.push(
          this.store.invalidateObject(obj.objectType, obj.primaryKey),
        );

        typesToInvalidate.add(obj.objectType);
      }

      await Promise.all(promisesToWait);

      // the action invocation just gives back object ids,
      // so we don't want to build the changes object
      // until we have up to date values.
      changes = this.#changesFromActionEditResponse(value);

      // updates `changes` in place
      await this.store.maybeRevalidateLists(changes);
    } else {
      for (const apiName of value.editedObjectTypes) {
        typesToInvalidate.add(apiName.toString());
        await this.store.invalidateObjectType(apiName as string, changes);
      }
    }

    return value;
  };

  #changesFromActionEditResponse = (value: ActionEditResponse) => {
    const changes = createChangedObjects();
    for (const changeType of ["addedObjects", "modifiedObjects"] as const) {
      for (const { objectType, primaryKey } of (value[changeType] ?? [])) {
        const obj = this.store.getObject(objectType, primaryKey);
        if (obj) {
          changes[changeType].set(objectType, obj);
        }
      }
    }
    return changes;
  };
}
