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

import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import { Trie } from "@wry/trie";

import { additionalContext } from "../../../Client.js";
import {
  createObjectSet,
  getWireObjectSet,
} from "../../../objectSet/createObjectSet.js";
import { hasWithProperties } from "../../../util/extractRdpDefinition.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { Canonical } from "../Canonical.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { OrderByCanonicalizer } from "../OrderByCanonicalizer.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { SelectCanonicalizer } from "../SelectCanonicalizer.js";
import type { Store } from "../Store.js";
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
  #operations = new Trie<Canonical<ObjectSetOperations>>(
    true,
    ([orderBy, select, pageSize, loadPropertySecurity]) =>
      ({
        orderBy,
        select,
        pageSize,
        loadPropertySecurity,
      }) as Canonical<ObjectSetOperations>,
  );
  orderByCanonicalizer: OrderByCanonicalizer;
  selectCanonicalizer: SelectCanonicalizer;

  constructor(
    store: Store,
    cacheKeys: CacheKeys<KnownCacheKey>,
    orderByCanonicalizer: OrderByCanonicalizer,
    selectCanonicalizer: SelectCanonicalizer,
  ) {
    super(store, cacheKeys);

    this.orderByCanonicalizer = orderByCanonicalizer;
    this.selectCanonicalizer = selectCanonicalizer;
  }

  observe(
    options: ObjectSetQueryOptions,
    subFn: Observer<ObjectSetPayload>,
  ): QuerySubscription<ObjectSetQuery> {
    const ret = super.observe(options, subFn);

    if (options.streamUpdates) {
      if (hasPivot(getWireObjectSet(ret.query.objectSet))) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            "[@osdk/client] streamUpdates is not supported with pivotTo. " +
              "The server does not support websocket subscriptions for " +
              "link-traversal queries. Ignoring streamUpdates.",
          );
        }
      } else if (hasWithProperties(getWireObjectSet(ret.query.objectSet))) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            "[@osdk/client] streamUpdates is not supported with withProperties. " +
              "The server does not support websocket subscriptions for " +
              "object sets that include derived properties. Ignoring streamUpdates.",
          );
        }
      } else {
        ret.query.registerStreamUpdates(ret.subscription);
      }
    }
    return ret;
  }

  getQuery(options: ObjectSetQueryOptions): ObjectSetQuery {
    let composed = options.baseObjectSet;
    if (options.withProperties)
      composed = composed.withProperties(options.withProperties);
    if (options.where) composed = composed.where(options.where);
    if (options.union?.length) composed = composed.union(...options.union);
    if (options.intersect?.length)
      composed = composed.intersect(...options.intersect);
    if (options.subtract?.length)
      composed = composed.subtract(...options.subtract);
    if (options.pivotTo) composed = composed.pivotTo(options.pivotTo);
    const wire = this.store.objectSetCanonicalizer.canonicalize(
      getWireObjectSet(composed),
    );
    const operations = this.buildCanonicalizedOperations(options);

    const objectSetCacheKey = this.cacheKeys.get<ObjectSetCacheKey>(
      "objectSet",
      wire,
      operations,
    );

    return this.store.queries.get(objectSetCacheKey, () => {
      const objectSet = createObjectSet(
        composed.$objectSetInternals.def,
        this.store.client[additionalContext],
        wire,
      );
      return new ObjectSetQuery(
        this.store,
        this.store.subjects.get(objectSetCacheKey),
        operations,
        objectSetCacheKey,
        { ...options, baseObjectSet: objectSet },
      );
    });
  }

  private buildCanonicalizedOperations(
    options: ObjectSetQueryOptions,
  ): Canonical<ObjectSetOperations> {
    const operations: ObjectSetOperations = {};

    if (options.orderBy) {
      operations.orderBy = this.orderByCanonicalizer.canonicalize(
        options.orderBy,
      );
    }

    if (options.select && options.select.length > 0) {
      operations.select = this.selectCanonicalizer.canonicalize(options.select);
    }

    if (options.pageSize) {
      operations.pageSize = options.pageSize;
    }

    if (options.$loadPropertySecurityMetadata) {
      operations.loadPropertySecurity = true;
    }

    return this.#operations.lookupArray([
      operations.orderBy,
      operations.select,
      operations.pageSize,
      operations.loadPropertySecurity,
    ]);
  }
}

function hasPivot(wire: WireObjectSet): boolean {
  if (wire.type === "searchAround" || wire.type === "interfaceLinkSearchAround")
    return true;
  if ("objectSet" in wire) return hasPivot(wire.objectSet);
  if ("objectSets" in wire) return wire.objectSets.some(hasPivot);
  return false;
}
