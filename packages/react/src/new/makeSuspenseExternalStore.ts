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
  Observer,
  Unsubscribable,
} from "@osdk/client/unstable-do-not-use";
import type { Snapshot } from "./makeExternalStore.js";

interface SuspenseCacheEntry<X> {
  lastResult: Snapshot<X>;
  hasLoadedOnce: boolean;
  hasErrored: boolean;
  pendingPromise: Promise<void> | undefined;
  resolvePending: (() => void) | undefined;
  observation: Unsubscribable | undefined;
  listeners: Set<() => void>;
  subscriberCount: number;
  createdAt: number;
  transferred: boolean;
}

const suspenseCache = new Map<string, SuspenseCacheEntry<unknown>>();

let clientIdCounter = 0;
const clientIds = new WeakMap<object, number>();

export function getClientId(client: object): number {
  let id = clientIds.get(client);
  if (id === undefined) {
    id = clientIdCounter++;
    clientIds.set(client, id);
  }
  return id;
}

const ORPHAN_CLEANUP_INTERVAL_MS = 60_000;
const ORPHAN_MAX_AGE_MS = 60_000;

let cleanupTimerId: ReturnType<typeof setInterval> | undefined;

function ensureOrphanCleanup(): void {
  if (cleanupTimerId !== undefined) {
    return;
  }
  cleanupTimerId = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of suspenseCache) {
      if (!entry.transferred && now - entry.createdAt >= ORPHAN_MAX_AGE_MS) {
        entry.observation?.unsubscribe();
        suspenseCache.delete(key);
      }
    }
    if (suspenseCache.size === 0) {
      clearInterval(cleanupTimerId);
      cleanupTimerId = undefined;
    }
  }, ORPHAN_CLEANUP_INTERVAL_MS);
}

function getOrCreateEntry<X>(
  cacheKey: string,
  createObservation: (callback: Observer<X | undefined>) => Unsubscribable,
  peekResult: Snapshot<X>,
): SuspenseCacheEntry<X> {
  const existing = suspenseCache.get(cacheKey);
  if (existing) {
    // The cache stores SuspenseCacheEntry<unknown> but the key guarantees
    // the same observation shape. This cast is safe when callers use
    // consistent type parameters per cache key.
    return existing as SuspenseCacheEntry<X>;
  }

  const hasPeekData = peekResult !== undefined;

  const entry: SuspenseCacheEntry<X> = {
    lastResult: peekResult,
    hasLoadedOnce: hasPeekData,
    hasErrored: false,
    pendingPromise: undefined,
    resolvePending: undefined,
    observation: undefined,
    listeners: new Set(),
    subscriberCount: 0,
    createdAt: Date.now(),
    transferred: false,
  };

  function resolveIfPending(): void {
    if (entry.resolvePending) {
      entry.resolvePending();
      entry.resolvePending = undefined;
      entry.pendingPromise = undefined;
    }
  }

  entry.observation = createObservation({
    next: (payload) => {
      entry.lastResult = payload as Snapshot<X>;
      const typedPayload = payload as
        | (Record<string, unknown> & { status?: string })
        | undefined;
      if (typedPayload?.status === "loaded") {
        entry.hasLoadedOnce = true;
        entry.hasErrored = false;
        resolveIfPending();
      }
      for (const listener of entry.listeners) {
        listener();
      }
    },
    error: (error: unknown) => {
      entry.lastResult = {
        ...(entry.lastResult ?? {}),
        error: error instanceof Error ? error : new Error(String(error)),
      } as Snapshot<X>;
      entry.hasErrored = true;
      resolveIfPending();
      for (const listener of entry.listeners) {
        listener();
      }
    },
    complete: () => {},
  });

  suspenseCache.set(cacheKey, entry as SuspenseCacheEntry<unknown>);
  ensureOrphanCleanup();
  return entry;
}

