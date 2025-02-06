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
  ObjectOrInterfaceDefinition,
  Osdk,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import { Trie } from "@wry/trie";
import deepEqual from "fast-deep-equal";
import { Subject } from "rxjs";
import type { Client } from "../Client.js";
import type { CacheKey, ListCacheKey, ObjectCacheKey } from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import { Layer } from "./Layer.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

interface TheRealDeal {
  observeAggregation: () => {
    loading: boolean;
    data: any;
  };
  observeList: () => void;
  observeObject: () => void;
}

interface Observation {
  type: "object" | "list" | "aggregation";
  apiName: string;
  where: WhereClause<any>;
}

interface BatchResult {
  addedObjects: Map<ObjectCacheKey<any>, Osdk.Instance<any>>;
  modifiedObjects: Map<ObjectCacheKey<any>, Osdk.Instance<any>>;
  needsLayer: boolean;
}

function createBatchResult(): BatchResult {
  return {
    addedObjects: new Map(),
    modifiedObjects: new Map(),
    needsLayer: true,
  };
}

export interface ObservableObject<T extends ObjectOrInterfaceDefinition> {
  subscribe: (fn: (value: Osdk.Instance<T>) => void) => () => void;
}

class ObservableObjectImpl<T extends ObjectOrInterfaceDefinition> {
  lastValue?: Osdk.Instance<T>;

  constructor(
    private subject: Subject<Osdk.Instance<T>>,
    lastValue?: Osdk.Instance<T>,
  ) {
    this.lastValue = lastValue;
  }

  subscribe = (fn: (value: Osdk.Instance<T>) => void) => {
    const sub = this.subject.subscribe(fn);
    return () => sub.unsubscribe();
  };
}

interface Options {
}

interface ObjectEntry {
  value: Osdk.Instance<any>;
  lastUpdated: number;
}

let count = 0;
export class Store {
  #cacheKeys = new Trie<CacheKey<string, any>>(false, (x) => {
    return {
      x,
      count: count++,
    } as unknown as CacheKey<string, any>;
  });
  #whereCanonicalizer = new WhereClauseCanonicalizer();
  #truthLayer = new Layer(undefined);
  #optimisticLayer: Layer;
  #client: Client;

  #cachedKeyToSubject = new WeakMap<CacheKey<string, any>, Subject<any>>();

  constructor(client: Client) {
    this.#client = client;
    this.#optimisticLayer = this.#truthLayer;
  }

  #getSubject<T>(cacheKey: CacheKey<string, T>): Subject<T> {
    let subject = this.#cachedKeyToSubject.get(cacheKey);
    if (!subject) {
      subject = new Subject();
      this.#cachedKeyToSubject.set(cacheKey, subject);
    }
    return subject;
  }

  public observeObject<T extends ObjectOrInterfaceDefinition>(
    type: T,
    pk: PrimaryKeyType<T>,
    options: Options,
  ): ObservableObject<T> {
    const objectCacheKey = this.#getObjectCacheKey(type.apiName, pk);
    const obj = this.#optimisticLayer.get(objectCacheKey);

    const subject = this.#getSubject(objectCacheKey);
    return new ObservableObjectImpl(subject, obj);
  }

  public updateObject<T extends ObjectOrInterfaceDefinition>(
    obj: Osdk.Instance<T>,
    optimistic = true,
  ): Osdk.Instance<T> {
    return this.#batch((batch) => {
      return this.#updateObject(obj, optimistic, batch);
    }).result;
  }

  public getObject<T extends ObjectOrInterfaceDefinition>(
    type: T,
    pk: string | number,
  ): Osdk.Instance<T> | undefined {
    const objectCacheKey = this.#getObjectCacheKey(type.apiName, pk);
    const obj = this.#optimisticLayer.get(objectCacheKey);
    return obj as Osdk.Instance<T> | undefined;
  }

  #getObjectCacheKey<T extends ObjectOrInterfaceDefinition>(
    apiName: T["apiName"],
    pk: PrimaryKeyType<T>,
  ): ObjectCacheKey<T> {
    return this.#cacheKeys.lookupArray([
      "object",
      apiName,
      pk,
    ]) as ObjectCacheKey<T>;
  }

  #getListCacheKey<T extends ObjectOrInterfaceDefinition>(
    apiName: T["apiName"],
    where: Canonical<WhereClause<T>>,
  ): ListCacheKey<T> {
    return this.#cacheKeys.lookupArray([
      "list",
      apiName,
      where,
    ]) as ListCacheKey<T>;
  }

  #updateObject<T extends ObjectOrInterfaceDefinition>(
    obj: Osdk.Instance<T>,
    optimistic: boolean,
    batchResult: BatchResult,
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

    if (optimistic && batchResult.needsLayer) {
      this.#optimisticLayer = this.#optimisticLayer.addLayer();
      batchResult.needsLayer = false;
    }

    const writeLayer = optimistic ? this.#optimisticLayer : this.#truthLayer;
    writeLayer.set(objectCacheKey, obj);

    if (existing) {
      batchResult.modifiedObjects.set(objectCacheKey, obj);
    } else {
      batchResult.addedObjects.set(objectCacheKey, obj);
    }

    return obj;
  }

  #batch = <X>(batchFn: (batchResult: BatchResult) => X) => {
    const batchResult = createBatchResult();

    const result = batchFn(batchResult);

    batchResult.addedObjects.forEach((obj, key) => {
      this.#cachedKeyToSubject.get(key)?.next(obj);
    });
    batchResult.modifiedObjects.forEach((obj, key) => {
      this.#cachedKeyToSubject.get(key)?.next(obj);
    });

    return { batchResult, result };
  };

  public updateList<T extends ObjectOrInterfaceDefinition>(
    type: T,
    where: WhereClause<T>,
    values: Osdk.Instance<T>[],
    optimistic = true,
  ): void {
    this.#batch((b) => {
      if (optimistic) {
        this.#optimisticLayer = this.#optimisticLayer.addLayer();
      }

      // update the cache for any object that has changed
      // and save the mapped values to return
      const mappedValues = values.map(v => {
        this.#updateObject(v, optimistic, b);
        return this.#getObjectCacheKey(v.$apiName, v.$primaryKey);
      });

      const listCacheKey = this.#getListCacheKey(
        type.apiName,
        this.#whereCanonicalizer.canonicalize(where),
      );
      // update the list cache
      const layer = optimistic ? this.#optimisticLayer : this.#truthLayer;
      const _existingList = layer.get(listCacheKey);
      // TODO don't update the list if it hasn't changed
      layer.set(listCacheKey, mappedValues);

      return undefined as any;
    });
  }
}

interface List<T extends ObjectOrInterfaceDefinition> {
  type: "list";
  objectRefs: Set<ObjectCacheKey<T>>;
}
