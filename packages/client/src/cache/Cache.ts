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
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import { Trie } from "@wry/trie";
import deepEqual from "fast-deep-equal";

import { BehaviorSubject, combineLatest, of } from "rxjs";
import { auditTime, map, mergeMap } from "rxjs/operators";
import invariant from "tiny-invariant";
import type { Client } from "../Client.js";
import type { CacheKey } from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import { Entry, Layer } from "./Layer.js";
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

type Status = "init" | "loading" | "loaded" | "error";

export interface ListPayload<T extends ObjectTypeDefinition> {
  listEntry: ListEntry<T>;
  resolvedList: Array<Osdk.Instance<any, never, string> | undefined>;
  fetchMore: () => Promise<unknown>;
  status: Status;
}

interface BatchContext {
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

export interface ObjectEntry<T extends ObjectTypeDefinition>
  extends Entry<ObjectCacheKey<T>>
{}

export interface ListEntry<T extends ObjectTypeDefinition>
  extends Entry<ListCacheKey<T>>
{}

interface StorageData<T> {
  // status: "loading" | "loaded" | "error" | undefined;
  data: T | undefined;
}

interface ObjectStorageData<T extends ObjectTypeDefinition>
  extends StorageData<Osdk.Instance<T>>
{
}

interface ListStorageData<T extends ObjectTypeDefinition>
  extends StorageData<ObjectCacheKey<T>[]>
{
}

export interface ObjectCacheKey<T extends ObjectTypeDefinition>
  extends
    CacheKey<
      "object",
      ObjectStorageData<T>,
      ObjectQuery<T>
    >
{}

export interface ListCacheKey<T extends ObjectTypeDefinition> extends
  CacheKey<
    "list",
    ListStorageData<T>,
    ListQuery<T>
  > //
{}

type SubFn<X> = (x: X | undefined) => void;

interface QueryOptions {
  dedupeInterval?: number;
}

abstract class Query<
  KEY extends CacheKey<string, any, any>,
  PAYLOAD,
  O extends QueryOptions,
> {
  lastFetchStarted?: number;
  pendingFetch?: Promise<unknown>;
  retainCount: number = 0;
  options: O;
  cacheKey: KEY;
  store: Store;
  abortController?: AbortController;

  constructor(store: Store, opts: O, cacheKey: KEY) {
    this.options = opts;
    this.cacheKey = cacheKey;
    this.store = store;
  }

  // lastResult(): void {}

  retain(): void {}
  release(opts: { gcAfter: number }): void {}

  revalidate(force?: boolean): Promise<unknown> {
    if (force) {
      this.abortController?.abort();
    }

    // if we are pending the first page we can just ignore this
    if (this.pendingFetch) {
      return this.pendingFetch;
    }

    if (
      (this.options.dedupeInterval ?? 0) > 0 && (
        this.lastFetchStarted != null
        && Date.now() - this.lastFetchStarted < (this.options.dedupeInterval
            ?? 0)
      )
    ) {
      return Promise.resolve();
    }

    this._preFetch();

    this.lastFetchStarted = Date.now();
    this.pendingFetch = this._fetch().finally(() => {
      this.pendingFetch = undefined;
    });

    return Promise.resolve();
  }

  abstract subscribe(subFn: SubFn<PAYLOAD>): Unsubscribable;

  _preFetch(): void {}
  abstract _fetch(): Promise<unknown>;

  getSubject(): BehaviorSubject<Entry<KEY> | undefined> {
    return this.store.getSubject(this.cacheKey);
  }

  setStatus(
    status: Status,
    batch: BatchContext,
  ): void {
    const existing = this.store._topLayer.get(this.cacheKey);
    if (existing?.value.status === status) return;

    batch.write(this.cacheKey, {
      ...existing?.value ?? { data: undefined },
    }, status);
  }
}

class ObjectQuery<T extends ObjectTypeDefinition> extends Query<
  ObjectCacheKey<T>,
  ObjectEntry<T>,
  QueryOptions
> {
  #type: ObjectTypeDefinition;
  #pk: string | number | boolean;
  constructor(
    store: Store,
    type: ObjectTypeDefinition,
    pk: PrimaryKeyType<T>,
    cacheKey: ObjectCacheKey<T>,
    opts: QueryOptions,
  ) {
    super(store, opts, cacheKey);
    this.#type = type;
    this.#pk = pk;
  }

  public subscribe(
    subFn: SubFn<ObjectEntry<T>>,
  ): Unsubscribable {
    const sub = this.getSubject().subscribe(subFn);
    return { unsubscribe: () => sub.unsubscribe() };
  }

  async _fetch(): Promise<void> {
    const objectSet = this.store._client(this.#type) as ObjectSet<
      ObjectTypeDefinition
    >;
    const obj = await objectSet.fetchOne(this.#pk);
    this.store._batch({}, (batch) => {
      this.writeToStore(obj as Osdk.Instance<T>, batch);
    });
  }

  writeToStore(
    data: Osdk.Instance<T>,
    batch: BatchContext,
  ): Osdk.Instance<T> {
    const entry = this.store._topLayer.get(this.cacheKey);

    if (entry && deepEqual(data, entry.value.data)) {
      // must do a "full write" here so that the lastUpdated is updated
      batch.write(this.cacheKey, { data }, "loaded");

      return entry.value.data as Osdk.Instance<T>;
    }

    batch.write(this.cacheKey, { data }, "loaded");

    if (entry) {
      batch.modifiedObjects.add(this.cacheKey);
    } else {
      batch.addedObjects.add(this.cacheKey);
    }

    return data;
  }
}

interface ListQueryOptions extends QueryOptions {
  pageSize?: number;
}

class ListQuery<T extends ObjectTypeDefinition> extends Query<
  ListCacheKey<T>,
  ListPayload<T>,
  ListQueryOptions
> {
  // pageSize?: number; // this is the internal page size. we need to track this properly
  #client: Client;
  #type: ObjectTypeDefinition;
  #whereClause: Canonical<WhereClause<ObjectTypeDefinition>>;

  // this represents the minimum number of results we need to load if we revalidate
  #minNumResults = 0;
  #store: Store;

  #nextPageToken?: string;

  pendingPageFetch?: Promise<unknown>;

  entries: ObjectCacheKey<T>[] | undefined;

  constructor(
    store: Store,
    type: ObjectTypeDefinition,
    whereClause: Canonical<WhereClause<ObjectTypeDefinition>>,
    cacheKey: ListCacheKey<T>,
    opts: ListQueryOptions,
  ) {
    super(store, opts, cacheKey);
    this.#client = store._client;
    this.#type = type;
    this.#whereClause = whereClause;
    this.#store = store;
  }

  subscribe(subFn: SubFn<ListPayload<T>>) {
    const ret = this.#store.getSubject(this.cacheKey).pipe(
      mergeMap(listEntry => {
        if (listEntry == null) return of(undefined);
        return combineLatest({
          listEntry: of(listEntry),
          resolvedList: combineLatest(
            (listEntry?.value.data ?? []).map(cacheKey =>
              this.#store.getSubject(cacheKey).pipe(
                map(objectEntry => objectEntry?.value.data),
              )
            ),
          ),
          fetchMore: of(this.fetchMore),
          status: of(listEntry.status),
        }).pipe(map(x => x.listEntry == null ? undefined : x));
      }),
      // like throttle but returns the tail
      auditTime(0),
    ).subscribe(subFn);

    return { unsubscribe: (): void => ret.unsubscribe() };
  }

  _preFetch(): void {
    this.#nextPageToken = undefined;
  }

  async _fetch(): Promise<void> {
    const objectSet =
      (this.#client(this.#type) as ObjectSet<ObjectTypeDefinition>)
        .where(this.#whereClause);

    while (true) {
      await this.#fetchPageAndUpdate(
        objectSet,
        "loading",
        this.abortController?.signal,
      );

      const count = this.#store._truthLayer.get(this.cacheKey)?.value.data
        ?.length;

      invariant(count != null);

      if (count > this.#minNumResults || this.#nextPageToken == null) {
        // this.updateList
        break;
      }
    }
    this.store._batch({}, (batch) => {
      this.setStatus("loaded", batch);
    });

    return Promise.resolve();
  }

  fetchMore = (): Promise<unknown> => {
    if (this.pendingPageFetch) {
      return this.pendingPageFetch;
    }

    if (this.pendingFetch) {
      this.pendingPageFetch = new Promise(async (res) => {
        await this.pendingFetch;
        res(this.fetchMore());
      });
      return this.pendingPageFetch;
    }

    if (this.#nextPageToken == null) {
      return Promise.resolve();
    }

    this.store._batch({}, (batch) => {
      this.setStatus("loading", batch);
    });

    const objectSet =
      (this.#client(this.#type) as ObjectSet<ObjectTypeDefinition>)
        .where(this.#whereClause);

    this.pendingFetch = this.#fetchPageAndUpdate(
      objectSet,
      "loaded",
      this.abortController?.signal,
    ).finally(() => {
      this.pendingPageFetch = undefined;
    });
    return this.pendingFetch;
  };

  async #fetchPageAndUpdate(
    objectSet: ObjectSet,
    status: Status,
    signal: AbortSignal | undefined,
  ) {
    const append = this.#nextPageToken != null;
    const { data, nextPageToken } = await objectSet.fetchPage({
      $nextPageToken: this.#nextPageToken,
      $pageSize: this.options.pageSize,
    });

    if (signal?.aborted) {
      return;
    }

    this.#nextPageToken = nextPageToken;

    this.#store._batch({}, (batch) => {
      return this.updateList(data, append, status, batch);
    });

    return { data };
  }

