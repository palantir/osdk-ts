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

import type {
  DraggableAttributes,
  DraggableSyntheticListeners,
} from "@dnd-kit/core";
import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import classnames from "classnames";
import React, { memo, useCallback } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { DragHandleIcon } from "./DragHandleIcon.js";
import { FilterInput } from "./FilterInput.js";
import styles from "./FilterListItem.module.css";

interface FilterListItemProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  definition: FilterDefinitionUnion<Q>;
  filterState: FilterState | undefined;
  onFilterStateChanged: (
    definition: FilterDefinitionUnion<Q>,
    state: FilterState,
  ) => void;
  dragHandleAttributes?: DraggableAttributes;
  dragHandleListeners?: DraggableSyntheticListeners;
  className?: string;
  style?: React.CSSProperties;
}

function FilterListItemInner<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  definition,
  filterState,
  onFilterStateChanged,
  dragHandleAttributes,
  dragHandleListeners,
  className,
  style,
}: FilterListItemProps<Q>): React.ReactElement {
  const label = getLabel(definition);

  const handleFilterStateChanged = useCallback(
    (newState: FilterState) => {
      onFilterStateChanged(definition, newState);
    },
    [definition, onFilterStateChanged],
  );

  return (
    <div
      className={classnames(styles.filterItem, className)}
      style={style}
      data-filter-type={definition.type}
    >
      <div className={styles.itemHeader}>
        {dragHandleAttributes && (
          <button
            className={styles.dragHandle}
            aria-label={`Reorder ${label}`}
            {...dragHandleAttributes}
            {...dragHandleListeners}
          >
            <DragHandleIcon />
          </button>
        )}
        <span className={styles.itemLabel}>{label}</span>
      </div>

      <div className={styles.itemContent}>
        <FilterInput
          objectType={objectType}
          objectSet={objectSet}
          definition={definition}
          filterState={filterState}
          onFilterStateChanged={handleFilterStateChanged}
        />
      </div>
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
    case "PROPERTY":
      return definition.key;
    case "HAS_LINK":
    case "LINKED_PROPERTY":
      return definition.linkName;
    case "KEYWORD_SEARCH":
      return "Search";
    case "CUSTOM":
      return definition.key;
  }
}
