---
title: Getting Started
---

# Installation

Once these features are Generally Available, simply update to the latest versions of `@osdk/client` and `@osdk/react` in your project. Currently, they are in beta and require some additional steps.

## 1. Specify the Beta Versions

Using `latest` in npm/yarn/pnpm does not always install the actual latest version, especially when dealing with beta or release-candidate packages. You must specify them explicitly, for example:

```json
"@osdk/client": "^2.3.0-beta.9",
"@osdk/oauth": "^1.3.0-beta.1",
"@osdk/react": "^0.5.0-beta.4",
```

## 2. Regenerate Your SDK on Foundry

### Access the Developer Console

In the Developer Console for your Foundry, after loading your application, click the "SDK versions" tab on the left navbar. If it is collapsed, it has a tag icon on it.

### Ensure Beta SDK Generation is Enabled

On the SDK versions page, in the top right corner is a "Settings" button. Click it and enable beta features for TypeScript.

### Generate a New Version

Click the blue "Generate new version" button. In the dialog that shows up, make sure that the checkbox for "npm" is checked and that you are on the latest -beta generator. Then click "Generate" and wait a few seconds.

Note: normally we want the generator version to match the `@osdk/client` version we have in our package.json file. Make sure you're using a compatible generator version that works with `2.3.0-beta.9` `@osdk/client`.

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

```ts
import {
  OsdkProvider2,
  useLinks,
  useObjectSet,
  useOsdkAction,
  useOsdkObject,
  useOsdkObjects,
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
  useOsdkClient,
  useOsdkObject,
  useOsdkObjects,
} from "@osdk/react/experimental";
```

## Configure `<OsdkProvider2/>`

In `main.tsx` (or wherever you call `createRoot`), add an `OsdkProvider2`:

```ts
import { OsdkProvider2 } from "@osdk/react/experimental";
import client from "./client"; // or wherever you created it
```

Then wrap your existing root components with `<OsdkProvider2 client={client}>`:

```ts
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>
    <RouterProvider router={router} />
  </OsdkProvider2>,
);
```

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
      {data?.map(todo => (
        <TodoItem key={todo.$primaryKey} todo={todo} />
      ))}
    </div>
  );
}
```

You can also specify a minimum number of items to fetch:

```tsx
const { data, isLoading, fetchMore } = useOsdkObjects(Todo, {
  autoFetchMore: 100, // Fetch at least 100 items
  pageSize: 25,       // Fetch 25 per page (will load 4 pages)
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

Options:

- `where` - Filter linked objects
- `pageSize` - Number of links per page
- `orderBy` - Sort order for linked objects
- `mode` - Fetch mode: `"force"` (always fetch), `"offline"` (cache only), or undefined (default)

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
