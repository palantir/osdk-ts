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
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  WhereClause,
} from "@osdk/api";
import deepEqual from "fast-deep-equal";
import groupBy from "object.groupby";
import {
  auditTime,
  combineLatest,
  type Connectable,
  connectable,
  map,
  type Observable,
  of,
  ReplaySubject,
  switchMap,
} from "rxjs";
import invariant from "tiny-invariant";
import { additionalContext, type Client } from "../../Client.js";
import type { ListPayload } from "../ListPayload.js";
import type { CommonObserveOptions, Status } from "../ObservableClient.js";
import {
  type CacheKey,
  DEBUG_ONLY__cacheKeysToString as DEBUG_ONLY__cacheKeysToString,
} from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import { type Changes, DEBUG_ONLY__changesToString } from "./ChangedObjects.js";
import type { Entry } from "./Layer.js";
import { objectSortaMatchesWhereClause } from "./objectMatchesWhereClause.js";
import type { ObjectCacheKey } from "./ObjectQuery.js";
import type { OptimisticId } from "./OptimisticId.js";
import { Query } from "./Query.js";
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
      whereClause: Canonical<
        WhereClause<ObjectTypeDefinition | InterfaceDefinition>
      >,
      orderByClause: Canonical<Record<string, "asc" | "desc" | undefined>>,
    ]
  > //
{}

export const API_NAME_IDX = 1;
export const TYPE_IDX = 0;
export const WHERE_IDX = 2;
export const ORDER_BY_IDX = 3;

export interface ListQueryOptions extends CommonObserveOptions {
  pageSize?: number;
}

export class ListQuery extends Query<
  ListCacheKey,
  ListPayload,
  ListQueryOptions
