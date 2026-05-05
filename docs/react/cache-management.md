---
sidebar_position: 5
---

# Cache Management

This guide covers how the OSDK React cache system works and how to manually control it.

## Why use @osdk/react?

`@osdk/react` gives you behavior that is hard to reproduce with a generic data layer like TanStack Query:

- **Normalized object cache.** Every `Todo:1` is stored once. When an action edits it, every list, link, and detail view referencing it updates automatically.
- **Action-driven invalidation.** Action responses specify which objects were added, modified, or deleted. Lists are re-evaluated against their `where` clauses without manual invalidation.
- **Optimistic updates with rollback.** `$optimisticUpdate` layers your changes on top of the truth layer; on failure they're rolled back.
- **Real-time updates.** `streamUpdates: true` keeps lists current via WebSocket without polling.
- **Function dependency tracking with `useOsdkFunction`.** Pass `dependsOn: [ObjectType]` to refetch when any object of that type changes, or `dependsOnObjects: [instance]` to refetch only when specific instances change. The cache wires the dependencies so your function reruns automatically after relevant actions.

## How the Cache Works

The `OsdkProvider` creates an `ObservableClient` that maintains a normalized cache of all queries and their results.

### What Gets Cached

| Data Type            | Cache Key Based On                                                       |
| -------------------- | ------------------------------------------------------------------------ |
| **Objects**          | Object type + primary key                                                |
| **Lists**            | Object type + where clause + orderBy                                     |
| **ObjectSets**       | Base object type + transforms (where, withProperties, pivotTo, set ops)  |
| **Links**            | Source object + link name + filters                                      |
| **Aggregations**     | Object type + where clause + aggregate definition (+ optional ObjectSet) |
| **Function queries** | Function apiName + canonicalized parameters                              |

Per-property security metadata is loaded alongside objects when `$loadPropertySecurityMetadata: true` is passed to `useOsdkObject` / `useOsdkObjects`.

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

With `streamUpdates: true`, the cache receives WebSocket updates and applies them automatically. Not available for queries that use `pivotTo` or `withProperties`.

## When Manual Invalidation is Needed

Automatic updates don't cover:

- Data changed by an external system or external cache
- Data modified outside OSDK (direct API calls, background jobs)

## Manual Cache Invalidation

The `ObservableClient` provides methods to manually invalidate cached data.

### Setup

`OsdkProvider` owns its `ObservableClient` — there is no `observableClient` prop and no need to construct one yourself for the React side. To call invalidation methods (`invalidateObjects`, `invalidateObjectType`, `invalidateFunction`, …) from a component, read the provider's instance with `useObservableClient`:

```tsx
import { Todo } from "@my/osdk";
import { useObservableClient } from "@osdk/react";

function RefreshTodosButton() {
  const observableClient = useObservableClient();
  return (
    <button onClick={() => observableClient.invalidateObjectType(Todo)}>
      Refresh
    </button>
  );
}
```

### Invalidation Methods

#### Object Invalidation

| Method                            | Effect                                        | Use Case                                 |
| --------------------------------- | --------------------------------------------- | ---------------------------------------- |
| `invalidateObjects([obj1, obj2])` | Re-fetches specific objects                   | You know exactly which objects are stale |
| `invalidateObjectType(Todo)`      | Re-fetches all objects and lists of that type | External bulk update                     |
| `invalidateAll()`                 | Re-fetches everything                         | Last resort                              |

#### Function Invalidation

| Method                                     | Effect                                              | Use Case                              |
| ------------------------------------------ | --------------------------------------------------- | ------------------------------------- |
| `invalidateFunction(queryDef, params)`     | Re-fetches a specific function query                | You know which function call is stale |
| `invalidateFunction(queryDef)`             | Re-fetches ALL queries for that function            | External change affecting all calls   |
| `invalidateFunctionsByObject(apiName, pk)` | Re-fetches functions depending on a specific object | Object changed outside action flow    |

### Usage

Get the `ObservableClient` with `useObservableClient` from any component below `OsdkProvider`:

```tsx
import { getEmployeeMetrics, Todo } from "@my/osdk";
import { useObservableClient } from "@osdk/react";

const observableClient = useObservableClient();

// Invalidate specific objects
await observableClient.invalidateObjects([todo1, todo2]);

// Invalidate all data for a type
await observableClient.invalidateObjectType(Todo);

// Invalidate a specific function query
await observableClient.invalidateFunction(getEmployeeMetrics, {
  departmentId: "sales",
});

// Invalidate ALL queries for a function
await observableClient.invalidateFunction(getEmployeeMetrics);

// Invalidate functions that depend on a specific object instance
// (functions called with dependsOnObjects containing this object)
await observableClient.invalidateFunctionsByObject("Employee", "emp-123");

// Invalidate everything (use sparingly)
await observableClient.invalidateAll();
```

### Type Isolation

`invalidateObjectType(Todo)` only affects Todo-related data:

- Re-fetches all Todo objects
- Re-fetches all Todo lists
- Re-fetches links where Todo is the source type
- Does NOT affect other object types, even if linked to Todos

### Function Invalidation Details

`invalidateFunctionsByObject(apiName, primaryKey)` invalidates function queries that were registered with `dependsOnObjects` containing the specified object:

```tsx
// If useOsdkFunction was called with:
const { data } = useOsdkFunction(getEmployeeReport, {
  params: { employeeId: employee.$primaryKey },
  dependsOnObjects: [employee],
});

// You can invalidate it by calling:
await observableClient.invalidateFunctionsByObject(
  "Employee",
  employee.$primaryKey,
);
```

This is useful when you know a specific object has changed outside of the normal action flow.

## Cache with Optimistic Updates

```tsx
import { completeTodo, Todo } from "@my/osdk";
import { useOsdkAction, useOsdkObject } from "@osdk/react";

function TodoView({ todo }: { todo: Todo.OsdkInstance }) {
  const { isOptimistic } = useOsdkObject(todo);
  const { applyAction } = useOsdkAction(completeTodo);

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

1. **Reuse query parameters.** Two components that pass identical `where` / `orderBy` / `withProperties` share one cache entry. Hoist the parameter object to a module-level constant or memoize it so React doesn't construct a new one each render.
2. **Prefer object-level invalidation.** `invalidateObjects([todo])` is cheaper than `invalidateObjectType(Todo)`, which is cheaper than `invalidateAll()`. Reach for the broadest only when you cannot identify the affected rows.
3. **Let actions drive invalidation.** If the change comes from an OSDK action, the cache updates automatically — do not call `invalidate*` afterward. Manual invalidation is for changes that bypass the action flow (external system, scheduled job, direct REST call).
4. **Use `dependsOn` / `dependsOnObjects` on functions.** Declare what your function reads so the cache can re-run it after relevant actions, instead of invalidating it manually.
5. **Avoid second sources of truth.** Don't copy OSDK data into Redux, TanStack Query, or local component state — you'll fight optimistic updates and lose normalization.
6. **Don't `invalidateAll()` on mount.** That defeats caching and triggers a full refetch every time the component tree mounts. If you need a fresh load, scope it to a specific type.
