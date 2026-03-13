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
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  WhereClause,
} from "@osdk/api";
import type {
  LinkLoadConfig,
  LinkStatus,
  ShapeBaseType,
  ShapeDefinition,
  ShapeDerivedLinkDef,
  ShapeDerivedLinks,
  ShapeInstance,
} from "@osdk/api/shapes";
import { ShapeNullabilityError } from "@osdk/api/shapes";
import type { Client } from "@osdk/client";
import {
  applyShapeTransformationsToArray,
  buildObjectSetFromLinkDefByType,
  fetchBulkDerivedLinkObjects,
  fetchBulkDerivedLinkObjectsWithMapping,
  getLinkQueryOptions,
} from "@osdk/client/shapes";
import type { BulkLinkMappingResult } from "@osdk/client/shapes";
import type {
  ObservableClient,
  Observer,
  Unsubscribable,
} from "@osdk/client/unstable-do-not-use";
import {
  createCachingNotifier,
  createStoreSubscribe,
  createVersionedCache,
  wrapError,
} from "../shared/storeUtils.js";

const NOOP_FETCH_MORE = async (): Promise<void> => {};

function violationsToError(
  shape: ShapeDefinition<ObjectOrInterfaceDefinition>,
  violations: readonly { property: string; constraint: string }[],
): Error | undefined {
  if (violations.some(v => v.constraint === "require")) {
    return new ShapeNullabilityError(
      shape,
      violations as readonly {
        property: string;
        primaryKey: unknown;
        constraint: "require" | "dropIfNull" | "transformError";
      }[],
    );
  }
  return undefined;
}

/**
 * Internal state for a single link entry in the unified store.
 * Uses a tree structure (nestedByPk) instead of separate nested stores.
 */
interface LinkEntry {
  linkDef: ShapeDerivedLinkDef;
  sourceObject: Osdk.Instance<ObjectOrInterfaceDefinition>;
  status: "init" | "loading" | "loaded" | "error" | "deferred";
  data: ShapeInstance<ShapeDefinition<ObjectOrInterfaceDefinition>>[];
  rawObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[];
  error?: Error;
  hasMore: boolean;
  fetchMore: () => Promise<void>;
  subscription?: Unsubscribable;
  /** Tree structure for nested links - keyed by primary key, then by link name */
  nestedByPk: Map<unknown, Map<string, LinkEntry>>;
}

/**
 * Aggregated payload from derived links observation.
 */
export interface DerivedLinksPayload<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  links: Record<
    string,
    ShapeInstance<ShapeDefinition<ObjectOrInterfaceDefinition>>[]
  >;
  linkStatus: Partial<
    {
      [K in keyof ShapeDerivedLinks<S>]: LinkStatus;
    }
  >;
  anyLoading: boolean;
  anyError: boolean;
}

/**
 * Result from createDerivedLinksStore.
 */
export interface DerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  subscribe: (notifyUpdate: () => void) => () => void;
  getSnapShot: () => DerivedLinksPayload<S>;
  loadDeferred: (linkName: keyof ShapeDerivedLinks<S>) => Promise<void>;
  retry: (linkName?: keyof ShapeDerivedLinks<S>) => void;
}

/**
 * Creates an empty derived links store for shapes without derived links.
 */
export function createEmptyDerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(): DerivedLinksStore<S> {
  const emptyPayload: DerivedLinksPayload<S> = {
    links: {},
    linkStatus: {},
    anyLoading: false,
    anyError: false,
  };

  return {
    subscribe: () => () => {},
    getSnapShot: () => emptyPayload,
    loadDeferred: async () => {},
    retry: () => {},
  };
}

/**
 * Determines if a derived link is eligible for batched observation.
 *
 * Batchable links must have a single pivot segment, no set operations,
 * and no where/orderBy/limit/distinct clauses. The batched path fetches
 * all link targets via bulk API and subscribes with a $in clause on
 * target PKs, so it cannot apply per-link filtering or ordering.
 *
 * Links with these clauses fall through to the per-item observation path
 * which builds a full ObjectSet with the correct filters.
 */
