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
  BaseObjectKanban,
  type BaseObjectKanbanColumn,
  type BaseObjectKanbanProps,
} from "@osdk/react-components/experimental/object-kanban";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useMemo, useState } from "react";
import { fn } from "storybook/test";

interface StoryCard {
  id: string;
  title: string;
  assignee: string;
  dueDate: string;
}

type StoryProps = BaseObjectKanbanProps<StoryCard>;

const KANBAN_CONTAINER_STYLE: React.CSSProperties = {
  height: "600px",
  padding: "12px",
  boxSizing: "border-box",
};

const renderCardBody = (card: StoryCard): React.ReactNode => (
  <div style={{ fontSize: "12px", color: "#666", lineHeight: 1.4 }}>
    <div>
      <strong>Assignee:</strong> {card.assignee}
    </div>
    <div>
      <strong>Due:</strong> {card.dueDate}
    </div>
  </div>
);

const BACKLOG_CARDS: StoryCard[] = [
  {
    id: "card-1",
    title: "Migrate auth middleware",
    assignee: "Ahmed Williams",
    dueDate: "2026-06-15",
  },
  {
    id: "card-2",
    title: "Add audit logging to API",
    assignee: "Fatima Zhang",
    dueDate: "2026-06-20",
  },
  {
    id: "card-3",
    title: "Refactor user settings page",
    assignee: "Liam Patel",
    dueDate: "2026-06-22",
  },
  {
    id: "card-4",
    title: "Investigate flaky integration tests",
    assignee: "Sofia Martinez",
    dueDate: "2026-06-25",
  },
];

const IN_PROGRESS_CARDS: StoryCard[] = [
  {
    id: "card-5",
    title: "Wire up kanban drag-and-drop",
    assignee: "Zoe Park",
    dueDate: "2026-05-30",
  },
  {
    id: "card-6",
    title: "Document API surface for ObjectTable",
    assignee: "Marco Romano",
    dueDate: "2026-06-02",
  },
  {
    id: "card-7",
    title: "Build column virtualization",
    assignee: "Sam Lee",
    dueDate: "2026-06-05",
  },
];

const DONE_CARDS: StoryCard[] = [
  {
    id: "card-8",
    title: "Ship initial OSDK metrics wrapper",
    assignee: "Alex Stone",
    dueDate: "2026-05-01",
  },
  {
    id: "card-9",
    title: "Set up storybook scaffolding",
    assignee: "Nadia Foster",
    dueDate: "2026-05-03",
  },
  {
    id: "card-10",
    title: "Define BaseKanbanCard contract",
    assignee: "Yuri Maxwell",
    dueDate: "2026-05-08",
  },
];

const DEFAULT_COLUMNS: BaseObjectKanbanColumn<StoryCard>[] = [
  {
    id: "backlog",
    displayName: "Backlog",
    cards: BACKLOG_CARDS,
    totalCount: BACKLOG_CARDS.length,
  },
  {
    id: "in-progress",
    displayName: "In progress",
    cards: IN_PROGRESS_CARDS,
    totalCount: IN_PROGRESS_CARDS.length,
  },
  {
    id: "done",
    displayName: "Done",
    cards: DONE_CARDS,
    totalCount: DONE_CARDS.length,
  },
];

