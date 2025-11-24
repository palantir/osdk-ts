---
title: Getting Started
---

# Installation

Once these features are Generally Available, simply update to the latest versions of `@osdk/client` and `@osdk/react` in your project. Currently, they are in beta and require some additional steps.

## 1. Specify the Beta Versions

Using `latest` in npm/yarn/pnpm does not always install the actual latest version, especially when dealing with beta or release-candidate packages. You must specify them explicitly, for example:

```json
"@osdk/client": "^2.6.0-beta.11",
"@osdk/oauth": "^1.3.0-beta.1",
"@osdk/react": "^0.8.0-beta.4",
"@osdk/api": "^2.6.0-beta.11",
```

## 2. Regenerate Your SDK on Foundry

### Access the Developer Console

In the Developer Console for your Foundry, after loading your application, click the "SDK versions" tab on the left navbar. If it is collapsed, it has a tag icon on it.

### Ensure Beta SDK Generation is Enabled

On the SDK versions page, in the top right corner is a "Settings" button. Click it and enable beta features for TypeScript.

### Generate a New Version

Click the blue "Generate new version" button. In the dialog that shows up, make sure that the checkbox for "npm" is checked and that you are on the latest -beta generator. Then click "Generate" and wait a few seconds.

Note: normally we want the generator version to match the `@osdk/client` version we have in our package.json file. Make sure you're using a compatible generator version that works with `2.6.0-beta.11` `@osdk/client`.

### Update Your package.json

On the SDK versions page, the table shows you your generated sdk version number in the left column. Mine says "0.4.0" so we will update my package.json to reflect that. Note, you need to use your package name, not `@no-caching-app/sdk`.

```json
{
  ...
  "dependencies": {
    ...,
    "@no-caching-app/sdk": "^0.4.0",
    ...
  }
  ...
}
```

# Stable Features

The following features are stable and available via `@osdk/react`:

```ts
import { OsdkProvider, useOsdkClient } from "@osdk/react";
```

## Configure `<OsdkProvider/>`

The stable provider gives you access to the OSDK client:

```tsx
import { OsdkProvider } from "@osdk/react";
import client from "./client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <RouterProvider router={router} />
  </OsdkProvider>,
);
```

## useOsdkClient

Access the OSDK client from any component:

```tsx
import { useOsdkClient } from "@osdk/react";

function MyComponent() {
  const client = useOsdkClient();

  // Use client for direct queries
  const loadTodos = async () => {
    const todos = await client(Todo).fetchPage();
    // ...
  };

  return <button onClick={loadTodos}>Load Todos</button>;
}
```

# Experimental Features

All reactive data management features are currently **experimental** and available via `@osdk/react/experimental`. These features provide automatic cache management, real-time updates, and optimistic UI patterns.

## REQUIRED: OsdkProvider2 Setup

**All experimental hooks require your entire application to be wrapped in `<OsdkProvider2>`**. This is not optional.

If you forget to add `OsdkProvider2`, you will see errors like:
- `Cannot read property 'observableClient' of undefined`
- `Cannot read properties of undefined (reading 'canonicalizeWhereClause')`

