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

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import classNames from "classnames";
import React, { useCallback, useMemo } from "react";
import type {
  BaseKanbanCard as BaseKanbanCardData,
  CardDragData,
} from "../utils/types.js";
import styles from "./BaseKanbanCard.module.css";

export interface BaseKanbanCardProps<
  TCard extends BaseKanbanCardData = BaseKanbanCardData,
> {
  card: TCard;
  columnId: string;
  isSelected: boolean;
  enableCardDragging: boolean;
  renderCardTitle:
    | ((card: TCard, columnId: string) => React.ReactNode)
    | undefined;
  renderCardBody:
    | ((card: TCard, columnId: string) => React.ReactNode)
    | undefined;
  onSelect?: (card: TCard, columnId: string) => void;
  /**
   * Set to true when this instance is the drag-overlay clone. Disables
   * dnd-kit instrumentation and the source-card opacity so the overlay
   * renders crisp and fully opaque.
   */
  isOverlay?: boolean;
}

export function BaseKanbanCard<
  TCard extends BaseKanbanCardData = BaseKanbanCardData,
>({
  card,
  columnId,
  isSelected,
  enableCardDragging,
  renderCardTitle,
  renderCardBody,
  onSelect,
  isOverlay = false,
}: BaseKanbanCardProps<TCard>): React.ReactElement {
  const dragData: CardDragData<TCard> = useMemo(
    () => ({ type: "kanban-card", columnId, card }),
    [columnId, card],
  );

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: card.id,
    data: dragData,
    disabled: !enableCardDragging || isOverlay,
  });

  const style = useMemo(() => ({
    transform: CSS.Translate.toString(transform),
  }), [transform]);

  const handleClick = useCallback(() => {
    onSelect?.(card, columnId);
  }, [onSelect, card, columnId]);

  // dnd-kit's KeyboardSensor uses Space to pick up / drop a card and arrow
  // keys to move it. Enter is unbound so it's a safe key for "select this
  // card without entering drag mode". We delegate every other keypress to
  // dnd-kit so keyboard drag continues to work end-to-end.
  const dndOnKeyDown = (
    listeners as
      | { onKeyDown?: (event: React.KeyboardEvent) => void }
      | undefined
  )?.onKeyDown;
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        onSelect?.(card, columnId);
        return;
      }
      dndOnKeyDown?.(event);
    },
    [dndOnKeyDown, onSelect, card, columnId],
  );

  const title = renderCardTitle ? renderCardTitle(card, columnId) : card.title;
  const body = renderCardBody ? renderCardBody(card, columnId) : null;

  return (
    <div
      ref={isOverlay ? undefined : setNodeRef}
      style={isOverlay ? undefined : style}
      className={classNames(styles.card, {
        [styles.cardSelected]: isSelected,
        [styles.cardDragging]: isDragging,
        [styles.cardOverlay]: isOverlay,
      })}
      data-card-id={card.id}
      data-column-id={columnId}
      {...(isOverlay ? {} : attributes)}
      {...(isOverlay ? {} : listeners)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-pressed={isSelected}
    >
      <div className={styles.cardTitle}>{title}</div>
      {body != null && <div className={styles.cardBody}>{body}</div>}
    </div>
  );
}
