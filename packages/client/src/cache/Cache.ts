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
import { Trie } from "@wry/trie";
import { BehaviorSubject } from "rxjs";
import invariant from "tiny-invariant";
import type { Client } from "../Client.js";
import type { CacheKey } from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import type { Entry } from "./Layer.js";
import { Layer } from "./Layer.js";
import type {
  ListCacheKey,
  ListPayload,
  ListQueryOptions,
} from "./ListQuery.js";
import { ListQuery } from "./ListQuery.js";
import type { ObjectCacheKey, ObjectEntry } from "./ObjectQuery.js";
import { ObjectQuery } from "./ObjectQuery.js";
import type { Query } from "./Query.js";
import type { SubFn } from "./types.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

/*
    Work still to do:
    - [x] testing for optimistic writes
    - [ ] add pagination
    - [ ] sub-selection support
    - [ ] interfaces
    - [ ] setup defaults
*/

export interface Unsubscribable {
  unsubscribe: () => void;
}

export type Status = "init" | "loading" | "loaded" | "error";

export interface BatchContext {
  addedObjects: Set<ObjectCacheKey<any>>;
  modifiedObjects: Set<ObjectCacheKey<any>>;
  modifiedLists: Set<ListCacheKey<any>>;
  createLayerIfNeeded: () => void;
  optimisticWrite: boolean;

  write: <K extends CacheKey<string, any, any>>(
    k: K,
    v: Entry<K>["value"],
    status: Entry<K>["status"],
  ) => void;
}

interface ObserveOptions {
  mode: "offline" | "force";
}

interface UpdateOptions {
  optimisticId?: unknown;
}

export interface StorageData<T> {
  // status: "loading" | "loaded" | "error" | undefined;
  data: T | undefined;
}

/*
  Notes:
    - Subjects are one per type per store (by cache key)
    - Data is one per layer per cache key
*/

