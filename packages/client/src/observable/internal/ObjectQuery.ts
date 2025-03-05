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
import type { Connectable, Observable, Subject } from "rxjs";
import { BehaviorSubject, connectable, map } from "rxjs";
import { additionalContext } from "../../Client.js";
import type { ObjectPayload } from "../ObjectPayload.js";
import type { CommonObserveOptions, Status } from "../ObservableClient.js";
import type { CacheKey } from "./CacheKey.js";
import type { Entry } from "./Layer.js";
import { Query } from "./Query.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";

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
  ObjectPayload,
  CommonObserveOptions
> {
  #apiName: string;
  #pk: string | number | boolean;

  constructor(
    store: Store,
    subject: Subject<SubjectPayload<ObjectCacheKey>>,
    type: string,
    pk: PrimaryKeyType<ObjectTypeDefinition>,
    cacheKey: ObjectCacheKey,
    opts: CommonObserveOptions,
  ) {
    super(
      store,
      subject,
      opts,
      cacheKey,
      process.env.NODE_ENV !== "production"
        ? (
          store.client[additionalContext].logger?.child({}, {
            msgPrefix: `ObjectQuery<${
              cacheKey.otherKeys.map(x => JSON.stringify(x)).join(", ")
            }>`,
          })
        )
        : undefined,
    );
    this.#apiName = type;
    this.#pk = pk;
  }

  protected _createConnectable(
    subject: Observable<SubjectPayload<ObjectCacheKey>>,
  ): Connectable<ObjectPayload> {
    return connectable(
      subject.pipe(
        map((x) => {
          return {
            status: x.status,
            object: x.value,
            lastUpdated: x.lastUpdated,
            isOptimistic: x.isOptimistic,
          };
        }),
      ),
      {
        connector: () =>
          new BehaviorSubject<ObjectPayload>({
            status: "init",
            object: undefined,
            lastUpdated: 0,
            isOptimistic: false,
          }),
      },
    );
  }

  async _fetch(): Promise<void> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.info({ methodName: "_fetch" });
    }

    const objectSet = this.store.client({
      type: "object",
      apiName: this.#apiName,
    }) as ObjectSet<ObjectTypeDefinition>;
    const obj = await objectSet.fetchOne(this.#pk);
    this.store.batch({}, (batch) => {
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
    if (process.env.NODE_ENV !== "production") {
      this.logger?.debug(
        { methodName: "writeToStore" },
        `{status: ${status}},`,
        data,
      );
    }
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(data, entry.value)) {
      // must do a "full write" here so that the lastUpdated is updated
      return batch.write(this.cacheKey, entry.value, status);
      //   return entry.value.data as Osdk.Instance<ObjectTypeDefinition>;
    }
    const ret = batch.write(this.cacheKey, data, status);

    if (entry) {
      batch.changes.modifiedObjects.set(data.$apiName, data);
    } else {
      batch.changes.addedObjects.set(data.$apiName, data);
    }

    return ret;
  }
}
