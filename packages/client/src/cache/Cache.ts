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
import type { Client } from "../Client.js";
import type { CacheKey } from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import { Entry, Layer } from "./Layer.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

export interface Unsubscribable {
  unsubscribe: () => void;
}

export interface ListPayload<T extends ObjectTypeDefinition> {
  listEntry: ListEntry<T>;
  resolvedList: Array<Osdk.Instance<any, never, string> | undefined>;
}

interface BatchContext {
  addedObjects: Set<ObjectCacheKey<any>>;
  modifiedObjects: Set<ObjectCacheKey<any>>;
  modifiedLists: Set<ListCacheKey<any>>;
  createLayerIfNeeded: () => void;
  optimisticWrite: boolean;

  write: <K extends CacheKey<string, any>>(k: K, v: Entry<K>["value"]) => void;
}

interface Options {
  mode: "offline" | "force";
}

export interface ObjectEntry<T extends ObjectTypeDefinition>
  extends Entry<ObjectCacheKey<T>>
{}

export interface ListEntry<T extends ObjectTypeDefinition>
  extends Entry<ListCacheKey<T>>
{}

export interface ObjectCacheKey<T extends ObjectTypeDefinition>
  extends
    CacheKey<
      "object",
      Osdk.Instance<T>
    >
{}

export interface ListCacheKey<T extends ObjectTypeDefinition> extends
  CacheKey<
    "list",
    {
      entries: ObjectCacheKey<T>[];
      // TODO: add pagination
    }
  >
{}

type SubFn<X> = (x: X | undefined) => void;

/*
  Notes:
    - Subjects are one per type per store (by cache key)
    - Data is one per layer per cache key
*/

