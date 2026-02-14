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
  CommonObserveOptions,
  Observer,
} from "../ObservableClient/common.js";
import type { BaseListPayloadShape } from "./base-list/BaseListQuery.js";
import type { CacheKeys } from "./CacheKeys.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import { ListQueryView, type ListQueryViewTarget } from "./ListQueryView.js";
import type { Query } from "./Query.js";
import { QuerySubscription } from "./QuerySubscription.js";
import type { Store } from "./Store.js";

/**
 * Check if a query supports view-based pagination (has the required methods).
 * Generic over PAYLOAD to preserve type information when the guard passes.
 */
function supportsViews<PAYLOAD extends BaseListPayloadShape>(
  query: unknown,
): query is ListQueryViewTarget<PAYLOAD> {
  return (
    query != null
    && typeof (query as ListQueryViewTarget<PAYLOAD>).registerFetchPageSize
      === "function"
    && typeof (query as ListQueryViewTarget<PAYLOAD>).getLoadedCount
      === "function"
    && typeof (query as ListQueryViewTarget<PAYLOAD>).hasMorePages
      === "function"
    && typeof (query as ListQueryViewTarget<PAYLOAD>).notifySubscribers
      === "function"
    && typeof (query as ListQueryViewTarget<PAYLOAD>).fetchMore === "function"
  );
}

/**
 * Options that may include list-specific pagination settings.
 */
interface ListObserveOptions {
  pageSize?: number;
  autoFetchMore?: boolean | number;
}

export abstract class AbstractHelper<
  TQuery extends Query<KnownCacheKey, any, CommonObserveOptions>,
  TObserveOptions extends CommonObserveOptions,
> {
  protected readonly store: Store;
  protected readonly cacheKeys: CacheKeys<KnownCacheKey>;

  constructor(store: Store, cacheKeys: CacheKeys<KnownCacheKey>) {
    this.store = store;
    this.cacheKeys = cacheKeys;
  }

  observe(
    options: TObserveOptions,
    subFn: Observer<
      TQuery extends Query<any, infer PAYLOAD, any> ? PAYLOAD : never
    >,
  ): QuerySubscription<TQuery> {
    const query = this.getQuery(options);
    return this._subscribe(query, options, subFn);
  }

  abstract getQuery(options: TObserveOptions): TQuery;

  protected _subscribe<
    PAYLOAD extends (TQuery extends Query<any, infer P, any> ? P : never),
  >(
    query: TQuery,
    options: TObserveOptions,
    subFn: Observer<PAYLOAD>,
  ): QuerySubscription<TQuery> {
    // the ListQuery represents the shared state of the list
    // If there is a deferred release pending for this key (from a prior
    // unmount), cancel exactly one pending release and avoid an extra retain.
    // This keeps refcounts balanced during unmount→remount within the same tick
    // (e.g. React StrictMode effect cleanup + re-run).
    const pendingCleanupCount = this.store.pendingCleanup.get(query.cacheKey)
      ?? 0;
    if (pendingCleanupCount > 0) {
      if (pendingCleanupCount === 1) {
        this.store.pendingCleanup.delete(query.cacheKey);
      } else {
        this.store.pendingCleanup.set(
          query.cacheKey,
          pendingCleanupCount - 1,
        );
      }
    } else {
      this.store.cacheKeys.retain(query.cacheKey);
    }

    if (options.mode !== "offline") {
      query.revalidate(options.mode === "force").catch((e: unknown) => {
        subFn.error(e);

        // we don't want observeObject() to return a promise,
        // so we settle for logging an error here instead of
        // dropping it on the floor.
        if (this.store.logger) {
          this.store.logger.error("Unhandled error in observeObject", e);
        } else {
          throw e;
        }
      });
    }

    // For queries that support views (list-like queries), wrap with ListQueryView
    // to handle per-subscriber view data such as pageSize
    const listOptions = options as ListObserveOptions;
    const useView = supportsViews<PAYLOAD & BaseListPayloadShape>(query)
      && (listOptions.pageSize !== undefined
        || listOptions.autoFetchMore !== undefined);

    const sub = useView
      ? new ListQueryView<PAYLOAD & BaseListPayloadShape>(
        query,
        listOptions.pageSize ?? 100,
        listOptions.autoFetchMore,
      ).subscribe(subFn as Observer<PAYLOAD & BaseListPayloadShape>)
      : query.subscribe(subFn);

    const querySub = new QuerySubscription(query, sub);

    query.registerSubscriptionDedupeInterval(
      querySub.subscriptionId,
      options.dedupeInterval,
    );

    sub.add(() => {
      query.unregisterSubscriptionDedupeInterval(querySub.subscriptionId);

      // Defer the release to the next microtask so React unmount-remount
      // cycles can re-subscribe before the cache key is released.
      // This prevents propagateWrite from skipping keys that are
      // momentarily between subscriptions.
      this.store.pendingCleanup.set(
        query.cacheKey,
        (this.store.pendingCleanup.get(query.cacheKey) ?? 0) + 1,
      );
      queueMicrotask(() => {
        const currentPending = this.store.pendingCleanup.get(query.cacheKey)
          ?? 0;
        if (currentPending > 0) {
          if (currentPending === 1) {
            this.store.pendingCleanup.delete(query.cacheKey);
          } else {
            this.store.pendingCleanup.set(query.cacheKey, currentPending - 1);
          }
          this.store.cacheKeys.release(query.cacheKey);
        }
      });
    });

    return querySub;
  }
}
