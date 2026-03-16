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
import { Input } from "@base-ui/react/input";
import type {
  DraggableAttributes,
  DraggableSyntheticListeners,
} from "@dnd-kit/core";
import classnames from "classnames";
import React, { memo, useCallback, useState } from "react";
import { ErrorBoundary } from "../../shared/ErrorBoundary.js";
import type { FilterState } from "../FilterListItemApi.js";
import {
  clearFilterState,
  filterHasActiveState,
  supportsExcluding,
} from "../utils/filterValues.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import { DragHandleIcon } from "./DragHandleIcon.js";
import { ExcludeDropdown } from "./ExcludeDropdown.js";
import { OverflowMenuIcon, RemoveIcon, SearchIcon } from "./FilterIcons.js";
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
  onFilterRemoved?: (filterKey: string) => void;
  renderInput: RenderFilterInput<D>;
  dragHandleAttributes?: DraggableAttributes;
  dragHandleListeners?: DraggableSyntheticListeners;
  selectedValueCount?: number;
  totalValueCount?: number;
  className?: string;
  style?: React.CSSProperties;
}

function FilterListItemInner<D>({
  definition,
  filterKey,
  label,
  filterState,
  onFilterStateChanged,
  onFilterRemoved,
  renderInput,
  dragHandleAttributes,
  dragHandleListeners,
  selectedValueCount,
  totalValueCount,
  className,
  style,
}: FilterListItemProps<D>): React.ReactElement {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [excludeRowOpen, setExcludeRowOpen] = useState(false);

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

  const handleClearFilter = useCallback(
    () => {
      if (filterState) {
        setSearchOpen(false);
        setSearchQuery("");
        const cleared = clearFilterState(filterState);
        if (cleared) {
          onFilterStateChanged(filterKey, cleared);
        }
      }
    },
    [filterKey, filterState, onFilterStateChanged],
  );

  const handleToggleSearch = useCallback(() => {
    setSearchOpen((prev) => !prev);
    setSearchQuery("");
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [],
  );

  const handleSearchClear = useCallback(() => {
    setSearchQuery("");
  }, []);

  const handleToggleExcludeRow = useCallback(() => {
    setExcludeRowOpen((prev) => !prev);
  }, []);

  const isExcluding = filterState?.isExcluding ?? false;
  const showExcludeDropdown = supportsExcluding(filterState);
  const hasActive = filterHasActiveState(filterState);

  const searchQueryForInput = searchOpen ? searchQuery : undefined;

  return (
    <div
      className={classnames(styles.filterItem, className)}
      style={style}
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
        <Button
          className={styles.headerActionButton}
          onClick={handleToggleSearch}
          aria-label="Search values"
          aria-pressed={searchOpen}
        >
          <SearchIcon />
        </Button>
        <Button
          className={styles.headerActionButton}
          onClick={handleToggleExcludeRow}
          aria-label="More actions"
          aria-pressed={excludeRowOpen}
        >
          <OverflowMenuIcon />
        </Button>
      </div>

      {searchOpen && (
        <div className={styles.searchRow}>
          <Input
            type="text"
            className={styles.searchInput}
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search property values..."
            aria-label="Search property values"
            autoFocus
          />
          {searchQuery && (
            <Button
              type="button"
              className={styles.searchClearButton}
              onClick={handleSearchClear}
              aria-label="Clear search"
            >
              <RemoveIcon />
            </Button>
          )}
        </div>
      )}

      {excludeRowOpen && (
        <div className={styles.excludeRow}>
          {showExcludeDropdown && (
            <ExcludeDropdown
              isExcluding={isExcluding}
              onToggleExclude={handleToggleExclude}
              selectedValueCount={selectedValueCount}
              totalValueCount={totalValueCount}
            />
          )}
          <Button
            className={styles.clearAllButton}
            onClick={handleClearFilter}
            disabled={!hasActive}
          >
            Clear all
          </Button>
        </div>
      )}

      <div className={styles.itemContent}>
        <ErrorBoundary errorMessage="Error loading filter">
          {renderInput({
            definition,
            filterKey,
            filterState,
            onFilterStateChanged: handleFilterStateChanged,
            searchQuery: searchQueryForInput,
          })}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export const FilterListItem = memo(
  FilterListItemInner,
) as typeof FilterListItemInner;
