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
  ActionDefinition,
  ActionEditResponse,
  ActionValidationResponse,
  Logger,
  ObjectTypeDefinition,
  Osdk,
  PrimaryKeyType,
  QueryDefinition,
} from "@osdk/api";
import invariant from "tiny-invariant";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import { additionalContext, type Client } from "../../Client.js";
import { DEBUG_REFCOUNTS } from "../DebugFlags.js";
import type { OptimisticBuilder } from "../OptimisticBuilder.js";
import { ActionApplication } from "./actions/ActionApplication.js";
import {
  API_NAME_IDX as AGGREGATION_API_NAME_IDX,
  RDP_IDX as AGGREGATION_RDP_IDX,
} from "./aggregation/AggregationCacheKey.js";
import { AggregationsHelper } from "./aggregation/AggregationsHelper.js";
import type { BatchContext } from "./BatchContext.js";
import { DEBUG_ONLY__cacheKeyToString } from "./CacheKey.js";
import { CacheKeys } from "./CacheKeys.js";
import type { Canonical } from "./Canonical.js";
import {
  type Changes,
  createChangedObjects,
  DEBUG_ONLY__changesToString,
} from "./Changes.js";
import { FunctionsHelper } from "./function/FunctionsHelper.js";
import { IntersectCanonicalizer } from "./IntersectCanonicalizer.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { Entry } from "./Layer.js";
import { Layers } from "./Layers.js";
import { LinksHelper } from "./links/LinksHelper.js";
import {
  API_NAME_IDX as LIST_API_NAME_IDX,
  RDP_IDX as LIST_RDP_IDX,
} from "./list/ListCacheKey.js";
import { ListsHelper } from "./list/ListsHelper.js";
import {
  API_NAME_IDX as OBJECT_API_NAME_IDX,
  RDP_CONFIG_IDX as OBJECT_RDP_CONFIG_IDX,
} from "./object/ObjectCacheKey.js";
import { ObjectCacheKeyRegistry } from "./object/ObjectCacheKeyRegistry.js";
import { ObjectsHelper } from "./object/ObjectsHelper.js";
import { ObjectSetHelper } from "./objectset/ObjectSetHelper.js";
import { type OptimisticId } from "./OptimisticId.js";
import { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
import { PivotCanonicalizer } from "./PivotCanonicalizer.js";
import { Queries } from "./Queries.js";
import { type Rdp, RdpCanonicalizer } from "./RdpCanonicalizer.js";
import { RidListCanonicalizer } from "./RidListCanonicalizer.js";
import type { Subjects } from "./Subjects.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

export namespace Store {
  export interface ApplyActionOptions {
    optimisticUpdate?: (ctx: OptimisticBuilder) => void;
  }
}

/*
  Notes:
    - Subjects are one per type per store (by cache key)
    - Data is one per layer per cache key
*/

/**
 * Central data store with layered cache architecture.
 * - Truth layer: server state | Optimistic layers: pending changes
 * - Reference counting prevents memory leaks
 * - Batch operations ensure consistency
 */
export class Store {
  readonly whereCanonicalizer: WhereClauseCanonicalizer =
    new WhereClauseCanonicalizer();
  readonly orderByCanonicalizer: OrderByCanonicalizer =
    new OrderByCanonicalizer();
  readonly rdpCanonicalizer: RdpCanonicalizer = new RdpCanonicalizer();
  readonly intersectCanonicalizer: IntersectCanonicalizer =
    new IntersectCanonicalizer(this.whereCanonicalizer);
  readonly pivotCanonicalizer: PivotCanonicalizer = new PivotCanonicalizer();
  readonly ridListCanonicalizer: RidListCanonicalizer =
    new RidListCanonicalizer();

  readonly client: Client;

  /** @internal */
  readonly logger?: Logger;

  readonly cacheKeys: CacheKeys<KnownCacheKey>;
  readonly queries: Queries = new Queries();
  readonly objectCacheKeyRegistry: ObjectCacheKeyRegistry =
    new ObjectCacheKeyRegistry();

  readonly layers: Layers = new Layers({
    logger: this.logger,
    onRevalidate: this.#maybeRevalidateQueries.bind(this),
  });
  readonly subjects: Subjects = this.layers.subjects;

  // these are hopefully temporary
  readonly aggregations: AggregationsHelper;
  readonly functions: FunctionsHelper;
  readonly lists: ListsHelper;
  readonly objects: ObjectsHelper;
  readonly links: LinksHelper;
  readonly objectSets: ObjectSetHelper;

  constructor(client: Client) {
    this.logger = client[additionalContext].logger?.child({}, {
      msgPrefix: "Store",
    });
    this.client = client;

    this.cacheKeys = new CacheKeys<KnownCacheKey>({
      onDestroy: this.#cleanupCacheKey,
    });

    this.aggregations = new AggregationsHelper(
      this,
      this.cacheKeys,
      this.whereCanonicalizer,
      this.rdpCanonicalizer,
    );
    this.functions = new FunctionsHelper(this, this.cacheKeys);
    this.lists = new ListsHelper(
      this,
      this.cacheKeys,
      this.whereCanonicalizer,
      this.orderByCanonicalizer,
      this.rdpCanonicalizer,
      this.intersectCanonicalizer,
      this.pivotCanonicalizer,
      this.ridListCanonicalizer,
    );
    this.objects = new ObjectsHelper(this, this.cacheKeys);
    this.links = new LinksHelper(
      this,
      this.cacheKeys,
      this.whereCanonicalizer,
      this.orderByCanonicalizer,
    );
    this.objectSets = new ObjectSetHelper(
      this,
      this.cacheKeys,
      this.whereCanonicalizer,
      this.orderByCanonicalizer,
    );
  }

  /**
   * Called after a key is no longer retained and the timeout has elapsed
   * @param key
   */
  #cleanupCacheKey = (key: KnownCacheKey) => {
    const subject = this.subjects.peek(key);

    if (DEBUG_REFCOUNTS) {
      // eslint-disable-next-line no-console
      console.log(
        `CacheKey cleaning up (${
          JSON.stringify({
            closed: subject?.closed,
            observed: subject?.observed,
          })
        })`,
        JSON.stringify([key.type, ...key.otherKeys], null, 2),
      );
    }

    if (process.env.NODE_ENV !== "production") {
      invariant(subject);
    }

    this.subjects.delete(key);
    this.queries.delete(key);
  };

  applyAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args:
      | Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0]
      | Array<Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0]>,
    opts?: Store.ApplyActionOptions,
  ) => Promise<ActionEditResponse> = async (action, args, opts) => {
    return await new ActionApplication(this).applyAction(action, args, opts);
  };

  validateAction: <Q extends ActionDefinition<any>>(
    action: Q,
    args: Parameters<ActionSignatureFromDef<Q>["applyAction"]>[0],
  ) => Promise<ActionValidationResponse> = async (action, args) => {
    const result = await this.client(action).applyAction(args as any, {
      $validateOnly: true,
      $returnEdits: false,
    });
    return result as ActionValidationResponse;
  };

  public getValue<K extends KnownCacheKey>(
    cacheKey: K,
  ): Entry<K> | undefined {
    return this.layers.top.get(cacheKey);
  }

  batch<X>(
    { optimisticId, changes = createChangedObjects() }: {
      optimisticId?: OptimisticId;
      changes?: Changes;
    },
    batchFn: (batchContext: BatchContext) => X,
  ): {
    batchResult: BatchContext;
    retVal: X;
    changes: Changes;
  } {
    return this.layers.batch({ optimisticId, changes }, batchFn);
  }

  public invalidateObject<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    pk: PrimaryKeyType<T>,
  ): Promise<unknown> {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    const variants = this.objectCacheKeyRegistry.getVariants(apiName, pk);

    // Invalidate all variant cache entries
    // Using Promise.allSettled to ensure if one invalidation fails, others will still complete.
    // This prevents a single failing query from blocking invalidation of other cache variants for the same object.
    const promises: Promise<void>[] = [];

    if (variants.size === 0) {
      // No registered variants - create and revalidate the base variant (no RDP)
      promises.push(
        this.objects.getQuery({
          apiName,
          pk,
        }, undefined).revalidate(/* force */ true),
      );
    } else {
      // Revalidate all registered variants
      for (const key of variants) {
        const query = this.queries.peek(key);
        if (query) {
          promises.push(query.revalidate(/* force */ true));
        }
      }
    }

    return Promise.allSettled(promises);
  }

  async #maybeRevalidateQueries(
    changes: Changes,
    optimisticId?: OptimisticId | undefined,
  ): Promise<void> {
    const logger = process.env.NODE_ENV !== "production"
      ? this.logger?.child({ methodName: "maybeRevalidateQueries" })
      : undefined;

    if (changes.isEmpty()) {
      if (process.env.NODE_ENV !== "production") {
        logger?.debug("No changes, aborting");
      }
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      logger?.debug(DEBUG_ONLY__changesToString(changes), { optimisticId });
    }

    try {
      const promises: Array<Promise<unknown>> = [];
      for (const cacheKey of this.queries.keys()) {
        const query = this.queries.peek(cacheKey);
        if (!query?.maybeUpdateAndRevalidate) {
          continue;
        }

        // Only propagate to queries that should receive these changes
        if (
          !this.#shouldPropagateToQuery(
            {
              cacheKey,
              maybeUpdateAndRevalidate: query.maybeUpdateAndRevalidate,
            },
            changes,
            optimisticId,
          )
        ) {
          continue;
        }

        const promise = query.maybeUpdateAndRevalidate(changes, optimisticId);
        if (promise) promises.push(promise);
      }
      await Promise.all(promises);
    } finally {
      if (process.env.NODE_ENV !== "production") {
        logger?.debug("in finally", DEBUG_ONLY__changesToString(changes));
      }
    }
  }

  /**
   * Determines whether changes should propagate to a specific query.
   * Prevents unnecessary observable pipeline execution for cross-propagation.
   *
   * @param query - The query to check
   * @param changes - The changes that occurred
   * @param optimisticId - Optional optimistic update ID
   * @returns true if the query should be notified of these changes
   */
  #shouldPropagateToQuery(
    query: {
      cacheKey: KnownCacheKey;
      maybeUpdateAndRevalidate?: (
        changes: Changes,
        optimisticId: OptimisticId | undefined,
      ) => Promise<void> | undefined;
    },
    changes: Changes,
    optimisticId?: OptimisticId,
  ): boolean {
    // Always propagate optimistic updates (user-initiated actions need immediate feedback)
    if (optimisticId) {
      return true;
    }

    // If the query's own cache key was modified (direct fetch), always propagate
    if (changes.modified.has(query.cacheKey)) {
      return true;
    }

    // Check if the query's object type is affected by the changes
    if (this.#shouldPropagateForObjectTypeChanges(query.cacheKey, changes)) {
      return true;
    }

    // For other cross-propagation (e.g., RDP field updates from unrelated object types):
    // Only propagate to queries WITH RDP configurations
    const queryRdpConfig = this.#getQueryRdpConfig(query.cacheKey);

    // If query has no RDP, don't propagate unrelated object changes to it
    // (it will get updates from its own direct fetches only)
    return queryRdpConfig != null;
  }

  /**
   * Checks if changes to an object type should propagate to a query.
   * This ensures queries receive updates when objects of their type are added/modified.
   *
   * @param cacheKey - The cache key of the query
   * @param changes - The changes that occurred
   * @returns true if the query should be notified based on object type changes
   */
  #shouldPropagateForObjectTypeChanges(
    cacheKey: KnownCacheKey,
    changes: Changes,
  ): boolean {
    const queryObjectType = this.#getQueryObjectType(cacheKey);
    if (!queryObjectType) {
      return false;
    }

    const affected = this.#changesAffectObjectType(changes, queryObjectType);

    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "shouldPropagateToQuery" }).debug(
        `Query type: ${queryObjectType}, affected: ${affected}`,
        {
          queryKey: DEBUG_ONLY__cacheKeyToString(cacheKey),
          addedCount: changes.addedObjects.get(queryObjectType)?.length ?? 0,
          modifiedCount: changes.modifiedObjects.get(queryObjectType)?.length
            ?? 0,
        },
      );
    }

    return affected;
  }

  /**
   * Extracts RDP configuration from a cache key if present.
   *
   * @param cacheKey - The cache key to check
   * @returns The RDP configuration, null, or undefined
   */
  #getQueryRdpConfig(
    cacheKey: KnownCacheKey,
  ): Canonical<Rdp> | null | undefined {
    if ("otherKeys" in cacheKey && Array.isArray(cacheKey.otherKeys)) {
      if (cacheKey.type === "object") {
        return cacheKey.otherKeys[OBJECT_RDP_CONFIG_IDX];
      } else if (cacheKey.type === "list") {
        return cacheKey.otherKeys[LIST_RDP_IDX];
      } else if (cacheKey.type === "aggregation") {
        return cacheKey.otherKeys[AGGREGATION_RDP_IDX];
      }
      // Links and other types would also be at LIST_RDP_IDX
    }
    return undefined;
  }

  /**
   * Extracts the object type (apiName) from a cache key.
   *
   * @param cacheKey - The cache key to check
   * @returns The object type/apiName, or undefined if not applicable
   */
  #getQueryObjectType(cacheKey: KnownCacheKey): string | undefined {
    if ("otherKeys" in cacheKey && Array.isArray(cacheKey.otherKeys)) {
      if (cacheKey.type === "object") {
        return cacheKey.otherKeys[OBJECT_API_NAME_IDX];
      } else if (cacheKey.type === "list") {
        return cacheKey.otherKeys[LIST_API_NAME_IDX];
      } else if (cacheKey.type === "aggregation") {
        return cacheKey.otherKeys[AGGREGATION_API_NAME_IDX];
      }
      // Links would have apiName at a different position
    }
    return undefined;
  }

  /**
   * Checks if changes affect a specific object type.
   *
   * @param changes - The changes to check
   * @param objectType - The object type to check for
   * @returns true if the changes include added or modified objects of this type
   */
  #changesAffectObjectType(changes: Changes, objectType: string): boolean {
    // Check added objects (MultiMap.get returns an array)
    const addedForType = changes.addedObjects.get(objectType);
    if (addedForType && addedForType.length > 0) {
      return true;
    }

    // Check modified objects (MultiMap.get returns an array)
    const modifiedForType = changes.modifiedObjects.get(objectType);
    if (modifiedForType && modifiedForType.length > 0) {
      return true;
    }

    return false;
  }

  /**
   * Invalidates all cache entries for a specific object type.
   * This will revalidate:
   * 1. All objects of the specified type
   * 2. All lists of the specified type
   * 3. All links where the source object is of the specified type
   *
   * @param apiName - The API name of the object type to invalidate
   * @param changes - Optional changes object to track what has been modified
   * @returns Promise that resolves when all invalidations are complete
   */
  public invalidateObjectType<T extends ObjectTypeDefinition>(
    apiName: T["apiName"] | T,
    changes: Changes | undefined,
  ): Promise<void> {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({ methodName: "invalidateObjectType" }).info(
        changes ? DEBUG_ONLY__changesToString(changes) : void 0,
      );
    }

    const promises: Array<Promise<void>> = [];

    for (const cacheKey of this.layers.truth.keys()) {
      if (changes && changes.modified.has(cacheKey)) {
        continue;
      }
      const query = this.queries.peek(cacheKey);
      if (!query) continue;

      promises.push(query.invalidateObjectType(apiName, changes));
    }

    // we use allSettled here because we don't care if it succeeds or fails, just that they all complete.
    return Promise.allSettled(promises).then(() => void 0);
  }

  public async invalidateAll(): Promise<void> {
    const promises: Array<Promise<unknown>> = [];
    for (const cacheKey of this.queries.keys()) {
      const query = this.queries.peek(cacheKey);
      if (query) {
        promises.push(query.revalidate(true));
      }
    }
    // we use allSettled here because we don't care if it succeeds or fails, just that they all complete.
    return Promise.allSettled(promises).then(() => void 0);
  }

  public async invalidateObjects(
    objects:
      | Osdk.Instance<ObjectTypeDefinition>
      | ReadonlyArray<Osdk.Instance<ObjectTypeDefinition>>,
  ): Promise<void> {
    const objectsArray = Array.isArray(objects) ? objects : [objects];
    const promises: Array<Promise<unknown>> = [];

    for (const obj of objectsArray) {
      promises.push(this.invalidateObject(obj.$objectType, obj.$primaryKey));
    }

    // we use allSettled here because we don't care if it succeeds or fails, just that they all complete.
    return Promise.allSettled(promises).then(() => void 0);
  }

  public async invalidateFunction(
    apiName: string | QueryDefinition<unknown>,
    params?: Record<string, unknown>,
  ): Promise<void> {
    return this.functions.invalidateFunction(apiName, params);
  }

  public async invalidateFunctionsByObject(
    apiName: string,
    primaryKey: string | number,
  ): Promise<void> {
    return this.functions.invalidateFunctionsByObject(apiName, primaryKey);
  }
}
