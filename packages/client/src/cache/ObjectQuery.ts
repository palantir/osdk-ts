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
import type { CacheKey } from "./CacheKey.js";
import type { Entry } from "./Layer.js";
import type { QueryOptions } from "./Query.js";
import { Query } from "./Query.js";
import type { BatchContext, Status, Store, Unsubscribable } from "./Store.js";
import type { SubFn } from "./types.js";

export interface ObjectEntry extends Entry<ObjectCacheKey> {}

type ObjectStorageData = Osdk.Instance<ObjectTypeDefinition>;

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
  #apiName: string;
  #pk: string | number | boolean;

  constructor(
    store: Store,
    type: string,
    pk: PrimaryKeyType<ObjectTypeDefinition>,
    cacheKey: ObjectCacheKey,
    opts: QueryOptions,
  ) {
    super(store, opts, cacheKey);
    this.#apiName = type;
    this.#pk = pk;
  }

  public subscribe(
    subFn: SubFn<ObjectEntry>,
  ): Unsubscribable {
    const sub = this.getSubject().pipe(distinctUntilChanged()).subscribe(subFn);
    return { unsubscribe: () => sub.unsubscribe() };
  }

  async _fetch(): Promise<void> {
    const objectSet = this.store._client({
      type: "object",
      apiName: this.#apiName,
    }) as ObjectSet<ObjectTypeDefinition>;
    const obj = await objectSet.fetchOne(this.#pk);
    this.store._batch({}, (batch) => {
      this.writeToStore(
        obj as Osdk.Instance<ObjectTypeDefinition>,
        "loaded",
        batch,
      );
    });
  }

  writeToStore(
    data: Osdk.Instance<ObjectTypeDefinition>,
    status: Status,
    batch: BatchContext,
  ): Entry<ObjectCacheKey> {
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(data, entry.value)) {
      // must do a "full write" here so that the lastUpdated is updated
      return batch.write(this.cacheKey, entry.value, status);
      //   return entry.value.data as Osdk.Instance<ObjectTypeDefinition>;
    }
    const ret = batch.write(this.cacheKey, data, status);

    if (entry) {
      batch.modifiedObjects.add(this.cacheKey);
    } else {
      batch.addedObjects.add(this.cacheKey);
    }

    return ret;
  }
}
