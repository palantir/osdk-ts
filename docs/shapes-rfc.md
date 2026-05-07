<!-- cspell:words BLUF Batchable batchable LeBron Muratore opinionation Schedulable -->

# Shapes RFC

BLUF: Shapes are reusable type projections with nullability handling, expressivity, reusability and optimizations for data loading graphed structures. They integrate natively into existing OSDK hooks rather than introducing new abstractions.

## Problem statement

### Overview

Developers using osdk-react face several problems when building data-intensive UIs, including but not limited to:

1. **Nullability**: All OSDK properties are typed as `T | undefined` even when data is known to exist, forcing defensive checks throughout the codebase
2. **No recombination**: Server returns disconnected arrays; clients must manually rejoin related objects
3. **m:m traversal difficulties**: Can't enumerate objects after chaining pivotTo through many-to-many links in derived properties
4. **Graph traversal is manual**: Loading linked structures (e.g., player -> team -> roster -> each player's stats) requires one hook per relationship level, creating waterfall request chains and forcing the component to orchestrate multi-step loading sequences by hand
5. **Boilerplate**: Every component manually performs null checks and data assembly

These problems compound in complex applications, leading to verbose code and high cognitive load for developers when dealing with nullish types.

## Proposed solution

Shapes: Reusable type projections with nullability handling, expressivity, reusability and optimizations for data loading graphed structures.

Shapes enable users to declare their data requirements once and have the system handle nullability guarantees and related data loading automatically.

### Design philosophy

Shapes are the data transformation layer for osdk/react:

* Handles nullability guarantees (require, dropIfNull, withDefault)
* Derives related data via deriveLink() with m:m support
* Returns transformed instances with narrowed types
* Operates at the "how to present" level

**Design Principle**: Shapes determine how to present data to the application (not in a rendering way, but in how you type business logic and what you're rendering). For query construction (what to fetch), OQL will be the first class way to build them (RFC to follow - if you're interested EA's earlier docs outline the thrust of the idea well).

**Integration with existing hooks**: Rather than introducing new hooks like `useShape`, shapes are a native option on existing `useOsdkObject` and `useOsdkObjects` hooks. This keeps the API surface small: developers use the same hooks they already know, with an optional `shape` config that enables nullability handling, derived links, and type narrowing.

OQL Integration: OQL queries can apply shapes via the `.shape()` method on query builders:

```ts
const query = oql.object(Player).shape(SlimPlayer).build();
```

## Performance considerations / why does any of this matter?

After working with the War Room team (Chris Hammett, Luke Muratore) on integrating osdk-react, a clear gap in our data loading API became clear regarding its performance and ergonomics with the highly linked and graph-like structure of the Defense Ontology. Additionally, a more expressive reusable type projection that plays nicely with OSDK types is something that several deltas have said they would find useful.

In terms of specific performance benefits, they are listed below:

### 1. Smaller Network Payloads

```ts
// Regular @osdk/react:
// Fetches all 50 properties on Player, even if you only use 2
const { object: player } = useOsdkObject(Player, playerId);
return <div>{player?.name}, {player?.age}</div>;

// With Shapes (inline config):
// Only fetches name and age from the server via select
const { data } = useOsdkObject(Player, playerId, {
  shape: {
    require: ["name", "age"],
  },
});
// Network payload is smaller for large objects
```

Note: Field minimization currently only applies to single-object mode (`useOsdkObject` with shape). List mode (`useOsdkObjects` with shape) fetches all properties due to the lacking `observeList` select behavior.

### 2. Parallel Derived Link Execution

```ts
// Regular @osdk/react:
function PlayerDashboard({ playerId }) {
  const { object: player } = useOsdkObject(Player, playerId);

  // Waterfall: Each hook waits for player to load first
  const { objects: teammates } = useOsdkObjects(
    player ? $(Player).where({ teamId: player.teamId }) : undefined
  );
  const { objects: games } = useOsdkObjects(
    player ? $(Player).pivotTo("boxScores") : undefined
  );
  const { objects: coaches } = useOsdkObjects(
    player ? $(Player).pivotTo("team").pivotTo("coaches") : undefined
  );
}

// With Shapes (pre-built):
const PlayerDashboardShape = createShapeBuilder(Player, "PlayerDashboard")
  .require("name", "age")
  .deriveLink("teammates", p => p.pivotTo("team").pivotTo("players").as(SlimPlayer))
  .deriveLink("games", p => p.pivotTo("boxScores").as(SlimGame))
  .deriveLink("coaches", p => p.pivotTo("team").pivotTo("coaches").as(SlimCoach))
  .build();

function PlayerDashboard({ playerId }) {
  const { data } = useOsdkObject(Player, playerId, {
    shape: PlayerDashboardShape,
  });
  // All derived links execute in parallel after base object loads
}
```

### 3. Single Hook vs Multiple Hooks

```ts
// Regular @osdk/react:
// 4 separate hooks = 4 separate stores = 4 subscription setups
const { object: player, isLoading: l1 } = useOsdkObject(Player, playerId);
const { objects: teammates, isLoading: l2 } = useOsdkObjects(...);
const { objects: games, isLoading: l3 } = useOsdkObjects(...);
const { objects: coaches, isLoading: l4 } = useOsdkObjects(...);

const isLoading = l1 || l2 || l3 || l4; // Manual composition

// With Shapes:
// 1 hook, 1 store, unified loading state. Far more expressive and reusable types too
const { data, isLoading, linkStatus } = useOsdkObject(Player, playerId, {
  shape: PlayerDashboardShape,
});
```

### 4. Type-Safe Nullability (Eliminates Runtime Checks)

```ts
// Regular @osdk/react:
const { object: player } = useOsdkObject(Player, playerId);

// every property access needs null checks
const name = player?.name ?? "Unknown";
const age = player?.age ?? 0;
const city = player?.hometown ?? "N/A";

// Runtime overhead from ?? operators throughout render

// With Shapes:
const { data } = useOsdkObject(Player, playerId, {
  shape: {
    require: ["name", "age"],
    defaults: { hometown: "Unknown" },
  },
});

// No runtime checks needed, TypeScript guarantees non-null
// Transformations applied once when data arrives, not on every render
return <div>{data.name}, {data.age}, {data.hometown}</div>;
```

## Resources

### New concepts

* **Shape** - A frontend-only type projection derived from an Ontology type with nullability constraints, field defaults, and derived links
* **ShapeBuilder** - Chainable builder for defining shapes with type accumulation (pre-built approach)
* **InlineShapeConfig** - Object literal config for defining shapes inline in hook options
* **ShapeLinkBuilder** - Builder for derived links that allows m:m traversal (unlike DerivedProperty.Builder)
* **ShapeDefinition** - Immutable output of `.build()` (or `configToShapeDefinition()`) containing shape metadata and content hash

**Two ways to define shapes:**

1. **Pre-built** via `createShapeBuilder(type).require(...).build()` - produces a `ShapeDefinition` that can be reused across components
2. **Inline** via `{ shape: { require: [...], defaults: {...} } }` in hook options - converted to `ShapeDefinition` internally via `configToShapeDefinition()`

Both produce the same `ShapeDefinition` type and use the same execution path internally.

**Cache architecture**: Shapes rely on two caching mechanisms:

* **Store cache** (raw objects) - Managed by ObservableClient/Store; populated via OQL and direct queries
* **React memoization** - Derived link data lives in store snapshots (DerivedLinksStore, BatchedDerivedLinksStore); shape transformations are re-computed via useMemo when source data changes

### Existing concepts extended

* **makeExternalStore** - Powers the shape integration within existing hooks via React 18 bridge pattern
* **BulkObjectLoader** - Batches target object fetches in derived links (25ms window, 100 max)
* **BulkLinksLoader** - Batches link discovery across concurrent calls (25ms window, 100 max)

## API Spec

### Two approaches to defining shapes

Shapes can be defined in two ways, both producing the same `ShapeDefinition` type:

#### Approach 1: Pre-built shapes (via `createShapeBuilder`)

Best for reusable shapes shared across components.

```ts
import { createShapeBuilder } from "@osdk/api/shapes";

const SlimPlayer = createShapeBuilder(Player, "SlimPlayer")
  .require("name", "age")
  .withDefault("position", "Unknown")
  .build();

// Use with existing hooks
const { data } = useOsdkObject(Player, playerId, { shape: SlimPlayer });
```

#### Approach 2: Inline shape config

Best for component-local shapes or simple projections.

```ts
const { data } = useOsdkObject(Player, playerId, {
  shape: {
    require: ["name", "age"],
    defaults: { position: "Unknown" },
  },
});
```

The inline config is converted to a `ShapeDefinition` internally via `configToShapeDefinition()`.

### Shape builder API (pre-built approach)

#### `createShapeBuilder(baseType, debugName?)`

Create a new shape builder for an object or interface type.

```ts
// Signature
function createShapeBuilder<T extends ObjectOrInterfaceDefinition>(
  baseType: T,
  debugName?: string,
): ShapeBuilder<T, {}, {}>
```

Parameters:

* `baseType`: The OSDK object type or interface definition (e.g., `Player`, `Team`)
* `debugName`: Optional name for debugging in DevTools

Returns: `ShapeBuilder<T, {}, {}>`

Note: Shapes work for both object types and interfaces. For interface support in derived links, users can create a shape from the interface definition.

#### `ShapeBuilder.select(...props)`

Include properties without nullability changes. Type remains `T | undefined`.

```ts
createShapeBuilder(Player)
  .select("nickname", "avatar")  // nickname: string | undefined, avatar: string | undefined
```

#### `ShapeBuilder.require(...props)`

Require properties to be non-null. Sets error state if any are null at runtime.

```ts
createShapeBuilder(Player)
  .require("name", "age")  // name: string, age: number (no undefined)
```

Runtime Behavior: If name or age is null, the hook returns `{ data: undefined, error: ShapeNullabilityError }`.

#### `ShapeBuilder.dropIfNull(...props)`

Filter out objects where specified properties are null.

```ts
createShapeBuilder(Player)
  .dropIfNull("ssn")  // Only includes players with non-null ssn
```

For single object queries: Returns `{ data: undefined, droppedDueToNullability: true }` instead of error.

#### `ShapeBuilder.withDefault(prop, defaultValue)`

Provide default value when property is null.

```ts
createShapeBuilder(Player)
  .withDefault("shirtSize", "Large")  // shirtSize: string (no undefined)
```

#### `ShapeBuilder.withTransform(prop, fn)`

Transform property value. Function receives `T | undefined`, return type becomes new type.

```ts
createShapeBuilder(Player)
  .withTransform("hometown", h => h ?? "Unknown")  // hometown: string
```

#### `ShapeBuilder.deriveLink(name, builder)`

Define a derived link that loads related objects via ObjectSet operations.

```ts
createShapeBuilder(Player)
  .deriveLink("teammates", p =>
    p.pivotTo("team")
      .pivotTo("players")
      .where({ playerId: { $neq: p.$primaryKey } })
      .as(SlimPlayer)
  )
```

Deferred Loading: To make a link deferred (not loaded automatically), pass config to `.as()`:

```ts
.deriveLink("careerStats", p =>
  p.pivotTo("boxScores").as(SlimBoxScore, { defer: true })
)
```

#### `ShapeBuilder.build()`

Finalizes the shape definition. Returns immutable `ShapeDefinition`.

```ts
const SlimPlayer = createShapeBuilder(Player, "SlimPlayer")
  .require("name")
  .build();

// SlimPlayer.__shapeId: string (content hash)
// SlimPlayer.__baseType: Player (ObjectOrInterfaceDefinition)
// SlimPlayer.__baseTypeApiName: "Player" (string)
```

### Inline shape config API

The `InlineShapeConfig` interface allows defining shapes as plain objects directly in hook options:

```ts
interface InlineShapeConfig<BASE extends ObjectOrInterfaceDefinition> {
  readonly require?: readonly PropertyKeys<BASE>[];
  readonly select?: readonly PropertyKeys<BASE>[];
  readonly dropIfNull?: readonly PropertyKeys<BASE>[];
  readonly defaults?: {
    readonly [K in PropertyKeys<BASE>]?: NonNullable<PropertyType<BASE, K>>;
  };
  readonly transforms?: {
    readonly [K in PropertyKeys<BASE>]?: (value: PropertyType<BASE, K>) => unknown;
  };
  readonly links?: Record<string, InlineLinkConfig<BASE>>;
}
```

#### Inline derived links

Derived links in inline configs use a `via` callback:

```ts
interface InlineLinkConfig<SOURCE extends ObjectOrInterfaceDefinition> {
  readonly via: (builder: ShapeLinkBuilder<SOURCE, SOURCE>) => ShapeLinkBuilder<SOURCE, ObjectOrInterfaceDefinition>;
  readonly target?: ShapeDefinition<ObjectOrInterfaceDefinition>;
  readonly defer?: boolean;
}
```

Example:

```ts
const { data } = useOsdkObject(Player, playerId, {
  shape: {
    require: ["name", "age"],
    links: {
      teammates: {
        via: p => p.pivotTo("team").pivotTo("players"),
        target: SlimPlayer,
      },
      recentGames: {
        via: p => p.pivotTo("boxScores"),
        target: SlimGame,
        defer: true,
      },
    },
  },
});
```

### ShapeLinkBuilder API

The ShapeLinkBuilder is provided to `deriveLink` callbacks (pre-built) and `links.via` callbacks (inline). Unlike DerivedProperty.Builder, it doesn't have the m:m restrictions (due to us using ObjectSet behavior under the hood).

```ts
interface ShapeLinkBuilder<SOURCE, CURRENT> {
  // Source object reference
  readonly $primaryKey: symbol;  // References source object's primary key

  pivotTo<L extends LinkNames<CURRENT>>(link: L): ShapeLinkBuilder<SOURCE, LinkedType<CURRENT, L>>;

  // Set operations
  union(...others: ShapeLinkBuilder<SOURCE, CURRENT>[]): ShapeLinkBuilder<SOURCE, CURRENT>;
  intersect(...others: ShapeLinkBuilder<SOURCE, CURRENT>[]): ShapeLinkBuilder<SOURCE, CURRENT>;
  subtract(...others: ShapeLinkBuilder<SOURCE, CURRENT>[]): ShapeLinkBuilder<SOURCE, CURRENT>;

  // Filtering
  where(clause: WhereClause<CURRENT>): ShapeLinkBuilder<SOURCE, CURRENT>;
  orderBy<K extends PropertyKeys<CURRENT>>(
    property: K,
    direction?: "asc" | "desc"
  ): ShapeLinkBuilder<SOURCE, CURRENT>;
  distinct(): ShapeLinkBuilder<SOURCE, CURRENT>;
  limit(n: number): ShapeLinkBuilder<SOURCE, CURRENT>;

  // Terminal operations (pre-built approach only)
  as<S extends ShapeDefinition<CURRENT>>(
    shape: S,
    config?: { defer?: boolean }
  ): ShapeLinkResult<S>;
}
```

Note: Interface support is handled via `createShapeBuilder(InterfaceDefinition)`. Create a shape from the interface, then use `.as(InterfaceShape)` in derived links.

### Hook integration

Shapes integrate as options on existing hooks rather than introducing new hooks.

#### `useOsdkObject` with shape (single object mode)

```ts
// Pre-built shape
const { data, isLoading, error, linkStatus, loadDeferred, retry } = useOsdkObject(
  Player,
  "player123",
  {
    shape: PlayerWithTeammates,
    enabled: true,
    links: {
      teammates: { pageSize: 50, autoFetchMore: true },
    },
  }
);

// Inline shape
const { data, isLoading, error, linkStatus } = useOsdkObject(
  Player,
  "player123",
  {
    shape: {
      require: ["name", "age"],
      links: {
        teammates: {
          via: p => p.pivotTo("team").pivotTo("players"),
          target: SlimPlayer,
        },
      },
    },
  }
);
```

When a shape option is present, the return type changes to include shape-specific fields:

```ts
interface UseOsdkObjectShapeResult<Q, C> {
  data: ShapeInstance<InferShapeDefinition<Q, C>> | undefined;
  shape: InferShapeDefinition<Q, C>;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  droppedDueToNullability: boolean;
  nullabilityViolations: readonly NullabilityViolation[];
  linkStatus: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;
  loadDeferred: (linkName: keyof ShapeDerivedLinks<S>) => Promise<void>;
  retry: (linkName?: keyof ShapeDerivedLinks<S>) => void;
  invalidate: (linkName?: keyof ShapeDerivedLinks<S>) => void;
}
```

When a pre-built `ShapeDefinition` is passed, the return type is `UseShapeResult<S>`:

```ts
interface UseShapeResult<S> {
  data: ShapeInstance<S> | undefined;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  droppedDueToNullability: boolean;
  nullabilityViolations: readonly NullabilityViolation[];
  linkStatus: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;
  loadDeferred: (linkName: keyof ShapeDerivedLinks<S>) => Promise<void>;
  retry: (linkName?: keyof ShapeDerivedLinks<S>) => void;
  invalidate: (linkName?: keyof ShapeDerivedLinks<S>) => void;
}
```

#### `useOsdkObjects` with shape (list mode)

```ts
// Inline shape
const { data, isLoading, fetchMore, linkStatus } = useOsdkObjects(Player, {
  where: { age: { $gt: 21 } },
  orderBy: { name: "asc" },
  pageSize: 50,
  autoFetchMore: true,
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

Returns:

```ts
interface UseOsdkObjectsShapeResult<Q, C> {
  data: ShapeInstance<InferShapeDefinition<Q, C>>[] | undefined;
  shape: InferShapeDefinition<Q, C>;
  isLoading: boolean;
  error: Error | undefined;
  isOptimistic: boolean;
  fetchMore: (() => Promise<void>) | undefined;
  droppedCount: number;
  nullabilityViolations: readonly NullabilityViolation[];
  itemLinkStatus: PerItemLinkStatus<InferShapeDefinition<Q, C>>;
  linkStatus: Partial<{ [K in keyof ShapeDerivedLinks<S>]: LinkStatus }>;
  loadDeferred: (primaryKey: string | number, linkName: keyof ShapeDerivedLinks<S>) => Promise<void>;
  retry: (primaryKey?: string | number, linkName?: keyof ShapeDerivedLinks<S>) => void;
  invalidate: (linkName?: keyof ShapeDerivedLinks<S>) => void;
}
```

Note: When a shape option is provided, `pivotTo`, `withProperties`, `rids`, and `intersectWith` are not available as options. The shape's derived links replace `pivotTo` for link traversal.

### Batched link execution in list mode

In list mode, the implementation separates derived links into two categories:

**Batchable links**: Simple pivot chains with no where clauses, set operations, ordering, or limits. These use `BulkLinksLoader` to batch link discovery across all source objects in the list (e.g., fetch all 50 players' teammates in 1-2 requests instead of 50).

**Non-batchable links**: Links with complex queries (where, orderBy, limit, set operations). These fall back to per-item `DerivedLinksStore` instances.

This hybrid strategy means simple link patterns get significant batching benefits while complex queries still work correctly.

### Error types

#### ShapeNullabilityError

Thrown when `.require()` properties are null.

```ts
class ShapeNullabilityError extends Error {
  readonly shape: ShapeDefinition<ObjectOrInterfaceDefinition>;
  readonly violations: readonly NullabilityViolation[];
}
```

### Transformation pipeline

Shape transformations are applied in a specific order:

1. **dropIfNull** - If any dropIfNull property is null, the entire object is dropped
2. **withDefault** - Null properties get their default values applied
3. **withTransform** - Transform functions are applied to property values
4. **require** - After defaults and transforms, require constraints are checked; violations produce errors

This ordering means you can combine `withDefault` or `withTransform` with `require` -- a property can have a default applied first, then be validated as non-null.

## Example usage

We're currently prototyping with Athena's new War Room app:
PR implementing Shapes API into their app: https://github.palantir.build/acme/nucleus/pull/172906

### Notional use cases

* UC-1: Player Dashboard - Load a player with their team, teammates, and recent games (currently 4+ separate hooks, manual null checks, waterfall requests)
* UC-2: Team Roster Page - Load team with all players and each player's stats (currently N+1 queries: 1 + N player stat queries)
* UC-3: Schedule View - Load events implementing Schedulable interface with type-specific details (currently requires manual $objectType checks)
* UC-4: Deferred Loading - Load expensive data only when user requests it (currently no built-in defer mechanism)

### UC-1: Player Dashboard

Before (current approach):

```ts
function PlayerDashboard({ playerId }: Props) {
  const { object: player, isLoading: playerLoading } = useOsdkObject(Player, playerId);
  const { objects: teammates, isLoading: teammatesLoading } = useOsdkObjects(
    player ? $(Player).pivotTo("team").pivotTo("players") : undefined
  );
  const { objects: games, isLoading: gamesLoading } = useOsdkObjects(
    player ? $(Player).pivotTo("boxScores") : undefined
  );

  if (playerLoading || teammatesLoading || gamesLoading) return <Loading />;
  if (!player) return <NotFound />;

  // Manual null checks everywhere
  const name = player.name ?? "Unknown";
  const age = player.age ?? 0;

  return (
    <div>
      <h1>{name}, {age}</h1>
      <TeamList teammates={teammates?.filter(t => t.playerId !== playerId) ?? []} />
      <GameHistory games={games ?? []} />
    </div>
  );
}
```

After (with Shapes, pre-built):

```ts
// Define shapes once, reuse across components
const SlimPlayer = createShapeBuilder(Player, "SlimPlayer")
  .require("name", "age")
  .build();

const SlimGame = createShapeBuilder(Game, "SlimGame")
  .require("date", "score")
  .build();

const PlayerDashboardShape = createShapeBuilder(Player, "PlayerDashboard")
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

// Use in component - same hook, shape option added
function PlayerDashboard({ playerId }: Props) {
  const { data, isLoading, linkStatus } = useOsdkObject(
    Player,
    playerId,
    { shape: PlayerDashboardShape },
  );

  return (
    <div>
      <h1>{isLoading ? <Skeleton /> : `${data?.name}, ${data?.age}`}</h1>
      {linkStatus.teammates?.isLoading ? (
        <TeamListSkeleton />
      ) : (
        <TeamList teammates={data?.teammates ?? []} />
      )}
      {linkStatus.recentGames?.isLoading ? (
        <GamesSkeleton />
      ) : (
        <GameHistory games={data?.recentGames ?? []} />
      )}
    </div>
  );
}
```

After (with Shapes, inline config):

```ts
function PlayerDashboard({ playerId }: Props) {
  const { data, isLoading, linkStatus } = useOsdkObject(
    Player,
    playerId,
    {
      shape: {
        require: ["name", "age"],
        links: {
          teammates: {
            via: p => p.pivotTo("team").pivotTo("players"),
            target: SlimPlayer,
          },
          recentGames: {
            via: p => p.pivotTo("boxScores"),
            target: SlimGame,
          },
        },
      },
    },
  );

  return (
    <div>
      <h1>{isLoading ? <Skeleton /> : `${data?.name}, ${data?.age}`}</h1>
      {linkStatus.teammates?.isLoading ? (
        <TeamListSkeleton />
      ) : (
        <TeamList teammates={data?.teammates ?? []} />
      )}
      {linkStatus.recentGames?.isLoading ? (
        <GamesSkeleton />
      ) : (
        <GameHistory games={data?.recentGames ?? []} />
      )}
    </div>
  );
}
```

Improvements:

* Same `useOsdkObject` hook, just with a shape option
* No null checks on name/age (typed as non-optional)
* Teammates filtered at query level
* Parallel loading of derived links
* Granular loading states per link

### UC-2: Team Roster with Nested Shapes

```ts
// Player with stats (has its own derived link)
const SlimBoxScore = createShapeBuilder(BoxScore, "SlimBoxScore")
  .require("goals", "assists")
  .build();

const PlayerWithStats = createShapeBuilder(Player, "PlayerWithStats")
  .require("name", "jerseyNumber")
  .withDefault("position", "Unknown")
  .deriveLink("seasonBoxScores", p =>
    p.pivotTo("boxScores")
      .where({ season: "2024" })
      .as(SlimBoxScore)
  )
  .build();

// Team roster uses PlayerWithStats
const TeamRoster = createShapeBuilder(Team, "TeamRoster")
  .require("name", "city")
  .deriveLink("roster", t => t.pivotTo("players").as(PlayerWithStats))
  .build();

// Usage - same useOsdkObject hook
function TeamPage({ teamId }: Props) {
  const { data: team, linkStatus } = useOsdkObject(Team, teamId, {
    shape: TeamRoster,
  });

  return (
    <div>
      <h1>{team?.name} ({team?.city})</h1>
      <RosterTable
        players={team?.roster ?? []}
        loading={linkStatus.roster?.isLoading}
      />
    </div>
  );
}
```

### UC-3: Interface Queries with Type Discrimination

```ts
// Create shape from interface definition (Schedulable is an InterfaceDefinition)
const SlimSchedulable = createShapeBuilder(Schedulable)
  .require("startTime", "endTime")
  .build();

const ScheduleView = createShapeBuilder(Team, "ScheduleView")
  .require("name")
  .deriveLink("upcomingEvents", t =>
    t.pivotTo("schedule")
      .where({ startTime: { $gt: "now()" } })
      .orderBy("startTime", "asc")
      .as(SlimSchedulable)
  )
  .build();

// Usage with type narrowing
function Schedule({ teamId }: Props) {
  const { data } = useOsdkObject(Team, teamId, { shape: ScheduleView });

  return (
    <ul>
      {data?.upcomingEvents.map(event => (
        <li key={event.$primaryKey}>
          {event.startTime.toLocaleDateString()}
          {event.$is(Game) && ` vs ${event.awayTeam}`}
          {event.$is(Meeting) && ` - ${event.title}`}
        </li>
      ))}
    </ul>
  );
}
```

Note: The `createShapeBuilder()` function accepts both `ObjectTypeDefinition` and `InterfaceDefinition`. For interface-typed results, create a shape from the interface and use `.as(InterfaceShape)` in derived links.

### UC-4: Deferred Loading for Large Data

```ts
const PlayerWithHistory = createShapeBuilder(Player, "PlayerWithHistory")
  .require("name")
  .deriveLink("careerStats", p => p.pivotTo("boxScores").as(SlimBoxScore, { defer: true }))
  .build();

function PlayerProfile({ playerId }: Props) {
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
        <StatsTableSkeleton />
      ) : (
        <StatsTable stats={data?.careerStats ?? []} />
      )}
    </div>
  );
}
```

## Known Performance Limitations

1. **N+1 for nested shapes**: If Team -> 25 Players -> each Player has a derived link, that's 1 + 1 + 25 = 27 queries
2. **No cross-shape query merging**: 100 players on same team each query teammates = 100 identical queries (results dedupe in the store, but queries don't)
3. **Nested link flush delay**: Nested link observation uses a 25ms setTimeout batch. Deep nesting scenarios accumulate this delay per level.

## Alternatives Considered

### How should shapes integrate with React hooks?

#### [Chosen] Option 1: Shape option on existing hooks

```ts
// Single object
const { data } = useOsdkObject(Player, playerId, {
  shape: { require: ["name", "age"] },
});

