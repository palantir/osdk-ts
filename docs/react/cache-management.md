---
sidebar_position: 5
---

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

The `ObservableClient` provides methods to manually invalidate cached data.

### Setup

To use invalidation methods, create an `ObservableClient` and pass it to `OsdkProvider2`:

```tsx
// client.ts
import { createClient } from "@osdk/client";
import {
  createObservableClient,
  type ObservableClient,
} from "@osdk/client/unstable-do-not-use";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "your-ontology-rid",
  authProvider,
);

// Create and export the observable client for invalidation
export const observableClient = createObservableClient(client);
export { client };
```

```tsx
// main.tsx
import { OsdkProvider2 } from "@osdk/react/experimental";
import { client, observableClient } from "./client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client} observableClient={observableClient}>
    <App />
  </OsdkProvider2>,
);
```

### Invalidation Methods

#### Object Invalidation

| Method | Effect | Use Case |
|--------|--------|----------|
| `invalidateObjects([obj1, obj2])` | Re-fetches specific objects | You know exactly which objects are stale |
| `invalidateObjectType(Todo)` | Re-fetches all objects and lists of that type | External bulk update |
| `invalidateAll()` | Re-fetches everything | Last resort |

#### Function Invalidation

| Method | Effect | Use Case |
|--------|--------|----------|
| `invalidateFunction(queryDef, params)` | Re-fetches a specific function query | You know which function call is stale |
| `invalidateFunction(queryDef)` | Re-fetches ALL queries for that function | External change affecting all calls |
| `invalidateFunctionsByObject(apiName, pk)` | Re-fetches functions depending on a specific object | Object changed outside action flow |

### Usage

```tsx
import { Todo, getEmployeeMetrics } from "@my/osdk";
import { observableClient } from "./client";

// Invalidate specific objects
await observableClient.invalidateObjects([todo1, todo2]);

// Invalidate all data for a type
await observableClient.invalidateObjectType(Todo);

// Invalidate a specific function query
await observableClient.invalidateFunction(getEmployeeMetrics, { departmentId: "sales" });

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
await observableClient.invalidateFunctionsByObject("Employee", employee.$primaryKey);
```

This is useful when you know a specific object has changed outside of the normal action flow.

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

## Listening to Invalidation Events

Subscribe to cache invalidation events to synchronize external systems or trigger side effects when data changes.

### useOnInvalidation

*Experimental - import from `@osdk/react/experimental`*

Listen to cache invalidation events inside React components.

```tsx
import { useOnInvalidation } from "@osdk/react/experimental";
import { useState } from "react";

function DataSyncIndicator() {
  const [lastSync, setLastSync] = useState<Date | null>(null);

  useOnInvalidation((event) => {
    setLastSync(new Date(event.timestamp));
  });

  return <div>Last synced: {lastSync?.toLocaleTimeString() ?? "Never"}</div>;
}
```

#### Filtering by Object Type

Subscribe to specific object types only:

```tsx
import { useOnInvalidation } from "@osdk/react/experimental";

function TodoSyncNotifier() {
  useOnInvalidation(
    (event) => {
      if (!event.isOptimistic) {
        showToast("Todos updated from server");
      }
    },
    { objectTypes: ["Todo"] },
  );

  return null;
}
```

#### Filtering by ObjectSet

If you already have an ObjectSet, you can pass it directly instead of extracting the type name:

```tsx
import { Todo } from "@my/osdk";
import { useOsdkClient } from "@osdk/react/experimental";
import { useOnInvalidation } from "@osdk/react/experimental";

function IncompleteTodoWatcher() {
  const client = useOsdkClient();
  const incompleteTodos = client(Todo).where({ isComplete: false });

  useOnInvalidation(
    (event) => {
      console.log("Todo data changed");
    },
    { objectSets: [incompleteTodos] },
  );

  return null;
}
```

This is equivalent to `{ objectTypes: ["Todo"] }` but more ergonomic when you already have the ObjectSet.

#### InvalidationEvent

The callback receives an event with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `addedObjectTypes` | `ReadonlySet<string>` | Object types where new objects were added to cache |
| `modifiedObjectTypes` | `ReadonlySet<string>` | Object types where existing objects were modified |
| `isOptimistic` | `boolean` | `true` if triggered by an optimistic update (not yet confirmed) |
| `timestamp` | `number` | Unix timestamp when the invalidation occurred |

### Client-Level Subscription

For subscribing outside React components (e.g., in setup code or middleware), use the `ObservableClient` directly:

```tsx
import { observableClient } from "./client";

// Subscribe to all invalidations
const subscription = observableClient.onInvalidation((event) => {
  console.log("Added types:", [...event.addedObjectTypes]);
  console.log("Modified types:", [...event.modifiedObjectTypes]);
  console.log("Is optimistic:", event.isOptimistic);
});

// Later: clean up
subscription.unsubscribe();
```

With filtering by type:

```tsx
const subscription = observableClient.onInvalidation(
  (event) => {
    externalCache.invalidate([...event.modifiedObjectTypes]);
  },
  { objectTypes: ["Employee", "Office"] },
);
```

With filtering by ObjectSet:

```tsx
import { Todo } from "@my/osdk";

const incompleteTodos = client(Todo).where({ isComplete: false });

const subscription = observableClient.onInvalidation(
  (event) => {
    console.log("Todo data changed");
  },
  { objectSets: [incompleteTodos] },
);
```

### Use Cases

- **Sync external caches**: Invalidate localStorage, IndexedDB, or other caches when OSDK data changes
- **Analytics**: Track when and how often data is refreshed
- **UI feedback**: Show sync indicators or toast notifications
- **Debugging**: Log cache activity during development

---

## Best Practices

1. **Be specific**: Use `invalidateObjects` when you know what data specifically changed
2. **Use type-level invalidation**: `invalidateObjectType` for external bulk changes
3. **Avoid multiple sources of truth**: Coordinating side effects between multiple systems is tricky; we recommend solely using the OSDK React cache when possible for data loading
4. **Filter invalidation listeners**: Use the `objectTypes` option to avoid processing irrelevant events
5. **Check `isOptimistic`**: Skip side effects for optimistic updates if you only care about confirmed server data
