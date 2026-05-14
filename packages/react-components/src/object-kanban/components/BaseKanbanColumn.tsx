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

import { useDroppable } from "@dnd-kit/core";
import classNames from "classnames";
import React from "react";
import { SkeletonBar } from "../../base-components/skeleton/SkeletonBar.js";
import type { BaseObjectKanbanColumn } from "../BaseObjectKanban.js";
import { COLUMN_DROPPABLE_PREFIX } from "../constants.js";
import type { BaseKanbanCard as BaseKanbanCardData } from "../utils/types.js";
import { BaseKanbanCard } from "./BaseKanbanCard.js";
import styles from "./BaseKanbanColumn.module.css";

export interface BaseKanbanColumnProps<
  TCard extends BaseKanbanCardData = BaseKanbanCardData,
> {
  column: BaseObjectKanbanColumn<TCard>;
  selectedCardId: string | undefined;
  onSelectCard: (card: TCard, columnId: string) => void;
  enableCardDragging: boolean;
  renderCardTitle:
    | ((card: TCard, columnId: string) => React.ReactNode)
    | undefined;
  renderCardBody:
    | ((card: TCard, columnId: string) => React.ReactNode)
    | undefined;
  isDragInProgress: boolean;
}

const SKELETON_CARD_KEYS = ["a", "b", "c"];

export function BaseKanbanColumn<
  TCard extends BaseKanbanCardData = BaseKanbanCardData,
>({
  column,
  selectedCardId,
  onSelectCard,
  enableCardDragging,
  renderCardTitle,
  renderCardBody,
  isDragInProgress,
}: BaseKanbanColumnProps<TCard>): React.ReactElement {
  const isDroppable = !column.readOnly;

  const { setNodeRef, isOver } = useDroppable({
    id: `${COLUMN_DROPPABLE_PREFIX}${column.id}`,
    disabled: !isDroppable,
  });

  const cardCount = column.cards.length;
  const showCount = !column.isLoading && column.error == null;

  return (
    <section
      ref={setNodeRef}
      className={classNames(styles.column, {
        [styles.columnReadOnly]: column.readOnly,
        [styles.columnDropActive]: isOver && isDragInProgress && isDroppable,
      })}
      data-column-id={column.id}
      aria-label={column.displayName}
    >
      <header className={styles.header}>
        <span className={styles.headerTitle}>{column.displayName}</span>
        {showCount && (
          <span className={styles.headerCount}>
            {column.totalCount != null && column.totalCount > cardCount
              ? `${cardCount} / ${column.totalCount}`
              : cardCount}
          </span>
        )}
      </header>
      <div className={styles.body}>
        {column.error != null
          ? (
            <div className={styles.errorState} role="alert">
              {column.error.message}
            </div>
          )
          : column.isLoading && cardCount === 0
          ? (
            SKELETON_CARD_KEYS.map((key) => (
              <div key={key} className={styles.skeletonCard}>
                <SkeletonBar width="100%" className={styles.skeletonLine} />
                <SkeletonBar width="60%" className={styles.skeletonLine} />
                <SkeletonBar width="20%" className={styles.skeletonLine} />
              </div>
            ))
          )
          : cardCount === 0
          ? <div className={styles.emptyState}>No cards</div>
          : (
            column.cards.map((card) => (
              <BaseKanbanCard<TCard>
                key={card.id}
                card={card}
                columnId={column.id}
                isSelected={selectedCardId === card.id}
                enableCardDragging={enableCardDragging}
                renderCardTitle={renderCardTitle}
                renderCardBody={renderCardBody}
                onSelect={onSelectCard}
              />
            ))
          )}
      </div>
    </section>
  );
}
