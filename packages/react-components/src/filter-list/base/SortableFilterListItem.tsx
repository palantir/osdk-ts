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

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ObjectSet, ObjectTypeDefinition, WhereClause } from "@osdk/api";
import classnames from "classnames";
import React from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { FilterListItem } from "./FilterListItem.js";
import styles from "./FilterListItem.module.css";

interface SortableFilterListItemProps<Q extends ObjectTypeDefinition> {
  id: string;
  objectType: Q;
  objectSet: ObjectSet<Q>;
  definition: FilterDefinitionUnion<Q>;
  filterKey: string;
  filterState: FilterState | undefined;
  onFilterStateChanged: (
    filterKey: string,
    state: FilterState,
  ) => void;
  whereClause: WhereClause<Q>;
}

export function SortableFilterListItem<Q extends ObjectTypeDefinition>({
  id,
  objectType,
  objectSet,
  definition,
  filterKey,
  filterState,
  onFilterStateChanged,
  whereClause,
}: SortableFilterListItemProps<Q>): React.ReactElement {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={classnames(isDragging && styles.dragging)}
    >
      <FilterListItem
        objectType={objectType}
        objectSet={objectSet}
        definition={definition}
        filterKey={filterKey}
        filterState={filterState}
        onFilterStateChanged={onFilterStateChanged}
        whereClause={whereClause}
        dragHandleAttributes={attributes}
        dragHandleListeners={listeners}
      />
    </div>
  );
}
