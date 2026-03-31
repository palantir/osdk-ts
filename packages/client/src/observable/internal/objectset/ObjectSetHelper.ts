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
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { ObjectSetArrayCanonicalizer } from "../ObjectSetArrayCanonicalizer.js";
import type { OrderByCanonicalizer } from "../OrderByCanonicalizer.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { RdpCanonicalizer } from "../RdpCanonicalizer.js";
import type { SelectCanonicalizer } from "../SelectCanonicalizer.js";
import type { Store } from "../Store.js";
import type { WhereClauseCanonicalizer } from "../WhereClauseCanonicalizer.js";
import type { ObjectSetCacheKey } from "./ObjectSetCacheKey.js";
import { ObjectSetQuery } from "./ObjectSetQuery.js";
import type { ObjectSetQueryOptions } from "./ObjectSetQueryOptions.js";

export class ObjectSetHelper extends AbstractHelper<
  ObjectSetQuery,
  ObjectSetQueryOptions
> {
  whereCanonicalizer: WhereClauseCanonicalizer;
  orderByCanonicalizer: OrderByCanonicalizer;
  rdpCanonicalizer: RdpCanonicalizer;
  selectCanonicalizer: SelectCanonicalizer;
  objectSetArrayCanonicalizer: ObjectSetArrayCanonicalizer;

  constructor(
    store: Store,
    cacheKeys: CacheKeys<KnownCacheKey>,
    whereCanonicalizer: WhereClauseCanonicalizer,
    orderByCanonicalizer: OrderByCanonicalizer,
    rdpCanonicalizer: RdpCanonicalizer,
    selectCanonicalizer: SelectCanonicalizer,
    objectSetArrayCanonicalizer: ObjectSetArrayCanonicalizer,
  ) {
    super(store, cacheKeys);

    this.whereCanonicalizer = whereCanonicalizer;
    this.orderByCanonicalizer = orderByCanonicalizer;
    this.rdpCanonicalizer = rdpCanonicalizer;
    this.selectCanonicalizer = selectCanonicalizer;
    this.objectSetArrayCanonicalizer = objectSetArrayCanonicalizer;
  }

  observe(
    options: ObjectSetQueryOptions,
    subFn: Observer<ObjectSetPayload>,
  ): QuerySubscription<ObjectSetQuery> {
    const ret = super.observe(options, subFn);

    if (options.streamUpdates) {
      ret.query.registerStreamUpdates(ret.subscription);
    }
    return ret;
  }

  getQuery(options: ObjectSetQueryOptions): ObjectSetQuery {
    const { baseObjectSet } = options;
    const baseObjectSetWire = JSON.stringify(getWireObjectSet(baseObjectSet));

    const canonWhere = options.where
      ? this.whereCanonicalizer.canonicalize(options.where)
      : undefined;
    const canonWithProperties = options.withProperties
      ? this.rdpCanonicalizer.canonicalize(options.withProperties)
      : undefined;
    const canonUnion = options.union && options.union.length > 0
      ? this.objectSetArrayCanonicalizer.canonicalizeUnion(
        options.union.map(os => JSON.stringify(getWireObjectSet(os))),
      )
      : undefined;
    const canonIntersect = options.intersect && options.intersect.length > 0
      ? this.objectSetArrayCanonicalizer.canonicalizeIntersect(
        options.intersect.map(os => JSON.stringify(getWireObjectSet(os))),
      )
      : undefined;
    const canonSubtract = options.subtract && options.subtract.length > 0
      ? this.objectSetArrayCanonicalizer.canonicalizeSubtract(
        options.subtract.map(os => JSON.stringify(getWireObjectSet(os))),
      )
      : undefined;
    const canonPivotTo = options.pivotTo as string | undefined;
    const canonOrderBy = options.orderBy
      ? this.orderByCanonicalizer.canonicalize(options.orderBy)
      : undefined;
    const canonSelect = options.select && options.select.length > 0
      ? this.selectCanonicalizer.canonicalize(options.select)
      : undefined;
    const canonPageSize = options.pageSize || undefined;
    const canonLoadPropertySecurity = options.$loadPropertySecurityMetadata
      ? true as const
      : undefined;

    const objectSetCacheKey = this.cacheKeys.get<ObjectSetCacheKey>(
      "objectSet",
      baseObjectSetWire,
      canonWhere,
      canonWithProperties,
      canonUnion,
      canonIntersect,
      canonSubtract,
      canonPivotTo,
      canonOrderBy,
      canonSelect,
      canonPageSize,
      canonLoadPropertySecurity,
    );

    return this.store.queries.get(objectSetCacheKey, () => {
      return new ObjectSetQuery(
        this.store,
        this.store.subjects.get(objectSetCacheKey),
        baseObjectSetWire,
        objectSetCacheKey,
        options,
        canonWhere,
        canonWithProperties,
        canonUnion,
        canonIntersect,
        canonSubtract,
        canonPivotTo,
        canonOrderBy,
        canonSelect,
        canonLoadPropertySecurity,
      );
    });
  }
}
