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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import React from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import { FilterListItem } from "./FilterListItem.js";

interface FilterListContentProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  filterDefinitions?: Array<FilterDefinitionUnion<Q>>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (key: string, state: FilterState) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function FilterListContent<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  filterDefinitions,
  filterStates,
  onFilterStateChanged,
  className,
  style,
}: FilterListContentProps<Q>): React.ReactElement {
  if (!filterDefinitions || filterDefinitions.length === 0) {
    const emptyClassName = className
      ? `filter-list__content filter-list__content--empty ${className}`
      : "filter-list__content filter-list__content--empty";

    return (
      <div
        className={emptyClassName}
        style={style}
        data-empty="true"
      >
        <p>No filters configured</p>
      </div>
    );
  }

  const contentClassName = className
    ? `filter-list__content ${className}`
    : "filter-list__content";

  return (
    <div className={contentClassName} style={style}>
      {filterDefinitions.map((definition, index) => {
        const filterKey = getFilterKey(definition);
        const instanceKey = `${filterKey}:${index}`;
        const state = filterStates.get(instanceKey);

        return (
          <FilterListItem
            key={instanceKey}
            instanceKey={instanceKey}
            objectType={objectType}
            objectSet={objectSet}
            definition={definition}
            filterState={state}
            onFilterStateChanged={onFilterStateChanged}
          />
        );
      })}
    </div>
  );
}
