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
  DerivedProperty,
  ObjectTypeDefinition,
  PrimaryKeyType,
} from "@osdk/api";
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
import { tombstone } from "../tombstone.js";
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

    const rdpConfig = this.cacheKey.otherKeys[RDP_CONFIG_IDX];

    let obj: ObjectHolder;

    if (rdpConfig) {
      const miniDef = {
        type: "object" as const,
        apiName: this.#apiName,
      } as ObjectTypeDefinition;

      const fetched = await this.store.client(miniDef)
        .withProperties(
          rdpConfig as DerivedProperty.Clause<ObjectTypeDefinition>,
        )
        .fetchOne(
          this.#pk as PrimaryKeyType<ObjectTypeDefinition>,
          { $includeRid: true },
        );
      obj = fetched as ObjectHolder;
    } else {
      // Use batched loader for non-RDP objects (efficient batching)
      obj = await getBulkObjectLoader(this.store.client)
        .fetch(this.#apiName, this.#pk);
    }

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
    const rdpConfig = this.cacheKey.otherKeys[RDP_CONFIG_IDX];

    this.store.objectCacheKeyRegistry.register(
      this.cacheKey,
      this.#apiName,
      this.#pk,
      rdpConfig,
    );

    this.store.objects.propagateWrite(this.cacheKey, data, status, batch);

    return batch.read(this.cacheKey)!;
  }

  deleteFromStore(
    status: Status,
    batch: BatchContext,
  ): Entry<ObjectCacheKey> | undefined {
    const rdpConfig = this.cacheKey.otherKeys[RDP_CONFIG_IDX];

    this.store.objectCacheKeyRegistry.register(
      this.cacheKey,
      this.#apiName,
      this.#pk,
      rdpConfig,
    );

    this.store.objects.propagateWrite(
      this.cacheKey,
      tombstone,
      status,
      batch,
    );

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
