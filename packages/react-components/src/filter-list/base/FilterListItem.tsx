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
import { supportsExcluding, supportsSearch } from "../utils/filterValues.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import { DragHandleIcon } from "./DragHandleIcon.js";
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
  showDragHandle?: boolean;
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
  showDragHandle,
  className,
  style,
}: FilterListItemProps<D>): React.ReactElement {
  const [searchState, setSearchState] = useState<
    { type: "closed" } | { type: "open"; query: string }
  >({ type: "closed" });
  const [excludeRowOpen, setExcludeRowOpen] = useState(false);

  const handleFilterStateChanged = useCallback(
    (newState: FilterState) => {
      onFilterStateChanged(filterKey, newState);
    },
    [filterKey, onFilterStateChanged],
  );

  const handleToggleSearch = useCallback(() => {
    setSearchState((prev) =>
      prev.type === "closed" ? { type: "open", query: "" } : { type: "closed" }
    );
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchState({ type: "open", query: e.target.value });
    },
    [],
  );

  const handleSearchClear = useCallback(() => {
    setSearchState({ type: "open", query: "" });
  }, []);

  const handleRemove = useCallback(() => {
    onFilterRemoved?.(filterKey);
  }, [filterKey, onFilterRemoved]);

  const handleToggleExcludeRow = useCallback(() => {
    setExcludeRowOpen((prev) => !prev);
  }, []);

  const searchInputRef = useCallback((element: HTMLInputElement | null) => {
    element?.focus({ preventScroll: true });
  }, []);

  const showExcludeDropdown = supportsExcluding(filterState);
  const showSearch = supportsSearch(filterState);
  const hasOverflowActions = showExcludeDropdown;

  const searchOpen = searchState.type === "open";
  const searchQuery = searchState.type === "open" ? searchState.query : "";
  const searchQueryForInput = searchState.type === "open"
    ? searchState.query
    : undefined;

  return (
    <div
      className={classnames(styles.filterItem, className)}
      style={style}
    >
      <div className={styles.itemHeader}>
        {dragHandleAttributes
          ? (
            <Button
              className={styles.dragHandle}
              aria-label={`Reorder ${label}`}
              {...dragHandleAttributes}
              {...dragHandleListeners}
            >
              <DragHandleIcon />
            </Button>
          )
          : showDragHandle && (
            <span className={styles.dragHandle} aria-hidden="true">
              <DragHandleIcon />
            </span>
          )}
        <span
          className={styles.itemLabel}
          data-excluding={filterState?.isExcluding || undefined}
        >
          {label}
        </span>
        {showSearch && (
          <Button
            className={styles.headerActionButton}
            onClick={handleToggleSearch}
            aria-label="Search values"
            aria-pressed={searchOpen}
          >
            <SearchIcon />
          </Button>
        )}
        {onFilterRemoved && (
          <Button
            className={styles.headerActionButton}
            onClick={handleRemove}
            aria-label={`Remove ${label} filter`}
          >
            <RemoveIcon />
          </Button>
        )}
        {hasOverflowActions && (
          <Button
            className={styles.headerActionButton}
            onClick={handleToggleExcludeRow}
            aria-label="More actions"
            aria-pressed={excludeRowOpen}
          >
            <OverflowMenuIcon />
          </Button>
        )}
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
            ref={searchInputRef}
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

      <div className={styles.itemContent}>
        <ErrorBoundary errorMessage="Error loading filter">
          {renderInput({
            definition,
            filterKey,
            filterState,
            onFilterStateChanged: handleFilterStateChanged,
            searchQuery: searchQueryForInput,
            excludeRowOpen,
          })}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export const FilterListItem = memo(
  FilterListItemInner,
) as typeof FilterListItemInner;
