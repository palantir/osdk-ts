---
sidebar_position: 3
---

# Shapes

Shapes are reusable type projections that handle nullability, select properties, and load related data through derived links. They integrate as an option on existing `useOsdkObject` and `useOsdkObjects` hooks.

:::info Unstable API
Shapes are currently exported from `@osdk/api/unstable`. The API may change between releases. Once stabilized, shapes will graduate to `@osdk/api/shapes`.
:::

## Quick Start: Inline Config

The simplest way to use shapes is inline in hook options:

```tsx
import { Player } from "@my/osdk";
import { useOsdkObject } from "@osdk/react/experimental";

function PlayerCard({ playerId }: { playerId: string }) {
  const { data, isLoading, error } = useOsdkObject(Player, playerId, {
    shape: {
      require: ["name", "age"],
    },
  });

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  // name and age are typed as non-nullable
  return (
    <div>
      <h1>{data?.name}</h1>
      <p>Age: {data?.age}</p>
    </div>
  );
}
```

## Quick Start: Pre-built Shape

For shapes shared across components or with complex configurations, use `createShapeBuilder`:

```tsx
import { Player } from "@my/osdk";
import { createShapeBuilder } from "@osdk/api/unstable";
import { useOsdkObject } from "@osdk/react/experimental";

const SlimPlayer = createShapeBuilder(Player, "SlimPlayer")
  .require("name", "age")
  .build();

function PlayerCard({ playerId }: { playerId: string }) {
  const { data, isLoading } = useOsdkObject(Player, playerId, {
    shape: SlimPlayer,
  });

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>Age: {data?.age}</p>
    </div>
  );
}
```

Use inline configs for one-off projections in a single component. Use pre-built shapes when reusing the same projection across multiple components or when you need derived links with `.as()`.

## Property Operations

Shapes provide five operations for controlling property nullability and transformation:

| Operation | Description | Result type |
|-----------|-------------|-------------|
| `select("prop")` | Include property without nullability change | `T \| undefined` |
| `require("prop")` | Require non-null; errors if null at runtime | `T` (no undefined) |
| `dropIfNull("prop")` | Drop the entire object if property is null | `T` (no undefined) |
| `withDefault("prop", value)` | Substitute default when null | `T` (no undefined) |
| `withTransform("prop", fn)` | Transform value with a function | Return type of `fn` |

### Pre-built examples

```ts
import { Player } from "@my/osdk";
import { createShapeBuilder } from "@osdk/api/unstable";

const PlayerShape = createShapeBuilder(Player, "PlayerShape")
  .select("nickname")                         // string | undefined
  .require("name", "age")                     // string, number
  .dropIfNull("ssn")                          // only include players with ssn
  .withDefault("position", "Unknown")         // string (never undefined)
  .withTransform("hometown", h => h ?? "N/A") // string
  .build();
```

### Inline equivalents

```ts
const { data } = useOsdkObject(Player, playerId, {
  shape: {
    select: ["nickname"],
    require: ["name", "age"],
    dropIfNull: ["ssn"],
    defaults: { position: "Unknown" },
    transforms: { hometown: (h) => h ?? "N/A" },
  },
});
```

Operations apply in this order: `dropIfNull` -> `withDefault` -> `withTransform` -> `require`. This means a property can have a default applied first, then be validated as non-null.

## Derived Links

Derived links load related objects through link traversal. They execute in parallel after the base object loads.

