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
  Osdk,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import deepEqual from "fast-deep-equal";
import { type Subject } from "rxjs";
import { additionalContext } from "../../../Client.js";
import type { ObserveLinkOptions } from "../../ObservableClient.js";
// Direct link queries without needing to fetch the source object first
import type { SpecificLinkPayload } from "../../LinkPayload.js";
import type { Status } from "../../ObservableClient/common.js";
import {
  BaseCollectionQuery,
  type CollectionConnectableParams,
} from "../BaseCollectionQuery.js";
import type { CacheKey } from "../CacheKey.js";
import type { Changes } from "../Changes.js";
import type { Entry } from "../Layer.js";
import type { ObjectCacheKey } from "../ObjectQuery.js";
import type { OptimisticId } from "../OptimisticId.js";
import type { BatchContext, Store, SubjectPayload } from "../Store.js";
import { tombstone } from "../tombstone.js";
import type { SpecificLinkCacheKey } from "./SpecificLinkCacheKey.js";

/**
 * Represents a cache entry for a specific link query
 */
// export interface SpecificLinkEntry extends Entry<SpecificLinkCacheKey> {}

/**
 * Query implementation for retrieving linked objects from a specific object
 */
export class SpecificLinkQuery extends BaseCollectionQuery<
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

  /**
   * Creates a payload from collection parameters
   * Implementation for link queries
   */
  protected createPayload(
    params: CollectionConnectableParams,
  ): SpecificLinkPayload {
    return {
      resolvedLinks: params.resolvedData,
      isOptimistic: params.isOptimistic,
      fetchMore: this.fetchMore,
      hasMore: this.nextPageToken != null,
      status: params.status,
      lastUpdated: params.lastUpdated,
    };
  }

  // _fetchAndStore is now implemented in BaseCollectionQuery

  /**
   * Implementation of abstract method from BaseCollectionQuery
   * Fetches a page of linked objects and updates the store
   */
  protected async fetchPageAndUpdate(
    status: Status,
    signal: AbortSignal | undefined,
  ): Promise<Entry<SpecificLinkCacheKey> | undefined> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "fetchPageAndUpdate" }).debug(
        `Fetching links with status: ${status}`,
      );
    }

    if (signal?.aborted) {
      return undefined;
    }

    try {
      // Use the client API to create a query that pivots to linked objects
      const client = this.store.client;

      // First, get metadata for the source object to know the primary key field name
      const sourceObjectDef = {
        type: "object",
        apiName: this.#sourceApiName,
      } as ObjectTypeDefinition;

      // Use the client's ontologyProvider to get metadata, which has built-in caching
      const sourceMetadata = await client[additionalContext].ontologyProvider
        .getObjectDefinition(this.#sourceApiName);

      // Query for the specific source object
      const sourceQuery = client(sourceObjectDef).where({
        [sourceMetadata.primaryKeyApiName]: this.#sourcePk,
      } as WhereClause<any>);

      // Pivot to the linked objects
      const linkQuery = sourceQuery.pivotTo(this.#linkName);

      // Check for abort signal again before fetching
      if (signal?.aborted) {
        return undefined;
      }

      // Fetch the linked objects with pagination
      const response = await linkQuery.fetchPage({
        $pageSize: this.options.pageSize || 100,
        $nextPageToken: this.nextPageToken,
      });

      // Store the next page token for pagination
      this.nextPageToken = response.nextPageToken;

      // Final check for abort signal
      if (signal?.aborted) {
        return undefined;
      }

      // Store the linked objects in the cache
      const { retVal } = this.store.batch({}, (batch) => {
        return this._updateLinks(
          response.data as Array<Osdk.Instance<any>>,
          response.nextPageToken ? status : "loaded",
          batch,
        );
      });

      return retVal;
    } catch (error: unknown) {
      // Log any errors that occur
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "fetchPageAndUpdate" }).error(
          "Error fetching linked objects",
          error,
        );
      }

      // For unexpected errors, write an empty list with error status
      if (!signal?.aborted) {
        const { retVal } = this.store.batch({}, (batch) => {
          return this._updateLinks([], "error", batch);
        });
        return retVal;
      }

      // If aborted, just return undefined
      return undefined;
    }
  }

  /**
   * Register changes to the cache specific to SpecificLinkQuery
   */
  protected registerCacheChanges(batch: BatchContext): void {
    batch.changes.modified.add(this.cacheKey);
  }

  /**
   * Implementation of _sortCacheKeys for links
   * Links don't have custom sorting logic
   * @deprecated Use sortCollection instead
   */
  protected _sortCacheKeys(
    objectCacheKeys: ObjectCacheKey[],
    _batch: BatchContext, // Parameter unused but required by interface
  ): ObjectCacheKey[] {
    // No custom sorting for links
    return objectCacheKeys;
  }
  
  /**
   * Implementation of the abstract sortCollection method from BaseCollectionQuery
   * Links don't have custom sorting logic
   */
  protected sortCollection(
    objectCacheKeys: ObjectCacheKey[],
    _batch: BatchContext, // Parameter unused but required by interface
  ): ObjectCacheKey[] {
    // No custom sorting for links
    return objectCacheKeys;
  }

  /**
   * Helper method to update the linked objects in the cache
   */
  _updateLinks(
    objectHolders: Array<Osdk.Instance<any>>,
    status: Status,
    batch: BatchContext,
  ): Entry<SpecificLinkCacheKey> {
    return this.updateCollection(
      objectHolders,
      { append: false, status, sort: false },
      batch
    );
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
