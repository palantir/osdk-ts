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
  ObjectTypeDefinition,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import deepEqual from "fast-deep-equal";
import type { Connectable, Observable, Subject } from "rxjs";
import {
  asapScheduler,
  combineLatest,
  connectable,
  distinctUntilChanged,
  map,
  of,
  ReplaySubject,
  scheduled,
  switchMap,
} from "rxjs";
import { additionalContext } from "../../../Client.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ObserveLinkOptions } from "../../ObservableClient.js";
// Direct link queries without needing to fetch the source object first
import type { SpecificLinkPayload } from "../../LinkPayload.js";
import type { Status } from "../../ObservableClient/common.js";
import type { CacheKey } from "../CacheKey.js";
import type { Changes } from "../Changes.js";
import type { Entry } from "../Layer.js";
import { storeOsdkInstances } from "../ObjectQuery.js";
import type { OptimisticId } from "../OptimisticId.js";
import { Query } from "../Query.js";
import type { BatchContext, Store, SubjectPayload } from "../Store.js";
import { tombstone } from "../tombstone.js";
import type {
  LinkStorageData,
  SpecificLinkCacheKey,
} from "./SpecificLinkCacheKey.js";

/**
 * Represents a cache entry for a specific link query
 */
// export interface SpecificLinkEntry extends Entry<SpecificLinkCacheKey> {}

/**
 * Query implementation for retrieving linked objects from a specific object
 */
export class SpecificLinkQuery extends Query<
  SpecificLinkCacheKey,
  SpecificLinkPayload,
  ObserveLinkOptions<ObjectTypeDefinition>
