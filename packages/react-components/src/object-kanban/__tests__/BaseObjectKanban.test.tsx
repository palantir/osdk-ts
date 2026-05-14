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

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  BaseObjectKanban,
  type BaseObjectKanbanColumn,
} from "../BaseObjectKanban.js";

// Drag-and-drop movement (DataTransfer + pointer move sequence) is exercised
// in Storybook + Playwright (see verification step 3) rather than in jsdom.

interface StoryCard {
  id: string;
  title: string;
}

function makeColumns(): ReadonlyArray<BaseObjectKanbanColumn<StoryCard>> {
  return [
    {
      id: "todo",
      displayName: "To do",
      cards: [
        { id: "card-a", title: "Card A" },
        { id: "card-b", title: "Card B" },
      ],
    },
    {
      id: "doing",
      displayName: "In progress",
      cards: [{ id: "card-c", title: "Card C" }],
    },
    {
      id: "done",
      displayName: "Done",
      cards: [{ id: "card-d", title: "Card D" }],
    },
  ];
}

function getCard(container: HTMLElement, id: string): HTMLElement {
  const el = container.querySelector(`[data-card-id="${id}"]`);
  if (el == null) {
    throw new Error(`Card with id "${id}" not found`);
  }
  return el as HTMLElement;
}

function getColumn(container: HTMLElement, id: string): HTMLElement {
  const el = container.querySelector(`[data-column-id="${id}"]`);
  if (el == null) {
    throw new Error(`Column with id "${id}" not found`);
  }
  return el as HTMLElement;
}

