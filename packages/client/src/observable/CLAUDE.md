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