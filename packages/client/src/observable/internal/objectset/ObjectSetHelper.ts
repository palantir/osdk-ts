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

import { additionalContext } from "../../../Client.js";
import type { MinimalClient } from "../../../MinimalClientContext.js";
import { getWireObjectSet } from "../../../objectSet/createObjectSet.js";
import { hasWithProperties } from "../../../util/extractRdpDefinition.js";
import type { ObjectSetPayload } from "../../ObjectSetPayload.js";
import type { Observer } from "../../ObservableClient/common.js";
import { AbstractHelper } from "../AbstractHelper.js";
import type { CacheKeys } from "../CacheKeys.js";
import type { Canonical } from "../Canonical.js";
import type { KnownCacheKey } from "../KnownCacheKey.js";
import type { ObjectSetArrayCanonicalizer } from "../ObjectSetArrayCanonicalizer.js";
import type { OrderByCanonicalizer } from "../OrderByCanonicalizer.js";
import type { QuerySubscription } from "../QuerySubscription.js";
import type { RdpCanonicalizer } from "../RdpCanonicalizer.js";
import type { SelectCanonicalizer } from "../SelectCanonicalizer.js";
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
    objectSetArrayCanonicalizer: ObjectSetArrayCanonicalizer
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
    subFn: Observer<ObjectSetPayload>
  ): QuerySubscription<ObjectSetQuery> {
    const ret = super.observe(options, subFn);

    if (options.streamUpdates) {
      if (options.pivotTo) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            "[@osdk/client] streamUpdates is not supported with pivotTo. " +
              "The server does not support websocket subscriptions for " +
              "link-traversal queries. Ignoring streamUpdates."
          );
        }
      } else if (
        options.withProperties ||
        hasWithProperties(getWireObjectSet(options.baseObjectSet))
      ) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            "[@osdk/client] streamUpdates is not supported with withProperties. " +
              "The server does not support websocket subscriptions for " +
              "object sets that include derived properties. Ignoring streamUpdates."
          );
        }
      } else {
        ret.query.registerStreamUpdates(ret.subscription);
      }
    }
    return ret;
  }

  getQuery(options: ObjectSetQueryOptions): ObjectSetQuery {
    const { baseObjectSet } = options;
    const baseWire = getWireObjectSet(baseObjectSet);
    const baseObjectSetWire = JSON.stringify(baseWire);
    const operations = this.buildCanonicalizedOperations(options, baseWire);

    const objectSetCacheKey = this.cacheKeys.get<ObjectSetCacheKey>(
      "objectSet",
      baseObjectSetWire,
      operations
    );

    return this.store.queries.get(objectSetCacheKey, () => {
      return new ObjectSetQuery(
        this.store,
        this.store.subjects.get(objectSetCacheKey),
        baseObjectSetWire,
        operations,
        objectSetCacheKey,
        options
      );
    });
  }

  private buildCanonicalizedOperations(
    options: ObjectSetQueryOptions,
    baseWire: WireObjectSet
  ): Canonical<ObjectSetOperations> {
    const operations: ObjectSetOperations = {};

    if (options.where) {
      operations.where = this.whereCanonicalizer.canonicalize(options.where);
    }

    if (options.withProperties) {
      operations.withProperties = this.rdpCanonicalizer.canonicalize(
        options.withProperties
      );
    }

    if (options.union && options.union.length > 0) {
      operations.union = this.objectSetArrayCanonicalizer.canonicalizeUnion(
        options.union.map((os) => JSON.stringify(getWireObjectSet(os)))
      );
    }

    if (options.intersect && options.intersect.length > 0) {
      operations.intersect =
        this.objectSetArrayCanonicalizer.canonicalizeIntersect(
          options.intersect.map((os) => JSON.stringify(getWireObjectSet(os)))
        );
    }

    if (options.subtract && options.subtract.length > 0) {
      operations.subtract =
        this.objectSetArrayCanonicalizer.canonicalizeSubtract(
          options.subtract.map((os) => JSON.stringify(getWireObjectSet(os)))
        );
    }

    if (options.pivotTo) {
      operations.pivotTo = options.pivotTo as string;
    }

    if (options.orderBy) {
      operations.orderBy = this.orderByCanonicalizer.canonicalize(
        options.orderBy
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

    // The flag is interface-only on the server. Keep it only when the base set
    // resolves to an interface, so it never fragments the cache over a no-op flag
    // for a Base Object Set. This ignores pivotTo, so a pivot onto objects can
    // still send the flag; gating on the true post-pivot type needs async
    // metadata resolution on this synchronous path, which isn't worth it. Results
    // stay correct (the server ignores the flag); the cost is cache fragmentation.
    if (
      options.$includeAllBaseObjectProperties &&
      baseSetMayResolveToInterface(
        baseWire,
        this.store.client[additionalContext]
      )
    ) {
      operations.includeAllBaseObjectProperties = true;
    }

    return operations as Canonical<ObjectSetOperations>;
  }
}

/**
 * Whether an Object Set's result type may be an interface, used to gate the
 * interface-only flag. Recurses through type-preserving wrappers; set operations
 * return true if any operand may be an interface (reference/static can sit at
 * index 0, so the first operand alone isn't representative). See groups below:
 * false for provably-object (base, searchAround) and unreachable-here (reference,
 * static, methodInput); asType resolved precisely from the recorded narrow-to
 * kind; interfaceLinkSearchAround returns true (can't resolve synchronously, so
 * err toward sending rather than dropping a meaningful flag).
 *
 * Terminates: each call descends into a strict child of a finite acyclic tree
 * (callers JSON.stringify it first, throwing on a cycle before we get here).
 */
function baseSetMayResolveToInterface(
  wire: WireObjectSet,
  clientCtx: MinimalClient
): boolean {
  switch (wire.type) {
    case "interfaceBase":
      return true;
    case "filter":
    case "withProperties":
    case "nearestNeighbors":
    case "asBaseObjectTypes":
      return baseSetMayResolveToInterface(wire.objectSet, clientCtx);
    case "union":
    case "intersect":
    case "subtract":
      // Operands share a result type, but reference/static operands resolve to
      // "not an interface" and can sit at any position (e.g. hydrate builds
      // intersect([interfaceBase, reference])). Scan the whole list — like
      // extractObjectOrInterfaceType — so an interface operand isn't missed just
      // because index 0 happens to be a reference/static. (Empty list → false.)
      return wire.objectSets.some((os) =>
        baseSetMayResolveToInterface(os, clientCtx)
      );
    // Always an "object", searchAround for interfaces uses "interfaceLinkSearchAround"
    case "base":
    case "searchAround":
      return false;
    // interfaceLinkSearchAround resolves to whatever the interface link targets,
    // which needs async resolution (see extractObjectOrInterfaceType) and this
    // path is synchronous. Rather than risk dropping a meaningful flag we send it
    // (return true), accepting cache fragmentation when the result is actually
    // objects — the server ignores the flag for non-interface results.
    case "interfaceLinkSearchAround":
      return true;
    case "asType": {
      // The narrowed-to kind is recorded synchronously when narrowToType() is
      // called (see extractObjectOrInterfaceType), so resolve it precisely. Drop
      // the flag only when we know it was narrowed to an object; otherwise
      // (interface, or unrecorded because the set was built on a different client)
      // send it rather than risk dropping a meaningful flag.
      const kind =
        clientCtx.narrowTypeInterfaceOrObjectMapping[wire.entityType];
      return kind === "interface";
    }
    // Effectively unreachable at this position: methodInput only lives inside RDP
    // definitions (we recurse through withProperties.objectSet, never into
    // derivedProperties), and reference/static are always wrapped behind a
    // base/interfaceBase first operand by the hydrate utils. Returning false is
    // inconsequential here; kept for exhaustiveness.
    case "reference":
    case "static":
    case "methodInput":
      return false;
    default: {
      ((_: never) => {
        // eslint-disable-next-line no-console
        console.warn("Unknown object set type:", wire);
      })(wire);
      return false;
    }
  }
}
