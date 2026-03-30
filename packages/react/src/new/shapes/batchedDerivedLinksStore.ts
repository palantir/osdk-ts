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

import type { ObjectOrInterfaceDefinition, Osdk } from "@osdk/api";
import type { ShapeDerivedLinkDef } from "@osdk/api/shapes-internal";
import type {
  LinkLoadConfig,
  LinkStatus,
  ShapeBaseType,
  ShapeDefinition,
  ShapeDerivedLinks,
} from "@osdk/api/unstable";
import type { Client } from "@osdk/client";
import { applyShapeTransformationsToArray } from "@osdk/client/shapes";
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
import type {
  AnyShapeInstance,
  DerivedLinksStore,
} from "./derivedLinksStore.js";
import {
  createDerivedLinksStore,
  isBatchableLink,
  NOOP_FETCH_MORE,
  violationsToError,
} from "./derivedLinksStore.js";

export interface BatchedDerivedLinksPayload<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  linksBySourcePk: Map<string | number, Record<string, AnyShapeInstance[]>>;
  linkStatusBySourcePk: Map<
    string | number,
    Partial<Record<string, LinkStatus>>
  >;
  aggregatedLinkStatus: Partial<Record<string, LinkStatus>>;
  anyLoading: boolean;
  anyError: boolean;
}

export interface BatchedDerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
> {
  subscribe: (notify: () => void) => () => void;
  getSnapshot: () => BatchedDerivedLinksPayload<S>;
  updateSourceObjects: (
    sourceObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[],
    transformedData: AnyShapeInstance[],
  ) => void;
  loadDeferred: (sourcePk: string | number, linkName: string) => void;
  retry: (sourcePk?: string | number, linkName?: string) => void;
  destroy: () => void;
}

interface TransformedSourceData {
  data: AnyShapeInstance[];
  error?: Error;
}

interface BatchableLinkState {
  linkDef: ShapeDerivedLinkDef;
  status: "init" | "loading" | "loaded" | "error" | "deferred";
  error?: Error;
  subscription?: Unsubscribable;
  transformedBySourcePk: Map<string | number, TransformedSourceData>;
  hasMore: boolean;
  fetchMore: () => Promise<void>;
}

export function createEmptyBatchedDerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(): BatchedDerivedLinksStore<S> {
  const emptyPayload: BatchedDerivedLinksPayload<S> = {
    linksBySourcePk: new Map(),
    linkStatusBySourcePk: new Map(),
    aggregatedLinkStatus: {},
    anyLoading: false,
    anyError: false,
  };

  return {
    subscribe: () => () => {},
    getSnapshot: () => emptyPayload,
    updateSourceObjects: () => {},
    loadDeferred: () => {},
    retry: () => {},
    destroy: () => {},
  };
}

// observeLinks is strongly typed but shapes work with erased types.
// This local alias lets us call it with string link names and untyped objects.
type ObserveLinksUntyped = (
  objects: ReadonlyArray<Osdk.Instance<ObjectOrInterfaceDefinition>>,
  linkName: string,
  options: {
    pageSize?: number;
    dedupeInterval?: number;
  },
  subFn: Observer<{
    linkedObjectsBySourcePrimaryKey: ReadonlyMap<
      string | number,
      ReadonlyArray<Osdk.Instance<ObjectOrInterfaceDefinition>>
    >;
    resolvedList: Osdk.Instance<ObjectOrInterfaceDefinition>[] | undefined;
    isOptimistic: boolean;
    lastUpdated: number;
    fetchMore: () => Promise<void>;
    hasMore: boolean;
    status: string;
  }>,
) => Unsubscribable;

// Adapter to bridge the strongly-typed observeLinks signature to the
// untyped ObserveLinksUntyped used internally. The any casts are
// contained here instead of spread through call sites.
function adaptObserveLinks(
  observeLinks: ObservableClient["observeLinks"],
): ObserveLinksUntyped {
  return (objects, linkName, options, subFn) => {
    return observeLinks(
      objects as ReadonlyArray<Osdk.Instance<ObjectOrInterfaceDefinition>>,
      linkName as Parameters<ObservableClient["observeLinks"]>[1],
      options as Parameters<ObservableClient["observeLinks"]>[2],
      subFn as Parameters<ObservableClient["observeLinks"]>[3],
    );
  };
}

export function createBatchedDerivedLinksStore<
  S extends ShapeDefinition<ObjectOrInterfaceDefinition>,
