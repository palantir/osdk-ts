# ObjectKanban

Horizontal kanban surface that renders one column per `ObjectSet`. Each column auto-fetches its membership via `@osdk/react`, and cards can be dragged between columns. The consumer observes `onCardMoved` and applies an action that persists the change.

## Prerequisites

Before using `ObjectKanban`, complete the library setup described in the [README](https://github.com/palantir/osdk-ts/blob/main/packages/react-components/README.md#setup), including:

- Installing the required dependencies
- Wrapping your app with `OsdkProvider`
- Adding the CSS imports

## Import

```ts
import {
  type CardMovedInfo,
  ObjectKanban,
  type ObjectKanbanColumn,
} from "@osdk/react-components/experimental/object-kanban";
```

## Minimal example

The smallest useful kanban: an object type + a list of columns, each backed by an `ObjectSet`.

```tsx
import { useOsdkClient } from "@osdk/react";
import { ObjectKanban } from "@osdk/react-components/experimental/object-kanban";
import { Ticket } from "@YourApp/sdk";
import { useMemo } from "react";

function TicketBoard() {
  const client = useOsdkClient();

  const columns = useMemo(() => [
    {
      id: "todo",
      displayName: "Todo",
      objectSet: client(Ticket).where({ status: { $eq: "todo" } }),
    },
    {
      id: "in-progress",
      displayName: "In progress",
      objectSet: client(Ticket).where({ status: { $eq: "in-progress" } }),
    },
    {
      id: "done",
      displayName: "Done",
      objectSet: client(Ticket).where({ status: { $eq: "done" } }),
    },
  ], [client]);

  return <ObjectKanban objectType={Ticket} columns={columns} />;
}
```

Each card shows the object's `$title` by default. Drag-and-drop is enabled out of the box; without an `onCardMoved` handler the move is a no-op (the card animates back).

## Persisting card moves

The kanban never mutates an `ObjectSet`. Wire `onCardMoved` to an action — typically one that updates the property the column's `ObjectSet` filters on:

```tsx
import { useOsdkAction } from "@osdk/react";
import { updateTicketStatus } from "@YourApp/sdk";

function TicketBoard() {
  const { applyAction } = useOsdkAction(updateTicketStatus);

  const handleCardMoved = useCallback((info: CardMovedInfo<typeof Ticket>) => {
    applyAction({ ticket: info.object, status: info.toColumnId });
  }, [applyAction]);

  return (
    <ObjectKanban
      objectType={Ticket}
      columns={columns}
      onCardMoved={handleCardMoved}
    />
  );
}
```

Because `useOsdkAction` reuses the same observable cache as `useObjectSet`, the source column drops the card and the destination column gains it automatically after the action lands — no manual refetch.

## Custom card rendering

`renderCardTitle` and `renderCardBody` receive the full OSDK object and the id of the column the card lives in:

```tsx
<ObjectKanban
  objectType={Ticket}
  columns={columns}
  renderCardTitle={(ticket) => <strong>{ticket.summary}</strong>}
  renderCardBody={(ticket) => (
    <span>
      {ticket.assigneeName} · due {ticket.dueDate}
    </span>
  )}
/>;
```

If a renderer isn't provided, the default is `object.$title` for the title and nothing for the body.

## Read-only columns

`readOnly: true` on a column blocks drops INTO that column. Cards inside a read-only column can still be dragged OUT of it.

```tsx
const columns = [
  { id: "backlog", displayName: "Backlog", objectSet: ... },
  { id: "archived", displayName: "Archived", objectSet: ..., readOnly: true },
];
```

This is useful for terminal states the workflow shouldn't accept new cards into.

## Parent `objectSet` (global filter)

When provided at the kanban level, `objectSet` is intersected with each column's `objectSet`. Use it for scoped views without rewriting each column:

```tsx
<ObjectKanban
  objectType={Ticket}
  objectSet={client(Ticket).where({ assignee: { $eq: currentUserId } })}
  columns={columns}
/>;
```

## Selection

Selection is single-card and follows the same controlled/uncontrolled pattern as `ObjectTable`:

- **Uncontrolled** — no `selectedObject` prop. Clicking a card highlights it; clicking again deselects.
- **Uncontrolled with default** — `defaultSelectedObject={ticket.$primaryKey}` seeds the initial selection.
- **Controlled** — pass `selectedObject` and `onSelectObject`; the kanban delegates state to the parent.

```tsx
const [selected, setSelected] = useState<Ticket["$primaryKey"] | undefined>();

<ObjectKanban
  objectType={Ticket}
  columns={columns}
  selectedObject={selected}
  onSelectObject={(ticket) => setSelected(ticket.$primaryKey)}
/>;
```

## Props reference

| Prop                    | Type                                              | Default     | Description                                                                                               |
| ----------------------- | ------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `objectType` _required_ | `Q extends ObjectOrInterfaceDefinition`           |             | The OSDK type of the cards.                                                                               |
| `objectSet`             | `ObjectSet<Q>`                                    | `undefined` | Parent filter intersected with every column's `objectSet`.                                                |
| `columns` _required_    | `ReadonlyArray<ObjectKanbanColumn<Q, TColumnId>>` |             | Columns to render left-to-right.                                                                          |
| `pageSize`              | `number`                                          | `50`        | Page size used for each column unless overridden on the column.                                           |
| `dedupeIntervalMs`      | `number`                                          | `60_000`    | Minimum time between fetches per column (mirrors `ObjectTable`).                                          |
| `renderCardTitle`       | `(object, columnId) => ReactNode`                 | `$title`    | Custom title renderer.                                                                                    |
| `renderCardBody`        | `(object, columnId) => ReactNode`                 | empty       | Custom body renderer.                                                                                     |
| `enableCardDragging`    | `boolean`                                         | `true`      | Toggle drag-and-drop globally.                                                                            |
| `selectedObject`        | `PrimaryKeyType<Q>`                               | `undefined` | Controlled selected primary key.                                                                          |
| `defaultSelectedObject` | `PrimaryKeyType<Q>`                               | `undefined` | Uncontrolled initial selection.                                                                           |
| `onSelectObject`        | `(object, columnId) => void`                      | `undefined` | Fires in both controlled and uncontrolled modes.                                                          |
| `onCardMoved`           | `(info: CardMovedInfo<Q, TColumnId>) => void`     | `undefined` | Fires after a drop into a different column. Carries source/destination column ids AND their `ObjectSet`s. |
| `className`             | `string`                                          | `undefined` | Applied to the outer scroll container.                                                                    |

### `ObjectKanbanColumn<Q, TId>`

| Field                 | Type           | Default     | Description                                                            |
| --------------------- | -------------- | ----------- | ---------------------------------------------------------------------- |
| `id` _required_       | `TId`          |             | Stable column identifier. Bubbled in `onSelectObject` / `onCardMoved`. |
| `displayName` _req'd_ | `string`       |             | Header label (consumer owns i18n).                                     |
| `objectSet` _req'd_   | `ObjectSet<Q>` |             | Membership query. The kanban subscribes to this via `useObjectSet`.    |
| `pageSize`            | `number`       | kanban-wide | Per-column page size override.                                         |
| `readOnly`            | `boolean`      | `false`     | Blocks drops INTO the column. Drags OUT remain enabled.                |

## Base layer

`BaseObjectKanban` is OSDK-agnostic and accepts a `columns` array where each column has already-resolved `cards`, `isLoading`, `error`, and `totalCount`. Use it when:

- You're fetching data from a non-OSDK source.
- You need full control over per-column paging or caching.
- You're writing a Storybook story or test against the kanban UI.

```tsx
import { BaseObjectKanban } from "@osdk/react-components/experimental/object-kanban";

<BaseObjectKanban
  columns={[
    {
      id: "todo",
      displayName: "Todo",
      cards: [{ id: "1", title: "Migrate auth" }],
    },
    { id: "done", displayName: "Done", cards: [] },
  ]}
  onCardMoved={(info) => console.log(info)}
/>;
```

`BaseObjectKanban<TCard>` is generic — extend `BaseKanbanCard` (which requires `id: string` and `title: string`) with whatever extra fields your render slots need.

## Theming

`ObjectKanban` exposes design tokens under `--osdk-object-kanban-*`. See [CSS Variables](./CSSVariables.md) for the full list. Common overrides:

```css
:root {
  --osdk-object-kanban-column-width: 360px;
  --osdk-object-kanban-background: var(--osdk-palette-light-gray-3);
  --osdk-object-kanban-card-border-radius: 8px;
}
```
