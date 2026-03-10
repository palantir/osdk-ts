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

import React, { memo, useCallback } from "react";
import { ToggleInput } from "../base/inputs/ToggleInput.js";
import type { FilterState } from "../FilterListItemApi.js";

interface ToggleFilterInputProps {
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

function ToggleFilterInputInner({
  filterState,
  onFilterStateChanged,
}: ToggleFilterInputProps): React.ReactElement {
  const enabled = filterState?.type === "TOGGLE" ? filterState.enabled : false;

  const handleChange = useCallback(
    (enabled: boolean) => {
      onFilterStateChanged({ type: "TOGGLE", enabled });
    },
    [onFilterStateChanged],
  );

  return <ToggleInput enabled={enabled} onChange={handleChange} />;
}

export const ToggleFilterInput: React.MemoExoticComponent<
  typeof ToggleFilterInputInner
> = memo(ToggleFilterInputInner);
