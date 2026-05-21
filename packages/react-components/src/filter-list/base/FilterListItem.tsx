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
  toggleIsExcluding,
} from "../utils/filterValues.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import { DragHandleIcon } from "./DragHandleIcon.js";
import { RemoveIcon } from "./FilterIcons.js";
import styles from "./FilterListItem.module.css";
import { HeaderSearchButton } from "./HeaderSearchButton.js";
import { ItemOverflowMenu } from "./ItemOverflowMenu.js";

type SearchPlacement = "header-start" | "header-end" | "menu" | "hidden";
type OverflowPlacement = "header-start" | "header-end" | "hidden";

interface ResolvedPlacements {
  search: SearchPlacement;
  overflow: OverflowPlacement;
}

/**
 * `controls.search` takes precedence over `searchField` when both are set.
 * `controls.overflow` accepts boolean or `"header-start"`/`"header-end"`;
 * `"menu"` is not a legal value for the trigger that opens the menu.
 */
function resolveControlPlacements(
  effectiveState: FilterState | undefined,
  searchField: boolean | undefined,
  controls: FilterControlsConfig | undefined,
): ResolvedPlacements {
  let search: SearchPlacement;
  if (!supportsSearch(effectiveState)) {
    search = "hidden";
  } else {
    const value = controls?.search;
    if (value === false || (value === undefined && searchField === false)) {
      search = "hidden";
    } else if (typeof value === "string") {
      search = value;
    } else {
      search = "header-end";
    }
  }

  let overflow: OverflowPlacement;
  const overflowValue = controls?.overflow;
  if (overflowValue === false) {
    overflow = "hidden";
  } else if (typeof overflowValue === "string") {
    overflow = overflowValue;
  } else {
    overflow = "header-end";
  }

  return { search, overflow };
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
    const next = toggleIsExcluding(filterState);
    if (next != null) {
      onFilterStateChanged(filterKey, next);
    }
  }, [filterKey, filterState, onFilterStateChanged]);

  const clearedState = useMemo(
    () => clearFilterState(filterState),
    [filterState],
  );

  const handleClearAll = useCallback(() => {
    if (clearedState != null) {
      onFilterStateChanged(filterKey, clearedState);
    }
  }, [filterKey, clearedState, onFilterStateChanged]);

  const searchInputRef = useCallback((element: HTMLInputElement | null) => {
    element?.focus({ preventScroll: true });
  }, []);

  const { search: searchPlacement, overflow: overflowPlacement } =
    resolveControlPlacements(effectiveState, searchField, controls);

  const showOverflow = overflowPlacement !== "hidden";
  const showKeepExclude = showOverflow && supportsExcluding(effectiveState);
  const hasSelection = filterHasActiveState(filterState);
  const showClearAll = showOverflow && hasSelection && clearedState != null;
  const showRemove = showOverflow
    && onFilterRemoved != null
    && controls?.remove !== false;
  const showSearchInMenu = showOverflow && searchPlacement === "menu";

  const searchQuery = searchState.type === "open"
    ? searchState.query
    : undefined;
  const searchOpen = searchQuery !== undefined;

  const headerSearch = searchPlacement === "header-start"
      || searchPlacement === "header-end"
    ? (
      <HeaderSearchButton
        placement={searchPlacement}
        pressed={searchOpen}
        onToggle={handleToggleSearch}
      />
    )
    : null;

  const headerOverflow = showOverflow
    ? (
      <ItemOverflowMenu
        triggerClassName={classnames(styles.headerActionButton, {
          [styles.headerActionButtonStart]:
            overflowPlacement === "header-start",
        })}
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
    )
    : null;

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
        {searchPlacement === "header-start" && headerSearch}
        {overflowPlacement === "header-start" && headerOverflow}
        <span
          className={styles.itemLabel}
        >
          {label}
        </span>
        {searchPlacement === "header-end" && headerSearch}
        {overflowPlacement === "header-end" && headerOverflow}
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
            searchQuery,
          })}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export const FilterListItem = memo(
  FilterListItemInner,
) as typeof FilterListItemInner;
