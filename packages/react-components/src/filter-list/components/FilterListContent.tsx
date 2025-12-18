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
import React from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { FilterListItem } from "./FilterListItem.js";

interface FilterListContentProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  filterDefinitions?: Array<FilterDefinitionUnion<Q>>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (key: string, state: FilterState) => void;
}

export function FilterListContent<Q extends ObjectTypeDefinition>({
  objectType,
  filterDefinitions,
  filterStates,
  onFilterStateChanged,
}: FilterListContentProps<Q>): React.ReactElement {
  if (!filterDefinitions || filterDefinitions.length === 0) {
    return (
      <div className="osdk-filter-list__content osdk-filter-list__content--empty">
        <p>No filters configured</p>
      </div>
    );
  }

  return (
    <div className="osdk-filter-list__content">
      {filterDefinitions.map((definition) => {
        const key = getFilterKey(definition);
        const state = filterStates.get(key);

        return (
          <FilterListItem
            key={key}
            objectType={objectType}
            definition={definition}
            filterState={state}
            onFilterStateChanged={(newState) =>
              onFilterStateChanged(key, newState)}
          />
        );
      })}
    </div>
  );
}

function getFilterKey<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
): string {
  switch (definition.type) {
    case "property":
      return definition.key as string;
    case "hasLink":
    case "linkedProperty":
      return definition.linkName as string;
    case "keywordSearch":
      return `keywordSearch-${
        Array.isArray(definition.properties)
          ? definition.properties.join("-")
          : "all"
      }`;
    case "custom":
      return definition.key;
    default:
      return "unknown";
  }
}