describe("BaseObjectKanban", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  describe("renders", () => {
    it("renders all columns with all card titles", () => {
      const { container } = render(
        <BaseObjectKanban<StoryCard> columns={makeColumns()} />,
      );

      expect(getColumn(container, "todo")).toBeDefined();
      expect(getColumn(container, "doing")).toBeDefined();
      expect(getColumn(container, "done")).toBeDefined();

      expect(screen.getByText("Card A")).toBeDefined();
      expect(screen.getByText("Card B")).toBeDefined();
      expect(screen.getByText("Card C")).toBeDefined();
      expect(screen.getByText("Card D")).toBeDefined();
    });
  });

  describe("column header", () => {
    it("displays the column displayName", () => {
      render(<BaseObjectKanban<StoryCard> columns={makeColumns()} />);

      expect(screen.getByText("To do")).toBeDefined();
      expect(screen.getByText("In progress")).toBeDefined();
      expect(screen.getByText("Done")).toBeDefined();
    });

    it("shows cardCount alone when totalCount is not provided", () => {
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={[
            {
              id: "todo",
              displayName: "To do",
              cards: [
                { id: "card-a", title: "Card A" },
                { id: "card-b", title: "Card B" },
              ],
            },
          ]}
        />,
      );

      const column = getColumn(container, "todo");
      expect(column.textContent).toContain("2");
      expect(column.textContent).not.toContain("/");
    });

    it("shows 'N / M' when totalCount > cardCount", () => {
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={[
            {
              id: "todo",
              displayName: "To do",
              cards: [
                { id: "card-a", title: "Card A" },
                { id: "card-b", title: "Card B" },
              ],
              totalCount: 10,
            },
          ]}
        />,
      );

      const column = getColumn(container, "todo");
      expect(column.textContent).toContain("2 / 10");
    });

    it("shows just the cardCount when totalCount equals cardCount", () => {
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={[
            {
              id: "todo",
              displayName: "To do",
              cards: [{ id: "card-a", title: "Card A" }],
              totalCount: 1,
            },
          ]}
        />,
      );

      const column = getColumn(container, "todo");
      expect(column.textContent).toContain("1");
      expect(column.textContent).not.toContain("/");
    });
  });

  describe("loading state", () => {
    it("renders skeleton placeholders and hides the count", () => {
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={[
            {
              id: "loading",
              displayName: "Loading",
              cards: [],
              isLoading: true,
              totalCount: 5,
            },
          ]}
        />,
      );

      const column = getColumn(container, "loading");
      // There are three skeleton card placeholders.
      const skeletonCards = column.querySelectorAll(
        "[class*=\"skeletonCard\"]",
      );
      expect(skeletonCards.length).toBe(3);

      // Count is hidden during loading. The header only contains the title.
      const header = column.querySelector("header");
      expect(header).not.toBeNull();
      expect(header!.textContent).toBe("Loading");
      // "No cards" should NOT appear while loading.
      expect(column.textContent).not.toContain("No cards");
    });
  });

  describe("error state", () => {
    it("renders the error message inside the column body and hides the count", () => {
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={[
            {
              id: "broken",
              displayName: "Broken",
              cards: [],
              error: new Error("boom"),
              totalCount: 5,
            },
          ]}
        />,
      );

      const column = getColumn(container, "broken");
      const alert = column.querySelector("[role=\"alert\"]");
      expect(alert).not.toBeNull();
      expect(alert!.textContent).toBe("boom");

      // Count is hidden in the error state.
      const header = column.querySelector("header");
      expect(header).not.toBeNull();
      expect(header!.textContent).toBe("Broken");
      expect(column.textContent).not.toContain("No cards");
    });
  });

  describe("empty state", () => {
    it("renders 'No cards' when not loading and there are no cards", () => {
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={[
            {
              id: "empty",
              displayName: "Empty",
              cards: [],
            },
          ]}
        />,
      );

      const column = getColumn(container, "empty");
      expect(column.textContent).toContain("No cards");
    });
  });

  describe("selection (uncontrolled)", () => {
    it("clicking a card fires onSelectCard and marks the card aria-pressed=true", () => {
      const onSelectCard = vi.fn();
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={makeColumns()}
          onSelectCard={onSelectCard}
        />,
      );

      const cardA = getCard(container, "card-a");
      fireEvent.click(cardA);

      expect(cardA.getAttribute("aria-pressed")).toBe("true");
      expect(onSelectCard).toHaveBeenCalledTimes(1);
      const [card, columnId] = onSelectCard.mock.calls[0]!;
      expect(card).toEqual({ id: "card-a", title: "Card A" });
      expect(columnId).toBe("todo");
    });

    it("clicking the same card again deselects it", () => {
      const onSelectCard = vi.fn();
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={makeColumns()}
          onSelectCard={onSelectCard}
        />,
      );

      const cardA = getCard(container, "card-a");
      fireEvent.click(cardA);
      fireEvent.click(cardA);

      // No card has aria-pressed="true" anymore.
      const pressed = container.querySelectorAll("[aria-pressed=\"true\"]");
      expect(pressed.length).toBe(0);
      expect(onSelectCard).toHaveBeenCalledTimes(2);
    });
  });

  describe("selection (controlled)", () => {
    it("uses selectedCardId for highlight; clicking another card does NOT change highlight without a prop update", () => {
      const onSelectCard = vi.fn();
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={makeColumns()}
          selectedCardId="card-a"
          onSelectCard={onSelectCard}
        />,
      );

      const cardA = getCard(container, "card-a");
      const cardB = getCard(container, "card-b");

      expect(cardA.getAttribute("aria-pressed")).toBe("true");
      expect(cardB.getAttribute("aria-pressed")).toBe("false");

      fireEvent.click(cardB);

      // Callback fires.
      expect(onSelectCard).toHaveBeenCalledTimes(1);
      expect(onSelectCard.mock.calls[0]![0]).toEqual({
        id: "card-b",
        title: "Card B",
      });

      // Highlight stays on card-a because the parent owns state.
      expect(cardA.getAttribute("aria-pressed")).toBe("true");
      expect(cardB.getAttribute("aria-pressed")).toBe("false");
    });
  });

  describe("default-selected", () => {
    it("highlights defaultSelectedCardId on first render", () => {
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={makeColumns()}
          defaultSelectedCardId="card-a"
        />,
      );

      const cardA = getCard(container, "card-a");
      const cardB = getCard(container, "card-b");
      expect(cardA.getAttribute("aria-pressed")).toBe("true");
      expect(cardB.getAttribute("aria-pressed")).toBe("false");
    });
  });

  describe("enableCardDragging={false}", () => {
    it("renders cards but disables dnd-kit's draggable (aria-disabled=true)", () => {
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={makeColumns()}
          enableCardDragging={false}
        />,
      );

      // Cards still render.
      expect(screen.getByText("Card A")).toBeDefined();

      const cardA = getCard(container, "card-a");
      expect(cardA.getAttribute("aria-disabled")).toBe("true");
    });
  });

  describe("readOnly column", () => {
    it("exposes data-column-id and gets the readOnly class", () => {
      const { container } = render(
        <BaseObjectKanban<StoryCard>
          columns={[
            {
              id: "frozen",
              displayName: "Frozen",
              cards: [{ id: "card-a", title: "Card A" }],
              readOnly: true,
            },
          ]}
        />,
      );

      const column = getColumn(container, "frozen");
      expect(column.getAttribute("data-column-id")).toBe("frozen");
      expect(column.className).toMatch(/readOnly/i);
    });
  });

  describe("drag-and-drop", () => {
    it.todo("moves a card across columns");
  });
});
