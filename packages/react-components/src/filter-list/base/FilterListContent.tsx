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
import classnames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { FilterState } from "../FilterListItemApi.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import styles from "./FilterListContent.module.css";
import { FilterListItem } from "./FilterListItem.js";
import { SortableFilterListItem } from "./SortableFilterListItem.js";

const restrictToVerticalAxis: Modifier = ({ transform }) => ({
  ...transform,
  x: 0,
});

const POINTER_ACTIVATION_CONSTRAINT = { distance: 8 } as const;
const MODIFIERS: Modifier[] = [restrictToVerticalAxis];

interface FilterListContentProps<D> {
  filterDefinitions?: Array<D>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (
    filterKey: string,
    state: FilterState,
  ) => void;
  onFilterRemoved?: (filterKey: string) => void;
  renderInput: RenderFilterInput<D>;
  getFilterKey: (definition: D) => string;
  getFilterLabel: (definition: D) => string;
  enableSorting?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function FilterListContent<D>({
  filterDefinitions,
  filterStates,
  onFilterStateChanged,
  onFilterRemoved,
  renderInput,
  getFilterKey,
  getFilterLabel,
  enableSorting,
  className,
  style,
}: FilterListContentProps<D>): React.ReactElement {
  const [internalOrder, setInternalOrder] = useState<Array<D>>(
    () => filterDefinitions ?? [],
  );
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  useEffect(() => {
    if (filterDefinitions) {
      setInternalOrder(filterDefinitions);
    }
  }, [filterDefinitions]);

  const renderDefinitions = enableSorting ? internalOrder : filterDefinitions;

  const sortableIds = useMemo(
    () =>
      enableSorting
        ? internalOrder.map((def) => getFilterKey(def))
        : [],
    [enableSorting, internalOrder, getFilterKey],
  );

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: POINTER_ACTIVATION_CONSTRAINT,
  });
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const sensors = useSensors(pointerSensor, keyboardSensor);

  const activeIndex = activeId != null
    ? sortableIds.indexOf(String(activeId))
    : -1;
  const activeDefinition = activeIndex >= 0
    ? internalOrder[activeIndex]
    : undefined;

  const activeFilterKey = useMemo(
    () => activeDefinition ? getFilterKey(activeDefinition) : undefined,
    [activeDefinition, getFilterKey],
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id);
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      setActiveId(null);
      const { active, over } = event;
      if (!over || active.id === over.id) {
        return;
      }
      const oldIndex = sortableIds.indexOf(String(active.id));
      const newIndex = sortableIds.indexOf(String(over.id));
      if (oldIndex !== -1 && newIndex !== -1) {
        setInternalOrder(arrayMove(internalOrder, oldIndex, newIndex));
      }
    },
    [internalOrder, sortableIds],
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
    [internalOrder, sortableIds, getFilterLabel],
  );

  const accessibility = useMemo(
    () => ({ announcements }),
    [announcements],
  );

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
          modifiers={MODIFIERS}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
          accessibility={accessibility}
        >
          <SortableContext
            items={sortableIds}
            strategy={verticalListSortingStrategy}
          >
            {internalOrder.map((definition, index) => {
              const id = sortableIds[index];
              const filterKey = getFilterKey(definition);
              const label = getFilterLabel(definition);
              const state = filterStates.get(filterKey);

              return (
                <SortableFilterListItem
                  key={id}
                  id={id}
                  definition={definition}
                  filterKey={filterKey}
                  label={label}
                  filterState={state}
                  onFilterStateChanged={onFilterStateChanged}
                  onFilterRemoved={onFilterRemoved}
                  renderInput={renderInput}
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
                definition={activeDefinition}
                filterKey={activeFilterKey}
                label={getFilterLabel(activeDefinition)}
                filterState={filterStates.get(activeFilterKey)}
                onFilterStateChanged={onFilterStateChanged}
                onFilterRemoved={onFilterRemoved}
                renderInput={renderInput}
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
            definition={definition}
            filterKey={filterKey}
            label={getFilterLabel(definition)}
            filterState={state}
            onFilterStateChanged={onFilterStateChanged}
            onFilterRemoved={onFilterRemoved}
            renderInput={renderInput}
          />
        );
      })}
    </div>
  );
}