/**
 * Suspense-aware store that survives React 18's hook state reset on Suspense
 * retry.
 *
 * Uses an external cache keyed by `cacheKey` so the observation and its data
 * persist even when React discards and re-creates hook state during suspension.
 *
 * The observation starts eagerly on first access. `subscribe`/`getSnapShot`
 * are compatible with `useSyncExternalStore` for ongoing updates after the
 * component exits suspension and commits.
 *
 * `subscriberCount` is only modified in `subscribe`/cleanup (commit phase),
 * never during render, so it is not inflated by Suspense retries or
 * StrictMode double-renders.
 *
 * When `peekResult` is provided (Store already has loaded data), the entry
 * starts with `hasLoadedOnce: true` and uses the peek data as the initial
 * snapshot, skipping suspension. The eager observation immediately delivers
 * the full payload via BehaviorSubject, replacing the peek snapshot.
 */
export function getSuspenseExternalStore<X>(
  cacheKey: string,
  createObservation: (callback: Observer<X | undefined>) => Unsubscribable,
  peekResult?: Snapshot<X>,
): {
  subscribe: (notifyUpdate: () => void) => () => void;
  getSnapShot: () => Snapshot<X>;
  getSuspensePromise: () => Promise<void> | undefined;
  getError: () => Error | undefined;
} {
  const entry = getOrCreateEntry<X>(cacheKey, createObservation, peekResult);

  return {
    subscribe(notifyUpdate: () => void) {
      entry.subscriberCount++;
      entry.transferred = true;
      entry.listeners.add(notifyUpdate);
      return () => {
        entry.listeners.delete(notifyUpdate);
        entry.subscriberCount--;
        if (entry.subscriberCount <= 0) {
          entry.observation?.unsubscribe();
          suspenseCache.delete(cacheKey);
        }
      };
    },
    getSnapShot() {
      return entry.lastResult;
    },
    getSuspensePromise() {
      if (entry.hasLoadedOnce || entry.hasErrored) {
        return undefined;
      }
      if (entry.pendingPromise === undefined) {
        entry.pendingPromise = new Promise<void>((resolve) => {
          entry.resolvePending = resolve;
        });
      }
      return entry.pendingPromise;
    },
    getError() {
      const result = entry.lastResult;
      if (result && "error" in result && result.error) {
        return result.error;
      }
      const typedResult = result as
        | (Record<string, unknown> & { status?: string })
        | undefined;
      if (typedResult?.status === "error") {
        return new Error("Failed to load data");
      }
      return undefined;
    },
  };
}

/**
 * Check the suspense store and throw if the component should suspend or error.
 *
 * Safe to call after hooks — React's Suspense retry discards all hook state
 * and re-renders from scratch.
 */
export function throwIfSuspenseNeeded<X>(
  store: {
    getSuspensePromise: () => Promise<void> | undefined;
    getError: () => Error | undefined;
  },
  hasDataCheck: (p: Snapshot<X>) => boolean,
  getSnapShot: () => Snapshot<X>,
): void {
  const error = store.getError();
  if (error) {
    throw error;
  }

  if (!hasDataCheck(getSnapShot())) {
    const promise = store.getSuspensePromise();
    if (promise) {
      throw promise;
    }
  }
}

export function isSuspenseOption(value: unknown): boolean {
  return typeof value === "object" && value != null
    && "suspense" in value && value.suspense === true;
}

export function setupSuspenseStore<X>(
  cacheKey: string,
  createObservation: (callback: Observer<X | undefined>) => Unsubscribable,
  peekResult: Snapshot<X>,
  hasDataCheck: (p: Snapshot<X>) => boolean,
): {
  subscribe: (notifyUpdate: () => void) => () => void;
  getSnapShot: () => Snapshot<X>;
} {
  const suspenseStore = getSuspenseExternalStore<X>(
    cacheKey,
    createObservation,
    peekResult,
  );
  throwIfSuspenseNeeded<X>(
    suspenseStore,
    hasDataCheck,
    suspenseStore.getSnapShot,
  );
  return suspenseStore;
}

/** @internal - exported for testing */
export function _clearSuspenseCache(): void {
  for (const entry of suspenseCache.values()) {
    entry.observation?.unsubscribe();
  }
  suspenseCache.clear();
  if (cleanupTimerId !== undefined) {
    clearInterval(cleanupTimerId);
    cleanupTimerId = undefined;
  }
}
