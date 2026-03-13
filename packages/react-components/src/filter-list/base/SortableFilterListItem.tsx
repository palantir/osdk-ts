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
import classnames from "classnames";
import React, { useMemo } from "react";
import type { FilterState } from "../FilterListItemApi.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import { FilterListItem } from "./FilterListItem.js";
import styles from "./FilterListItem.module.css";

interface SortableFilterListItemProps<D> {
  id: string;
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
}

export function SortableFilterListItem<D>({
  id,
  definition,
  filterKey,
  label,
  filterState,
  onFilterStateChanged,
  onFilterRemoved,
  renderInput,
}: SortableFilterListItemProps<D>): React.ReactElement {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = useMemo<React.CSSProperties>(() => ({
    transform: CSS.Transform.toString(transform),
    transition: transition ?? undefined,
  }), [transform, transition]);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={classnames(isDragging && styles.dragging)}
    >
      <FilterListItem
        definition={definition}
        filterKey={filterKey}
        label={label}
        filterState={filterState}
        onFilterStateChanged={onFilterStateChanged}
        onFilterRemoved={onFilterRemoved}
        renderInput={renderInput}
        dragHandleAttributes={attributes}
        dragHandleListeners={listeners}
      />
    </div>
  );
}
