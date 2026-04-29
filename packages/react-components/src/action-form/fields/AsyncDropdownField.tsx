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
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { DropdownFieldProps } from "../FormFieldApi.js";
import styles from "./AsyncDropdownField.module.css";
import { DropdownField } from "./DropdownField.js";
import type { VirtualItemRenderProps ,
  VirtualizedItemList,
  type VirtualizedItemListVirtualizer,
} from "./VirtualizedItemList.js";

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
  hasMore?: boolean;

  /**
   * Called when the user scrolls to the bottom and more data is available.
   */
  onFetchMore?: () => void;

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

  // Build status as a React element. This is rendered in a stable slot
  // inside the popup so the popup's DOM structure stays stable across
  // loading transitions and doesn't steal focus from the search input.
  let popupStatus: React.ReactNode = null;

  if (fetchError != null) {
    popupStatus = (
      <div className={styles.osdkAsyncDropdownError} role="alert">
        {fetchError.message}
      </div>
    );
  } else if (isSearching) {
    popupStatus = (
      <div className={styles.osdkAsyncDropdownStatus}>Searching…</div>
    );
  }
  // "No results" is handled by Combobox.Empty in the virtualized path

  const footer = useMemo(
    () =>
      hasMore
        ? (
          <div>
            <SkeletonBar className={styles.osdkAsyncDropdownSkeleton} />
          </div>
        )
        : null,
    [hasMore],
  );

  const renderItemList = useCallback(
    (
      renderItem: (
        index: number,
        virtualProps: VirtualItemRenderProps,
      ) => React.ReactNode,
      itemCount: number,
    ) => (
      <VirtualizedItemList
        count={itemCount}
        renderItem={renderItem}
        hasMore={hasMore}
        onFetchMore={onFetchMore}
        virtualizerRef={virtualizerRef}
        footer={footer}
      />
    ),
    [hasMore, onFetchMore, footer],
  );

  return (
    <DropdownField
      {...dropdownProps}
      isSearchable={true}
      disableClientSideFiltering={dropdownProps.onQueryChange != null}
      popupStatus={popupStatus}
      onItemHighlighted={handleItemHighlighted}
      renderItemList={renderItemList}
    />
  );
});
