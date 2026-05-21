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
import type {
  FilterControlsConfig,
  FilterState,
} from "../FilterListItemApi.js";
import {
  clearFilterState,
  filterHasActiveState,
  getEffectiveFilterState,
  supportsExcluding,
  supportsSearch,
} from "../utils/filterValues.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import { DragHandleIcon } from "./DragHandleIcon.js";
import { RemoveIcon, SearchIcon } from "./FilterIcons.js";
import styles from "./FilterListItem.module.css";
import { ItemOverflowMenu } from "./ItemOverflowMenu.js";

type SearchPlacement = "header-start" | "header-end" | "menu" | "hidden";

/**
 * Resolves where the search affordance should appear given the effective
 * (post-unwrap) filter state and the per-definition opt-out flags.
 * `controls.search` takes precedence over `searchField` when both are set.
 */
function resolveSearchPlacement(
  effectiveState: FilterState | undefined,
  searchField: boolean | undefined,
  controls: FilterControlsConfig | undefined,
): SearchPlacement {
  if (!supportsSearch(effectiveState)) {
    return "hidden";
  }
  const search = controls?.search;
  if (search === false) {
    return "hidden";
  }
  if (
    search === "header-start" || search === "header-end" || search === "menu"
  ) {
    return search;
  }
  // search is undefined or true
  if (search === undefined && searchField === false) {
    return "hidden";
  }
  return controls?.placement ?? "header-end";
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
  searchField?: boolean;
  controls?: FilterControlsConfig;
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
  onFilterRemoved,
  renderInput,
  searchField,
  controls,
  dragHandleAttributes,
  dragHandleListeners,
  className,
  style,
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

  const effectiveState = useMemo(
    () => getEffectiveFilterState(filterState),
    [filterState],
  );

  const isExcluding = effectiveState?.isExcluding ?? false;

  const handleToggleExclude = useCallback(() => {
    if (filterState == null) {
      return;
    }
    if (filterState.type === "linkedProperty") {
      const inner = filterState.linkedFilterState;
      onFilterStateChanged(filterKey, {
        type: "linkedProperty",
        linkedFilterState: { ...inner, isExcluding: !inner.isExcluding },
      });
      return;
    }
    onFilterStateChanged(filterKey, {
      ...filterState,
      isExcluding: !filterState.isExcluding,
    });
  }, [filterKey, filterState, onFilterStateChanged]);

  const handleClearAll = useCallback(() => {
    const cleared = clearFilterState(filterState);
    if (cleared != null) {
      onFilterStateChanged(filterKey, cleared);
    }
  }, [filterKey, filterState, onFilterStateChanged]);

  const searchInputRef = useCallback((element: HTMLInputElement | null) => {
    element?.focus({ preventScroll: true });
  }, []);

  const searchPlacement = resolveSearchPlacement(
    effectiveState,
    searchField,
    controls,
  );
  const showOverflow = controls?.overflow !== false;

  const showKeepExclude = showOverflow && supportsExcluding(effectiveState);
  const hasSelection = filterHasActiveState(filterState);
  const showClearAll = showOverflow && hasSelection
    && clearFilterState(filterState) != null;
  const showRemove = showOverflow
    && onFilterRemoved != null
    && controls?.remove !== false;
  const showSearchInMenu = showOverflow && searchPlacement === "menu";

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
        {searchPlacement === "header-start" && (
          <Button
            className={classnames(
              styles.headerActionButton,
              styles.headerActionButtonStart,
            )}
            onClick={handleToggleSearch}
            aria-label="Search values"
            aria-pressed={searchOpen}
          >
            <SearchIcon />
          </Button>
        )}
        <span
          className={styles.itemLabel}
        >
          {label}
        </span>
        {searchPlacement === "header-end" && (
          <Button
            className={styles.headerActionButton}
            onClick={handleToggleSearch}
            aria-label="Search values"
            aria-pressed={searchOpen}
          >
            <SearchIcon />
          </Button>
        )}
        <ItemOverflowMenu
          triggerClassName={styles.headerActionButton}
          triggerAriaLabel="More actions"
          filterLabel={label}
          showSearchInMenu={showSearchInMenu}
          onSearchInMenu={handleToggleSearch}
          showKeepExclude={showKeepExclude}
          isExcluding={isExcluding}
          onToggleExclude={handleToggleExclude}
          showClearAll={showClearAll}
          onClearAll={handleClearAll}
          showRemove={showRemove}
          onRemove={handleRemove}
        />
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
            excludeRowOpen: false,
          })}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export const FilterListItem = memo(
  FilterListItemInner,
) as typeof FilterListItemInner;
