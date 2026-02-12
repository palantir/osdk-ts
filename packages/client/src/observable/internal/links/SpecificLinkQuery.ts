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
  PageResult,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import deepEqual from "fast-deep-equal";
import { type Subject } from "rxjs";
import { additionalContext } from "../../../Client.js";
import type { SpecificLinkPayload } from "../../LinkPayload.js";
import type { Status } from "../../ObservableClient/common.js";
import type { ObserveLinks } from "../../ObservableClient/ObserveLink.js";
import { BaseListQuery } from "../base-list/BaseListQuery.js";
import type { BatchContext } from "../BatchContext.js";
import type { CacheKey } from "../CacheKey.js";
import type { Canonical } from "../Canonical.js";
import type { Changes } from "../Changes.js";
import type { Entry } from "../Layer.js";
import type { OptimisticId } from "../OptimisticId.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import { OrderBySortingStrategy } from "../sorting/SortingStrategy.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import { tombstone } from "../tombstone.js";
import type { SpecificLinkCacheKey } from "./SpecificLinkCacheKey.js";

/**
 * Query implementation for retrieving linked objects from a specific object.
 * - Stores links as ObjectCacheKey[] references
 * - Creates indirect dependencies on linked objects
 * - Supports filtering and sorting of linked collections
 * - Handles proper invalidation of related objects
 */
export class SpecificLinkQuery extends BaseListQuery<
  SpecificLinkCacheKey,
  SpecificLinkPayload,
  ObserveLinks.Options<ObjectTypeDefinition, string>
> {
  #sourceApiName: string;
  #sourcePk: PrimaryKeyType<ObjectTypeDefinition>;
  #linkName: string;
  #whereClause: Canonical<SimpleWhereClause>;
  #orderBy: Canonical<Record<string, "asc" | "desc" | undefined>>;

  /**
   * Register changes to the cache specific to SpecificLinkQuery
   */
  protected registerCacheChanges(batch: BatchContext): void {
    batch.changes.modified.add(this.cacheKey);
  }

  constructor(
    store: Store,
    subject: Subject<SubjectPayload<SpecificLinkCacheKey>>,
    cacheKey: SpecificLinkCacheKey,
    opts: ObserveLinks.Options<
      ObjectTypeDefinition,
      string
    >,
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

    // Extract the necessary parameters from the cache key
    [
      this.#sourceApiName,
      this.#sourcePk,
      this.#linkName,
      this.#whereClause,
      this.#orderBy,
    ] = cacheKey.otherKeys;
  }

  // _fetchAndStore is now implemented in BaseCollectionQuery

  /**
   * Implements fetchPageData from the BaseCollectionQuery template method pattern
   * Fetches a page of linked objects
   */
  protected async fetchPageData(
    signal: AbortSignal | undefined,
  ): Promise<PageResult<Osdk.Instance<any>>> {
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

    // Initialize sorting strategy with the link's target object type
    if (this.#orderBy && Object.keys(this.#orderBy).length > 0) {
      const linkDef = sourceMetadata.links?.[this.#linkName];
      if (!linkDef?.targetType) {
        throw new Error(
          `Missing link definition or targetType for link '${this.#linkName}' on object type '${this.#sourceApiName}'`,
        );
      }
      this.sortingStrategy = new OrderBySortingStrategy(
        linkDef.targetType,
        this.#orderBy,
      );
    }

    // Query for the specific source object
    const sourceQuery = client(sourceObjectDef).where({
      [sourceMetadata.primaryKeyApiName]: this.#sourcePk,
    } as WhereClause<any>);

    // Pivot to the linked objects
    const linkQuery = sourceQuery.pivotTo(this.#linkName);

    // Check for abort signal again before fetching
    if (signal?.aborted) {
      throw new Error("Aborted");
    }

    // Fetch the linked objects with pagination
    // Add orderBy to the query parameters if specified
    const queryParams: {
      $pageSize: number;
      $nextPageToken: string | undefined;
      $includeRid: true;
      $orderBy?: Record<string, "asc" | "desc" | undefined>;
      $where?: Record<string, unknown>;
    } = {
      $pageSize: this.getEffectiveFetchPageSize(),
      $nextPageToken: this.nextPageToken,
      $includeRid: true,
    };

    // Include orderBy if it has entries
    if (this.#orderBy && Object.keys(this.#orderBy).length > 0) {
      queryParams.$orderBy = this.#orderBy;
    }

    // Include whereClause if it has entries
    if (this.#whereClause && Object.keys(this.#whereClause).length > 0) {
      queryParams.$where = this.#whereClause;
    }

    const response = await linkQuery.fetchPage(queryParams);

    // Store the next page token for pagination
    this.nextPageToken = response.nextPageToken;

    return response;
  }

  /**
   * Removes a link query from the store
   */
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

  invalidateObjectType = (
    objectType: string,
    changes: Changes | undefined,
  ): Promise<void> => {
    // We need to invalidate links in two cases:
    // 1. When the source object type matches the apiName (direct invalidation)
    // 2. When the target object type might be the invalidated type (affected by target changes)

    // For case 1 - direct source object type match
    if (this.#sourceApiName === objectType) {
      changes?.modified.add(this.cacheKey);
      return this.revalidate(true);
    } else {
      // For case 2 - check if the link's target type matches the invalidated type
      // We need to use the ontology provider to get the link metadata
      // Since this is async, we'll collect all the metadata check promises
      return (async () => {
        // Get the source object metadata to determine link target type
        const sourceMetadata = await this.store.client[additionalContext]
          .ontologyProvider
          .getObjectDefinition(this.#sourceApiName);

        const linkDef = sourceMetadata.links?.[this.#linkName];
        if (!linkDef || linkDef.targetType !== objectType) return;

        const promise = this.revalidate(true);
        changes?.modified.add(this.cacheKey);
        return promise;
      })();
    }
  };
}

/**
 * Type guard to check if a cache key is a SpecificLinkCacheKey
 */
export function isSpecificLinkCacheKey(
  key: CacheKey,
): key is SpecificLinkCacheKey {
  return key.type === "specificLink";
}
