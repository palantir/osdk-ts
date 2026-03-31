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
} from "@osdk/api";
import type { ShapeDerivedLinkDef } from "@osdk/api/shapes-internal";
import type {
  LinkLoadConfig,
  LinkStatus,
  ShapeBaseType,
  ShapeDefinition,
  ShapeDerivedLinks,
  ShapeInstance,
} from "@osdk/api/unstable";
import { ShapeNullabilityError } from "@osdk/api/unstable";
import type { Client } from "@osdk/client";
import {
  applyShapeTransformationsToArray,
  buildObjectSetFromLinkDefByType,
  getLinkQueryOptions,
} from "@osdk/client/unstable-do-not-use";
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

export type AnyShapeInstance = ShapeInstance<
  ShapeDefinition<ObjectOrInterfaceDefinition>
>;

export type ListObserverPayload = {
  resolvedList: Osdk.Instance<ObjectOrInterfaceDefinition>[] | undefined;
  hasMore: boolean;
  fetchMore: () => Promise<void>;
  status: string;
  isOptimistic: boolean;
};

export const NOOP_FETCH_MORE = async (): Promise<void> => {};

/** Converts nullability violations into a ShapeNullabilityError if any `require` constraints failed. */
export function violationsToError(
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

interface LinkEntry {
  linkDef: ShapeDerivedLinkDef;
  sourceObject: Osdk.Instance<ObjectOrInterfaceDefinition>;
  status: "init" | "loading" | "loaded" | "error" | "deferred";
  data: AnyShapeInstance[];
  rawObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[];
  error?: Error;
  hasMore: boolean;
  fetchMore: () => Promise<void>;
  subscription?: Unsubscribable;
  nestedByPk: Map<unknown, Map<string, LinkEntry>>;
}

export interface DerivedLinksPayload<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  links: Record<string, AnyShapeInstance[]>;
  linkStatus: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;
  anyLoading: boolean;
  anyError: boolean;
}

export interface DerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  subscribe: (notifyUpdate: () => void) => () => void;
  getSnapShot: () => DerivedLinksPayload<S>;
  loadDeferred: (linkName: keyof ShapeDerivedLinks<S>) => Promise<void>;
  retry: (linkName?: keyof ShapeDerivedLinks<S>) => void;
  destroy: () => void;
}

/** Returns a no-op store used when no source object is available yet. */
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
    destroy: () => {},
  };
}

/** Returns true if a link can be observed via the batched observeLinks path (single pivotTo, no filters/ordering). */
export function isBatchableLink(linkDef: ShapeDerivedLinkDef): boolean {
  const def = linkDef.objectSetDef;
  return (
    def.segments.length === 1
    && def.segments[0].type === "pivotTo"
    && (!def.setOperations || def.setOperations.length === 0)
    && !def.where
    && !def.orderBy
    && def.limit == null
    && !def.distinct
  );
}

/** Creates a store that observes all derived links for a single source object and exposes them via useSyncExternalStore. */
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
    const isDeferred = linkDef.config.defer ?? config?.defer ?? false;
    linkEntries.set(linkDef.name, {
      linkDef,
      sourceObject: castSource,
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
  const subscribers = new Set<() => void>();
  const cache = createVersionedCache<DerivedLinksPayload<S>>();
  const notifySubscribers = createCachingNotifier(subscribers, cache);

  const pendingNestedEntries: Array<
    { entry: LinkEntry; sourceType: ObjectOrInterfaceDefinition }
  > = [];
  let nestedFlushTimer: ReturnType<typeof setTimeout> | undefined;
  let isDestroyed = false;

  function scheduleNestedFlush(): void {
    if (nestedFlushTimer != null) {
      return;
    }
    nestedFlushTimer = setTimeout(() => {
      nestedFlushTimer = undefined;
      if (isDestroyed) {
        return;
      }
      const batch = pendingNestedEntries.splice(0);
      if (batch.length > 0) {
        startLinksInBatch(batch);
      }
      // 25ms window to batch nested link subscriptions, avoids N individual startups while staying responsive
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

      const nestedDerivedLinks = targetShape
        .__derivedLinks as readonly ShapeDerivedLinkDef[];
      for (const nestedLinkDef of nestedDerivedLinks) {
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
    transformedData: AnyShapeInstance[],
  ): AnyShapeInstance[] {
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

      const nestedLinks: Record<string, AnyShapeInstance[]> = {};
      for (const [linkName, nestedEntry] of nestedMap) {
        nestedLinks[linkName] = buildDataWithNestedLinks(
          nestedEntry,
          nestedEntry.data,
        );
      }

      return { ...obj, ...nestedLinks } as AnyShapeInstance;
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

    const observer: Observer<ListObserverPayload> = {
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
