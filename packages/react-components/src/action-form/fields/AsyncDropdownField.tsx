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

import React, { useCallback, useMemo, useRef } from "react";
import { SkeletonBar } from "../../base-components/skeleton/SkeletonBar.js";
import { useInfiniteScroll } from "../../shared/hooks/useInfiniteScroll.js";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { DropdownFieldProps } from "../FormFieldApi.js";
import styles from "./AsyncDropdownField.module.css";
import { DropdownField } from "./DropdownField.js";
import type {
  VirtualItemRenderProps,
  VirtualizedItemListVirtualizer,
} from "./VirtualizedItemList.js";
import { VirtualizedItemList } from "./VirtualizedItemList.js";

export interface AsyncDropdownFieldProps<V, Multiple extends boolean = false>
  extends
    Omit<
      DropdownFieldProps<V, Multiple>,
      "popupStatus" | "onItemHighlighted" | "renderItemList"
    >
{
  /** Whether the data source is currently loading. */
  isLoading: boolean;
  /** Whether the data source is currently searching. */
  isSearching: boolean;
  /** Whether more pages of data are available to fetch. */
  hasMore: boolean;

  /**
   * Called when the user scrolls to the bottom and more data is available.
   */
  onFetchMore: () => void;

  /**
   * The error from the most recent failed fetch, if any.
   */
  fetchError?: Error;
}

export const AsyncDropdownField: <V, Multiple extends boolean = false>(
  props: AsyncDropdownFieldProps<V, Multiple>,
) => React.ReactElement = typedReactMemo(function AsyncDropdownFieldFn<
  V,
  Multiple extends boolean,
>({
  isLoading,
  hasMore,
  isSearching,
  onFetchMore,
  fetchError,
  ...dropdownProps
}: AsyncDropdownFieldProps<V, Multiple>): React.ReactElement {
  const virtualizerRef = useRef<VirtualizedItemListVirtualizer | null>(null);

  // Keyboard scroll-to-index: when a combobox item is highlighted via
  // keyboard navigation, scroll the virtualizer to keep it visible.
  // Only scroll on keyboard wrap-around (first/last item) or programmatic
  // highlight — NOT on pointer hover or when the highlight is removed
  // (e.g. mouse leaves the list), to avoid jumping back to the top.
  const handleItemHighlighted = useCallback(
    (value: V | undefined, eventDetails: { reason: string; index: number }) => {
      const virtualizer = virtualizerRef.current;
      if (value == null || virtualizer == null) {
        return;
      }

      const { reason, index } = eventDetails;
      const isStart = index === 0;
      const isEnd = index === virtualizer.options.count - 1;
      const shouldScroll = reason === "none"
        || (reason === "keyboard" && (isStart || isEnd));

      if (shouldScroll) {
        queueMicrotask(() => {
          virtualizer.scrollToIndex(index, {
            align: isEnd ? "start" : "end",
          });
        });
      }
    },
    [],
  );

  // Rendered in a stable slot inside the popup so the DOM structure stays
  // stable across loading transitions and doesn't steal focus from the
  // search input. Memoized so DropdownField (wrapped in memo) can skip
  // re-renders when only unrelated props change.
  const popupStatus = useMemo(() => {
    if (fetchError != null) {
      return (
        <div className={styles.osdkAsyncDropdownError} role="alert">
          {fetchError.message}
        </div>
      );
    }
    if (isSearching) {
      return <div className={styles.osdkAsyncDropdownStatus}>Searching…</div>;
    }
    // "No results" is handled by Combobox.Empty in the virtualized path
    return null;
  }, [fetchError, isSearching]);

  // Refs store the latest renderItem and itemCount from each renderItemList
  // call, so the wrapper callback can be a stable useCallback reference.
  const delegateRenderItemRef = useRef<
    ((index: number, v: VirtualItemRenderProps) => React.ReactNode) | null
  >(null);
  const itemCountRef = useRef(0);

  const infiniteScrollRef = useInfiniteScroll({
    callback: onFetchMore,
    loadedCount: itemCountRef.current,
  });

  const renderItemWithSentinel = useCallback(
    (index: number, virtualProps: VirtualItemRenderProps): React.ReactNode => {
      if (index >= itemCountRef.current) {
        return (
          <div
            ref={infiniteScrollRef}
            role="presentation"
            style={virtualProps.style}
          >
            <SkeletonBar className={styles.osdkAsyncDropdownSkeleton} />
          </div>
        );
      }
      return delegateRenderItemRef.current?.(index, virtualProps) ?? null;
    },
    [infiniteScrollRef],
  );

  const renderItemList = useCallback(
    (
      renderItem: (
        index: number,
        virtualProps: VirtualItemRenderProps,
      ) => React.ReactNode,
      itemCount: number,
    ) => {
      delegateRenderItemRef.current = renderItem;
      itemCountRef.current = itemCount;
      const totalCount = itemCount + (hasMore ? 1 : 0);
      return (
        <VirtualizedItemList
          count={totalCount}
          renderItem={renderItemWithSentinel}
          virtualizerRef={virtualizerRef}
        />
      );
    },
    [hasMore, renderItemWithSentinel, virtualizerRef],
  );

  return (
    <DropdownField
      {...dropdownProps}
      isSearchable={true}
      popupStatus={popupStatus}
      onItemHighlighted={handleItemHighlighted}
      renderItemList={renderItemList}
      disableClientSideFiltering={dropdownProps.onQueryChange != null}
    />
  );
});
