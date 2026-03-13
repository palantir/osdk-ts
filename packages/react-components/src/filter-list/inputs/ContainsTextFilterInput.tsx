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
import { ContainsTextInput } from "../base/inputs/ContainsTextInput.js";
import type { FilterState } from "../FilterListItemApi.js";

interface ContainsTextFilterInputProps {
  propertyKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function ContainsTextFilterInputInner({
  propertyKey,
  filterState,
  onFilterStateChanged,
}: ContainsTextFilterInputProps): React.ReactElement {
  const value = useMemo(
    () =>
      filterState?.type === "CONTAINS_TEXT"
        ? filterState.value
        : undefined,
    [filterState],
  );

  const handleChange = useCallback(
    (value: string | undefined) => {
      onFilterStateChanged({ type: "CONTAINS_TEXT", value });
    },
    [onFilterStateChanged],
  );

  return (
    <ContainsTextInput
      value={value}
      onChange={handleChange}
      placeholder={`Search ${propertyKey}...`}
    />
  );
}

export const ContainsTextFilterInput: React.MemoExoticComponent<
  typeof ContainsTextFilterInputInner
> = memo(ContainsTextFilterInputInner);
