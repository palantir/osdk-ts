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

import type { ObjectTypeDefinition, Osdk, PrimaryKeyType } from "@osdk/api";
import deepEqual from "fast-deep-equal";
import type { Connectable, Observable, Subject } from "rxjs";
import { BehaviorSubject, connectable, map } from "rxjs";
import { additionalContext } from "../../Client.js";
import type { ObjectHolder } from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ObjectPayload } from "../ObjectPayload.js";
import type { CommonObserveOptions, Status } from "../ObservableClient.js";
import { getBulkObjectLoader } from "./BulkObjectLoader.js";
import type { CacheKey } from "./CacheKey.js";
import type { Entry } from "./Layer.js";
import { Query } from "./Query.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";

export interface ObjectEntry extends Entry<ObjectCacheKey> {}

export interface ObjectCacheKey extends
  CacheKey<
    "object",
    ObjectHolder,
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
    return connectable<ObjectPayload>(
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

  async _fetchAndStore(): Promise<void> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "_fetchAndStore" }).info(
        "calling fetchOne",
      );
    }

    const obj = await getBulkObjectLoader(this.store.client)
      .fetch(this.#apiName, this.#pk);

    this.store.batch({}, (batch) => {
      this.writeToStore(obj, "loaded", batch);
    });
  }

  writeToStore(
    data: ObjectHolder,
    status: Status,
    batch: BatchContext,
  ): Entry<ObjectCacheKey> {
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(data, entry.value)) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "writeToStore" }).debug(
          `Object was deep equal, just setting status`,
        );
      }
      // must do a "full write" here so that the lastUpdated is updated but we
      // don't want to retrigger anyone's memoization on the value!
      return batch.write(this.cacheKey, entry.value, status);
    }

    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "writeToStore" }).debug(
        JSON.stringify({ status }),
        data,
      );
    }
    const ret = batch.write(this.cacheKey, data, status);
    batch.changes.registerObject(this.cacheKey, data, /* isNew */ !entry);

    return ret;
  }
}

/**
 * Internal helper method for writing objects to the store and returning their
 * object keys
 * @internal
 */
export function storeOsdkInstances(
  store: Store,
  values: Array<ObjectHolder> | Array<Osdk.Instance<any, any, any>>,
  batch: BatchContext,
): ObjectCacheKey[] {
  // update the cache for any object that has changed
  // and save the mapped values to return
  return values.map(v => {
    return store.getObjectQuery(
      v.$apiName,
      v.$primaryKey as string | number,
    )
      .writeToStore(
        v as ObjectHolder,
        "loaded",
        batch,
      ).cacheKey;
  });
}
