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
  InterfaceDefinition,
  ObjectTypeDefinition,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import type { Observer } from "rxjs";
import { BehaviorSubject } from "rxjs";
import invariant from "tiny-invariant";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import { additionalContext, type Client } from "../../Client.js";
import type { Logger } from "../../logger/Logger.js";
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
import { ActionApplication } from "./ActionApplication.js";
import type { CacheKey } from "./CacheKey.js";
import { CacheKeys } from "./CacheKeys.js";
import type { Canonical } from "./Canonical.js";
import {
  type Changes,
  createChangedObjects,
  DEBUG_ONLY__changesToString,
} from "./Changes.js";
import { Entry, Layer } from "./Layer.js";
import type { ListCacheKey, ListQueryOptions } from "./ListQuery.js";
import { isListCacheKey, ListQuery } from "./ListQuery.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
import { ObjectQuery } from "./ObjectQuery.js";
import { type OptimisticId } from "./OptimisticId.js";
import { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
import type { Query } from "./Query.js";
import { RefCounts } from "./RefCounts.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

/*
    Work still to do:
    - [x] testing for optimistic writes
    - [x] automatic invalidation of actions
    - [x] automatic optimistic list updates
    - [x] useOsdkObjects
    - [x] imply offline for objects passed directly
    - [x] websocket subscriptions
    - [ ] links
    - [x] add pagination
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

export class Store {
  whereCanonicalizer: WhereClauseCanonicalizer = new WhereClauseCanonicalizer();
  orderByCanonicalizer: OrderByCanonicalizer = new OrderByCanonicalizer();
  #truthLayer: Layer = new Layer(undefined, undefined);
  #topLayer: Layer;
  client: Client;

  /** @internal */
  logger?: Logger;

  // we can use a regular Map here because the refCounting will
  // handle cleanup.
  #queries: Map<
    CacheKey,
    Query<any, any, any>
  > = new Map();

  #cacheKeyToSubject = new WeakMap<
    CacheKey<string, any, any>,
    BehaviorSubject<SubjectPayload<any>>
  >();
  #cacheKeys: CacheKeys;

  #refCounts = new RefCounts<CacheKey>(
    DEBUG_REFCOUNTS ? 15_000 : 60_000,
    (k) => this.#cleanupCacheKey(k),
  );

  // we are currently only using this for debug logging and should just remove it in the future if that
  // continues to be true
  #finalizationRegistry: FinalizationRegistry<() => void>;

  constructor(client: Client) {
    this.client = client;
    this.logger = client[additionalContext].logger?.child({}, {
      msgPrefix: "Store",
    });
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

  public canonicalizeWhereClause<
    T extends ObjectTypeDefinition | InterfaceDefinition,
  >(
    where: WhereClause<T>,
  ): Canonical<SimpleWhereClause> {
    return this.whereCanonicalizer.canonicalize(where);
  }

  public observeObject<T extends ObjectTypeDefinition | InterfaceDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
    options: ObserveObjectOptions<T>,
    subFn: Observer<ObjectPayload>,
  ): Unsubscribable {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const query = this.getObjectQuery(apiName, pk);
    this.retain(query.cacheKey);

    if (options.mode !== "offline") {
      query.revalidate(options.mode === "force")
        .catch(e => {
          subFn.error(e);
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
    const sub = query.subscribe(subFn);

    return {
      unsubscribe: () => {
        sub.unsubscribe();
        this.release(query.cacheKey);
      },
    };
  }

  public observeList<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveListOptions<T>,
    subFn: Observer<ListPayload>,
  ): Unsubscribable {
    // the ListQuery represents the shared state of the list
    const query = this.getListQuery(
      options.type,
      options.where ?? {},
      options.orderBy ?? {},
      options,
    );
    this.retain(query.cacheKey);

    if (options.mode !== "offline") {
      query.revalidate(options.mode === "force").catch((x: unknown) => {
        subFn.error(x);
      });
    }
    const sub = query.subscribe(subFn);

    if (options.streamUpdates) {
      query.registerStreamUpdates(sub);
    }

    return {
      unsubscribe: () => {
        sub.unsubscribe();
        this.release(query.cacheKey);
      },
    };
  }

  peekQuery<K extends CacheKey>(
    cacheKey: K,
  ): K["__cacheKey"]["query"] | undefined {
    return this.#queries.get(cacheKey) as K["__cacheKey"]["query"] | undefined;
  }

  #getQuery<K extends CacheKey>(
    cacheKey: K,
    createQuery: () => K["__cacheKey"]["query"],
  ): K["__cacheKey"]["query"] {
    let query = this.peekQuery(cacheKey);
    if (!query) {
      query = createQuery();
      this.#queries.set(cacheKey, query);
    }
    return query;
  }

  public getListQuery<T extends ObjectTypeDefinition | InterfaceDefinition>(
    def: Pick<T, "type" | "apiName">,
    where: WhereClause<T>,
    orderBy: Record<string, "asc" | "desc" | undefined>,
    opts: ListQueryOptions,
  ): ListQuery {
    const { apiName, type } = def;

    const canonWhere = this.whereCanonicalizer.canonicalize(where);
    const canonOrderBy = this.orderByCanonicalizer.canonicalize(orderBy);
    const listCacheKey = this.getCacheKey<ListCacheKey>(
      "list",
      type,
      apiName,
      canonWhere,
      canonOrderBy,
    );

    return this.#getQuery(listCacheKey, () => {
      return new ListQuery(
        this,
        this.getSubject(listCacheKey),
        type,
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

  public getValue<K extends CacheKey<string, any, any>>(
    cacheKey: K,
  ): Entry<K> | undefined {
    return this.#topLayer.get(cacheKey);
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
    changes: Changes;
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
        const newValue = new Entry(
          cacheKey,
          value,
          Date.now(),
          status,
        );

        writeLayer.set(cacheKey, newValue);

        const newTopValue = this.#topLayer.get(cacheKey);

        if (oldTopValue !== newTopValue) {
          this.#cacheKeyToSubject.get(cacheKey)?.next({
            // eslint-disable-next-line @typescript-eslint/no-misused-spread
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
    this.maybeRevalidateQueries(changes, optimisticId).catch(e => {
      // we don't want batch() to return a promise,
      // so we settle for logging an error here instead of
      // dropping it on the floor.
      if (this.logger) {
        this.logger.error("Unhandled error in batch", e);
      } else {
        // eslint-disable-next-line no-console
        console.error("Unhandled error in batch", e);
        throw e;
      }
    });

    return {
      batchResult: batchContext,
      retVal: retVal,
      changes: batchContext.changes,
    };
  };

  public invalidateObject<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
  ): Promise<unknown> {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    return this.getObjectQuery(apiName, pk)
      .revalidate(/* force */ true);
  }

  async maybeRevalidateQueries(
    changes: Changes,
    optimisticId?: OptimisticId | undefined,
  ): Promise<void> {
    if (changes.isEmpty()) {
      if (process.env.NODE_ENV !== "production") {
        // todo
        this.logger?.child({ methodName: "maybeRevalidateQueries" }).debug(
          "No changes, aborting",
        );
      }
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      // todo
      this.logger?.child({ methodName: "maybeRevalidateQueries" }).debug(
        DEBUG_ONLY__changesToString(changes),
        { optimisticId },
      );
    }

    try {
      const promises: Array<Promise<unknown>> = [];
      for (const cacheKey of this.#queries.keys()) {
        const promise = this.peekQuery(cacheKey)?.maybeUpdateAndRevalidate?.(
          changes,
          optimisticId,
        );
        if (promise) promises.push(promise);
      }
      await Promise.all(promises);
    } finally {
      if (process.env.NODE_ENV !== "production") {
        // todo
        this.logger?.child({ methodName: "maybeRevalidateQueries" }).debug(
          "in finally",
          DEBUG_ONLY__changesToString(changes),
        );
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
  ): Promise<void> {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "invalidateObjectType" }).info(
        changes ? DEBUG_ONLY__changesToString(changes) : void 0,
      );
    }

    const promises: Array<Promise<void>> = [];

    for (const cacheKey of this.#truthLayer.keys()) {
      if (isListCacheKey(cacheKey)) {
        if (!changes || !changes.modified.has(cacheKey)) {
          const promise = this.peekQuery(cacheKey)?.revalidate(true);

          if (promise) {
            promises.push(promise);
            changes?.modified.add(cacheKey);
          }
        }
      }
    }

    return Promise.all(promises).then(() => void 0);
  }

  retain(cacheKey: CacheKey<string, any, any>): void {
    this.#refCounts.retain(cacheKey);
  }

  release(cacheKey: CacheKey<string, any, any>): void {
    this.#refCounts.release(cacheKey);
  }
}

export async function invalidateList<T extends ObjectTypeDefinition>(
  store: Store,
  args: {
    type: Pick<T, "apiName" | "type">;
    where?: WhereClause<T> | SimpleWhereClause;
    orderBy?: OrderBy<T>;
  },
): Promise<void> {
  const where = store.whereCanonicalizer.canonicalize(args.where ?? {});
  const orderBy = store.orderByCanonicalizer.canonicalize(args.orderBy ?? {});

  const cacheKey = store.getCacheKey<ListCacheKey>(
    "list",
    args.type.type,
    args.type.apiName,
    where,
    orderBy as Canonical<OrderBy<T>>,
  );

  await store.peekQuery(cacheKey)?.revalidate(true);
}
