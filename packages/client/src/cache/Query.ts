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

import type { BehaviorSubject } from "rxjs";
import type { BatchContext, Status, Store, Unsubscribable } from "./Cache.js";
import type { CacheKey } from "./CacheKey.js";
import type { Entry } from "./Layer.js";
import type { SubFn } from "./types.js";

export abstract class Query<
  KEY extends CacheKey<string, any, any>,
  PAYLOAD,
  O extends QueryOptions,
> {
  lastFetchStarted?: number;
  pendingFetch?: Promise<unknown>;
  retainCount: number = 0;
  options: O;
  cacheKey: KEY;
  store: Store;
  abortController?: AbortController;

  constructor(store: Store, opts: O, cacheKey: KEY) {
    this.options = opts;
    this.cacheKey = cacheKey;
    this.store = store;
  }

  // lastResult(): void {}
  retain(): void {}
  release(opts: { gcAfter: number }): void {}

  revalidate(force?: boolean): Promise<unknown> {
    if (force) {
      this.abortController?.abort();
    }

    // if we are pending the first page we can just ignore this
    if (this.pendingFetch) {
      return this.pendingFetch;
    }

    if (
      (this.options.dedupeInterval ?? 0) > 0 && (
        this.lastFetchStarted != null
        && Date.now() - this.lastFetchStarted < (this.options.dedupeInterval
            ?? 0)
      )
    ) {
      return Promise.resolve();
    }

    this._preFetch();

    this.lastFetchStarted = Date.now();
    this.pendingFetch = this._fetch().finally(() => {
      this.pendingFetch = undefined;
    });

    return Promise.resolve();
  }

  abstract subscribe(subFn: SubFn<PAYLOAD>): Unsubscribable;

  _preFetch(): void {}
  abstract _fetch(): Promise<unknown>;

  getSubject(): BehaviorSubject<Entry<KEY> | undefined> {
    return this.store.getSubject(this.cacheKey);
  }

  setStatus(
    status: Status,
    batch: BatchContext,
  ): void {
    const existing = this.store._topLayer.get(this.cacheKey);
    if (existing?.value.status === status) return;

    batch.write(this.cacheKey, {
      ...existing?.value ?? { data: undefined },
    }, status);
  }
}
export interface QueryOptions {
  dedupeInterval?: number;
}
