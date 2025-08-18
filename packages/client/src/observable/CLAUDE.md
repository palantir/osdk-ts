# Observable Client

This directory contains the implementation of the Observable Client, a reactive data management system for OSDK clients. The Observable Client provides real-time data observation and synchronization with optimistic updates and automatic cache invalidation.

## Refactoring tips

It is important when refactoring and modifying code that we do not unwrap/abstract logging code. It is specifically the way it is because I know it will be removed at build time for our consumers.

So if you see something like this:

```ts
if (process.env.NODE_ENV !== "production") {
  this.logger?.child({ methodName: "maybeUpdateAndRevalidate" }).debug(
    "example debug message",
  );
}
```

we want it to stay in that form

## Core Concepts

### ObservableClient

The main interface for reactive operations. It provides methods to:

- `observeObject()` - Subscribe to single object changes
- `observeList()` - Subscribe to filtered/sorted object collections with pagination
- `observeLinks()` - Subscribe to object relationships
- `applyAction()` - Execute actions with optimistic updates
- `validateAction()` - Validate actions without execution

### Reactive Pattern

The Observable Client uses RxJS observables for reactive data flow:

1. Components observe objects/lists/links
2. Cache is checked for existing data
3. Loading state is emitted if data is not available
4. Network requests fetch missing data
5. Updates are propagated to all subscribers
6. Changes automatically invalidate related queries

### Optimistic Updates

When applying actions, you can provide optimistic updates:

```typescript
applyAction({
  // Action parameters
  $optimisticUpdate: (ou) => {
    ou.updateObject(object.$clone({ property: newValue }));
  },
});
```

This immediately updates the UI while the action is processed server-side. On success, the server data replaces the optimistic update. On failure, the optimistic update is automatically rolled back.

### Cache System

- **Multi-layer**: Truth layer (server data) with optimistic layers stacked on top
- **Canonicalization**: Query parameters are normalized for efficient caching
- **Reference Counting**: Automatic cleanup of unused cache entries
- **Weak References**: Prevents memory leaks through garbage collection

## Best Practices

### Memory Management

- Always unsubscribe from observables when components unmount
- Use the provided hooks in @osdk/react which handle subscription lifecycle

### Query Efficiency

- Reuse query parameters when possible to leverage cache
- Be aware that where clauses and orderBy parameters are canonicalized
- Consider pagination for large datasets using the `pageSize` parameter

### Optimistic Updates

- Keep optimistic updates consistent with expected server behavior
- Use object cloning with `$clone()` to create immutable optimistic objects
- Handle potential conflicts in optimistic updates for concurrent actions

### Error Handling

- Always handle error states in your UI components
- Check both `isLoading` and `error` states from observables
- Use `validateAction()` for pre-validation of actions

### Performance Considerations

- Minimize unnecessary re-renders by using stable query parameters
- Understand that data is shared across components with the same query
- Use fine-grained subscriptions to minimize data transfer and processing
- When invalidating object types, only queries and links related to the specific object type will be invalidated
- Be aware that invalidating an object type will trigger updates for all links with that source object type

## Integration with React

The Observable Client is designed to be used with React hooks from @osdk/react:

- `useOsdkObject()` - For single object subscriptions
- `useOsdkObjects()` - For list subscriptions with filtering and pagination
- `useOsdkAction()` - For action execution with optimistic updates
- `useLinks()` - For relationship subscriptions

## Implementation Details

- **Store**: Central data storage system with multi-layer cache
- **Layer System**: Manages truth layer and optimistic layers
- **Query System**: Hierarchical inheritance with shared abstractions for collection types
- **Cache Keys**: Trie-based deduplication for memory efficiency
- **Change Tracking**: MultiMap structure for efficient invalidation
