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
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import { Trie } from "@wry/trie";
import { BehaviorSubject } from "rxjs";
import invariant from "tiny-invariant";
import type { ActionSignatureFromDef } from "../actions/applyAction.js";
import type { Client } from "../Client.js";
import type { CacheKey } from "./CacheKey.js";
import type { Entry } from "./Layer.js";
import { Layer } from "./Layer.js";
import type {
  ListCacheKey,
  ListPayload,
  ListQueryOptions,
} from "./ListQuery.js";
import { isListCacheKey, ListQuery } from "./ListQuery.js";
import type { ObjectCacheKey, ObjectEntry } from "./ObjectQuery.js";
import { ObjectQuery } from "./ObjectQuery.js";
import type { Query } from "./Query.js";
import type { SubFn } from "./types.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

/*
    Work still to do:
    - [x] testing for optimistic writes
    - [x] automatic invalidation of actions
    - [ ] links
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
  addedObjects: Set<ObjectCacheKey>;
  modifiedObjects: Set<ObjectCacheKey>;
  modifiedLists: Set<ListCacheKey>;
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

interface ObserveOptions {
  mode?: "offline" | "force";
}

interface UpdateOptions {
  optimisticId?: unknown;
}

export interface StorageData<T> {
  data: T | undefined;
}

interface OptimisticUpdateContext {
  updateObject: (value: Osdk.Instance<ObjectTypeDefinition>) => this;
}

export interface ApplyActionOptions {
  optimisticUpdate?: (ctx: OptimisticUpdateContext) => void;
}

/*
  Notes:
    - Subjects are one per type per store (by cache key)
    - Data is one per layer per cache key
*/

