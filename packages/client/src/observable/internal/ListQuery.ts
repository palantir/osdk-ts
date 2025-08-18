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
  Logger,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PageResult,
  PropertyKeys,
} from "@osdk/api";
import deepEqual from "fast-deep-equal";
import groupBy from "object.groupby";
import type { Connectable, Observable, Subscription } from "rxjs";
import invariant from "tiny-invariant";
import { additionalContext, type Client } from "../../Client.js";
import type { InterfaceHolder } from "../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import {
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type {
  ObjectHolder,
} from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ListPayload } from "../ListPayload.js";
import type {
  CommonObserveOptions,
  Status,
} from "../ObservableClient/common.js";
import type {
  CollectionConnectableParams,
  CollectionStorageData,
} from "./BaseCollectionQuery.js";
import { type CacheKey, DEBUG_ONLY__cacheKeysToString } from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import { type Changes, DEBUG_ONLY__changesToString } from "./Changes.js";
import { createCollectionConnectable } from "./createCollectionConnectable.js";
import { isObjectInstance } from "./isObjectInstance.js";
import type { Entry } from "./Layer.js";
import { objectSortaMatchesWhereClause as objectMatchesWhereClause } from "./objectMatchesWhereClause.js";
import { type ObjectCacheKey, storeOsdkInstances } from "./ObjectQuery.js";
import type { OptimisticId } from "./OptimisticId.js";
import { Query } from "./Query.js";
import { removeDuplicates } from "./removeDuplicates.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";
import type { SortingStrategy } from "./sorting/SortingStrategy.js";
import {
  NoOpSortingStrategy,
  OrderBySortingStrategy,
} from "./sorting/SortingStrategy.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";

export interface ListStorageData extends CollectionStorageData {}

export interface ListCacheKey extends
  CacheKey<
    "list",
    ListStorageData,
    ListQuery,
    [
      type: "object" | "interface",
      apiName: string,
      whereClause: Canonical<SimpleWhereClause>,
      orderByClause: Canonical<Record<string, "asc" | "desc" | undefined>>,
    ]
  > //
{}

export interface BaseListCacheKey<
  T_Type extends string,
  T_Query extends Query<any, any, any>,
  T_KeyFactoryArgs extends any[] = any[],
> extends CacheKey<T_Type, ListStorageData, T_Query, T_KeyFactoryArgs> {
}

export const API_NAME_IDX = 1;
export const TYPE_IDX = 0;
export const WHERE_IDX = 2;
export const ORDER_BY_IDX = 3;

export interface ListQueryOptions extends CommonObserveOptions {
  pageSize?: number;
}

