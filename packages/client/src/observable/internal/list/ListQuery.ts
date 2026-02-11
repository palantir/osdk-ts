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
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  PageResult,
  PropertyKeys,
} from "@osdk/api";
import type { Observable, Subscription } from "rxjs";
import invariant from "tiny-invariant";
import { additionalContext } from "../../../Client.js";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import type {
  ObjectHolder,
} from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import type { ListPayload } from "../../ListPayload.js";
import type { Status } from "../../ObservableClient/common.js";
import { BaseListQuery } from "../base-list/BaseListQuery.js";
import type { BatchContext } from "../BatchContext.js";
import { type CacheKey } from "../CacheKey.js";
import type { Canonical } from "../Canonical.js";
import { type Changes, DEBUG_ONLY__changesToString } from "../Changes.js";
import { getObjectTypesThatInvalidate } from "../getObjectTypesThatInvalidate.js";
import type { Entry } from "../Layer.js";
import { type ObjectCacheKey } from "../object/ObjectCacheKey.js";
import { objectSortaMatchesWhereClause as objectMatchesWhereClause } from "../objectMatchesWhereClause.js";
import type { OptimisticId } from "../OptimisticId.js";
import type { PivotInfo } from "../PivotCanonicalizer.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import { OrderBySortingStrategy } from "../sorting/SortingStrategy.js";
import type { Store } from "../Store.js";
import type { SubjectPayload } from "../SubjectPayload.js";
import {
  INTERSECT_IDX,
  type ListCacheKey,
  ORDER_BY_IDX,
  PIVOT_IDX,
  WHERE_IDX,
} from "./ListCacheKey.js";
export {
  API_NAME_IDX,
  INTERSECT_IDX,
  PIVOT_IDX,
  RDP_IDX,
  RIDS_IDX,
} from "./ListCacheKey.js";
import type { ListQueryOptions } from "./ListQueryOptions.js";

type ExtractRelevantObjectsResult = Record<"added" | "modified", {
  all: (ObjectHolder | InterfaceHolder)[];
  strictMatches: Set<(ObjectHolder | InterfaceHolder)>;
  sortaMatches: Set<(ObjectHolder | InterfaceHolder)>;
}>;

/**
 * Base class for filtered and sorted object collection queries.
 * - Handles where clause filtering and orderBy sorting
 * - Manages pagination through fetchMore
 * - Auto-updates when matching objects change
 * - Uses canonicalized cache keys for consistency
 */
export abstract class ListQuery extends BaseListQuery<
  ListCacheKey,
  ListPayload,
  ListQueryOptions
