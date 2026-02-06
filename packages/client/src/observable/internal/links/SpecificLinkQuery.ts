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
  ObjectOrInterfaceDefinition,
  ObjectSet,
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
  ObserveLinks.Options<ObjectOrInterfaceDefinition, string>
> {
  #sourceApiName: string;
  #sourceTypeKind: "object" | "interface";
  #sourceUnderlyingObjectType: string;
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
    opts: ObserveLinks.Options<ObjectOrInterfaceDefinition, string>,
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
      this.#sourceTypeKind,
      this.#sourceUnderlyingObjectType,
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
    const client = this.store.client;
    const ontologyProvider = client[additionalContext].ontologyProvider;
    const isInterface = this.#sourceTypeKind === "interface";

    if (this.#orderBy && Object.keys(this.#orderBy).length > 0) {
      let targetTypeApiName: string;

      if (isInterface) {
        const interfaceMetadata = await ontologyProvider.getInterfaceDefinition(
          this.#sourceApiName,
        );
        const linkDef = interfaceMetadata.links?.[this.#linkName];
        if (!linkDef) {
          throw new Error(
            `Missing link definition for link '${this.#linkName}' on interface '${this.#sourceApiName}'`,
          );
        }
        targetTypeApiName = linkDef.targetTypeApiName;
      } else {
        const objectMetadata = await ontologyProvider.getObjectDefinition(
          this.#sourceApiName,
        );
        const linkDef = objectMetadata.links?.[this.#linkName];
        if (!linkDef?.targetType) {
          throw new Error(
            `Missing link definition or targetType for link '${this.#linkName}' on object type '${this.#sourceApiName}'`,
          );
        }
        targetTypeApiName = linkDef.targetType;
      }

      this.sortingStrategy = new OrderBySortingStrategy(
        targetTypeApiName,
        this.#orderBy,
      );
    }

    let linkQuery: ObjectSet<ObjectOrInterfaceDefinition>;

    if (isInterface) {
      const objectMetadata = await ontologyProvider.getObjectDefinition(
        this.#sourceUnderlyingObjectType,
      );

      const interfaceSet = client({
        type: "interface",
        apiName: this.#sourceApiName,
      } as InterfaceDefinition) as ObjectSet<ObjectOrInterfaceDefinition>;

      const objectFilteredByPk = client({
        type: "object",
        apiName: this.#sourceUnderlyingObjectType,
      } as ObjectTypeDefinition).where({
        [objectMetadata.primaryKeyApiName]: this.#sourcePk,
      } as WhereClause<any>);

      const filteredSource = interfaceSet.intersect(objectFilteredByPk);

      linkQuery = filteredSource.pivotTo(this.#linkName);
    } else {
      const objectMetadata = await ontologyProvider.getObjectDefinition(
        this.#sourceApiName,
      );

      const sourceSet = client({
        type: "object",
        apiName: this.#sourceApiName,
      } as ObjectTypeDefinition);

      const sourceQuery = sourceSet.where({
        [objectMetadata.primaryKeyApiName]: this.#sourcePk,
      } as WhereClause<any>);

      linkQuery = sourceQuery.pivotTo(this.#linkName);
    }

    if (signal?.aborted) {
      throw new Error("Aborted");
    }

    // Fetch the linked objects with pagination
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

    if (this.#orderBy && Object.keys(this.#orderBy).length > 0) {
      queryParams.$orderBy = this.#orderBy;
    }

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
    // We need to invalidate links in multiple cases:
    // 1. When the source object type matches the apiName (direct invalidation)
    // 2. When the source is an interface and the invalidated type implements it
    // 3. When the target type matches the invalidated type
    // 4. When the target is an interface and the invalidated type implements it

    if (
      this.#sourceTypeKind === "object" && this.#sourceApiName === objectType
    ) {
      changes?.modified.add(this.cacheKey);
      return this.revalidate(true);
    }

    return (async () => {
      const ontologyProvider = this.store.client[additionalContext]
        .ontologyProvider;

      if (this.#sourceTypeKind === "interface") {
        const objectMetadata = await ontologyProvider.getObjectDefinition(
          objectType,
        );
        if (this.#sourceApiName in objectMetadata.interfaceMap) {
          changes?.modified.add(this.cacheKey);
          return this.revalidate(true);
        }
      }

      let targetTypeApiName: string | undefined;
      let targetTypeKind: "object" | "interface" | undefined;

      if (this.#sourceTypeKind === "interface") {
        const interfaceMetadata = await ontologyProvider
          .getInterfaceDefinition(this.#sourceApiName);
        const linkDef = interfaceMetadata.links?.[this.#linkName];
        targetTypeApiName = linkDef?.targetTypeApiName;
        targetTypeKind = linkDef?.targetType;
      } else {
        const objectMetadata = await ontologyProvider
          .getObjectDefinition(this.#sourceApiName);
        const linkDef = objectMetadata.links?.[this.#linkName];
        targetTypeApiName = linkDef?.targetType;
        targetTypeKind = "object";
      }

      if (!targetTypeApiName) return;

      if (targetTypeApiName === objectType) {
        changes?.modified.add(this.cacheKey);
        return this.revalidate(true);
      }

      if (targetTypeKind === "interface") {
        const objectMetadata = await ontologyProvider.getObjectDefinition(
          objectType,
        );
        if (targetTypeApiName in objectMetadata.interfaceMap) {
          changes?.modified.add(this.cacheKey);
          return this.revalidate(true);
        }
      }
    })();
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
