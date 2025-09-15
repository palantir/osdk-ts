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
import type {
  CommonObserveOptions,
  ObserveOptions,
} from "../ObservableClient/common.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { Query } from "./Query.js";
import { UnsubscribableWrapper } from "./UnsubscribableWrapper.js";

/** @internal */
export class QuerySubscription<
  TQuery extends Query<
    KnownCacheKey,
    unknown,
    CommonObserveOptions & ObserveOptions
  >,
> extends UnsubscribableWrapper {
  /** @internal */
  query: TQuery;

  /** @internal */
  subscription: Subscription;

  constructor(query: TQuery, subscription: Subscription) {
    super(subscription);
    this.query = query;
    this.subscription = subscription;

    // hide these from introspection
    Object.defineProperties(this, {
      query: { enumerable: false },
      subscription: { enumerable: false },
    });
  }
}
