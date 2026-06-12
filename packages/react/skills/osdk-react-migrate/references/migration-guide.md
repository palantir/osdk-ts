# Adoption Migration Guide

Step-by-step before/after examples for converting OSDK-backed data fetching to `@osdk/react` hooks.

## useEffect + client → useOsdkObjects

The most common pattern. A `useState`+`useEffect` pair that calls `client(Type).fetchPage()`.

**Before:**

```tsx
import { Employee } from "@my/osdk";
import { useEffect, useState } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    client(Employee).fetchPage().then(r => {
      setEmployees(r.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>{employees.map(e => <div key={e.$primaryKey}>{e.fullName}</div>)}</div>
  );
}
```

**After:**

```tsx
import { Employee } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react";

function EmployeeList() {
  const { data: employees, isLoading } = useOsdkObjects(Employee);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {employees?.map(e => <div key={e.$primaryKey}>{e.fullName}</div>)}
    </div>
  );
}
```

**What changed:**

- Removed `useState` (x2) and `useEffect`
- Replaced with `useOsdkObjects` (one line)
- Loading indicator rendered alongside data (not as early return)
- Removed `useEffect` and `useState` imports if unused

---

## useEffect + client → useOsdkObject (single object by key)

**Before:**

```tsx
function EmployeeDetail({ id }: { id: string }) {
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    client(Employee).fetchOne(id).then(e => {
      setEmployee(e);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading && !employee) return <div>Loading...</div>;
  if (!employee) return <div>Not found</div>;
  return <div>{employee.fullName}</div>;
}
```

**After:**

```tsx
import { useOsdkObject } from "@osdk/react";

function EmployeeDetail({ id }: { id: string }) {
  const { object: employee, isLoading } = useOsdkObject(Employee, id);

  if (!employee && isLoading) return <div>Loading...</div>;
  if (!employee) return <div>Not found</div>;
  return <div>{employee.fullName}</div>;
}
```

---

## TanStack Query useQuery → useOsdkObjects

**Before:**

```tsx
import { useQuery } from "@tanstack/react-query";

function TodoList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => client(Todo).fetchPage().then(r => r.data),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return <div>{data?.map(t => <div key={t.$primaryKey}>{t.title}</div>)}</div>;
}
```

**After:**

```tsx
import { useOsdkObjects } from "@osdk/react";

function TodoList() {
  const { data, isLoading, error } = useOsdkObjects(Todo);

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data?.map(t => <div key={t.$primaryKey}>{t.title}</div>)}
    </div>
  );
}
```

---

## TanStack Query useQuery → useOsdkObject (single by key)

**Before:**

```tsx
const { data } = useQuery({
  queryKey: ["employee", id],
  queryFn: () => client(Employee).fetchOne(id),
});
```

**After:**

```tsx
const { object: data, isLoading } = useOsdkObject(Employee, id);
```

---

## TanStack Query useMutation → useOsdkAction

**Before:**

```tsx
import { useMutation } from "@tanstack/react-query";

function UpdateButton({ employee }) {
  const mutation = useMutation({
    mutationFn: () =>
      client(modifyEmployee).applyAction({ employee, primary_office_id: "hq" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["employees"] }),
  });

  return (
    <button onClick={() => mutation.mutate()} disabled={mutation.isPending}>
      Update Office
    </button>
  );
}
```

**After:**

```tsx
import { useOsdkAction } from "@osdk/react";
import { useCallback } from "react";

function UpdateButton({ employee }) {
  const { applyAction, isPending } = useOsdkAction(modifyEmployee);

  const handleClick = useCallback(() => {
    applyAction({ employee, primary_office_id: "hq" });
  }, [applyAction, employee]);

  return (
    <button onClick={handleClick} disabled={isPending}>
      Update Office
    </button>
  );
}
```

**Note:** Remove the `queryClient.invalidateQueries()` call — `useOsdkAction` triggers cache invalidation automatically via the action response.

---

## SWR useSWR → useOsdkObjects

**Before:**

```tsx
import useSWR from "swr";

function TodoList() {
  const { data, isLoading } = useSWR(
    "todos",
    () => client(Todo).fetchPage().then(r => r.data),
  );

  return <div>{data?.map(t => <div key={t.$primaryKey}>{t.title}</div>)}</div>;
}
```

**After:**

```tsx
import { useOsdkObjects } from "@osdk/react";

function TodoList() {
  const { data, isLoading } = useOsdkObjects(Todo);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {data?.map(t => <div key={t.$primaryKey}>{t.title}</div>)}
    </div>
  );
}
```

---

## useEffect + link traversal → useLinks

**Before:**

