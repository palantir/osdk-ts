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

import type { ObjectTypeDefinition, PrimaryKeyType } from "@osdk/api";
import type { Connectable, Observable, Subject } from "rxjs";
import { BehaviorSubject, connectable, map } from "rxjs";
import { additionalContext } from "../../../Client.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ObjectPayload } from "../../ObjectPayload.js";
import type {
  CommonObserveOptions,
  Status,
} from "../../ObservableClient/common.js";
import type { BatchContext } from "../BatchContext.js";
import { getBulkObjectLoader } from "../BulkObjectLoader.js";
import type { Changes } from "../Changes.js";
import type { Entry } from "../Layer.js";
import { Query } from "../Query.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import { type ObjectCacheKey, RDP_CONFIG_IDX } from "./ObjectCacheKey.js";

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
      this.logger?.child({ methodName: "_fetchAndStore" }).debug(
        "calling _fetchAndStore",
      );
    }

    // TODO: In the future, implement tracking of network requests to ensure
    // we're not making unnecessary network calls. This would need dedicated
    // tests separate from subscription notification tests.

    const obj = await getBulkObjectLoader(this.store.client)
      .fetch(this.#apiName, this.#pk);

    this.store.batch({}, (batch) => {
      // Register this cache key if not already registered
      const rdpConfig = this.cacheKey.otherKeys[RDP_CONFIG_IDX];
      this.store.objectCacheKeyRegistry.register(
        this.cacheKey,
        this.#apiName,
        this.#pk,
        rdpConfig,
      );

      // Write to all related cache keys
      this.store.objects.propagateWrite(this.cacheKey, obj, "loaded", batch);
    });
  }

  writeToStore(
    data: ObjectHolder,
    status: Status,
    batch: BatchContext,
  ): Entry<ObjectCacheKey> {
    const entry = batch.read(this.cacheKey);

    // Register this cache key if not already registered
    const rdpConfig = this.cacheKey.otherKeys[RDP_CONFIG_IDX];
    this.store.objectCacheKeyRegistry.register(
      this.cacheKey,
      this.#apiName,
      this.#pk,
      rdpConfig,
    );

    // Use propagation to write to all related cache keys
    this.store.objects.propagateWrite(this.cacheKey, data, status, batch);

    // Register the change
    batch.changes.registerObject(this.cacheKey, data, /* isNew */ !entry);

    // Return the entry that was written
    return batch.read(this.cacheKey)!;
  }

  deleteFromStore(
    status: Status,
    batch: BatchContext,
  ): Entry<ObjectCacheKey> | undefined {
    // Register this cache key if not already registered
    const rdpConfig = this.cacheKey.otherKeys[RDP_CONFIG_IDX];
    this.store.objectCacheKeyRegistry.register(
      this.cacheKey,
      this.#apiName,
      this.#pk,
      rdpConfig,
    );

    // Use propagation to write tombstone to all related cache keys
    this.store.objects.propagateWrite(this.cacheKey, undefined, status, batch);

    // Register the deletion
    batch.changes.deleteObject(this.cacheKey);

    // Return the entry that was written
    return batch.read(this.cacheKey);
  }

  invalidateObjectType = (
    objectType: string,
    changes: Changes | undefined,
  ): Promise<void> => {
    if (this.#apiName === objectType) {
      changes?.modified.add(this.cacheKey);
      return this.revalidate(true);
    }
    return Promise.resolve();
  };
}
