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
import type {
  CommonObserveOptions,
  Status,
} from "../ObservableClient/common.js";
import { getBulkObjectLoader } from "./BulkObjectLoader.js";
import type { CacheKey } from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import type { Changes } from "./Changes.js";
import type { Entry } from "./Layer.js";
import { Query } from "./Query.js";
import type { Rdp } from "./RdpCanonicalizer.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";
import { tombstone } from "./tombstone.js";

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
      this.writeToStore(obj, "loaded", batch);
    });

    // Check if this object has any associated RDP configurations
    const rdpConfigs = this.store.rdpStorage.getAllRdpConfigs(this.cacheKey);
    if (rdpConfigs.size > 0) {
      await this._fetchAndStoreRdps(rdpConfigs);
    }
  }

  private async _fetchAndStoreRdps(
    rdpConfigs: Set<Canonical<Rdp>>,
  ): Promise<void> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "_fetchAndStoreRdps" }).debug(
        `Fetching RDPs for object ${this.#apiName}:${this.#pk}`,
        { rdpCount: rdpConfigs.size },
      );
    }

    // For each RDP configuration, fetch the object with those specific RDPs
    const promises = Array.from(rdpConfigs).map((rdpConfig) =>
      this._fetchSingleRdpConfig(rdpConfig)
    );

    await Promise.allSettled(promises);
  }

  private async _fetchSingleRdpConfig(
    rdpConfig: Canonical<Rdp>,
  ): Promise<void> {
    try {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "_fetchSingleRdpConfig" }).debug(
          "Fetching object with RDP config",
          { apiName: this.#apiName, pk: this.#pk, rdpConfig },
        );
      }

      // Fetch the object with RDP configuration
      const objWithRdp = await getBulkObjectLoader(this.store.client)
        .fetch(this.#apiName, this.#pk);

      // Extract RDP properties from the fetched object
      const rdpKeys = Object.keys(rdpConfig);
      const rdpData: Record<string, unknown> = {};

      for (const key of rdpKeys) {
        if (key in objWithRdp) {
          rdpData[key] = (objWithRdp as any)[key];
        }
      }

      // Store the RDP data if we found any
      if (Object.keys(rdpData).length > 0) {
        this.store.rdpStorage.set(this.cacheKey, rdpConfig, rdpData);

        // Notify subscribers about the updated RDP data
        const subject = this.store.peekSubject(this.cacheKey);
        if (subject) {
          const currentValue = subject.getValue();
          // Trigger a re-emission to update any listeners
          subject.next(currentValue);
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "_fetchSingleRdpConfig" }).error(
          "Failed to fetch RDP data",
          { error, rdpConfig },
        );
      }
    }
  }

  writeToStore(
    data: ObjectHolder,
    status: Status,
    batch: BatchContext,
  ): Entry<ObjectCacheKey> {
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(data, entry.value)) {
      // Check if both data AND status are the same
      if (entry.status === status) {
        if (process.env.NODE_ENV !== "production") {
          this.logger?.child({ methodName: "writeToStore" }).debug(
            `Object was deep equal and status unchanged (${status}), skipping update`,
          );
        }
        // Return the existing entry without writing to avoid unnecessary notifications
        return entry;
      }

      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "writeToStore" }).debug(
          `Object was deep equal, just setting status (old status: ${entry.status}, new status: ${status})`,
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

  deleteFromStore(
    status: Status,
    batch: BatchContext,
  ): Entry<ObjectCacheKey> | undefined {
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(tombstone, entry.value)) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "deleteFromStore" }).debug(
          `Object was deep equal, just setting status`,
        );
      }
      // must do a "full write" here so that the lastUpdated is updated but we
      // don't want to retrigger anyone's memoization on the value!
      return batch.write(this.cacheKey, entry.value, status);
    }

    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "deleteFromStore" }).debug(
        JSON.stringify({ status }),
      );
    }

    // if there is no entry then there is nothing to do
    if (!entry || !entry.value) {
      return;
    }

    const ret = batch.delete(this.cacheKey, status);
    batch.changes.deleteObject(this.cacheKey);

    return ret;
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

/**
 * Internal helper method for writing objects to the store and returning their
 * object keys
 * @internal
 */
export function storeOsdkInstances(
  store: Store,
  values: Array<ObjectHolder> | Array<Osdk.Instance<any, any, any>>,
  batch: BatchContext,
  rdpConfig?: Canonical<Rdp>,
): ObjectCacheKey[] {
  // update the cache for any object that has changed
  // and save the mapped values to return
  return values.map(v => {
    const objectCacheKey = store.objects.getQuery({
      apiName: v.$apiName,
      pk: v.$primaryKey as string | number,
    });

    if (rdpConfig) {
      // Separate base and RDP properties
      const rdpKeys = Object.keys(rdpConfig);
      const baseObj = {} as ObjectHolder;
      const rdpData: Record<string, unknown> = {};

      for (const key in v) {
        if (rdpKeys.includes(key)) {
          rdpData[key] = (v as any)[key];
        } else {
          (baseObj as any)[key] = (v as any)[key];
        }
      }

      // Store base object
      const entry = objectCacheKey.writeToStore(
        baseObj,
        "loaded",
        batch,
      );

      // Store RDP data separately
      if (Object.keys(rdpData).length > 0) {
        store.rdpStorage.set(entry.cacheKey, rdpConfig, rdpData);
      }

      return entry.cacheKey;
    } else {
      // No RDP config, store entire object as before
      return objectCacheKey.writeToStore(
        v as ObjectHolder,
        "loaded",
        batch,
      ).cacheKey;
    }
  });
}
