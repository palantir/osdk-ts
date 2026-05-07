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
import type { CacheKeys } from "./CacheKeys.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { Query } from "./Query.js";
import type { QuerySubscription } from "./QuerySubscription.js";
import type { Store } from "./Store.js";
import { subscribeQuery } from "./subscribeQuery.js";

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
    return subscribeQuery(this.store, query, options, subFn);
  }
}
