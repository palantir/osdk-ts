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
  AggregateOpts,
  DerivedProperty,
  ObjectOrInterfaceDefinition,
  SimplePropertyDef,
  WhereClause,
} from "@osdk/api";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { IntersectCanonicalizer } from "../IntersectCanonicalizer.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { RdpCanonicalizer } from "../RdpCanonicalizer.js";
import type { Store } from "../Store.js";
import type { WhereClauseCanonicalizer } from "../WhereClauseCanonicalizer.js";
import { type AggregationCacheKey } from "./AggregationCacheKey.js";
import {
  type AggregationPayload,
  AggregationQuery,
  type AggregationQueryOptions,
} from "./AggregationQuery.js";

export interface ObserveAggregationOptions<
  T extends ObjectOrInterfaceDefinition,
  A extends AggregateOpts<T>,
  RDPs extends Record<string, SimplePropertyDef> = {},
> {
  type: Pick<T, "apiName" | "type">;
  where?: WhereClause<T, RDPs>;
  withProperties?: DerivedProperty.Clause<T>;
  intersectWith?: Array<{
    where: WhereClause<T, RDPs>;
  }>;
  aggregate: A;
  dedupeInterval?: number;
}

export class AggregationsHelper extends AbstractHelper<
  AggregationQuery<any, any>,
  ObserveAggregationOptions<any, any>
> {
  whereCanonicalizer: WhereClauseCanonicalizer;
  rdpCanonicalizer: RdpCanonicalizer;
  intersectCanonicalizer: IntersectCanonicalizer;

  constructor(
    store: Store,
    cacheKeys: CacheKeys<KnownCacheKey>,
    whereCanonicalizer: WhereClauseCanonicalizer,
    rdpCanonicalizer: RdpCanonicalizer,
    intersectCanonicalizer: IntersectCanonicalizer,
  ) {
    super(store, cacheKeys);

    this.whereCanonicalizer = whereCanonicalizer;
    this.rdpCanonicalizer = rdpCanonicalizer;
    this.intersectCanonicalizer = intersectCanonicalizer;
  }

  observe<
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveAggregationOptions<T, A, RDPs>,
    subFn: Observer<AggregationPayload<T, A>>,
  ): QuerySubscription<AggregationQuery<T, A>> {
    return super.observe(options, subFn);
  }

  getQuery<
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveAggregationOptions<T, A, RDPs>,
  ): AggregationQuery<T, A> {
    const { type, where, withProperties, intersectWith, aggregate } = options;
    const { apiName } = type;
    const typeKind = "type" in type ? type.type : "interface";

    const canonWhere = this.whereCanonicalizer.canonicalize(where ?? {});
    const canonRdp = withProperties
      ? this.rdpCanonicalizer.canonicalize(withProperties)
      : undefined;

    const canonIntersect = intersectWith && intersectWith.length > 0
      ? this.intersectCanonicalizer.canonicalize(intersectWith)
      : undefined;

    const canonAggregate = this.canonicalizeAggregate(aggregate);

    const aggregationCacheKey = this.cacheKeys.get<AggregationCacheKey>(
      "aggregation",
      typeKind,
      apiName,
      canonWhere,
      canonRdp,
      canonIntersect,
      canonAggregate,
    );

    return this.store.queries.get(
      aggregationCacheKey,
      () =>
        new AggregationQuery<T, A>(
          this.store,
          this.store.subjects.get(aggregationCacheKey),
          aggregationCacheKey,
          {
            type,
            where,
            withProperties,
            intersectWith,
            aggregate,
            dedupeInterval: options.dedupeInterval ?? 2000,
          } as AggregationQueryOptions<T, A>,
        ),
    );
  }

  private canonicalizeAggregate<A extends AggregateOpts<any>>(
    aggregate: A,
  ): any {
    return JSON.parse(JSON.stringify(aggregate));
  }
}