type ExtractRelevantObjectsResult = Record<"added" | "modified", {
  all: (ObjectHolder | InterfaceHolder)[];
  strictMatches: Set<(ObjectHolder | InterfaceHolder)>;
  sortaMatches: Set<(ObjectHolder | InterfaceHolder)>;
}>;

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
  protected pendingPageFetch?: Promise<unknown>;

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
      const logger = process.env.NODE_ENV !== "production"
        ? this.logger?.child({ methodName: "updateList" })
        : this.logger;

      logger?.debug(
        `{status: ${status}, append: ${append}}`,
        JSON.stringify(items, null, 2),
      );
    }

    let objectCacheKeys: ObjectCacheKey[];

    if (items.length === 0) {
      objectCacheKeys = [];
    } else if (isObjectInstance(items[0])) {
      // Items are object instances, need to store them first
      objectCacheKeys = this.storeObjects(
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
          this.store.release(objectCacheKey);
        }
      }

      for (const objectCacheKey of objectCacheKeys) {
        this.store.retain(objectCacheKey);
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
    // eslint-disable-next-line no-console
    console.log("DISPOSE LIST QUERY");
    this.store.batch({}, (batch) => {
      const entry = batch.read(this.cacheKey);
      if (entry) {
        for (const objectCacheKey of entry.value?.data ?? []) {
          this.store.release(objectCacheKey);
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
          this.storeObjects(result.data, batch),
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
      objectCacheKeys = this.storeObjects(
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

export class ListQuery extends BaseListQuery<
  ListCacheKey,
  ListPayload,
  ListQueryOptions
> {
  // pageSize?: number; // this is the internal page size. we need to track this properly

  #type: "object" | "interface";
  #apiName: string;
  #whereClause: Canonical<SimpleWhereClause>;

  // Using base class minResultsToLoad instead of a private property
  #orderBy: Canonical<Record<string, "asc" | "desc" | undefined>>;
  #objectSet: ObjectSet<ObjectTypeDefinition>;

  /**
   * Register changes to the cache specific to ListQuery
   */
  protected registerCacheChanges(batch: BatchContext): void {
    batch.changes.registerList(this.cacheKey);
  }

  constructor(
    store: Store,
    subject: Observable<SubjectPayload<ListCacheKey>>,
    apiType: "object" | "interface",
    apiName: string,
    whereClause: Canonical<SimpleWhereClause>,
    orderBy: Canonical<Record<string, "asc" | "desc" | undefined>>,
    cacheKey: ListCacheKey,
    opts: ListQueryOptions,
  ) {
    super(
      store,
      subject,
      opts,
      cacheKey,
      process.env.NODE_ENV !== "production"
        ? (
          store.client[additionalContext].logger?.child({}, {
            msgPrefix: `ListQuery<${
              cacheKey.otherKeys.map(x => JSON.stringify(x)).join(", ")
            }>`,
          })
        )
        : undefined,
    );

    this.#type = apiType;
    this.#apiName = apiName;
    this.#whereClause = whereClause;
    this.#orderBy = orderBy;
    this.#objectSet = store.client({
      type: this.#type,
      apiName: this.#apiName,
    } as ObjectTypeDefinition)
      .where(this.#whereClause);
    // Initialize the sorting strategy
    this.sortingStrategy = new OrderBySortingStrategy(
      this.#apiName,
      this.#orderBy,
    );
    // Initialize the minResultsToLoad inherited from BaseCollectionQuery
    this.minResultsToLoad = 0;
  }

  get canonicalWhere(): Canonical<SimpleWhereClause> {
    return this.#whereClause;
  }

  /**
   * Implements fetchPageData from BaseCollectionQuery template method
   * Fetches a page of data
   */
  protected async fetchPageData(
    signal: AbortSignal | undefined,
  ): Promise<PageResult<Osdk.Instance<any>>> {
    // Fetch the data with pagination
    const resp = await this.#objectSet.fetchPage({
      $nextPageToken: this.nextPageToken,
      $pageSize: this.options.pageSize,
      // For now this keeps the shared test code from falling apart
      // but shouldn't be needed ideally
      ...(Object.keys(this.#orderBy).length > 0
        ? { $orderBy: this.#orderBy }
        : {}),
    });

    if (signal?.aborted) {
      throw new Error("Aborted");
    }

    this.nextPageToken = resp.nextPageToken;
    let fetchedData = resp.data;

    // Our caching really expects to have the full objects in the list
    // so we need to fetch them all here
    if (this.#type === "interface") {
      fetchedData = await reloadDataAsFullObjects(
        this.store.client,
        fetchedData,
      );
    }

    return {
      ...resp,
      // might be replaced by interface
      data: fetchedData,
    };
  }

  /**
   * Handle fetch errors by setting appropriate error state and notifying subscribers
   */
  protected handleFetchError(
    error: unknown,
    _status: Status,
    batch: BatchContext,
  ): Entry<ListCacheKey> {
    this.logger?.error("error", error);
    this.store.getSubject(this.cacheKey).error(error);

    // We don't call super.handleFetchError because ListQuery has special error handling
    // but we still use writeToStore to create a properly structured Entry
    return this.writeToStore({ data: [] }, "error", batch);
  }

  /**
   * Will revalidate the list if its query is affected by invalidating the
   * apiName of the object type passed in.
   *
   * @param apiName to invalidate
   * @returns
   */
  revalidateObjectType = async (
    apiName: string,
  ): Promise<void> => {
    if (this.#type === "object") {
      if (this.#apiName === apiName) {
        await this.revalidate(/* force */ true);
        return;
      } else {
        return;
      }
    }
    //
    const objectMetadata = await this.store.client.fetchMetadata({
      type: "object",
      apiName,
    });

    if (this.#apiName in objectMetadata.interfaceMap) {
      await this.revalidate(/* force */ true);
      return;
    }
  };

  /**
   * Note: This method is not async because I want it to return right after it
   *       finishes the synchronous updates. The promise that is returned
   *       will resolve after the revalidation is complete.
   * @param changes
   * @param optimisticId
   * @returns If revalidation is needed, a promise that resolves after the
   *          revalidation is complete. Otherwise, undefined.
   */

  maybeUpdateAndRevalidate = (
    changes: Changes,
    optimisticId: OptimisticId | undefined,
  ): Promise<void> | undefined => {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "maybeUpdateAndRevalidate" }).debug(
        DEBUG_ONLY__changesToString(changes),
      );
      this.logger?.child({ methodName: "maybeUpdateAndRevalidate" }).debug(
        `Already in changes? ${changes.modified.has(this.cacheKey)}`,
      );
    }

    if (changes.modified.has(this.cacheKey)) return;
    // mark ourselves as updated so we don't infinite recurse.
    changes.modified.add(this.cacheKey);

    try {
      const relevantObjects = this._extractRelevantObjects(changes);

      // If we got purely strict matches we can just update the list and move
      // on with our lives. But if we got sorta matches, then we need to revalidate
      // the list so we preemptively set it to loading to avoid thrashing the store.
      const status = optimisticId
          || relevantObjects.added.sortaMatches.size > 0
          || relevantObjects.modified.sortaMatches.size > 0
        ? "loading"
        : "loaded";

      // while we only push updates for the strict matches, we still need to
      // trigger the list updating if some of our objects changed

      const newList: Array<ObjectCacheKey> = [];

      let needsRevalidation = false;
      this.store.batch({ optimisticId, changes }, (batch) => {
        const existingList = new Set(
          batch.read(this.cacheKey)?.value?.data,
        );

        const toAdd = new Set<ObjectHolder | InterfaceHolder>(
          // easy case. objects are new to the cache and they match this filter
          relevantObjects.added.strictMatches,
        );

        // anything thats been deleted can be removed, so start there
        const toRemove = new Set<CacheKey>(changes.deleted);

        // deal with the modified objects
        for (const obj of relevantObjects.modified.all) {
          if (relevantObjects.modified.strictMatches.has(obj)) {
            const objectCacheKey = this.store.getCacheKey<ObjectCacheKey>(
              "object",
              obj.$objectType,
              obj.$primaryKey,
            );

            if (!existingList.has(objectCacheKey)) {
              // object is new to the list
              toAdd.add(obj);
            }
            continue;
          } else if (batch.optimisticWrite) {
            // we aren't removing objects in optimistic mode
            // we also don't want to trigger revalidation in optimistic mode
            // as it should be triggered when the optimistic job is done
            continue;
          } else {
            // object is no longer a strict match
            const existingObjectCacheKey = this.store.getCacheKey<
              ObjectCacheKey
            >(
              "object",
              obj.$objectType,
              obj.$primaryKey,
            );

            toRemove.add(existingObjectCacheKey);

            if (relevantObjects.modified.sortaMatches.has(obj)) {
              // since it might still be in the list we need to revalidate
              needsRevalidation = true;
            }
          }
        }

        for (const key of existingList) {
          if (toRemove.has(key)) continue;
          newList.push(key);
        }
        for (const obj of toAdd) {
          newList.push(
            this.store.getCacheKey<ObjectCacheKey>(
              "object",
              obj.$objectType,
              obj.$primaryKey,
            ),
          );
        }

        this._updateList(
          newList,
          status,
          batch,
          /* append */ false,
        );
      });

      if (needsRevalidation) {
        return this.revalidate(true);
      }
      return undefined;
    } finally {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "maybeUpdateAndRevalidate" })
          .debug("in finally");
      }
    }
  };

  #matchType(obj: ObjectHolder | InterfaceHolder): false | "strict" | "sorta" {
    // if its a strict match we can just insert it into place
    if (objectMatchesWhereClause(obj, this.#whereClause, true)) {
      return "strict";
    }
    // sorta match means it used a filter we cannot use on the frontend
    if (objectMatchesWhereClause(obj, this.#whereClause, false)) {
      return "sorta";
    }
    return false;
  }

  protected _extractRelevantObjects(
    changes: Changes,
  ): ExtractRelevantObjectsResult {
    // TODO refactor this ternary into subclasses
    const relevantObjects = this.#type === "object"
      ? this.#extractRelevantObjectsForTypeObject(changes)
      : this.#extractRelevantObjectsForTypeInterface(changes);

    // categorize
    for (const group of Object.values(relevantObjects)) {
      for (const obj of group.all ?? []) {
        const matchType = this.#matchType(obj);
        if (matchType) {
          group[`${matchType}Matches`].add(obj);
        }
      }
    }

    return relevantObjects;
  }

  #extractRelevantObjectsForTypeInterface(
    changes: Changes,
  ): ExtractRelevantObjectsResult {
    const matchesApiName = ([, object]: [unknown, ObjectHolder]) => {
      return this.#apiName in object[ObjectDefRef].interfaceMap;
    };

    const added = Array.from(changes.addedObjects).filter(matchesApiName).map((
      [, object],
    ) => object.$as(this.#apiName));

    const modified = Array.from(changes.modifiedObjects).filter(matchesApiName)
      .map((
        [, object],
      ) => object.$as(this.#apiName));

    return {
      added: {
        all: added,
        strictMatches: new Set(),
        sortaMatches: new Set(),
      },
      modified: {
        all: modified,
        strictMatches: new Set(),
        sortaMatches: new Set(),
      },
    };
  }

  #extractRelevantObjectsForTypeObject(
    changes: Changes,
  ): ExtractRelevantObjectsResult {
    return {
      added: {
        all: changes.addedObjects.get(this.cacheKey.otherKeys[API_NAME_IDX])
          ?? [],
        strictMatches: new Set(),
        sortaMatches: new Set(),
      },
      modified: {
        all: changes.modifiedObjects.get(this.cacheKey.otherKeys[API_NAME_IDX])
          ?? [],
        strictMatches: new Set(),
        sortaMatches: new Set(),
      },
    };
  }

  registerStreamUpdates(sub: Subscription): void {
    const logger = process.env.NODE_ENV !== "production"
      ? this.logger?.child({ methodName: "registerStreamUpdates" })
      : this.logger;

    if (process.env.NODE_ENV !== "production") {
      logger?.child({ methodName: "observeList" }).info(
        "Subscribing from websocket",
      );
    }

    // FIXME: We should only do this once. If we already have one we should probably
    // just reuse it.

    const websocketSubscription = this.#objectSet.subscribe({
      onChange: this.#onOswChange.bind(this),
      onError: this.#onOswError.bind(this),
      onOutOfDate: this.#onOswOutOfDate.bind(this),
      onSuccessfulSubscription: this.#onOswSuccessfulSubscription.bind(this),
    });

    sub.add(() => {
      if (process.env.NODE_ENV !== "production") {
        logger?.child({ methodName: "observeList" }).info(
          "Unsubscribing from websocket",
        );
      }

      websocketSubscription.unsubscribe();
    });
  }

  #onOswSuccessfulSubscription(): void {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child(
        { methodName: "onSuccessfulSubscription" },
      ).debug("");
    }
  }

  #onOswOutOfDate(): void {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child(
        { methodName: "onOutOfDate" },
      ).debug("");
    }
  }

  #onOswError(errors: {
    subscriptionClosed: boolean;
    error: any;
  }) {
    if (this.logger) {
      this.logger?.child({ methodName: "onError" }).error(
        "subscription errors",
        errors,
      );
    }
  }

  #onOswChange(
    { object: objOrIface, state }: ObjectUpdate<ObjectTypeDefinition, string>,
  ): void {
    const logger = process.env.NODE_ENV !== "production"
      ? this.logger?.child({ methodName: "registerStreamUpdates" })
      : this.logger;

    if (process.env.NODE_ENV !== "production") {
      logger?.child({ methodName: "onChange" }).debug(
        `Got an update of type: ${state}`,
        objOrIface,
      );
    }

    if (state === "ADDED_OR_UPDATED") {
      const object: ObjectHolder =
        (objOrIface.$apiName !== objOrIface.$objectType
          ? objOrIface.$as(objOrIface.$objectType)
          : objOrIface) as unknown as ObjectHolder;

      this.store.batch({}, (batch) => {
        this.storeObjects([object as Osdk.Instance<any>], batch);
      });
    } else if (state === "REMOVED") {
      this.#onOswRemoved(objOrIface, logger);
    }
  }

  #onOswRemoved(
    objOrIface: Osdk.Instance<ObjectTypeDefinition, never, string, {}>,
    logger: Logger | undefined,
  ) {
    this.store.batch({}, (batch) => {
      // Read the truth layer (since not optimistic)
      const existing = batch.read(this.cacheKey);
      invariant(
        existing,
        "the truth value for our list should exist as we already subscribed",
      );
      if (existing.status === "loaded") {
        const objectCacheKey = this.store.getCacheKey<ObjectCacheKey>(
          "object",
          objOrIface.$objectType,
          objOrIface.$primaryKey,
        );
        // remove the object from the list
        const newObjects = existing.value?.data.filter(
          (o) => o !== objectCacheKey,
        );

        // If the filter didn't change anything, then the list was already
        // updated (or didn't exist, which is nonsensical)
        if (newObjects?.length !== existing.value?.data.length) {
          batch.changes.registerList(this.cacheKey);
          batch.write(
            this.cacheKey,
            { data: newObjects ?? [] },
            "loaded",
          );
          // Should there be an else for this case? Do we need to invalidate
          // the paging tokens we may have? FIXME
        }

        return;
      }
      // There may be a tiny race here where OSW tells us the object has
      // been removed but an outstanding invalidation of this query is
      // about to return. In this case, its possible that we remove this item
      // from the list and then the returned list load re-adds it.
      // To avoid this, we will just force reload the query to be sure
      // we don't leave things in a bad state.
      if (process.env.NODE_ENV !== "production") {
        logger?.info(
          "Removing an object from an object list that is in the middle of being loaded.",
          existing,
        );
      }

      this.revalidate(/* force */ true).catch((e: unknown) => {
        if (logger) {
          logger?.error("Uncaught error while revalidating list", e);
        } else {
          // Make sure we write to the console if there is no logger!
          // eslint-disable-next-line no-console
          console.error("Uncaught error while revalidating list", e);
        }
      });
    });
  }
}

