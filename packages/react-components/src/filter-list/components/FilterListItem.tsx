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

import type { ObjectTypeDefinition } from "@osdk/api";
import classNames from "classnames";
import React, { useCallback, useState } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { CheckboxListInput } from "../inputs/CheckboxListInput.js";
import { ContainsTextInput } from "../inputs/ContainsTextInput.js";
import { ToggleInput } from "../inputs/ToggleInput.js";

interface FilterListItemProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  definition: FilterDefinitionUnion<Q>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (state: FilterState) => void;
}

export function FilterListItem<Q extends ObjectTypeDefinition>({
  objectType,
  definition,
  filterState,
  onFilterStateChanged,
}: FilterListItemProps<Q>): React.ReactElement {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const label = getLabel(definition);

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
      className={classNames(
        "filter-list__item",
        isExcluding && "filter-list__item--excluding",
      )}
    >
      <div
        className="filter-list__item-header bp5-interactive"
        onClick={() => setIsCollapsed(!isCollapsed)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsCollapsed(!isCollapsed);
          }
        }}
      >
        <svg
          className={classNames(
            "filter-list__item-chevron",
            isCollapsed && "filter-list__item-chevron--collapsed",
          )}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M4.7 6.3a1 1 0 0 1 1.4 0L8 8.2l1.9-1.9a1 1 0 1 1 1.4 1.4l-2.6 2.6a1 1 0 0 1-1.4 0L4.7 7.7a1 1 0 0 1 0-1.4z" />
        </svg>
        <span className="filter-list__item-label">{label}</span>

        {isExcluding && (
          <span className="filter-list__item-exclude-badge bp5-tag bp5-minimal bp5-small">
            Excluding
          </span>
        )}

        {showExcludeToggle && (
          <button
            type="button"
            className={classNames(
              "bp5-button",
              "bp5-minimal",
              "bp5-small",
              "filter-list__item-exclude-toggle",
            )}
            onClick={handleToggleExcludeMode}
            title={isExcluding
              ? "Switch to include mode"
              : "Switch to exclude mode"}
            aria-label={isExcluding
              ? "Switch to include mode"
              : "Switch to exclude mode"}
          >
            <span
              className={classNames(
                "bp5-icon",
                isExcluding ? "bp5-icon-disable" : "bp5-icon-filter",
              )}
            />
          </button>
        )}
      </div>

      {!isCollapsed && (
        <div className="filter-list__item-content">
          {renderFilterInput(
            objectType,
            definition,
            filterState,
            onFilterStateChanged,
          )}
        </div>
      )}
    </div>
  );
}

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
    default:
      return "Filter";
  }
}

function renderFilterInput<Q extends ObjectTypeDefinition>(
  objectType: Q,
  definition: FilterDefinitionUnion<Q>,
  filterState: FilterState | undefined,
  onFilterStateChanged: (state: FilterState) => void,
): React.ReactElement {
  if (definition.type !== "property") {
    return (
      <div className="bp5-text-muted">
        Unsupported filter type: {definition.type}
      </div>
    );
  }

  switch (definition.filterComponent) {
    case "CHECKBOX_LIST": {
      const selectedValues = filterState?.type === "CHECKBOX_LIST"
        ? filterState.selectedValues
        : [];
      const handleChange = (newSelectedValues: string[]) =>
        onFilterStateChanged({
          type: "CHECKBOX_LIST",
          selectedValues: newSelectedValues,
          isExcluding: filterState?.isExcluding,
        });

      return (
        <CheckboxListInput
          objectType={objectType}
          propertyKey={definition.key}
          selectedValues={selectedValues}
          onChange={handleChange}
          showSelectAll={definition.showSelectAll}
          maxVisibleItems={definition.maxVisibleItems}
          dataIndicator={definition.dataIndicator}
          color={definition.color}
          valueColors={definition.valueColors}
        />
      );
    }

    case "CONTAINS_TEXT":
      return (
        <ContainsTextInput
          value={filterState?.type === "CONTAINS_TEXT"
            ? filterState.value
            : undefined}
          onChange={(value) =>
            onFilterStateChanged({
              type: "CONTAINS_TEXT",
              value,
            })}
          placeholder={`Search ${definition.key}...`}
        />
      );

    case "TOGGLE":
      return (
        <ToggleInput
          enabled={filterState?.type === "TOGGLE" ? filterState.enabled : false}
          onChange={(enabled) =>
            onFilterStateChanged({
              type: "TOGGLE",
              enabled,
            })}
        />
      );

    default:
      return (
        <div className="bp5-text-muted">
          Unsupported filter component: {definition.filterComponent}
        </div>
      );
  }
}
