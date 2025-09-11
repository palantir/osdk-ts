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

import type { InterfaceDefinition, ObjectTypeDefinition } from "@osdk/api";
import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import { createWithPropertiesObjectSet } from "../../../derivedProperties/createWithPropertiesObjectSet.js";
import type { ListPayload } from "../../ListPayload.js";
import type { ObserveListOptions } from "../../ObservableClient.js";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { ListCacheKey } from "../ListCacheKey.js";
import { ListQuery } from "../ListQuery.js";
import type { OrderByCanonicalizer } from "../OrderByCanonicalizer.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { RdpCanonicalizer } from "../RdpCanonicalizer.js";
import type { Store } from "../Store.js";
import type { WhereClauseCanonicalizer } from "../WhereClauseCanonicalizer.js";

export class ListsHelper extends AbstractHelper<
  ListQuery,
  ObserveListOptions<ObjectTypeDefinition | InterfaceDefinition>
> {
  whereCanonicalizer: WhereClauseCanonicalizer;
  orderByCanonicalizer: OrderByCanonicalizer;
  rdpCanonicalizer: RdpCanonicalizer;

  constructor(
    store: Store,
    whereCanonicalizer: WhereClauseCanonicalizer,
    orderByCanonicalizer: OrderByCanonicalizer,
    rdpCanonicalizer: RdpCanonicalizer,
  ) {
    super(store);

    this.whereCanonicalizer = whereCanonicalizer;
    this.orderByCanonicalizer = orderByCanonicalizer;
    this.rdpCanonicalizer = rdpCanonicalizer;
  }

  observe<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveListOptions<T>,
    subFn: Observer<ListPayload>,
  ): QuerySubscription<ListQuery> {
    const ret = super.observe(options, subFn);

    if (options.streamUpdates) {
      ret.query.registerStreamUpdates(ret.subscription);
    }
    return ret;
  }

  getQuery<T extends ObjectTypeDefinition | InterfaceDefinition>(
    options: ObserveListOptions<T>,
  ): ListQuery {
    const { type: { apiName, type }, where, orderBy, withProperties } = options;

    let objectSet: any;
    if (type === "object") {
      objectSet = this.store.client({
        type,
        apiName,
      } as ObjectTypeDefinition);
    } else {
      objectSet = this.store.client({
        type,
        apiName,
      } as InterfaceDefinition);
    }

    if (where) {
      objectSet = objectSet.where(where as any);
    }

    let rdpMappings: Map<string, string> | undefined;
    if (withProperties) {
      rdpMappings = new Map<string, string>();
      const definitionMap = new Map<any, DerivedPropertyDefinition>();

      // Get all registered RDPs for this type
      const allRegisteredRdps = this.store.getAllRdpsForType(apiName);
      const rdpsToFetch: Record<string, DerivedPropertyDefinition> = {};

      // Process each withProperty to get its definition and canonical ID
      for (const [userName, rdpCreator] of Object.entries(withProperties)) {
        const derivedPropertyDefinition = (rdpCreator as any)(
          createWithPropertiesObjectSet(
            options.type as any,
            { type: "methodInput" },
            definitionMap,
            true,
          ),
        );
        const definition = definitionMap.get(derivedPropertyDefinition)!;
        const canonicalId = this.rdpCanonicalizer.canonicalize(definition);
        this.store.registerRdp(apiName, canonicalId, definition);
        rdpMappings.set(userName, canonicalId);

        rdpsToFetch[canonicalId] = definition;
      }

      // Add all other registered RDPs for this type
      for (const [canonicalId, definition] of allRegisteredRdps) {
        if (!rdpsToFetch[canonicalId]) {
          rdpsToFetch[canonicalId] = definition;
        }
      }

      // Update objectSet to fetch all known  RDPs using canonical IDs
      objectSet = objectSet.withProperties(rdpsToFetch);
    }

    const canonWhere = this.whereCanonicalizer.canonicalize(where ?? {});
    const canonOrderBy = this.orderByCanonicalizer.canonicalize(orderBy ?? {});

    const listCacheKey = this.store.getCacheKey<ListCacheKey>(
      "list",
      type,
      apiName,
      canonWhere,
      canonOrderBy,
    );

    return this.store.getQuery(listCacheKey, () => {
      return new ListQuery(
        this.store,
        this.store.getSubject(listCacheKey),
        type,
        apiName,
        objectSet,
        listCacheKey,
        options,
        rdpMappings,
      );
    });
  }
}