> {
  #sourceApiName: string;
  #sourcePk: PrimaryKeyType<ObjectTypeDefinition>;
  #linkName: string;

  // We'll determine at runtime if this is a multi-link or single-link relation

  constructor(
    store: Store,
    subject: Subject<SubjectPayload<SpecificLinkCacheKey>>,
    cacheKey: SpecificLinkCacheKey,
    opts: ObserveLinkOptions<ObjectTypeDefinition>,
  ) {
    super(
      store,
      subject,
      opts,
      cacheKey,
      process.env.NODE_ENV !== "production"
        ? (
          store.client[additionalContext].logger?.child({}, {
            msgPrefix: `SpecificLinkQuery<${
              cacheKey.otherKeys.map(x => JSON.stringify(x)).join(", ")
            }>`,
          })
        )
        : undefined,
    );
    [this.#sourceApiName, this.#sourcePk, this.#linkName] = cacheKey.otherKeys;
  }

  protected _createConnectable(
    subject: Observable<SubjectPayload<SpecificLinkCacheKey>>,
  ): Connectable<SpecificLinkPayload> {
    return connectable<SpecificLinkPayload>(
      subject.pipe(
        switchMap(listEntry => {
          const resolvedLinks = listEntry?.value?.data == null
              || listEntry.value.data.length === 0
            ? of([])
            : combineLatest(
              listEntry.value.data.map(cacheKey =>
                this.store.getSubject(cacheKey).pipe(
                  map(objectEntry => objectEntry?.value!),
                  distinctUntilChanged(),
                )
              ),
            );
          return scheduled(
            combineLatest({
              resolvedLinks,
              isOptimistic: of(listEntry.isOptimistic),
              fetchMore: of(() => Promise.resolve()), // No pagination implemented yet
              hasMore: of(false), // No pagination implemented yet
              status: of(listEntry.status),
              lastUpdated: of(listEntry.lastUpdated),
            }),
            asapScheduler,
          );
        }),
      ),
      {
        resetOnDisconnect: false,
        connector: () => new ReplaySubject(1),
      },
    );
  }

  async _fetchAndStore(): Promise<void> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "_fetchAndStore" }).debug(
        "calling _fetchAndStore",
      );
    }

    try {
      // Use the client API to create a query that pivots to linked objects
      const client = this.store.client;

      try {
        // First, get metadata for the source object to know the primary key field name
        const sourceObjectDef = {
          type: "object",
          apiName: this.#sourceApiName,
        } as ObjectTypeDefinition;

        // Use the client's ontologyProvider to get metadata, which has built-in caching
        // This is more efficient than direct fetchMetadata calls as it uses the provider's cache
        const sourceMetadata = await client[additionalContext].ontologyProvider
          .getObjectDefinition(this.#sourceApiName);

        // Query for the specific source object
        const sourceQuery = client(sourceObjectDef).where({
          [sourceMetadata.primaryKeyApiName]: this.#sourcePk,
        } as WhereClause<any>);

        // Pivot to the linked objects
        const linkQuery = sourceQuery.pivotTo(this.#linkName);

        // Fetch the linked objects
        const response = await linkQuery.fetchPage({
          // FIXME people will need to be able to page these so we
          // will need to follow a pattern close to @ListQuery.ts i think
          $pageSize: 100, // Reasonable page size
        });

        // Store the linked objects in the cache
        this.store.batch({}, (batch) => {
          this._updateLinks(
            response.data as Array<ObjectHolder>,
            "loaded",
            batch,
          );
        });
      } catch (e: unknown) {
        // Handle the case where fetching fails
        if (process.env.NODE_ENV !== "production") {
          this.logger?.child({ methodName: "_fetchAndStore" }).debug(
            "Failed to fetch linked objects",
            e,
          );
        }

        this.store.batch({}, (batch) => {
          this._updateLinks([], "loaded", batch);
        });
      }
    } catch (error: unknown) {
      // This is for unexpected errors in the outer try block
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "_fetchAndStore" }).error(
          "Unexpected error fetching linked objects",
          error,
        );
      }

      // For unexpected errors, still finish with an error status
      // but don't throw, as this will prevent the revalidation from completing
      this.store.batch({}, (batch) => {
        this.setStatus("error", batch);
      });
      throw error;
    }
  }

  writeToStore(
    data: LinkStorageData,
    status: Status,
    batch: BatchContext,
  ): Entry<SpecificLinkCacheKey> {
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(data, entry.value)) {
      // Check if both data AND status are the same
      if (entry.status === status) {
        if (process.env.NODE_ENV !== "production") {
          this.logger?.child({ methodName: "writeToStore" }).debug(
            `Links were deep equal and status unchanged (${status}), skipping update`,
          );
        }
        // Return the existing entry without writing to avoid unnecessary notifications
        return entry;
      }

      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "writeToStore" }).debug(
          `Links were deep equal, just setting status (old status: ${entry.status}, new status: ${status})`,
        );
      }
      // Keep the same value but update status and lastUpdated
      return batch.write(this.cacheKey, entry.value, status);
    }

    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "writeToStore" }).debug(
        JSON.stringify({ status }),
        data,
      );
    }

    const ret = batch.write(this.cacheKey, data, status);
    batch.changes.modified.add(this.cacheKey);

    return ret;
  }

  /**
   * Helper method to update the linked objects in the cache
   */
  _updateLinks(
    objectHolders: Array<ObjectHolder>,
    status: Status,
    batch: BatchContext,
  ): Entry<SpecificLinkCacheKey> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "_updateLinks" }).debug(
        `Updating links with status: ${status}`,
        objectHolders,
      );
    }

    // First store the individual linked objects in their respective cache entries
    const objectCacheKeys = objectHolders.length > 0
      ? storeOsdkInstances(this.store, objectHolders, batch)
      : [];

    // Then store the collection of object references in our link cache
    return this.writeToStore({ data: objectCacheKeys }, status, batch);
  }

  deleteFromStore(
    status: Status,
    batch: BatchContext,
  ): Entry<SpecificLinkCacheKey> | undefined {
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(tombstone, entry.value)) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "deleteFromStore" }).debug(
          `Links were already deleted, just setting status`,
        );
      }
      return batch.write(this.cacheKey, entry.value, status);
    }

    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "deleteFromStore" }).debug(
        JSON.stringify({ status }),
      );
    }

    // If there is no entry then there is nothing to do
    if (!entry || !entry.value) {
      return;
    }

    const ret = batch.delete(this.cacheKey, status);
    batch.changes.deleted.add(this.cacheKey);

    return ret;
  }

  /**
   * Implements Query.maybeUpdateAndRevalidate to handle cache invalidation
   */
  maybeUpdateAndRevalidate = async (
    changes: Changes,
    _optimisticId: OptimisticId | undefined,
  ): Promise<void> => {
    // TODO: Implement proper invalidation logic for linked objects
    // This would check if any of the linked objects have changed,
    // or if the source object's links might have changed

    // For now, simply check if this specific link cache key was modified
    if (changes.modified.has(this.cacheKey)) {
      return this.revalidate(true);
    }

    // No relevant changes were detected
    return Promise.resolve();
  };
}

export function isSpecificLinkCacheKey(
  key: CacheKey,
): key is SpecificLinkCacheKey {
  return key.type === "specificLink";
}
