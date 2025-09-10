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

import type { Osdk, PageResult } from "@osdk/api";
import deepEqual from "fast-deep-equal";
import type { Connectable, Observable } from "rxjs";
import type {
  CommonObserveOptions,
  Status,
} from "../../ObservableClient/common.js";
import type { BatchContext } from "../BatchContext.js";
import { type CacheKey, DEBUG_ONLY__cacheKeysToString } from "../CacheKey.js";
import { isObjectInstance } from "../isObjectInstance.js";
import type { Entry } from "../Layer.js";
import { type ObjectCacheKey } from "../object/ObjectCacheKey.js";
import { Query } from "../Query.js";
import type { SortingStrategy } from "../sorting/SortingStrategy.js";
import { NoOpSortingStrategy } from "../sorting/SortingStrategy.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import type {
  CollectionConnectableParams,
  CollectionStorageData,
} from "./BaseCollectionQuery.js";
import { createCollectionConnectable } from "./createCollectionConnectable.js";
import { removeDuplicates } from "./removeDuplicates.js";

/**
 * Base class for collection-based queries (lists and links)
 * Provides common functionality for working with collections of objects
 */
export abstract class BaseListQuery<
  KEY extends CacheKey<any, CollectionStorageData, any, any>,
  PAYLOAD,
  O extends CommonObserveOptions,
