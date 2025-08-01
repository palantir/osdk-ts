# ObservableClient Folder

This folder contains type definitions and interfaces that define the public API for the ObservableClient system.

## Files Overview

### common.ts

Contains shared type definitions used across the ObservableClient system:

- `Status`: Core state enum (`"init" | "loading" | "loaded" | "error"`)
- `Observer<T>`: Standard observer pattern interface with `next`, `error`, and `complete` methods
- `CommonObserveOptions`: Base options including `dedupeInterval` for controlling observation behavior
- `ObserveOptions`: Mode configuration (`"offline" | "force"`) for data fetching strategies
- `OrderBy<Q>`: Generic type for specifying sort order on object properties

### ObserveLink.ts

Defines interfaces specific to observing relationships between objects:

- `ObserveLink.Options<Q>`: Configuration for link observations including:
  - `type`: Object type specification
  - `where`: Filtering clauses
  - `pageSize`: Pagination control
  - `orderBy`: Sorting specification
  - `invalidationMode`: Cache invalidation strategy
  - `expectedLength`: Performance optimization hint

- `ObserveLink.CallbackArgs<T>`: Callback data structure with:
  - `resolvedLinks`: Array of linked objects
  - `isOptimistic`: Optimistic update flag
  - `fetchMore`: Pagination function
  - `hasMore`: More data availability flag
  - `status`: Current loading state

## Usage Patterns

### Type Safety

These files provide TypeScript definitions that ensure type safety when using the ObservableClient:

```typescript
// Example of type-safe link observation
client.observeLinks(sourceObject, "employees", {
  orderBy: { name: "asc" },
  where: { status: "active" }
}, (args) => {
  // args.resolvedLinks are properly typed
  const employees = args.resolvedLinks;
  
  // Type-safe pagination
  if (args.hasMore) {
    args.fetchMore();
  }
});
```

### Observer Pattern

The standard observer pattern is used throughout the system:

```typescript
// Manual subscription example
const subscription = client.observeObject(Person, "123", {
  next: (data) => { /* handle update */ },
  error: (err) => { /* handle error */ },
  complete: () => { /* handle completion */ }
});

// Remember to unsubscribe
subscription.unsubscribe();
```

## Best Practices

1. Use TypeScript generics for maximum type safety
2. Leverage pagination features for large collections with `pageSize` and `fetchMore`
3. Be aware of the different invalidation modes for specific use cases
4. Always unsubscribe from observations when no longer needed