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

import { useCallback, useState } from "react";
import type { BaseKanbanCard } from "../utils/types.js";

export interface UseKanbanSelectionProps<TCard extends BaseKanbanCard> {
  /** Controlled selected card id. */
  selectedCardId?: string;
  /** Uncontrolled seed. */
  defaultSelectedCardId?: string;
  /** Fires in both controlled and uncontrolled modes. */
  onSelectCard?: (card: TCard, columnId: string) => void;
}

export interface UseKanbanSelectionResult<TCard extends BaseKanbanCard> {
  /** Resolved selected card id (controlled prop or internal state). */
  selectedCardId: string | undefined;
  /**
   * Toggle-style selection handler. In uncontrolled mode the internal state
   * is updated to the clicked card's id; clicking the same card again
   * deselects it. In controlled mode the consumer owns state.
   */
  handleSelectCard: (card: TCard, columnId: string) => void;
}

/**
 * Selection hook for `BaseObjectKanban`. Mirrors the controlled/uncontrolled
 * pattern from `useRowSelection` in `object-table` but for a single card.
 */
export function useKanbanSelection<TCard extends BaseKanbanCard>({
  selectedCardId: selectedCardIdProp,
  defaultSelectedCardId,
  onSelectCard,
}: UseKanbanSelectionProps<TCard>): UseKanbanSelectionResult<TCard> {
  const isControlled = selectedCardIdProp !== undefined;
  const [internalSelectedCardId, setInternalSelectedCardId] = useState<
    string | undefined
  >(defaultSelectedCardId);

  const selectedCardId = isControlled
    ? selectedCardIdProp
    : internalSelectedCardId;

  const handleSelectCard = useCallback(
    (card: TCard, columnId: string) => {
      if (!isControlled) {
        setInternalSelectedCardId((prev) =>
          prev === card.id ? undefined : card.id
        );
      }
      onSelectCard?.(card, columnId);
    },
    [isControlled, onSelectCard],
  );

  return { selectedCardId, handleSelectCard };
}
