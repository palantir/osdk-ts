/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { QueryDefinition } from "@osdk/api";
import type {
  ObservableClient,
  ObserveFunctionCallbackArgs,
} from "@osdk/client/unstable-do-not-use";
import type { Snapshot } from "./makeExternalStore.js";
import type { FunctionQueryParams } from "./useOsdkFunctions.js";

type FunctionPayload = ObserveFunctionCallbackArgs<QueryDefinition<unknown>>;

/**
 * Creates a composite external store that manages N function subscriptions
 * through a single `useSyncExternalStore` interface.
 *
 * Unlike `makeExternalStore` (which wraps a single Observer), this manages
 * N observers funneled into one snapshot array. Supports optional concurrency
 * limiting via `maxConcurrent` to stagger subscriptions.
 */
export function createCompositeExternalStore(
  queries: Array<FunctionQueryParams<QueryDefinition<unknown>>>,
  observableClient: ObservableClient,
  maxConcurrent: number | undefined,
): {
  subscribe: (notifyUpdate: () => void) => () => void;
  getSnapshot: () => Array<Snapshot<FunctionPayload>>;
} {
  // Mutable snapshot array — replaced (never mutated in place) on each
  // observer callback so that useSyncExternalStore sees a new reference.
  let current: Array<Snapshot<FunctionPayload>> = queries.map(
    () => undefined,
  );

  const updateSlot = (
    index: number,
    value: Snapshot<FunctionPayload>,
  ) => {
    const next = [...current];
    next[index] = value;
    current = next;
  };

  function observeQuery(
    query: FunctionQueryParams<QueryDefinition<unknown>>,
    index: number,
    notifyUpdate: () => void,
    onSettled: () => void,
  ): { unsubscribe: () => void } {
    const { params, dedupeIntervalMs, dependsOn, dependsOnObjects } =
      query.options ?? {};

    return observableClient.observeFunction(
      query.queryDefinition,
      params,
      {
        dependsOn,
        dependsOnObjects,
        dedupeInterval: dedupeIntervalMs ?? 2_000,
      },
      {
        next: (payload: FunctionPayload | undefined) => {
          updateSlot(index, payload as Snapshot<FunctionPayload>);
          notifyUpdate();

          if (
            payload?.status === "loaded" || payload?.status === "error"
          ) {
            onSettled();
          }
        },
        error: (error: unknown) => {
          updateSlot(index, {
            ...(current[index] ?? {}),
            error: error instanceof Error
              ? error
              : new Error(String(error)),
          } as Snapshot<FunctionPayload>);
          notifyUpdate();
          onSettled();
        },
        complete: () => {},
      },
    );
  }

  function getEnabledIndices(): number[] {
    return queries
      .map((q, i) => q.options?.enabled !== false ? i : -1)
      .filter(i => i !== -1);
  }

  function subscribe(notifyUpdate: () => void): () => void {
    const subscriptions: Array<{ unsubscribe: () => void }> = [];
    const enabledIndices = getEnabledIndices();

    const subscribeAt = (queueIdx: number) => {
      if (queueIdx >= enabledIndices.length) return;

      const index = enabledIndices[queueIdx];
      const onSettled = maxConcurrent != null
        ? () => subscribeAt(queueIdx + maxConcurrent)
        : () => {};

      subscriptions.push(
        observeQuery(queries[index], index, notifyUpdate, onSettled),
      );
    };

    // When staggering, only start the first `maxConcurrent` queries.
    // Each calls subscribeAt(queueIdx + maxConcurrent) when it settles,
    // creating a sliding window of concurrent subscriptions.
    const initialCount = maxConcurrent != null
      ? Math.min(maxConcurrent, enabledIndices.length)
      : enabledIndices.length;

    for (let i = 0; i < initialCount; i++) {
      subscribeAt(i);
    }

    return () => subscriptions.forEach(sub => sub.unsubscribe());
  }

  return {
    getSnapshot: () => current,
    subscribe,
  };
}

const EMPTY_SNAPSHOTS: Array<Snapshot<FunctionPayload>> = [];

export const EMPTY_STORE = {
  subscribe: (): () => void => () => {},
  getSnapshot: (): Snapshot<FunctionPayload>[] => EMPTY_SNAPSHOTS,
} as const;
