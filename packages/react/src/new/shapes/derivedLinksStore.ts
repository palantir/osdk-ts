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

/**
 * Store layer for one source object's derived links on a given shape. Owns
 * one `LinkEntry` per top-level derived link. If a link's target shape has
 * its own derived links, also owns one `LinkEntry` per (pk, nestedLinkName)
 * under the parent's `nestedByPk`. Feeds `useSyncExternalStore` via
 * `subscribe` / `getSnapShot`. Teardown is one-way via `destroy`.
 */

import type {
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
} from "@osdk/api";
import type { ShapeDerivedLinkDef } from "@osdk/api/shapes-internal";
import type {
  LinkLoadConfig,
  LinkStatus,
  ShapeBaseType,
  ShapeDefinition,
  ShapeDerivedLinks,
} from "@osdk/api/unstable";
import type { Client } from "@osdk/client";
import {
  applyShapeTransformationsToArray,
  buildObjectSetFromLinkDefByType,
  getLinkQueryOptions,
} from "@osdk/client/unstable-do-not-use";
import type {
  ObservableClient,
  Observer,
} from "@osdk/client/unstable-do-not-use";
import {
  createCachingNotifier,
  createStoreSubscribe,
  createVersionedCache,
  wrapError,
} from "../shared/storeUtils.js";
import type {
  AnyShapeInstance,
  DerivedLinksPayload,
  DerivedLinksStore,
  LinkEntry,
  ListObserverPayload,
} from "./types.js";
import {
  buildDataWithNestedLinks,
  cleanupNestedMap,
  createLinkEntry,
  violationsToError,
} from "./types.js";

export type {
  AnyShapeInstance,
  DerivedLinksPayload,
  DerivedLinksStore,
} from "./types.js";
export {
  buildDataWithNestedLinks,
  cleanupNestedMap,
  createEmptyDerivedLinksStore,
  isBatchableLink,
  NOOP_FETCH_MORE,
  violationsToError,
} from "./types.js";

/**
 * Debounce window before starting newly-queued nested link observations.
 * When a parent list resolves, each item needs its own nested link
 * subscriptions. If the parent observer emits a few times in quick
 * succession (e.g. streamUpdates), we collapse those into one
 * `startLinksInBatch` call instead of kicking off subscriptions per
 * emission. 25ms is a guess: small enough to feel instant, large enough
 * to coalesce sync-ish bursts. Not tuned against real workloads.
 */
const NESTED_FLUSH_DELAY_MS = 25;

/**
 * Removes nested entries for pks that are no longer in the parent's result
 * set. `cleanupNestedMap` recursively unsubscribes each entry and marks it
 * `cleaned`, which allows any already-queued flushes for those entries to
 * no-op gracefully.
 */
function pruneStaleNestedEntries(
  nestedByPk: Map<string | number, Map<string, LinkEntry>>,
  currentPks: Set<string | number>,
): void {
  for (const [pk, nestedMap] of nestedByPk) {
    if (!currentPks.has(pk)) {
      cleanupNestedMap(nestedMap);
      nestedByPk.delete(pk);
    }
  }
}

