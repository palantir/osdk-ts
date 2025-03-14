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
  PropertyKeys,
} from "@osdk/api";
import deepEqual from "fast-deep-equal";
import groupBy from "object.groupby";
import type { Connectable, Observable, Subscription } from "rxjs";
import {
  auditTime,
  combineLatest,
  connectable,
  map,
  of,
  ReplaySubject,
  switchMap,
} from "rxjs";
import invariant from "tiny-invariant";
import { additionalContext, type Client } from "../../Client.js";
import type { Logger } from "../../logger/Logger.js";
import type { InterfaceHolder } from "../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import {
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type {
  ObjectHolder,
} from "../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ListPayload } from "../ListPayload.js";
import type { CommonObserveOptions, Status } from "../ObservableClient.js";
import {
  type CacheKey,
  DEBUG_ONLY__cacheKeysToString as DEBUG_ONLY__cacheKeysToString,
} from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import { type Changes, DEBUG_ONLY__changesToString } from "./Changes.js";
import type { Entry } from "./Layer.js";
import { objectSortaMatchesWhereClause as objectMatchesWhereClause } from "./objectMatchesWhereClause.js";
import { type ObjectCacheKey, storeOsdkInstances } from "./ObjectQuery.js";
import type { OptimisticId } from "./OptimisticId.js";
import { Query } from "./Query.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";

interface ListStorageData {
  data: ObjectCacheKey[];
}

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

abstract class BaseListQuery<
  // THIS IS THE WRONG EXTENDS
  KEY extends ListCacheKey,
  PAYLOAD,
  O extends CommonObserveOptions,
