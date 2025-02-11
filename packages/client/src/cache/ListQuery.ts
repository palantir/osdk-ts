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

import { combineLatest, of } from "rxjs";
import { auditTime, map, mergeMap } from "rxjs/operators";
import invariant from "tiny-invariant";
import type { Client } from "../Client.js";
import type { BatchContext, Status, StorageData, Store } from "./Cache.js";
import type { CacheKey } from "./CacheKey.js";
import type { Canonical } from "./Canonical.js";
import { Entry } from "./Layer.js";
import type { ObjectCacheKey, ObjectEntry } from "./ObjectQuery.js";
import type { QueryOptions } from "./Query.js";
import { Query } from "./Query.js";
import type { SubFn } from "./types.js";

export interface ListPayload {
  listEntry: ListEntry;
  resolvedList: Array<Osdk.Instance<any, never, string> | undefined>;
  fetchMore: () => Promise<unknown>;
  status: Status;
}

export interface ListEntry extends Entry<ListCacheKey> {}

interface ListStorageData extends StorageData<ObjectCacheKey[]> {
}

export interface ListCacheKey extends
  CacheKey<
    "list",
    ListStorageData,
    ListQuery
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
  #type: ObjectTypeDefinition;
  #whereClause: Canonical<WhereClause<ObjectTypeDefinition>>;

  // this represents the minimum number of results we need to load if we revalidate
  #minNumResults = 0;
  #store: Store;

  #nextPageToken?: string;

  pendingPageFetch?: Promise<unknown>;

  entries: ObjectCacheKey[] | undefined;

  constructor(
    store: Store,
    type: ObjectTypeDefinition,
    whereClause: Canonical<WhereClause<ObjectTypeDefinition>>,
    cacheKey: ListCacheKey,
    opts: ListQueryOptions,
  ) {
    super(store, opts, cacheKey);
    this.#client = store._client;
    this.#type = type;
    this.#whereClause = whereClause;
    this.#store = store;
  }

  subscribe(subFn: SubFn<ListPayload>) {
    const ret = this.#store.getSubject(this.cacheKey).pipe(
      mergeMap(listEntry => {
        if (listEntry == null) return of(undefined);
        return combineLatest({
          listEntry: of(listEntry),
          resolvedList: combineLatest(
            (listEntry?.value.data ?? []).map(cacheKey =>
              this.#store.getSubject(cacheKey).pipe(
                map(objectEntry => objectEntry?.value.data),
              )
            ),
          ),
          fetchMore: of(this.fetchMore),
          status: of(listEntry.status),
        }).pipe(map(x => x.listEntry == null ? undefined : x));
      }),
      // like throttle but returns the tail
      auditTime(0),
    ).subscribe(subFn);

    return { unsubscribe: (): void => ret.unsubscribe() };
  }

  _preFetch(): void {
    this.#nextPageToken = undefined;
  }

  async _fetch(): Promise<void> {
    const objectSet =
      (this.#client(this.#type) as ObjectSet<ObjectTypeDefinition>)
        .where(this.#whereClause);

    while (true) {
      await this.#fetchPageAndUpdate(
        objectSet,
        "loading",
        this.abortController?.signal,
      );

      const count = this.#store._truthLayer.get(this.cacheKey)?.value.data
        ?.length;

      invariant(count != null);

      if (count > this.#minNumResults || this.#nextPageToken == null) {
        // this.updateList
        break;
      }
    }
    this.store._batch({}, (batch) => {
      this.setStatus("loaded", batch);
    });

    return Promise.resolve();
  }

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

    if (this.#nextPageToken == null) {
      return Promise.resolve();
    }

    this.store._batch({}, (batch) => {
      this.setStatus("loading", batch);
    });

    const objectSet =
      (this.#client(this.#type) as ObjectSet<ObjectTypeDefinition>)
        .where(this.#whereClause);

    this.pendingFetch = this.#fetchPageAndUpdate(
      objectSet,
      "loaded",
      this.abortController?.signal,
    ).finally(() => {
      this.pendingPageFetch = undefined;
    });
    return this.pendingFetch;
  };

  async #fetchPageAndUpdate(
    objectSet: ObjectSet,
    status: Status,
    signal: AbortSignal | undefined,
  ) {
    const append = this.#nextPageToken != null;
    const { data, nextPageToken } = await objectSet.fetchPage({
      $nextPageToken: this.#nextPageToken,
      $pageSize: this.options.pageSize,
    });

    if (signal?.aborted) {
      return;
    }

    this.#nextPageToken = nextPageToken;

    this.#store._batch({}, (batch) => {
      return this.updateList(data, append, status, batch);
    });

    return { data };
  }

  #updateObjects(
    values: Array<Osdk.Instance<ObjectTypeDefinition> | ObjectEntry>,
    batch: BatchContext,
  ) {
    return values.map(v => {
      if (v instanceof Entry) return v.cacheKey;

      this.#store.getObjectQuery(this.#type, v.$primaryKey as string | number)
        .writeToStore(v, batch);
      // this.#store.getObject(this.#type, v.$primaryKey as string | number); // FIXME types
      return this.#store._getObjectCacheKey(v.$apiName, v.$primaryKey);
    });
  }

  updateList(
    values: Array<Osdk.Instance<ObjectTypeDefinition> | ObjectEntry>,
    append: boolean,
    status: Status,
    batch: BatchContext,
  ): number {
    // update the cache for any object that has changed
    // and save the mapped values to return
    let data = this.#updateObjects(values, batch);

    // update the list cache
    const existingList = this.#store._topLayer.get(this.cacheKey);
    if (
      !append && existingList && deepEqual(existingList.value.data, data)
    ) {
      if (existingList.status === status) {
        this.setStatus(status, batch);
      }
      return existingList.value.data!.length;
    }

    if (append) {
      data = [...existingList?.value.data ?? [], ...data];
    }

    batch.write(this.cacheKey, { data }, status);
    batch.modifiedLists.add(this.cacheKey);

    return data.length;
  }
}
