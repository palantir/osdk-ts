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
  DraggableAttributes,
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
import React, { useCallback, useMemo, useState } from "react";

import type {
  FilterDefinitionControls,
  FilterState,
} from "../FilterListItemApi.js";
import type { RenderFilterInput } from "./BaseFilterListApi.js";
import { FilterListItem } from "./FilterListItem.js";
import { SortableFilterListItem } from "./SortableFilterListItem.js";

import styles from "./FilterListContent.module.css";

const restrictToVerticalAxis: Modifier = ({ transform }) => ({
  ...transform,
  x: 0,
});

const POINTER_ACTIVATION_CONSTRAINT = { distance: 8 } as const;
const MODIFIERS: Modifier[] = [restrictToVerticalAxis];

const DRAG_OVERLAY_HANDLE_ATTRIBUTES: DraggableAttributes = {
  role: "button",
  tabIndex: -1,
  "aria-disabled": true,
  "aria-pressed": undefined,
  "aria-roledescription": "sortable",
  "aria-describedby": "",
};

interface FilterListContentProps<D extends FilterDefinitionControls> {
  filterDefinitions?: Array<D>;
  filterStates: Map<string, FilterState>;
  onFilterStateChanged: (filterKey: string, state: FilterState) => void;
  onFilterRemoved?: (filterKey: string) => void;
  onOrderChange?: (orderedKeys: string[]) => void;
  renderInput: RenderFilterInput<D>;
  getFilterKey: (definition: D) => string;
  getFilterLabel: (definition: D) => string;
  getEmptyDisplayState?: (definition: D) => FilterState | undefined;
  enableSorting?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function FilterListContent<D extends FilterDefinitionControls>({
  filterDefinitions,
  filterStates,
  onFilterStateChanged,
  onFilterRemoved,
  onOrderChange,
  renderInput,
  getFilterKey,
  getFilterLabel,
  getEmptyDisplayState,
  enableSorting,
  className,
  style,
}: FilterListContentProps<D>): React.ReactElement {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const sortableIds = useMemo(
    () =>
      enableSorting && filterDefinitions
        ? filterDefinitions.map((def) => getFilterKey(def))
        : [],
    [enableSorting, filterDefinitions, getFilterKey]
  );

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: POINTER_ACTIVATION_CONSTRAINT,
  });
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const sensors = useSensors(pointerSensor, keyboardSensor);

  const activeIndex =
    activeId != null ? sortableIds.indexOf(String(activeId)) : -1;
  const activeDefinition =
    activeIndex >= 0 && filterDefinitions
      ? filterDefinitions[activeIndex]
      : undefined;

  const activeFilterKey = useMemo(
    () => (activeDefinition ? getFilterKey(activeDefinition) : undefined),
    [activeDefinition, getFilterKey]
  );

  // Memoize per-definition fallbacks by filter key so the `??` lookup at each
  // render site returns a stable reference; otherwise every render allocates a
  // fresh FilterState and defeats memoization in the downstream filter inputs.
  const emptyDisplayStates = useMemo(() => {
    const map = new Map<string, FilterState>();
    if (!getEmptyDisplayState || !filterDefinitions) {
      return map;
    }
    for (const definition of filterDefinitions) {
      const fallback = getEmptyDisplayState(definition);
      if (fallback != null) {
        map.set(getFilterKey(definition), fallback);
      }
    }
    return map;
  }, [filterDefinitions, getEmptyDisplayState, getFilterKey]);

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
        const next = arrayMove(sortableIds, oldIndex, newIndex);
        onOrderChange?.(next);
      }
    },
    [sortableIds, onOrderChange]
  );

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  const announcements = useMemo<Announcements>(() => {
    const labelForId = (id: UniqueIdentifier) => {
      const idx = sortableIds.indexOf(String(id));
      const def = idx >= 0 ? filterDefinitions?.[idx] : undefined;
      return def ? getFilterLabel(def) : "filter";
    };
    return {
      onDragStart({ active }) {
        return `Picked up ${labelForId(active.id)} filter`;
      },
      onDragOver({ over }) {
        if (!over) {
          return "Not over a droppable area";
        }
        const overIdx = sortableIds.indexOf(String(over.id));
        return `Moved to position ${overIdx + 1} of ${sortableIds.length}`;
      },
      onDragEnd({ active, over }) {
        const label = labelForId(active.id);
        if (over && active.id !== over.id) {
          const overIdx = sortableIds.indexOf(String(over.id));
          return `Dropped ${label} filter at position ${overIdx + 1}`;
        }
        return `Dropped ${label} filter back in its original position`;
      },
      onDragCancel({ active }) {
        return `Cancelled dragging ${labelForId(active.id)} filter`;
      },
    };
  }, [filterDefinitions, sortableIds, getFilterLabel]);

  const accessibility = useMemo(() => ({ announcements }), [announcements]);

  if (!filterDefinitions || filterDefinitions.length === 0) {
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
      <div className={classnames(styles.content, className)} style={style}>
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
            {filterDefinitions.map((definition, index) => {
              const id = sortableIds[index];
              const filterKey = getFilterKey(definition);
              const label = getFilterLabel(definition);
              const state =
                filterStates.get(filterKey) ??
                emptyDisplayStates.get(filterKey);

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
                  searchField={definition.searchField}
                />
              );
            })}
          </SortableContext>

          <DragOverlay dropAnimation={null} className={styles.dragOverlay}>
            {activeDefinition && activeFilterKey && (
              <FilterListItem
                definition={activeDefinition}
                filterKey={activeFilterKey}
                label={getFilterLabel(activeDefinition)}
                filterState={
                  filterStates.get(activeFilterKey) ??
                  emptyDisplayStates.get(activeFilterKey)
                }
                onFilterStateChanged={onFilterStateChanged}
                onFilterRemoved={onFilterRemoved}
                renderInput={renderInput}
                searchField={activeDefinition.searchField}
                dragHandleAttributes={DRAG_OVERLAY_HANDLE_ATTRIBUTES}
              />
            )}
          </DragOverlay>
        </DndContext>
      </div>
    );
  }

  return (
    <div className={classnames(styles.content, className)} style={style}>
      {filterDefinitions.map((definition) => {
        const filterKey = getFilterKey(definition);
        const state =
          filterStates.get(filterKey) ?? emptyDisplayStates.get(filterKey);

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
            searchField={definition.searchField}
          />
        );
      })}
    </div>
  );
}