  #updateObjects(
    values: Array<Osdk.Instance<T> | ObjectEntry<T>>,
    batch: BatchContext,
  ) {
    return values.map(v => {
      if (v instanceof Entry) return v.cacheKey;

      this.#store.getObjectQuery(this.#type, v.$primaryKey as string | number)
        .writeToStore(v, batch);
      // this.#store.getObject(this.#type, v.$primaryKey as string | number); // FIXME types
      return this.#store._getObjectCacheKey(v.$apiName, v.$primaryKey);
    });
  }

  updateList(
    values: Array<Osdk.Instance<T> | ObjectEntry<T>>,
    append: boolean,
    status: Status,
    batch: BatchContext,
  ): number {
    // update the cache for any object that has changed
    // and save the mapped values to return
    let data = this.#updateObjects(values, batch);

    // update the list cache
    const existingList = this.#store._topLayer.get(this.cacheKey);
    if (
      !append && existingList && deepEqual(existingList.value.data, data)
    ) {
      if (existingList.status === status) {
        this.setStatus(status, batch);
      }
      return existingList.value.data!.length;
    }

    if (append) {
      data = [...existingList?.value.data ?? [], ...data];
    }

    batch.write(this.cacheKey, { data }, status);
    batch.modifiedLists.add(this.cacheKey);

    return data.length;
  }

  // appendList(
  //   values: Array<Osdk.Instance<T> | ObjectEntry<T>>,
  //   batch: BatchContext,
  // ): void {
  //   // update the cache for any object that has changed
  //   // and save the mapped values to return
  //   const mappedValues = this.#updateObjects(values, batch);

  //   // update the list cache
  //   const existingList = this.#store._topLayer.get(this.cacheKey);
  //   if (existingList) {
  //     const newEntries = [
  //       ...existingList.value.entries,
  //       ...mappedValues,
  //     ];

  //     batch.write(this.cacheKey, { entries: newEntries });
  //     batch.modifiedLists.add(this.cacheKey);
  //     return;
  //   } else {
  //     batch.write(this.cacheKey, { entries: mappedValues });
  //   }
  // }
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
