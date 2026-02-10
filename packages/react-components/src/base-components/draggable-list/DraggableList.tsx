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

import { Button } from "@base-ui/react/button";
import { DragHandleVertical, SmallCross, Trash } from "@blueprintjs/icons";
import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import classNames from "classnames";
import type {
  RefObject} from "react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import styles from "./DraggableList.module.css";

export interface DraggableItem {
  id: string;
  label: string;
}

type RemoveIconVariant = "trash" | "cross";

interface DraggableListItemProps<T extends DraggableItem> {
  item: T;
  onRemove?: (id: string) => void;
  removeIconVariant?: RemoveIconVariant;
  renderContent?: (item: T) => React.ReactNode;
}

function DraggableListItem<T extends DraggableItem>({
  item,
  onRemove,
  removeIconVariant = "trash",
  renderContent,
}: DraggableListItemProps<T>): React.ReactElement {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleRemove = useCallback(() => {
    onRemove?.(item.id);
  }, [item.id, onRemove]);

  const RemoveIcon = removeIconVariant === "trash" ? Trash : SmallCross;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={styles.draggableItem}
      data-dragging={isDragging}
    >
      <div
        className={styles.dragHandle}
        aria-label={`Reorder ${item.label}`}
        {...attributes}
        {...listeners}
      >
        <DragHandleVertical className={styles.icon} />
      </div>
      <div className={styles.itemContent}>
        {renderContent ? renderContent(item) : item.label}
      </div>
      {onRemove && (
        <Button
          className={styles.removeButton}
          onClick={handleRemove}
          aria-label={`Remove ${item.label}`}
        >
          <RemoveIcon className={styles.icon} />
        </Button>
      )}
    </div>
  );
}

export interface DraggableListProps<T extends DraggableItem> {
  items: T[];
  onReorder: (fromIndex: number, toIndex: number) => void;
  onRemove: (id: string) => void;
  removeIconVariant?: RemoveIconVariant;
  renderContent?: (item: T) => React.ReactNode;
  emptyMessage?: string;
  className?: string;
}

export function DraggableList<T extends DraggableItem>({
  items,
  onReorder,
  onRemove,
  removeIconVariant = "cross",
  renderContent,
  emptyMessage,
  className,
}: DraggableListProps<T>): React.ReactElement {
  const itemIds = useMemo(() => items.map((item) => item.id), [items]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (over && active.id !== over.id) {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        onReorder(oldIndex, newIndex);
      }
    },
    [items, onReorder],
  );

  const containerRef = useRef<HTMLDivElement>(null);

  useKeyboardEvents(containerRef);

  return (
    <div
      ref={containerRef}
      className={classNames(styles.draggableListContainer, className)}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={itemIds}
          strategy={verticalListSortingStrategy}
        >
          {items.map((item) => (
            <DraggableListItem<T>
              key={item.id}
              item={item}
              onRemove={onRemove}
              removeIconVariant={removeIconVariant}
              renderContent={renderContent}
            />
          ))}
        </SortableContext>
      </DndContext>
      {items.length === 0 && emptyMessage && (
        <div className={styles.emptyState}>{emptyMessage}</div>
      )}
    </div>
  );
}

const useKeyboardEvents = (containerRef: RefObject<HTMLDivElement>) => {
  // Base UI's DialogPopup calls stopPropagation on arrow key events, which
  // prevents them from reaching @dnd-kit's document-level KeyboardSensor
  // listener. We use a native capture-phase listener to intercept arrow keys
  // before the dialog can swallow them, and re-dispatch them on the document
  // so @dnd-kit can process keyboard-driven reordering.
  useEffect(() => {
    const el = containerRef.current;
    if (el == null) {
      return;
    }

    const ARROW_KEYS = new Set([
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ]);

    function handleCapture(event: KeyboardEvent) {
      if (!ARROW_KEYS.has(event.key)) {
        return;
      }

      // Only intercept when a drag is active (an item has [data-dragging="true"])
      if (el!.querySelector("[data-dragging=\"true\"]") == null) {
        return;
      }

      event.stopPropagation();

      document.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: event.key,
          code: event.code,
          bubbles: true,
        }),
      );
    }

    el.addEventListener("keydown", handleCapture, true);
    return () => el.removeEventListener("keydown", handleCapture, true);
  }, []);
};
