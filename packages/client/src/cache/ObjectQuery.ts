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
} from "@osdk/api";
import deepEqual from "fast-deep-equal";
import type {
  BatchContext,
  StorageData,
  Store,
  Unsubscribable,
} from "./Cache.js";
import type { CacheKey } from "./CacheKey.js";
import type { Entry } from "./Layer.js";
import type { QueryOptions } from "./Query.js";
import { Query } from "./Query.js";
import type { SubFn } from "./types.js";

export interface ObjectEntry<T extends ObjectTypeDefinition>
  extends Entry<ObjectCacheKey<T>>
{}

interface ObjectStorageData<T extends ObjectTypeDefinition>
  extends StorageData<Osdk.Instance<T>>
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

export class ObjectQuery<T extends ObjectTypeDefinition> extends Query<
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