const meta: Meta<StoryProps> = {
  title: "Experimental/ObjectKanban",
  tags: ["experimental"],
  component: BaseObjectKanban,
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    columns: {
      description:
        "Columns to render left-to-right. Each column carries its own pre-loaded cards plus optional loading / error / readOnly state.",
      control: false,
    },
    enableCardDragging: {
      description:
        "When true, cards can be reordered between columns via drag-and-drop. When false, cards stay selectable but cannot be dragged.",
      control: "boolean",
      defaultValue: true,
      table: {
        defaultValue: { summary: "true" },
      },
    },
    selectedCardId: {
      description:
        "Controlled selected card id. When provided, the parent owns the selection; pair with `onSelectCard`.",
      control: false,
    },
    defaultSelectedCardId: {
      description:
        "Uncontrolled initial selected card id. Ignored when `selectedCardId` is provided.",
      control: "text",
    },
    renderCardTitle: {
      description:
        "Custom card title renderer. Defaults to rendering `card.title` as text.",
      control: false,
    },
    renderCardBody: {
      description:
        "Custom card body renderer. By default no body is rendered below the title.",
      control: false,
    },
    onSelectCard: {
      description:
        "Fires whenever a card is selected. In uncontrolled mode the internal selected card id is also updated.",
      control: false,
      table: { category: "Events" },
    },
    onCardMoved: {
      description:
        "Fires after a card is dropped into a different column than its source. Drops onto read-only columns are rejected and do not fire this callback.",
      control: false,
      table: { category: "Events" },
    },
    className: {
      description: "Additional CSS class name for the kanban container.",
      control: "text",
    },
  } as Meta<StoryProps>["argTypes"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const KanbanFrame: React.FC<StoryProps> = (args) => (
  <div style={KANBAN_CONTAINER_STYLE}>
    <BaseObjectKanban<StoryCard> {...args} />
  </div>
);

export const Default: Story = {
  args: {
    columns: DEFAULT_COLUMNS,
    enableCardDragging: true,
    renderCardBody,
    onSelectCard: fn(),
    onCardMoved: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Three columns with several cards each. Uses `renderCardBody` to render assignee + due date under each card title.",
      },
    },
  },
  render: (args) => <KanbanFrame {...args} />,
};

const SINGLE_COLUMN_COLUMNS: BaseObjectKanbanColumn<StoryCard>[] = [
  {
    id: "all-tasks",
    displayName: "All tasks",
    cards: [...BACKLOG_CARDS, ...IN_PROGRESS_CARDS],
    totalCount: BACKLOG_CARDS.length + IN_PROGRESS_CARDS.length,
  },
];

export const SingleColumn: Story = {
  args: {
    columns: SINGLE_COLUMN_COLUMNS,
    renderCardBody,
    onSelectCard: fn(),
    onCardMoved: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Single-column layout. Verifies the kanban shell doesn't break when there's only one lane.",
      },
    },
  },
  render: (args) => <KanbanFrame {...args} />,
};

const MANY_COLUMN_NAMES = [
  "Triage",
  "Backlog",
  "Ready",
  "In progress",
  "In review",
  "Blocked",
  "Done",
  "Archived",
];

const MANY_COLUMNS: BaseObjectKanbanColumn<StoryCard>[] = MANY_COLUMN_NAMES.map(
  (name, index) => {
    const sparseCards: StoryCard[] = index % 2 === 0
      ? [
        {
          id: `many-${index}-a`,
          title: `${name} task A`,
          assignee: "Ahmed Williams",
          dueDate: "2026-07-01",
        },
        {
          id: `many-${index}-b`,
          title: `${name} task B`,
          assignee: "Fatima Zhang",
          dueDate: "2026-07-08",
        },
      ]
      : [
        {
          id: `many-${index}-a`,
          title: `${name} task A`,
          assignee: "Liam Patel",
          dueDate: "2026-07-15",
        },
      ];
    return {
      id: `column-${index}`,
      displayName: name,
      cards: sparseCards,
      totalCount: sparseCards.length,
    };
  },
);

export const ManyColumns: Story = {
  args: {
    columns: MANY_COLUMNS,
    renderCardBody,
    onSelectCard: fn(),
    onCardMoved: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Eight columns with sparse cards. Verifies horizontal scroll behavior when the column list exceeds the viewport.",
      },
    },
  },
  render: (args) => <KanbanFrame {...args} />,
};

const LOADING_COLUMNS: BaseObjectKanbanColumn<StoryCard>[] = [
  {
    id: "backlog",
    displayName: "Backlog",
    cards: [],
    isLoading: true,
  },
  {
    id: "in-progress",
    displayName: "In progress",
    cards: [],
    isLoading: true,
  },
  {
    id: "done",
    displayName: "Done",
    cards: [],
    isLoading: true,
  },
];

export const Loading: Story = {
  args: {
    columns: LOADING_COLUMNS,
    renderCardBody,
  },
  parameters: {
    docs: {
      description: {
        story:
          "All columns in their loading state. Verifies the skeleton placeholder rendering.",
      },
    },
  },
  render: (args) => <KanbanFrame {...args} />,
};