```tsx
function Reports({ employee }) {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    client(employee).links.reports.fetchPage().then(r => setReports(r.data));
  }, [employee.$primaryKey]);

  return (
    <div>{reports.map(r => <div key={r.$primaryKey}>{r.fullName}</div>)}</div>
  );
}
```

**After:**

```tsx
import { useLinks } from "@osdk/react";

function Reports({ employee }) {
  const { links: reports, isLoading } = useLinks(employee, "reports");

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {reports?.map(r => <div key={r.$primaryKey}>{r.fullName}</div>)}
    </div>
  );
}
```

---

## useQuery with aggregation → useOsdkAggregation

**Before:**

```tsx
const { data } = useQuery({
  queryKey: ["todo-stats"],
  queryFn: () => client(Todo).aggregate({ $count: {} }),
});
```

**After:**

```tsx
import { useOsdkAggregation } from "@osdk/react";

const { data } = useOsdkAggregation(Todo, {
  aggregate: { $select: { $count: "unordered" } },
});
// Access via data?.$count
```

---

## useQuery with function call → useOsdkFunction

**Before:**

```tsx
const { data } = useQuery({
  queryKey: ["metrics", deptId],
  queryFn: () => client(getMetrics).executeFunction({ deptId }),
});
```

**After:**

```tsx
import { useOsdkFunction } from "@osdk/react";

const { data } = useOsdkFunction(getMetrics, {
  params: { deptId },
  dependsOn: [Employee], // optional: auto-refetch when Employee objects change
});
```

---

## Complex ObjectSet → useObjectSet

Only reach for `useObjectSet` when you need set operations (`union`, `intersect`, `subtract`).

**Before:**

```tsx
const { data } = useQuery({
  queryKey: ["active-high-priority"],
  queryFn: async () => {
    const high = client(Todo).where({ priority: "high" });
    const completed = client(Todo).where({ isComplete: true });
    const set = high.subtract(completed);
    return set.fetchPage().then(r => r.data);
  },
});
```

**After:**

```tsx
import { useObjectSet } from "@osdk/react";

const highPriority = client(Todo).where({ priority: "high" });
const completed = client(Todo).where({ isComplete: true });

const { data } = useObjectSet(highPriority, {
  subtract: [completed],
});
```

---

## Adding OsdkProvider to the app root

If `OsdkProvider` is missing, add it at the outermost render call.

**Before:**

```tsx
// main.tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

**After:**

```tsx
// main.tsx
import { OsdkProvider } from "@osdk/react";
import client from "./client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider client={client}>
      <App />
    </OsdkProvider>
  </React.StrictMode>,
);
```

---

## Adding optimistic updates to an action

When converting a TanStack mutation that had an `onMutate` optimistic update, preserve the intent using `$optimisticUpdate`:

**Before:**

```tsx
const mutation = useMutation({
  mutationFn: () =>
    client(completeTodo).applyAction({ todo, isComplete: true }),
  onMutate: async () => {
    await queryClient.cancelQueries({ queryKey: ["todos"] });
    const previous = queryClient.getQueryData(["todos"]);
    queryClient.setQueryData(
      ["todos"],
      old => old.map(t => t.id === todo.id ? { ...t, isComplete: true } : t),
    );
    return { previous };
  },
  onError: (_, __, context) => {
    queryClient.setQueryData(["todos"], context.previous);
  },
});
```

**After:**

```tsx
const { applyAction, isPending } = useOsdkAction(completeTodo);

const handleClick = useCallback(() => {
  applyAction({
    todo,
    isComplete: true,
    $optimisticUpdate: (ou) => {
      ou.updateObject(todo.$clone({ isComplete: true }));
    },
  });
}, [applyAction, todo]);
```

The `$optimisticUpdate` callback receives an update builder. Call `ou.updateObject(instance.$clone({ ... }))` to apply optimistic changes. On failure they roll back automatically.

---

## Sites to flag (don't convert)

Leave these in place with a comment:

```tsx
// osdk-react-migrate: manual cache tuning — conversion skipped.
// staleTime and refetchInterval configure custom cache behavior.
// @osdk/react invalidates automatically after actions. If manual
// control is no longer needed, convert to useOsdkObjects.
const { data } = useQuery({
  queryKey: ["employee", id],
  queryFn: () => client(Employee).fetchOne(id),
  staleTime: 5 * 60 * 1000,
  refetchInterval: 30_000,
});
```

Flag conditions (any one is sufficient):

- `staleTime`, `cacheTime`, or `gcTime` set to a non-default value
- `refetchInterval` or `refetchIntervalInBackground`
- `refetchOnWindowFocus: false` or `refetchOnMount: false`
- TanStack `onMutate` + manual rollback (`onError` with `context`) not representable as `$optimisticUpdate`
- Manual `queryClient.invalidateQueries()` called immediately after an OSDK action call
