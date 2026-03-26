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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import type { ListPayload } from "../../ListPayload.js";
import type { ObserveListOptions } from "../../ObservableClient.js";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { Canonical } from "../Canonical.js";
import type { IntersectCanonicalizer } from "../IntersectCanonicalizer.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { OrderByCanonicalizer } from "../OrderByCanonicalizer.js";
import type { PivotCanonicalizer, PivotInfo } from "../PivotCanonicalizer.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { Rdp, RdpCanonicalizer } from "../RdpCanonicalizer.js";
import type { RidListCanonicalizer } from "../RidListCanonicalizer.js";
import type { SelectCanonicalizer } from "../SelectCanonicalizer.js";
import type { SimpleWhereClause } from "../SimpleWhereClause.js";
import type { Store } from "../Store.js";
import type { WhereClauseCanonicalizer } from "../WhereClauseCanonicalizer.js";
import { InterfaceListQuery } from "./InterfaceListQuery.js";
import type { ListCacheKey } from "./ListCacheKey.js";
import type { ListQuery } from "./ListQuery.js";
import { ObjectListQuery } from "./ObjectListQuery.js";

export class ListsHelper extends AbstractHelper<
  ListQuery,
  ObserveListOptions<ObjectOrInterfaceDefinition, {}>
> {
  whereCanonicalizer: WhereClauseCanonicalizer;
  orderByCanonicalizer: OrderByCanonicalizer;
  rdpCanonicalizer: RdpCanonicalizer;
  intersectCanonicalizer: IntersectCanonicalizer;
  pivotCanonicalizer: PivotCanonicalizer;
  ridListCanonicalizer: RidListCanonicalizer;
  selectCanonicalizer: SelectCanonicalizer;

  constructor(
    store: Store,
    cacheKeys: CacheKeys<KnownCacheKey>,
    whereCanonicalizer: WhereClauseCanonicalizer,
    orderByCanonicalizer: OrderByCanonicalizer,
    rdpCanonicalizer: RdpCanonicalizer,
    intersectCanonicalizer: IntersectCanonicalizer,
    pivotCanonicalizer: PivotCanonicalizer,
    ridListCanonicalizer: RidListCanonicalizer,
    selectCanonicalizer: SelectCanonicalizer,
  ) {
    super(store, cacheKeys);

    this.whereCanonicalizer = whereCanonicalizer;
    this.orderByCanonicalizer = orderByCanonicalizer;
    this.rdpCanonicalizer = rdpCanonicalizer;
    this.intersectCanonicalizer = intersectCanonicalizer;
    this.pivotCanonicalizer = pivotCanonicalizer;
    this.ridListCanonicalizer = ridListCanonicalizer;
    this.selectCanonicalizer = selectCanonicalizer;
  }

  observe<T extends ObjectOrInterfaceDefinition>(
    options: ObserveListOptions<T, {}>,
    subFn: Observer<ListPayload>,
  ): QuerySubscription<ListQuery> {
    const ret = super.observe(options, subFn);

    if (options.streamUpdates) {
      if (options.pivotTo) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            "[@osdk/client] streamUpdates is not supported with pivotTo. "
              + "The server does not support websocket subscriptions for "
              + "link-traversal queries. Ignoring streamUpdates.",
          );
        }
      } else if (options.withProperties) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            "[@osdk/client] streamUpdates is not supported with withProperties. "
              + "The server does not support websocket subscriptions for "
              + "object sets that include derived properties. Ignoring streamUpdates.",
          );
        }
      } else {
        ret.query.registerStreamUpdates(ret.subscription);
      }
    }
    return ret;
  }

  canonicalizeListParams<T extends ObjectOrInterfaceDefinition>(
    options: ObserveListOptions<T, {}>,
  ): {
    type: "object" | "interface";
    apiName: string;
    canonWhere: Canonical<SimpleWhereClause>;
    canonOrderBy: Canonical<Record<string, "asc" | "desc" | undefined>>;
    canonRdp: Canonical<Rdp> | undefined;
    canonIntersect: Canonical<Array<Canonical<SimpleWhereClause>>> | undefined;
    canonPivot: Canonical<PivotInfo> | undefined;
    canonRids: Canonical<string[]> | undefined;
    canonSelect: Canonical<readonly string[]> | undefined;
    $loadPropertySecurityMetadata: boolean | undefined;
    $includeAllBaseObjectProperties: true | undefined;
  } {
    const {
      type: typeDefinition,
      where,
      orderBy,
      withProperties,
      intersectWith,
      pivotTo,
      rids,
      select,
    } = options;
    const { apiName, type } = typeDefinition;
    // The flag is interface-only on the server. Drop it for object queries so
    // they don't fragment the cache.
    const $includeAllBaseObjectProperties =
      type === "interface" && options.$includeAllBaseObjectProperties
        ? true
        : undefined;

    const canonWhere = this.whereCanonicalizer.canonicalize(where ?? {});
    const canonOrderBy = this.orderByCanonicalizer.canonicalize(orderBy ?? {});
    const canonRdp = withProperties
      ? this.rdpCanonicalizer.canonicalize(withProperties)
      : undefined;

    const canonIntersect = intersectWith && intersectWith.length > 0
      ? this.intersectCanonicalizer.canonicalize(intersectWith)
      : undefined;

    const canonPivot = pivotTo
      ? this.pivotCanonicalizer.canonicalize(apiName, type, pivotTo)
      : undefined;

    const canonRids = rids != null
      ? this.ridListCanonicalizer.canonicalize(rids)
      : undefined;

    const canonSelect = select && select.length > 0
      ? this.selectCanonicalizer.canonicalize(select)
      : undefined;

    return {
      type,
      apiName,
      canonWhere,
      canonOrderBy,
      canonRdp,
      canonIntersect,
      canonPivot,
      canonRids,
      canonSelect,
      $loadPropertySecurityMetadata,
      $includeAllBaseObjectProperties,
    };
  }

  getQuery<T extends ObjectOrInterfaceDefinition>(
    options: ObserveListOptions<T, {}>,
  ): ListQuery {
    const {
      type,
      apiName,
      canonWhere,
      canonOrderBy,
      canonRdp,
      canonIntersect,
      canonPivot,
      canonRids,
      canonSelect,
      $loadPropertySecurityMetadata,
      $includeAllBaseObjectProperties,
    } = this.canonicalizeListParams(options);

    const { $loadPropertySecurityMetadata } = options;

    const listCacheKey = this.cacheKeys.get<ListCacheKey>(
      "list",
      type,
      apiName,
      canonWhere,
      canonOrderBy,
      canonRdp,
      canonIntersect,
      canonPivot,
      canonRids,
      canonSelect,
      $loadPropertySecurityMetadata ? true : undefined,
      $includeAllBaseObjectProperties,
    );

    return this.store.queries.get(listCacheKey, () => {
      const QueryClass = type === "object"
        ? ObjectListQuery
        : InterfaceListQuery;
      return new QueryClass(
        this.store,
        this.store.subjects.get(listCacheKey),
        apiName,
        listCacheKey,
        options,
      );
    });
  }
}