const EMPTY_COLUMNS: BaseObjectKanbanColumn<StoryCard>[] = [
  {
    id: "backlog",
    displayName: "Backlog",
    cards: [],
    isLoading: false,
    totalCount: 0,
  },
  {
    id: "in-progress",
    displayName: "In progress",
    cards: [],
    isLoading: false,
    totalCount: 0,
  },
  {
    id: "done",
    displayName: "Done",
    cards: [],
    isLoading: false,
    totalCount: 0,
  },
];

export const Empty: Story = {
  args: {
    columns: EMPTY_COLUMNS,
    renderCardBody,
  },
  parameters: {
    docs: {
      description: {
        story:
          "All columns are empty and not loading. Verifies the empty-state placeholder appears inside each column body.",
      },
    },
  },
  render: (args) => <KanbanFrame {...args} />,
};

const READ_ONLY_COLUMNS: BaseObjectKanbanColumn<StoryCard>[] = [
  {
    id: "backlog",
    displayName: "Backlog",
    cards: BACKLOG_CARDS,
    totalCount: BACKLOG_CARDS.length,
  },
  {
    id: "in-progress",
    displayName: "In progress (read-only)",
    cards: IN_PROGRESS_CARDS,
    totalCount: IN_PROGRESS_CARDS.length,
    readOnly: true,
  },
  {
    id: "done",
    displayName: "Done",
    cards: DONE_CARDS,
    totalCount: DONE_CARDS.length,
  },
];

export const WithReadOnlyColumn: Story = {
  args: {
    columns: READ_ONLY_COLUMNS,
    renderCardBody,
    onCardMoved: fn(),
    onSelectCard: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "The middle column is marked `readOnly`. Dragging a card from Backlog or Done onto it should not highlight the column as a drop target and should NOT fire `onCardMoved`.",
      },
    },
  },
  render: (args) => <KanbanFrame {...args} />,
};

const ERROR_COLUMNS: BaseObjectKanbanColumn<StoryCard>[] = [
  {
    id: "backlog",
    displayName: "Backlog",
    cards: BACKLOG_CARDS,
    totalCount: BACKLOG_CARDS.length,
  },
  {
    id: "in-progress",
    displayName: "In progress",
    cards: [],
    error: new Error("Failed to load"),
  },
  {
    id: "done",
    displayName: "Done",
    cards: DONE_CARDS,
    totalCount: DONE_CARDS.length,
  },
];

export const WithError: Story = {
  args: {
    columns: ERROR_COLUMNS,
    renderCardBody,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The middle column carries an `error`. Verifies that the column surfaces the error message under its header while other columns continue to render normally.",
      },
    },
  },
  render: (args) => <KanbanFrame {...args} />,
};

export const DraggingDisabled: Story = {
  args: {
    columns: DEFAULT_COLUMNS,
    enableCardDragging: false,
    renderCardBody,
    onSelectCard: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "`enableCardDragging` is false. Cards should still be selectable but cannot be dragged between columns.",
      },
    },
  },
  render: (args) => <KanbanFrame {...args} />,
};

const ControlledSelectionRender: React.FC<StoryProps> = (args) => {
  const [selectedCardId, setSelectedCardId] = useState<string | undefined>(
    "card-2",
  );
  const handleSelectCard = useCallback(
    (card: StoryCard, columnId: string) => {
      args.onSelectCard?.(card, columnId);
      setSelectedCardId(card.id);
    },
    [args],
  );
  const handleClear = useCallback(() => {
    setSelectedCardId(undefined);
  }, []);

  return (
    <div>
      <div
        style={{
          padding: "12px",
          backgroundColor: "#f0f9ff",
          borderRadius: "4px",
          border: "1px solid #bfdbfe",
          marginBottom: "8px",
          fontSize: "13px",
        }}
      >
        <strong>Selected card id:</strong> {selectedCardId
          ? <code>{selectedCardId}</code>
          : <em>none</em>}
        <button
          style={{
            marginLeft: "16px",
            padding: "4px 8px",
            fontSize: "12px",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer",
          }}
          onClick={handleClear}
          disabled={selectedCardId == null}
        >
          Clear selection
        </button>
      </div>
      <div style={KANBAN_CONTAINER_STYLE}>
        <BaseObjectKanban<StoryCard>
          {...args}
          selectedCardId={selectedCardId}
          onSelectCard={handleSelectCard}
        />
      </div>
    </div>
  );
};

