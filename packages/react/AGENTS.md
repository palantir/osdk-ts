# @osdk/react - AI Agent Instructions

## Critical Rules

1. **Use `OsdkProvider2`** - Not `OsdkProvider`. All modern hooks require `OsdkProvider2`.
2. **Import from `@osdk/react/experimental`** - Not `@osdk/react`. The main entry point only has legacy hooks.
3. **Never conditionally call hooks** - Use the `enabled` option instead.
4. **Keep rendering during loading** - No early returns like `if (isLoading) return <Spinner />`. Show loading indicators while rendering existing data.

## Exports

**Stable** (`@osdk/react`):

- `OsdkProvider` - Legacy provider
- `useOsdkClient` - Access client
- `useOsdkMetadata` - Fetch metadata

**Experimental** (`@osdk/react/experimental`):

- `OsdkProvider2` - Modern provider (use this)
- `useOsdkObjects` - Query lists of objects
- `useOsdkObject` - Query single object by type+key or instance
- `useOsdkAction` - Execute and validate actions
- `useLinks` - Navigate object relationships
- `useObjectSet` - Advanced set operations (union, intersect, subtract, pivot)
- `useOsdkAggregation` - Server-side aggregations with groupBy/select
- `useCurrentFoundryUser`, `useFoundryUser`, `useFoundryUsersList` - Platform APIs
- `useOsdkClient`, `useOsdkMetadata` - Also available from experimental

## Correct Patterns

### Loading States

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function TodoList() {
  const { data, isLoading, error } = useOsdkObjects(Todo);

  return (
    <div>
      {isLoading && <LoadingIndicator />}
      {error && <ErrorMessage error={error} />}
      {data?.map(todo => <TodoItem key={todo.$primaryKey} todo={todo} />)}
    </div>
  );
}
```

### Single Object (useOsdkObject)

```tsx
import { Employee } from "@my/osdk";
import { useOsdkObject } from "@osdk/react/experimental";

// By type + primary key (enabled is 3rd positional param)
const { object, isLoading, error, isOptimistic } = useOsdkObject(
  Employee,
  "employee-123",
  true, // enabled (optional, defaults to true)
);

// By existing instance (enabled is 2nd positional param)
const { object: refreshed } = useOsdkObject(existingEmployee, true);
```

### Conditional Fetching

```tsx
// useOsdkObjects uses options object
const { data: reports } = useOsdkObjects(Employee, {
  where: { managerId: selectedManagerId },
  enabled: !!selectedManagerId,
});

// useOsdkObject uses positional enabled parameter
const { object: manager } = useOsdkObject(Employee, managerId, !!managerId);
```

### Actions (useOsdkAction)

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction } from "@osdk/react/experimental";

function CompleteTodoButton({ todo }) {
  const {
    applyAction,
    validateAction,
    isPending,
    isValidating,
    error,
    data,
    validationResult,
  } = useOsdkAction($Actions.completeTodo);

  // Validate before applying
  const handleValidate = async () => {
    const result = await validateAction({ todo, isComplete: true });
  };

  // Apply the action
  const handleComplete = async () => {
    await applyAction({ todo, isComplete: true });
  };

  // With optimistic update (use $ prefix for client options)
  const handleOptimistic = async () => {
    await applyAction({
      todo,
      isComplete: true,
      $optimisticUpdate: (ctx) => {
        ctx.updateObject(todo, { isComplete: true });
      },
    });
  };

  return (
    <button onClick={handleComplete} disabled={isPending}>
      Complete
    </button>
  );
}
```

### Links (useLinks)

```tsx
import { useLinks } from "@osdk/react/experimental";

// Single object
const { links, isLoading, hasMore, fetchMore, error } = useLinks(
  employee,
  "directReports",
  { pageSize: 20 },
);

// Multiple objects (returns all linked objects)
const { links: allReports } = useLinks(
  [employee1, employee2],
  "directReports",
);
```

### Object Set Operations (useObjectSet)

```tsx
import { Employee } from "@my/osdk";
import { useObjectSet } from "@osdk/react/experimental";

const { data, isLoading, fetchMore, objectSet } = useObjectSet(
  Employee.all(),
  {
    where: { department: "Engineering" },
    orderBy: { hireDate: "desc" },
    pageSize: 50,
    union: [otherObjectSet],
    intersect: [anotherObjectSet],
    autoFetchMore: 100, // fetch until 100 items
    streamUpdates: true,
    enabled: true,
  },
);
```

### Aggregations (useOsdkAggregation)

```tsx
import { Employee } from "@my/osdk";
import { useOsdkAggregation } from "@osdk/react/experimental";

const { data, isLoading, error, refetch } = useOsdkAggregation(Employee, {
  where: { department: "Engineering" },
  aggregate: {
    groupBy: { department: "exact" },
    select: {
      avgSalary: { $avg: "salary" },
      count: { $count: {} },
    },
  },
});
```

## Anti-Patterns

### Wrong: Conditional Hook Call

```tsx
if (shouldLoad) {
  const { data } = useOsdkObjects(Todo); // NEVER do this
}
```

### Wrong: Early Return During Loading

```tsx
if (isLoading) return <Spinner />; // Causes UI flashing
if (!data) return null; // Loses state
```

### Wrong: Importing from Main Entry

```tsx
import { useOsdkObjects } from "@osdk/react"; // WRONG - doesn't exist here
```

### Wrong: Using OsdkProvider Instead of OsdkProvider2

```tsx
<OsdkProvider client={client}> // WRONG - new hooks won't work
```

### Wrong: Using options object for useOsdkObject enabled

```tsx
// WRONG - enabled is positional, not in options
const { object } = useOsdkObject(Employee, id, { enabled: false });

// CORRECT
const { object } = useOsdkObject(Employee, id, false);
```

## Hook Options Reference

**useOsdkObjects / useObjectSet:**

- `where` - Filter conditions
- `orderBy` - Sort order (`{ field: "asc" | "desc" }`)
- `pageSize` - Results per page
- `withProperties` - Derived properties
- `enabled` - Enable/disable query
- `autoFetchMore` - Auto-pagination (`true` | `number`)
- `dedupeIntervalMs` - Request deduplication
- `streamUpdates` - WebSocket updates

**useObjectSet additional:**

- `union`, `intersect`, `subtract` - Set operations
- `pivotTo` - Pivot to linked type

**useOsdkObject:**

- `enabled` is a **positional parameter**, not in options

**useLinks:**

- `where`, `pageSize`, `enabled`
- `mode` - `"force"` | `"offline"`
- `dedupeIntervalMs` - Request deduplication (default: 2000ms, use `Infinity` to only re-fetch on invalidation)

**useOsdkAction:**

- `$optimisticUpdate` - Passed to action with `$` prefix
