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

import type { RefCallback } from "react";
import { useCallback, useRef } from "react";

import { useInfiniteScroll } from "../../shared/hooks/useInfiniteScroll.js";

export interface UseFetchMoreSentinelOptions {
  /** Whether the table's current page is loading. */
  isLoading?: boolean;
  /**
   * Loads the next page. `undefined` means there is nothing more to load, so
   * no sentinel is rendered.
   */
  fetchNextPage?: () => Promise<void>;
  /** Number of rows currently loaded. Re-arms the sentinel as rows arrive. */
  loadedCount: number;
}

export interface UseFetchMoreSentinelResult {
  /**
   * Attach to the sentinel row at the bottom of the table body. Scrolling it
   * into view loads the next page.
   */
  sentinelRef: RefCallback<HTMLTableRowElement>;
  /**
   * Whether there is another page to load, and therefore whether the sentinel
   * row should be rendered at all.
   */
  hasMore: boolean;
}

/**
 * Infinite-scroll pagination for the table, driven by the visibility of a
 * sentinel row rather than by scroll offsets.
 *
 * Visibility is the right signal because `scroll` events carry no axis
 * information: a handler that measured "is the container near its bottom" also
 * fired on horizontal scrolls, and that measurement is trivially satisfied
 * whenever the rows already fit vertically, so scrolling sideways paginated.
 * An `IntersectionObserver` has no axis to confuse — the sentinel only becomes
 * visible through vertical movement.
 *
 * `threshold: 0` is required here: the sentinel spans the full table width, so
 * in a horizontally scrollable table it is only ever partially exposed and
 * would never reach a non-zero visibility ratio.
 */
export function useFetchMoreSentinel({
  isLoading,
  fetchNextPage,
  loadedCount,
}: UseFetchMoreSentinelOptions): UseFetchMoreSentinelResult {
  // Guards against duplicate fetches while one is already in flight; the
  // observer can report visibility again before the page resolves.
  const fetchingRef = useRef(false);

  const onFetchMore = useCallback(() => {
    if (fetchingRef.current || isLoading || fetchNextPage == null) {
      return;
    }
    fetchingRef.current = true;
    void fetchNextPage().finally(() => {
      fetchingRef.current = false;
    });
  }, [fetchNextPage, isLoading]);

  const sentinelRef = useInfiniteScroll<HTMLTableRowElement>({
    callback: onFetchMore,
    loadedCount,
    threshold: 0,
  });

  return { sentinelRef, hasMore: fetchNextPage != null };
}
