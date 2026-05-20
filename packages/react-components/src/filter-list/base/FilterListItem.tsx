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
import React, { memo, useCallback, useMemo, useState } from "react";
import { ErrorBoundary } from "../../shared/ErrorBoundary.js";
import type { FilterActionsConfig, FilterState } from "../FilterListItemApi.js";
import {
  clearFilterStateSelections,
  filterHasActiveState,
  supportsExcluding,
  supportsSearch,
} from "../utils/filterValues.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import { DragHandleIcon } from "./DragHandleIcon.js";
import { RemoveIcon, SearchIcon } from "./FilterIcons.js";
import styles from "./FilterListItem.module.css";
import { FilterOverflowMenu } from "./FilterOverflowMenu.js";

function getEffectiveFilterState(
  filterState: FilterState | undefined,
): FilterState | undefined {
  if (filterState?.type === "linkedProperty") {
    return filterState.linkedFilterState;
  }
  return filterState;
}

function withInnerExcludingToggled(
  filterState: FilterState | undefined,
): FilterState | undefined {
  if (!filterState) {
    return undefined;
  }
  if (filterState.type === "linkedProperty") {
    const inner = filterState.linkedFilterState;
    return {
      ...filterState,
      linkedFilterState: {
        ...inner,
        isExcluding: !inner.isExcluding,
      },
    };
  }
  return {
    ...filterState,
    isExcluding: !filterState.isExcluding,
  };
}

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
  className?: string;
  style?: React.CSSProperties;
  actions?: FilterActionsConfig;
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
  className,
  style,
  actions,
}: FilterListItemProps<D>): React.ReactElement {
  const [searchState, setSearchState] = useState<
    { type: "closed" } | { type: "open"; query: string }
  >({ type: "closed" });

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

  const handleToggleExclude = useCallback(() => {
    const next = withInnerExcludingToggled(filterState);
    if (next) {
      onFilterStateChanged(filterKey, next);
    }
  }, [filterState, filterKey, onFilterStateChanged]);

  const handleClearSelection = useCallback(() => {
    if (filterState) {
      onFilterStateChanged(filterKey, clearFilterStateSelections(filterState));
    }
  }, [filterState, filterKey, onFilterStateChanged]);

  const searchInputRef = useCallback((element: HTMLInputElement | null) => {
    element?.focus({ preventScroll: true });
  }, []);

  const effectiveState = useMemo(
    () => getEffectiveFilterState(filterState),
    [filterState],
  );

  const supportsExcludeAction = supportsExcluding(effectiveState);
  const supportsSearchAction = supportsSearch(effectiveState);
  const hasSelection = filterHasActiveState(filterState);

  const searchEnabled = actions?.search ?? true;
  const overflowEnabled = actions?.overflow ?? true;
  const removeMode = actions?.remove ?? "menu";

  const showSearchInHeader = searchEnabled && supportsSearchAction;
  const showHeaderRemove = removeMode === true && onFilterRemoved != null;
  const showMenuRemove = removeMode === "menu" && onFilterRemoved != null;
  const isExcluding = effectiveState?.isExcluding ?? false;

  const searchOpen = searchState.type === "open";
  const searchQuery = searchState.type === "open" ? searchState.query : "";
  const searchQueryForInput = searchState.type === "open"
    ? searchState.query
    : undefined;

  return (
    <div
      className={classnames(styles.filterItem, className)}
      style={style}
      data-has-selection={hasSelection || undefined}
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
        <span
          className={styles.itemLabel}
        >
          {label}
        </span>
        {showSearchInHeader && (
          <Button
            className={styles.headerActionButton}
            onClick={handleToggleSearch}
            aria-label="Search values"
            aria-pressed={searchOpen}
          >
            <SearchIcon />
          </Button>
        )}
        {showHeaderRemove && (
          <Button
            className={styles.headerActionButton}
            onClick={handleRemove}
            aria-label={`Remove ${label} filter`}
          >
            <RemoveIcon />
          </Button>
        )}
        {overflowEnabled && (
          <FilterOverflowMenu
            supportsExcluding={supportsExcludeAction}
            isExcluding={isExcluding}
            onToggleExclude={handleToggleExclude}
            hasSelection={hasSelection}
            onClearSelection={hasSelection ? handleClearSelection : undefined}
            onRemove={showMenuRemove ? handleRemove : undefined}
          />
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
          })}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export const FilterListItem = memo(
  FilterListItemInner,
) as typeof FilterListItemInner;
