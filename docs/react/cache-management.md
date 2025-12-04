# Cache Management

This guide covers how the OSDK React cache system works and how to manually control it.

## How the Cache Works

The `OsdkProvider2` creates an `ObservableClient` that maintains a normalized cache of all queries and their results.

### What Gets Cached

| Data Type | Cache Key Based On |
|-----------|-------------------|
| **Objects** | Object type + primary key |
| **Lists** | Object type + where clause + orderBy |
| **Links** | Source object + link name + filters |
| **Aggregations** | Object type + where clause + aggregate definition |

### Cache Sharing

- **Same query = same cache entry**: Two components calling `useOsdkObjects(Todo, { where: { isComplete: false } })` share the same cached result
- **Different filters = different entries**: `{ isComplete: false }` and `{ isComplete: true }` create separate cache entries
- **Derived properties create variants**: Adding `withProperties` creates a separate cache entry

### Object Normalization

Objects are stored once and shared across all queries that reference them:

```
useOsdkObjects(Todo)           ─┐
                                ├─► Todo:1 (single cached instance)
useOsdkObject(Todo, "1")       ─┘
```

When `Todo:1` is updated, all queries referencing it see the change immediately.

## Automatic Cache Updates

### After Actions

When an action completes, the server response specifies which objects were affected:

- **Added objects**: Fetched and added to cache, relevant lists re-evaluated
- **Modified objects**: Re-fetched, all queries containing them updated
- **Deleted objects**: Removed from cache and all lists

### Optimistic Updates

With `$optimisticUpdate`:

1. Optimistic layer created with your changes
2. UI shows optimistic state (`isOptimistic: true`)
3. On success: Server data replaces optimistic layer
4. On failure: Optimistic layer removed, original state restored

### Real-time Updates

With `streamUpdates: true`, the cache receives WebSocket updates and applies them automatically.

## When Manual Invalidation is Needed

Automatic updates don't cover:

- Data changed by an external system or external cache
- Data modified outside OSDK (direct API calls, background jobs)

## Manual Cache Invalidation

The `ObservableClient` provides methods to invalidate cached data:

| Method | Effect | Use Case |
|--------|--------|----------|
| `invalidateObjects([obj1, obj2])` | Re-fetches specific objects | You know exactly which objects are stale |
| `invalidateObjectType(Todo)` | Re-fetches all objects and lists of that type | External bulk update |
| `invalidateAll()` | Re-fetches everything | Last resort |

### Type Isolation

`invalidateObjectType(Todo)` only affects Todo-related data:

- Re-fetches all Todo objects
- Re-fetches all Todo lists
- Re-fetches links where Todo is the source type
- Does NOT affect other object types, even if linked to Todos

## Cache with Optimistic Updates

```tsx
import { $Actions, Todo } from "@my/osdk";
import { useOsdkAction, useOsdkObject } from "@osdk/react/experimental";

function TodoView({ todo }: { todo: Todo.OsdkInstance }) {
  const { isOptimistic } = useOsdkObject(todo);
  const { applyAction } = useOsdkAction($Actions.completeTodo);

  const handleComplete = () => {
    applyAction({
      todo,
      isComplete: true,
      $optimisticUpdate: (ou) => {
        ou.updateObject(todo.$clone({ isComplete: true }));
      },
    });
  };

  return (
    <div>
      {todo.title}
      {isOptimistic && " (Saving...)"}
      <button onClick={handleComplete}>Complete</button>
    </div>
  );
}
```

## Best Practices

1. **Be specific**: Use `invalidateObjects` when you know what data specifically changed
2. **Use type-level invalidation**: `invalidateObjectType` for external bulk changes
3. **Avoid multiple sources of truth**: Coordinating side effects between multiple systems is tricky; we recommend solely using the OSDK React cache when possible for data loading