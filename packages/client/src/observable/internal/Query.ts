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
  Connectable,
  Observable,
  Observer,
  Subscribable,
  Subscription,
} from "rxjs";
import type {
  QueryOptions,
  Status,
  Unsubscribable,
} from "../ObservableClient.js";
import type { CacheKey } from "./CacheKey.js";
import type { Entry } from "./Layer.js";
import type { BatchContext, Store, SubjectPayload } from "./Store.js";

export abstract class Query<
  KEY extends CacheKey,
  PAYLOAD,
  O extends QueryOptions,
> implements Subscribable<PAYLOAD> {
  lastFetchStarted?: number;
  pendingFetch?: Promise<unknown>;
  retainCount: number = 0;
  options: O;
  cacheKey: KEY;
  store: Store;
  abortController?: AbortController;
  #connectable?: Connectable<PAYLOAD>;
  #subscription?: Subscription;
  #subject: Observable<SubjectPayload<KEY>>;

  constructor(
    store: Store,
    observable: Observable<SubjectPayload<KEY>>,
    opts: O,
    cacheKey: KEY,
  ) {
    this.options = opts;
    this.cacheKey = cacheKey;
    this.store = store;
    this.#subject = observable;
  }

  protected abstract _createConnectable(
    subject: Observable<SubjectPayload<KEY>>,
  ): Connectable<PAYLOAD>;

  public subscribe(
    observer: Partial<Observer<PAYLOAD>>,
  ): Unsubscribable {
    this.#connectable ??= this._createConnectable(this.#subject);
    this.#subscription = this.#connectable.connect();
    return this.#connectable.subscribe(observer);
  }

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

    this.store.batch({}, (batch) => {
      this.setStatus("loading", batch);
    });

    this._preFetch();

    this.lastFetchStarted = Date.now();
    this.pendingFetch = this._fetch().finally(() => {
      this.pendingFetch = undefined;
    });

    return this.pendingFetch;
  }

  _preFetch(): void {}
  abstract _fetch(): Promise<unknown>;

  setStatus(
    status: Status,
    batch: BatchContext,
  ): void {
    const existing = batch.read(this.cacheKey);
    if (existing?.status === status) return;

    batch.write(this.cacheKey, existing?.value, status);
  }

  dispose(): void {
    if (this.abortController) {
      this.abortController.abort();
    }
    this.#subscription?.unsubscribe();
    this._dispose();
  }

  _dispose(): void {}

  abstract writeToStore(
    data: KEY["__cacheKey"]["value"],
    status: Status,
    batch: BatchContext,
  ): Entry<KEY>;
}