```tsx
import { Player, Game } from "@my/osdk";
import { createShapeBuilder } from "@osdk/api/unstable";
import { useOsdkObject } from "@osdk/react/experimental";

const SlimPlayer = createShapeBuilder(Player, "SlimPlayer")
  .require("name", "age")
  .build();

const SlimGame = createShapeBuilder(Game, "SlimGame")
  .require("date", "score")
  .build();

const PlayerDashboard = createShapeBuilder(Player, "PlayerDashboard")
  .require("name", "age")
  .deriveLink("teammates", p =>
    p.pivotTo("team")
      .pivotTo("players")
      .where({ playerId: { $neq: p.$primaryKey } })
      .as(SlimPlayer)
  )
  .deriveLink("recentGames", p =>
    p.pivotTo("boxScores")
      .orderBy("date", "desc")
      .limit(10)
      .as(SlimGame)
  )
  .build();

function PlayerPage({ playerId }: { playerId: string }) {
  const { data, isLoading, linkStatus } = useOsdkObject(
    Player,
    playerId,
    { shape: PlayerDashboard },
  );

  return (
    <div>
      <h1>{isLoading ? "Loading..." : `${data?.name}, ${data?.age}`}</h1>

      <h2>Teammates</h2>
      {linkStatus.teammates?.isLoading
        ? <div>Loading teammates...</div>
        : <ul>{data?.teammates?.map(t => <li key={t.$primaryKey}>{t.name}</li>)}</ul>}

      <h2>Recent Games</h2>
      {linkStatus.recentGames?.isLoading
        ? <div>Loading games...</div>
        : <ul>{data?.recentGames?.map(g => <li key={g.$primaryKey}>{g.date}</li>)}</ul>}
    </div>
  );
}
```

Inline configs use the `links` property with a `via` callback:

```ts
const { data, linkStatus } = useOsdkObject(Player, playerId, {
  shape: {
    require: ["name", "age"],
    links: {
      teammates: {
        via: p => p.pivotTo("team").pivotTo("players"),
        target: SlimPlayer,
      },
    },
  },
});
```

## List Mode

Use shapes with `useOsdkObjects` to project and transform collections:

```tsx
import { Player } from "@my/osdk";
import { createShapeBuilder } from "@osdk/api/unstable";
import { useOsdkObjects } from "@osdk/react/experimental";

const SlimPlayer = createShapeBuilder(Player, "SlimPlayer")
  .require("name", "age")
  .build();

function PlayerList() {
  const { data, isLoading, fetchMore, linkStatus, itemLinkStatus } = useOsdkObjects(Player, {
    shape: SlimPlayer,
    where: { age: { $gt: 21 } },
    orderBy: { name: "asc" },
    pageSize: 50,
  });

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map(player => (
        <div key={player.$primaryKey}>{player.name}, {player.age}</div>
      ))}
      {fetchMore && (
        <button onClick={() => fetchMore()} disabled={isLoading}>
          Load More
        </button>
      )}
    </div>
  );
}
```

:::note
When a shape option is provided, `pivotTo`, `withProperties`, `rids`, and `intersectWith` are not available as options. Use derived links for link traversal instead.
:::

## Deferred Links

Mark a derived link as deferred to prevent it from loading automatically. Deferred links only load when explicitly requested via `loadDeferred()`.

```tsx
import { Player, BoxScore } from "@my/osdk";
import { createShapeBuilder } from "@osdk/api/unstable";
import { useOsdkObject } from "@osdk/react/experimental";
import { useState } from "react";

const SlimBoxScore = createShapeBuilder(BoxScore, "SlimBoxScore")
  .require("goals", "assists")
  .build();

const PlayerWithHistory = createShapeBuilder(Player, "PlayerWithHistory")
  .require("name")
  .deriveLink("careerStats", p =>
    p.pivotTo("boxScores").as(SlimBoxScore, { defer: true })
  )
  .build();

function PlayerProfile({ playerId }: { playerId: string }) {
  const { data, loadDeferred, linkStatus } = useOsdkObject(
    Player,
    playerId,
    { shape: PlayerWithHistory },
  );
  const [showHistory, setShowHistory] = useState(false);

  const handleShowHistory = async () => {
    setShowHistory(true);
    await loadDeferred("careerStats");
  };

  return (
    <div>
      <h1>{data?.name}</h1>
      {!showHistory ? (
        <button onClick={handleShowHistory}>Show Career Stats</button>
      ) : linkStatus.careerStats?.isLoading ? (
        <div>Loading stats...</div>
      ) : (
        <ul>
          {data?.careerStats?.map(s => (
            <li key={s.$primaryKey}>{s.goals}G {s.assists}A</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

For inline configs, use the `defer` property:

```ts
const { data, loadDeferred } = useOsdkObject(Player, playerId, {
  shape: {
    require: ["name"],
    links: {
      careerStats: {
        via: p => p.pivotTo("boxScores"),
        target: SlimBoxScore,
        defer: true,
      },
    },
  },
});
```

## Error Handling

### Nullability violations

When `require()` properties are null at runtime, the hook returns a `ShapeNullabilityError`:

```tsx
import { Player } from "@my/osdk";
import { useOsdkObject } from "@osdk/react/experimental";

