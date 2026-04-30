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

import React, { useMemo } from "react";
import { SkeletonBar } from "../../base-components/skeleton/SkeletonBar.js";
import { useInfiniteScroll } from "../../shared/hooks/useInfiniteScroll.js";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { DropdownFieldProps } from "../FormFieldApi.js";
import styles from "./AsyncDropdownField.module.css";
import { DropdownField } from "./DropdownField.js";

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
  const itemCount = dropdownProps.items.length;
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
    // Show "Loading…" during the initial fetch before any data arrives,
    // so the user doesn't see a misleading "No results" message.
    if (isLoading && itemCount === 0) {
      return <div className={styles.osdkAsyncDropdownStatus}>Loading…</div>;
    }
    // "No results" is handled by Combobox.Empty in the virtualized path
    return null;
  }, [fetchError, isSearching, isLoading, itemCount]);

  const infiniteScrollRef = useInfiniteScroll({
    callback: onFetchMore,
    loadedCount: itemCount,
  });

  return (
    <DropdownField
      {...dropdownProps}
      isSearchable={true}
      popupStatus={popupStatus}
      trailingItem={hasMore
        ? (
          <div key="sentinel" ref={infiniteScrollRef} role="presentation">
            <SkeletonBar className={styles.osdkAsyncDropdownSkeleton} />
          </div>
        )
        : null}
      disableClientSideFiltering={dropdownProps.onQueryChange != null}
    />
  );
});
