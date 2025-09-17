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
  PrimaryKeyType,
} from "@osdk/api";
import invariant from "tiny-invariant";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import { additionalContext, type Client } from "../../Client.js";
import { DEBUG_REFCOUNTS } from "../DebugFlags.js";
import type { OptimisticBuilder } from "../OptimisticBuilder.js";
import { ActionApplication } from "./actions/ActionApplication.js";
import type { BatchContext } from "./BatchContext.js";
import { CacheKeys } from "./CacheKeys.js";
import {
  type Changes,
  createChangedObjects,
  DEBUG_ONLY__changesToString,
} from "./Changes.js";
import type { KnownCacheKey } from "./KnownCacheKey.js";
import type { Entry } from "./Layer.js";
import { Layers } from "./Layers.js";
import { LinksHelper } from "./links/LinksHelper.js";
import { ListsHelper } from "./list/ListsHelper.js";
import { ObjectsHelper } from "./object/ObjectsHelper.js";
import { type OptimisticId } from "./OptimisticId.js";
import { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
import { Queries } from "./Queries.js";
import { RdpCanonicalizer } from "./RdpCanonicalizer.js";
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

  readonly client: Client;

  /** @internal */
  readonly logger?: Logger;

  readonly cacheKeys: CacheKeys<KnownCacheKey>;
  readonly queries: Queries = new Queries();

  readonly layers: Layers = new Layers({
    logger: this.logger,
    onRevalidate: this.#maybeRevalidateQueries.bind(this),
  });
  readonly subjects: Subjects = this.layers.subjects;

  // these are hopefully temporary
  readonly lists: ListsHelper;
  readonly objects: ObjectsHelper;
  readonly links: LinksHelper;

  constructor(client: Client) {
    this.logger = client[additionalContext].logger?.child({}, {
      msgPrefix: "Store",
    });
    this.client = client;

    this.cacheKeys = new CacheKeys<KnownCacheKey>({
      onDestroy: this.#cleanupCacheKey,
    });

    this.lists = new ListsHelper(
      this,
      this.cacheKeys,
      this.whereCanonicalizer,
      this.orderByCanonicalizer,
      this.rdpCanonicalizer,
    );
    this.objects = new ObjectsHelper(this, this.cacheKeys);
    this.links = new LinksHelper(
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

    return this.objects.getQuery({
      apiName,
      pk,
    }).revalidate(/* force */ true);
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
        const promise = this.queries.peek(cacheKey)?.maybeUpdateAndRevalidate?.(
          changes,
          optimisticId,
        );
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
}