**Every component using experimental hooks MUST be inside the `<OsdkProvider2>` wrapper.** See [Configuration](#configure-osdkprovider2) below for setup instructions.

```ts
import {
  OsdkProvider2,
  useLinks,
  useObjectSet,
  useOsdkAction,
  useOsdkAggregation,
  useOsdkObject,
  useOsdkObjects,
  useDebouncedCallback,
} from "@osdk/react/experimental";
```

## Experimental vs Stable Features

The React Toolkit currently maintains two releases; stable and experimental.

- **`@osdk/react`** - Stable features, can expect no breaking changes
- **`@osdk/react/experimental`** - Experimental reactive features which can be removed or made incompatible by future changes

All reactive data management features (OsdkProvider2, useOsdkObject, useOsdkObjects, useOsdkAction, useLinks, useObjectSet) are currently **experimental** and available via `@osdk/react/experimental`. Import from this path to use the features documented below:

```ts
import {
  OsdkProvider2,
  useLinks,
  useObjectSet,
  useOsdkAction,
  useOsdkAggregation,
  useOsdkClient,
  useOsdkObject,
  useOsdkObjects,
  useDebouncedCallback,
} from "@osdk/react/experimental";
```

### Quick Start Checklist

Before using any experimental hooks, verify:

- [ ] **Step 1:** Your app is wrapped in `<OsdkProvider2 client={client}>`
- [ ] **Step 2:** OsdkProvider2 is at your app root (not nested inside components)
- [ ] **Step 3:** You're passing your configured OSDK client to OsdkProvider2
- [ ] **Step 4:** All components using experimental hooks are inside the provider

**If you skip Step 1, none of the experimental hooks will work.**

## Configure `<OsdkProvider2/>` (REQUIRED)

This is mandatory for all experimental features to work. Add it to your application root.

### Step 1: Import OsdkProvider2

In `main.tsx` (or wherever you call `createRoot`):

```ts
import { OsdkProvider2 } from "@osdk/react/experimental";
import client from "./client"; // your OSDK client instance
```

### Step 2: Wrap Your Entire App

Wrap your root component and ALL nested components:

```tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>
    {/* All your routes, pages, and components go here */}
    <RouterProvider router={router} />
    {/* Every hook like useOsdkObjects must be inside this wrapper */}
  </OsdkProvider2>,
);
```

### Correct Structure

```
main.tsx
├── OsdkProvider2 (WRAP AT ROOT)
│   ├── RouterProvider
│   │   ├── Page1
│   │   │   └── useOsdkObjects() (Works here)
│   │   └── Page2
│   │       └── useOsdkAction() (Works here)
```

### Incorrect Structure (Will Break)

```
main.tsx
├── RouterProvider (Provider not at root)
│   ├── OsdkProvider2
│   │   └── Page1
│   │       └── useOsdkObjects() (Some components outside provider)
│   └── Page2
│       └── useOsdkObjects() (Will error - outside provider)
```

### Troubleshooting

If you see these errors, check your OsdkProvider2 setup:

**Error: "Cannot read property 'observableClient' of undefined"**
- The component is outside `<OsdkProvider2>` wrapper
- Move `<OsdkProvider2>` higher up in your component tree

**Error: "useOsdkContext is not defined"**
- Missing `OsdkProvider2` import or not wrapped at all
- Ensure `<OsdkProvider2 client={client}>` is at your app root

**Hooks return undefined**
- Double-check that OsdkProvider2 is actually wrapping the component
- Make sure you're passing the `client` prop to OsdkProvider2

## Retrieve Objects

```tsx
import { Todo } from "@my/osdk";
import {
  type UseOsdkListResult,
  useOsdkObjects,
} from "@osdk/react/experimental";

function App() {
  const {
    data,
    isLoading,
    isOptimistic,
    error,
    fetchMore,
  }: UseOsdkListResult<typeof Todo> = useOsdkObjects(Todo);

  // If the cache has no existing copy for this query and
  // we are in a loading state then we can just tell the
  // user we are loading
  if (!data && isLoading) {
    return "Loading...";
  }

  return (
    <div>
      {isLoading && <div>Refreshing data</div>}

      {/* Actually render the todos */}
      {data.map(todo => <TodoView key={todo.$primaryKey} todo={todo} />)}
    </div>
  );
}
```

Using a `where` clause:

```ts
const { data, isLoading } = useOsdkObjects(Todo, {
  where: { text: { $startsWith: "cool " } },
});
```

Additional options and return values for `useOsdkObjects`:

```ts
const { data, isLoading, isOptimistic, fetchMore, error } = useOsdkObjects(
  Todo,
  {
    where: { isComplete: false },
    pageSize: 20,
    orderBy: { createdAt: "desc" },
    dedupeIntervalMs: 5000,
    streamUpdates: true, // Enable streaming updates (experimental)
  },
);
```

Return values:

- `data` - Array of objects matching the query
- `isLoading` - True while fetching data from server
- `isOptimistic` - True if the list order is affected by optimistic updates
- `fetchMore` - Function to load next page (undefined when no more pages)
- `error` - Error object if fetch failed

### Auto-Fetching All Pages

By default, `useOsdkObjects` only fetches the first page of results. You can automatically fetch additional pages using the `autoFetchMore` option:

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function AllTodos() {
  const { data, isLoading } = useOsdkObjects(Todo, {
    autoFetchMore: true, // Fetch all pages automatically
  });

  if (isLoading && !data) {
    return <div>Loading all todos...</div>;
  }

  return (
    <div>
      <h2>All Todos ({data?.length})</h2>
      {data?.map(todo => <TodoItem key={todo.$primaryKey} todo={todo} />)}
    </div>
  );
}
```

You can also specify a minimum number of items to fetch:

```tsx
const { data, isLoading, fetchMore } = useOsdkObjects(Todo, {
  autoFetchMore: 100, // Fetch at least 100 items
  pageSize: 25, // Fetch 25 per page (will load 4 pages)
});

// fetchMore() is still available if more data exists
```

**Performance Considerations**

Using `autoFetchMore: true` on large datasets may cause:

- Long initial load times
- High memory usage
- Degraded user experience

**Best Practices:**

1. Use `autoFetchMore: N` with a specific number for predictable performance
2. Implement loading indicators during auto-fetch
3. Consider virtual scrolling for large lists
4. Use `where` clauses to filter data server-side

```tsx
// Good: Fetch a reasonable number
const { data } = useOsdkObjects(Todo, {
  where: { isComplete: false },
  autoFetchMore: 500,
});

// Caution: May load thousands of items
const { data } = useOsdkObjects(Todo, {
  autoFetchMore: true,
});
```

### Real-time Updates with streamUpdates

Enable real-time updates for your queries using the `streamUpdates` option. When enabled, the list automatically updates as data changes on the server via WebSocket:

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function LiveTodoList() {
  const { data, isLoading } = useOsdkObjects(Todo, {
    where: { isComplete: false },
    orderBy: { createdAt: "desc" },
    streamUpdates: true, // Enable real-time updates via websocket
  });

  // Data automatically updates when:
  // - New todos matching the where clause are created
  // - Existing todos are modified and still match the where clause
  // - Todos are deleted or no longer match the where clause

  if (isLoading && !data) {
    return <div>Loading todos...</div>;
  }

  return (
    <div>
      <h2>Live Todo List ({data?.length})</h2>
      {data?.map(todo => (
        <div key={todo.$primaryKey}>
          <span>{todo.title}</span>
          {isLoading && <span style={{ fontSize: "0.8em" }}>(Updating...)</span>}
        </div>
      ))}
    </div>
  );
}
```

With `streamUpdates: true`, your UI stays synchronized with server changes without manual polling. The `isLoading` state reflects whether new updates are being fetched, while existing data remains visible.

### Lazy/Conditional Queries with enabled

Use the `enabled` option to control when a query should execute. This is useful for dependent queries or queries that should only run based on user interaction:

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";
import { useState } from "react";

function ConditionalTodoFetch() {
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data, isLoading } = useOsdkObjects(Todo, {
    where: { isComplete: false },
    enabled: shouldFetch, // Only fetch when true
  });

  return (
    <div>
      <button onClick={() => setShouldFetch(!shouldFetch)}>
        {shouldFetch ? "Hide" : "Show"} Incomplete Todos
      </button>

      {shouldFetch && isLoading && !data && <div>Loading...</div>}

      {data?.map(todo => (
        <div key={todo.$primaryKey}>{todo.title}</div>
      ))}
    </div>
  );
}
```

The query will not execute if `enabled` is `false`, saving bandwidth and improving performance.

### Adding Derived Properties with withProperties

Use `withProperties` to add computed/derived properties to your objects. These are calculated server-side:

```tsx
import { Todo } from "@my/osdk";
import { DerivedProperty } from "@osdk/client";
import { useOsdkObjects } from "@osdk/react/experimental";

