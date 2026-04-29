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
  /**
   * Ref to the virtualizer instance — parent uses for keyboard scroll-to-index.
   * Typed as `unknown` at the API boundary; internally cast to the Virtualizer type.
   */
  virtualizerRef: React.RefObject<VirtualizedItemListVirtualizer>;
}

export const VirtualizedItemList: React.NamedExoticComponent<
  VirtualizedItemListProps
> = React.memo(function VirtualizedItemListFn({
  count,
  renderItem,
  virtualizerRef,
}: VirtualizedItemListProps): React.ReactElement {
  const scrollElementRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer<HTMLDivElement, Element>({
    count,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: () => ITEM_HEIGHT_PX,
    overscan: OVERSCAN_COUNT,
    // Fallback dimensions for SSR and test environments where the scroll
    // element has no layout. Without this, the virtualizer renders 0 items
    // until the browser measures the element via ResizeObserver.
    initialRect: { width: 0, height: ITEM_HEIGHT_PX * 10 },
  });

  useImperativeHandle(
    virtualizerRef as React.RefObject<VirtualizedItemListVirtualizer | null>,
    () => virtualizer,
  );

  const handleScrollElementRef = useCallback(
    (element: HTMLDivElement | null) => {
      scrollElementRef.current = element;
      if (element != null) {
        virtualizer.measure();
      }
    },
    [virtualizer],
  );

  const totalSize = virtualizer.getTotalSize();
  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div
      role="presentation"
      ref={handleScrollElementRef}
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
            "aria-setsize": count,
            "aria-posinset": virtualItem.index + 1,
          })
        )}
      </div>
    </div>
  );
});
