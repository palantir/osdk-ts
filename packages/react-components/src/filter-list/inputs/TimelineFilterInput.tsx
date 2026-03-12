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
import { TimelineInput } from "../base/inputs/TimelineInput.js";
import type { FilterState } from "../FilterListItemApi.js";

interface TimelineFilterInputProps {
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function TimelineFilterInputInner({
  filterState,
  onFilterStateChanged,
}: TimelineFilterInputProps): React.ReactElement {
  const { startDate, endDate } = useMemo(
    () =>
      filterState?.type === "TIMELINE"
        ? { startDate: filterState.startDate, endDate: filterState.endDate }
        : { startDate: undefined, endDate: undefined },
    [filterState],
  );
  const isExcluding = filterState?.isExcluding ?? false;

  const handleChange = useCallback(
    (startDate: Date | undefined, endDate: Date | undefined) => {
      onFilterStateChanged({
        type: "TIMELINE",
        startDate,
        endDate,
        isExcluding,
      });
    },
    [onFilterStateChanged, isExcluding],
  );

  return (
    <TimelineInput
      startDate={startDate}
      endDate={endDate}
      onChange={handleChange}
    />
  );
}

export const TimelineFilterInput: React.MemoExoticComponent<
  typeof TimelineFilterInputInner
> = memo(TimelineFilterInputInner);
