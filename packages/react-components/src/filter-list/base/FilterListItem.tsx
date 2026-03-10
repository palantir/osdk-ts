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

import { Button } from "@base-ui/react/button";
import type {
  DraggableAttributes,
  DraggableSyntheticListeners,
} from "@dnd-kit/core";
import classnames from "classnames";
import React, { memo, useCallback } from "react";
import { ErrorBoundary } from "../../shared/ErrorBoundary.js";
import type { FilterState } from "../FilterListItemApi.js";
import { supportsExcluding } from "../utils/filterValues.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import { DragHandleIcon } from "./DragHandleIcon.js";
import { ExcludeIcon, IncludeIcon } from "./FilterIcons.js";
import styles from "./FilterListItem.module.css";

interface FilterListItemProps<D> {
  definition: D;
  filterKey: string;
  label: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (
    filterKey: string,
    state: FilterState,
  ) => void;
  renderInput: RenderFilterInput<D>;
  dragHandleAttributes?: DraggableAttributes;
  dragHandleListeners?: DraggableSyntheticListeners;
  className?: string;
  style?: React.CSSProperties;
}

function FilterListItemInner<D>({
  definition,
  filterKey,
  label,
  filterState,
  onFilterStateChanged,
  renderInput,
  dragHandleAttributes,
  dragHandleListeners,
  className,
  style,
}: FilterListItemProps<D>): React.ReactElement {
  const handleFilterStateChanged = useCallback(
    (newState: FilterState) => {
      onFilterStateChanged(filterKey, newState);
    },
    [filterKey, onFilterStateChanged],
  );

  const handleToggleExclude = useCallback(
    () => {
      if (filterState) {
        onFilterStateChanged(filterKey, {
          ...filterState,
          isExcluding: !filterState.isExcluding,
        });
      }
    },
    [filterKey, filterState, onFilterStateChanged],
  );

  const isExcluding = filterState?.isExcluding ?? false;
  const showExcludeToggle = supportsExcluding(filterState);

  return (
    <div
      className={classnames(styles.filterItem, className)}
      style={style}
      data-excluding={isExcluding}
    >
      <div className={styles.itemHeader}>
        {dragHandleAttributes && (
          <Button
            className={styles.dragHandle}
            aria-label={`Reorder ${label}`}
            {...dragHandleAttributes}
            {...dragHandleListeners}
          >
            <DragHandleIcon />
          </Button>
        )}
        <span className={styles.itemLabel}>{label}</span>
        {showExcludeToggle && (
          <Button
            className={styles.excludeToggle}
            onClick={handleToggleExclude}
            aria-pressed={isExcluding}
            aria-label={isExcluding
              ? "Switch to include mode"
              : "Switch to exclude mode"}
          >
            {isExcluding ? <ExcludeIcon /> : <IncludeIcon />}
          </Button>
        )}
      </div>

      <div className={styles.itemContent}>
        <ErrorBoundary errorMessage="Error loading filter">
          {renderInput({
            definition,
            filterKey,
            filterState,
            onFilterStateChanged: handleFilterStateChanged,
          })}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export const FilterListItem = memo(
  FilterListItemInner,
) as typeof FilterListItemInner;
