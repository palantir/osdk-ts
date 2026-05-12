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

import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useKanbanSelection } from "../hooks/useKanbanSelection.js";

interface StoryCard {
  id: string;
  title: string;
}

const CARD_A: StoryCard = { id: "card-a", title: "Card A" };
const CARD_B: StoryCard = { id: "card-b", title: "Card B" };

describe("useKanbanSelection", () => {
  describe("uncontrolled mode", () => {
    it("seeds selectedCardId to undefined when no default is provided", () => {
      const { result } = renderHook(() => useKanbanSelection<StoryCard>({}));

      expect(result.current.selectedCardId).toBeUndefined();
    });

    it("seeds selectedCardId from defaultSelectedCardId", () => {
      const { result } = renderHook(() =>
        useKanbanSelection<StoryCard>({
          defaultSelectedCardId: "card-a",
        })
      );

      expect(result.current.selectedCardId).toBe("card-a");
    });

    it("clicking selects the card; clicking again deselects it", () => {
      const onSelectCard = vi.fn();
      const { result } = renderHook(() =>
        useKanbanSelection<StoryCard>({ onSelectCard })
      );

      act(() => {
        result.current.handleSelectCard(CARD_A, "todo");
      });
      expect(result.current.selectedCardId).toBe("card-a");
      expect(onSelectCard).toHaveBeenLastCalledWith(CARD_A, "todo");

      act(() => {
        result.current.handleSelectCard(CARD_A, "todo");
      });
      expect(result.current.selectedCardId).toBeUndefined();
      expect(onSelectCard).toHaveBeenCalledTimes(2);
    });

    it("clicking a different card replaces the selection", () => {
      const { result } = renderHook(() =>
        useKanbanSelection<StoryCard>({
          defaultSelectedCardId: "card-a",
        })
      );

      act(() => {
        result.current.handleSelectCard(CARD_B, "doing");
      });

      expect(result.current.selectedCardId).toBe("card-b");
    });
  });

  describe("controlled mode", () => {
    it("uses the selectedCardId prop and ignores internal state", () => {
      const { result, rerender } = renderHook(
        ({ selectedCardId }: { selectedCardId: string | undefined }) =>
          useKanbanSelection<StoryCard>({ selectedCardId }),
        { initialProps: { selectedCardId: "card-a" } },
      );

      expect(result.current.selectedCardId).toBe("card-a");

      rerender({ selectedCardId: "card-b" });
      expect(result.current.selectedCardId).toBe("card-b");
    });

    it("calling handleSelectCard fires onSelectCard but does NOT change selectedCardId", () => {
      const onSelectCard = vi.fn();
      const { result } = renderHook(() =>
        useKanbanSelection<StoryCard>({
          selectedCardId: "card-a",
          onSelectCard,
        })
      );

      act(() => {
        result.current.handleSelectCard(CARD_B, "doing");
      });

      // Callback fires.
      expect(onSelectCard).toHaveBeenCalledTimes(1);
      expect(onSelectCard).toHaveBeenLastCalledWith(CARD_B, "doing");

      // Parent owns state: hook reports the controlled prop unchanged.
      expect(result.current.selectedCardId).toBe("card-a");
    });
  });

  describe("onSelectCard callback signature", () => {
    it("fires (card, columnId) in uncontrolled mode", () => {
      const onSelectCard = vi.fn();
      const { result } = renderHook(() =>
        useKanbanSelection<StoryCard>({ onSelectCard })
      );

      act(() => {
        result.current.handleSelectCard(CARD_A, "todo");
      });

      expect(onSelectCard).toHaveBeenCalledWith(CARD_A, "todo");
    });

    it("fires (card, columnId) in controlled mode", () => {
      const onSelectCard = vi.fn();
      const { result } = renderHook(() =>
        useKanbanSelection<StoryCard>({
          selectedCardId: "card-a",
          onSelectCard,
        })
      );

      act(() => {
        result.current.handleSelectCard(CARD_B, "doing");
      });

      expect(onSelectCard).toHaveBeenCalledWith(CARD_B, "doing");
    });
  });
});