// List
const { data } = useOsdkObjects(Player, {
  where: { age: { $gt: 21 } },
  shape: { require: ["name"] },
});
```

Pros:

* No new hooks to learn -- existing `useOsdkObject` and `useOsdkObjects` gain shape support
* Smaller API surface
* Natural upgrade path: add a shape option to an existing hook call
* Type overloads ensure the return type changes correctly when shape is present

Cons:

* More complex hook overloads
* The hook implementation must branch on whether shape is present

#### Option 2: Separate useShape hook

```ts
const { data } = useShape(SlimPlayer, playerId);
const { data } = useShape(SlimPlayer, { where: ... });
```

Pros:

* Clean separation of concerns
* Simpler hook signatures

Cons:

* New hook to learn and maintain
* Duplicates much of useOsdkObject/useOsdkObjects logic
* Users must choose between two sets of hooks
* Harder upgrade path (rewrite hook calls instead of adding an option)

### How should we define shapes?

#### [Chosen] Option 1: Both builder and inline config

Pre-built via builder:
```ts
const SlimPlayer = createShapeBuilder(Player, "SlimPlayer")
  .require("name", "age")
  .build();
```

Inline in hook options:
```ts
useOsdkObject(Player, pk, {
  shape: { require: ["name", "age"] },
});
```

Pros:

* Pre-built shapes offer full expressivity (deriveLink with set operations, transforms, etc.)
* Inline config is concise for simple cases
* Both produce the same `ShapeDefinition` type
* TypeScript can infer types through both paths

Cons:

* Two syntax options to document
* Inline config has slightly less expressivity for complex link builders (uses `via` callback instead of `.as()` terminal)

#### Option 2: Builder only

Pros:

* Single, consistent API
* TypeScript can accumulate types through method chain

Cons:

* Verbose for simple "just require these 3 fields" cases
* Requires external shape definitions even for one-off projections

#### Option 3: Inline config only

Pros:

* Concise, no imports needed beyond the types
* Familiar JavaScript object pattern

Cons:

* TypeScript cannot easily accumulate types through spreads
* Less expressivity for complex derived link definitions
* No reusable shape definitions across components

### How should derived links handle m:m traversal?

#### [Chosen] Option 1: New ShapeLinkBuilder (No Restrictions)

```ts
.deriveLink("allZ", a =>
  a.pivotTo("B").pivotTo("Z")  // B->Z can be m:m
    .union(a.pivotTo("C").pivotTo("Z"))
    .as(SlimZ)
)
```

Pros:

* Enables full m:m traversal
* Separate builder from DerivedProperty.Builder
* Each derived link becomes independent ObjectSet query

Cons:

* Potential for expensive queries (user education needed)
* Different API than existing DerivedProperty.Builder

#### Option 2: Keep DerivedProperty.Builder Restrictions

```ts
// Only aggregations allowed after m:m
.withRdp("zCount", a => a.pivotTo("B").pivotTo("Z").count())
```

Pros:

* Consistent with existing API
* Prevents accidentally expensive queries

Cons:

* Can't build the shapes users actually need
* Major limitation for real-world use cases

### Where should loading config live?

#### [Chosen] Option 1: Hook-Level with Shape Defaults

```ts
// Shape defines default defer (config goes in .as())
const PlayerWithHistory = createShapeBuilder(Player)
  .deriveLink("history", p => p.pivotTo("boxScores").as(SlimBoxScore, { defer: true }))
  .build();

