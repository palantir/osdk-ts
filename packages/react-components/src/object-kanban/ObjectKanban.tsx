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
  PropertyKeys,
} from "@osdk/api";
import { useObjectSet } from "@osdk/react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BaseObjectKanban } from "./BaseObjectKanban.js";
import type {
  ObjectKanbanColumn,
  ObjectKanbanProps,
} from "./ObjectKanbanApi.js";
import type { OsdkKanbanCard } from "./utils/osdkCard.js";
import { toOsdkKanbanCards } from "./utils/osdkCard.js";

interface ColumnSlot<Q extends ObjectOrInterfaceDefinition> {
  cards: ReadonlyArray<OsdkKanbanCard<Q>>;
  isLoading: boolean;
  error: Error | undefined;
  totalCount: number | undefined;
}

const DEFAULT_PAGE_SIZE = 50;
const DEFAULT_DEDUPE_INTERVAL_MS = 60_000;

export function ObjectKanban<
  Q extends ObjectOrInterfaceDefinition,
  TColumnId extends string = string,
>({
  objectType,
  objectSet,
  columns,
  pageSize = DEFAULT_PAGE_SIZE,
  dedupeIntervalMs = DEFAULT_DEDUPE_INTERVAL_MS,
  renderCardTitle,
  renderCardBody,
  enableCardDragging = true,
  selectedObject,
  defaultSelectedObject,
  onSelectObject,
  onCardMoved,
  className,
}: ObjectKanbanProps<Q, TColumnId>): React.ReactElement {
  // `objectType` anchors the generic `Q` so callers don't have to pass it
  // explicitly. Each column's `objectSet` carries enough information to
  // fetch — `objectType` itself is intentionally unused at runtime today.
  void objectType;

  const [columnSlots, setColumnSlots] = useState<
    ReadonlyMap<string, ColumnSlot<Q>>
  >(() => new Map());

  const handleColumnSlot = useCallback(
    (id: string, slot: ColumnSlot<Q>) => {
      setColumnSlots((prev) => {
        const existing = prev.get(id);
        if (
          existing
          && existing.cards === slot.cards
          && existing.isLoading === slot.isLoading
          && existing.error === slot.error
          && existing.totalCount === slot.totalCount
        ) {
          return prev;
        }
        const next = new Map(prev);
        next.set(id, slot);
        return next;
      });
    },
    [],
  );

  // Drop slots for columns that have been removed since the previous render.
  const declaredColumnIds = useMemo(
    () => new Set<string>(columns.map((c) => c.id)),
    [columns],
  );
  useEffect(() => {
    setColumnSlots((prev) => {
      let mutated = false;
      const next = new Map(prev);
      for (const id of prev.keys()) {
        if (!declaredColumnIds.has(id)) {
          next.delete(id);
          mutated = true;
        }
      }
      return mutated ? next : prev;
    });
  }, [declaredColumnIds]);

  const baseColumns = useMemo(() => {
    return columns.map((column) => {
      const slot = columnSlots.get(column.id);
      return {
        id: column.id,
        displayName: column.displayName,
        readOnly: column.readOnly,
        cards: slot?.cards ?? [],
        isLoading: slot?.isLoading ?? true,
        error: slot?.error,
        totalCount: slot?.totalCount,
      };
    });
  }, [columns, columnSlots]);

  // Map OSDK render slots into the generic-card render slots BaseObjectKanban expects.
  const baseRenderCardTitle = useMemo(() => {
    if (renderCardTitle == null) return undefined;
    return (card: OsdkKanbanCard<Q>, columnId: string): React.ReactNode =>
      renderCardTitle(card.object, columnId as TColumnId);
  }, [renderCardTitle]);

  const baseRenderCardBody = useMemo(() => {
    if (renderCardBody == null) return undefined;
    return (card: OsdkKanbanCard<Q>, columnId: string): React.ReactNode =>
      renderCardBody(card.object, columnId as TColumnId);
  }, [renderCardBody]);

  const handleSelectCard = useCallback(
    (card: OsdkKanbanCard<Q>, columnId: string) => {
      onSelectObject?.(card.object, columnId as TColumnId);
    },
    [onSelectObject],
  );

  const columnsById = useMemo(() => {
    const map = new Map<string, ObjectKanbanColumn<Q, TColumnId>>();
    for (const column of columns) {
      map.set(column.id, column);
    }
    return map;
  }, [columns]);

  const handleCardMoved = useCallback(
    (info: {
      card: OsdkKanbanCard<Q>;
      fromColumnId: string;
      toColumnId: string;
    }) => {
      const fromColumn = columnsById.get(info.fromColumnId);
      const toColumn = columnsById.get(info.toColumnId);
      if (fromColumn == null || toColumn == null) {
        return;
      }
      onCardMoved?.({
        object: info.card.object,
        fromColumnId: info.fromColumnId as TColumnId,
        toColumnId: info.toColumnId as TColumnId,
        fromObjectSet: fromColumn.objectSet,
        toObjectSet: toColumn.objectSet,
      });
    },
    [columnsById, onCardMoved],
  );

  const selectedCardId = selectedObject != null
    ? String(selectedObject)
    : undefined;
  const defaultSelectedCardId = defaultSelectedObject != null
    ? String(defaultSelectedObject)
    : undefined;

  return (
    <>
      {columns.map((column) => (
        <ObjectKanbanColumnDataFetcher<Q, TColumnId>
          key={column.id}
          column={column}
          parentObjectSet={objectSet}
          defaultPageSize={pageSize}
          dedupeIntervalMs={dedupeIntervalMs}
          onSlot={handleColumnSlot}
        />
      ))}
      <BaseObjectKanban<OsdkKanbanCard<Q>>
        columns={baseColumns}
        selectedCardId={selectedCardId}
        defaultSelectedCardId={defaultSelectedCardId}
        enableCardDragging={enableCardDragging}
        renderCardTitle={baseRenderCardTitle}
        renderCardBody={baseRenderCardBody}
        onSelectCard={handleSelectCard}
        onCardMoved={handleCardMoved}
        className={className}
      />
    </>
  );
}