> {
  // pageSize?: number; // this is the internal page size. we need to track this properly
  #client: Client;
  #type: "object" | "interface";
  #apiName: string;
  #whereClause: Canonical<
    WhereClause<ObjectTypeDefinition | InterfaceDefinition>
  >;

  // this represents the minimum number of results we need to load if we revalidate
  #minNumResults = 0;

  #nextPageToken?: string;
  #pendingPageFetch?: Promise<unknown>;
  #toRelease: Set<ObjectCacheKey> = new Set();
  #orderBy: Canonical<Record<string, "asc" | "desc" | undefined>>;

  constructor(
    store: Store,
    subject: Observable<SubjectPayload<ListCacheKey>>,
    apiType: "object" | "interface",
    apiName: string,
    whereClause: Canonical<
      WhereClause<ObjectTypeDefinition | InterfaceDefinition>
    >,
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

    this.#client = store.client;
    this.#type = apiType;
    this.#apiName = apiName;
    this.#whereClause = whereClause;
    this.#orderBy = orderBy;
  }

  get canonicalWhere(): Canonical<WhereClause<ObjectTypeDefinition>> {
    return this.#whereClause;
  }

  protected _createConnectable(
    subject: Observable<SubjectPayload<ListCacheKey>>,
  ): Connectable<ListPayload> {
    return connectable(
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

  _preFetch(): void {
    this.#nextPageToken = undefined;
  }

  async _fetch(): Promise<void> {
    const objectSet = (this.#client({
      // we need to cast this down from "object" | "interface" to match the client
      // overloads in a reasonable manner
      type: this.#type as "object",
      apiName: this.#apiName,
    }) as ObjectSet<ObjectTypeDefinition>)
      .where(this.#whereClause);

    while (true) {
      const entry = await this.#fetchPageAndUpdate(
        objectSet,
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

    const objectSet = (this.#client({
      // we need to cast this down from "object" | "interface" to match the client
      // overloads in a reasonable manner
      type: this.#type as "object",
      apiName: this.#apiName,
    }) as ObjectSet<
      ObjectTypeDefinition
    >).where(this.#whereClause);

    this.pendingFetch = this.#fetchPageAndUpdate(
      objectSet,
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
          ? {
            $orderBy: this.#orderBy,
          }
          : {}),
      });

      if (signal?.aborted) {
        return;
      }

      this.#nextPageToken = nextPageToken;

      // Our caching really expects to have the full objects in the list
      // so we need to fetch them all here
      if (this.#type === "interface") {
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
              return [
                apiName,
                Object.fromEntries((await this.#client(
                  { type: "object", apiName } as ObjectTypeDefinition,
                ).where({
                  $primaryKey: { $in: objects.map(x => x.$primaryKey) },
                } as WhereClause<any>).fetchPage()).data.map(
                  x => [x.$primaryKey, x],
                )),
              ];
            }),
          ),
        );

        data = data.map((obj) =>
          objectTypeToPrimaryKeyToObject[obj.$objectType][obj.$primaryKey]
        );
      }

      const { retVal } = this.store.batch({}, (batch) => {
        return this.updateList(
          this.store.updateObjects(data, batch),
          append,
          nextPageToken ? status : "loaded",
          batch,
        );
      });

      return retVal;
    } catch (e) {
      this.store.getSubject(this.cacheKey).error(e);

      // rethrowing would result in many unhandled promise rejections
      // which i don't think we want
      // throw e;
    }
  }

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
      this.logger?.child({ methodName: "#maybeUpdateAndRevalidate" }).info(
        DEBUG_ONLY__changesToString(changes),
      );
    }
    if (changes.modifiedLists.has(this.cacheKey)) return;

    try {
      const relevantObjects: Record<"added" | "modified", {
        all: Osdk.Instance<ObjectTypeDefinition>[];
        strictMatches: Set<Osdk.Instance<ObjectTypeDefinition>>;
        sortaMatches: Set<Osdk.Instance<ObjectTypeDefinition>>;
      }> = {
        added: {
          all: changes.addedObjects.get(this.cacheKey.otherKeys[API_NAME_IDX])
            ?? [],
          strictMatches: new Set(),
          sortaMatches: new Set(),
        },
        modified: {
          all:
            changes.modifiedObjects.get(this.cacheKey.otherKeys[API_NAME_IDX])
              ?? [],
          strictMatches: new Set(),
          sortaMatches: new Set(),
        },
      };

      if (
        relevantObjects.added.all.length === 0
        && relevantObjects.modified.all.length === 0
      ) {
        return;
      }

      // categorize
      for (const group of Object.values(relevantObjects)) {
        for (const obj of group.all ?? []) {
          // if its a strict match we can just insert it into place
          const strictMatch = objectSortaMatchesWhereClause(
            obj,
            this.#whereClause,
            true,
          );

          if (strictMatch) {
            group.strictMatches.add(obj);
          } else {
            // sorta match means it used a filter we cannot use on the frontend
            const sortaMatch = objectSortaMatchesWhereClause(
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

      // mark ourselves as updated so we don't infinite recurse.
      changes.modifiedLists.add(this.cacheKey);

      const newList: Array<ObjectCacheKey> = [];

      let needsRevalidation = false;
      this.store.batch({ optimisticId, changes }, (batch) => {
        const curValue = batch.read(this.cacheKey);

        const existingList = new Set(curValue?.value?.data);

        const toAdd = new Set<Osdk.Instance<ObjectTypeDefinition>>(
          // easy case. objects are new to the cache and they match this filter
          relevantObjects.added.strictMatches,
        );

        const toRemove = new Set<ObjectCacheKey>();

        // deal with the modified objects
        for (const obj of relevantObjects.modified.all) {
          if (relevantObjects.modified.strictMatches.has(obj)) {
            const existingObjectCacheKey = this.store.getCacheKey<
              ObjectCacheKey
            >(
              "object",
              obj.$apiName,
              obj.$primaryKey,
            );

            // full match and already there, do nothing
            if (!existingList.has(existingObjectCacheKey)) {
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
              obj.$apiName,
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
              obj.$apiName,
              obj.$primaryKey,
            ),
          );
        }

        this.updateList(
          newList,
          /* append */ false,
          status,
          batch,
        );
      });

      if (needsRevalidation) {
        changes.modifiedLists.add(this.cacheKey);
        return this.revalidate(true).then(() => void 0); // strip return value
      }
      return undefined;
    } finally {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child(
          { methodName: "#maybeUpdateAndRevalidate" },
        ).debug("in finally");
      }
    }
  };

  updateList(
    objectCacheKeys: Array<ObjectCacheKey>,
    append: boolean,
    status: Status,
    batch: BatchContext,
  ): Entry<ListCacheKey> {
    const logger = process.env.NODE_ENV !== "production"
      ? this.logger?.child({ methodName: "updateList" })
      : this.logger;
    if (process.env.NODE_ENV !== "production") {
      logger?.debug(
        `{status: ${status}}`,
        JSON.stringify(objectCacheKeys, null, 2),
      );
    }

    const existingList = batch.read(this.cacheKey);

    // whether its append or update we need to retain all the new objects
    if (!batch.optimisticWrite) {
      if (!append) {
        // we need to release all the old objects
        // N.B. the store keeps the cache keys around for a bit so we don't
        // need to worry about them being GC'd before we re-retain them
        for (const objectCacheKey of existingList?.value?.data ?? []) {
          this.store.release(objectCacheKey);
          this.#toRelease.delete(objectCacheKey);
        }
      }

      for (const objectCacheKey of objectCacheKeys) {
        this.#toRelease.add(objectCacheKey);
        this.store.retain(objectCacheKey);
      }
    }

    if (append) {
      objectCacheKeys = [
        ...existingList?.value?.data ?? [],
        ...objectCacheKeys,
      ];
    }

    if (Object.keys(this.#orderBy).length > 0) {
      if (process.env.NODE_ENV !== "production") {
        logger?.info({ methodName: "updateList" }, "Sorting entries");
        logger?.debug(
          { methodName: "updateList" },
          DEBUG_ONLY__cacheKeysToString(objectCacheKeys),
        );
      }
      const sortFns = Object.entries(this.#orderBy).map(([key, order]) => {
        return (
          a: Osdk.Instance<ObjectTypeDefinition, never, any, {}> | undefined,
          b: Osdk.Instance<ObjectTypeDefinition, never, any, {}> | undefined,
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

      objectCacheKeys = objectCacheKeys.sort((a, b) => {
        for (const sortFn of sortFns) {
          const ret = sortFn(
            batch.read(a)?.value,
            batch.read(b)?.value,
          );
          if (ret !== 0) {
            return ret;
          }
        }
        return 0;
      });
    }

    const visited = new Set<ObjectCacheKey>();
    objectCacheKeys = objectCacheKeys.filter((key) => {
      batch.read(key);
      if (visited.has(key)) {
        return false;
      }
      visited.add(key);
      return true;
    });

    return this.writeToStore({ data: objectCacheKeys }, status, batch);
  }

  writeToStore(
    data: ListStorageData,
    status: Status,
    batch: BatchContext,
  ): Entry<ListCacheKey> {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "writeToStore" }).debug(
        `{status: ${status}},`,
        DEBUG_ONLY__cacheKeysToString(data.data),
      );
    }
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(data, entry.value)) {
      return batch.write(this.cacheKey, entry.value, status);
    }

    const ret = batch.write(this.cacheKey, data, status);
    batch.changes.modifiedLists.add(this.cacheKey);
    return ret;
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

export function isListCacheKey(
  cacheKey: CacheKey,
  apiName?: string,
): cacheKey is ListCacheKey {
  return cacheKey.type === "list"
    && (apiName == null || cacheKey.otherKeys[API_NAME_IDX] === apiName);
}
