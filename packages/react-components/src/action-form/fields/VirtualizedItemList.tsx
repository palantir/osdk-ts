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

import { useVirtualizer } from "@tanstack/react-virtual";
import React, { useCallback, useImperativeHandle, useRef } from "react";
import styles from "./VirtualizedItemList.module.css";

/** Estimated height of each combobox item in pixels. */
const ITEM_HEIGHT_PX = 32;
/** Number of extra items rendered above/below the visible area. */
const OVERSCAN_COUNT = 20;
/** Trigger fetch-more when within this distance (px) of the scroll bottom. */
const SCROLL_THRESHOLD_PX = 100;

/** Virtualizer instance type, exported for consumers that need the ref type. */
export type VirtualizedItemListVirtualizer = ReturnType<
  typeof useVirtualizer<HTMLDivElement, Element>
>;

/** Props that VirtualizedItemList passes to renderItem so they end up on the Combobox.Item. */
export interface VirtualItemRenderProps {
  style: React.CSSProperties;
  "data-index": number;
  "aria-setsize": number;
  "aria-posinset": number;
}

interface VirtualizedItemListProps {
  /** Total number of items in the list. */
  count: number;
  /**
   * Renders a single item by index. The second argument contains positioning
   * and ARIA props that MUST be spread onto the root Combobox.Item element
   * so Base UI can manage keyboard navigation and screen readers work correctly.
   */
  renderItem: (
    index: number,
    virtualProps: VirtualItemRenderProps,
  ) => React.ReactNode;
  /** Whether more data is available to load. Controls aria-setsize and fetch detection. */
  hasMore?: boolean;
  /** Called when the user scrolls near the end and hasMore is true. */
  onFetchMore?: () => void;
  /**
   * Ref to the virtualizer instance — parent uses for keyboard scroll-to-index.
   * Typed as `unknown` at the API boundary; internally cast to the Virtualizer type.
   */
  virtualizerRef: React.RefObject<unknown>;
  /** Content rendered after the virtual items inside the scroll area (e.g. loading skeleton). */
  footer?: React.ReactNode;
}

export const VirtualizedItemList = React.memo(
  function VirtualizedItemListFn({
    count,
    renderItem,
    hasMore,
    onFetchMore,
    virtualizerRef,
    footer,
  }: VirtualizedItemListProps): React.ReactElement {
    const scrollElementRef = useRef<HTMLDivElement | null>(null);
    const onFetchMoreRef = useRef(onFetchMore);
    onFetchMoreRef.current = onFetchMore;

    // Guard to prevent duplicate fetch calls during a single scroll burst.
    // Reset when item count changes (new data arrived).
    const loadingRef = useRef(false);
    const prevCountRef = useRef(count);
    if (prevCountRef.current !== count) {
      prevCountRef.current = count;
      loadingRef.current = false;
    }

    const hasMoreRef = useRef(hasMore);
    hasMoreRef.current = hasMore;

    const tryFetchMore = useCallback(
      (scrollElement: HTMLElement) => {
        if (!hasMoreRef.current || loadingRef.current) {
          return;
        }
        const { scrollHeight, scrollTop, clientHeight } = scrollElement;
        // Also triggers when content fits entirely (scrollHeight <= clientHeight)
        if (
          scrollHeight - scrollTop - clientHeight < SCROLL_THRESHOLD_PX
          || scrollHeight <= clientHeight
        ) {
          loadingRef.current = true;
          onFetchMoreRef.current?.();
        }
      },
      [],
    );

    const virtualizer = useVirtualizer<HTMLDivElement, Element>({
      count,
      getScrollElement: () => scrollElementRef.current,
      estimateSize: () => ITEM_HEIGHT_PX,
      overscan: OVERSCAN_COUNT,
      // Fallback dimensions for SSR and test environments where the scroll
      // element has no layout. Without this, the virtualizer renders 0 items
      // until the browser measures the element via ResizeObserver.
      initialRect: { width: 0, height: ITEM_HEIGHT_PX * 10 },
      onChange: (instance) => {
        // Schedule after layout so scroll dimensions reflect the updated DOM.
        // Without this, scrollHeight is stale on count changes and the
        // short-list check (scrollHeight <= clientHeight) doesn't re-trigger.
        requestAnimationFrame(() => {
          const el = instance.scrollElement;
          if (el != null) {
            tryFetchMore(el);
          }
        });
      },
    });

    useImperativeHandle(
      virtualizerRef as React.RefObject<VirtualizedItemListVirtualizer | null>,
      () => virtualizer,
    );

    // Ref callback for the scroll container. On mount, measures the virtualizer
    // and checks if the list fits without a scrollbar (triggers fetch for short lists).
    const handleScrollElementRef = useCallback(
      (element: HTMLDivElement | null) => {
        scrollElementRef.current = element;
        if (element != null) {
          virtualizer.measure();
          // Check synchronously — if scrollHeight <= clientHeight (content fits
          // without a scrollbar, or dimensions are 0 during SSR/test), trigger
          // fetch so short lists don't stall at the first page.
          tryFetchMore(element);
        }
      },
      [virtualizer, tryFetchMore],
    );

    const handleScroll = useCallback(
      (event: React.UIEvent<HTMLDivElement>) => {
        tryFetchMore(event.currentTarget);
      },
      [tryFetchMore],
    );

    const totalSize = virtualizer.getTotalSize();
    const virtualItems = virtualizer.getVirtualItems();

    return (
      <div
        role="presentation"
        ref={handleScrollElementRef}
        onScroll={handleScroll}
        className={styles.osdkVirtualizedScroller}
      >
        <div
          role="presentation"
          className={styles.osdkVirtualizedSpacer}
          style={{ height: totalSize }}
        >
          {virtualItems.map((virtualItem) =>
            renderItem(virtualItem.index, {
              style: {
                position: "absolute",
                insetBlockStart: 0,
                insetInlineStart: 0,
                inlineSize: "100%",
                blockSize: virtualItem.size,
                transform: `translateY(${virtualItem.start}px)`,
              },
              "data-index": virtualItem.index,
              "aria-setsize": hasMore ? -1 : count,
              "aria-posinset": virtualItem.index + 1,
            })
          )}
        </div>
        {footer}
      </div>
    );
  },
);