// Hopefully this can go away when we can just request the full object properties on first load
async function reloadDataAsFullObjects(
  client: Client,
  data: Osdk.Instance<any>[],
) {
  const groups = groupBy(data, (x) => x.$objectType);
  const objectTypeToPrimaryKeyToObject = Object.fromEntries(
    await Promise.all(
      Object.entries(groups).map<
        Promise<
          [
            /** objectType **/ string,
            Record<string | number, Osdk.Instance<ObjectTypeDefinition>>,
          ]
        >
      >(async ([apiName, objects]) => {
        // to keep InternalSimpleOsdkInstance simple, we make both the `ObjectDefRef` and
        // the `InterfaceDefRef` optional but we know that the right one is on there
        // thus we can `!`
        const objectDef = (objects[0] as ObjectHolder)[UnderlyingOsdkObject][
          ObjectDefRef
        ]!;
        const where: SimpleWhereClause = {
          [objectDef.primaryKeyApiName]: {
            $in: objects.map(x => x.$primaryKey),
          },
        };

        const result = await client(
          objectDef as ObjectTypeDefinition,
        ).where(where).fetchPage();
        return [
          apiName,
          Object.fromEntries(result.data.map(
            x => [x.$primaryKey, x],
          )),
        ];
      }),
    ),
  );

  data = data.map((obj) => {
    invariant(
      objectTypeToPrimaryKeyToObject[obj.$objectType][obj.$primaryKey],
      `Could not find object ${obj.$objectType} ${obj.$primaryKey}`,
    );
    return objectTypeToPrimaryKeyToObject[obj.$objectType][obj.$primaryKey];
  });

  return data;
}

export function isListCacheKey(
  cacheKey: CacheKey,
): cacheKey is ListCacheKey {
  return cacheKey.type === "list";
}

/**
 * Copied from @osdk/api
 */
type ObjectUpdate<
  O extends ObjectOrInterfaceDefinition,
  P extends PropertyKeys<O>,
> = {
  object: Osdk.Instance<O, never, P>;
  state: "ADDED_OR_UPDATED" | "REMOVED";
};
