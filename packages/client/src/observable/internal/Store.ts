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
import { BehaviorSubject } from "rxjs";
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
import { Entry, Layer } from "./Layer.js";
import { LinksHelper } from "./links/LinksHelper.js";
import { ListsHelper } from "./list/ListsHelper.js";
import { ObjectsHelper } from "./object/ObjectsHelper.js";
import { type OptimisticId } from "./OptimisticId.js";
import { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
import { Queries } from "./Queries.js";
import type { SubjectPayload } from "./SubjectPayload.js";
import { tombstone } from "./tombstone.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

export namespace Store {
  export interface ApplyActionOptions {
    optimisticUpdate?: (ctx: OptimisticBuilder) => void;
  }
}

function createInitEntry(cacheKey: KnownCacheKey): Entry<any> {
  return {
    cacheKey,
    status: "init",
    value: undefined,
    lastUpdated: 0,
  };
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
  #truthLayer: Layer = new Layer(undefined, undefined);
  #topLayer: Layer;
  client: Client;

  /** @internal */
  logger?: Logger;

  // we can use a regular Map here because the refCounting will
  // handle cleanup.

  #cacheKeyToSubject = new WeakMap<
    KnownCacheKey,
    BehaviorSubject<SubjectPayload<any>>
  >();
  readonly cacheKeys: CacheKeys<KnownCacheKey>;
  readonly queries: Queries = new Queries();

  // these are hopefully temporary
  readonly lists: ListsHelper;
  readonly objects: ObjectsHelper;
  readonly links: LinksHelper;

  constructor(client: Client) {
    this.client = client;
    this.logger = client[additionalContext].logger?.child({}, {
      msgPrefix: "Store",
    });

    this.cacheKeys = new CacheKeys<KnownCacheKey>({
      onDestroy: this.#cleanupCacheKey,
    });

    this.lists = new ListsHelper(
      this,
      this.cacheKeys,
      this.whereCanonicalizer,
      this.orderByCanonicalizer,
    );
    this.objects = new ObjectsHelper(this, this.cacheKeys);
    this.links = new LinksHelper(
      this,
      this.cacheKeys,
      this.whereCanonicalizer,
      this.orderByCanonicalizer,
    );

    this.#topLayer = this.#truthLayer;
  }

  /**
   * Called after a key is no longer retained and the timeout has elapsed
   * @param key
   */
  #cleanupCacheKey = (key: KnownCacheKey) => {
    const subject = this.peekSubject(key);

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

    if (subject) {
      subject.complete();
      this.#cacheKeyToSubject.delete(key);
    }

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

  removeLayer(layerId: OptimisticId): void {
    invariant(
      layerId != null,
      "undefined is the reserved layerId for the truth layer",
    );
    // 1. collect all cache keys for a given layerId
    let currentLayer: Layer | undefined = this.#topLayer;
    const cacheKeys = new Map<KnownCacheKey, Entry<any>>();
    while (currentLayer != null && currentLayer.parentLayer != null) {
      if (currentLayer.layerId === layerId) {
        for (const [k, v] of currentLayer.entries()) {
          if (cacheKeys.has(k)) continue;
          cacheKeys.set(k, v);
        }
      }

      currentLayer = currentLayer.parentLayer;
    }

    // 2. remove the layers from the chain
    this.#topLayer = this.#topLayer.removeLayer(layerId);

    // 3. check each cache key to see if it is different in the new chain
    for (const [k, oldEntry] of cacheKeys) {
      const currentEntry = this.#topLayer.get(k);

      // 4. if different, update the subject
      if (oldEntry !== currentEntry) {
        const x = currentEntry ?? createInitEntry(k);
        // We are going to be pretty lazy here and just re-emit the value.
        // In the future it may benefit us to deep equal check her but I think
        // the subjects are effectively doing this anyway.
        this.peekSubject(k)?.next(
          {
            // eslint-disable-next-line @typescript-eslint/no-misused-spread
            ...(currentEntry ?? createInitEntry(k)),
            isOptimistic:
              currentEntry?.value !== this.#truthLayer.get(k)?.value,
          },
        );
      }
    }
  }

  peekSubject = <KEY extends KnownCacheKey>(
    cacheKey: KEY,
  ):
    | BehaviorSubject<SubjectPayload<KEY>>
    | undefined =>
  {
    return this.#cacheKeyToSubject.get(cacheKey);
  };

  getSubject = <KEY extends KnownCacheKey>(
    cacheKey: KEY,
  ): BehaviorSubject<SubjectPayload<KEY>> => {
    let subject = this.#cacheKeyToSubject.get(cacheKey);
    if (!subject) {
      const initialValue: Entry<KEY> = this.#topLayer.get(cacheKey)
        ?? createInitEntry(cacheKey);

      subject = new BehaviorSubject({
        // eslint-disable-next-line @typescript-eslint/no-misused-spread
        ...initialValue,
        isOptimistic:
          initialValue.value !== this.#truthLayer.get(cacheKey)?.value,
      });
      this.#cacheKeyToSubject.set(cacheKey, subject);
    }

    return subject;
  };

  public getValue<K extends KnownCacheKey>(
    cacheKey: K,
  ): Entry<K> | undefined {
    return this.#topLayer.get(cacheKey);
  }

  batch = <X>(
    { optimisticId, changes = createChangedObjects() }: {
      optimisticId?: OptimisticId;
      changes?: Changes;
    },
    batchFn: (batchContext: BatchContext) => X,
  ): {
    batchResult: BatchContext;
    retVal: X;
    changes: Changes;
  } => {
    invariant(
      optimisticId === undefined || !!optimisticId,
      "optimistic must be undefined or not falsy",
    );

    let needsLayer = optimisticId !== undefined;
    const batchContext: BatchContext = {
      changes,
      createLayerIfNeeded: () => {
        if (needsLayer) {
          this.#topLayer = this.#topLayer.addLayer(optimisticId);
          needsLayer = false;
        }
      },
      optimisticWrite: !!optimisticId,
      write: (cacheKey, value, status) => {
        const oldTopValue = this.#topLayer.get(cacheKey);

        if (optimisticId) batchContext.createLayerIfNeeded();

        const writeLayer = optimisticId
          ? this.#topLayer
          : this.#truthLayer;
        const newValue = new Entry(
          cacheKey,
          value,
          Date.now(),
          status,
        );

        writeLayer.set(cacheKey, newValue);

        const newTopValue = this.#topLayer.get(cacheKey);

        if (oldTopValue !== newTopValue) {
          this.getSubject(cacheKey)?.next({
            // eslint-disable-next-line @typescript-eslint/no-misused-spread
            ...newValue,
            isOptimistic:
              newTopValue?.value !== this.#truthLayer.get(cacheKey)?.value,
          });
        }

        return newValue;
      },
      delete: (cacheKey, status) => {
        return batchContext.write(cacheKey, tombstone, status);
      },
      read: (cacheKey) => {
        return optimisticId
          ? this.#topLayer.get(cacheKey)
          : this.#truthLayer.get(cacheKey);
      },
    };

    const retVal = batchFn(batchContext);
    this.maybeRevalidateQueries(changes, optimisticId).catch(e => {
      // we don't want batch() to return a promise,
      // so we settle for logging an error here instead of
      // dropping it on the floor.
      if (this.logger) {
        this.logger.error("Unhandled error in batch", e);
      } else {
        // eslint-disable-next-line no-console
        console.error("Unhandled error in batch", e);
        throw e;
      }
    });

    return {
      batchResult: batchContext,
      retVal: retVal,
      changes: batchContext.changes,
    };
  };

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

  async maybeRevalidateQueries(
    changes: Changes,
    optimisticId?: OptimisticId | undefined,
  ): Promise<void> {
    if (changes.isEmpty()) {
      if (process.env.NODE_ENV !== "production") {
        // todo
        this.logger?.child({ methodName: "maybeRevalidateQueries" }).debug(
          "No changes, aborting",
        );
      }
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      // todo
      this.logger?.child({ methodName: "maybeRevalidateQueries" }).debug(
        DEBUG_ONLY__changesToString(changes),
        { optimisticId },
      );
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
        // todo
        this.logger?.child({ methodName: "maybeRevalidateQueries" }).debug(
          "in finally",
          DEBUG_ONLY__changesToString(changes),
        );
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

    for (const cacheKey of this.#truthLayer.keys()) {
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
