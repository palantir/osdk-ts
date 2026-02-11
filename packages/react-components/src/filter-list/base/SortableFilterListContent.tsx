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
  Announcements,
  DragEndEvent,
  DragStartEvent,
  Modifier,
  UniqueIdentifier,
} from "@dnd-kit/core";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import classnames from "classnames";
import React, { useCallback, useMemo, useState } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import { getFilterLabel } from "../utils/getFilterLabel.js";
import contentStyles from "./FilterListContent.module.css";
import { FilterListItem } from "./FilterListItem.js";
import { SortableFilterListItem } from "./SortableFilterListItem.js";

const restrictToVerticalAxis: Modifier = ({ transform }) => ({
  ...transform,
  x: 0,
});

export interface SortableFilterListContentProps<
  Q extends ObjectTypeDefinition,
> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  filterDefinitions: Array<FilterDefinitionUnion<Q>>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (
    definition: FilterDefinitionUnion<Q>,
    state: FilterState,
  ) => void;
  onFiltersReordered: (
    newOrder: ReadonlyArray<FilterDefinitionUnion<Q>>,
  ) => void;
  className?: string;
  style?: React.CSSProperties;
}

function getSortableId<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
  index: number,
): string {
  return definition.id ?? `${getFilterKey(definition)}:${index}`;
}

export default function SortableFilterListContent<
  Q extends ObjectTypeDefinition,
>({
  objectType,
  objectSet,
  filterDefinitions,
  filterStates,
  onFilterStateChanged,
  onFiltersReordered,
  className,
  style,
}: SortableFilterListContentProps<Q>): React.ReactElement {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sortableIds = useMemo(
    () => filterDefinitions.map((def, i) => getSortableId(def, i)),
    [filterDefinitions],
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const activeIndex = activeId != null
    ? sortableIds.indexOf(String(activeId))
    : -1;
  const activeDefinition = activeIndex >= 0
    ? filterDefinitions[activeIndex]
    : undefined;

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id);
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      setActiveId(null);
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const oldIndex = sortableIds.indexOf(String(active.id));
        const newIndex = sortableIds.indexOf(String(over.id));

        if (oldIndex !== -1 && newIndex !== -1) {
          const reordered = arrayMove(filterDefinitions, oldIndex, newIndex);
          onFiltersReordered(reordered);
        }
      }
    },
    [filterDefinitions, sortableIds, onFiltersReordered],
  );

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  const announcements = useMemo<Announcements>(
    () => ({
      onDragStart({ active }) {
        const idx = sortableIds.indexOf(String(active.id));
        const def = idx >= 0 ? filterDefinitions[idx] : undefined;
        const label = def ? getFilterLabel(def) : "filter";
        return `Picked up ${label} filter`;
      },
      onDragOver({ active, over }) {
        if (!over) {
          return "Not over a droppable area";
        }
        const overIdx = sortableIds.indexOf(String(over.id));
        return `Moved to position ${overIdx + 1} of ${sortableIds.length}`;
      },
      onDragEnd({ active, over }) {
        const idx = sortableIds.indexOf(String(active.id));
        const def = idx >= 0 ? filterDefinitions[idx] : undefined;
        const label = def ? getFilterLabel(def) : "filter";
        if (over && active.id !== over.id) {
          const overIdx = sortableIds.indexOf(String(over.id));
          return `Dropped ${label} filter at position ${overIdx + 1}`;
        }
        return `Dropped ${label} filter back in its original position`;
      },
      onDragCancel({ active }) {
        const idx = sortableIds.indexOf(String(active.id));
        const def = idx >= 0 ? filterDefinitions[idx] : undefined;
        const label = def ? getFilterLabel(def) : "filter";
        return `Cancelled dragging ${label} filter`;
      },
    }),
    [filterDefinitions, sortableIds],
  );

  const modifiers = useMemo(() => [restrictToVerticalAxis], []);

  return (
    <div
      className={classnames(contentStyles.content, className)}
      style={style}
    >
      {/* @ts-expect-error dnd-kit types compiled against React 19, project uses React 18 */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={modifiers}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        accessibility={{ announcements }}
      >
        <SortableContext
          items={sortableIds}
          strategy={verticalListSortingStrategy}
        >
          {filterDefinitions.map((definition, index) => {
            const id = sortableIds[index];
            const state = filterStates.get(getFilterKey(definition));

            return (
              <SortableFilterListItem
                key={id}
                id={id}
                objectType={objectType}
                objectSet={objectSet}
                definition={definition}
                filterState={state}
                onFilterStateChanged={onFilterStateChanged}
              />
            );
          })}
        </SortableContext>

        {/* @ts-expect-error dnd-kit types compiled against React 19, project uses React 18 */}
        <DragOverlay
          dropAnimation={null}
          className={contentStyles.dragOverlay}
        >
          {activeDefinition && (
            <FilterListItem
              objectType={objectType}
              objectSet={objectSet}
              definition={activeDefinition}
              filterState={filterStates.get(getFilterKey(activeDefinition))}
              onFilterStateChanged={onFilterStateChanged}
            />
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
