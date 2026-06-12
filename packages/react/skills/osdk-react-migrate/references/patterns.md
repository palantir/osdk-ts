# Correct Usage Patterns

Reference for enforcing correct `@osdk/react` patterns during the adoption migration.

## Rules (must enforce on every converted file)

### Rule 1 — Never conditionally call hooks

React's rules of hooks apply. The `enabled` option is the correct escape hatch.

```tsx
// WRONG — conditional hook call
if (shouldLoad) {
  const { data } = useOsdkObjects(Todo);
}

// CORRECT — use enabled
const { data } = useOsdkObjects(Todo, { enabled: shouldLoad });
```

```tsx
// WRONG — hook inside event handler
const handleClick = () => {
  const client = useOsdkClient(); // runtime error
};

// CORRECT — hook at component top level
function MyComponent() {
  const client = useOsdkClient();
  const handleClick = () => {/* use client here */};
}
```

### Rule 2 — Keep rendering during loading; no early returns

`@osdk/react` hooks may have stale data while reloading (`isLoading: true` with `data` already set). Early returns on `isLoading` discard existing data and cause UI flashing.

```tsx
// WRONG — discards existing data on revalidation
if (isLoading) return <Spinner />;
return <List data={data} />;

// CORRECT — render both together
return (
  <div>
    {isLoading && <Spinner />}
    <List data={data} />
  </div>
);
```

Exception: `if (!data && isLoading)` is acceptable for the initial load state before any data has arrived.

```tsx
// ACCEPTABLE for initial load
if (!data && isLoading) return <div>Loading...</div>;
```

### Rule 3 — useOsdkObject `enabled` is positional

For the type+key overload, `enabled` is the third argument, not inside an options object.

```tsx
// WRONG
useOsdkObject(Employee, id, { enabled: false });

// CORRECT
useOsdkObject(Employee, id, false);
useOsdkObject(Employee, id, true);

// Options object is the third arg for property selection, not enabled
useOsdkObject(Employee, id, { $select: ["fullName"] });
```

### Rule 4 — Prefer useOsdkObjects over useObjectSet

`useOsdkObjects` is more optimized. Only reach for `useObjectSet` when the query requires `union`, `intersect`, or `subtract` set operations on two or more `ObjectSet` instances.

```tsx
// WRONG — unnecessary useObjectSet
const { data } = useObjectSet(client(Todo), { where: { isComplete: false } });

// CORRECT — useOsdkObjects handles simple queries
const { data } = useOsdkObjects(Todo, { where: { isComplete: false } });

// CORRECT — useObjectSet for set operations
const highPriority = client(Todo).where({ priority: "high" });
const completed = client(Todo).where({ isComplete: true });
const { data } = useObjectSet(highPriority, { subtract: [completed] });
```

### Rule 5 — streamUpdates and pivotTo cannot be combined

```tsx
// WRONG
useOsdkObjects(Todo, { streamUpdates: true, pivotTo: "assignee" });

// CORRECT — choose one or the other
useOsdkObjects(Todo, { streamUpdates: true });
useOsdkObjects(Todo, { pivotTo: "assignee" });
```

### Rule 6 — Don't copy OSDK data into a second store

Avoid copying OSDK hook results into Redux, TanStack Query cache, or component state — this loses normalization and fights optimistic updates.

```tsx
// WRONG — second source of truth
const { data } = useOsdkObjects(Todo);
const [todos, setTodos] = useState([]);
useEffect(() => {
  setTodos(data ?? []);
}, [data]); // redundant

// CORRECT — consume data directly from the hook
const { data: todos } = useOsdkObjects(Todo);
```

## Patterns to generate

### Object list

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react";

function TodoList() {
  const { data, isLoading, error } = useOsdkObjects(Todo, {
    where: { isComplete: false },
    orderBy: { createdAt: "desc" },
  });

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data?.map(todo => <div key={todo.$primaryKey}>{todo.title}</div>)}
    </div>
  );
}
```

### Single object by primary key

```tsx
import { Employee } from "@my/osdk";
import { useOsdkObject } from "@osdk/react";

function EmployeeDetail({ id }: { id: string }) {
  const { object, isLoading, error } = useOsdkObject(Employee, id);

  if (!object && isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!object) return <div>Not found</div>;

  return <div>{object.fullName}</div>;
}
```

### Action

```tsx
import { modifyEmployee } from "@my/osdk";
import { useOsdkAction } from "@osdk/react";
import { useCallback } from "react";

function EditButton({ employee }) {
  const { applyAction, isPending, error } = useOsdkAction(modifyEmployee);

  const handleClick = useCallback(() => {
    applyAction({ employee, primary_office_id: "new-office" });
  }, [applyAction, employee]);

  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? "Saving..." : "Update Office"}
      </button>
      {error?.actionValidation && <div>{error.actionValidation.message}</div>}
    </div>
  );
}
```

### Links

```tsx
import { Employee } from "@my/osdk";
import { useLinks } from "@osdk/react";

function DirectReports({ employee }: { employee: Employee.OsdkInstance }) {
  const { links, isLoading, fetchMore, hasMore } = useLinks(
    employee,
    "reports",
    {
      orderBy: { fullName: "asc" },
    },
  );

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {links?.map(r => <div key={r.$primaryKey}>{r.fullName}</div>)}
      {hasMore && <button onClick={() => fetchMore?.()}>Load more</button>}
    </div>
  );
}
```

### Conditional query with enabled

```tsx
const { data } = useOsdkObjects(Todo, {
  enabled: userId !== undefined,
  where: { assignee: userId },
});
```

### Function with dependency tracking

```tsx
import { Employee, getMetrics } from "@my/osdk";
import { useOsdkFunction } from "@osdk/react";

function Metrics({ deptId }: { deptId: string }) {
  const { data, isLoading } = useOsdkFunction(getMetrics, {
    params: { deptId },
    dependsOn: [Employee], // auto-refetch when any Employee changes
  });

  return (
    <div>
      {isLoading && <span>Updating...</span>}
      {data && <span>Headcount: {data.headcount}</span>}
    </div>
  );
}
```

## Anti-patterns to flag

| Anti-pattern                                              | Correct pattern                                            |
| --------------------------------------------------------- | ---------------------------------------------------------- |
| `if (x) { useOsdkObjects(...) }`                          | `useOsdkObjects(..., { enabled: x })`                      |
| `if (isLoading) return <Spinner />`                       | Render `{isLoading && <Spinner />}` alongside data         |
| `useOsdkObject(T, id, { enabled: false })`                | `useOsdkObject(T, id, false)`                              |
| `useObjectSet(client(T), { where: ... })` with no set ops | `useOsdkObjects(T, { where: ... })`                        |
| Copying hook result into `useState`                       | Consume directly from the hook                             |
| `streamUpdates: true` + `pivotTo` together                | Use one or the other                                       |
| Calling `invalidateObjectType` after an OSDK action       | Remove manual invalidation; actions drive it automatically |
