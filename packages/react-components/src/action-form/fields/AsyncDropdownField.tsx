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

import React, { useCallback } from "react";
import { SkeletonBar } from "../../base-components/skeleton/SkeletonBar.js";
import { useInfiniteScroll } from "../../shared/hooks/useInfiniteScroll.js";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type {
  DropdownFieldProps,
  ItemListRendererProps,
} from "../FormFieldApi.js";
import styles from "./AsyncDropdownField.module.css";
import { DropdownField } from "./DropdownField.js";

export interface AsyncDropdownFieldProps<V, Multiple extends boolean = false>
  extends Omit<DropdownFieldProps<V, Multiple>, "itemListRenderer">
{
  /** Whether the data source is currently loading. */
  isLoading: boolean;

  /** Whether more pages of data are available to fetch. */
  hasMore: boolean;

  /**
   * Called when the user scrolls to the bottom and more data is available.
   */
  onFetchMore?: () => void;

  /**
   * The error from the most recent failed fetch, if any.
   */
  fetchError?: Error;

  /**
   * Current search text entered by the user.
   */
  searchQuery?: string;
}

export const AsyncDropdownField: <V, Multiple extends boolean = false>(
  props: AsyncDropdownFieldProps<V, Multiple>,
) => React.ReactElement = typedReactMemo(function AsyncDropdownFieldFn<
  V,
  Multiple extends boolean,
>({
  isLoading,
  hasMore,
  onFetchMore,
  fetchError,
  searchQuery,
  ...dropdownProps
}: AsyncDropdownFieldProps<V, Multiple>): React.ReactElement {
  const sentinelRef = useInfiniteScroll({
    onLoadMore: onFetchMore,
    loadedCount: dropdownProps.items.length,
    hasMore,
  });

  const itemListRenderer = useCallback(
    ({ itemList, renderEmpty, itemCount }: ItemListRendererProps) => {
      // Empty list: show a single message for the current state
      if (itemCount === 0) {
        const isSearching = searchQuery != null && searchQuery.trim() !== "";
        if (fetchError != null) {
          return renderEmpty(fetchError.message);
        }
        if (isLoading) {
          return renderEmpty(isSearching ? "Searching\u2026" : "Loading\u2026");
        }
        if (isSearching) {
          return renderEmpty(<>No matches for {searchQuery.trim()}</>);
        }
        return renderEmpty("No results");
      }

      // Has items: render the list with an optional footer
      return (
        <>
          {renderEmpty("No results")}
          {itemList}
          {fetchError != null
            ? (
              <div className={styles.osdkAsyncDropdownError} role="alert">
                {fetchError.message}
              </div>
            )
            : hasMore
            ? (
              <div ref={sentinelRef}>
                {
                  /* 60% width avoids a jarring full-width flash; 12px matches
                  the line height of option text for a natural shimmer. */
                }
                <SkeletonBar width="60%" height={12} />
              </div>
            )
            : null}
        </>
      );
    },
    [isLoading, fetchError, hasMore, sentinelRef, searchQuery],
  );

  return (
    <DropdownField
      {...dropdownProps}
      isSearchable={true}
      disableClientSideFiltering={dropdownProps.onQueryChange != null}
      itemListRenderer={itemListRenderer}
    />
  );
});
