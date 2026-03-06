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
import type { ObjectSet, ObjectTypeDefinition, WhereClause } from "@osdk/api";
import classnames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { FilterDefinitionUnion } from "../FilterListApi.js";
import type { FilterState } from "../FilterListItemApi.js";
import { getFilterKey } from "../utils/getFilterKey.js";
import { getFilterLabel } from "../utils/getFilterLabel.js";
import styles from "./FilterListContent.module.css";
import { FilterListItem } from "./FilterListItem.js";
import { SortableFilterListItem } from "./SortableFilterListItem.js";

const restrictToVerticalAxis: Modifier = ({ transform }) => ({
  ...transform,
  x: 0,
});

const POINTER_ACTIVATION_CONSTRAINT = { distance: 8 } as const;

const stableIdMap = new WeakMap<object, string>();
let nextStableId = 0;

function getStableSortableId<Q extends ObjectTypeDefinition>(
  definition: FilterDefinitionUnion<Q>,
): string {
  if (definition.id != null) {
    return definition.id;
  }
  let id = stableIdMap.get(definition);
  if (id == null) {
    id = `__sortable_${nextStableId++}`;
    stableIdMap.set(definition, id);
  }
  return id;
}

interface FilterListContentProps<Q extends ObjectTypeDefinition> {
  objectType: Q;
  objectSet: ObjectSet<Q>;
  filterDefinitions?: Array<FilterDefinitionUnion<Q>>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (
    filterKey: string,
    state: FilterState,
  ) => void;
  whereClause: WhereClause<Q>;
  enableSorting?: boolean;
  onFiltersReordered?: (
    newOrder: ReadonlyArray<FilterDefinitionUnion<Q>>,
  ) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function FilterListContent<Q extends ObjectTypeDefinition>({
  objectType,
  objectSet,
  filterDefinitions,
  filterStates,
  onFilterStateChanged,
  whereClause,
  enableSorting,
  onFiltersReordered,
  className,
  style,
}: FilterListContentProps<Q>): React.ReactElement {
  const [internalOrder, setInternalOrder] = useState<
    Array<FilterDefinitionUnion<Q>>
  >(() => filterDefinitions ?? []);

  useEffect(() => {
    if (filterDefinitions) {
      setInternalOrder(filterDefinitions);
    }
  }, [filterDefinitions]);

  const renderDefinitions = enableSorting ? internalOrder : filterDefinitions;

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sortableIds = useMemo(
    () =>
      enableSorting
        ? internalOrder.map((def) => getStableSortableId(def))
        : [],
    [enableSorting, internalOrder],
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: POINTER_ACTIVATION_CONSTRAINT,
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const activeIndex = activeId != null
    ? sortableIds.indexOf(String(activeId))
    : -1;
  const activeDefinition = activeIndex >= 0
    ? internalOrder[activeIndex]
    : undefined;

  const activeFilterKey = useMemo(
    () => activeDefinition ? getFilterKey(activeDefinition) : undefined,
    [activeDefinition],
  );

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
          const reordered = arrayMove(internalOrder, oldIndex, newIndex);
          setInternalOrder(reordered);
          onFiltersReordered?.(reordered);
        }
      }
    },
    [internalOrder, sortableIds, onFiltersReordered],
  );

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  const announcements = useMemo<Announcements>(
    () => ({
      onDragStart({ active }) {
        const idx = sortableIds.indexOf(String(active.id));
        const def = idx >= 0 ? internalOrder[idx] : undefined;
        const label = def ? getFilterLabel(def) : "filter";
        return `Picked up ${label} filter`;
      },
      onDragOver({ over }) {
        if (!over) {
          return "Not over a droppable area";
        }
        const overIdx = sortableIds.indexOf(String(over.id));
        return `Moved to position ${overIdx + 1} of ${sortableIds.length}`;
      },
      onDragEnd({ active, over }) {
        const idx = sortableIds.indexOf(String(active.id));
        const def = idx >= 0 ? internalOrder[idx] : undefined;
        const label = def ? getFilterLabel(def) : "filter";
        if (over && active.id !== over.id) {
          const overIdx = sortableIds.indexOf(String(over.id));
          return `Dropped ${label} filter at position ${overIdx + 1}`;
        }
        return `Dropped ${label} filter back in its original position`;
      },
      onDragCancel({ active }) {
        const idx = sortableIds.indexOf(String(active.id));
        const def = idx >= 0 ? internalOrder[idx] : undefined;
        const label = def ? getFilterLabel(def) : "filter";
        return `Cancelled dragging ${label} filter`;
      },
    }),
    [internalOrder, sortableIds],
  );

  const modifiers = useMemo(() => [restrictToVerticalAxis], []);

  if (!renderDefinitions || renderDefinitions.length === 0) {
    return (
      <div
        className={classnames(styles.content, className)}
        style={style}
        data-empty="true"
      />
    );
  }

  if (enableSorting) {
    return (
      <div
        className={classnames(styles.content, className)}
        style={style}
      >
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
            {internalOrder.map((definition, index) => {
              const id = sortableIds[index];
              const filterKey = getFilterKey(definition);
              const state = filterStates.get(filterKey);

              return (
                <SortableFilterListItem
                  key={id}
                  id={id}
                  objectType={objectType}
                  objectSet={objectSet}
                  definition={definition}
                  filterKey={filterKey}
                  filterState={state}
                  onFilterStateChanged={onFilterStateChanged}
                  whereClause={whereClause}
                />
              );
            })}
          </SortableContext>

          <DragOverlay
            dropAnimation={null}
            className={styles.dragOverlay}
          >
            {activeDefinition && activeFilterKey && (
              <FilterListItem
                objectType={objectType}
                objectSet={objectSet}
                definition={activeDefinition}
                filterKey={activeFilterKey}
                filterState={filterStates.get(activeFilterKey)}
                onFilterStateChanged={onFilterStateChanged}
                whereClause={whereClause}
              />
            )}
          </DragOverlay>
        </DndContext>
      </div>
    );
  }

  return (
    <div
      className={classnames(styles.content, className)}
      style={style}
    >
      {renderDefinitions.map((definition) => {
        const filterKey = getFilterKey(definition);
        const state = filterStates.get(filterKey);

        return (
          <FilterListItem
            key={filterKey}
            objectType={objectType}
            objectSet={objectSet}
            definition={definition}
            filterKey={filterKey}
            filterState={state}
            onFilterStateChanged={onFilterStateChanged}
            whereClause={whereClause}
          />
        );
      })}
    </div>
  );
}
