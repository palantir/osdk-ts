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

import type { ObjectSet, ObjectTypeDefinition, WhereClause } from "@osdk/api";
import React, { memo, useCallback, useId, useRef, useState } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import type { FilterListItemClassNames } from "../types/ClassNameOverrides.js";
import type { InputClassNames } from "./renderFilterInput.js";
import { renderFilterInput } from "./renderFilterInput.js";

interface FilterListItemProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  definition: FilterDefinitionUnion<Q>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
  onResetFilterState: () => void;
  /**
   * WhereClause from other filters to chain aggregation queries.
   * When provided, the aggregations in input components will respect other active filters.
   */
  whereClause?: WhereClause<Q>;
  classNames?: FilterListItemClassNames;
  inputClassNames?: InputClassNames;
}

function FilterListItemInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
  onResetFilterState,
  whereClause,
  classNames,
  inputClassNames,
}: FilterListItemProps<Q>): React.ReactElement {
  // Support controlled/uncontrolled collapse from definition
  const controlledCollapsed = definition.type === "property"
    ? definition.itemCollapsed
    : undefined;
  const defaultCollapsed = definition.type === "property"
    ? definition.defaultItemCollapsed ?? false
    : false;
  const onCollapsedChange = definition.type === "property"
    ? definition.onItemCollapsedChange
    : undefined;

  const isControlled = controlledCollapsed !== undefined;
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const isCollapsed = isControlled ? controlledCollapsed : internalCollapsed;

  const handleToggleCollapse = useCallback(() => {
    const newValue = !isCollapsed;
    if (!isControlled) {
      setInternalCollapsed(newValue);
    }
    onCollapsedChange?.(newValue);
  }, [isCollapsed, isControlled, onCollapsedChange]);

  const [isOverflowMenuOpen, setIsOverflowMenuOpen] = useState(false);
  const overflowMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const contentId = useId();

  const label = getLabel(definition);

  const renderOverflowMenu = definition.type === "property"
    ? definition.renderOverflowMenu
    : undefined;
  const onRemoveFilter = definition.type === "property"
    ? definition.onRemoveFilter
    : undefined;

  const handleResetFilter = useCallback(() => {
    onResetFilterState();
    if (definition.type === "property") {
      definition.onResetFilter?.();
    }
  }, [onResetFilterState, definition]);

  const showExcludeToggle = definition.type === "property"
    && definition.allowToggleExcludeMode === true;

  const isExcluding = filterState?.isExcluding ?? false;

  const handleToggleExcludeMode = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!filterState) return;

      const newState = {
        ...filterState,
        isExcluding: !isExcluding,
      };
      onFilterStateChanged(newState);

      if (definition.type === "property" && definition.onExcludeModeChange) {
        definition.onExcludeModeChange(!isExcluding);
      }
    },
    [filterState, isExcluding, onFilterStateChanged, definition],
  );

  return (
    <div
      className={classNames?.root}
      data-expanded={!isCollapsed}
      data-excluding={isExcluding}
      data-filter-type={definition.type}
    >
      <div className={classNames?.header}>
        <button
          type="button"
          className={classNames?.headerButton}
          onClick={handleToggleCollapse}
          aria-expanded={!isCollapsed}
          aria-controls={contentId}
          aria-label={`${isCollapsed ? "Expand" : "Collapse"} ${label} filter`}
        >
          <svg
            className={classNames?.chevron}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            data-collapsed={isCollapsed}
            aria-hidden="true"
          >
            <path d="M4.7 6.3a1 1 0 0 1 1.4 0L8 8.2l1.9-1.9a1 1 0 1 1 1.4 1.4l-2.6 2.6a1 1 0 0 1-1.4 0L4.7 7.7a1 1 0 0 1 0-1.4z" />
          </svg>
          <span className={classNames?.label}>{label}</span>

          {isExcluding && (
            <span className={classNames?.excludeBadge}>
              Excluding
            </span>
          )}
        </button>

        {showExcludeToggle && (
          <button
            type="button"
            className={classNames?.excludeToggle}
            onClick={handleToggleExcludeMode}
            title={isExcluding
              ? "Switch to include mode"
              : "Switch to exclude mode"}
            aria-label={isExcluding
              ? "Switch to include mode"
              : "Switch to exclude mode"}
          >
            <span
              className={classNames?.excludeIcon}
              data-excluding={isExcluding}
              aria-hidden="true"
            />
          </button>
        )}

        {definition.type === "property" && definition.showOverflowMenu
          && renderOverflowMenu && (
            renderOverflowMenu({
              isOpen: isOverflowMenuOpen,
              onClose: () => setIsOverflowMenuOpen(false),
              onOpen: () => setIsOverflowMenuOpen(true),
              onToggle: (e: React.MouseEvent) => {
                e.stopPropagation();
                setIsOverflowMenuOpen(!isOverflowMenuOpen);
              },
              triggerRef: overflowMenuTriggerRef,
              triggerClassName: classNames?.overflowMenu,
              onResetFilter: handleResetFilter,
              onRemoveFilter,
            })
          )}
      </div>

      {!isCollapsed && (
        <div id={contentId} className={classNames?.content}>
          {renderFilterInput(
            objectType,
            objectSet,
            definition,
            filterState,
            onFilterStateChanged,
            inputClassNames,
            whereClause,
          )}
        </div>
      )}
    </div>
  );
}

export const FilterListItem = memo(
  FilterListItemInner,
) as typeof FilterListItemInner;

function getLabel<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
): string {
  if ("label" in definition && definition.label) {
    return definition.label;
  }

  switch (definition.type) {
    case "property":
      return definition.key;
    case "hasLink":
    case "linkedProperty":
      return definition.linkName;
    case "keywordSearch":
      return "Search";
    case "custom":
      return definition.key;
  }
}
