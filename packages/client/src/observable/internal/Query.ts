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

import type { Logger } from "@osdk/api";
import type {
  Connectable,
  Observable,
  Observer,
  Subscribable,
  Subscription,
} from "rxjs";
import { additionalContext } from "../../Client.js";
import type {
  CommonObserveOptions,
  Status,
} from "../ObservableClient/common.js";
import type { BatchContext } from "./BatchContext.js";
import type { CacheKeys } from "./CacheKeys.js";
import type { Changes } from "./Changes.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { Entry } from "./Layer.js";
import type { OptimisticId } from "./OptimisticId.js";
import type { Store } from "./Store.js";
import type { SubjectPayload } from "./SubjectPayload.js";

export abstract class Query<
  KEY extends KnownCacheKey,
  PAYLOAD,
  O extends CommonObserveOptions,
> implements Subscribable<PAYLOAD> {
  lastFetchStarted?: number;
  pendingFetch?: Promise<void>;
  retainCount: number = 0;
  options: O;
  cacheKey: KEY;
  store: Store;
  abortController?: AbortController;
  #connectable?: Connectable<PAYLOAD>;
  #subscription?: Subscription;
  #subject: Observable<SubjectPayload<KEY>>;
  #subscriptionDedupeIntervals: Map<string, number> = new Map();

  /** @internal */
  protected logger: Logger | undefined;

  protected readonly cacheKeys: CacheKeys<KnownCacheKey>;

  constructor(
    store: Store,
    observable: Observable<SubjectPayload<KEY>>,
    opts: O,
    cacheKey: KEY,
    logger?: Logger,
  ) {
    this.options = opts;
    this.cacheKey = cacheKey;
    this.store = store;
    this.cacheKeys = store.cacheKeys;
    this.#subject = observable;

    this.logger = logger ?? (
      process.env.NODE_ENV === "production"
        ? store.client[additionalContext].logger
        : store.client[additionalContext].logger?.child({}, {
          msgPrefix: process.env.NODE_ENV !== "production"
            ? (`Query<${cacheKey.type}, ${
              cacheKey.otherKeys.map(x => JSON.stringify(x)).join(", ")
            }>`)
            : "Query",
        })
    );
  }

  protected abstract _createConnectable(
    subject: Observable<SubjectPayload<KEY>>,
  ): Connectable<PAYLOAD>;

  public subscribe(
    observer: Observer<PAYLOAD>,
  ): Subscription {
    this.#connectable ??= this._createConnectable(this.#subject);
    this.#subscription = this.#connectable.connect();
    const sub = this.#connectable.subscribe({
      next: (value) => {
        if (observer.next) {
          observer.next(value);
        }
      },
      error: (err) => {
        if (observer.error) {
          observer.error(err);
        }
      },
      complete: () => {
        if (observer.complete) {
          observer.complete();
        }
      },
    });
    return sub;
  }

  /**
   * Register a subscription's dedupeInterval value
   */
  registerSubscriptionDedupeInterval(
    subscriptionId: string,
    dedupeInterval: number | undefined,
  ): void {
    if (dedupeInterval != null && dedupeInterval > 0) {
      this.#subscriptionDedupeIntervals.set(subscriptionId, dedupeInterval);
    }
  }

  /**
   * Unregister a subscription's dedupeInterval value
   */
  unregisterSubscriptionDedupeInterval(subscriptionId: string): void {
    this.#subscriptionDedupeIntervals.delete(subscriptionId);
  }

  /**
   * Get the minimum dedupeInterval from all active subscriptions
   */
  private getMinimumDedupeInterval(): number {
    if (this.#subscriptionDedupeIntervals.size === 0) {
      return this.options.dedupeInterval ?? 0;
    }

    return Math.min(...this.#subscriptionDedupeIntervals.values());
  }

  /**
   * Causes the query to revalidate. This will cause the query to fetch
   * the latest data from the server and update the store if it is deemed
   * "stale" or if `force` is true.
   *
   * @param force
   * @returns
   */
  async revalidate(force?: boolean): Promise<void> {
    const logger = process.env.NODE_ENV !== "production"
      ? this.logger?.child({ methodName: "revalidate" })
      : this.logger;

    if (force) {
      this.abortController?.abort();
    }

    // n.b. I think this isn't quite right since we may require multiple
    // pages to properly "revalidate" for someone. This only really works if you
    // have a single page/object. It needs to be redone. FIXME

    // if we are pending the first page/object we can just ignore this
    if (this.pendingFetch) {
      if (process.env.NODE_ENV !== "production") {
        logger?.debug("Fetch is already pending, using it");
      }
      await this.pendingFetch;
      return;
    }

    if (!force) {
      const minDedupeInterval = this.getMinimumDedupeInterval();
      if (
        minDedupeInterval > 0 && (
          this.lastFetchStarted != null
          && Date.now() - this.lastFetchStarted < minDedupeInterval
        )
      ) {
        if (process.env.NODE_ENV !== "production") {
          logger?.debug("Within dupeInterval, aborting revalidate");
        }

        return Promise.resolve();
      }
    }

    if (process.env.NODE_ENV !== "production") {
      logger?.debug("Starting actual revalidate");
    }

    this.store.batch({}, (batch) => {
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
    this.pendingFetch = this._fetchAndStore()
      .finally(() => {
        logger?.debug("promise's finally for _fetchAndStore()");
        this.pendingFetch = undefined;
      });

    await this.pendingFetch;
    return;
  }

  protected _preFetch(): void {}

  protected abstract _fetchAndStore(): Promise<void>;

  /**
   * Sets the status of the query in the store (but does not store that in `changes`).
   *
   * @param status
   * @param batch
   * @returns
   */
  setStatus(
    status: Status,
    batch: BatchContext,
  ): void {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "setStatus" }).debug(
        `Attempting to set status to '${status}'`,
      );
    }
    const existing = batch.read(this.cacheKey);
    if (existing?.status === status) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({ methodName: "setStatus" }).debug(
          `Status is already set to '${status}'; aborting`,
        );
      }
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "setStatus" }).debug(
        `Writing status '${status}' to cache`,
      );
    }
    batch.write(this.cacheKey, existing?.value, status);
  }

  dispose(): void {
    if (this.abortController) {
      this.abortController.abort();
    }
    this.#subscription?.unsubscribe();
    this._dispose();
  }

  /**
   * Per query type dispose functionality
   */
  protected _dispose(): void {}

  /**
   * The purpose of this method is to provide a way for others to write
   * directly into the store for this query.
   *
   * @param data
   * @param status
   * @param batch
   */
  abstract writeToStore(
    data: KEY["__cacheKey"]["value"],
    status: Status,
    batch: BatchContext,
  ): Entry<KEY>;

  /**
   * @param changes
   * @param optimisticId
   * @returns If revalidation is needed, a promise that resolves after the
   *          revalidation is complete. Otherwise, undefined.
   */
  maybeUpdateAndRevalidate?: (
    changes: Changes,
    optimisticId: OptimisticId | undefined,
  ) => Promise<void> | undefined;

  abstract invalidateObjectType(
    objectType: string,
    changes: Changes | undefined,
  ): Promise<void>;
}
