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

import { additionalContext } from "../../Client.js";
export class Query {
  retainCount = 0;
  #connectable;
  #subscription;
  #subject;

  /** @internal */

  constructor(store, observable, opts, cacheKey, logger) {
    this.options = opts;
    this.cacheKey = cacheKey;
    this.store = store;
    this.#subject = observable;
    this.logger = logger ?? (process.env.NODE_ENV === "production" ? store.client[additionalContext].logger : store.client[additionalContext].logger?.child({}, {
      msgPrefix: process.env.NODE_ENV !== "production" ? `Query<${cacheKey.type}, ${cacheKey.otherKeys.map(x => JSON.stringify(x)).join(", ")}>` : "Query"
    }));
  }
  subscribe(observer) {
    this.#connectable ??= this._createConnectable(this.#subject);
    this.#subscription = this.#connectable.connect();
    return this.#connectable.subscribe(observer);
  }

  /**
   * Causes the query to revalidate. This will cause the query to fetch
   * the latest data from the server and update the store if it is deemed
   * "stale" or if `force` is true.
   *
   * @param force
   * @returns
   */
  async revalidate(force) {
    const logger = process.env.NODE_ENV !== "production" ? this.logger?.child({
      methodName: "revalidate"
    }) : this.logger;
    if (force) {
      this.abortController?.abort();
    }

    // n.b. I think this isn't quite right since we may require multiple
    // pages to properly "revalidate" for someone. This only really works if you
    // have a single page/object. It needs to be redone. FIXME

    // if we are pending the first page/object we can just ignore this
    if (this.pendingFetch) {
      if (process.env.NODE_ENV !== "production") {
        logger?.info("Fetch is already pending, using it");
      }
      await this.pendingFetch;
      return;
    }
    if ((this.options.dedupeInterval ?? 0) > 0 && this.lastFetchStarted != null && Date.now() - this.lastFetchStarted < (this.options.dedupeInterval ?? 0)) {
      if (process.env.NODE_ENV !== "production") {
        logger?.debug("Within dupeInterval, aborting revalidate");
      }
      return Promise.resolve();
    }
    if (process.env.NODE_ENV !== "production") {
      logger?.debug("Starting actual revalidate");
    }
    this.store.batch({}, batch => {
      // make sure the truth layer knows we are loading

      // this will not trigger an update to `changes` so it cannot trigger an
      // update of a list either. This may not be the behavior we want.
      this.setStatus("loading", batch);
    });
    this._preFetch();
    this.lastFetchStarted = Date.now();
    if (process.env.NODE_ENV !== "production") {
      logger?.debug("calling _fetchAndStore()");
    }
    this.pendingFetch = this._fetchAndStore().finally(() => {
      logger?.info("finally _fetchAndStore()");
      this.pendingFetch = undefined;
    });
    await this.pendingFetch;
  }
  _preFetch() {}
  /**
   * Sets the status of the query in the store (but does not store that in `changes`).
   *
   * @param status
   * @param batch
   * @returns
   */
  setStatus(status, batch) {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "setStatus"
      }).debug(status);
    }
    const existing = batch.read(this.cacheKey);
    if (existing?.status === status) return;
    batch.write(this.cacheKey, existing?.value, status);
  }
  dispose() {
    if (this.abortController) {
      this.abortController.abort();
    }
    this.#subscription?.unsubscribe();
    this._dispose();
  }

  /**
   * Per query type dispose functionality
   */
  _dispose() {}

  /**
   * The purpose of this method is to provide a way for others to write
   * directly into the store for this query.
   *
   * @param data
   * @param status
   * @param batch
   */

  /**
   * @param changes
   * @param optimisticId
   * @returns If revalidation is needed, a promise that resolves after the
   *          revalidation is complete. Otherwise, undefined.
   */
}
//# sourceMappingURL=Query.js.map