export function isBatchableLink(linkDef: ShapeDerivedLinkDef): boolean {
  const def = linkDef.objectSetDef;
  return (
    def.segments.length === 1
    && def.segments[0].type === "pivotTo"
    && (!def.setOperations || def.setOperations.length === 0)
    && !def.where
    && !def.whereCallback
    && !def.orderBy
    && def.limit == null
    && !def.distinct
  );
}

/**
 * Creates a unified store for observing derived links on a shape.
 *
 * Architecture: Uses a single store with a tree structure (nestedByPk) for nested links,
 * instead of creating separate nested stores that subscribe to each other.
 *
 * Benefits:
 * - No inter-store subscription cascades (eliminates circular notification risk)
 * - No arbitrary recursion depth limit (recursion is bounded by actual data)
 * - Single subscriber set for all notifications
 * - Type-safe tree navigation with native Map keys
 *
 * @param shape - The shape definition with derived links
 * @param sourceObject - The source object the links are derived from
 * @param observableClient - Observable client for subscriptions
 * @param client - OSDK client for ObjectSet building
 * @param linkConfig - Per-link loading configuration
 */
export function createDerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(
  shape: S,
  sourceObject: Osdk.Instance<ShapeBaseType<S>>,
  observableClient: ObservableClient,
  client: Client,
  linkConfig: Partial<Record<keyof ShapeDerivedLinks<S>, LinkLoadConfig>>,
): DerivedLinksStore<S> {
  const linkEntries = new Map<string, LinkEntry>();
  const subscribers = new Set<() => void>();
  const cache = createVersionedCache<DerivedLinksPayload<S>>();
  const notifySubscribers = createCachingNotifier(subscribers, cache);

  for (const linkDef of shape.__derivedLinks) {
    const config = linkConfig[linkDef.name as keyof ShapeDerivedLinks<S>];
    const isDeferred = linkDef.config.defer ?? config?.defer ?? false;

    linkEntries.set(linkDef.name, {
      linkDef,
      sourceObject: sourceObject as Osdk.Instance<ObjectOrInterfaceDefinition>,
      status: isDeferred ? "deferred" : "init",
      data: [],
      rawObjects: [],
      error: undefined,
      hasMore: false,
      fetchMore: NOOP_FETCH_MORE,
      subscription: undefined,
      nestedByPk: new Map(),
    });
  }

  const pendingNestedEntries: Array<
    { entry: LinkEntry; sourceType: ObjectOrInterfaceDefinition }
  > = [];
  let nestedFlushTimer: ReturnType<typeof setTimeout> | undefined;

  function scheduleNestedFlush(): void {
    if (nestedFlushTimer != null) {
      return;
    }
    nestedFlushTimer = setTimeout(() => {
      nestedFlushTimer = undefined;
      const batch = pendingNestedEntries.splice(0);
      if (batch.length > 0) {
        startLinksInBatch(batch);
      }
    }, 25);
  }

  function cleanupNestedMap(map: Map<string, LinkEntry>): void {
    for (const entry of map.values()) {
      entry.subscription?.unsubscribe();
      for (const nestedMap of entry.nestedByPk.values()) {
        cleanupNestedMap(nestedMap);
      }
    }
  }

  function handleNestedLinks(
    parentEntry: LinkEntry,
    rawObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[],
  ): void {
    const targetShape = parentEntry.linkDef.targetShape;
    if (targetShape.__derivedLinks.length === 0) {
      return;
    }

    const currentPks = new Set<unknown>();
    const newEntriesToStart: Array<
      { entry: LinkEntry; sourceType: ObjectOrInterfaceDefinition }
    > = [];

    for (const rawObj of rawObjects) {
      const pk = rawObj.$primaryKey;
      currentPks.add(pk);

      let nestedMap = parentEntry.nestedByPk.get(pk);
      if (!nestedMap) {
        nestedMap = new Map();
        parentEntry.nestedByPk.set(pk, nestedMap);
      }

      for (const nestedLinkDef of targetShape.__derivedLinks) {
        if (!nestedMap.has(nestedLinkDef.name)) {
          const nestedEntry: LinkEntry = {
            linkDef: nestedLinkDef,
            sourceObject: rawObj,
            status: nestedLinkDef.config.defer ? "deferred" : "init",
            data: [],
            rawObjects: [],
            error: undefined,
            hasMore: false,
            fetchMore: NOOP_FETCH_MORE,
            subscription: undefined,
            nestedByPk: new Map(),
          };
          nestedMap.set(nestedLinkDef.name, nestedEntry);

          if (nestedEntry.status === "init") {
            newEntriesToStart.push({
              entry: nestedEntry,
              sourceType: targetShape.__baseType,
            });
          }
        }
      }
    }

    for (const [pk, nestedMap] of parentEntry.nestedByPk) {
      if (!currentPks.has(pk)) {
        cleanupNestedMap(nestedMap);
        parentEntry.nestedByPk.delete(pk);
      }
    }

    if (newEntriesToStart.length > 0) {
      pendingNestedEntries.push(...newEntriesToStart);
      scheduleNestedFlush();
    }
  }

  function startLinksInBatch(
    entries: Array<
      { entry: LinkEntry; sourceType: ObjectOrInterfaceDefinition }
    >,
  ): void {
    for (const { entry } of entries) {
      entry.status = "loading";
      entry.error = undefined;
    }
    notifySubscribers();
    for (const { entry, sourceType } of entries) {
      startLinkObservationInternal(entry, sourceType).catch((err) => {
        entry.status = "error";
        entry.error = wrapError(err);
        notifySubscribers();
      });
    }
  }

  function buildDataWithNestedLinks(
    entry: LinkEntry,
    transformedData: ShapeInstance<
      ShapeDefinition<ObjectOrInterfaceDefinition>
    >[],
  ): ShapeInstance<ShapeDefinition<ObjectOrInterfaceDefinition>>[] {
    const targetShape = entry.linkDef.targetShape;
    if (targetShape.__derivedLinks.length === 0) {
      return transformedData;
    }

    return transformedData.map((obj) => {
      const pk = obj.$primaryKey;
      const nestedMap = entry.nestedByPk.get(pk);
      if (!nestedMap || nestedMap.size === 0) {
        return obj;
      }

      const nestedLinks: Record<
        string,
        ShapeInstance<ShapeDefinition<ObjectOrInterfaceDefinition>>[]
      > = {};
      for (const [linkName, nestedEntry] of nestedMap) {
        nestedLinks[linkName] = buildDataWithNestedLinks(
          nestedEntry,
          nestedEntry.data,
        );
      }

      return { ...obj, ...nestedLinks } as ShapeInstance<
        ShapeDefinition<ObjectOrInterfaceDefinition>
      >;
    });
  }

  function startLinkObservation(
    entry: LinkEntry,
    sourceType: ObjectOrInterfaceDefinition,
  ): void {
    if (entry.status === "loading" || entry.status === "loaded") {
      return;
    }

    entry.status = "loading";
    entry.error = undefined;
    notifySubscribers();

    startLinkObservationInternal(entry, sourceType).catch((err) => {
      entry.status = "error";
      entry.error = wrapError(err);
      notifySubscribers();
    });
  }

  async function startLinkObservationInternal(
    entry: LinkEntry,
    sourceType: ObjectOrInterfaceDefinition,
  ): Promise<void> {
    // For batchable links, prefetch data via bulk APIs.
    // BulkLinksLoader batches concurrent calls within a 25ms window,
    // so all source objects in a list share a single bulk request.
    // This seeds the entry so UI renders immediately while the subscription
    // below provides reactive updates.
    if (isBatchableLink(entry.linkDef)) {
      try {
        const linkApiName = entry.linkDef.objectSetDef.segments[0].linkName;
        const targetObjects = await fetchBulkDerivedLinkObjects(
          client,
          entry.sourceObject,
          linkApiName,
        );

        // Osdk.Instance<ObjectTypeDefinition> is a subtype of Osdk.Instance<ObjectOrInterfaceDefinition>,
        // but TypeScript doesn't allow direct assertion due to conditional type complexity in Osdk.Instance.
        const castTargets = targetObjects as Osdk.Instance<
          ObjectOrInterfaceDefinition
        >[];
        const transformResult = applyShapeTransformationsToArray(
          entry.linkDef.targetShape,
          castTargets,
        );

        entry.status = "loaded";
        entry.rawObjects = castTargets;
        entry.hasMore = false;
        entry.fetchMore = NOOP_FETCH_MORE;
        entry.error = violationsToError(
          entry.linkDef.targetShape,
          transformResult.violations,
        );

        handleNestedLinks(entry, castTargets);
        entry.data = buildDataWithNestedLinks(entry, transformResult.data);
        notifySubscribers();
      } catch (e: unknown) {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            "Bulk link prefetch failed, falling back to individual subscription:",
            e,
          );
        }
      }
    }

    // Set up subscription for reactive updates.
    // For batchable links that were prefetched above, this subscription's
    // first emit will overwrite the seeded data (catching any gap mutations).
    // For non-batchable links, this is the sole data source.
    const objectSet = await buildObjectSetFromLinkDefByType(
      client,
      sourceType,
      entry.sourceObject.$primaryKey,
      entry.linkDef.objectSetDef,
    );

    const config = linkEntries.has(entry.linkDef.name)
      ? linkConfig[entry.linkDef.name as keyof ShapeDerivedLinks<S>]
      : undefined;

    const queryOptions = getLinkQueryOptions(
      entry.linkDef.objectSetDef,
      entry.sourceObject,
      config?.pageSize,
    );

    const observer: Observer<{
      resolvedList: Osdk.Instance<ObjectOrInterfaceDefinition>[] | undefined;
      hasMore: boolean;
      fetchMore: () => Promise<void>;
      status: string;
      isOptimistic: boolean;
    }> = {
      next: (payload) => {
        const resolved = payload.resolvedList ?? [];
        const transformResult = applyShapeTransformationsToArray(
          entry.linkDef.targetShape,
          resolved,
        );

        entry.status = payload.status === "loading" ? "loading" : "loaded";
        entry.rawObjects = resolved;
        entry.hasMore = payload.hasMore;
        entry.fetchMore = payload.fetchMore;
        entry.error = violationsToError(
          entry.linkDef.targetShape,
          transformResult.violations,
        );

        handleNestedLinks(entry, resolved);
        entry.data = buildDataWithNestedLinks(entry, transformResult.data);

        notifySubscribers();
      },
      error: (err) => {
        entry.status = "error";
        entry.error = wrapError(err);
        notifySubscribers();
      },
      complete: () => {},
    };

    const subscription = observableClient.observeObjectSet(
      objectSet as ObjectSet<ObjectTypeDefinition>,
      {
        where: queryOptions.where,
        orderBy: queryOptions.orderBy,
        pageSize: queryOptions.pageSize,
        autoFetchMore: config?.autoFetchMore,
        streamUpdates: config?.streamUpdates,
      },
      observer,
    );

    entry.subscription = subscription;
  }

  function buildLinkStatus(): Partial<
    { [K in keyof ShapeDerivedLinks<S>]: LinkStatus }
  > {
    const status: Record<string, LinkStatus> = {};
    for (const [name, entry] of linkEntries) {
      status[name] = {
        isLoading: entry.status === "loading" || entry.status === "init",
        error: entry.error,
        hasMore: entry.hasMore,
        fetchMore: entry.fetchMore,
      };
    }
    return status as Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;
  }

  function buildSnapshot(): DerivedLinksPayload<S> {
    return cache.get(() => {
      const links: Record<
        string,
        ShapeInstance<ShapeDefinition<ObjectOrInterfaceDefinition>>[]
      > = {};
      let anyLoading = false;
      let anyError = false;

      for (const [name, entry] of linkEntries) {
        links[name] = entry.data;
        if (entry.status === "loading" || entry.status === "init") {
          anyLoading = true;
        }
        if (entry.status === "error") {
          anyError = true;
        }
      }

      return {
        links,
        linkStatus: buildLinkStatus(),
        anyLoading,
        anyError,
      };
    });
  }

  const subscribe = createStoreSubscribe(
    subscribers,
    () => {
      const entriesToStart: Array<
        { entry: LinkEntry; sourceType: ObjectOrInterfaceDefinition }
      > = [];
      for (const entry of linkEntries.values()) {
        if (entry.status === "init") {
          entriesToStart.push({ entry, sourceType: shape.__baseType });
        }
      }
      if (entriesToStart.length > 0) {
        startLinksInBatch(entriesToStart);
      }
    },
    () => {
      if (nestedFlushTimer != null) {
        clearTimeout(nestedFlushTimer);
        nestedFlushTimer = undefined;
      }
      pendingNestedEntries.length = 0;
      for (const entry of linkEntries.values()) {
        entry.subscription?.unsubscribe();
        for (const nestedMap of entry.nestedByPk.values()) {
          cleanupNestedMap(nestedMap);
        }
      }
    },
  );

  async function loadDeferred(
    linkName: keyof ShapeDerivedLinks<S>,
  ): Promise<void> {
    const entry = linkEntries.get(String(linkName));
    if (!entry || entry.status !== "deferred") {
      return;
    }
    startLinkObservation(entry, shape.__baseType);
  }

  function retry(linkName?: keyof ShapeDerivedLinks<S>): void {
    const retryEntry = (entry: LinkEntry) => {
      if (entry.status !== "error") {
        return;
      }
      entry.subscription?.unsubscribe();
      entry.status = "init";
      entry.error = undefined;
      entry.subscription = undefined;
      // Use shape.__baseType for retry observation
      startLinkObservation(entry, shape.__baseType);
    };

    if (linkName) {
      const entry = linkEntries.get(String(linkName));
      if (entry) {
        retryEntry(entry);
      }
    } else {
      for (const entry of linkEntries.values()) {
        retryEntry(entry);
      }
    }
  }

  return {
    subscribe,
    getSnapShot: buildSnapshot,
    loadDeferred,
    retry,
  };
}

