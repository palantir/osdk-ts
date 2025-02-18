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
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  WhereClause,
} from "@osdk/api";
import deepEqual from "fast-deep-equal";
import {
  asyncScheduler,
  auditTime,
  combineLatest,
  type Connectable,
  connectable,
  map,
  mergeMap,
  type Observable,
  observeOn,
  of,
  ReplaySubject,
} from "rxjs";
import invariant from "tiny-invariant";
import type { Client } from "../../Client.js";
import type { ListPayload } from "../ListPayload.js";
import type { QueryOptions, Status } from "../ObservableClient.js";
import type { CacheKey } from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import type { ChangedObjects } from "./ChangedObjects.js";
import { Entry } from "./Layer.js";
import { objectSortaMatchesWhereClause } from "./objectMatchesWhereClause.js";
import type { ObjectCacheKey, ObjectEntry } from "./ObjectQuery.js";
import type { OptimisticId } from "./OptimisticId.js";
import { Query } from "./Query.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";

export interface ListEntry extends Entry<ListCacheKey> {}

auditTime(0);
interface ListStorageData {
  data: ObjectCacheKey[];
}

export interface ListCacheKey extends
  CacheKey<
    "list",
    ListStorageData,
    ListQuery,
    [
      apiName: string,
      whereClause: WhereClause<ObjectTypeDefinition>,
    ]
  > //
{}

export interface ListQueryOptions extends QueryOptions {
  pageSize?: number;
}

export class ListQuery extends Query<
  ListCacheKey,
  ListPayload,
  ListQueryOptions
> {
  // pageSize?: number; // this is the internal page size. we need to track this properly
  #client: Client;
  #type: string;
  #whereClause: Canonical<WhereClause<ObjectTypeDefinition>>;

  // this represents the minimum number of results we need to load if we revalidate
  #minNumResults = 0;

  #nextPageToken?: string;
  #pendingPageFetch?: Promise<unknown>;
  #toRelease: Set<ObjectCacheKey> = new Set();

  constructor(
    store: Store,
    subject: Observable<SubjectPayload<ListCacheKey>>,
    type: string,
    whereClause: Canonical<WhereClause<ObjectTypeDefinition>>,
    cacheKey: ListCacheKey,
    opts: ListQueryOptions,
  ) {
    super(
      store,
      subject,
      opts,
      cacheKey,
    );

    this.#client = store.client;
    this.#type = type;
    this.#whereClause = whereClause;
    observeOn(asyncScheduler);
  }

  protected _createConnectable(
    subject: Observable<SubjectPayload<ListCacheKey>>,
  ): Connectable<ListPayload> {
    return connectable(
      subject.pipe(
        mergeMap(listEntry => {
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
    const objectSet =
      (this.#client({ type: "object", apiName: this.#type }) as ObjectSet<
        ObjectTypeDefinition
      >)
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

    const objectSet =
      (this.#client({ type: "object", apiName: this.#type }) as ObjectSet<
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
    const { data, nextPageToken } = await objectSet.fetchPage({
      $nextPageToken: this.#nextPageToken,
      $pageSize: this.options.pageSize,
    });

    if (signal?.aborted) {
      return;
    }

    this.#nextPageToken = nextPageToken;

    const { retVal } = this.store.batch({}, (batch) => {
      return this.updateList(
        data,
        append,
        nextPageToken ? status : "loaded",
        batch,
      );
    });

    return retVal;
  }

  /**
   * Caller is responsible for removing the layer
   *
   * @param changedObjects
   * @param optimisticId
   * @returns
   */
  maybeUpdate(
    changedObjects: ChangedObjects,
    optimisticId: OptimisticId,
  ): boolean {
    let needsRevalidation = false;
    const objectsToInsert: Osdk.Instance<ObjectTypeDefinition>[] = [];
    for (const [type, objects] of changedObjects.addedObjects.associations()) {
      if (this.cacheKey.otherKeys[0] !== type) {
        continue;
      }

      for (const obj of objects) {
        // strict match means it didn't use a filter we cannot use on the frontend
        const strictMatch = objectSortaMatchesWhereClause(
          obj,
          this.#whereClause,
          true,
        );

        if (strictMatch) {
          objectsToInsert.push(obj);
        } else {
          // sorta match means it used a filter we cannot use on the frontend
          const sortaMatch = objectSortaMatchesWhereClause(
            obj,
            this.#whereClause,
            false,
          );
          if (sortaMatch) {
            needsRevalidation = true;
          }
        }
      }
    }

    needsRevalidation ||= objectsToInsert.length > 0;

    if (objectsToInsert.length > 0) {
      // for now we are not doing sorting which makes life easy :)
      // FIXME

      this.store.batch({ optimisticId }, (batch) => {
        this.updateList(
          objectsToInsert,
          true,
          "loading",
          batch,
        );
      });
    }

    return needsRevalidation;
  }

  maybeRevalidate(
    changedObjects: ChangedObjects,
  ): Promise<unknown> {
    let needsRevalidation = false;
    for (const [type, objects] of changedObjects.addedObjects.associations()) {
      if (this.cacheKey.otherKeys[0] !== type) {
        continue;
      }

      for (const obj of objects) {
        // sorta match means it used a filter we cannot use on the frontend
        const sortaMatch = objectSortaMatchesWhereClause(
          obj,
          this.#whereClause,
          false,
        );
        if (sortaMatch) {
          needsRevalidation = true;
        }
      }
    }

    if (needsRevalidation) {
      return this.revalidate(true);
    }

    return Promise.resolve();
  }

  updateList(
    values: Array<Osdk.Instance<ObjectTypeDefinition> | ObjectEntry>,
    append: boolean,
    status: Status,
    batch: BatchContext,
  ): Entry<ListCacheKey> {
    // update the cache for any object that has changed
    // and save the mapped values to return
    let objectCacheKeys = values.map(v => {
      if (v instanceof Entry) return v.cacheKey;

      this.store.getObjectQuery(this.#type, v.$primaryKey as string | number)
        .writeToStore(v, "loaded", batch);
      return this.store.getCacheKey<ObjectCacheKey>(
        "object",
        v.$apiName,
        v.$primaryKey,
      );
    });

    const existingList = batch.read(this.cacheKey);

    // whether its append or update we need to retain all the new objects
    if (!batch.optimisticWrite) {
      if (!append) {
        // we need to release all the old objects
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

    // EA TODO: I think we need to do more here.

    if (append) {
      objectCacheKeys = [
        ...existingList?.value?.data ?? [],
        ...objectCacheKeys,
      ];
    }

    return this.writeToStore({ data: objectCacheKeys }, status, batch);
  }

  writeToStore(
    data: ListStorageData,
    status: Status,
    batch: BatchContext,
  ): Entry<ListCacheKey> {
    const entry = batch.read(this.cacheKey);

    if (entry && deepEqual(data, entry.value)) {
      return batch.write(this.cacheKey, entry.value, status);
    }

    const ret = batch.write(this.cacheKey, data, status);
    batch.modifiedLists.add(this.cacheKey);

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
    && (apiName == null || cacheKey.otherKeys[0] === apiName);
}
