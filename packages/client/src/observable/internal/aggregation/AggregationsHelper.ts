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
  ObjectOrInterfaceDefinition,
  SimplePropertyDef,
} from "@osdk/api";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import type {
  ObserveAggregationOptions,
  ObserveAggregationOptionsWithObjectSet,
} from "../../ObservableClient.js";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { Canonical } from "../Canonical.js";
import type { IntersectCanonicalizer } from "../IntersectCanonicalizer.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { RdpCanonicalizer } from "../RdpCanonicalizer.js";
import type { Store } from "../Store.js";
import type { WhereClauseCanonicalizer } from "../WhereClauseCanonicalizer.js";
import type { AggregationCacheKey } from "./AggregationCacheKey.js";
import type {
  AggregationPayloadBase,
  AggregationQuery,
} from "./AggregationQuery.js";
import { ObjectAggregationQuery } from "./ObjectAggregationQuery.js";

type AggregationOptions =
  | ObserveAggregationOptions<
    ObjectOrInterfaceDefinition,
    AggregateOpts<ObjectOrInterfaceDefinition>
  >
  | ObserveAggregationOptionsWithObjectSet<
    ObjectOrInterfaceDefinition,
    AggregateOpts<ObjectOrInterfaceDefinition>
  >;

export class AggregationsHelper extends AbstractHelper<
  AggregationQuery,
  AggregationOptions
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
    subFn: Observer<AggregationPayloadBase>,
  ): QuerySubscription<AggregationQuery> {
    return super.observe(options, subFn);
  }

  async observeAsync<
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveAggregationOptionsWithObjectSet<T, A, RDPs>,
    subFn: Observer<AggregationPayloadBase>,
  ): Promise<QuerySubscription<AggregationQuery>> {
    const query = this.getQueryWithObjectSet(options);
    await query.ensureInvalidationTypesReady();
    return this._subscribe(
      query,
      options as AggregationOptions,
      subFn,
    );
  }

  getQuery<
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveAggregationOptions<T, A, RDPs>,
  ): AggregationQuery {
    return this.getOrCreateQuery(options as AggregationOptions, undefined);
  }

  getQueryWithObjectSet<
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
    RDPs extends Record<string, SimplePropertyDef> = {},
  >(
    options: ObserveAggregationOptionsWithObjectSet<T, A, RDPs>,
  ): AggregationQuery {
    const serializedObjectSet = JSON.stringify(
      getWireObjectSet(options.objectSet),
    );
    return this.getOrCreateQuery(
      options as AggregationOptions,
      serializedObjectSet,
    );
  }

  private getOrCreateQuery(
    options: AggregationOptions,
    serializedObjectSet: string | undefined,
  ): AggregationQuery {
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
      serializedObjectSet,
      canonWhere,
      canonRdp,
      canonIntersect,
      canonAggregate,
    );

    return this.store.queries.get(aggregationCacheKey, () => {
      if (typeKind !== "object") {
        throw new Error(
          "Only ObjectTypeDefinition is currently supported for aggregations",
        );
      }
      return new ObjectAggregationQuery(
        this.store,
        this.store.subjects.get(aggregationCacheKey),
        aggregationCacheKey,
        options,
      );
    });
  }

  private canonicalizeAggregate<
    T extends ObjectOrInterfaceDefinition,
    A extends AggregateOpts<T>,
  >(
    aggregate: A,
  ): Canonical<A> {
    return JSON.parse(JSON.stringify(aggregate)) as Canonical<A>;
  }
}
