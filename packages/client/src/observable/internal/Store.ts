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
  InterfaceDefinition,
  Logger,
  ObjectTypeDefinition,
  PrimaryKeyType,
  WhereClause,
} from "@osdk/api";
import { BehaviorSubject } from "rxjs";
import invariant from "tiny-invariant";
import type { ActionSignatureFromDef } from "../../actions/applyAction.js";
import { additionalContext, type Client } from "../../Client.js";
import { DEBUG_REFCOUNTS } from "../DebugFlags.js";
import type { OptimisticBuilder } from "../OptimisticBuilder.js";
import { ActionApplication } from "./ActionApplication.js";
import { CacheKeys } from "./CacheKeys.js";
import type { Canonical } from "./Canonical.js";
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
import type { ObjectCacheKey } from "./ObjectQuery.js";
import { type OptimisticId } from "./OptimisticId.js";
import { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
import type { Query } from "./Query.js";
import { RdpCanonicalizer } from "./RdpCanonicalizer.js";
import { RdpLayer } from "./RdpLayer.js";
import { RdpStorage } from "./RdpStorage.js";
import { RefCounts } from "./RefCounts.js";
import type { SimpleWhereClause } from "./SimpleWhereClause.js";
import { tombstone } from "./tombstone.js";
import { WhereClauseCanonicalizer } from "./WhereClauseCanonicalizer.js";

/*
    Work still to do:
    - [x] testing for optimistic writes
    - [x] automatic invalidation of actions
    - [x] automatic optimistic list updates
    - [x] useOsdkObjects
    - [x] imply offline for objects passed directly
    - [x] websocket subscriptions
    - [ ] links
    - [x] add pagination
    - [ ] sub-selection support
    - [ ] interfaces
    - [ ] setup defaults
    - [ ] reduce updates in react
*/

export interface SubjectPayload<KEY extends KnownCacheKey> extends Entry<KEY> {
  isOptimistic: boolean;
}

export interface BatchContext {
  changes: Changes;
  createLayerIfNeeded: () => void;
  optimisticWrite: boolean;

  write: <K extends KnownCacheKey>(
    k: K,
    v: Entry<K>["value"],
    status: Entry<K>["status"],
  ) => Entry<K>;

  read: <K extends KnownCacheKey>(
    k: K,
  ) => Entry<K> | undefined;

  delete: <K extends KnownCacheKey>(
    k: K,
    status: Entry<K>["status"],
  ) => Entry<K>;
}

interface UpdateOptions {
  optimisticId?: OptimisticId;
}

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
  whereCanonicalizer: WhereClauseCanonicalizer = new WhereClauseCanonicalizer();
  orderByCanonicalizer: OrderByCanonicalizer = new OrderByCanonicalizer();
  rdpCanonicalizer: RdpCanonicalizer = new RdpCanonicalizer();
  #truthLayer: Layer = new Layer(undefined, undefined);
  #topLayer: Layer;
  #rdpTruthLayer: RdpLayer = new RdpLayer(undefined, undefined);
  #rdpTopLayer: RdpLayer;
  client: Client;

  /** @internal */
  logger?: Logger;

  // we can use a regular Map here because the refCounting will
  // handle cleanup.
  #queries: Map<
    KnownCacheKey,
    Query<any, any, any>
  > = new Map();

  #cacheKeyToSubject = new WeakMap<
    KnownCacheKey,
    BehaviorSubject<SubjectPayload<any>>
  >();
  #cacheKeys: CacheKeys;

  #refCounts = new RefCounts<KnownCacheKey>(
    DEBUG_REFCOUNTS ? 15_000 : 60_000,
    (k) => this.#cleanupCacheKey(k),
  );

  // we are currently only using this for debug logging and should just remove it in the future if that
  // continues to be true
  #finalizationRegistry: FinalizationRegistry<() => void>;

  // these are hopefully temporary
  lists: ListsHelper;
  objects: ObjectsHelper;
  links: LinksHelper;
  rdpStorage: RdpStorage;

  constructor(client: Client) {
    this.client = client;
    this.logger = client[additionalContext].logger?.child({}, {
      msgPrefix: "Store",
    });

    this.lists = new ListsHelper(
      this,
      this.whereCanonicalizer,
      this.orderByCanonicalizer,
      this.rdpCanonicalizer,
    );
    this.objects = new ObjectsHelper(this);
    this.links = new LinksHelper(
      this,
      this.whereCanonicalizer,
      this.orderByCanonicalizer,
    );
    this.rdpStorage = new RdpStorage();

    this.#topLayer = this.#truthLayer;
    this.#rdpTopLayer = this.#rdpTruthLayer;
    this.#cacheKeys = new CacheKeys(
      this.whereCanonicalizer,
      this.orderByCanonicalizer,
      (k) => {
        if (DEBUG_REFCOUNTS) {
          const cacheKeyType = k.type;
          const otherKeys = k.otherKeys;
          // eslint-disable-next-line no-console
          console.log(
            `CacheKeys.onCreate(${cacheKeyType}, ${JSON.stringify(otherKeys)})`,
          );

          this.#finalizationRegistry.register(k, () => {
            // eslint-disable-next-line no-console
            console.log(
              `CacheKey Finalization(${cacheKeyType}, ${
                JSON.stringify(otherKeys)
              })`,
            );
          });
        }

        this.#refCounts.register(k);
      },
    );

    setInterval(() => {
      this.#refCounts.gc();
    }, 1000);

    this.#finalizationRegistry = new FinalizationRegistry<() => void>(
      (cleanupCallback) => {
        try {
          cleanupCallback();
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(
            "Caught an error while running a finalization callback",
            e,
          );
        }
      },
    );
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
    this.#cacheKeys.remove(key);
    if (process.env.NODE_ENV !== "production") {
      invariant(subject);
    }

    if (subject) {
      subject.complete();
      this.#cacheKeyToSubject.delete(key);
    }

    this.#queries.get(key)?.dispose();
    this.#queries.delete(key);
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

    // 2. remove the layers from both chains
    this.#topLayer = this.#topLayer.removeLayer(layerId);
    this.#rdpTopLayer = this.#rdpTopLayer.removeLayer(layerId);

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

  getCacheKey<K extends KnownCacheKey>(
    type: K["type"],
    ...args: K["__cacheKey"]["args"]
  ): K {
    return this.#refCounts.register(this.#cacheKeys.get(type, ...args));
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

  public canonicalizeWhereClause<
    T extends ObjectTypeDefinition | InterfaceDefinition,
  >(
    where: WhereClause<T>,
  ): Canonical<SimpleWhereClause> {
    return this.whereCanonicalizer.canonicalize(where);
  }

  peekQuery<K extends KnownCacheKey>(
    cacheKey: K,
  ): K["__cacheKey"]["query"] | undefined {
    return this.#queries.get(cacheKey) as K["__cacheKey"]["query"] | undefined;
  }

  getQuery<K extends KnownCacheKey>(
    cacheKey: K,
    createQuery: () => K["__cacheKey"]["query"],
  ): K["__cacheKey"]["query"] {
    let query = this.peekQuery(cacheKey);
    if (!query) {
      query = createQuery();
      this.#queries.set(cacheKey, query);
    }
    return query;
  }

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
          this.#rdpTopLayer = this.#rdpTopLayer.addLayer(optimisticId!);
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
    this.maybeRevalidateQueries(changes, optimisticId).catch((e: unknown) => {
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

    const objectCacheKey = this.getCacheKey<ObjectCacheKey>(
      "object",
      apiName,
      pk,
    );

    // Invalidate any RDP data for this object to wipe any possible stale data
    this.rdpStorage.invalidate(objectCacheKey);

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
      for (const cacheKey of this.#queries.keys()) {
        const promise = this.peekQuery(cacheKey)?.maybeUpdateAndRevalidate?.(
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
      const query = this.peekQuery(cacheKey);
      if (!query) continue;

      promises.push(query.invalidateObjectType(apiName, changes));
    }

    // we use allSettled here because we don't care if it succeeds or fails, just that they all complete.
    return Promise.allSettled(promises).then(() => void 0);
  }

  retain(cacheKey: KnownCacheKey): void {
    this.#refCounts.retain(cacheKey);
  }

  release(cacheKey: KnownCacheKey): void {
    this.#refCounts.release(cacheKey);
  }
}