/**
 * Aggregated payload from batched derived links observation.
 * Distributes link data across source objects by primary key.
 */
export interface BatchedDerivedLinksPayload<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  linksBySourcePk: Map<
    string | number,
    Record<
      string,
      ShapeInstance<ShapeDefinition<ObjectOrInterfaceDefinition>>[]
    >
  >;
  linkStatusBySourcePk: Map<
    string | number,
    Partial<Record<string, LinkStatus>>
  >;
  aggregatedLinkStatus: Partial<Record<string, LinkStatus>>;
  anyLoading: boolean;
  anyError: boolean;
}

/**
 * Result from createBatchedDerivedLinksStore.
 * Manages N source objects' batchable links with O(1) subscriptions per link type.
 */
export interface BatchedDerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  subscribe: (notify: () => void) => () => void;
  getSnapshot: () => BatchedDerivedLinksPayload<S>;
  updateSourceObjects: (
    sourceObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[],
  ) => void;
  loadDeferred: (
    sourcePk: string | number,
    linkName: string,
  ) => Promise<void>;
  retry: (sourcePk?: string | number, linkName?: string) => void;
  destroy: () => void;
}

interface BatchedLinkState {
  linkDef: ShapeDerivedLinkDef;
  status: "init" | "loading" | "loaded" | "error" | "deferred";
  error?: Error;
  sourcePkToTargetPks: Map<unknown, unknown[]>;
  allTargetPks: Set<unknown>;
  targetObjectsByPk: Map<unknown, Osdk.Instance<ObjectOrInterfaceDefinition>>;
  subscription?: Unsubscribable;
  targetApiName: string;
  pkFieldName: string;
}

