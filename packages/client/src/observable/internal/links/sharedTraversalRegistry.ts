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

import type { Observer } from "../../ObservableClient/common.js";

/**
 * Starts an underlying traversal. Receives the broadcast `emit` to feed
 * snapshots to every subscriber sharing the key, and returns a teardown that
 * is invoked once the last subscriber unsubscribes.
 */
export type StartTraversal<TArgs> = (
  emit: (args: TArgs) => void,
) => () => void;

/**
 * De-duplicates identical traversals so two subscriptions sharing a key drive
 * a single underlying expansion (one query, one BFS).
 *
 * The first subscription for a key starts the expansion; later subscriptions
 * for the same key attach to it and immediately replay the latest snapshot.
 * The expansion is reference counted and torn down when the last subscription
 * unsubscribes.
 */
export interface SharedTraversalRegistry<TArgs> {
  subscribe(
    key: string,
    observer: Observer<TArgs>,
    start: StartTraversal<TArgs>,
  ): () => void;
  /** number of live (started, not yet torn down) expansions. */
  readonly size: number;
}

interface SharedEntry<TArgs> {
  observers: Set<Observer<TArgs>>;
  last: TArgs | undefined;
  hasLast: boolean;
  refCount: number;
  teardown: () => void;
}

export function createSharedTraversalRegistry<
  TArgs,
>(): SharedTraversalRegistry<TArgs> {
  const entries = new Map<string, SharedEntry<TArgs>>();

  function subscribe(
    key: string,
    observer: Observer<TArgs>,
    start: StartTraversal<TArgs>,
  ): () => void {
    let entry = entries.get(key);
    if (entry === undefined) {
      const observers = new Set<Observer<TArgs>>();
      const created: SharedEntry<TArgs> = {
        observers,
        last: undefined,
        hasLast: false,
        refCount: 0,
        teardown: () => {},
      };
      created.teardown = start((args) => {
        created.last = args;
        created.hasLast = true;
        for (const o of observers) {
          o.next(args);
        }
      });
      entries.set(key, created);
      entry = created;
    }

    entry.observers.add(observer);
    entry.refCount += 1;

    // a late subscriber sees the latest snapshot immediately
    if (entry.hasLast) {
      observer.next(entry.last as TArgs);
    }

    let unsubscribed = false;
    return () => {
      if (unsubscribed) {
        return;
      }
      unsubscribed = true;
      const current = entries.get(key);
      if (current === undefined) {
        return;
      }
      current.observers.delete(observer);
      current.refCount -= 1;
      if (current.refCount <= 0) {
        entries.delete(key);
        current.teardown();
      }
    };
  }

  return {
    subscribe,
    get size() {
      return entries.size;
    },
  };
}
