/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import React, { memo, useCallback, useMemo } from "react";
import { SingleDateInput } from "../base/inputs/SingleDateInput.js";
import type { FilterState } from "../FilterListItemApi.js";

interface SingleDateFilterInputProps {
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function SingleDateFilterInputInner({
  filterState,
  onFilterStateChanged,
}: SingleDateFilterInputProps): React.ReactElement {
  const selectedDate = useMemo(
    () =>
      filterState?.type === "SELECT"
        ? filterState.selectedValues[0] instanceof Date
          ? filterState.selectedValues[0]
          : undefined
        : undefined,
    [filterState],
  );
  const isExcluding = filterState?.isExcluding ?? false;

  const handleChange = useCallback(
    (selectedDate: Date | undefined) => {
      onFilterStateChanged({
        type: "SELECT",
        selectedValues: selectedDate !== undefined ? [selectedDate] : [],
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  return (
    <SingleDateInput selectedDate={selectedDate} onChange={handleChange} />
  );
}

export const SingleDateFilterInput: React.MemoExoticComponent<
  typeof SingleDateFilterInputInner
> = memo(SingleDateFilterInputInner);