function TodosWithMetadata() {
  const { data, isLoading } = useOsdkObjects(Todo, {
    where: { isComplete: false },
    withProperties: {
      // Add derived properties
      displayText: DerivedProperty.string(todo =>
        `[${todo.priority}] ${todo.title}`
      ),
      daysSinceCreated: DerivedProperty.number(todo =>
        Math.floor(
          (Date.now() - new Date(todo.createdAt).getTime()) / (1000 * 60 * 60 * 24)
        )
      ),
    },
  });

  if (isLoading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map(todo => (
        <div key={todo.$primaryKey}>
          <span>{todo.displayText}</span>
          <span style={{ fontSize: "0.9em", color: "#666" }}>
            {todo.daysSinceCreated} days old
          </span>
        </div>
      ))}
    </div>
  );
}
```

Derived properties are computed on the server and automatically included in your results.

### Set Intersections with intersectWith

Find objects that match multiple where clauses using `intersectWith`. Each where clause acts as a filter, and only objects matching ALL conditions are returned:

```tsx
import { Employee } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function EmployeesIntersection() {
  const { data, isLoading } = useOsdkObjects(Employee, {
    where: {
      department: "Engineering",
    },
    intersectWith: [
      {
        where: {
          salary: { $gte: 100000 },
        },
      },
      {
        where: {
          yearsExperience: { $gte: 5 },
        },
      },
    ],
    orderBy: {
      fullName: "asc",
    },
  });

  if (isLoading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Senior Engineers with High Salary ({data?.length})</h3>
      {data?.map(employee => (
        <div key={employee.$primaryKey}>{employee.fullName}</div>
      ))}
    </div>
  );
}
```

The `intersectWith` option is useful for complex filtering where you need objects to match multiple distinct conditions. Unlike nested where clauses, this provides explicit intersection logic at the query level.

### Pivot to Related Objects with pivotTo

Use `pivotTo` to traverse relationships and return linked objects instead of the original type. The return type automatically changes based on the link:

```tsx
import { Employee } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function ManagerReports() {
  // Find employees and pivot to their direct reports
  const { data, isLoading } = useOsdkObjects(Employee, {
    where: {
      fullName: "John Smith",
    },
    pivotTo: "reports", // Changes return type from Employee[] to Report[]
  });

  if (isLoading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>John Smith's Direct Reports ({data?.length})</h3>
      {data?.map(report => (
        <div key={report.$primaryKey}>{report.fullName}</div>
      ))}
    </div>
  );
}
```

The return type is inferred from the link definition, providing full type safety. You can use TypeScript's `as const` assertion for link names if needed.

### Advanced Derived Properties with Pivoting and Aggregation

Use `withProperties` to compute derived properties that traverse links and perform aggregations server-side:

```tsx
import { Employee } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function EmployeesWithStats() {
  const { data, isLoading } = useOsdkObjects(Employee, {
    where: {
      department: "Engineering",
    },
    withProperties: {
      // Simple link traversal - get manager's name
      managerName: (employee) =>
        employee.pivotTo("manager").selectProperty("fullName"),

      // Aggregate across linked objects - count direct reports
      reportCount: (employee) =>
        employee.pivotTo("reports").aggregate("$count"),

      // Chained link traversal and aggregation
      departmentSize: (employee) =>
        employee.pivotTo("manager")
          .pivotTo("reports")
          .aggregate("$count"),

      // Complex aggregation - average salary of reports
      avgReportSalary: (employee) =>
        employee.pivotTo("reports")
          .selectProperty("salary")
          .aggregate("$avg"),
    },
    orderBy: {
      fullName: "asc",
    },
  });

  if (isLoading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map(employee => (
        <div key={employee.$primaryKey}>
          <h4>{employee.fullName}</h4>
          <p>Manager: {employee.managerName}</p>
          <p>Direct Reports: {employee.reportCount}</p>
          <p>Department Size: {employee.departmentSize}</p>
          <p>Avg Report Salary: ${employee.avgReportSalary?.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
```

You can also filter on these derived properties in the where clause:

```tsx
const { data } = useOsdkObjects(Employee, {
  withProperties: {
    reportCount: (e) => e.pivotTo("reports").aggregate("$count"),
  },
  where: {
    department: "Engineering",
    reportCount: { $gt: 0 },  // Only managers
  },
});
```

## Render a Single Object

The `useOsdkObject` hook has two signatures:

1. **Pass an existing object instance** to get loading/optimistic status
2. **Load by type and primary key** to fetch a specific object

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObject } from "@osdk/react/experimental";

interface TodoProps {
  todo: Todo.OsdkInstance;
}

function TodoView({ todo }: TodoProps) {
  // Option 1: Track an existing object instance
  const { object, isLoading, isOptimistic, error } = useOsdkObject(todo);

  return (
    <div>
      {object?.title || todo.title}
      {isLoading && " (Loading)"}
      {isOptimistic && " (Optimistic)"}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}

function TodoLoader({ todoId }: { todoId: string }) {
  // Option 2: Load object by type and primary key
  const { object, isLoading, error } = useOsdkObject(Todo, todoId);

  if (isLoading && !object) {
    return <div>Loading todo...</div>;
  }

  if (error) {
    return <div>Error loading todo: {error.message}</div>;
  }

  if (!object) {
    return <div>Todo not found</div>;
  }

  return <TodoView todo={object} />;
}
```

Return values:

- `object` - The object instance (may be undefined while loading)
- `isLoading` - True while fetching from server
- `isOptimistic` - True if object has optimistic updates applied
- `error` - Error object if fetch failed

## Call an Action

{@link useOsdkAction} is the hook we use for apply actions. The hook does not apply the action on page render. Instead it returns an object that lets you invoke `applyAction` in a react callback and render the state of the last/active call.

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction, useOsdkObject } from "@osdk/react/experimental";
import React from "react";

function TodoView({ todo }: TodoProps) {
  const { isLoading } = useOsdkObject(todo);
  const { applyAction, data, error, isPending } = useOsdkAction(
    $Actions.completeTodo,
  );

  const onClick = React.useCallback(() => {
    applyAction({
      todo: todo,
      isComplete: true,
    });
  }, [applyAction, todo]);

  return (
    <div>
      <div>
        {todo.title}
        {todo.isComplete === false && (
          <span>
            <button onClick={onClick} disabled={isPending}>
              Mark Complete
            </button>
          </span>
        )}
        {isPending && "(Applying)"}
        {data && "(Action completed successfully)"}
      </div>
      {error && (
        <div>
          An error occurred while applying the action:
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
```

Return values:

- `applyAction` - Function to execute the action (accepts single args object or array for batch)
- `data` - Return value from the last successful action execution
- `error` - Error object with details (see error handling below)
- `isPending` - True while action is executing
- `isValidating` - True while validation is in progress
- `validateAction` - Function to validate without executing
- `validationResult` - Result of last validation

### Error Handling

The `error` object has the following structure:

```tsx
{
  actionValidation?: ActionValidationError; // When action fails validation
  unknown?: unknown;                        // For other errors
}
```

Example with detailed error handling:

```tsx
function TodoActionWithErrorHandling({ todo }: TodoProps) {
  const { applyAction, error, isPending } = useOsdkAction(
    $Actions.completeTodo,
  );

  const onClick = async () => {
    try {
      await applyAction({ todo, isComplete: true });
    } catch (e) {
      // Error is also available in the error state
      console.error("Action failed", e);
    }
  };

  return (
    <div>
      <button onClick={onClick} disabled={isPending}>
        Complete Todo
      </button>

      {error?.actionValidation && (
        <div style={{ color: "red" }}>
          Validation failed: {error.actionValidation.message}
        </div>
      )}

      {error?.unknown && (
        <div style={{ color: "red" }}>
          An unexpected error occurred: {String(error.unknown)}
        </div>
      )}
    </div>
  );
}
```

### Batch Actions

You can apply the same action multiple times in a single call:

```tsx
function BulkCompleteButton({ todos }: { todos: Todo.OsdkInstance[] }) {
  const { applyAction, isPending } = useOsdkAction($Actions.completeTodo);

  const onClick = React.useCallback(() => {
    // Pass array of action arguments
    applyAction(
      todos.map(todo => ({
        todo: todo,
        isComplete: true,
      })),
    );
  }, [applyAction, todos]);

  return (
    <button onClick={onClick} disabled={isPending}>
      Complete All ({todos.length})
    </button>
  );
}
```

## Validate Actions Without Executing

The `useOsdkAction` hook provides a `validateAction` function that allows you to check if an action would be valid without actually executing it. This is useful for pre-validation, displaying warnings, or implementing custom UI logic based on action validity.

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction } from "@osdk/react/experimental";
import React from "react";

function TodoForm() {
  const [title, setTitle] = React.useState("");
  const [assignee, setAssignee] = React.useState("");

  const {
    applyAction,
    validateAction,
    isValidating,
    validationResult,
    isPending,
    error,
  } = useOsdkAction($Actions.createTodo);

  // Validate whenever inputs change
  React.useEffect(() => {
    if (title || assignee) {
      validateAction({
        title,
        assignee,
      });
    }
  }, [title, assignee, validateAction]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validationResult?.result === "VALID") {
      await applyAction({ title, assignee });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
      />
      <input
        type="text"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        placeholder="Assignee"
      />

      {isValidating && <span>Validating...</span>}

      {validationResult?.result === "INVALID" && (
        <div style={{ color: "red" }}>
          Invalid: {validationResult.reasons?.join(", ")}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending
          || isValidating
          || validationResult?.result !== "VALID"}
      >
        Create Todo
      </button>

      {error && <div style={{ color: "red" }}>Error: {error.message}</div>}
    </form>
  );
}
```

Key features:

- `validateAction`: Function to validate action parameters without executing
- `isValidating`: Boolean indicating if validation is in progress
- `validationResult`: Contains the validation result (`{ result: "VALID" | "INVALID", reasons?: string[] }`)
- Calling `validateAction` while a previous validation is in progress will cancel the previous one
- Validation and execution are mutually exclusive - starting one will cancel the other

## Optimistic Updates

With optimistic updates, you can change the internal cache of the ObservationClient while you wait for the action to be performed.

In this case, it allows us to mark the todo as complete even though applying the action to the server has not yet completed.

If the action is successful then the changed objects are automatically reloaded from the server and the optimistic change is removed.

If the action errors, then the changed objects are automatically rolled back to their state prior to the action being performed.

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction, useOsdkObject } from "@osdk/react/experimental";
import React from "react";

function TodoView({ todo }: TodoProps) {
  const { isLoading, isOptimistic } = useOsdkObject(todo);
  const { applyAction, error, isPending } = useOsdkAction(
    $Actions.completeTodo,
  );

  const onClick = React.useCallback(() => {
    applyAction({
      todo: todo,
      isComplete: true,

      $optimisticUpdate: (ou) => {
        ou.updateObject(
          todo.$clone({ isComplete: true }),
        );
      },
    });
  }, [applyAction, todo]);

  return (
    <div>
      {todo.title}
      {todo.isComplete === false && !isOptimistic && (
        <button onClick={onClick} disabled={isPending}>Mark Complete</button>
      )}
      {isPending && "(Saving)"}
      {isLoading && "(Loading)"}
      {isOptimistic && "(Optimistic)"}
      {error && (
        <div style={{ color: "red" }}>
          Error: {error.message}
        </div>
      )}
    </div>
  );
}
```

## Manual Cache Invalidation

The `ObservableClient` provides methods for manual cache invalidation.

```tsx
import { createObservableClient } from "@osdk/client/unstable-do-not-use";
import { useOsdkClient } from "@osdk/react/experimental";
import { useMemo } from "react";

// Create a custom hook to access the observable client
function useObservableClient() {
  const client = useOsdkClient();
  return useMemo(() => createObservableClient(client), [client]);
}

// Use in your component
function RefreshButton() {
  const observableClient = useObservableClient();

  const handleRefresh = async () => {
    // Invalidate specific objects (pass single object or array)
    await observableClient.invalidateObjects([todo1, todo2]);

    // Invalidate all objects of a type
    await observableClient.invalidateObjectType(Todo);

    // Invalidate entire cache (use sparingly)
    await observableClient.invalidateAll();
  };

  return <button onClick={handleRefresh}>Refresh</button>;
}
```

**Important Notes:**

- The `ObservableClient` used by `OsdkProvider2` is automatically created and managed by the provider. It maintains a cache of all queries and subscriptions.
- **Lifecycle:** The client is created once when `OsdkProvider2` mounts and lives for the lifetime of your application. All hooks share this single client instance.
- **Automatic Updates:** Most data updates happen automatically after actions complete. The client re-fetches affected objects and lists. Manual invalidation is only needed for:
  - External data changes (e.g., data updated by another user/system)
  - Manual refresh buttons
  - Periodic polling (though consider using `streamUpdates` instead)

## Error Handling

Error handling is still in flux so for now you can:

```tsx
import { useOsdkObjects } from "@osdk/react/experimental";

function TodoList() {
  const { data, isLoading, error } = useOsdkObjects(Todo);

  if (error) {
    return (
      <div>
        <h2>Error loading todos</h2>
        <p>{JSON.stringify(error)}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  if (isLoading && !data) {
    return <div>Loading todos...</div>;
  }

  return (
    <div>
      {data?.map(todo => <TodoView key={todo.$primaryKey} todo={todo} />)}
    </div>
  );
}
```

## Common Mistakes & Troubleshooting

### Mistake 1: Forgetting OsdkProvider2

**Problem:** You see "Cannot read property 'observableClient' of undefined"

**Wrong:**
```tsx
// main.tsx
function App() {
  return <TodoList />;  // No OsdkProvider2!
}

// TodoList.tsx
function TodoList() {
  const { data } = useOsdkObjects(Todo);  // Crashes!
}
```

**Correct:**
```tsx
// main.tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>
    <TodoList />
  </OsdkProvider2>,
);

// TodoList.tsx
function TodoList() {
  const { data } = useOsdkObjects(Todo);  // Works!
}
```

### Mistake 2: Provider not at app root

**Problem:** Only some components work with hooks

**Wrong:**
```tsx
// main.tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <App />  // OsdkProvider2 is inside App, not at root
);

// App.tsx
function App() {
  return (
    <>
      <Header />  {/* This component can't use hooks */}
      <OsdkProvider2 client={client}>
        <Content />  {/* Only this can use hooks */}
      </OsdkProvider2>
    </>
  );
}
```

**Correct:**
```tsx
// main.tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>  {/* Provider at root */}
    <App />
  </OsdkProvider2>,
);

// App.tsx
function App() {
  return (
    <>
      <Header />  {/* All components can use hooks now */}
      <Content />
    </>
  );
}
```

### Mistake 3: Passing wrong client

**Problem:** Hooks work but return no data

**Wrong:**
```tsx
// Creating a new client instead of using the configured one
<OsdkProvider2 client={createNewClient()}>  // Creates new instance each time
  <App />
</OsdkProvider2>
```

**Correct:**
```tsx
// Import the configured client
import client from "./client";  // Created once at app startup

<OsdkProvider2 client={client}>  // Reuse same instance
  <App />
</OsdkProvider2>
```

### Mistake 4: Hooks inside conditional rendering

**Problem:** "Hooks cannot be conditionally called"

**Wrong:**
```tsx
function TodoList({ shouldLoad }: { shouldLoad: boolean }) {
  if (shouldLoad) {
    const { data } = useOsdkObjects(Todo);  // Conditional hook!
  }
  return null;
}
```

**Correct - Use enabled option:**
```tsx
function TodoList({ shouldLoad }: { shouldLoad: boolean }) {
  const { data } = useOsdkObjects(Todo, {
    enabled: shouldLoad,  // Use enabled instead
  });
  return null;
}
```

## Working with Links

The `useLinks` hook allows you to observe and navigate relationships between objects.

```tsx
import { Employee } from "@my/osdk";
import { useLinks } from "@osdk/react/experimental";

function EmployeeReports({ employee }: { employee: Employee.OsdkInstance }) {
  const { links, isLoading, fetchMore, hasMore } = useLinks(
    employee,
    "reports", // Link name
    {
      pageSize: 10,
      orderBy: { name: "asc" },
      where: { isActive: true },
    },
  );

  if (isLoading && !links) {
    return <div>Loading reports...</div>;
  }

  return (
    <div>
      <h3>Reports ({links?.length})</h3>
      {links?.map(report => <div key={report.$primaryKey}>{report.name}</div>)}

      {hasMore && (
        <button onClick={() => fetchMore?.()} disabled={isLoading}>
          Load More
        </button>
      )}
    </div>
  );
}
```

### Multiple Source Objects

You can also load links from multiple objects at once:

```tsx
function TeamMembers({ employees }: { employees: Employee.OsdkInstance[] }) {
  // Load all reports for multiple employees
  const { links, isLoading } = useLinks(employees, "reports");

  return (
    <div>
      <h3>All Team Reports</h3>
      {links?.map(report => <div key={report.$primaryKey}>{report.name}</div>)}
    </div>
  );
}
```

### Lazy Loading Links

Load links only when needed using the `enabled` option:

```tsx
function OptionalReportsList({ employee }: { employee: Employee.OsdkInstance }) {
  const [showReports, setShowReports] = useState(false);

  const { links, isLoading } = useLinks(
    employee,
    "reports",
    {
      enabled: showReports, // Only fetch when true
    },
  );

  return (
    <div>
      <button onClick={() => setShowReports(!showReports)}>
        {showReports ? "Hide" : "Show"} Reports
      </button>

      {showReports && isLoading && !links && <div>Loading...</div>}

      {links?.map(report => (
        <div key={report.$primaryKey}>{report.name}</div>
      ))}
    </div>
  );
}
```

Options:

- `where` - Filter linked objects
- `pageSize` - Number of links per page
- `orderBy` - Sort order for linked objects
- `mode` - Fetch mode: `"force"` (always fetch), `"offline"` (cache only), or undefined (default)
- `enabled` - Enable/disable the query (default: true)

Return values:

- `links` - Array of linked objects
- `isLoading` - True while fetching
- `isOptimistic` - True if links affected by optimistic updates
- `fetchMore` - Function to load next page
- `hasMore` - True if more pages available
- `error` - Error object if fetch failed

## Pagination with fetchMore

The `useOsdkObjects` hook provides a `fetchMore` function for loading additional pages:

```tsx
function TodoList() {
  const { data, isLoading, fetchMore } = useOsdkObjects(Todo, {
    pageSize: 10,
  });

  const handleLoadMore = async () => {
    if (fetchMore) {
      await fetchMore();
    }
  };

  return (
    <div>
      {data?.map(todo => <TodoView key={todo.$primaryKey} todo={todo} />)}

      {fetchMore && (
        <button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
```

## Working with ObjectSets

The `useObjectSet` hook provides advanced querying capabilities with derived properties, set operations, and link traversal.

### Basic Usage

```tsx
import { Todo } from "@my/osdk";
import { DerivedProperty } from "@osdk/client";
import { useObjectSet } from "@osdk/react/experimental";

function TodosWithDerivedProps() {
  const baseObjectSet = Todo.all();

  const { data, isLoading, fetchMore } = useObjectSet(baseObjectSet, {
    withProperties: {
      // Add computed properties
      displayName: DerivedProperty.string(todo =>
        `${todo.title} (${todo.priority})`
      ),
    },
    where: { isComplete: false },
    orderBy: { createdAt: "desc" },
    pageSize: 20,
  });

  return (
    <div>
      {data?.map(todo => (
        <div key={todo.$primaryKey}>
          {/* Access derived property */}
          {todo.displayName}
        </div>
      ))}
    </div>
  );
}
```

### Set Operations

```tsx
function ComplexTodoQuery() {
  const highPriorityTodos = Todo.where({ priority: "high" });
  const urgentTodos = Todo.where({ isUrgent: true });
  const completedTodos = Todo.where({ isComplete: true });

  const { data } = useObjectSet(highPriorityTodos, {
    // Union: combine with urgent todos
    union: [urgentTodos],

    // Subtract: remove completed todos
    subtract: [completedTodos],
  });

  return <div>High priority or urgent (but not completed): {data?.length}</div>;
}
```

### Link Traversal with pivotTo

```tsx
function EmployeeDepartments(
  { employee }: { employee: Employee.OsdkInstance },
) {
  const employeeSet = Employee.where({ id: employee.id });

  const { data } = useObjectSet(employeeSet, {
    // Traverse to linked departments
    pivotTo: "department",
  });

  return (
    <div>
      Departments: {data?.map(dept => dept.name).join(", ")}
    </div>
  );
}
```

### Set Intersections with intersect

Find common objects between sets using `intersect`:

```tsx
function SharedProjects({ employee1, employee2 }: { employee1: Employee.OsdkInstance; employee2: Employee.OsdkInstance }) {
  const set1 = Employee.where({ id: employee1.id });
  const set2 = Employee.where({ id: employee2.id });

  const { data } = useObjectSet(set1, {
    pivotTo: "projects", // Get projects for employee1
    intersect: [
      // Find intersection with employee2's projects
      set2.$pivotTo("projects"),
    ],
  });

  return (
    <div>
      <h3>Shared Projects</h3>
      {data?.map(project => (
        <div key={project.$primaryKey}>{project.name}</div>
      ))}
    </div>
  );
}
```

The `intersect` option finds only objects that exist in all specified sets.

### Auto-Fetching All Pages in ObjectSets

Use `autoFetchMore` to automatically load all pages of results:

```tsx
import { Todo } from "@my/osdk";
import { useObjectSet } from "@osdk/react/experimental";

function AllActiveTodos() {
  const { data, isLoading } = useObjectSet(Todo.all(), {
    where: { isComplete: false },
    autoFetchMore: true, // Fetch all pages automatically
  });

  if (isLoading && !data) {
    return <div>Loading all todos...</div>;
  }

  return (
    <div>
      <h2>All Active Todos ({data?.length})</h2>
      {data?.map(todo => (
        <div key={todo.$primaryKey}>{todo.title}</div>
      ))}
    </div>
  );
}
```

You can also specify a minimum number of items to fetch:

```tsx
const { data, isLoading } = useObjectSet(Todo.all(), {
  where: { isComplete: false },
  autoFetchMore: 200, // Fetch at least 200 items
  pageSize: 50, // 50 per page (will load 4 pages)
});
```

**Performance Note:** Use `autoFetchMore: N` with a specific number rather than `true` for better control over performance and memory usage.

### Streaming Updates for ObjectSets

Enable real-time updates for ObjectSet queries with `streamUpdates`:

```tsx
function LiveTodoList() {
  const { data, isLoading } = useObjectSet(Todo.all(), {
    where: { isComplete: false },
    orderBy: { createdAt: "desc" },
    streamUpdates: true, // Enable real-time updates via websocket
  });

  // Data automatically updates when:
  // - New todos matching the where clause are created
  // - Existing todos are modified
  // - Todos are deleted or no longer match the where clause

  return (
    <div>
      <h3>Live Todo List ({data?.length})</h3>
      {data?.map(todo => (
        <div key={todo.$primaryKey}>
          {todo.title}
          {isLoading && " (Updating...)"}
        </div>
      ))}
    </div>
  );
}
```

Options:

- `where` - Filter objects
- `withProperties` - Add derived/computed properties
- `union` - Combine with other ObjectSets
- `intersect` - Find common objects with other ObjectSets
- `subtract` - Remove objects that exist in other ObjectSets
- `pivotTo` - Traverse to linked objects (changes result type)
- `pageSize` - Number of objects per page
- `orderBy` - Sort order
- `dedupeIntervalMs` - Minimum time between re-fetches (default: 2000ms)
- `streamUpdates` - Enable real-time websocket updates (default: false)

Return values:

- `data` - Array of objects with derived properties
- `isLoading` - True while fetching
- `error` - Error object if fetch failed
- `fetchMore` - Function to load next page
- `objectSet` - The transformed ObjectSet after all operations

**Performance Considerations:**

- Set operations (union, intersect, subtract) are performed on the server
- Each unique combination of options creates a separate cache entry
- Using `pivotTo` creates a new query for the linked type
- Consider using `pageSize` to limit initial data load for large result sets

## Fetching Metadata

The `useOsdkMetadata` hook fetches metadata about object types or interfaces, such as display names, property definitions, and type information.

```tsx
import { Todo } from "@my/osdk";
import { useOsdkMetadata } from "@osdk/react/experimental";

function TodoMetadataViewer() {
  const { metadata, loading, error } = useOsdkMetadata(Todo);

  if (loading) {
    return <div>Loading metadata...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>{metadata?.displayName}</h2>
      <p>Description: {metadata?.description}</p>
      <h3>Properties:</h3>
      <ul>
        {Object.entries(metadata?.properties || {}).map(([key, prop]) => (
          <li key={key}>
            {key}: {prop.dataType.type}
            {prop.displayName && ` (${prop.displayName})`}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

Return values:

- `metadata` - ObjectMetadata or InterfaceMetadata with type information
- `loading` - True while fetching metadata
- `error` - Error message string if fetch failed

## Server-Side Aggregations

The `useOsdkAggregation` hook enables server-side grouping and aggregation of data with metrics like count, sum, min, max, and average.

```tsx
import { Todo } from "@my/osdk";
import { useOsdkAggregation } from "@osdk/react/experimental";

function TodoStats() {
  const { data, isLoading, error } = useOsdkAggregation(Todo, {
    aggregate: {
      $select: {
        totalCount: { $count: {} },
        avgPriority: { $avg: "priority" },
        maxDueDate: { $max: "dueDate" },
      },
    },
  });

  if (isLoading) {
    return <div>Calculating stats...</div>;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <p>Total Todos: {data?.totalCount}</p>
      <p>Average Priority: {data?.avgPriority}</p>
      <p>Latest Due Date: {data?.maxDueDate}</p>
    </div>
  );
}
```

### Grouped Aggregations

Group results and compute metrics per group:

```tsx
function TodosByStatus() {
  const { data, isLoading } = useOsdkAggregation(Todo, {
    aggregate: {
      $groupBy: ["status"],
      $select: {
        count: { $count: {} },
        avgPriority: { $avg: "priority" },
      },
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((group, idx) => (
        <div key={idx}>
          <h3>Status: {group.status}</h3>
          <p>Count: {group.count}</p>
          <p>Avg Priority: {group.avgPriority}</p>
        </div>
      ))}
    </div>
  );
}
```

### Filtered Aggregations

Filter data before aggregation:

```tsx
function HighPriorityStats() {
  const { data, isLoading } = useOsdkAggregation(Todo, {
    where: { priority: "high", isComplete: false },
    aggregate: {
      $select: {
        count: { $count: {} },
        earliestDue: { $min: "dueDate" },
      },
    },
  });

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      <p>High Priority Incomplete: {data.count}</p>
      <p>Earliest Due: {data.earliestDue}</p>
    </div>
  );
}
```

Options:

- `where` - Filter objects before aggregation
- `withProperties` - Add derived properties for computed values
- `aggregate` - Aggregation configuration with structure:
  - `$select` (required) - Object mapping metric names to aggregation operators (`$count`, `$sum`, `$avg`, `$min`, `$max`)
  - `$groupBy` (optional) - Array of property names to group by
- `dedupeIntervalMs` - Minimum time between re-fetches (default: 2000ms)

Return values:

- `data` - Aggregation result (single object for non-grouped, array for grouped)
- `isLoading` - True while fetching
- `error` - Error object if fetch failed
- `refetch` - Manual refetch function

## Debounced Callbacks

The `useDebouncedCallback` utility helps debounce callback functions, useful for optimistic updates or expensive operations:

```tsx
import { useOsdkAction } from "@osdk/react/experimental";
import { useDebouncedCallback } from "@osdk/react/experimental";
import React from "react";

function SearchableList({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = React.useState("");

  // Debounce the search for 500ms
  const debouncedSearch = useDebouncedCallback((q: string) => {
    onSearch(q);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return <input value={query} onChange={handleChange} placeholder="Search..." />;
}
```

### Debounced Actions

Combine with actions for optimistic updates:

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction, useDebouncedCallback } from "@osdk/react/experimental";
import React, { useState } from "react";

function AutoSaveTodo({ todo }: { todo: Todo.OsdkInstance }) {
  const [title, setTitle] = useState(todo.title);
  const { applyAction } = useOsdkAction($Actions.updateTodo);

  const debouncedSave = useDebouncedCallback((newTitle: string) => {
    applyAction({
      todo,
      title: newTitle,
      $optimisticUpdate: (ou) => {
        ou.updateObject(todo.$clone({ title: newTitle }));
      },
    });
  }, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    debouncedSave(newTitle);
  };

  return (
    <input
      value={title}
      onChange={handleChange}
      placeholder="Click to edit title..."
    />
  );
}
```

### Debounced Callback Methods

The returned debounced function has two utility methods:

```tsx
const debouncedFn = useDebouncedCallback((value: string) => {
  console.log("Called with:", value);
}, 500);

// Cancel any pending execution
debouncedFn.cancel();

// Execute immediately and cancel pending calls
debouncedFn.flush();

// Call the function (debounced)
debouncedFn("hello");
```

## Common Patterns

### Combining Multiple Hooks

Use object data with its links and actions:

```tsx
function TodoWithDetails({ todoId }: { todoId: string }) {
  // Load the todo
  const { object: todo, isLoading: todoLoading } = useOsdkObject(Todo, todoId);

  // Load related comments
  const { links: comments, isLoading: commentsLoading } = useLinks(
    todo,
    "comments",
    { orderBy: { createdAt: "desc" } },
  );

  // Setup action for completing
  const { applyAction, isPending } = useOsdkAction($Actions.completeTodo);

  if (todoLoading) return <div>Loading...</div>;
  if (!todo) return <div>Todo not found</div>;

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>

      <button
        onClick={() => applyAction({ todo, isComplete: true })}
        disabled={isPending || todo.isComplete === true}
      >
        {isPending ? "Completing..." : "Mark Complete"}
      </button>

      <h3>Comments ({comments?.length || 0})</h3>
      {commentsLoading && <div>Loading comments...</div>}
      {comments?.map(comment => (
        <div key={comment.$primaryKey}>{comment.text}</div>
      ))}
    </div>
  );
}
```

## Choosing Between useOsdkObjects and useObjectSet

Both hooks allow you to query collections of objects, but they serve different purposes:

### Use `useOsdkObjects` when:

- You need **maximum performance** for simple queries
- You only need basic filtering (`where`), sorting (`orderBy`), and pagination

```tsx
// Simple, performant queries
const { data } = useOsdkObjects(Todo, {
  where: { isComplete: false },
  orderBy: { createdAt: "desc" },
  pageSize: 20,
});
```

### Use `useObjectSet` when:

- You need **advanced query capabilities** like:
  - Runtime-computed derived properties (`withProperties`)
  - Set operations (`union`, `intersect`, `subtract`)
  - Link traversal (`pivotTo`)
  - Aggregations or transformations on the data
- You're building dynamic or complex queries

```tsx
// Advanced queries with derived properties and set operations
const { data } = useObjectSet(Todo.all(), {
  withProperties: {
    displayName: DerivedProperty.string(todo =>
      `${todo.title} (${todo.priority})`
    ),
  },
  union: [urgentTodos],
  subtract: [completedTodos],
});
```

### Performance Considerations

`useOsdkObjects` is optimized for straightforward queries and offers the best performance for most use cases. Use it as your default choice unless you specifically need the advanced features of `useObjectSet`.

`useObjectSet` provides powerful capabilities but involves additional overhead:

- Complex set operations require more processing
- Each unique configuration creates a separate cache entry

**Recommendation:** Start with `useOsdkObjects` for all standard queries. Only switch to `useObjectSet` when you need its advanced features.

## Feature Comparison

Here's a quick reference for which options are available on which hooks:

| Feature | useOsdkObjects | useOsdkObject | useLinks | useObjectSet | useOsdkAggregation |
|---------|---|---|---|---|---|
| `where` (filtering) | Yes | No | Yes | Yes | Yes |
| `orderBy` (sorting) | Yes | No | Yes | Yes | No |
| `pageSize` (pagination) | Yes | No | Yes | Yes | No |
| `autoFetchMore` (auto-pagination) | Yes | No | No | Yes | No |
| `streamUpdates` (real-time) | Yes | No | No | Yes | No |
| `enabled` (lazy queries) | Yes | No | Yes | Yes | No |
| `withProperties` (derived props) | Yes | No | No | Yes | Yes |
| `intersectWith` (multi-filter) | Yes | No | No | No | No |
| `intersect` (set intersection) | No | No | No | Yes | No |
| `union` (combine sets) | No | No | No | Yes | No |
| `subtract` (set difference) | No | No | No | Yes | No |
| `pivotTo` (link traversal) | Yes | No | No | Yes | No |
| `$groupBy` (grouping) | No | No | No | No | Yes |
| `$select` (aggregation) | No | No | No | No | Yes |

# Debugging Issues

## NPM Install Concerns

NOTE: DO NOT DO THIS UNLESS YOU ARE HAVING PROBLEMS.

NPM aggressively tries to prevent you from making mistakes when mixing and matching versions. Generally, this is desirable behavior but can often get in your way when dealing with beta/rc/prerelease packages.

If you are having issues with NPM resolving `peerDependencies` then you may want to add the following to the bottom of your package.json:

```json
"overrides": {
  "@osdk/client": "$@osdk/client",
  "@osdk/oauth": "$@osdk/oauth",
  "@osdk/react": "$@osdk/react"
}
```

This will tell npm to force every usage to the versions we specified in our `dependencies` section, regardless of what those packages' own `dependencies`/`peerDependencies` say.