// Hook can override
useOsdkObject(Player, pk, {
  shape: PlayerWithHistory,
  links: { history: { defer: false } },  // Override: load eagerly
});
```

Pros:

* Shapes define WHAT (data structure)
* Hooks define HOW (loading strategy)
* Defer is a reasonable shape-level default (data characteristic)
* Flexibility to override per-usage

Cons:

* Slight inconsistency (defer in shape, other config in hook)

#### Option 2: All Config in Shape

Pros:

* Single source of truth

Cons:

* Can't vary loading strategy per usage
* Same shape in list vs detail view may need different configs

#### Option 3: All Config in Hook

Pros:

* Complete flexibility
* Shape is purely structural

Cons:

* Repetitive when same config needed everywhere
* Defer often is a data characteristic (expensive link = defer by default)

### How should derived link results be cached?

#### [Chosen] Option 1: Source-Specific Cache Keys

```ts
// Player A's teammates: cache key includes A's pk
// Player B's teammates: separate cache key (even if same team)
```

Pros:

* Simple implementation
* Predictable invalidation
* The store already dedupes the underlying raw objects

Cons:

* Same ObjectSet query executed multiple times
* Network overhead

#### Option 2: Result-Sharing via ObjectSet Normalization

Pros:

* Fewer queries for reflexive relationships
* Better network efficiency

Cons:

* Complex ObjectSet normalization logic
* Harder invalidation
* Premature optimization

Starting with the simpler implementation and optimizing later if needed is the right move.

## Known Limitations

1. **Circular shape references are not guarded**: If shape A derives a link targeting shape B which derives a link targeting shape A, handleNestedLinks will recurse until the browser runs out of memory. A recursion depth check is planned but unlikely for users to hit organically.
2. **Shape ID collision risk**: The shape ID is a 32-bit hash; there is a (small) collision risk.
3. **Nested link flush delay**: Nested link observation uses a 25ms setTimeout batch. Deep nesting scenarios accumulate this delay per level.
4. **Cannot switch shape/non-shape mode**: A hook call that starts with a shape option cannot later be called without one (and vice versa). The implementation enforces this with a ref check in development mode.

## Future possible optimizations

1. **Same-type subscription merging**: When multiple derived links on the same source object target the same object type, their `$in` subscriptions could be merged into a single subscription with the unioned PK set. Subscription churn complexity applies when one link's PK set changes.

2. **Field selection propagation**: Derived link subscriptions could pass `$select` derived from the target shape's `__props` to avoid fetching unused properties on link targets. Requires `observeList` to support a select parameter (currently only `observeObject` does).

3. **Cross-shape query merging**: Identical ObjectSet queries from different source objects could be deduplicated at the network level rather than just at the store level.

## Open Questions

1. **Should shapes support aggregations inline?**
    1. Current: Use RDPs for aggregations
    2. Alternative: `.aggregate()` in ShapeLinkBuilder
2. **How much sugar should we provide to users overall?** The scope of this API could be decreased or increased quite a bit depending on your views here. Some level of opinionation makes sense considering this is OSDK but there's obviously a limit.

## Prior Art

### Prior Art #1: Functional Lenses

Links:

* https://github.com/atomicobject/lenses
* https://www.bekk.christmas/post/2019/06/the-lens-pattern-in-typescript
* https://en.wikibooks.org/wiki/Haskell/Lenses_and_functional_references

Approach: Lenses are a functional programming pattern that pairs a getter and a setter into a single composable unit for accessing and updating nested immutable data.

```ts
interface Lens<A, B> {
  get: (a: A) => B;
  set: (a: A, b: B) => A;
}