>(
  shape: S,
  allLinks: readonly ShapeDerivedLinkDef[],
  observableClient: ObservableClient,
  client: Client,
  linkConfig: Partial<Record<string, LinkLoadConfig>>,
): BatchedDerivedLinksStore<S> {
  const batchableLinks: ShapeDerivedLinkDef[] = [];
  const nonBatchableLinks: ShapeDerivedLinkDef[] = [];
  for (const linkDef of allLinks) {
    if (isBatchableLink(linkDef)) {
      batchableLinks.push(linkDef);
    } else {
      nonBatchableLinks.push(linkDef);
    }
  }

  const subscribers = new Set<() => void>();
  const cache = createVersionedCache<BatchedDerivedLinksPayload<S>>();
  const rawNotify = createCachingNotifier(subscribers, cache);
  function notifySubscribers(): void {
    fetchMoreCache.clear();
    rawNotify();
  }

  const linkStates = new Map<string, BatchableLinkState>();
  const perItemStores = new Map<string | number, DerivedLinksStore<S>>();
  const perItemUnsubscribes = new Map<string | number, () => void>();

  let currentSourceObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[] = [];
  let destroyed = false;
  const fetchMoreCache = new Map<string, () => Promise<void>>();

  const observeLinksUntyped = adaptObserveLinks(observableClient.observeLinks);

  for (const linkDef of batchableLinks) {
    const config = linkConfig[linkDef.name];
    const isDeferred = linkDef.config.defer ?? config?.defer ?? false;

    linkStates.set(linkDef.name, {
      linkDef,
      status: isDeferred ? "deferred" : "init",
      error: undefined,
      subscription: undefined,
      transformedBySourcePk: new Map(),
      hasMore: false,
      fetchMore: NOOP_FETCH_MORE,
    });
  }

  function teardownSubscription(state: BatchableLinkState): void {
    if (state.subscription) {
      state.subscription.unsubscribe();
      state.subscription = undefined;
    }
  }

  function teardownBatchedSubscriptions(): void {
    for (const state of linkStates.values()) {
      teardownSubscription(state);
    }
  }

  function cleanupPerItemStores(): void {
    for (const [pk, store] of perItemStores) {
      perItemUnsubscribes.get(pk)?.();
      store.destroy();
    }
    perItemStores.clear();
    perItemUnsubscribes.clear();
  }

  function cleanupAll(): void {
    teardownBatchedSubscriptions();
    cleanupPerItemStores();
    fetchMoreCache.clear();
  }

  function startObserveLinks(
    state: BatchableLinkState,
    sourceObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[],
  ): void {
    teardownSubscription(state);
    const linkApiName = state.linkDef.objectSetDef.segments[0].linkName;
    const config = linkConfig[state.linkDef.name];

    if (sourceObjects.length === 0) {
      state.status = "loaded";
      state.transformedBySourcePk.clear();
      state.hasMore = false;
      state.fetchMore = NOOP_FETCH_MORE;
      return;
    }

    state.status = "loading";
    state.error = undefined;

    state.subscription = observeLinksUntyped(
      sourceObjects,
      linkApiName,
      {
        pageSize: config?.pageSize,
      },
      {
        next: (payload) => {
          if (destroyed) {
            return;
          }

          state.transformedBySourcePk.clear();
          for (
            const [pk, objects] of payload.linkedObjectsBySourcePrimaryKey
          ) {
            const result = applyShapeTransformationsToArray(
              state.linkDef.targetShape,
              [...objects],
            );
            state.transformedBySourcePk.set(pk, {
              data: result.data,
              error: violationsToError(
                state.linkDef.targetShape,
                result.violations,
              ),
            });
          }

          state.status = payload.status === "loading" ? "loading" : "loaded";
          state.hasMore = payload.hasMore;
          state.fetchMore = payload.fetchMore;
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
      },
    );
  }

  function reconcilePerItemStores(
    sourceObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[],
    transformedData: AnyShapeInstance[],
  ): void {
    const nonBatchableShape = {
      ...shape,
      __derivedLinks: nonBatchableLinks,
    } as S;

    const prev = new Map(perItemStores);
    perItemStores.clear();

    const sourceObjectsByPk = new Map<
      string | number,
      Osdk.Instance<ObjectOrInterfaceDefinition>
    >();
    for (const obj of sourceObjects) {
      sourceObjectsByPk.set(obj.$primaryKey, obj);
    }

    for (const obj of transformedData) {
      const pk = obj.$primaryKey;
      const existing = prev.get(pk);
      if (existing) {
        perItemStores.set(pk, existing);
        prev.delete(pk);
      } else {
        const sourceObj = sourceObjectsByPk.get(pk);
        if (sourceObj) {
          const store = createDerivedLinksStore<S>(
            nonBatchableShape,
            sourceObj as Osdk.Instance<ShapeBaseType<S>>,
            observableClient,
            client,
            linkConfig as Partial<
              Record<keyof ShapeDerivedLinks<S>, LinkLoadConfig>
            >,
          );
          const unsub = store.subscribe(() => {
            notifySubscribers();
          });
          perItemStores.set(pk, store);
          perItemUnsubscribes.set(pk, unsub);
        }
      }
    }

    for (const [pk, store] of prev) {
      perItemUnsubscribes.get(pk)?.();
      perItemUnsubscribes.delete(pk);
      store.destroy();
    }
  }

  function updateSourceObjects(
    sourceObjects: Osdk.Instance<ObjectOrInterfaceDefinition>[],
    transformedData: AnyShapeInstance[],
  ): void {
    if (destroyed) {
      return;
    }
    currentSourceObjects = sourceObjects;

    for (const state of linkStates.values()) {
      if (state.status !== "deferred") {
        startObserveLinks(state, sourceObjects);
      }
    }
    notifySubscribers();

    if (nonBatchableLinks.length > 0) {
      reconcilePerItemStores(sourceObjects, transformedData);
    } else {
      cleanupPerItemStores();
    }
  }

  function buildSnapshot(): BatchedDerivedLinksPayload<S> {
    return cache.get(() => {
      const linksBySourcePk = new Map<
        string | number,
        Record<string, AnyShapeInstance[]>
      >();
      const linkStatusBySourcePk = new Map<
        string | number,
        Partial<Record<string, LinkStatus>>
      >();
      let anyLoading = false;
      let anyError = false;

      for (const obj of currentSourceObjects) {
        const sourcePk = obj.$primaryKey;
        const links: Record<string, AnyShapeInstance[]> = {};
        const statuses: Partial<Record<string, LinkStatus>> = {};

        for (const [linkName, state] of linkStates) {
          const precomputed = state.transformedBySourcePk.get(sourcePk);
          links[linkName] = precomputed?.data ?? [];
          statuses[linkName] = {
            isLoading: state.status === "loading" || state.status === "init",
            error: state.error ?? precomputed?.error,
            hasMore: state.hasMore,
            fetchMore: state.fetchMore,
          };
        }

        const perItemPayload = perItemStores.get(sourcePk)?.getSnapShot();
        if (perItemPayload) {
          Object.assign(links, perItemPayload.links);
          Object.assign(statuses, perItemPayload.linkStatus);
        }

        linksBySourcePk.set(sourcePk, links);
        linkStatusBySourcePk.set(sourcePk, statuses);
      }

      const aggregatedLinkStatus: Partial<Record<string, LinkStatus>> = {};

      for (const [linkName, state] of linkStates) {
        const isLoadingOrInit = state.status === "loading"
          || state.status === "init";
        if (isLoadingOrInit) {
          anyLoading = true;
        }
        if (state.status === "error") {
          anyError = true;
        }

        aggregatedLinkStatus[linkName] = {
          isLoading: isLoadingOrInit,
          error: state.error,
          hasMore: state.hasMore,
          fetchMore: state.fetchMore,
        };
      }

      for (const linkDef of nonBatchableLinks) {
        const linkName = linkDef.name;
        let linkAnyLoading = false;
        let linkError: Error | undefined;
        let linkHasMore = false;

        for (const [, statuses] of linkStatusBySourcePk) {
          const s = statuses[linkName];
          if (s?.isLoading) {
            linkAnyLoading = true;
            anyLoading = true;
          }
          if (s?.error) {
            if (!linkError) {
              linkError = s.error;
            }
            anyError = true;
          }
          if (s?.hasMore) {
            linkHasMore = true;
          }
        }

        let cachedFetchMore = fetchMoreCache.get(linkName);
        if (!cachedFetchMore) {
          const capturedLinkName = linkName;
          cachedFetchMore = async () => {
            const promises: Promise<void>[] = [];
            for (const [, store] of perItemStores) {
              const snapshot = store.getSnapShot();
              const status = snapshot.linkStatus[
                capturedLinkName as keyof ShapeDerivedLinks<S>
              ];
              if (status?.hasMore && status.fetchMore) {
                promises.push(status.fetchMore());
              }
            }
            await Promise.all(promises);
          };
          fetchMoreCache.set(linkName, cachedFetchMore);
        }

        aggregatedLinkStatus[linkName] = {
          isLoading: linkAnyLoading,
          error: linkError,
          hasMore: linkHasMore,
          fetchMore: cachedFetchMore,
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

  const subscribe = createStoreSubscribe(subscribers, () => {}, cleanupAll);

  function loadDeferred(
    sourcePk: string | number,
    linkName: string,
  ): void {
    const state = linkStates.get(linkName);
    if (state) {
      if (state.status !== "deferred") {
        return;
      }
      startObserveLinks(state, currentSourceObjects);
      notifySubscribers();
      return;
    }

    const store = perItemStores.get(sourcePk);
    if (store) {
      store.loadDeferred(linkName as keyof ShapeDerivedLinks<S>);
    }
  }

  function retry(sourcePk?: string | number, linkName?: string): void {
    const retryBatchedState = (state: BatchableLinkState) => {
      if (state.status !== "error") {
        return;
      }
      startObserveLinks(state, currentSourceObjects);
      notifySubscribers();
    };

    if (linkName) {
      const state = linkStates.get(linkName);
      if (state) {
        retryBatchedState(state);
        return;
      }
      if (sourcePk !== undefined) {
        perItemStores.get(sourcePk)?.retry(
          linkName as keyof ShapeDerivedLinks<S>,
        );
      } else {
        for (const store of perItemStores.values()) {
          store.retry(linkName as keyof ShapeDerivedLinks<S>);
        }
      }
    } else {
      for (const state of linkStates.values()) {
        retryBatchedState(state);
      }
      if (sourcePk !== undefined) {
        perItemStores.get(sourcePk)?.retry();
      } else {
        for (const store of perItemStores.values()) {
          store.retry();
        }
      }
    }
  }

  function destroy(): void {
    destroyed = true;
    cleanupAll();
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