> extends Query<KEY, PAYLOAD, O> {
  /**
   * The sorting strategy to use for this collection
   * @protected
   */
  protected sortingStrategy: SortingStrategy = new NoOpSortingStrategy();

  // Collection-specific behavior is implemented by subclasses
  /**
   * Token for the next page of results
   * @protected
   */
  protected nextPageToken?: string;

  /**
   * Promise tracking an in-progress page fetch
   * @protected
   */
  protected pendingPageFetch?: Promise<void>;

  //
  // Shared Implementations
  //

  /**
   * Standard method to update a list of objects
   * Handles common list update patterns for both ListQuery and SpecificLinkQuery
   *
   * @param items Objects or cache keys to add to the list
   * @param status Status to set for the list
   * @param batch Batch context to use
   * @param append Whether to append to the existing list or replace it
   * @returns The updated entry
   */
  public _updateList<T extends ObjectCacheKey | Osdk.Instance<any>>(
    items: T[],
    status: Status,
    batch: BatchContext,
    append: boolean = false,
  ): Entry<KEY> {
    if (process.env.NODE_ENV !== "production") {
      this.logger
        ?.child({ methodName: "updateList" })
        .debug(
          `{status: ${status}, append: ${append}}`,
          JSON.stringify(items, null, 2),
        );
    }

    let objectCacheKeys: ObjectCacheKey[];

    if (items.length === 0) {
      objectCacheKeys = [];
    } else if (isObjectInstance(items[0])) {
      // Items are object instances, need to store them first
      objectCacheKeys = this.store.objects.storeOsdkInstances(
        items as Array<Osdk.Instance<any>>,
        batch,
      );
    } else {
      // Items are already cache keys
      objectCacheKeys = items as ObjectCacheKey[];
    }

    objectCacheKeys = this.#retainReleaseAppend(batch, append, objectCacheKeys);
    objectCacheKeys = this._sortCacheKeys(objectCacheKeys, batch);
    objectCacheKeys = removeDuplicates(objectCacheKeys, batch);

    return this.writeToStore({ data: objectCacheKeys }, status, batch);
  }

  /**
   * Common implementation for writing to store for collection-based queries
   * @param data The collection data to write to the store
   * @param status The status to set
   * @param batch The batch context
   */
  writeToStore(
    data: CollectionStorageData,
    status: Status,
    batch: BatchContext,
  ): Entry<KEY> {
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(data, entry.value)) {
      // Check if both data AND status are the same
      if (entry.status === status) {
        if (process.env.NODE_ENV !== "production") {
          this.logger?.child({ methodName: "writeToStore" }).debug(
            `Collection data was deep equal and status unchanged (${status}), skipping update`,
          );
        }
        // Return the existing entry without writing to avoid unnecessary notifications
        return entry;
      }

      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "writeToStore" }).debug(
          `Collection data was deep equal, just updating status from ${entry.status} to ${status}`,
        );
      }
      // Keep the same value but update status and lastUpdated
      return batch.write(this.cacheKey, entry.value, status);
    }

    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "writeToStore" }).debug(
        `{status: ${status}},`,
        DEBUG_ONLY__cacheKeysToString(data.data),
      );
    }

    const ret = batch.write(this.cacheKey, data, status);
    this.registerCacheChanges(batch);
    return ret;
  }

  /**
   * Register changes to the cache based on the specific collection type
   * Implemented by subclasses to handle specific change registration
   */
  protected abstract registerCacheChanges(batch: BatchContext): void;

  /**
   * Common method for managing object reference counting and appending results
   * Used by collection queries when updating object references
   *
   * @param batch The batch context to use
   * @param append Whether to append to existing objects or replace them
   * @param objectCacheKeys Array of object cache keys to process
   * @returns The final array of object cache keys after retain/release/append
   */
  #retainReleaseAppend(
    batch: BatchContext,
    append: boolean,
    objectCacheKeys: ObjectCacheKey[],
  ): ObjectCacheKey[] {
    const existingList = batch.read(this.cacheKey);

    // whether its append or update we need to retain all the new objects
    if (!batch.optimisticWrite) {
      if (!append) {
        // we need to release all the old objects
        // N.B. the store keeps the cache keys around for a bit so we don't
        // need to worry about them being GC'd before we re-retain them
        for (const objectCacheKey of existingList?.value?.data ?? []) {
          this.store.cacheKeys.release(objectCacheKey);
        }
      }

      for (const objectCacheKey of objectCacheKeys) {
        this.store.cacheKeys.retain(objectCacheKey);
      }
    }

    if (append) {
      objectCacheKeys = [
        ...existingList?.value?.data ?? [],
        ...objectCacheKeys,
      ];
    }
    return objectCacheKeys;
  }

  _dispose(): void {
    this.store.batch({}, (batch) => {
      const entry = batch.read(this.cacheKey);
      if (entry) {
        for (const objectCacheKey of entry.value?.data ?? []) {
          this.store.cacheKeys.release(objectCacheKey);
        }
      }
    });
  }

  /**
   * Creates a payload from collection parameters
   * Default implementation that covers common fields for all collection types
   * Subclasses may override to add type-specific fields if needed
   *
   * @param params Common collection parameters
   * @returns A typed payload for the specific collection type
   */
  protected createPayload(
    params: CollectionConnectableParams,
  ): PAYLOAD {
    return {
      resolvedList: params.resolvedData,
      isOptimistic: params.isOptimistic,
      fetchMore: this.fetchMore,
      hasMore: this.nextPageToken != null,
      status: params.status,
      lastUpdated: params.lastUpdated,
    } as unknown as PAYLOAD; // Type assertion needed since we don't know exact subtype
  }

  /**
   * Creates a connectable observable for this collection
   * Common implementation shared by all collection types
   *
   * @param subject The subject to connect to
   * @returns A connectable observable of the collection's payload type
   */
  protected _createConnectable(
    subject: Observable<SubjectPayload<KEY>>,
  ): Connectable<PAYLOAD> {
    return createCollectionConnectable<KEY, PAYLOAD>(
      subject,
      this.store,
      (params) => this.createPayload(params),
    );
  }

  /**
   * @override Reset pagination state before a fetch
   */
  protected _preFetch(): void {
    this.nextPageToken = undefined;
    super._preFetch();
  }

  /**
   * Common fetchMore implementation for pagination
   * Handles pending request management and loading states
   */
  fetchMore = (): Promise<void> => {
    if (this.pendingPageFetch) {
      return this.pendingPageFetch;
    }

    if (this.pendingFetch) {
      this.pendingPageFetch = new Promise(async (res) => {
        await this.pendingFetch;
        res(this.fetchMore());
      });
      return this.pendingPageFetch;
    }

    if (this.nextPageToken == null) {
      return Promise.resolve(undefined);
    }

    this.store.batch({}, (batch) => {
      this.setStatus("loading", batch);
    });

    this.pendingFetch = this.fetchPageAndUpdate(
      "loaded",
      this.abortController?.signal,
    ).then(() => void 0).finally(() => {
      this.pendingPageFetch = undefined;
    });
    return this.pendingFetch;
  };

  /**
   * Minimum number of results to load initially
   * May be overridden by subclasses for specific collection types
   * @protected
   */
  protected minResultsToLoad: number = 0;

  /**
   * Common _fetchAndStore implementation for pagination
   * Uses fetchPageAndUpdate to load the initial set of data
   * Will load multiple pages if necessary to reach minResultsToLoad
   */
  protected async _fetchAndStore(): Promise<void> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "_fetchAndStore" }).debug(
        "fetching pages",
      );
    }

    // Keep fetching pages until we have the minimum number of results or no more pages
    while (true) {
      const entry = await this.fetchPageAndUpdate(
        "loading",
        this.abortController?.signal,
      );

      if (!entry) {
        // we were aborted
        return;
      }

      // Check if we have enough results or no more pages
      const count = entry.value?.data.length || 0;
      if (count >= this.minResultsToLoad || this.nextPageToken == null) {
        break;
      }
    }

    this.store.batch({}, (batch) => {
      this.setStatus("loaded", batch);
    });

    return Promise.resolve();
  }

  /**
   * Template method for fetching a page of data and updating the store
   * Provides common error handling and abort signal checking
   *
   * @param status The status to set for the entry
   * @param signal Optional AbortSignal for cancellation
   * @returns A promise that resolves to the updated entry or undefined if aborted
   */
  protected async fetchPageAndUpdate(
    status: Status,
    signal: AbortSignal | undefined,
  ): Promise<Entry<KEY> | undefined> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "fetchPageAndUpdate" }).debug(
        `Fetching data with status: ${status}`,
      );
    }

    // Early abort check
    if (signal?.aborted) {
      return undefined;
    }

    try {
      // Call the subclass-specific implementation to fetch data
      const result = await this.fetchPageData(signal);

      // Check for abort again after fetch
      if (signal?.aborted) {
        return undefined;
      }

      // Store the fetched data using batch operations
      const { retVal } = this.store.batch({}, (batch) => {
        const append = this.nextPageToken != null;
        const finalStatus = result.nextPageToken ? status : "loaded";

        return this._updateList(
          this.store.objects.storeOsdkInstances(result.data, batch),
          finalStatus,
          batch,
          append,
        );
      });

      return retVal;
    } catch (error: unknown) {
      // Log any errors that occur
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "fetchPageAndUpdate" }).error(
          "Error fetching data",
          error,
        );
      }

      // For unexpected errors, write error status if not aborted
      if (!signal?.aborted) {
        const { retVal } = this.store.batch({}, (batch) => {
          return this.handleFetchError(error, status, batch);
        });
        return retVal;
      }

      // If aborted, just return undefined
      return undefined;
    }
  }

  /**
   * Abstract method that subclasses implement for their specific data fetching logic
   *
   * @param signal Optional AbortSignal for cancellation
   * @returns A promise that resolves to the fetched data
   */
  protected abstract fetchPageData(
    signal: AbortSignal | undefined,
  ): Promise<PageResult<Osdk.Instance<any>>>;

  /**
   * Handle fetch errors by setting appropriate error state
   * Default implementation that subclasses can override
   *
   * @param error The error that occurred
   * @param status The intended status if successful
   * @param batch The batch context to use
   * @returns The updated entry with error status
   */
  protected handleFetchError(
    _error: unknown,
    _status: Status,
    batch: BatchContext,
  ): Entry<KEY> {
    // Default implementation writes an empty list with error status
    // Most subclasses should be able to use this
    return this.writeToStore({ data: [] }, "error", batch);
  }

  /**
   * Sort the collection items using the configured sorting strategy
   * @param objectCacheKeys - The cache keys to sort
   * @param batch - The batch context
   * @returns Sorted array of cache keys
   */
  protected _sortCacheKeys(
    objectCacheKeys: ObjectCacheKey[],
    batch: BatchContext,
  ): ObjectCacheKey[] {
    return this.sortingStrategy.sortCacheKeys(objectCacheKeys, batch);
  }

  /**
   * Unified method for updating collection data in the store
   * Handles storing, sorting, deduplication, and reference counting
   *
   * @param items - Either object cache keys or object instances to update
   * @param options - Configuration options for the update
   * @param batch - The batch context to use
   * @returns The updated entry
   */
  protected updateCollection<T extends ObjectCacheKey | Osdk.Instance<any>>(
    items: T[],
    options: {
      append?: boolean;
      status: Status;
    },
    batch: BatchContext,
  ): Entry<KEY> {
    if (process.env.NODE_ENV !== "production") {
      const logger = process.env.NODE_ENV !== "production"
        ? this.logger?.child({ methodName: "updateCollection" })
        : this.logger;

      logger?.debug(
        `{status: ${options.status}, append: ${options.append}}`,
        JSON.stringify(items, null, 2),
      );
    }

    // Step 1: Convert items to object cache keys if needed
    let objectCacheKeys: ObjectCacheKey[];

    if (items.length === 0) {
      objectCacheKeys = [];
    } else if (isObjectInstance(items[0])) {
      // Items are object instances, need to store them first
      objectCacheKeys = this.store.objects.storeOsdkInstances(
        items as Array<Osdk.Instance<any>>,
        batch,
      );
    } else {
      // Items are already cache keys
      objectCacheKeys = items as ObjectCacheKey[];
    }

    // Step 2: Handle retain/release/append logic
    objectCacheKeys = this.#retainReleaseAppend(
      batch,
      options.append ?? false,
      objectCacheKeys,
    );

    // Step 3: Sort using the configured sorting strategy
    objectCacheKeys = this._sortCacheKeys(objectCacheKeys, batch);

    // Step 4: Remove duplicates
    objectCacheKeys = removeDuplicates(objectCacheKeys, batch);

    // Step 5: Write to store
    return this.writeToStore({ data: objectCacheKeys }, options.status, batch);
  }
}