export const ControlledSelection: Story = {
  args: {
    columns: DEFAULT_COLUMNS,
    renderCardBody,
    onSelectCard: fn(),
    onCardMoved: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Selection is controlled by the parent via `selectedCardId` + `onSelectCard`. The parent's `useState` is the source of truth for the highlighted card.",
      },
      source: {
        code:
          `const [selectedCardId, setSelectedCardId] = useState<string | undefined>("card-2");

return (
  <BaseObjectKanban
    columns={columns}
    selectedCardId={selectedCardId}
    onSelectCard={(card) => setSelectedCardId(card.id)}
  />
);`,
      },
    },
  },
  render: (args) => <ControlledSelectionRender {...args} />,
};

interface CardMovedInfo {
  card: StoryCard;
  fromColumnId: string;
  toColumnId: string;
}

const InteractiveCardMoveRender: React.FC<StoryProps> = (args) => {
  const [columns, setColumns] = useState<
    BaseObjectKanbanColumn<StoryCard>[]
  >(() =>
    DEFAULT_COLUMNS.map((column) => ({
      ...column,
      cards: [...column.cards],
    }))
  );
  const [lastMove, setLastMove] = useState<CardMovedInfo | undefined>();

  const handleCardMoved = useCallback(
    (info: CardMovedInfo) => {
      args.onCardMoved?.(info);
      setLastMove(info);
      setColumns((prev) => {
        const next = prev.map((column) => ({
          ...column,
          cards: column.cards.filter((c) => c.id !== info.card.id),
        }));
        const targetIndex = next.findIndex((c) => c.id === info.toColumnId);
        if (targetIndex < 0) {
          return prev;
        }
        const target = next[targetIndex];
        next[targetIndex] = {
          ...target,
          cards: [...target.cards, info.card],
          totalCount: target.cards.length + 1,
        };
        // Recompute totalCount on the source column too.
        const sourceIndex = next.findIndex((c) => c.id === info.fromColumnId);
        if (sourceIndex >= 0) {
          const source = next[sourceIndex];
          next[sourceIndex] = {
            ...source,
            totalCount: source.cards.length,
          };
        }
        return next;
      });
    },
    [args],
  );

  const totalCards = useMemo(
    () => columns.reduce((sum, c) => sum + c.cards.length, 0),
    [columns],
  );

  return (
    <div>
      <div
        style={{
          padding: "12px",
          backgroundColor: "#f0f9ff",
          borderRadius: "4px",
          border: "1px solid #bfdbfe",
          marginBottom: "8px",
          fontSize: "13px",
        }}
      >
        <div>
          <strong>Total cards on board:</strong> {totalCards}
        </div>
        <div style={{ marginTop: "4px" }}>
          <strong>Last move:</strong> {lastMove
            ? (
              <code>
                {lastMove.card.title} ({lastMove.fromColumnId} →{" "}
                {lastMove.toColumnId})
              </code>
            )
            : <em>none yet — drag a card across columns</em>}
        </div>
      </div>
      <div style={KANBAN_CONTAINER_STYLE}>
        <BaseObjectKanban<StoryCard>
          {...args}
          columns={columns}
          onCardMoved={handleCardMoved}
        />
      </div>
    </div>
  );
};

export const InteractiveCardMove: Story = {
  args: {
    columns: DEFAULT_COLUMNS,
    enableCardDragging: true,
    renderCardBody,
    onSelectCard: fn(),
    onCardMoved: fn(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Headline drag-and-drop demo. The parent owns the `columns` array and mutates it inside `onCardMoved` to physically move the card between columns.",
      },
      source: {
        code: `const [columns, setColumns] = useState(initialColumns);

const handleCardMoved = ({ card, fromColumnId, toColumnId }) => {
  setColumns((prev) => {
    const withoutCard = prev.map((c) => ({
      ...c,
      cards: c.cards.filter((x) => x.id !== card.id),
    }));
    return withoutCard.map((c) =>
      c.id === toColumnId ? { ...c, cards: [...c.cards, card] } : c
    );
  });
};

return (
  <BaseObjectKanban
    columns={columns}
    onCardMoved={handleCardMoved}
  />
);`,
      },
    },
  },
  render: (args) => <InteractiveCardMoveRender {...args} />,
};
