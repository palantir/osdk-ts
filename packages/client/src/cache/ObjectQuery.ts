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
import { distinctUntilChanged } from "rxjs";
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

export interface ObjectEntry extends Entry<ObjectCacheKey> {}

interface ObjectStorageData
  extends StorageData<Osdk.Instance<ObjectTypeDefinition>>
{
}

export interface ObjectCacheKey extends
  CacheKey<
    "object",
    ObjectStorageData,
    ObjectQuery,
    [string, pk: PrimaryKeyType<ObjectTypeDefinition>]
  >
{}

export class ObjectQuery extends Query<
  ObjectCacheKey,
  ObjectEntry,
  QueryOptions
> {
  #type: ObjectTypeDefinition;
  #pk: string | number | boolean;

  constructor(
    store: Store,
    type: ObjectTypeDefinition,
    pk: PrimaryKeyType<ObjectTypeDefinition>,
    cacheKey: ObjectCacheKey,
    opts: QueryOptions,
  ) {
    super(store, opts, cacheKey);
    this.#type = type;
    this.#pk = pk;
  }

  public subscribe(
    subFn: SubFn<ObjectEntry>,
  ): Unsubscribable {
    const sub = this.getSubject().pipe(distinctUntilChanged()).subscribe(subFn);
    return { unsubscribe: () => sub.unsubscribe() };
  }

  async _fetch(): Promise<void> {
    const objectSet = this.store._client(this.#type) as ObjectSet<
      ObjectTypeDefinition
    >;
    const obj = await objectSet.fetchOne(this.#pk);
    this.store._batch({}, (batch) => {
      this.writeToStore(obj as Osdk.Instance<ObjectTypeDefinition>, batch);
    });
  }

  writeToStore(
    data: Osdk.Instance<ObjectTypeDefinition>,
    batch: BatchContext,
  ): Osdk.Instance<ObjectTypeDefinition> {
    const entry = batch.read(this.cacheKey);
    // must do a "full write" here so that the lastUpdated is updated
    batch.write(this.cacheKey, { data }, "loaded");

    if (entry && deepEqual(data, entry.value.data)) {
      return entry.value.data as Osdk.Instance<ObjectTypeDefinition>;
    }

    if (entry) {
      batch.modifiedObjects.add(this.cacheKey);
    } else {
      batch.addedObjects.add(this.cacheKey);
    }

    return data;
  }
}
