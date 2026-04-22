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

import { useCallback, useEffect, useRef } from "react";

interface UseInfiniteScrollOptions {
  /** Called when the sentinel element becomes visible in the scroll container. */
  onLoadMore: (() => void) | undefined;
  /** Number of items currently loaded. Re-observes the sentinel when this changes
   *  so short lists that don't trigger a visibility change still fetch. */
  loadedCount: number;
  /** Whether there is more data to load. Disables observation when false. */
  hasMore: boolean;
}

/**
 * Returns a ref callback to attach to a sentinel element at the bottom of a
 * scrollable list. When the sentinel enters the viewport (via scroll, filtering
 * reducing visible items, or initial render), `onLoadMore` is called.
 */
export function useInfiniteScroll({
  onLoadMore,
  loadedCount,
  hasMore,
}: UseInfiniteScrollOptions): (node: Element | null) => void {
  const observerRef = useRef<IntersectionObserver>();
  const sentinelRef = useRef<Element | null>(null);
  const onLoadMoreRef = useRef(onLoadMore);
  onLoadMoreRef.current = onLoadMore;

  const handleIntersection = useCallback<IntersectionObserverCallback>(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        onLoadMoreRef.current?.();
      }
    },
    [],
  );

  // Re-observe when loadedCount changes so that a short list where the
  // sentinel is already visible triggers another fetch.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (observerRef.current == null || sentinel == null || !hasMore) {
      return;
    }
    observerRef.current.observe(sentinel);
    return () => {
      observerRef.current?.unobserve(sentinel);
    };
  }, [loadedCount, hasMore]);

  const setRef = useCallback(
    (node: Element | null) => {
      if (node != null) {
        sentinelRef.current = node;
        if (observerRef.current == null) {
          observerRef.current = new IntersectionObserver(handleIntersection);
        }
        if (hasMore) {
          observerRef.current.observe(node);
        }
      } else if (sentinelRef.current != null) {
        observerRef.current?.unobserve(sentinelRef.current);
        sentinelRef.current = null;
      }
    },
    [handleIntersection, hasMore],
  );

  return setRef;
}
