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

import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import { SCROLL_FETCH_THRESHOLD } from "../utils/constants.js";

export interface UseFetchMoreOnScrollOptions {
  /** Whether the table's current page is loading. */
  isLoading?: boolean;
  /** Loads the next page. Omit to disable pagination entirely. */
  fetchNextPage?: () => Promise<void>;
}

export interface UseFetchMoreOnScrollResult {
  /**
   * Attach to the scroll container's `onScroll`. Requests the next page once
   * the container is scrolled (vertically) to within
   * {@link SCROLL_FETCH_THRESHOLD} of the bottom.
   */
  handleScroll: (e: React.UIEvent<HTMLDivElement>) => Promise<void>;
  /** True while a next-page fetch triggered by scrolling is in flight. */
  isLoadingMore: boolean;
}

/**
 * Infinite-scroll pagination for the table's scroll container.
 *
 * Pagination is driven by **vertical** scroll only. The container scrolls on
 * both axes, and `scroll` events carry no axis information, so a horizontal
 * scroll would otherwise reach the "is near the bottom" check and paginate —
 * which is always satisfied when the rows already fit vertically. Comparing
 * `scrollTop` against the previous event's value tells us whether the vertical
 * offset actually moved.
 */
export function useFetchMoreOnScroll({
  isLoading,
  fetchNextPage,
}: UseFetchMoreOnScrollOptions): UseFetchMoreOnScrollResult {
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Using a ref to prevent duplicate fetches from rapid scroll events while a fetch is in-flight
  const fetchingRef = useRef(false);
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    if (!isLoading || fetchNextPage == null) {
      setIsLoadingMore(false);
    }
  }, [isLoading, fetchNextPage]);

  const fetchMoreOnEndReached = useCallback(
    async (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement && !fetchingRef.current && !isLoadingMore) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (
          scrollHeight - scrollTop - clientHeight < SCROLL_FETCH_THRESHOLD &&
          !isLoading &&
          fetchNextPage != null
        ) {
          fetchingRef.current = true;
          setIsLoadingMore(true);
          try {
            await fetchNextPage();
          } finally {
            fetchingRef.current = false;
          }
        }
      }
    },
    [fetchNextPage, isLoading, isLoadingMore]
  );

  const handleScroll = useCallback(
    async (e: React.UIEvent<HTMLDivElement>) => {
      const containerRefElement = e.currentTarget;
      const { scrollTop } = containerRefElement;
      const scrolledVertically = scrollTop !== lastScrollTopRef.current;
      lastScrollTopRef.current = scrollTop;
      if (!scrolledVertically) {
        return;
      }
      await fetchMoreOnEndReached(containerRefElement);
    },
    [fetchMoreOnEndReached]
  );

  return { handleScroll, isLoadingMore };
}
