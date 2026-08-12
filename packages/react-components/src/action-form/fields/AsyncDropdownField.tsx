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
import type {
  AsyncDropdownFieldLabels,
  DropdownFieldLabels,
  DropdownFieldProps,
} from "../FormFieldApi.js";
import { DropdownField } from "./DropdownField.js";

import styles from "./AsyncDropdownField.module.css";

export interface AsyncDropdownFieldProps<
  V,
  Multiple extends boolean = false,
> extends Omit<
  DropdownFieldProps<V, Multiple>,
  "labels" | "popupStatus" | "trailingItem"
> {
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
  /**
   * Labels for the async dropdown field.
   */
  labels?: Partial<AsyncDropdownFieldLabels>;
}

type AsyncDropdownFieldOwnedLabels = Omit<
  AsyncDropdownFieldLabels,
  keyof DropdownFieldLabels
>;

const DEFAULT_ASYNC_DROPDOWN_FIELD_LABELS: AsyncDropdownFieldOwnedLabels = {
  searchingText: "Searching…",
  loadingText: "Loading…",
};

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
  labels,
  ...dropdownProps
}: AsyncDropdownFieldProps<V, Multiple>): React.ReactElement {
  const itemCount = dropdownProps.items.length;
  const popupStatus = useMemo(() => {
    if (fetchError != null) {
      return (
        <div className={styles.osdkAsyncDropdownError} role="alert">
          {fetchError.message}
        </div>
      );
    }
    if (isSearching) {
      return (
        <div className={styles.osdkAsyncDropdownStatus}>
          {labels?.searchingText ??
            DEFAULT_ASYNC_DROPDOWN_FIELD_LABELS.searchingText}
        </div>
      );
    }
    // Show "Loading…" during the initial fetch before any data arrives,
    // so the user doesn't see a misleading "No results" message.
    if (isLoading && itemCount === 0) {
      return (
        <div className={styles.osdkAsyncDropdownStatus}>
          {labels?.loadingText ??
            DEFAULT_ASYNC_DROPDOWN_FIELD_LABELS.loadingText}
        </div>
      );
    }
    // "No results" is handled by Combobox.Empty inside DropdownField
    return null;
  }, [
    fetchError,
    isSearching,
    isLoading,
    itemCount,
    labels?.loadingText,
    labels?.searchingText,
  ]);

  const infiniteScrollRef = useInfiniteScroll({
    callback: onFetchMore,
    loadedCount: itemCount,
  });

  return (
    <DropdownField
      {...dropdownProps}
      labels={labels}
      isSearchable={true}
      popupStatus={popupStatus}
      trailingItem={
        hasMore ? (
          <InfiniteScrollSentinel
            key="sentinel"
            infiniteScrollRef={infiniteScrollRef}
          />
        ) : null
      }
      disableClientSideFiltering={dropdownProps.onQueryChange != null}
    />
  );
});

/** Skeleton placeholder that triggers the next page fetch when it scrolls into view. */
function InfiniteScrollSentinel({
  infiniteScrollRef,
}: {
  infiniteScrollRef: React.LegacyRef<HTMLDivElement>;
}): React.ReactElement {
  return (
    <div ref={infiniteScrollRef} role="presentation">
      <SkeletonBar className={styles.osdkAsyncDropdownSkeleton} />
    </div>
  );
}