function PlayerView({ playerId }: { playerId: string }) {
  const { data, error, nullabilityViolations, retry } = useOsdkObject(
    Player,
    playerId,
    { shape: { require: ["name", "age"] } },
  );

  if (error) {
    return (
      <div>
        <p>Missing required fields: {nullabilityViolations.map(v => v.property).join(", ")}</p>
        <button onClick={() => retry()}>Retry</button>
      </div>
    );
  }

  return <div>{data?.name}, {data?.age}</div>;
}
```

### Dropped objects

When `dropIfNull()` properties are null, the object is silently dropped instead of producing an error:

```ts
const { data, droppedDueToNullability } = useOsdkObject(Player, playerId, {
  shape: { dropIfNull: ["ssn"] },
});

// data is undefined, droppedDueToNullability is true
```

In list mode, dropped objects are excluded from the result array and counted in `droppedCount`:

```ts
const { data, droppedCount } = useOsdkObjects(Player, {
  shape: { dropIfNull: ["ssn"] },
});
// droppedCount indicates how many objects were filtered out
```

### Invalidation

Use `invalidate()` to force a refetch of the base object or a specific derived link:

```ts
const { invalidate } = useOsdkObject(Player, playerId, {
  shape: PlayerDashboard,
});

invalidate();               // refetch everything
invalidate("teammates");    // refetch just the teammates link
```

## Return Values

### Single object (`useOsdkObject` with shape)

| Field | Type | Description |
|-------|------|-------------|
| `data` | `ShapeInstance<S> \| undefined` | Transformed object instance |
| `shape` | `ShapeDefinition<S>` | The resolved shape definition |
| `isLoading` | `boolean` | True while fetching from server |
| `error` | `Error \| undefined` | Error object (includes `ShapeNullabilityError`) |
| `isOptimistic` | `boolean` | True if object has optimistic updates |
| `droppedDueToNullability` | `boolean` | True if object was dropped by `dropIfNull` |
| `nullabilityViolations` | `NullabilityViolation[]` | List of properties that violated `require` |
| `linkStatus` | `Partial<Record<string, LinkStatus>>` | Loading state per derived link |
| `loadDeferred` | `(linkName) => Promise<void>` | Trigger loading of a deferred link |
| `retry` | `(linkName?) => void` | Retry failed fetches |
| `invalidate` | `(linkName?) => void` | Force refetch |

### List mode (`useOsdkObjects` with shape)

| Field | Type | Description |
|-------|------|-------------|
| `data` | `ShapeInstance<S>[] \| undefined` | Array of transformed objects |
| `shape` | `ShapeDefinition<S>` | The resolved shape definition |
| `isLoading` | `boolean` | True while fetching from server |
| `error` | `Error \| undefined` | Error object |
| `isOptimistic` | `boolean` | True if list is affected by optimistic updates |
| `fetchMore` | `(() => Promise<void>) \| undefined` | Load next page (undefined when exhausted) |
| `droppedCount` | `number` | Count of objects dropped by `dropIfNull` |
| `nullabilityViolations` | `NullabilityViolation[]` | All violations across the list |
| `linkStatus` | `Partial<Record<string, LinkStatus>>` | Aggregate loading state per link |
| `itemLinkStatus` | `PerItemLinkStatus<S>` | Per-object loading state for links |
| `loadDeferred` | `(pk, linkName) => Promise<void>` | Trigger deferred link for a specific object |
| `retry` | `(pk?, linkName?) => void` | Retry failed fetches |
| `invalidate` | `(linkName?) => void` | Force refetch |
