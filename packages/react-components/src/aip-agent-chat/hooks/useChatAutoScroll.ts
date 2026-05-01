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
 * (typically the messages array length, the streaming token count, or both).
 *
 * Disengages temporarily once the user scrolls up — pinning resumes when the
 * user scrolls back near the bottom. Returns the ref to attach to the
 * scrollable element.
 */
export function useChatAutoScroll<T extends HTMLElement>(
  signal: unknown,
  enabled: boolean,
): React.RefObject<T> {
  const ref = React.useRef<T>(null);
  const isPinnedRef = React.useRef<boolean>(true);

  React.useEffect(() => {
    const el = ref.current;
    if (el == null) {
      return undefined;
    }
    const onScroll = () => {
      const distanceFromBottom = el.scrollHeight - el.scrollTop
        - el.clientHeight;
      isPinnedRef.current = distanceFromBottom <= NEAR_BOTTOM_THRESHOLD_PX;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!enabled) {
      return;
    }
    const el = ref.current;
    if (el == null || !isPinnedRef.current) {
      return;
    }
    el.scrollTop = el.scrollHeight;
  }, [signal, enabled]);

  return ref;
}

const NEAR_BOTTOM_THRESHOLD_PX = 32;