const nameLens = Lens.from<Player>().prop("name");
const teamLens = Lens.from<Player>().prop("team");
const teamNameLens = compose(teamLens, Lens.from<Team>().prop("name"));

nameLens.get(player);              // "LeBron"
teamNameLens.set(player, "Heat");  // new Player with team.name = "Heat"
```

Relevance to Shapes:

* Shapes and lenses solve related but distinct problems: lenses provide composable read/write access into nested structures, while shapes project and transform data at the boundary between the store and the UI
* The `.withTransform()` method was a direct inspiration
* Shapes intentionally don't provide setters (they're read-only projections), which is the key divergence from the lens model
* Lens composition influenced the nested shape pattern: PlayerShape containing TeamShape is conceptually similar to composing lenses that traverse player -> team -> name

### Prior Art #2: Relay (Facebook)

Link: https://relay.dev/docs/guided-tour/rendering/fragments/

Approach: GraphQL fragments colocated with components, compiler aggregates into single query.

```graphql
fragment PlayerCard_player on Player {
  name
  age
  team {
    name
  }
}
```

Relevance to Shapes:

* Fragment model inspired the "declare what you need" approach
* Shapes prefetch tree is similar to Relay's query aggregation

### Prior Art #3: Prisma Client

Link: https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries

Approach: Type-safe includes/selects for related data.

```ts
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    posts: {
      include: { comments: true }
    }
  }
});
```

Relevance to Shapes:

* Inspired derived link syntax
* Similar "include" pattern for related data

### Prior Art #4: Zod

Link: https://zod.dev/

Approach: Chainable schema builder with type inference.

```ts
const UserSchema = z.object({
  name: z.string(),
  age: z.number().optional().default(0),
});
type User = z.infer<typeof UserSchema>;
```

Relevance to Shapes:

* Inspired chainable builder pattern
* `.default()` method similar to `.withDefault()`
* Type inference pattern is pretty identical although they're solving a different problem
