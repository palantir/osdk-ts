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
  InterfaceDefinition,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import deepEqual from "fast-deep-equal";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ObjectPayload } from "../../ObjectPayload.js";
import type { ObserveObjectOptions } from "../../ObservableClient.js";
import type { Observer, Status } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { BatchContext } from "../BatchContext.js";
import type { Canonical } from "../Canonical.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { Rdp } from "../RdpCanonicalizer.js";
import { tombstone } from "../tombstone.js";
import { mergeObjectFields } from "../utils/rdpFieldOperations.js";
import { type ObjectCacheKey } from "./ObjectCacheKey.js";
import { ObjectQuery } from "./ObjectQuery.js";

export class ObjectsHelper extends AbstractHelper<
  ObjectQuery,
  ObserveObjectOptions<any>
> {
  observe<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveObjectOptions<T>,
    subFn: Observer<ObjectPayload>,
  ): QuerySubscription<ObjectQuery> {
    return super.observe(options, subFn);
  }

  getQuery<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveObjectOptions<T>,
    rdpConfig?: Canonical<Rdp> | null,
  ): ObjectQuery {
    const apiName = typeof options.apiName === "string"
      ? options.apiName
      : options.apiName.apiName;
    const { pk } = options;

    const objectCacheKey = this.cacheKeys.get<ObjectCacheKey>(
      "object",
      apiName,
      pk,
      rdpConfig ?? undefined,
    );

    return this.store.queries.get(objectCacheKey, () =>
      new ObjectQuery(
        this.store,
        this.store.subjects.get(objectCacheKey),
        apiName,
        pk,
        objectCacheKey,
        { dedupeInterval: 0 },
      ));
  }

  /**
   * Internal helper method for writing objects to the store and returning their
   * object keys. For list queries with RDPs, the rdpConfig is included in the
   * cache key to ensure proper data isolation.
   * @internal
   */
  public storeOsdkInstances(
    values: Array<ObjectHolder> | Array<Osdk.Instance<any, any, any>>,
    batch: BatchContext,
    rdpConfig?: Canonical<Rdp> | null,
  ): ObjectCacheKey[] {
    return values.map(v =>
      this.getQuery({
        apiName: v.$objectType ?? v.$apiName,
        pk: v.$primaryKey as string | number,
      }, rdpConfig).writeToStore(
        v as ObjectHolder,
        "loaded",
        batch,
      ).cacheKey
    );
  }

  /**
   * Write an object to cache and propagate to all related cache keys
   * @internal
   */
  public propagateWrite(
    sourceCacheKey: ObjectCacheKey,
    value: ObjectHolder | typeof tombstone,
    status: Status,
    batch: BatchContext,
  ): void {
    const existing = batch.read(sourceCacheKey);
    const dataChanged = !existing
      || existing.value === undefined
      || value === tombstone
      || !deepEqual(existing.value, value);
    const statusChanged = !existing || existing.status !== status;

    if (!dataChanged && !statusChanged) {
      return;
    }

    const valueToWrite = !dataChanged && existing ? existing.value : value;
    batch.write(sourceCacheKey, valueToWrite, status);

    if (value !== tombstone) {
      batch.changes.registerObject(sourceCacheKey, value, !existing);
    }

    const metadata = this.store.objectCacheKeyRegistry.getMetadata(
      sourceCacheKey,
    );

    const relatedKeys = metadata
      ? this.store.objectCacheKeyRegistry.getVariants(
        metadata.apiName,
        metadata.primaryKey,
      )
      : new Set([sourceCacheKey]);

    for (const targetKey of relatedKeys) {
      if (targetKey === sourceCacheKey || !this.isKeyActive(targetKey)) {
        continue;
      }

      if (value === tombstone) {
        batch.write(targetKey, tombstone, status);
        continue;
      }

      const targetCurrentValue = batch.read(targetKey)?.value;
      const merged = this.mergeForTarget(
        value,
        targetCurrentValue && this.isObjectHolder(targetCurrentValue)
          ? targetCurrentValue
          : undefined,
        sourceCacheKey,
        targetKey,
      );

      batch.write(targetKey, merged, status);
    }
  }

  /**
   * Check if a cache key is actively observed or pending cleanup.
   * During React unmount-remount cycles, a key may be momentarily
   * unobserved while its cleanup is deferred to a microtask.
   * We still propagate to such keys to prevent stale data when
   * the subscription is re-established.
   */
  private isKeyActive(key: ObjectCacheKey): boolean {
    const subject = this.store.subjects.peek(key);
    if (subject?.observed === true) {
      return true;
    }
    return (this.store.pendingCleanup.get(key) ?? 0) > 0;
  }

  /**
   * Type guard to check if a value is an ObjectHolder
   */
  private isObjectHolder(
    value: ObjectHolder | undefined,
  ): value is ObjectHolder {
    return value != null
      && typeof value === "object"
      && "$apiName" in value
      && "$primaryKey" in value;
  }

  /**
   * Merge object data for a specific target cache key, preserving RDP fields
   */
  private mergeForTarget(
    sourceValue: ObjectHolder,
    targetCurrentValue: ObjectHolder | undefined,
    sourceCacheKey: ObjectCacheKey,
    targetCacheKey: ObjectCacheKey,
  ): ObjectHolder {
    const sourceRdpFields = this.store.objectCacheKeyRegistry.getRdpFieldSet(
      sourceCacheKey,
    );
    const targetRdpFields = this.store.objectCacheKeyRegistry.getRdpFieldSet(
      targetCacheKey,
    );

    return mergeObjectFields(
      sourceValue,
      sourceRdpFields,
      targetRdpFields,
      targetCurrentValue,
    );
  }
}
