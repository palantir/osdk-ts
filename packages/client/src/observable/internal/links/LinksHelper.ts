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
  CompileTimeMetadata,
  InterfaceDefinition,
  ObjectTypeDefinition,
} from "@osdk/api";
import type { SpecificLinkPayload } from "../../LinkPayload.js";

import type { Observer } from "../../ObservableClient/common.js";
import type { ObserveLinks } from "../../ObservableClient/ObserveLink.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { OrderByCanonicalizer } from "../OrderByCanonicalizer.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { Store } from "../Store.js";
import type { WhereClauseCanonicalizer } from "../WhereClauseCanonicalizer.js";
import type { SpecificLinkCacheKey } from "./SpecificLinkCacheKey.js";
import { SpecificLinkQuery } from "./SpecificLinkQuery.js";

export interface LinksHelper {
  observe<
    T extends ObjectTypeDefinition | InterfaceDefinition,
    L extends keyof CompileTimeMetadata<T>["links"] & string,
  >(
    options: ObserveLinks.Options<T, L>,
    subFn: Observer<SpecificLinkPayload>,
  ): QuerySubscription<SpecificLinkQuery>;

  getQuery<
    T extends ObjectTypeDefinition | InterfaceDefinition,
    L extends keyof CompileTimeMetadata<T>["links"] & string,
  >(options: ObserveLinks.Options<T, L>): SpecificLinkQuery;
}

export class LinksHelper extends AbstractHelper<
  SpecificLinkQuery,
  ObserveLinks.Options<ObjectTypeDefinition | InterfaceDefinition, string>
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

  getQuery<
    T extends ObjectTypeDefinition | InterfaceDefinition,
    L extends keyof CompileTimeMetadata<T>["links"] & string,
  >(options: ObserveLinks.Options<T, L>): SpecificLinkQuery {
    const { apiName, type: sourceTypeKind } = options.srcType;

    const canonWhere = this.whereCanonicalizer.canonicalize(
      options.where ?? {},
    );
    const canonOrderBy = this.orderByCanonicalizer.canonicalize(
      options.orderBy ?? {},
    );
    const linkCacheKey = this.cacheKeys.get<SpecificLinkCacheKey>(
      "specificLink",
      apiName,
      sourceTypeKind,
      options.sourceUnderlyingObjectType,
      options.pk,
      options.linkName,
      canonWhere,
      canonOrderBy,
    );

    return this.store.queries.get(linkCacheKey, () => {
      return new SpecificLinkQuery(
        this.store,
        this.store.subjects.get(linkCacheKey),
        linkCacheKey,
        options,
      );
    });
  }
}
