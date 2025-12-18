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

import type { ObjectTypeDefinition, PropertyKeys } from "@osdk/api";
import React, { useState } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type {
  FilterState,
  PropertyFilterDefinition,
} from "../FilterListItemApi.js";
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

  return (
    <div className="osdk-filter-list__item">
      <div
        className="osdk-filter-list__item-header"
        onClick={() => setIsCollapsed(!isCollapsed)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsCollapsed(!isCollapsed);
          }
        }}
      >
        <span
          className={`osdk-filter-list__item-chevron ${
            isCollapsed ? "osdk-filter-list__item-chevron--collapsed" : ""
          }`}
        >
          {isCollapsed ? "▶" : "▼"}
        </span>
        <span className="osdk-filter-list__item-label">{label}</span>
      </div>

      {!isCollapsed && (
        <div className="osdk-filter-list__item-content">
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
    return <div>Unsupported filter type: {definition.type}</div>;
  }

  const propertyDef = definition as PropertyFilterDefinition<
    Q,
    PropertyKeys<Q>
  >;

  switch (propertyDef.filterComponent) {
    case "CHECKBOX_LIST":
      return (
        <CheckboxListInput
          objectType={objectType}
          propertyKey={propertyDef.key}
          selectedValues={filterState?.type === "CHECKBOX_LIST"
            ? filterState.selectedValues
            : []}
          onChange={(selectedValues) =>
            onFilterStateChanged({
              type: "CHECKBOX_LIST",
              selectedValues,
            })}
        />
      );

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
          placeholder={`Search ${propertyDef.key}...`}
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
        <div>
          Unsupported filter component: {propertyDef.filterComponent}
        </div>
      );
  }
}