/**
 * Creates a store that observes all derived links for a single source
 * object against the given shape. Returned methods:
 *
 * - `subscribe(notify)`: add a listener. First subscribe kicks off
 *   observation of all non-deferred top-level links. Last unsubscribe
 *   triggers `destroy`.
 * - `getSnapShot()`: read a cached snapshot of all link data + statuses.
 * - `loadDeferred(linkName)`: start a link configured with `defer: true`.
 * - `retry(linkName?)`: restart error-state entries.
 * - `destroy()`: one-way teardown; cascades through nested subscriptions.
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
  const castSource = sourceObject as Osdk.Instance<ObjectOrInterfaceDefinition>;
  const linkEntries = new Map<string, LinkEntry>();
  const derivedLinks = shape.__derivedLinks as readonly ShapeDerivedLinkDef[];
  for (const linkDef of derivedLinks) {
    const config = (linkConfig as Partial<Record<string, LinkLoadConfig>>)[
      linkDef.name
    ];
    linkEntries.set(
      linkDef.name,
      createLinkEntry(linkDef, castSource, config?.defer),
    );
  }
  const subscribers = new Set<() => void>();
  const cache = createVersionedCache<DerivedLinksPayload<S>>();
  const notifySubscribers = createCachingNotifier(subscribers, cache);

  const pendingNestedEntries: Array<
    { entry: LinkEntry; sourceType: ObjectOrInterfaceDefinition }
  > = [];
  let nestedFlushTimer: ReturnType<typeof setTimeout> | undefined;
  let isDestroyed = false;

  /**
   * Schedules a single flush of `pendingNestedEntries` after the debounce
   * window. An entry can be pruned (via `cleanupNestedMap` setting `cleaned`)
   * between being queued and the flush firing, so we filter those out here
   * instead of trying to remove them from the queue at prune time.
   */
  function scheduleNestedFlush(): void {
    if (nestedFlushTimer != null) {
      return;
    }
    nestedFlushTimer = setTimeout(() => {
      nestedFlushTimer = undefined;
      if (isDestroyed) {
        return;
      }
      const batch = pendingNestedEntries.splice(0).filter(({ entry }) =>
        !entry.cleaned
      );
      if (batch.length > 0) {
        startLinksInBatch(batch);
      }
    }, NESTED_FLUSH_DELAY_MS);
  }

  /**
   * For each raw object in a parent's result set, ensure a nested `LinkEntry`
   * exists for every nested derived link the target shape declares. New entries
   * with status `"init"` are queued for batched startup; returns the set of
   * pks seen so the caller can prune entries whose pks disappeared.
   */
  function trackNestedLinksForObjects(
    parentEntry: LinkEntry,
    rawObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[],
  ): Set<string | number> {
    const nestedDerivedLinks = parentEntry.linkDef.targetShape
      .__derivedLinks as readonly ShapeDerivedLinkDef[];
    const currentPks = new Set<string | number>();

    for (const rawObj of rawObjects) {
      const pk = rawObj.$primaryKey;
      currentPks.add(pk);

      let nestedMap = parentEntry.nestedByPk.get(pk);
      if (!nestedMap) {
        nestedMap = new Map();
        parentEntry.nestedByPk.set(pk, nestedMap);
      }

      for (const nestedLinkDef of nestedDerivedLinks) {
        if (!nestedMap.has(nestedLinkDef.name)) {
          const nestedEntry = createLinkEntry(nestedLinkDef, rawObj);
          nestedMap.set(nestedLinkDef.name, nestedEntry);
          if (nestedEntry.status === "init") {
            pendingNestedEntries.push({
              entry: nestedEntry,
              sourceType: parentEntry.linkDef.targetShape.__baseType,
            });
          }
        }
      }
    }

    return currentPks;
  }

  /**
   * Called every time a parent link's observer emits. Three steps:
   *   1. Ensure nested entries exist for each raw object (and queue new ones).
   *   2. Prune nested entries for pks no longer in the result set.
   *   3. If new entries were queued, schedule the debounced flush to start them.
   */
  function handleNestedLinks(
    parentEntry: LinkEntry,
    rawObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[],
  ): void {
    const nestedDerivedLinks = parentEntry.linkDef.targetShape
      .__derivedLinks as readonly ShapeDerivedLinkDef[];
    if (nestedDerivedLinks.length === 0) {
      return;
    }

    const pendingBefore = pendingNestedEntries.length;
    const currentPks = trackNestedLinksForObjects(parentEntry, rawObjects);
    pruneStaleNestedEntries(parentEntry.nestedByPk, currentPks);

    if (pendingNestedEntries.length > pendingBefore) {
      scheduleNestedFlush();
    }
  }

  /**
   * Moves a batch of entries to `"loading"` in one pass, notifies subscribers
   * once for the bulk status change, and then kicks off each entry's async
   * observation. Errors from `startLinkObservationInternal` flip the entry
   * to `"error"` individually.
   */
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

  /** Skips links already loading/loaded, otherwise marks as loading and starts observation. */
  function startLinkObservation(
    entry: LinkEntry,
    sourceType: ObjectOrInterfaceDefinition,
  ): void {
    if (entry.status === "loading" || entry.status === "loaded") {
      return;
    }
    startLinksInBatch([{ entry, sourceType }]);
  }

  /**
   * Observer used for `observeObjectSet` on each link entry. On `next` it
   * applies shape transformations, updates entry state, recurses into nested
   * link handling, and rebuilds the entry's data with any nested link data
   * attached. On `error` it flips the entry to `"error"`.
   */
  function createLinkObserver(
    entry: LinkEntry,
  ): Observer<ListObserverPayload> {
    return {
      next: (payload) => {
        if (isDestroyed) {
          return;
        }
        const resolved = payload.resolvedList ?? [];
        const transformResult = applyShapeTransformationsToArray(
          entry.linkDef.targetShape,
          resolved,
        );

        entry.status = payload.status === "loading" ? "loading" : "loaded";
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
        if (isDestroyed) {
          return;
        }
        entry.status = "error";
        entry.error = wrapError(err);
        notifySubscribers();
      },
      complete: () => {},
    };
  }

  async function startLinkObservationInternal(
    entry: LinkEntry,
    sourceType: ObjectOrInterfaceDefinition,
  ): Promise<void> {
    const objectSet = await buildObjectSetFromLinkDefByType(
      client,
      sourceType,
      entry.sourceObject.$primaryKey,
      entry.linkDef.objectSetDef,
    );

    if (isDestroyed) {
      return;
    }

    const config = linkEntries.has(entry.linkDef.name)
      ? linkConfig[entry.linkDef.name as keyof ShapeDerivedLinks<S>]
      : undefined;

    const queryOptions = getLinkQueryOptions(
      entry.linkDef.objectSetDef,
      entry.sourceObject,
      config?.pageSize,
    );

    const subscription = observableClient.observeObjectSet(
      objectSet as ObjectSet<ObjectTypeDefinition>,
      {
        where: queryOptions.where,
        orderBy: queryOptions.orderBy,
        pageSize: queryOptions.pageSize,
        autoFetchMore: config?.autoFetchMore,
        streamUpdates: config?.streamUpdates,
      },
      createLinkObserver(entry),
    );

    if (isDestroyed) {
      subscription.unsubscribe();
      return;
    }
    entry.subscription = subscription;
  }

  function buildSnapshot(): DerivedLinksPayload<S> {
    return cache.get(() => {
      const links: Record<string, AnyShapeInstance[]> = {};
      const linkStatus: Record<string, LinkStatus> = {};
      let anyLoading = false;
      let anyError = false;

      for (const [name, entry] of linkEntries) {
        links[name] = entry.data;
        const isLoadingOrInit = entry.status === "loading"
          || entry.status === "init";
        if (isLoadingOrInit) {
          anyLoading = true;
        }
        if (entry.status === "error") {
          anyError = true;
        }
        linkStatus[name] = {
          isLoading: isLoadingOrInit,
          error: entry.error,
          hasMore: entry.hasMore,
          fetchMore: entry.fetchMore,
        };
      }

      return {
        links,
        linkStatus: linkStatus as Partial<
          { [K in keyof ShapeDerivedLinks<S>]: LinkStatus }
        >,
        anyLoading,
        anyError,
      };
    });
  }

  /**
   * One-way teardown. Order matters: set `isDestroyed` first so in-flight
   * async work (observer next/error, startLinkObservationInternal) no-ops.
   * Then clear the flush timer, drop the pending queue, unsubscribe every
   * entry, and cascade through `nestedByPk`.
   */
  function destroy(): void {
    isDestroyed = true;
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
    linkEntries.clear();
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
    destroy,
  );

  /**
   * Starts observation for a link that was configured with `defer: true`.
   * No-op for unknown link names or links not in the `deferred` state.
   */
  function loadDeferred(
    linkName: keyof ShapeDerivedLinks<S>,
  ): void {
    const entry = linkEntries.get(String(linkName));
    if (!entry || entry.status !== "deferred") {
      return;
    }
    startLinkObservation(entry, shape.__baseType);
  }

  /**
   * Resets error-state entries back to `"init"` and restarts observation.
   * With a `linkName`, scopes to a single entry; otherwise retries all links.
   * No-op for entries not currently in `"error"`.
   */
  function retry(linkName?: keyof ShapeDerivedLinks<S>): void {
    const retryEntry = (entry: LinkEntry) => {
      if (entry.status !== "error") {
        return;
      }
      entry.subscription?.unsubscribe();
      entry.status = "init";
      entry.error = undefined;
      entry.subscription = undefined;
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
    destroy,
  };
}