let cacheKeyNum = 0;
export class Store {
  #cacheKeys = new Trie<CacheKey<string, any, any>>(false, (keys) => {
    if (process.env.NODE_ENV === "production") {
      return {} as unknown as CacheKey<string, any, any>;
    } else {
      return {
        keys,
        cacheKeyNum: cacheKeyNum++,
      } as unknown as CacheKey<string, any, any>;
    }
  });
  _whereCanonicalizer: WhereClauseCanonicalizer =
    new WhereClauseCanonicalizer();
  _truthLayer: Layer = new Layer(undefined, undefined);
  _topLayer: Layer;
  _client: Client;

  queries: Map<CacheKey<string, any, any>, Query<any, any, any>> = new Map();

  #cacheKeyToSubject = new WeakMap<
    CacheKey<string, any, any>,
    BehaviorSubject<Entry<any> | undefined>
  >();

  constructor(client: Client) {
    this._client = client;
    this._topLayer = this._truthLayer;
  }

  removeLayer(layerId: unknown): void {
    invariant(
      layerId != null,
      "undefined is the reserved layerId for the truth layer",
    );
    // 1. collect all cache keys for a given layerId
    let currentLayer: Layer | undefined = this._topLayer;
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
    this._topLayer = this._topLayer.removeLayer(layerId);

    // 3. check each cache key to see if it is different in the new chain
    for (const [k, oldEntry] of cacheKeys) {
      const currentEntry = this._topLayer.get(k);

      // 4. if different, update the subject
      if (oldEntry !== currentEntry) {
        // We are going to be pretty lazy here and just re-emit the value.
        // In the future it may benefit us to deep equal check her but I think
        // the subjects are effectively doing this anyway.
        this.#cacheKeyToSubject.get(k)?.next(currentEntry);
      }
    }
  }

  getSubject = <KEY extends CacheKey<string, any, any>>(
    cacheKey: KEY,
  ): BehaviorSubject<Entry<KEY> | undefined> => {
    let subject = this.#cacheKeyToSubject.get(cacheKey);
    if (!subject) {
      subject = new BehaviorSubject(this._topLayer.get(cacheKey));
      this.#cacheKeyToSubject.set(cacheKey, subject);
    }

    return subject;
  };

  public observeObject<T extends ObjectTypeDefinition>(
    type: T,
    pk: PrimaryKeyType<T>,
    options: ObserveOptions,
    subFn: SubFn<ObjectEntry<T>>,
  ): Unsubscribable {
    const query = this.getObjectQuery(type, pk);
    query.retain();
    const ret = query.subscribe(subFn);

    void query.revalidate(options.mode === "force");
    return ret;
  }

  public getListQuery<T extends ObjectTypeDefinition>(
    type: T,
    where: WhereClause<T>,
    opts: ListQueryOptions,
  ): ListQuery<T> {
    const canonWhere = this._whereCanonicalizer.canonicalize(where);
    const listCacheKey = this._getListCacheKey(
      type.apiName,
      canonWhere,
    );

    const query = this.queries.get(listCacheKey) as ListQuery<T> | undefined
      ?? new ListQuery(this, type, canonWhere, listCacheKey, opts);
    this.queries.set(listCacheKey, query);
    return query;
  }

  public getObjectQuery<T extends ObjectTypeDefinition>(
    type: T,
    pk: PrimaryKeyType<T>,
  ): ObjectQuery<T> {
    const objectCacheKey = this._getObjectCacheKey(type["apiName"], pk);

    const query = this.queries.get(objectCacheKey) as ObjectQuery<T> | undefined
      ?? new ObjectQuery(
        this,
        type,
        pk,
        objectCacheKey,
        { dedupeInterval: 0 },
      );
    this.queries.set(objectCacheKey, query);

    return query;
  }

  public observeList<T extends ObjectTypeDefinition>(
    type: T,
    where: WhereClause<T>,
    options: ObserveOptions & ListQueryOptions,
    subFn: SubFn<ListPayload<T>>,
  ): Unsubscribable {
    const query = this.getListQuery(type, where, options);
    query.retain();
    const ret = query.subscribe(subFn);
    void query.revalidate(options.mode === "force");

    return ret;
  }

  public updateObject<T extends ObjectTypeDefinition>(
    type: T,
    value: Osdk.Instance<T>,
    { optimisticId }: UpdateOptions = {},
  ): Osdk.Instance<T> {
    const query = this.getObjectQuery(type, value.$primaryKey);

    return this._batch({ optimisticId }, (batch) => {
      return query.writeToStore(value, batch);
    }).retVal;
  }

  public getObject<T extends ObjectTypeDefinition>(
    type: T,
    pk: string | number,
  ): Osdk.Instance<T> | undefined {
    const objectCacheKey = this._getObjectCacheKey(type.apiName, pk);
    const objEntry = this._topLayer.get(objectCacheKey);
    return objEntry?.value as Osdk.Instance<T> | undefined;
  }

  _getObjectCacheKey<T extends ObjectTypeDefinition>(
    apiName: T["apiName"],
    pk: PrimaryKeyType<T>,
  ): ObjectCacheKey<T> {
    return this.#cacheKeys.lookupArray([
      "object",
      apiName,
      pk,
    ]) as ObjectCacheKey<T>;
  }

  _getListCacheKey<T extends ObjectTypeDefinition>(
    apiName: T["apiName"],
    where: Canonical<WhereClause<T>>,
  ): ListCacheKey<T> {
    return this.#cacheKeys.lookupArray([
      "list",
      apiName,
      where,
    ]) as ListCacheKey<T>;
  }

  _batch = <X>(
    { optimisticId }: { optimisticId?: unknown },
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
      addedObjects: new Set(),
      modifiedObjects: new Set(),
      modifiedLists: new Set(),
      createLayerIfNeeded: () => {
        if (needsLayer) {
          this._topLayer = this._topLayer.addLayer(optimisticId);
          needsLayer = false;
        }
      },
      optimisticWrite: !!optimisticId,
      write: (cacheKey, value, status) => {
        const oldTopValue = this._topLayer.get(cacheKey);

        if (optimisticId) batchContext.createLayerIfNeeded();

        const writeLayer = optimisticId
          ? this._topLayer
          : this._truthLayer;
        const newValue = {
          cacheKey,
          value,
          lastUpdated: Date.now(),
          status,
        };

        writeLayer.set(cacheKey, newValue);

        const newTopValue = this._topLayer.get(cacheKey);

        if (oldTopValue !== newTopValue) {
          this.#cacheKeyToSubject.get(cacheKey)?.next(newValue);
        }
      },
    };

    const retVal = batchFn(batchContext);

    return { batchResult: batchContext, retVal: retVal };
  };

  public invalidateObject<T extends ObjectTypeDefinition>(
    type: T,
    pk: PrimaryKeyType<T>,
  ): void {
    // inevitably we will want an internal version of this and a "public" one
    // so we can avoid extra requests

    const query = this.getObjectQuery(type, pk);

    const objectCacheKey = this._getObjectCacheKey(type.apiName, pk);

    // mark existing object as stale
    const existingObj = this._topLayer.get(objectCacheKey);
    if (existingObj) {
      this.getSubject(objectCacheKey).next({
        // sadly the ts-eslint rules continue to create false flags and we are safely spreading because
        // its just an interface.
        // eslint-disable-next-line @typescript-eslint/no-misused-spread
        ...existingObj,
        status: "loading",
      });
    }

    void query.revalidate(true);

    // potentially trigger updates of the lists that included this object?
    // TODO
    // could we detect that a list WOULD include it?
  }

  public updateList<T extends ObjectTypeDefinition>(
    type: T,
    where: WhereClause<T>,
    values: Osdk.Instance<T>[],
    { optimisticId }: UpdateOptions = {},
    opts: ListQueryOptions = { dedupeInterval: 0 },
  ): void {
    const query = this.getListQuery(type, where, opts);

    this._batch({ optimisticId }, (b) => {
      query.updateList(values, false, "loaded", b);
    });
  }
}