export class Store {
  #cacheKeys = new Trie<CacheKey<string, any, any>>(false, (keys) => {
    return { type: keys[0], otherKeys: keys.slice(1) } as unknown as CacheKey<
      string,
      any,
      any
    >;
  });
  _whereCanonicalizer: WhereClauseCanonicalizer =
    new WhereClauseCanonicalizer();
  _truthLayer: Layer = new Layer(undefined, undefined);
  _topLayer: Layer;
  _client: Client;

  queries: Map<CacheKey<string, any, any>, Query<any, any, any>> = new Map();

  #cacheKeyToSubject = new WeakMap<
    CacheKey<string, any, any>,
    BehaviorSubject<Entry<any>>
  >();

  #cacheKeyFactories = new Map<string, (...args: any[]) => CacheKey>();

  constructor(client: Client) {
    this._client = client;
    this._topLayer = this._truthLayer;
    this.registerCacheKeyFactory<ObjectCacheKey>(
      "object",
      (apiName, pk) =>
        this.#cacheKeys.lookupArray(["object", apiName, pk]) as ObjectCacheKey,
    );
    this.registerCacheKeyFactory<ListCacheKey>(
      "list",
      (apiName, where) =>
        this.#cacheKeys.lookupArray([
          "list",
          apiName,
          this._whereCanonicalizer.canonicalize(where),
        ]) as ListCacheKey,
    );
  }

  applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
    opts?: ApplyActionOptions,
  ) => Promise<unknown> = (action, args, { optimisticUpdate } = {}) => {
    const optimisticId = optimisticUpdate ? Object.create(null) : undefined;
    if (optimisticUpdate) {
      this._batch({ optimisticId }, () => {
        const self = this;
        optimisticUpdate({
          updateObject(value: Osdk.Instance<ObjectTypeDefinition>) {
            const query = self.getObjectQuery(
              value.$apiName,
              value.$primaryKey,
            );

            self._batch({ optimisticId }, (batch) => {
              return query.writeToStore(value, "loading", batch);
            }).retVal.value;

            return this;
          },
        });
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return this._client(action)
      .applyAction(args as any, { $returnEdits: true })
      .then(
        (value: ActionEditResponse) => {
          if (value.type === "edits") {
            // TODO we need an update for deletes
            for (const q of [value.addedObjects, value.modifiedObjects]) {
              if (!q) continue;
              for (const o of q) {
                this.invalidateObject(o.objectType, o.primaryKey);
              }
            }
          } else {
            for (const apiName of value.editedObjectTypes) {
              this.invalidateList(apiName.toString(), {});
            }
          }
          return value;
        },
      ).finally(() => {
        if (optimisticId) {
          this.removeLayer(optimisticId);
        }
      });
  };

  registerCacheKeyFactory<K extends CacheKey>(
    type: K["type"],
    factory: (...args: K["__cacheKey"]["args"]) => K,
  ): void {
    this.#cacheKeyFactories.set(type, factory);
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
        this.#cacheKeyToSubject.get(k)?.next(
          currentEntry ?? {
            cacheKey: k,
            status: "init",
            value: undefined,
            lastUpdated: 0,
          },
        );
      }
    }
  }

  getCacheKey<K extends CacheKey<string, any, any>>(
    type: K["type"],
    ...args: K["__cacheKey"]["args"]
  ): K {
    const factory = this.#cacheKeyFactories.get(type);
    invariant(factory, `no cache key factory for type "${type}"`);
    return factory(...args) as K;
  }

  getSubject = <KEY extends CacheKey<string, any, any>>(
    cacheKey: KEY,
  ): BehaviorSubject<Entry<KEY>> => {
    let subject = this.#cacheKeyToSubject.get(cacheKey);
    if (!subject) {
      const initialValue: Entry<KEY> = this._topLayer.get(cacheKey) ?? {
        cacheKey,
        status: "init",
        value: undefined,
        lastUpdated: 0,
      };
      subject = new BehaviorSubject(initialValue);
      this.#cacheKeyToSubject.set(cacheKey, subject);
    }

    return subject;
  };

  public observeObject<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
    options: ObserveOptions,
    subFn: SubFn<ObjectEntry>,
  ): Unsubscribable {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const query = this.getObjectQuery(apiName, pk);
    query.retain();

    if (options.mode !== "offline") {
      void query.revalidate(options.mode === "force");
    }
    const ret = query.subscribe(subFn);

    return ret;
  }

  public peekQuery<K extends CacheKey<string, any, any>>(
    cacheKey: K,
  ): K["__cacheKey"]["query"] | undefined {
    return this.queries.get(cacheKey) as K["__cacheKey"]["query"] | undefined;
  }

  #getQuery<K extends CacheKey>(
    cacheKey: K,
    createQuery: () => K["__cacheKey"]["query"],
  ): K["__cacheKey"]["query"] {
    let query = this.peekQuery(cacheKey);
    if (!query) {
      query = createQuery();
      this.queries.set(cacheKey, query);
    }
    return query;
  }

  public getListQuery<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    where: WhereClause<T>,
    opts: ListQueryOptions,
    peek = false,
  ): ListQuery {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const canonWhere = this._whereCanonicalizer.canonicalize(where);
    const listCacheKey = this.getCacheKey<ListCacheKey>(
      "list",
      apiName,
      canonWhere,
    );

    return this.#getQuery(listCacheKey, () => {
      return new ListQuery(this, apiName, canonWhere, listCacheKey, opts);
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
        apiName,
        pk,
        objectCacheKey,
        { dedupeInterval: 0 },
      ));
  }

  public observeList<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    where: WhereClause<T>,
    options: ObserveOptions & ListQueryOptions,
    subFn: SubFn<ListPayload>,
  ): Unsubscribable {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const query = this.getListQuery(apiName, where, options);
    query.retain();

    if (options.mode !== "offline") {
      void query.revalidate(options.mode === "force");
    }
    const ret = query.subscribe(subFn);

    return ret;
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
    const objEntry = this._topLayer.get(objectCacheKey);
    return objEntry?.value as Osdk.Instance<T> | undefined;
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

        return newValue;
      },
      read: (cacheKey) => {
        return optimisticId
          ? this._topLayer.get(cacheKey)
          : this._truthLayer.get(cacheKey);
      },
    };

    const retVal = batchFn(batchContext);

    return { batchResult: batchContext, retVal: retVal };
  };

  public invalidateObject<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
  ): void {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    // inevitably we will want an internal version of this and a "public" one
    // so we can avoid extra requests

    const query = this.getObjectQuery(apiName, pk);

    void query.revalidate(true);

    // potentially trigger updates of the lists that included this object?
    // TODO
    // could we detect that a list WOULD include it?
  }

  public invalidateObjectType<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
  ): void {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    for (const [cacheKey, v] of this._truthLayer.entries()) {
      if (isListCacheKey(cacheKey, apiName)) {
        void this.peekQuery(cacheKey)?.revalidate(true);
      }
    }
  }

  public invalidateList<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    where: WhereClause<T>,
  ): void {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const cacheKey = this.getCacheKey<ListCacheKey>(
      "list",
      apiName,
      where,
    );

    void this.peekQuery(cacheKey)?.revalidate(true);
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

    return this._batch({ optimisticId }, (batch) => {
      return query.writeToStore(value, "loaded", batch);
    }).retVal.value;
  }

  public updateList<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    where: WhereClause<T>,
    values: Osdk.Instance<T>[],
    { optimisticId }: UpdateOptions = {},
    opts: ListQueryOptions = { dedupeInterval: 0 },
  ): void {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }

    const query = this.getListQuery(apiName, where, opts);

    this._batch({ optimisticId }, (b) => {
      query.updateList(values, false, "loaded", b);
    });
  }
}
