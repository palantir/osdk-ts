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
import classnames from "classnames";
import React from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import styles from "./FilterListContent.module.css";
import { FilterListItem } from "./FilterListItem.js";

interface FilterListContentProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  filterDefinitions?: Array<FilterDefinitionUnion<Q>>;
  filterStates: Map<FilterDefinitionUnion<Q>, FilterState>;
  onFilterStateChanged: (
    definition: FilterDefinitionUnion<Q>,
    state: FilterState,
  ) => void;
  className?: string;
  style?: React.CSSProperties;
  renderEmptyAction?: () => React.ReactNode;
}

export function FilterListContent<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  filterDefinitions,
  filterStates,
  onFilterStateChanged,
  className,
  style,
  renderEmptyAction,
}: FilterListContentProps<Q>): React.ReactElement {
  if (!filterDefinitions || filterDefinitions.length === 0) {
    return (
      <div
        className={classnames(styles.content, className)}
        style={style}
        data-empty="true"
      >
        <p className={styles.emptyMessage}>No filters configured</p>
        {renderEmptyAction && (
          <div className={styles.emptyAction}>
            {renderEmptyAction()}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={classnames(styles.content, className)}
      style={style}
    >
      {filterDefinitions.map((definition, index) => {
        const filterKey = getFilterKey(definition);
        const state = filterStates.get(definition);

        return (
          <FilterListItem
            key={`${filterKey}:${index}`}
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
