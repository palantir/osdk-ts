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

/**
 * Minimal shape every kanban card must satisfy. The base layer is generic
 * over `TCard extends BaseKanbanCard` so the OSDK wrapper can attach an
 * OSDK object payload to each card without leaking OSDK types into the
 * base layer.
 */
export interface BaseKanbanCard {
  /** Unique card identifier within the kanban. */
  id: string;
  /** Default title rendered when `renderCardTitle` is not provided. */
  title: string;
}

/**
 * Payload attached to dnd-kit's `active.data.current` while a card is
 * being dragged. Lets the kanban's `onDragEnd` recover the source column
 * and the original card object.
 */
export interface CardDragData<TCard extends BaseKanbanCard> {
  type: "kanban-card";
  columnId: string;
  card: TCard;
}
