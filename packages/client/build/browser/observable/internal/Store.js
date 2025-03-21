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

import { BehaviorSubject } from "rxjs";
import invariant from "tiny-invariant";
import { additionalContext } from "../../Client.js";
import { DEBUG_REFCOUNTS } from "../DebugFlags.js";
import { ActionApplication } from "./ActionApplication.js";
import { CacheKeys } from "./CacheKeys.js";
import { createChangedObjects, DEBUG_ONLY__changesToString } from "./Changes.js";
import { Entry, Layer } from "./Layer.js";
import { isListCacheKey, ListQuery } from "./ListQuery.js";
import { ObjectQuery } from "./ObjectQuery.js";
import { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
import { RefCounts } from "./RefCounts.js";
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

function createInitEntry(cacheKey) {
  return {
    cacheKey,
    status: "init",
    value: undefined,
    lastUpdated: 0
  };
}

/*
  Notes:
    - Subjects are one per type per store (by cache key)
    - Data is one per layer per cache key
*/

export class Store {
  whereCanonicalizer = new WhereClauseCanonicalizer();
  orderByCanonicalizer = new OrderByCanonicalizer();
  #truthLayer = new Layer(undefined, undefined);
  #topLayer;

  /** @internal */

  // we can use a regular Map here because the refCounting will
  // handle cleanup.
  #queries = new Map();
  #cacheKeyToSubject = new WeakMap();
  #cacheKeys;
  #refCounts = new RefCounts(DEBUG_REFCOUNTS ? 15_000 : 60_000, k => this.#cleanupCacheKey(k));

  // we are currently only using this for debug logging and should just remove it in the future if that
  // continues to be true
  #finalizationRegistry;
  constructor(client) {
    this.client = client;
    this.logger = client[additionalContext].logger?.child({}, {
      msgPrefix: "Store"
    });
    this.#topLayer = this.#truthLayer;
    this.#cacheKeys = new CacheKeys(this.whereCanonicalizer, this.orderByCanonicalizer, k => {
      if (DEBUG_REFCOUNTS) {
        const cacheKeyType = k.type;
        const otherKeys = k.otherKeys;
        // eslint-disable-next-line no-console
        console.log(`CacheKeys.onCreate(${cacheKeyType}, ${JSON.stringify(otherKeys)})`);
        this.#finalizationRegistry.register(k, () => {
          // eslint-disable-next-line no-console
          console.log(`CacheKey Finalization(${cacheKeyType}, ${JSON.stringify(otherKeys)})`);
        });
      }
      this.#refCounts.register(k);
    });
    setInterval(() => {
      this.#refCounts.gc();
    }, 1000);
    this.#finalizationRegistry = new FinalizationRegistry(cleanupCallback => {
      try {
        cleanupCallback();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Caught an error while running a finalization callback", e);
      }
    });
  }

  /**
   * Called after a key is no longer retained and the timeout has elapsed
   * @param key
   */
  #cleanupCacheKey = key => {
    const subject = this.peekSubject(key);
    if (DEBUG_REFCOUNTS) {
      // eslint-disable-next-line no-console
      console.log(`CacheKey cleaning up (${JSON.stringify({
        closed: subject?.closed,
        observed: subject?.observed
      })})`, JSON.stringify([key.type, ...key.otherKeys], null, 2));
    }
    this.#cacheKeys.remove(key);
    if (process.env.NODE_ENV !== "production") {
      !subject ? process.env.NODE_ENV !== "production" ? invariant(false) : invariant(false) : void 0;
    }
    if (subject) {
      subject.complete();
      this.#cacheKeyToSubject.delete(key);
    }
    this.#queries.get(key)?.dispose();
    this.#queries.delete(key);
  };
  applyAction = (action, args, opts) => {
    return new ActionApplication(this).applyAction(action, args, opts);
  };
  removeLayer(layerId) {
    !(layerId != null) ? process.env.NODE_ENV !== "production" ? invariant(false, "undefined is the reserved layerId for the truth layer") : invariant(false) : void 0;
    // 1. collect all cache keys for a given layerId
    let currentLayer = this.#topLayer;
    const cacheKeys = new Map();
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
        currentEntry ?? createInitEntry(k); // We are going to be pretty lazy here and just re-emit the value.
        // In the future it may benefit us to deep equal check her but I think
        // the subjects are effectively doing this anyway.
        this.peekSubject(k)?.next({
          // eslint-disable-next-line @typescript-eslint/no-misused-spread
          ...(currentEntry ?? createInitEntry(k)),
          isOptimistic: currentEntry?.value !== this.#truthLayer.get(k)?.value
        });
      }
    }
  }
  getCacheKey(type, ...args) {
    return this.#refCounts.register(this.#cacheKeys.get(type, ...args));
  }
  peekSubject = cacheKey => {
    return this.#cacheKeyToSubject.get(cacheKey);
  };
  getSubject = cacheKey => {
    let subject = this.#cacheKeyToSubject.get(cacheKey);
    if (!subject) {
      const initialValue = this.#topLayer.get(cacheKey) ?? createInitEntry(cacheKey);
      subject = new BehaviorSubject({
        // eslint-disable-next-line @typescript-eslint/no-misused-spread
        ...initialValue,
        isOptimistic: initialValue.value !== this.#truthLayer.get(cacheKey)?.value
      });
      this.#cacheKeyToSubject.set(cacheKey, subject);
    }
    return subject;
  };
  canonicalizeWhereClause(where) {
    return this.whereCanonicalizer.canonicalize(where);
  }
  observeObject(apiName, pk, options, subFn) {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    const query = this.getObjectQuery(apiName, pk);
    this.retain(query.cacheKey);
    if (options.mode !== "offline") {
      query.revalidate(options.mode === "force").catch(e => {
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
      }
    };
  }
  observeList(options, subFn) {
    // the ListQuery represents the shared state of the list
    const query = this.getListQuery(options.type, options.where ?? {}, options.orderBy ?? {}, options);
    this.retain(query.cacheKey);
    if (options.mode !== "offline") {
      query.revalidate(options.mode === "force").catch(x => {
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
      }
    };
  }
  peekQuery(cacheKey) {
    return this.#queries.get(cacheKey);
  }
  #getQuery(cacheKey, createQuery) {
    let query = this.peekQuery(cacheKey);
    if (!query) {
      query = createQuery();
      this.#queries.set(cacheKey, query);
    }
    return query;
  }
  getListQuery(def, where, orderBy, opts) {
    const {
      apiName,
      type
    } = def;
    const canonWhere = this.whereCanonicalizer.canonicalize(where);
    const canonOrderBy = this.orderByCanonicalizer.canonicalize(orderBy);
    const listCacheKey = this.getCacheKey("list", type, apiName, canonWhere, canonOrderBy);
    return this.#getQuery(listCacheKey, () => {
      return new ListQuery(this, this.getSubject(listCacheKey), type, apiName, canonWhere, canonOrderBy, listCacheKey, opts);
    });
  }
  getObjectQuery(apiName, pk) {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    const objectCacheKey = this.getCacheKey("object", apiName, pk);
    return this.#getQuery(objectCacheKey, () => new ObjectQuery(this, this.getSubject(objectCacheKey), apiName, pk, objectCacheKey, {
      dedupeInterval: 0
    }));
  }
  getValue(cacheKey) {
    return this.#topLayer.get(cacheKey);
  }
  batch = ({
    optimisticId,
    changes = createChangedObjects()
  }, batchFn) => {
    !(optimisticId === undefined || !!optimisticId) ? process.env.NODE_ENV !== "production" ? invariant(false, "optimistic must be undefined or not falsy") : invariant(false) : void 0;
    let needsLayer = optimisticId !== undefined;
    const batchContext = {
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
        const writeLayer = optimisticId ? this.#topLayer : this.#truthLayer;
        const newValue = new Entry(cacheKey, value, Date.now(), status);
        writeLayer.set(cacheKey, newValue);
        const newTopValue = this.#topLayer.get(cacheKey);
        if (oldTopValue !== newTopValue) {
          this.#cacheKeyToSubject.get(cacheKey)?.next({
            // eslint-disable-next-line @typescript-eslint/no-misused-spread
            ...newValue,
            isOptimistic: newTopValue?.value !== this.#truthLayer.get(cacheKey)?.value
          });
        }
        return newValue;
      },
      read: cacheKey => {
        return optimisticId ? this.#topLayer.get(cacheKey) : this.#truthLayer.get(cacheKey);
      }
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
      changes: batchContext.changes
    };
  };
  invalidateObject(apiName, pk) {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    return this.getObjectQuery(apiName, pk).revalidate(/* force */true);
  }
  async maybeRevalidateQueries(changes, optimisticId) {
    if (changes.isEmpty()) {
      if (process.env.NODE_ENV !== "production") {
        // todo
        this.logger?.child({
          methodName: "maybeRevalidateQueries"
        }).debug("No changes, aborting");
      }
      return;
    }
    if (process.env.NODE_ENV !== "production") {
      // todo
      this.logger?.child({
        methodName: "maybeRevalidateQueries"
      }).debug(DEBUG_ONLY__changesToString(changes), {
        optimisticId
      });
    }
    try {
      const promises = [];
      for (const cacheKey of this.#queries.keys()) {
        const promise = this.peekQuery(cacheKey)?.maybeUpdateAndRevalidate?.(changes, optimisticId);
        if (promise) promises.push(promise);
      }
      await Promise.all(promises);
    } finally {
      if (process.env.NODE_ENV !== "production") {
        // todo
        this.logger?.child({
          methodName: "maybeRevalidateQueries"
        }).debug("in finally", DEBUG_ONLY__changesToString(changes));
      }
    }
  }

  /**
   * @param apiName
   * @param changes The changes we know about / to update
   * @returns
   */
  invalidateObjectType(apiName, changes) {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "invalidateObjectType"
      }).info(changes ? DEBUG_ONLY__changesToString(changes) : void 0);
    }
    const promises = [];
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
  retain(cacheKey) {
    this.#refCounts.retain(cacheKey);
  }
  release(cacheKey) {
    this.#refCounts.release(cacheKey);
  }
}
export async function invalidateList(store, args) {
  const where = store.whereCanonicalizer.canonicalize(args.where ?? {});
  const orderBy = store.orderByCanonicalizer.canonicalize(args.orderBy ?? {});
  const cacheKey = store.getCacheKey("list", args.type.type, args.type.apiName, where, orderBy);
  await store.peekQuery(cacheKey)?.revalidate(true);
}
//# sourceMappingURL=Store.js.map