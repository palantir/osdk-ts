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

import * as React from "react";

/**
 * Keeps a scrollable container pinned to its bottom whenever `signal` changes
 * (typically a string encoding the messages array length and streaming token
 * count).
 *
 * Disengages temporarily once the user scrolls up — pinning resumes when the
 * user scrolls back near the bottom. Returns a callback ref to attach to the
 * scrollable element; the listener follows the element across re-mounts.
 */
export function useChatAutoScroll<T extends HTMLElement>(
  signal: string,
  enabled: boolean,
): React.RefCallback<T> {
  const elRef = React.useRef<T | null>(null);
  const cleanupRef = React.useRef<(() => void) | null>(null);
  const isPinnedRef = React.useRef<boolean>(true);

  const setRef = React.useCallback<React.RefCallback<T>>((el) => {
    cleanupRef.current?.();
    cleanupRef.current = null;
    elRef.current = el;
    if (el == null) {
      return;
    }
    const onScroll = () => {
      const distanceFromBottom = el.scrollHeight - el.scrollTop
        - el.clientHeight;
      isPinnedRef.current = distanceFromBottom <= NEAR_BOTTOM_THRESHOLD_PX;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    cleanupRef.current = () => el.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!enabled) {
      return;
    }
    const el = elRef.current;
    if (el == null || !isPinnedRef.current) {
      return;
    }
    el.scrollTop = el.scrollHeight;
  }, [signal, enabled]);

  return setRef;
}

const NEAR_BOTTOM_THRESHOLD_PX = 32;
