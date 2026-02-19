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

import type {
  DraggableAttributes,
  DraggableSyntheticListeners,
} from "@dnd-kit/core";
import type { ObjectTypeDefinition } from "@osdk/api";
import classnames from "classnames";
import React, { memo, useCallback } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { supportsExcluding } from "../utils/filterValues.js";
import { getFilterLabel } from "../utils/getFilterLabel.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import { DragHandleIcon } from "./DragHandleIcon.js";
import { FilterInputErrorBoundary } from "./FilterInputErrorBoundary.js";
import styles from "./FilterListItem.module.css";

interface FilterListItemProps<Q extends ObjectTypeDefinition> {
  definition: FilterDefinitionUnion<Q>;
  filterKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (
    filterKey: string,
    state: FilterState,
  ) => void;
  renderInput: RenderFilterInput<Q>;
  dragHandleAttributes?: DraggableAttributes;
  dragHandleListeners?: DraggableSyntheticListeners;
  className?: string;
  style?: React.CSSProperties;
}

function FilterListItemInner<Q extends ObjectTypeDefinition>({
  definition,
  filterKey,
  filterState,
  onFilterStateChanged,
  renderInput,
  dragHandleAttributes,
  dragHandleListeners,
  className,
  style,
}: FilterListItemProps<Q>): React.ReactElement {
  const label = getFilterLabel(definition);

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
      data-filter-type={definition.type}
      data-excluding={isExcluding || undefined}
    >
      <div className={styles.itemHeader}>
        {dragHandleAttributes && (
          <button
            type="button"
            className={styles.dragHandle}
            aria-label={`Reorder ${label}`}
            {...dragHandleAttributes}
            {...dragHandleListeners}
          >
            <DragHandleIcon />
          </button>
        )}
        <span className={styles.itemLabel}>{label}</span>
        {showExcludeToggle && (
          <button
            type="button"
            className={styles.excludeToggle}
            onClick={handleToggleExclude}
            aria-pressed={isExcluding}
            aria-label={isExcluding
              ? "Switch to include mode"
              : "Switch to exclude mode"}
          >
            {isExcluding ? <ExcludeIcon /> : <IncludeIcon />}
          </button>
        )}
      </div>

      <div className={styles.itemContent}>
        <FilterInputErrorBoundary>
          {renderInput({
            definition,
            filterKey,
            filterState,
            onFilterStateChanged: handleFilterStateChanged,
          })}
        </FilterInputErrorBoundary>
      </div>
    </div>
  );
}

export const FilterListItem = memo(
  FilterListItemInner,
) as typeof FilterListItemInner;

function IncludeIcon(): React.ReactElement {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2 3h12M5 8h6M7 13h2" strokeLinecap="round" />
    </svg>
  );
}

function ExcludeIcon(): React.ReactElement {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2 3h12M5 8h6M7 13h2" strokeLinecap="round" />
      <path d="M3 14L13 2" strokeLinecap="round" />
    </svg>
  );
}
