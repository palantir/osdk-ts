/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import {
  DndContext as BaseDndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  pointerWithin,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import classNames from "classnames";
import React, { useCallback, useMemo, useState } from "react";
import styles from "./BaseObjectKanban.module.css";
import { BaseKanbanCard } from "./components/BaseKanbanCard.js";
import { BaseKanbanColumn } from "./components/BaseKanbanColumn.js";
import { COLUMN_DROPPABLE_PREFIX } from "./constants.js";
import { useKanbanSelection } from "./hooks/useKanbanSelection.js";
import type {
  BaseKanbanCard as BaseKanbanCardData,
  CardDragData,
} from "./utils/types.js";

interface ActiveDragHandle {
  cardId: string;
  columnId: string;
}

/**
 * Single column inside the OSDK-agnostic kanban shell. The base layer does
 * not know how cards are fetched; it only receives an already-resolved list
 * along with loading/error signals.
 */
export interface BaseObjectKanbanColumn<
  TCard extends BaseKanbanCardData = BaseKanbanCardData,
> {
  /** Stable column identifier. */
  id: string;
  /** Header label. */
  displayName: string;
  /** Cards currently in this column. */
  cards: ReadonlyArray<TCard>;
  /** When true, the column shows a loading skeleton inside its body. */
  isLoading?: boolean;
  /** Surfaced as an inline error message under the column header. */
  error?: Error;
  /** Optional 'showing N of M' hint shown next to the header. */
  totalCount?: number;
  /**
   * When true, the column cannot accept drops. Cards inside it can still be
   * dragged OUT unless `enableCardDragging` is false at the kanban level.
   *
   * @default false
   */
  readOnly?: boolean;
}

export interface BaseObjectKanbanProps<
  TCard extends BaseKanbanCardData = BaseKanbanCardData,
> {
  /** Columns to render, left-to-right, in array order. */
  columns: ReadonlyArray<BaseObjectKanbanColumn<TCard>>;

  /**
   * Controlled selection. The card with this `id` is highlighted. When
   * provided, `onSelectCard` is required to make the selection update.
   */
  selectedCardId?: string;
  /**
   * Initial selected card id when uncontrolled. Ignored when
   * `selectedCardId` is provided.
   */
  defaultSelectedCardId?: string;

  /** @default true */
  enableCardDragging?: boolean;

  /** Custom title renderer. Defaults to `card.title`. */
  renderCardTitle?: (card: TCard, columnId: string) => React.ReactNode;
  /** Custom body renderer. Defaults to empty. */
  renderCardBody?: (card: TCard, columnId: string) => React.ReactNode;

  /**
   * Fires when the user selects a card. In uncontrolled mode the internal
   * selected card id is also updated.
   */
  onSelectCard?: (card: TCard, columnId: string) => void;

  /**
   * Fires after a card is dropped into a column different from its source.
   * Dropping the card back into its origin column is a no-op and does NOT
   * fire this callback.
   */
  onCardMoved?: (info: {
    card: TCard;
    fromColumnId: string;
    toColumnId: string;
  }) => void;

  className?: string;
}

export function BaseObjectKanban<
  TCard extends BaseKanbanCardData = BaseKanbanCardData,
>({
  columns,
  selectedCardId: selectedCardIdProp,
  defaultSelectedCardId,
  enableCardDragging = true,
  renderCardTitle,
  renderCardBody,
  onSelectCard,
  onCardMoved,
  className,
}: BaseObjectKanbanProps<TCard>): React.ReactElement {
  const { selectedCardId, handleSelectCard } = useKanbanSelection<TCard>({
    selectedCardId: selectedCardIdProp,
    defaultSelectedCardId,
    onSelectCard,
  });

  const [activeDrag, setActiveDrag] = useState<ActiveDragHandle | null>(null);

  // Re-resolve the live card from `columns` so the DragOverlay clone always
  // mirrors the latest fetched data, not a snapshot captured at drag start.
  const activeCard = useMemo<TCard | undefined>(() => {
    if (activeDrag == null) return undefined;
    const column = columns.find((c) => c.id === activeDrag.columnId);
    return column?.cards.find((c) => c.id === activeDrag.cardId);
  }, [activeDrag, columns]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const columnIdSet = useMemo(() => {
    return new Set(columns.map((c) => c.id));
  }, [columns]);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const data = event.active.data.current as CardDragData<TCard> | undefined;
    if (data) {
      setActiveDrag({ cardId: data.card.id, columnId: data.columnId });
    }
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveDrag(null);
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      setActiveDrag(null);
      const { active, over } = event;
      if (over == null) {
        return;
      }
      const data = active.data.current as CardDragData<TCard> | undefined;
      if (data == null) {
        return;
      }
      const fromColumnId = data.columnId;
      const overId = String(over.id);
      if (!overId.startsWith(COLUMN_DROPPABLE_PREFIX)) {
        return;
      }
      const toColumnId = overId.slice(COLUMN_DROPPABLE_PREFIX.length);
      if (toColumnId === fromColumnId) {
        return;
      }
      if (!columnIdSet.has(toColumnId)) {
        return;
      }
      const targetColumn = columns.find((c) => c.id === toColumnId);
      if (targetColumn?.readOnly) {
        return;
      }
      onCardMoved?.({
        card: data.card,
        fromColumnId,
        toColumnId,
      });
    },
    [columns, columnIdSet, onCardMoved],
  );

  // dnd-kit's DndContext is currently mistyped against @types/react 18.
  // Cast through the same workaround used elsewhere in the package.
  const DndContext = BaseDndContext as unknown as React.ComponentType<
    React.ComponentProps<typeof BaseDndContext>
  >;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className={classNames(styles.kanban, className)}>
        {columns.map((column) => (
          <BaseKanbanColumn<TCard>
            key={column.id}
            column={column}
            selectedCardId={selectedCardId}
            onSelectCard={handleSelectCard}
            enableCardDragging={enableCardDragging}
            renderCardTitle={renderCardTitle}
            renderCardBody={renderCardBody}
            isDragInProgress={activeDrag != null}
          />
        ))}
      </div>
      <DragOverlay dropAnimation={null}>
        {activeDrag != null && activeCard != null
          ? (
            <BaseKanbanCard<TCard>
              card={activeCard}
              columnId={activeDrag.columnId}
              isSelected={false}
              isOverlay={true}
              enableCardDragging={false}
              renderCardTitle={renderCardTitle}
              renderCardBody={renderCardBody}
            />
          )
          : null}
      </DragOverlay>
    </DndContext>
  );
}