> extends Query<KEY, PAYLOAD, O> {
  //
  // Per list type implementations
  //

  protected abstract _sortCacheKeys(
    objectCacheKeys: ObjectCacheKey[],
    batch: BatchContext,
  ): ObjectCacheKey[];

  //
  // Shared Implementations
  //

  /**
   * Only intended to be "protected" and used by subclasses but exposed for
   * testing.
   *
   * @param objectCacheKeys
   * @param append
   * @param status
   * @param batch
   * @returns
   */
  _updateList(
    objectCacheKeys: Array<ObjectCacheKey>,
    append: boolean,
    status: Status,
    batch: BatchContext,
  ): Entry<ListCacheKey> {
    if (process.env.NODE_ENV !== "production") {
      const logger = process.env.NODE_ENV !== "production"
        ? this.logger?.child({ methodName: "updateList" })
        : this.logger;

      logger?.debug(
        `{status: ${status}}`,
        JSON.stringify(objectCacheKeys, null, 2),
      );
    }

    objectCacheKeys = this.#retainReleaseAppend(batch, append, objectCacheKeys);
    objectCacheKeys = this._sortCacheKeys(objectCacheKeys, batch);
    objectCacheKeys = removeDuplicates(objectCacheKeys, batch);

    return this.writeToStore({ data: objectCacheKeys }, status, batch);
  }

  writeToStore(
    data: ListStorageData,
    status: Status,
    batch: BatchContext,
  ): Entry<KEY> {
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(data, entry.value)) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "writeToStore" }).debug(
          `Object was deep equal, just setting status`,
        );
      }
      return batch.write(this.cacheKey, entry.value, status);
    }

    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "writeToStore" }).debug(
        `{status: ${status}},`,
        DEBUG_ONLY__cacheKeysToString(data.data),
      );
    }

    const ret = batch.write(this.cacheKey, data, status);
    batch.changes.registerList(this.cacheKey);
    return ret;
  }

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

  // this represents the minimum number of results we need to load if we revalidate
  #minNumResults = 0;

  #nextPageToken?: string;
  #pendingPageFetch?: Promise<unknown>;
  #orderBy: Canonical<Record<string, "asc" | "desc" | undefined>>;
  #objectSet: ObjectSet<ObjectTypeDefinition>;
  #sortFns: Array<
    (
      a: ObjectHolder | InterfaceHolder | undefined,
      b: ObjectHolder | InterfaceHolder | undefined,
    ) => number
  >;

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
  }

  get canonicalWhere(): Canonical<SimpleWhereClause> {
    return this.#whereClause;
  }

  protected _createConnectable(
    subject: Observable<SubjectPayload<ListCacheKey>>,
  ): Connectable<ListPayload> {
    return connectable<ListPayload>(
      subject.pipe(
        switchMap(listEntry => {
          return combineLatest({
            resolvedList: listEntry?.value?.data == null
              ? of([])
              : combineLatest(
                listEntry.value.data.map(cacheKey =>
                  this.store.getSubject(cacheKey).pipe(
                    map(objectEntry => objectEntry?.value!),
                  )
                ),
              ),
            isOptimistic: of(listEntry.isOptimistic),
            fetchMore: of(this.fetchMore),
            hasMore: of(this.#nextPageToken != null),
            status: of(listEntry.status),
            lastUpdated: of(listEntry.lastUpdated),
          });
        }),
        // like throttle but returns the tail
        auditTime(0),
      ),
      {
        resetOnDisconnect: false,
        connector: () => new ReplaySubject(1),
      },
    );
  }

  protected _preFetch(): void {
    this.#nextPageToken = undefined;
  }

  protected async _fetchAndStore(): Promise<void> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "_fetchAndStore" }).info(
        "fetching pages",
      );
    }
    while (true) {
      const entry = await this.#fetchPageAndUpdate(
        this.#objectSet,
        "loading",
        this.abortController?.signal,
      );
      if (!entry) {
        // we were aborted
        return;
      }

      invariant(entry.value?.data);
      const count = entry.value.data.length;

      if (count > this.#minNumResults || this.#nextPageToken == null) {
        break;
      }
    }
    this.store.batch({}, (batch) => {
      this.setStatus("loaded", batch);
    });

    return Promise.resolve();
  }

  fetchMore = (): Promise<unknown> => {
    if (this.#pendingPageFetch) {
      return this.#pendingPageFetch;
    }

    if (this.pendingFetch) {
      this.#pendingPageFetch = new Promise(async (res) => {
        await this.pendingFetch;
        res(this.fetchMore());
      });
      return this.#pendingPageFetch;
    }

    if (this.#nextPageToken == null) {
      return Promise.resolve();
    }

    this.store.batch({}, (batch) => {
      this.setStatus("loading", batch);
    });

    this.pendingFetch = this.#fetchPageAndUpdate(
      this.#objectSet,
      "loaded",
      this.abortController?.signal,
    ).finally(() => {
      this.#pendingPageFetch = undefined;
    });
    return this.pendingFetch;
  };

  async #fetchPageAndUpdate(
    objectSet: ObjectSet,
    status: Status,
    signal: AbortSignal | undefined,
  ): Promise<Entry<ListCacheKey> | undefined> {
    const append = this.#nextPageToken != null;

    try {
      let { data, nextPageToken } = await objectSet.fetchPage({
        $nextPageToken: this.#nextPageToken,
        $pageSize: this.options.pageSize,
        // For now this keeps the shared test code from falling apart
        // but shouldn't be needed ideally
        ...(Object.keys(this.#orderBy).length > 0
          ? { $orderBy: this.#orderBy }
          : {}),
      });

      if (signal?.aborted) {
        return;
      }

      this.#nextPageToken = nextPageToken;

      // Our caching really expects to have the full objects in the list
      // so we need to fetch them all here
      if (this.#type === "interface") {
        data = await reloadDataAsFullObjects(this.store.client, data);
      }

      const { retVal } = this.store.batch({}, (batch) => {
        return this._updateList(
          storeOsdkInstances(this.store, data, batch),
          append,
          nextPageToken ? status : "loaded",
          batch,
        );
      });

      return retVal;
    } catch (e) {
      this.logger?.error("error", e);
      this.store.getSubject(this.cacheKey).error(e);

      // rethrowing would result in many unhandled promise rejections
      // which i don't think we want
      // throw e;
    }
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
    }

    if (changes.modified.has(this.cacheKey)) return;
    // mark ourselves as updated so we don't infinite recurse.
    changes.modified.add(this.cacheKey);

    try {
      const relevantObjects = this._extractRelevantObjects(changes);

      if (
        relevantObjects.added.all.length === 0
        && relevantObjects.modified.all.length === 0
      ) {
        return;
      }

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

        const toRemove = new Set<ObjectCacheKey>();

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
        // if its a strict match we can just insert it into place
        const strictMatch = objectMatchesWhereClause(
          obj,
          this.#whereClause,
          true,
        );

        if (strictMatch) {
          group.strictMatches.add(obj);
        } else {
          // sorta match means it used a filter we cannot use on the frontend
          const sortaMatch = objectMatchesWhereClause(
            obj,
            this.#whereClause,
            false,
          );
          if (sortaMatch) {
            group.sortaMatches.add(obj);
          }
        }
      }
    }

    return relevantObjects;
  }

  #extractRelevantObjectsForTypeInterface(
    changes: Changes,
  ): ExtractRelevantObjectsResult {
    const added = Array.from(changes.addedObjects).filter(([, object]) => {
      return this.#apiName in object[ObjectDefRef].interfaceMap;
    }).map(([, object]) => object.$as(this.#apiName));

    const modified = Array.from(changes.modifiedObjects).filter(
      ([, object]) => {
        return this.#apiName in object[ObjectDefRef].interfaceMap;
      },
    ).map(([, object]) => object.$as(this.#apiName));

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

  _sortCacheKeys(
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
      ).info("");
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
        storeOsdkInstances(this.store, [object as Osdk.Instance<any>], batch);
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

function removeDuplicates(
  objectCacheKeys: ObjectCacheKey[],
  batch: BatchContext,
) {
  const visited = new Set<ObjectCacheKey>();
  objectCacheKeys = objectCacheKeys.filter((key) => {
    batch.read(key);
    if (visited.has(key)) {
      return false;
    }
    visited.add(key);
    return true;
  });
  return objectCacheKeys;
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

  data = data.map((obj) =>
    objectTypeToPrimaryKeyToObject[obj.$objectType][obj.$primaryKey]
  );
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
