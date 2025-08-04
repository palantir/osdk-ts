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

import type { Osdk } from "@osdk/api";
import deepEqual from "fast-deep-equal";
import { type Connectable, type Observable } from "rxjs";
import type {
  CommonObserveOptions,
  Status,
} from "../ObservableClient/common.js";
import type { CacheKey } from "./CacheKey.js";
import { createCollectionConnectable } from "./createCollectionConnectable.js";
import type { Entry } from "./Layer.js";
import { type ObjectCacheKey, storeOsdkInstances } from "./ObjectQuery.js";
import { Query } from "./Query.js";
import type { BatchContext, SubjectPayload } from "./Store.js";

// Common interface for collection storage
export interface CollectionStorageData {
  data: ObjectCacheKey[];
}

// Empty base class as a starting point
/**
 * Common parameters available for constructing a collection payload
 */
export interface CollectionConnectableParams {
  /**
   * Array of resolved objects
   */
  resolvedData: any[];

  /**
   * Whether the data is from an optimistic update
   */
  isOptimistic: boolean;

  /**
   * Current loading status
   */
  status: Status;

  /**
   * Timestamp of the last update
   */
  lastUpdated: number;
}

/**
 * Base class for collection-based queries (lists and links)
 * Provides common functionality for working with collections of objects
 */
export abstract class BaseCollectionQuery<
  KEY extends CacheKey<any, CollectionStorageData, any, any>,
  PAYLOAD,
  O extends CommonObserveOptions,
> extends Query<KEY, PAYLOAD, O> {
  /**
   * Token for the next page of results
   * @protected
   */
  protected nextPageToken?: string;

  /**
   * Promise tracking an in-progress page fetch
   * @protected
   */
  protected pendingPageFetch?: Promise<unknown>;
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
        `{status: ${status}}`,
        this.formatDebugOutput(data),
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
   * Format the collection data for debug output
   * May be overridden by subclasses to provide more specific debug formatting
   */
  protected formatDebugOutput(data: CollectionStorageData): any {
    return data;
  }

  /**
   * Common method to store objects in the cache and return their cache keys
   * Used by collection queries when storing object references
   *
   * @param objects Array of objects to store
   * @param batch The batch context to use
   * @returns Array of cache keys for the stored objects
   */
  protected storeObjects(
    objects: Array<Osdk.Instance<any>>,
    batch: BatchContext,
  ): Array<ObjectCacheKey> {
    // Store the individual objects in their respective cache entries
    return objects.length > 0
      ? storeOsdkInstances(this.store, objects, batch)
      : [];
  }

  /**
   * Creates a payload from collection parameters
   * Implemented by subclasses to format their specific payload types
   *
   * @param params Common collection parameters
   * @returns A typed payload for the specific collection type
   */
  protected abstract createPayload(
    params: CollectionConnectableParams,
  ): PAYLOAD;

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
  fetchMore = (): Promise<unknown> => {
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
      return Promise.resolve();
    }

    this.store.batch({}, (batch) => {
      this.setStatus("loading", batch);
    });

    this.pendingFetch = this.fetchPageAndUpdate(
      "loaded",
      this.abortController?.signal,
    ).finally(() => {
      this.pendingPageFetch = undefined;
    });
    return this.pendingFetch;
  };

  /**
   * Common _fetchAndStore implementation for pagination
   * Uses fetchPageAndUpdate to load the initial set of data
   */
  protected async _fetchAndStore(): Promise<void> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "_fetchAndStore" }).debug(
        "fetching pages",
      );
    }

    // Initial fetch of data
    const entry = await this.fetchPageAndUpdate(
      "loading",
      this.abortController?.signal,
    );

    if (!entry) {
      // we were aborted
      return;
    }

    this.store.batch({}, (batch) => {
      this.setStatus("loaded", batch);
    });

    return Promise.resolve();
  }

  /**
   * Abstract method for fetching a page of data and updating the store
   * Implemented by subclasses to handle their specific data fetching logic
   *
   * @param status The status to set for the entry
   * @param signal Optional AbortSignal for cancellation
   * @returns A promise that resolves to the updated entry or undefined if aborted
   */
  protected abstract fetchPageAndUpdate(
    status: Status,
    signal: AbortSignal | undefined,
  ): Promise<Entry<KEY> | undefined>;
}
