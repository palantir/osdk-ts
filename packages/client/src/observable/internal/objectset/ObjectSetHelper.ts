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

import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { Canonical } from "../Canonical.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { OrderByCanonicalizer } from "../OrderByCanonicalizer.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { Store } from "../Store.js";
import type { WhereClauseCanonicalizer } from "../WhereClauseCanonicalizer.js";
import type {
  ObjectSetCacheKey,
  ObjectSetOperations,
} from "./ObjectSetCacheKey.js";
import { ObjectSetQuery } from "./ObjectSetQuery.js";
import type { ObjectSetQueryOptions } from "./ObjectSetQueryOptions.js";

export class ObjectSetHelper extends AbstractHelper<
  ObjectSetQuery,
  ObjectSetQueryOptions
> {
  whereCanonicalizer: WhereClauseCanonicalizer;
  orderByCanonicalizer: OrderByCanonicalizer;

  constructor(
    store: Store,
    cacheKeys: CacheKeys<KnownCacheKey>,
    whereCanonicalizer: WhereClauseCanonicalizer,
    orderByCanonicalizer: OrderByCanonicalizer,
  ) {
    super(store, cacheKeys);

    this.whereCanonicalizer = whereCanonicalizer;
    this.orderByCanonicalizer = orderByCanonicalizer;
  }

  observe(
    options: ObjectSetQueryOptions,
    subFn: Observer<ObjectSetPayload>,
  ): QuerySubscription<ObjectSetQuery> {
    const ret = super.observe(options, subFn);

    if (options.streamUpdates) {
      ret.query.registerStreamUpdates(
        ret.subscription,
        options.streamTransport,
      );
    }
    return ret;
  }

  getQuery(options: ObjectSetQueryOptions): ObjectSetQuery {
    const { baseObjectSet } = options;
    const baseObjectSetWire = JSON.stringify(getWireObjectSet(baseObjectSet));
    const operations = this.buildCanonicalizedOperations(options);

    const objectSetCacheKey = this.cacheKeys.get<ObjectSetCacheKey>(
      "objectSet",
      baseObjectSetWire,
      operations,
    );

    return this.store.queries.get(objectSetCacheKey, () => {
      return new ObjectSetQuery(
        this.store,
        this.store.subjects.get(objectSetCacheKey),
        baseObjectSetWire,
        operations,
        objectSetCacheKey,
        options,
      );
    });
  }

  private buildCanonicalizedOperations(
    options: ObjectSetQueryOptions,
  ): Canonical<ObjectSetOperations> {
    const operations: ObjectSetOperations = {};

    if (options.where) {
      operations.where = this.whereCanonicalizer.canonicalize(options.where);
    }

    if (options.withProperties) {
      operations.withProperties = Object.keys(options.withProperties).sort();
    }

    if (options.union && options.union.length > 0) {
      operations.union = options.union.map(os =>
        JSON.stringify(getWireObjectSet(os))
      );
    }

    if (options.intersect && options.intersect.length > 0) {
      operations.intersect = options.intersect.map(os =>
        JSON.stringify(getWireObjectSet(os))
      );
    }

    if (options.subtract && options.subtract.length > 0) {
      operations.subtract = options.subtract.map(os =>
        JSON.stringify(getWireObjectSet(os))
      );
    }

    if (options.pivotTo) {
      operations.pivotTo = options.pivotTo as string;
    }

    if (options.orderBy) {
      operations.orderBy = this.orderByCanonicalizer.canonicalize(
        options.orderBy,
      );
    }

    if (options.pageSize) {
      operations.pageSize = options.pageSize;
    }

    return operations as Canonical<ObjectSetOperations>;
  }
}
