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

import type {
  ObjectOrInterfaceDefinition,
  ObjectSet,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
} from "@osdk/api";
import type * as React from "react";

/**
 * Props for the OSDK-aware `ObjectKanban` component.
 *
 * A kanban renders a horizontal row of independently-scrolling columns.
 * Each column is backed by an `ObjectSet` whose members are fetched via
 * `@osdk/react`. Cards can be dragged between columns; the consumer
 * observes `onCardMoved` and persists the new membership (typically by
 * applying an action that updates a status property on the dragged object).
 */
export interface ObjectKanbanProps<
  Q extends ObjectOrInterfaceDefinition,
  TColumnId extends string = string,
> {
  /**
   * The object or interface type of the cards.
   * Required so that the kanban knows how to fetch and type cards.
   */
  objectType: Q;

  /**
   * Optional parent object set applied as an intersection on top of every
   * column's own `objectSet`. Use this to scope every column with a global
   * filter (e.g. "only the current user's tickets") without rewriting each
   * column's `objectSet`.
   *
   * If omitted, each column's `objectSet` is fetched as-is.
   */
  objectSet?: ObjectSet<Q>;

  /**
   * Columns to render, left-to-right. Order is taken from this array.
   * Membership of each column is defined by `column.objectSet`.
   */
  columns: ReadonlyArray<ObjectKanbanColumn<Q, TColumnId>>;

  /**
   * Number of cards to fetch per page in each column. Applied to every
   * column unless overridden on the column itself.
   *
   * @default 50
   */
  pageSize?: number;

  /**
   * Minimum time between fetch requests, in milliseconds. Mirrors
   * `ObjectTable.dedupeIntervalMs` — increasing this reduces redundant
   * network calls when the same column data is requested in quick
   * succession.
   *
   * @default 60_000
   */
  dedupeIntervalMs?: number;

  /**
   * Custom renderer for the card title. Receives the OSDK object and the
   * id of the column the card currently lives in.
   *
   * @default the object's `$title`
   */
  renderCardTitle?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
    columnId: TColumnId,
  ) => React.ReactNode;

  /**
   * Custom renderer for the card body shown below the title. Use this to
   * surface a small set of properties or a status chip on each card.
   *
   * @default empty
   */
  renderCardBody?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
    columnId: TColumnId,
  ) => React.ReactNode;

  /**
   * Whether cards can be dragged between columns.
   *
   * @default true
   */
  enableCardDragging?: boolean;

  /**
   * The currently selected card's primary key.
   *
   * If provided, selection is controlled — `onSelectObject` is required to
   * make the selection update.
   */
  selectedObject?: PrimaryKeyType<Q>;

  /**
   * Initial selected card's primary key when uncontrolled. Ignored when
   * `selectedObject` is provided.
   */
  defaultSelectedObject?: PrimaryKeyType<Q>;

  /**
   * Called when the user selects a card.
   *
   * Cards are selected via mouse click or Enter while focused. Space is
   * reserved by the keyboard drag sensor and does NOT trigger selection.
   *
   * Fires in both controlled and uncontrolled modes so consumers can layer
   * analytics or navigation on top of the default behavior.
   *
   * @param object   The selected OSDK object.
   * @param columnId The column the selected card currently lives in.
   */
  onSelectObject?: (
    object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>,
    columnId: TColumnId,
  ) => void;

  /**
   * Called after a card is dropped into a different column. The component
   * does NOT mutate the underlying object set — the consumer is expected to
   * apply an action (e.g. updating a status property) that, once observed
   * by `@osdk/react`, repopulates the source/destination columns.
   *
   * If the user drops the card back into its original column, this is not
   * called.
   */
  onCardMoved?: (info: CardMovedInfo<Q, TColumnId>) => void;

  /**
   * Optional `className` applied to the kanban's outer scroll container.
   */
  className?: string;
}

/**
 * Definition of a single column inside an `ObjectKanban`.
 */
export interface ObjectKanbanColumn<
  Q extends ObjectOrInterfaceDefinition,
  TId extends string = string,
> {
  /**
   * Stable, unique column identifier. Bubbled through `onSelectObject` and
   * `onCardMoved` so the consumer can correlate events to columns.
   *
   * Typed as a generic so consumers can use a string-literal union to keep
   * exhaustive type-safety in their callback switches.
   */
  id: TId;

  /**
   * Header label displayed at the top of the column. Consumer owns i18n.
   */
  displayName: string;

  /**
   * The `ObjectSet` defining membership of this column. The kanban fetches
   * cards by subscribing to this set via `@osdk/react`. When the parent
   * `ObjectKanbanProps.objectSet` is supplied, the effective set is the
   * intersection of the two.
   */
  objectSet: ObjectSet<Q>;

  /**
   * Per-column page size override. Falls back to the kanban's `pageSize`.
   */
  pageSize?: number;

  /**
   * When `true`, cards cannot be dropped INTO this column. Cards inside a
   * read-only column can still be dragged OUT of it (unless the consumer
   * disables that with `enableCardDragging`).
   *
   * @default false
   */
  readOnly?: boolean;
}

/**
 * Payload passed to `onCardMoved` after a successful drop into a different
 * column.
 */
export interface CardMovedInfo<
  Q extends ObjectOrInterfaceDefinition,
  TColumnId extends string = string,
> {
  /** The dragged OSDK object. */
  object: Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>;
  /** Column the card was dragged out of. */
  fromColumnId: TColumnId;
  /** Column the card was dropped into. */
  toColumnId: TColumnId;
  /** Membership query of the source column. */
  fromObjectSet: ObjectSet<Q>;
  /** Membership query of the destination column. */
  toObjectSet: ObjectSet<Q>;
}