let cacheKeyNum = 0;
export class Store {
  #cacheKeys = new Trie<CacheKey<string, any>>(false, (x) => {
    return {
      x,
      cacheKeyNum: cacheKeyNum++,
    } as unknown as CacheKey<string, any>;
  });
  #whereCanonicalizer = new WhereClauseCanonicalizer();
  #truthLayer = new Layer(undefined);
  #optimisticLayer: Layer;
  #client: Client;

  #cacheKeyToSubject = new WeakMap<
    CacheKey<string, any>,
    BehaviorSubject<Entry<any> | undefined>
  >();

  constructor(client: Client) {
    this.#client = client;
    this.#optimisticLayer = this.#truthLayer;
  }

  removeLayer(): void {
    this.#optimisticLayer = this.#optimisticLayer.removeLayer();
  }

  protected getSubject = <KEY extends CacheKey<string, any>>(
    cacheKey: KEY,
  ): BehaviorSubject<Entry<KEY> | undefined> => {
    let subject = this.#cacheKeyToSubject.get(cacheKey);
    if (!subject) {
      subject = new BehaviorSubject(this.#optimisticLayer.get(cacheKey));
      this.#cacheKeyToSubject.set(cacheKey, subject);
    }

    return subject;
  };

  public observeObject<T extends ObjectTypeDefinition>(
    type: T,
    pk: PrimaryKeyType<T>,
    options: Options,
    subFn: SubFn<ObjectEntry<T>>,
  ): Unsubscribable {
    const objectCacheKey = this.#getObjectCacheKey(type.apiName, pk);
    const sub = this.getSubject(objectCacheKey)
      .subscribe(subFn);
    if (options.mode === "force") {
      const q = this.#client(type) as ObjectSet<ObjectTypeDefinition>;
      q.fetchOne(pk).then((res) => {
        this.updateObject(res);
      }, (err: unknown) => {
        // eslint-disable-next-line no-console
        console.error("Error fetching object", {
          type,
          pk,
          err,
        });
      });
    }
    return { unsubscribe: () => sub.unsubscribe() };
  }

  public observeList<T extends ObjectTypeDefinition>(
    type: T,
    where: WhereClause<T>,
    options: Options,
    subFn: SubFn<ListPayload<T>>,
  ): Unsubscribable {
    const listCacheKey = this.#getListCacheKey(
      type.apiName,
      this.#whereCanonicalizer.canonicalize(where),
    );
    const subject = this.getSubject(listCacheKey);

    const ret = subject.pipe(
      mergeMap(listEntry => {
        if (listEntry == null) return of(undefined);
        return combineLatest({
          listEntry: of(listEntry),
          resolvedList: combineLatest(
            (listEntry?.value.entries ?? []).map(cacheKey =>
              this.getSubject(cacheKey).pipe(
                map(objectEntry => objectEntry?.value),
              )
            ),
          ),
        }).pipe(map(x => x.listEntry == null ? undefined : x));
      }),
      // like throttle but returns the tail
      auditTime(0),
    ).subscribe(subFn);

    return { unsubscribe: () => ret.unsubscribe() };
  }

  public updateObject<T extends ObjectTypeDefinition>(
    obj: Osdk.Instance<T>,
    optimistic = true,
  ): Osdk.Instance<T> {
    return this.#batch({ optimistic }, (batch) => {
      return this.#updateObject(obj, batch);
    }).retVal;
  }

  public getObject<T extends ObjectTypeDefinition>(
    type: T,
    pk: string | number,
  ): Osdk.Instance<T> | undefined {
    const objectCacheKey = this.#getObjectCacheKey(type.apiName, pk);
    const objEntry = this.#optimisticLayer.get(objectCacheKey);
    return objEntry?.value as Osdk.Instance<T> | undefined;
  }

  #getObjectCacheKey<T extends ObjectTypeDefinition>(
    apiName: T["apiName"],
    pk: PrimaryKeyType<T>,
  ): ObjectCacheKey<T> {
    return this.#cacheKeys.lookupArray([
      "object",
      apiName,
      pk,
    ]) as ObjectCacheKey<T>;
  }

  #getListCacheKey<T extends ObjectTypeDefinition>(
    apiName: T["apiName"],
    where: Canonical<WhereClause<T>>,
  ): ListCacheKey<T> {
    return this.#cacheKeys.lookupArray([
      "list",
      apiName,
      where,
    ]) as ListCacheKey<T>;
  }

  #updateObject<T extends ObjectTypeDefinition>(
    obj: Osdk.Instance<T>,
    batch: BatchContext,
  ): Osdk.Instance<T> {
    const objectCacheKey = this.#getObjectCacheKey(
      obj.$apiName,
      obj.$primaryKey,
    );
    const existing = this.#optimisticLayer.get(objectCacheKey) as
      | Osdk.Instance<T>
      | undefined;
    if (existing && deepEqual(obj, existing)) {
      return existing;
    }

    batch.write(objectCacheKey, obj);

    if (existing) {
      batch.modifiedObjects.add(objectCacheKey);
    } else {
      batch.addedObjects.add(objectCacheKey);
    }

    return obj;
  }

  #batch = <X>(
    { optimistic }: { optimistic: boolean },
    batchFn: (batchContext: BatchContext) => X,
  ) => {
    let layerCreated = false;
    const batchContext: BatchContext = {
      addedObjects: new Set(),
      modifiedObjects: new Set(),
      modifiedLists: new Set(),
      createLayerIfNeeded: () => {
        if (!layerCreated) {
          this.#optimisticLayer = this.#optimisticLayer.addLayer();
          layerCreated = true;
        }
      },
      optimisticWrite: optimistic,
      write: (cacheKey, value) => {
        if (optimistic) batchContext.createLayerIfNeeded();
        const writeLayer = optimistic
          ? this.#optimisticLayer
          : this.#truthLayer;
        const entry = {
          cacheKey,
          value,
          lastUpdated: Date.now(),
        };
        writeLayer.set(cacheKey, entry);

        this.#cacheKeyToSubject.get(cacheKey)?.next(entry);
      },
    };

    const retVal = batchFn(batchContext);

    return { batchResult: batchContext, retVal: retVal };
  };

  public updateList<T extends ObjectTypeDefinition>(
    type: T,
    where: WhereClause<T>,
    values: Osdk.Instance<T>[],
    optimistic = true,
  ): void {
    this.#batch({ optimistic }, (b) => {
      this.#updateList(
        type,
        this.#whereCanonicalizer.canonicalize(where),
        values,
        b,
      );
    });
  }

  #updateList<T extends ObjectTypeDefinition>(
    type: T,
    where: Canonical<WhereClause<T>>,
    values: Array<Osdk.Instance<T> | ObjectEntry<T>>,
    batch: BatchContext,
  ): void {
    // update the cache for any object that has changed
    // and save the mapped values to return
    const mappedValues = values.map(v => {
      if (v instanceof Entry) return v.cacheKey;

      this.#updateObject(v, batch);
      return this.#getObjectCacheKey(v.$apiName, v.$primaryKey);
    });

    const listCacheKey = this.#getListCacheKey(type.apiName, where);

    // update the list cache
    const existingList = this.#optimisticLayer.get(listCacheKey);
    if (existingList && deepEqual(existingList.value, mappedValues)) {
      return;
    }

    batch.write(listCacheKey, { entries: mappedValues });

    return undefined as any;
  }
}
