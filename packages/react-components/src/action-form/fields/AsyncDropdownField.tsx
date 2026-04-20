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

import React, { useCallback, useMemo } from "react";
import { SkeletonBar } from "../../base-components/skeleton/SkeletonBar.js";
import { typedReactMemo } from "../../shared/typedMemo.js";
import type { DropdownFieldProps, FetchingState } from "../FormFieldApi.js";
import styles from "./AsyncDropdownField.module.css";
import { DropdownField } from "./DropdownField.js";

export interface AsyncDropdownFieldProps<V, Multiple extends boolean = false>
  extends Omit<DropdownFieldProps<V, Multiple>, "children">
{
  /**
   * Current state of the async data fetch.
   */
  fetchingState: FetchingState;

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
  fetchingState,
  onFetchMore,
  fetchError,
  ...dropdownProps
}: AsyncDropdownFieldProps<V, Multiple>): React.ReactElement {
  const handlePopupScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      if (fetchingState !== "more_available" || onFetchMore == null) {
        return;
      }
      const target = event.currentTarget;
      // Trigger fetch when scrolled within 1px of the bottom
      if (
        Math.ceil(target.scrollTop + target.clientHeight) >= target.scrollHeight
      ) {
        onFetchMore();
      }
    },
    [fetchingState, onFetchMore],
  );

  const footer = useMemo(() => {
    switch (fetchingState) {
      case "loading":
      case "more_available":
        return (
          <div className={styles.osdkAsyncDropdownFooter}>
            <SkeletonBar />
          </div>
        );
      case "error":
        return (
          <div className={styles.osdkAsyncDropdownError} role="alert">
            {fetchError?.message ?? "Failed to load"}
          </div>
        );
      case "all_fetched":
        return null;
    }
  }, [fetchingState, fetchError]);

  return (
    <DropdownField
      {...dropdownProps}
      isSearchable={true}
      filter={null}
      onPopupScroll={handlePopupScroll}
    >
      {footer}
    </DropdownField>
  );
});
