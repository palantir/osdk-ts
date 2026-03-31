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
import { MultiDateInput } from "../base/inputs/MultiDateInput.js";
import type { FilterState } from "../FilterListItemApi.js";

interface MultiDateFilterInputProps {
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function MultiDateFilterInputInner({
  filterState,
  onFilterStateChanged,
}: MultiDateFilterInputProps): React.ReactElement {
  const selectedDates = useMemo(
    () =>
      filterState?.type === "SELECT"
        ? filterState.selectedValues.filter((v): v is Date => v instanceof Date)
        : [],
    [filterState],
  );
  const isExcluding = filterState?.isExcluding ?? false;

  const handleChange = useCallback(
    (selectedDates: Date[]) => {
      onFilterStateChanged({
        type: "SELECT",
        selectedValues: selectedDates,
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  return (
    <MultiDateInput selectedDates={selectedDates} onChange={handleChange} />
  );
}

export const MultiDateFilterInput: React.MemoExoticComponent<
  typeof MultiDateFilterInputInner
> = memo(MultiDateFilterInputInner);