> {
  // pageSize?: number; // this is the internal page size. we need to track this properly

  protected apiName: string;
  #whereClause: Canonical<SimpleWhereClause>;

  // Using base class minResultsToLoad instead of a private property
  #orderBy: Canonical<Record<string, "asc" | "desc" | undefined>>;
  #intersectWith: Canonical<Array<Canonical<SimpleWhereClause>>> | undefined;
  #pivotInfo: Canonical<PivotInfo> | undefined;
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
    apiName: string,
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

    this.apiName = apiName;
    this.#whereClause = cacheKey.otherKeys[WHERE_IDX];
    this.#orderBy = cacheKey.otherKeys[ORDER_BY_IDX];
    this.#intersectWith = cacheKey.otherKeys[INTERSECT_IDX];
    this.#pivotInfo = cacheKey.otherKeys[PIVOT_IDX];
    this.#objectSet = this.createObjectSet(store);

    // Only initialize the sorting strategy here if there's no pivotTo.
    // When pivotTo is used, the target type differs from apiName, so we
    // defer initialization to fetchPageData where we can resolve the actual type.
    if (!this.#pivotInfo) {
      this.sortingStrategy = new OrderBySortingStrategy(
        this.apiName,
        this.#orderBy,
      );
    }

    if (opts.autoFetchMore === true) {
      this.minResultsToLoad = Number.MAX_SAFE_INTEGER;
    } else if (typeof opts.autoFetchMore === "number") {
      this.minResultsToLoad = Math.max(0, opts.autoFetchMore);
    } else {
      this.minResultsToLoad = 0;
    }
  }

  get canonicalWhere(): Canonical<SimpleWhereClause> {
    return this.#whereClause;
  }

  get canonicalIntersectWith():
    | Canonical<Array<Canonical<SimpleWhereClause>>>
    | undefined
  {
    return this.#intersectWith;
  }

  get canonicalPivotInfo(): Canonical<PivotInfo> | undefined {
    return this.#pivotInfo;
  }

  /**
   * Create the ObjectSet for this query.
   */
  protected abstract createObjectSet(
    store: Store,
  ): ObjectSet<ObjectTypeDefinition>;

  /**
   * Implements fetchPageData from BaseCollectionQuery template method
   * Fetches a page of data
   */
  protected async fetchPageData(
    signal: AbortSignal | undefined,
  ): Promise<PageResult<Osdk.Instance<any>>> {
    if (
      Object.keys(this.#orderBy).length > 0
      && !(this.sortingStrategy instanceof OrderBySortingStrategy)
    ) {
      const wireObjectSet = getWireObjectSet(this.#objectSet);
      const { resultType } = await getObjectTypesThatInvalidate(
        this.store.client[additionalContext],
        wireObjectSet,
      );
      this.sortingStrategy = new OrderBySortingStrategy(
        resultType.apiName,
        this.#orderBy,
      );
    }

    // Fetch the data with pagination
    const resp = await this.#objectSet.fetchPage({
      $nextPageToken: this.nextPageToken,
      $pageSize: this.options.pageSize,
      $includeRid: true,
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
    const fetchedData = await this.postProcessFetchedData(resp.data);

    return {
      ...resp,
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
    this.store.subjects.get(this.cacheKey).error(error);

    // We don't call super.handleFetchError because ListQuery has special error handling
    // but we still use writeToStore to create a properly structured Entry
    const existingTotalCount = batch.read(this.cacheKey)?.value?.totalCount;
    return this.writeToStore(
      { data: [], totalCount: existingTotalCount },
      "error",
      batch,
    );
  }

  /**
   * Will revalidate the list if its query is affected by invalidating the
   * apiName of the object type passed in.
   *
   * @param apiName to invalidate
   * @returns
   */
  abstract revalidateObjectType(apiName: string): Promise<void>;

  /**
   * Postprocess fetched data.
   */
  protected abstract postProcessFetchedData(
    data: Osdk.Instance<any>[],
  ): Promise<Osdk.Instance<any>[]>;

  invalidateObjectType = async (
    objectType: string,
    changes: Changes | undefined,
  ): Promise<void> => {
    if (this.apiName === objectType) {
      // Only invalidate lists for the matching apiName
      changes?.modified.add(this.cacheKey);
      return this.revalidate(true);
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
      const relevantObjects = this._extractAndCategorizeRelevantObjects(
        changes,
      );

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
            const objectCacheKey = this.getObjectCacheKey(obj);

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
            const existingObjectCacheKey = this.getObjectCacheKey(obj);

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
          newList.push(this.getObjectCacheKey(obj));
        }

        const existingTotalCount = batch.read(this.cacheKey)?.value?.totalCount;
        this._updateList(
          newList,
          status,
          batch,
          /* append */ false,
          existingTotalCount,
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

  protected _extractAndCategorizeRelevantObjects(
    changes: Changes,
  ): ExtractRelevantObjectsResult {
    const relevantObjects = this.extractRelevantObjects(changes);

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

  /**
   * Extract relevant objects for this query type.
   */
  protected abstract extractRelevantObjects(
    changes: Changes,
  ): ExtractRelevantObjectsResult;

  registerStreamUpdates(
    sub: Subscription,
    streamTransport?: "websocket" | "sse",
  ): void {
    this.createStreamSubscription(
      this.#objectSet,
      sub,
      "observeList",
      streamTransport,
    );
  }

  protected onOswChange(
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
        this.store.objects.storeOsdkInstances(
          [object as Osdk.Instance<any>],
          batch,
          this.rdpConfig,
        );
      });
    } else if (state === "REMOVED") {
      this.onOswRemoved(objOrIface);
    }
  }

  protected onOswRemoved(
    objOrIface: Osdk.Instance<ObjectTypeDefinition, never, string, {}>,
  ): void {
    const logger = process.env.NODE_ENV !== "production"
      ? this.logger?.child({ methodName: "onOswRemoved" })
      : this.logger;
    this.store.batch({}, (batch) => {
      // Read the truth layer (since not optimistic)
      const existing = batch.read(this.cacheKey);
      invariant(
        existing,
        "the truth value for our list should exist as we already subscribed",
      );
      if (existing.status === "loaded") {
        const objectCacheKey = this.getObjectCacheKey(objOrIface);
        // remove the object from the list
        const newObjects = existing.value?.data.filter(
          (o) => o !== objectCacheKey,
        );

        // If the filter didn't change anything, then the list was already
        // updated (or didn't exist, which is nonsensical)
        if (newObjects?.length !== existing.value?.data.length) {
          batch.changes.registerList(this.cacheKey);
          const existingTotalCount = existing.value?.totalCount;
          batch.write(
            this.cacheKey,
            { data: newObjects ?? [], totalCount: existingTotalCount },
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

  /**
   * Get cache key for object.
   */
  private getObjectCacheKey(
    obj: { $objectType: string; $primaryKey: string | number | boolean },
  ): ObjectCacheKey {
    const pk = obj.$primaryKey as string | number;
    return this.cacheKeys.get<ObjectCacheKey>(
      "object",
      obj.$objectType,
      pk,
      this.rdpConfig ?? undefined,
    );
  }
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
