# OSDK React Agent Guide

Instructions for AI agents building React applications with `@osdk/react` and `@osdk/react-components`.

## Package Overview

| Package | Purpose |
|---------|---------|
| `@osdk/react` | Stable hooks: `OsdkProvider`, `useOsdkClient`, `useOsdkMetadata` |
| `@osdk/react/experimental` | Recommended hooks: `OsdkProvider2`, data queries, actions, caching |
| `@osdk/react-components/experimental` | Pre-built UI components: `ObjectTable`, `FilterList`, `ActionForm` |
| `@osdk/react-components-styles` | Default styles for react-components |
| `@osdk/client` | OSDK client creation and direct API access |
| `@my/osdk` (user's generated SDK) | Ontology types, actions, queries |

Always use `@osdk/react/experimental` with `OsdkProvider2` for new code.

## Provider Setup

Every app must wrap components in `OsdkProvider2`:

```tsx
import { createClient } from "@osdk/client";
import { OsdkProvider2 } from "@osdk/react/experimental";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "your-ontology-rid",
  async () => getToken(),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>
    <App />
  </OsdkProvider2>,
);
```

- Place `OsdkProvider2` at the app root, not nested inside components.
- Create the client once (module-level or `useState`), never inside render.
- All experimental hooks require `OsdkProvider2`.

## Hook Reference

### Data Fetching

**`useOsdkObjects(objectType, options?)`** - Query collections of objects.

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

const { data, isLoading, error, fetchMore, isOptimistic } = useOsdkObjects(Todo, {
  where: { isComplete: false },
  orderBy: { createdAt: "desc" },
  pageSize: 20,
  enabled: true,
  autoFetchMore: 100,
  streamUpdates: true,
  dedupeIntervalMs: 2000,
  intersectWith: [{ where: { priority: "high" } }],
  pivotTo: "assignee",
  withProperties: { /* derived properties */ },
});
```

**`useOsdkObject(instance)` or `useOsdkObject(type, primaryKey)`** - Query single object.

```tsx
// Track an existing instance
const { object, isLoading, isOptimistic, error } = useOsdkObject(todo);

// Load by primary key
const { object, isLoading, error } = useOsdkObject(Todo, todoId);
```

**`useLinks(source, linkName, options?)`** - Navigate object relationships.

```tsx
const { links, isLoading, fetchMore, hasMore, isOptimistic, error } = useLinks(
  employee,
  "reports",
  { pageSize: 10, orderBy: { name: "asc" }, where: { isActive: true }, enabled: true },
);
```

Accepts single object or array of objects as source.

**`useObjectSet(objectSet, options?)`** - Advanced queries with set operations.

Use when you need `union`, `intersect`, or `subtract` operations:

```tsx
import { $, Todo } from "@my/osdk";
import { useObjectSet } from "@osdk/react/experimental";

const urgentTodos = $(Todo).where({ isUrgent: true });
const completedTodos = $(Todo).where({ isComplete: true });

const { data, isLoading, fetchMore, objectSet } = useObjectSet($(Todo), {
  union: [urgentTodos],
  subtract: [completedTodos],
  where: { priority: "high" },
  orderBy: { createdAt: "desc" },
  pivotTo: "assignee",
});
```

**`useOsdkFunction(functionDef, options?)`** - Execute OSDK functions/queries.

```tsx
const { data, isLoading, error, refetch, lastUpdated } = useOsdkFunction(getEmployeeMetrics, {
  params: { departmentId: "sales" },
  dependsOn: [Employee],                // Refetch when any Employee changes
  dependsOnObjects: [specificEmployee],  // Refetch when specific object changes
  enabled: true,
  dedupeIntervalMs: 2000,
});
```

**`useOsdkAggregation(objectType, options)`** - Server-side aggregations.

```tsx
const { data, isLoading, error, refetch } = useOsdkAggregation(Todo, {
  where: { isComplete: false },
  aggregate: {
    $groupBy: { status: "exact" },
    $select: {
      $count: "unordered",
      "priority:avg": "unordered",
      "dueDate:max": "unordered",
    },
  },
});
// Access: data.$count, data.priority.avg, data.dueDate.max
// Grouped: data[i].$group.status, data[i].$count
```

Aggregation metrics: `$count`, `sum`, `avg`, `min`, `max`, `exactDistinct`, `approximateDistinct`.

### Actions

**`useOsdkAction(actionDef)`** - Execute and validate actions.

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction } from "@osdk/react/experimental";

const { applyAction, validateAction, isPending, isValidating, error, data, validationResult } =
  useOsdkAction($Actions.completeTodo);

// Single action
await applyAction({ todo, isComplete: true });

// Batch action
await applyAction(todos.map(todo => ({ todo, isComplete: true })));

// With optimistic update
await applyAction({
  todo,
  isComplete: true,
  $optimisticUpdate: (ou) => {
    ou.updateObject(todo.$clone({ isComplete: true }));
  },
});

// Validate without executing
await validateAction({ todo, isComplete: true });
// Check: validationResult?.result === "VALID" | "INVALID"
```

Error structure: `error?.actionValidation` (ActionValidationError) or `error?.unknown`.

### Direct Client Access

**`useOsdkClient()`** - For custom queries outside the reactive system.

```tsx
const client = useOsdkClient();

// Objects
const page = await client(Todo).fetchPage({ $select: ["title"], $pageSize: 50 });

// Actions
await client(promoteEmployee).applyAction({ employeeId: 123, newTitle: "Senior" });

// Queries
const result = await client(myQuery).executeFunction({ param: "value" });
```

### Derived Properties

Add server-computed properties to queries:

```tsx
import type { DerivedProperty } from "@osdk/client";

const { data } = useOsdkObjects(Employee, {
  withProperties: {
    managerName: (base: DerivedProperty.Builder<Employee, false>) =>
      base.pivotTo("manager").selectProperty("fullName"),
    reportCount: (base: DerivedProperty.Builder<Employee, false>) =>
      base.pivotTo("reports").aggregate("$count"),
  },
  where: { reportCount: { $gt: 0 } }, // Filter on derived properties
});
```

Builder methods: `.pivotTo(linkName)`, `.selectProperty(prop)`, `.aggregate(metric)`, `.where(clause)`.

### Platform APIs

```tsx
import { useCurrentFoundryUser, useFoundryUser, useFoundryUsersList } from "@osdk/react/experimental";

const { currentUser, isLoading, error, refetch } = useCurrentFoundryUser();
const { user, isLoading, error, refetch } = useFoundryUser(userId);
const { users, nextPageToken, isLoading, error, refetch } = useFoundryUsersList({ pageSize: 10 });
```

### Utilities

**`useDebouncedCallback(callback, delay)`** - Debounce callbacks for auto-save patterns.

```tsx
import { useDebouncedCallback } from "@osdk/react/experimental";

const debouncedSave = useDebouncedCallback((value: string) => {
  applyAction({ todo, title: value });
}, 1000);

debouncedSave("new title");
debouncedSave.cancel();
debouncedSave.flush();
```

**`useOsdkMetadata(type)`** - Fetch object/interface metadata.

```tsx
import { useOsdkMetadata } from "@osdk/react";

const { metadata, loading, error } = useOsdkMetadata(Todo);
// metadata.displayName, metadata.description, metadata.properties
```

## React Components

### ObjectTable

```tsx
import { ObjectTable } from "@osdk/react-components/experimental";
import { Employee } from "@your-osdk-package";

function EmployeeDirectory() {
  return <ObjectTable objectType={Employee} />;
}
```

### CSS Setup for Components

```css
@layer osdk.tokens, osdk.components;
@import "@osdk/react-components-styles" layer(osdk.tokens);
@import "@osdk/react-components/styles.css" layer(osdk.components);

.root {
  isolation: isolate;
}
```

## Cache Management

The `ObservableClient` maintains a normalized cache. Objects are stored once and shared across queries.

### Automatic Updates

- After actions: added/modified/deleted objects update automatically.
- With `$optimisticUpdate`: instant UI update, rolled back on failure.
- With `streamUpdates: true`: real-time WebSocket updates.

### Manual Invalidation

```tsx
import { createObservableClient } from "@osdk/client/unstable-do-not-use";

const observableClient = createObservableClient(client);

// Pass to provider
<OsdkProvider2 client={client} observableClient={observableClient}>

// Invalidate specific objects
await observableClient.invalidateObjects([todo1, todo2]);

// Invalidate all data for a type
await observableClient.invalidateObjectType(Todo);

// Invalidate specific function query
await observableClient.invalidateFunction(getMetrics, { id: "sales" });

// Invalidate all queries for a function
await observableClient.invalidateFunction(getMetrics);

// Invalidate functions depending on a specific object
await observableClient.invalidateFunctionsByObject("Employee", "emp-123");

// Nuclear option
await observableClient.invalidateAll();
```

## Critical Rules

1. **Use `OsdkProvider2`**, not `OsdkProvider`, for all new code.
2. **Import from `@osdk/react/experimental`** for modern hooks.
3. **NEVER conditionally call hooks.** Use `enabled` option instead:
   ```tsx
   // WRONG: conditional hook call
   if (shouldLoad) { useOsdkObjects(Todo); }

   // CORRECT: use enabled
   useOsdkObjects(Todo, { enabled: shouldLoad });
   ```
4. **Keep components rendering during loading/error states.** Don't use early returns like `if (isLoading) return <Loading />`. Show loading indicators alongside existing data to prevent UI flashing:
   ```tsx
   // WRONG: early return causes flash when reloading
   if (isLoading) return <Spinner />;

   // CORRECT: render data and loading indicator together
   return (
     <div>
       {isLoading && <Spinner />}
       {error && <ErrorBanner error={error} />}
       {data?.map(item => <Item key={item.$primaryKey} item={item} />)}
     </div>
   );
   ```
   Exception: `if (!data && isLoading)` is acceptable for the initial load before any data exists.
5. **Hooks may have data while loading** (reloading invalidated data). Incorporate loading state comprehensively.
6. **Always put new components in their own file.** Create separate components instead of inline functions.
7. **Memoize non-primitive props** with `useCallback`/`useMemo` when passing to child components.
8. **NEVER use `any`** without explicit user approval. Use proper TypeScript generics.
9. **Use pnpm**, not npm. Typecheck: `cd packages/the-package && pnpm turbo typecheck`.

## Text Search Filters

| Filter | Match | Use Case |
|--------|-------|----------|
| `$startsWith` | Begins with prefix | Autocomplete |
| `$containsAnyTerm` | Any term present | Broad keyword search |
| `$containsAllTerms` | All terms (any order) | Multi-keyword search |
| `$containsAllTermsInOrder` | All terms in order | Phrase matching |

All support `{ term: "query", fuzzySearch: true }` for typo tolerance.

## useOsdkObjects vs useObjectSet

| Feature | `useOsdkObjects` | `useObjectSet` |
|---------|-------------------|----------------|
| Input | ObjectType/Interface directly | ObjectSet instance via `$(Type)` |
| Set operations | No (`intersectWith` only) | Yes (`union`, `intersect`, `subtract`) |
| Performance | More optimized (preferred) | Full feature parity |

Use `useOsdkObjects` by default. Use `useObjectSet` when you need set operations or a feature not yet in `useOsdkObjects`.