interface ObjectKanbanColumnDataFetcherProps<
  Q extends ObjectOrInterfaceDefinition,
  TColumnId extends string,
> {
  column: ObjectKanbanColumn<Q, TColumnId>;
  parentObjectSet: ObjectSet<Q> | undefined;
  defaultPageSize: number;
  dedupeIntervalMs: number;
  onSlot: (id: string, slot: ColumnSlot<Q>) => void;
}

/**
 * Sub-component that calls `useObjectSet` for a single column. Pushes the
 * resolved cards/loading/error up to the parent `ObjectKanban` via
 * `onSlot`. Renders nothing — the parent owns layout via `BaseObjectKanban`.
 *
 * One sub-component per column keeps React's "hook count must be stable
 * per component" rule intact even when the consumer adds or removes
 * columns at runtime.
 */
function ObjectKanbanColumnDataFetcher<
  Q extends ObjectOrInterfaceDefinition,
  TColumnId extends string,
>({
  column,
  parentObjectSet,
  defaultPageSize,
  dedupeIntervalMs,
  onSlot,
}: ObjectKanbanColumnDataFetcherProps<Q, TColumnId>): null {
  const intersect = useMemo(
    () => (parentObjectSet ? [parentObjectSet] : undefined),
    [parentObjectSet],
  );

  const result = useObjectSet(column.objectSet, {
    pageSize: column.pageSize ?? defaultPageSize,
    dedupeIntervalMs,
    intersect,
  });

  // Stabilize the projected card list — `useObjectSet` may return a new
  // `data` array on every fire even when contents are unchanged.
  const lastDataRef = useRef<
    | Array<Osdk.Instance<Q, "$allBaseProperties", PropertyKeys<Q>>>
    | undefined
  >(undefined);
  const lastCardsRef = useRef<ReadonlyArray<OsdkKanbanCard<Q>>>([]);

  const cards = useMemo(() => {
    if (result.data === lastDataRef.current) {
      return lastCardsRef.current;
    }
    lastDataRef.current = result.data;
    const next = toOsdkKanbanCards<Q>(result.data ?? []);
    lastCardsRef.current = next;
    return next;
  }, [result.data]);

  const totalCount = result.totalCount != null
    ? Number(result.totalCount)
    : undefined;

  useEffect(() => {
    onSlot(column.id, {
      cards,
      isLoading: result.isLoading,
      error: result.error,
      totalCount,
    });
  }, [
    onSlot,
    column.id,
    cards,
    result.isLoading,
    result.error,
    totalCount,
  ]);

  return null;
}
