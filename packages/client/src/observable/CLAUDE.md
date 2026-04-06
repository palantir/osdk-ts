# Observable Client

This directory contains the implementation of the Observable Client, a reactive data management system for OSDK clients providing real-time data observation and synchronization with optimistic updates and automatic cache invalidation.

## Refactoring Tips

It is important when refactoring and modifying code that we do not unwrap/abstract logging code. It is specifically the way it is because I know it will be removed at build time for our consumers.

So if you see something like this:

```ts
if (process.env.NODE_ENV !== "production") {
  this.logger?.child({ methodName: "maybeUpdateAndRevalidate" }).debug(
    "example debug message",
  );
}
```

we want it to stay in that form.

## Related Documentation

- [`architecture_observable_client.md`](../../architecture_observable_client.md) -- deep dive into Store internals, Layer system, CacheKeys, batch updates, and optimistic mutation flow
- [`ObservableClient/CLAUDE.md`](./ObservableClient/CLAUDE.md) -- type definitions reference (Status, Observer, CommonObserveOptions, ObserveLink types)
- [`internal/CLAUDE.md`](./internal/CLAUDE.md) -- Store architecture, Layer system, Query hierarchy, and cache key patterns
- [`internal/links/CLAUDE.md`](./internal/links/CLAUDE.md) -- link observation implementation details, pivot queries, and link storage patterns
- [`internal/testUtils/CLAUDE.md`](./internal/testUtils/CLAUDE.md) -- test utilities reference (mock helpers, matchers, standard test flows)

## Core Concepts

### ObservableClient Methods

- `observeObject()` - Subscribe to single object changes
- `observeList()` - Subscribe to filtered/sorted object collections with pagination
- `observeLinks()` - Subscribe to object relationships
- `applyAction()` - Execute actions with optimistic updates
- `validateAction()` - Validate actions without execution

### Cache System

- **Multi-layer**: Truth layer (server data) with optimistic layers stacked on top
- **Canonicalization**: Query parameters are normalized for efficient caching
- **Reference Counting**: Automatic cleanup of unused cache entries

### Optimistic Updates

- Immediately update UI while action is processed server-side
- Use object cloning with `$clone()` to create immutable optimistic objects
- On success, server data replaces optimistic update; on failure, automatically rolled back

## Best Practices

- Reuse query parameters when possible to leverage cache
- Understand that data is shared across components with the same query
- When invalidating object types, only queries and links related to that specific object type will be invalidated
- Use fine-grained subscriptions to minimize data transfer and processing

## Status Lifecycle

Payloads emit with a `status` field: `init` -> `loading` -> `loaded`. On failure: `error`.
- `init`: Before any fetch (subscriber just attached)
- `loading`: Network request in flight
- `loaded`: Data available
- `error`: Fetch failed (payload may still contain stale data from a previous load)

## Observer Interface

All observe methods accept `Observer<T>` with `next`, `error`, `complete` callbacks. This follows the RxJS convention but the observable system does NOT use RxJS internally.

## Observation Options

- `mode: "offline"` -- only use cached data, never fetch
- `mode: "force"` -- always fetch from server, ignore cache
- `mode: undefined` (default) -- use cache if available, fetch if stale/missing
- `dedupeInterval` -- milliseconds to deduplicate emissions (React hooks default to 2000ms)
- `invalidationMode`: `"in-place"` | `"wait"` | `"reset"` -- controls UI behavior during cache invalidation

## Canonicalization System

Query parameters (where, orderBy, select, etc.) are canonicalized via specialized canonicalizers in `internal/` (`WhereClauseCanonicalizer`, `OrderByCanonicalizer`, `SelectCanonicalizer`, etc.). Two queries with different object identity but equivalent values share the same cache entry. Always compare canonicalized forms, never raw inputs.

## BatchContext

Cache mutations must occur within a `BatchContext` (see `internal/BatchContext.ts`). This ensures atomic changes, on-demand optimistic layer creation, and proper change tracking for notifications.

## File Organization

- `ObservableClient.ts` -- public interface and `createObservableClient` factory
- `ObservableClient/` subdirectory -- type definitions (common.ts, ObserveLink.ts)
- `internal/ObservableClientImpl.ts` -- actual implementation
- `internal/Store.ts` -- central cache store
- `internal/Layer.ts` / `Layers.ts` -- truth + optimistic layer stack
- `internal/*Canonicalizer.ts` -- query parameter normalization
- `internal/base-list/` -- shared logic for list-like queries
- `internal/links/`, `internal/object/`, `internal/objectset/`, `internal/function/`, `internal/aggregation/` -- domain-specific observation implementations
- `internal/testUtils/` -- test helpers (see its own CLAUDE.md)
