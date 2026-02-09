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

import type { Subscription } from "rxjs";
import type { Observer } from "../ObservableClient/common.js";
import type { BaseListPayloadShape } from "./base-list/BaseListQuery.js";

/**
 * Interface for the query methods that ListQueryView needs.
 * This allows ListQueryView to work with any query that supports these operations.
 */
export interface ListQueryViewTarget<PAYLOAD extends BaseListPayloadShape> {
  subscribe(observer: Observer<PAYLOAD>): Subscription;
  registerFetchPageSize(viewId: string, pageSize: number): void;
  unregisterFetchPageSize(viewId: string): void;
  getLoadedCount(): number;
  hasMorePages(): boolean;
  notifySubscribers(): void;
  fetchMore(): Promise<void>;
}

/**
 * A view into a shared ListQuery cache.
 *
 * Each subscriber gets their own View instance that tracks how much of the
 * shared cache they want to see (viewLimit). This allows multiple components
 * with different pageSize requirements to share the same underlying cache.
 *
 * The View:
 * - Slices the shared data to the subscriber's viewLimit
 * - Provides a fetchMore that increments viewLimit and fetches if needed
 * - Reports hasMore based on both local viewLimit and server pagination
 */
let viewIdCounter = 0;

export class ListQueryView<PAYLOAD extends BaseListPayloadShape> {
  #query: ListQueryViewTarget<PAYLOAD>;
  #viewLimit: number;
  #pageSize: number;
  #viewId: string;
  #fetchMore: () => Promise<void>;
  #pendingFetchMore: Promise<void> | undefined;
  #lastPayload: PAYLOAD | undefined;
  #observer: Observer<PAYLOAD> | undefined;

  constructor(
    query: ListQueryViewTarget<PAYLOAD>,
    pageSize: number,
    autoFetchMore?: boolean | number,
  ) {
    this.#query = query;
    this.#pageSize = pageSize;
    this.#viewId = `view_${++viewIdCounter}`;

    // With autoFetchMore, subscriber sees all loaded data (no view limit)
    // Otherwise, limit to their pageSize
    const hasAutoFetch = autoFetchMore === true
      || (typeof autoFetchMore === "number" && autoFetchMore > 0);
    this.#viewLimit = hasAutoFetch ? Number.MAX_SAFE_INTEGER : pageSize;

    // Memoize fetchMore to maintain stable function identity
    this.#fetchMore = this.#createFetchMore();

    // Tell the query to fetch with at least this pageSize
    query.registerFetchPageSize(this.#viewId, pageSize);
  }

  subscribe(observer: Observer<PAYLOAD>): Subscription {
    this.#observer = observer;
    const sub = this.#query.subscribe({
      next: (payload) => {
        this.#lastPayload = payload;
        observer.next?.(this.#transformPayload(payload));
      },
      error: (err) => observer.error?.(err),
      complete: () => observer.complete?.(),
    });

    // Cleanup: unregister pageSize when subscriber unsubscribes
    sub.add(() => {
      this.#query.unregisterFetchPageSize(this.#viewId);
      this.#observer = undefined;
      this.#lastPayload = undefined;
    });

    return sub;
  }

  #reEmitWithNewViewLimit(): void {
    if (this.#lastPayload && this.#observer) {
      this.#observer.next?.(this.#transformPayload(this.#lastPayload));
    }
  }

  #transformPayload(payload: PAYLOAD): PAYLOAD {
    const loadedCount = payload.resolvedList.length;

    return {
      ...payload,
      resolvedList: payload.resolvedList.slice(0, this.#viewLimit),
      hasMore: this.#viewLimit < loadedCount || payload.hasMore,
      fetchMore: this.#fetchMore,
    };
  }

  #createFetchMore(): () => Promise<void> {
    return () => {
      if (this.#pendingFetchMore) {
        return this.#pendingFetchMore;
      }

      this.#viewLimit += this.#pageSize;

      const loadedCount = this.#query.getLoadedCount();
      const hasMoreOnServer = this.#query.hasMorePages();

      if (this.#viewLimit > loadedCount && hasMoreOnServer) {
        // Need to fetch more data from server
        this.#pendingFetchMore = this.#query.fetchMore().finally(() => {
          this.#pendingFetchMore = undefined;
        });
        return this.#pendingFetchMore;
      }

      // We have enough data in cache, just re-emit with new viewLimit (sync)
      this.#reEmitWithNewViewLimit();
      return Promise.resolve();
    };
  }
}
