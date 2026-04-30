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

import type { UIMessage } from "ai";

export type ChatStatus = "ready" | "submitted" | "streaming" | "error";

export interface ChatState {
  messages: ReadonlyArray<UIMessage>;
  status: ChatStatus;
  error: Error | undefined;
}

export interface ChatStore {
  getSnapshot: () => ChatState;
  /** Subscribe to state changes. Returns the unsubscribe function. */
  subscribe: (notify: () => void) => () => void;
  /** Replace state immediately. Notifies subscribers (subject to throttling). */
  setState: (
    next: ChatState | ((prev: ChatState) => ChatState),
    options?: { force?: boolean },
  ) => void;
}

export interface CreateChatStoreOptions {
  initialMessages?: ReadonlyArray<UIMessage>;
  /**
   * Min ms between subscriber notifications. 0 = synchronous. Defaults to 0.
   * Pass a function to make the throttle dynamic — it's re-evaluated on each
   * notification, so callers can adjust without recreating the store.
   */
  throttleMs?: number | (() => number);
}

/**
 * Tiny pub-sub store backing `useChat`. Throttles subscriber notifications so
 * fast token-delta streams don't trigger one render per token.
 *
 * Not exported from `@osdk/react` — internal implementation detail.
 */
export function createChatStore(options: CreateChatStoreOptions): ChatStore {
  let state: ChatState = {
    messages: options.initialMessages ?? [],
    status: "ready",
    error: undefined,
  };

  const subscribers = new Set<() => void>();
  const getThrottleMs = (): number => {
    const raw = options.throttleMs ?? 0;
    return typeof raw === "function" ? raw() : raw;
  };
  let pendingNotify: ReturnType<typeof setTimeout> | undefined;
  let lastNotifyTs = 0;

  const flushNotify = (): void => {
    pendingNotify = undefined;
    lastNotifyTs = Date.now();
    for (const s of subscribers) {
      s();
    }
  };

  const scheduleNotify = (force: boolean): void => {
    const throttleMs = getThrottleMs();
    if (force || throttleMs <= 0) {
      if (pendingNotify != null) {
        clearTimeout(pendingNotify);
        pendingNotify = undefined;
      }
      flushNotify();
      return;
    }
    if (pendingNotify != null) {
      return;
    }
    const elapsed = Date.now() - lastNotifyTs;
    const wait = elapsed >= throttleMs ? 0 : throttleMs - elapsed;
    pendingNotify = setTimeout(flushNotify, wait);
  };

  return {
    getSnapshot: () => state,
    subscribe: (notify) => {
      subscribers.add(notify);
      return () => {
        subscribers.delete(notify);
        if (subscribers.size === 0) {
          if (pendingNotify != null) {
            clearTimeout(pendingNotify);
            pendingNotify = undefined;
          }
          // Reset so a re-subscription doesn't see a stale "recent notify"
          // timestamp from a previous lifecycle and delay its first notify.
          lastNotifyTs = 0;
        }
      };
    },
    setState: (next, opts) => {
      state = typeof next === "function" ? next(state) : next;
      scheduleNotify(opts?.force ?? false);
    },
  };
}
