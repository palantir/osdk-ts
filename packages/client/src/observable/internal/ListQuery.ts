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
import groupBy from "object.groupby";
import { type Observable, type Subscription } from "rxjs";
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
import {
  BaseCollectionQuery,
  type CollectionStorageData,
} from "./BaseCollectionQuery.js";
import {
  type CacheKey,
  DEBUG_ONLY__cacheKeysToString as DEBUG_ONLY__cacheKeysToString,
} from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import { type Changes, DEBUG_ONLY__changesToString } from "./Changes.js";
import type { Entry } from "./Layer.js";
import type { ListCacheKey, ListStorageData } from "./ListCacheKey.js";
import { objectSortaMatchesWhereClause as objectMatchesWhereClause } from "./objectMatchesWhereClause.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
import type { OptimisticId } from "./OptimisticId.js";
import type { Query } from "./Query.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";

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

export class ListQuery extends BaseCollectionQuery<
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
  #sortFns: Array<
    (
      a: ObjectHolder | InterfaceHolder | undefined,
      b: ObjectHolder | InterfaceHolder | undefined,
    ) => number
  >;

  /**
   * Updates the list with the given object cache keys
   * Uses the unified updateList method from BaseCollectionQuery
   *
   * @param objectCacheKeys Array of object cache keys to update the list with
   * @param append Whether to append to the existing list or replace it
   * @param status The status to set on the list
   * @param batch The batch context to use for the update
   * @returns The updated list entry
   */
  _updateList(
    objectCacheKeys: Array<ObjectCacheKey>,
    append: boolean,
    status: Status,
    batch: BatchContext,
  ): Entry<ListCacheKey> {
    return this.updateList(
      objectCacheKeys,
      status,
      batch,
      append,
      true, // sort
    );
  }

  /**
   * Implementation of the abstract sortCollection method from BaseCollectionQuery
   * Sorts the collection based on the orderBy clause
   */
  protected sortCollection(
    objectCacheKeys: ObjectCacheKey[],
    batch: BatchContext,
  ): ObjectCacheKey[] {
    if (Object.keys(this.#orderBy).length > 0) {
      objectCacheKeys = objectCacheKeys.sort((a, b) => {
        for (const sortFn of this.#sortFns) {
          const ret = sortFn(
            batch.read(a)?.value?.$as(this.#apiName),
            batch.read(b)?.value?.$as(this.#apiName),
          );
          if (ret !== 0) {
            return ret;
          }
        }
        return 0;
      });
    }
    return objectCacheKeys;
  }

  /**
   * Register changes to the cache specific to ListQuery
   */
  protected registerCacheChanges(batch: BatchContext): void {
    batch.changes.registerList(this.cacheKey);
  }

  /**
   * Format the collection data for debug output
   */
  protected formatDebugOutput(data: CollectionStorageData): any {
    return DEBUG_ONLY__cacheKeysToString(data.data);
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
    this.#sortFns = createOrderBySortFns(this.#orderBy);
    // Initialize the minResultsToLoad inherited from BaseCollectionQuery
    this.minResultsToLoad = 0;
  }

  get canonicalWhere(): Canonical<SimpleWhereClause> {
    return this.#whereClause;
  }

  // _preFetch() and _fetchAndStore are now implemented in BaseCollectionQuery

  // fetchMore is now implemented in BaseCollectionQuery

  /**
   * Implements fetchPageData from BaseCollectionQuery template method
   * Fetches a page of data
   */
  protected async fetchPageData(
    signal: AbortSignal | undefined,
  ): Promise<PageResult<Osdk.Instance<any>> | undefined> {
    const append = this.nextPageToken != null;

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
   * Process and store fetched data
   * Implementation for BaseCollectionQuery template method
   */
  protected processAndStoreFetchedData(
    result: { data: any[]; nextPageToken?: string; append: boolean },
    status: Status,
    batch: BatchContext,
  ): Entry<ListCacheKey> {
    return this._updateList(
      this.storeObjects(result.data, batch),
      result.append,
      result.nextPageToken ? status : "loaded",
      batch,
    );
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
          /* append */ false,
          status,
          batch,
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

function createOrderBySortFns(
  orderBy: Canonical<Record<string, "asc" | "desc" | undefined>>,
) {
  return Object.entries(orderBy).map(([key, order]) => {
    return (
      a: ObjectHolder | InterfaceHolder | undefined,
      b: ObjectHolder | InterfaceHolder | undefined,
    ): number => {
      const aValue = a?.[key];
      const bValue = b?.[key];

      if (aValue == null && bValue == null) {
        return 0;
      }
      if (aValue == null) {
        return 1;
      }
      if (bValue == null) {
        return -1;
      }
      const m = order === "asc" ? -1 : 1;
      return aValue < bValue ? m : aValue > bValue ? -m : 0;
    };
  });
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