/**
 * Creates a batched store for observing batchable derived links across
 * multiple source objects.
 *
 * Instead of N per-item subscriptions (one per source object per link),
 * this creates 1 observeList subscription per link type using a $in
 * where clause on the target PKs. This reduces Store.queries from O(N)
 * to O(1) per link type.
 *
 * Link relationship changes are detected when updateSourceObjects is called
 * with new source data (triggered by the parent list subscription re-emitting
 * after the source type is invalidated).
 */
export function createBatchedDerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(
  shape: S,
  batchableLinks: ShapeDerivedLinkDef[],
  observableClient: ObservableClient,
  client: Client,
  linkConfig: Partial<Record<string, LinkLoadConfig>>,
): BatchedDerivedLinksStore<S> {
  const subscribers = new Set<() => void>();
  const cache = createVersionedCache<BatchedDerivedLinksPayload<S>>();
  const notifySubscribers = createCachingNotifier(subscribers, cache);

  const linkStates = new Map<string, BatchedLinkState>();
  let currentSourceObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[] = [];
  let destroyed = false;
  let updateGeneration = 0;

  for (const linkDef of batchableLinks) {
    const config = linkConfig[linkDef.name];
    const isDeferred = linkDef.config.defer ?? config?.defer ?? false;

    linkStates.set(linkDef.name, {
      linkDef,
      status: isDeferred ? "deferred" : "init",
      error: undefined,
      sourcePkToTargetPks: new Map(),
      allTargetPks: new Set(),
      targetObjectsByPk: new Map(),
      subscription: undefined,
      targetApiName: "",
      pkFieldName: "",
    });
  }

  function teardownSubscription(state: BatchedLinkState): void {
    if (state.subscription) {
      state.subscription.unsubscribe();
      state.subscription = undefined;
    }
  }

  function teardownAll(): void {
    for (const state of linkStates.values()) {
      teardownSubscription(state);
    }
  }

  async function startBatchedObservation(
    state: BatchedLinkState,
    sourceObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[],
    generation: number,
  ): Promise<void> {
    const linkApiName = state.linkDef.objectSetDef.segments[0].linkName;

    let mappingResult: BulkLinkMappingResult;
    try {
      mappingResult = await fetchBulkDerivedLinkObjectsWithMapping(
        client,
        sourceObjects,
        linkApiName,
      );
    } catch (e: unknown) {
      if (destroyed || generation !== updateGeneration) {
        return;
      }
      state.status = "error";
      state.error = wrapError(e);
      notifySubscribers();
      return;
    }

    if (destroyed || generation !== updateGeneration) {
      return;
    }

    const { objectsBySourcePk, targetApiName, allTargetPks } = mappingResult;

    const newSourcePkToTargetPks = new Map<unknown, unknown[]>();
    for (const [sourcePk, targetObjs] of objectsBySourcePk) {
      newSourcePkToTargetPks.set(sourcePk, targetObjs.map(o => o.$primaryKey));
    }

    state.sourcePkToTargetPks = newSourcePkToTargetPks;
    state.targetApiName = targetApiName;

    for (const [sourcePk, targetObjs] of objectsBySourcePk) {
      for (const obj of targetObjs) {
        state.targetObjectsByPk.set(
          obj.$primaryKey,
          obj as Osdk.Instance<ObjectOrInterfaceDefinition>,
        );
      }
    }

    const targetPksChanged = !setsEqual(state.allTargetPks, allTargetPks);
    state.allTargetPks = allTargetPks;

    if (allTargetPks.size === 0) {
      teardownSubscription(state);
      state.status = "loaded";
      notifySubscribers();
      return;
    }

    if (!state.subscription || targetPksChanged) {
      teardownSubscription(state);

      if (!state.pkFieldName && targetApiName) {
        try {
          const miniDef = {
            type: "object",
            apiName: targetApiName,
          } as ObjectTypeDefinition;
          const metadata = await client.fetchMetadata(miniDef);
          state.pkFieldName = metadata.primaryKeyApiName as string;
        } catch (e: unknown) {
          if (destroyed || generation !== updateGeneration) {
            return;
          }
          state.status = "error";
          state.error = wrapError(e);
          notifySubscribers();
          return;
        }
      }

      if (destroyed || generation !== updateGeneration) {
        return;
      }

      const targetPkArray = [...allTargetPks];
      // Dynamic PK field name requires type assertion - same pattern as BulkObjectLoader
      const whereClause = {
        [state.pkFieldName]: { $in: targetPkArray },
      } as WhereClause<ObjectOrInterfaceDefinition>;
      const targetType = state.linkDef.targetShape.__baseType;

      const config = linkConfig[state.linkDef.name];

      const observer: Observer<{
        resolvedList: Osdk.Instance<ObjectOrInterfaceDefinition>[] | undefined;
        hasMore: boolean;
        fetchMore: () => Promise<void>;
        status: string;
        isOptimistic: boolean;
      }> = {
        next: (payload) => {
          if (destroyed) {
            return;
          }

          state.targetObjectsByPk.clear();
          for (const obj of (payload.resolvedList ?? [])) {
            state.targetObjectsByPk.set(obj.$primaryKey, obj);
          }

          state.status = payload.status === "loading" ? "loading" : "loaded";
          state.error = undefined;
          notifySubscribers();
        },
        error: (err) => {
          if (destroyed) {
            return;
          }
          state.status = "error";
          state.error = wrapError(err);
          notifySubscribers();
        },
        complete: () => {},
      };

      state.subscription = observableClient.observeList(
        {
          type: targetType,
          where: whereClause,
          pageSize: targetPkArray.length,
          autoFetchMore: config?.autoFetchMore,
          streamUpdates: config?.streamUpdates,
        },
        observer,
      );
    }

    state.status = "loaded";
    notifySubscribers();
  }

  function updateSourceObjects(
    sourceObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[],
  ): void {
    if (destroyed) {
      return;
    }
    currentSourceObjects = sourceObjects;
    updateGeneration++;
    const generation = updateGeneration;

    for (const state of linkStates.values()) {
      if (state.status === "deferred") {
        continue;
      }
      state.status = "loading";
      state.error = undefined;
    }
    notifySubscribers();

    for (const state of linkStates.values()) {
      if (state.status !== "loading") {
        continue;
      }
      startBatchedObservation(state, sourceObjects, generation).catch((err) => {
        if (!destroyed && generation === updateGeneration) {
          state.status = "error";
          state.error = wrapError(err);
          notifySubscribers();
        }
      });
    }
  }

  function resolveTargetsForSource(
    state: BatchedLinkState,
    sourcePk: unknown,
  ): Osdk.Instance<ObjectOrInterfaceDefinition>[] {
    const targetPks = state.sourcePkToTargetPks.get(sourcePk);
    if (!targetPks) {
      return [];
    }
    const result: Osdk.Instance<ObjectOrInterfaceDefinition>[] = [];
    for (const pk of targetPks) {
      const obj = state.targetObjectsByPk.get(pk);
      if (obj) {
        result.push(obj);
      }
    }
    return result;
  }

  function buildSnapshot(): BatchedDerivedLinksPayload<S> {
    return cache.get(() => {
      const linksBySourcePk = new Map<
        string | number,
        Record<
          string,
          ShapeInstance<ShapeDefinition<ObjectOrInterfaceDefinition>>[]
        >
      >();
      const linkStatusBySourcePk = new Map<
        string | number,
        Partial<Record<string, LinkStatus>>
      >();
      let anyLoading = false;
      let anyError = false;

      for (const obj of currentSourceObjects) {
        const sourcePk = obj.$primaryKey;
        const links: Record<
          string,
          ShapeInstance<ShapeDefinition<ObjectOrInterfaceDefinition>>[]
        > = {};
        const statuses: Partial<Record<string, LinkStatus>> = {};

        for (const [linkName, state] of linkStates) {
          const rawTargets = resolveTargetsForSource(state, sourcePk);
          const transformResult = applyShapeTransformationsToArray(
            state.linkDef.targetShape,
            rawTargets,
          );
          links[linkName] = transformResult.data;

          statuses[linkName] = {
            isLoading: state.status === "loading" || state.status === "init",
            error: state.error
              ?? violationsToError(
                state.linkDef.targetShape,
                transformResult.violations,
              ),
            hasMore: false,
            fetchMore: NOOP_FETCH_MORE,
          };
        }

        linksBySourcePk.set(sourcePk, links);
        linkStatusBySourcePk.set(sourcePk, statuses);
      }

      const aggregatedLinkStatus: Partial<Record<string, LinkStatus>> = {};
      for (const [linkName, state] of linkStates) {
        if (state.status === "loading" || state.status === "init") {
          anyLoading = true;
        }
        if (state.status === "error") {
          anyError = true;
        }

        let linkAnyLoading = false;
        let linkError: Error | undefined;
        for (const [, statuses] of linkStatusBySourcePk) {
          const s = statuses[linkName];
          if (s?.isLoading) {
            linkAnyLoading = true;
          }
          if (s?.error && !linkError) {
            linkError = s.error;
          }
        }

        aggregatedLinkStatus[linkName] = {
          isLoading: linkAnyLoading,
          error: linkError,
          hasMore: false,
          fetchMore: NOOP_FETCH_MORE,
        };
      }

      return {
        linksBySourcePk,
        linkStatusBySourcePk,
        aggregatedLinkStatus,
        anyLoading,
        anyError,
      };
    });
  }

  const subscribe = createStoreSubscribe(
    subscribers,
    () => {},
    () => {
      teardownAll();
    },
  );

  async function loadDeferred(
    sourcePk: string | number,
    linkName: string,
  ): Promise<void> {
    const state = linkStates.get(linkName);
    if (!state || state.status !== "deferred") {
      return;
    }
    state.status = "loading";
    state.error = undefined;
    notifySubscribers();
    const generation = updateGeneration;
    try {
      await startBatchedObservation(state, currentSourceObjects, generation);
    } catch (err) {
      if (!destroyed && generation === updateGeneration) {
        state.status = "error";
        state.error = wrapError(err);
        notifySubscribers();
      }
    }
  }

  function retry(sourcePk?: string | number, linkName?: string): void {
    const retryState = (state: BatchedLinkState) => {
      if (state.status !== "error") {
        return;
      }
      teardownSubscription(state);
      state.status = "loading";
      state.error = undefined;
      notifySubscribers();
      const generation = updateGeneration;
      startBatchedObservation(state, currentSourceObjects, generation).catch(
        (err) => {
          if (!destroyed && generation === updateGeneration) {
            state.status = "error";
            state.error = wrapError(err);
            notifySubscribers();
          }
        },
      );
    };

    if (linkName) {
      const state = linkStates.get(linkName);
      if (state) {
        retryState(state);
      }
    } else {
      for (const state of linkStates.values()) {
        retryState(state);
      }
    }
  }

  function destroy(): void {
    destroyed = true;
    teardownAll();
  }

  return {
    subscribe,
    getSnapshot: buildSnapshot,
    updateSourceObjects,
    loadDeferred,
    retry,
    destroy,
  };
}

function setsEqual(a: Set<unknown>, b: Set<unknown>): boolean {
  if (a.size !== b.size) {
    return false;
  }
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
}
