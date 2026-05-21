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

import React, { memo } from "react";
import type { FilterState } from "../FilterListItemApi.js";

interface FilterInputExcludeRowProps {
  /**
   * Retained for backward compatibility. Keep / Exclude now lives in the
   * filter item's overflow menu rendered by `FilterListItem`, so this prop
   * is ignored.
   */
  excludeRowOpen?: boolean;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  totalValueCount?: number;
  onClearAll?: () => void;
  children: React.ReactNode;
}

/**
 * Thin pass-through wrapper retained so existing filter input call sites keep
 * compiling. Keep / Exclude, Clear all selections, and the selected-of-total
 * count have all moved into the item-level overflow menu (`ItemOverflowMenu`)
 * rendered by `FilterListItem`. This component renders only its children;
 * its remaining props are intentionally unused.
 */
function FilterInputExcludeRowInner({
  children,
}: FilterInputExcludeRowProps): React.ReactElement {
  return <>{children}</>;
}

export const FilterInputExcludeRow: React.MemoExoticComponent<
  typeof FilterInputExcludeRowInner
> = memo(FilterInputExcludeRowInner);
