---
sidebar_position: 2
---

# Querying Data

This guide covers all the ways to fetch data from the server using OSDK React hooks.

## useOsdkObjects

*Experimental - import from `@osdk/react/experimental`*

Retrieve and observe collections of objects with automatic cache management.

### Basic Usage

```tsx
import { Todo } from "@my/osdk";
import {
  type UseOsdkListResult,
  useOsdkObjects,
} from "@osdk/react/experimental";

function TodoList() {
  const {
    data,
    isLoading,
    isOptimistic,
    error,
    fetchMore,
  }: UseOsdkListResult<typeof Todo> = useOsdkObjects(Todo);

  if (!data && isLoading) {
    return "Loading...";
  }

  return (
    <div>
      {isLoading && <div>Refreshing data</div>}
      {data.map(todo => <TodoView key={todo.$primaryKey} todo={todo} />)}
    </div>
  );
}
```

### Return Values

- `data` - Array of objects matching the query (undefined while initially loading)
- `isLoading` - True while fetching data from server (can be true while `data` exists during revalidation)
- `isOptimistic` - True if the list order is affected by optimistic updates (see note below)
- `fetchMore` - Function to load next page (undefined when no more pages available)
- `error` - Error object if fetch failed

:::note About isOptimistic
`isOptimistic` refers to whether the **ordered list of objects** (considering only primary keys) is optimistic. To check if individual object contents are optimistic, use `useOsdkObject` on each object.
:::

### Fetching by RID

Fetch specific objects by their RIDs:

```tsx
import { Employee } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function SelectedEmployees({ selectedRids }: { selectedRids: string[] }) {
  const { data, isLoading } = useOsdkObjects(Employee, {
    rids: selectedRids,
  });

  if (isLoading && !data) {
    return <div>Loading selected employees...</div>;
  }

  return (
    <div>
      {data?.map(employee => (
        <div key={employee.$primaryKey}>{employee.fullName}</div>
      ))}
    </div>
  );
}
```

### Filtering with `where`

```ts
const { data, isLoading } = useOsdkObjects(Todo, {
  where: { text: { $startsWith: "cool " } },
});
```

### Text Search Filters

OSDK provides several text search operators for string properties. Understanding the differences helps you choose the right one for your use case.

#### `$startsWith`

Matches strings that begin with the specified prefix.

```ts
const { data } = useOsdkObjects(Employee, {
  where: { fullName: { $startsWith: "John" } },
});
// Matches: "John Smith", "Johnny Appleseed"
// Does NOT match: "Mary Johnson"
```

#### `$containsAnyTerm`

Matches if the property contains **any** of the search terms. Terms are space-separated. Useful for broad searches where matching any word is sufficient.

```ts
const { data } = useOsdkObjects(Article, {
  where: { content: { $containsAnyTerm: "react typescript javascript" } },
});
// Matches articles containing "react" OR "typescript" OR "javascript"
```

With fuzzy matching enabled, minor typos are tolerated:

```ts
const { data } = useOsdkObjects(Article, {
  where: { content: { $containsAnyTerm: { term: "react", fuzzySearch: true } } },
});
// Fuzzy matching handles common typos automatically
```

#### `$containsAllTerms`

Matches if the property contains **all** of the search terms, in any order. Use this for more precise searches where all keywords must be present.

```ts
const { data } = useOsdkObjects(Article, {
  where: { content: { $containsAllTerms: "react hooks tutorial" } },
});
// Matches: "This tutorial covers React hooks in depth"
// Matches: "Learn hooks - a React tutorial"
// Does NOT match: "React components guide" (missing "hooks" and "tutorial")
```

With fuzzy matching:

```ts
const { data } = useOsdkObjects(Article, {
  where: { content: { $containsAllTerms: { term: "react hooks", fuzzySearch: true } } },
});
```

#### `$containsAllTermsInOrder`

Matches if the property contains all terms **in the exact order specified**. Use this for phrase matching.

```ts
const { data } = useOsdkObjects(Document, {
  where: { title: { $containsAllTermsInOrder: "quarterly sales report" } },
});
// Matches: "Q4 Quarterly Sales Report 2024"
// Does NOT match: "Sales Report - Quarterly" (wrong order)
```

#### Search Filter Comparison

| Filter | Match Requirement | Use Case |
|--------|-------------------|----------|
| `$startsWith` | Begins with prefix | Autocomplete, prefix search |
| `$containsAnyTerm` | Any term present | Broad keyword search |
| `$containsAllTerms` | All terms present (any order) | Precise multi-keyword search |
| `$containsAllTermsInOrder` | All terms in exact order | Phrase/exact match search |

#### Search Example: Building a Search Box

```tsx
import { Article } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";
import { useState } from "react";

function ArticleSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = useOsdkObjects(Article, {
    where: searchQuery
      ? { title: { $containsAnyTerm: { term: searchQuery, fuzzySearch: true } } }
      : undefined,
    enabled: searchQuery.length >= 2,
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      {isLoading && <div>Searching...</div>}

      {data?.map(article => (
        <div key={article.$primaryKey}>{article.title}</div>
      ))}
    </div>
  );
}
```

### Sorting with `orderBy`

```ts
const { data } = useOsdkObjects(Todo, {
  orderBy: { createdAt: "desc" },
});
```

### Pagination

Control page size and load more results:

```tsx
function TodoList() {
  const { data, isLoading, fetchMore } = useOsdkObjects(Todo, {
    pageSize: 10,
  });

  return (
    <div>
      {data?.map(todo => <TodoView key={todo.$primaryKey} todo={todo} />)}

      {fetchMore && (
        <button onClick={() => fetchMore()} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
```

### Auto-Fetching Pages

By default, only the first page is fetched. Use `autoFetchMore` to load more automatically:

```tsx
// Fetch all pages automatically
const { data, isLoading } = useOsdkObjects(Todo, {
  autoFetchMore: true,
});

// Fetch at least 100 items
const { data, isLoading, fetchMore } = useOsdkObjects(Todo, {
  autoFetchMore: 100,
  pageSize: 25, // Will load 4 pages
});
```

:::warning Performance Warning
Using `autoFetchMore: true` on large datasets may cause long load times and high memory usage. Prefer `autoFetchMore: N` with a specific number.
:::

### Conditional Queries with `enabled`

Control when a query executes:

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
      {data?.map(todo => <div key={todo.$primaryKey}>{todo.title}</div>)}
    </div>
  );
}
```

### Real-time Updates with `streamUpdates`

Enable WebSocket-based real-time updates:

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function LiveTodoList() {
  const { data, isLoading } = useOsdkObjects(Todo, {
    where: { isComplete: false },
    orderBy: { createdAt: "desc" },
    streamUpdates: true,
  });

  // Data automatically updates when:
  // - New todos matching the where clause are created
  // - Existing todos are modified and still match
  // - Todos are deleted or no longer match

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

### Set Intersections with `intersectWith`

Find objects matching multiple where clauses:

```tsx
import { Employee } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function EmployeesIntersection() {
  const { data, isLoading } = useOsdkObjects(Employee, {
    where: { department: "Engineering" },
    intersectWith: [
      { where: { salary: { $gte: 100000 } } },
      { where: { yearsExperience: { $gte: 5 } } },
    ],
    orderBy: { fullName: "asc" },
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

### Pivot to Related Objects with `pivotTo`

Traverse relationships and return linked objects:

```tsx
import { Employee } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function ManagerReports() {
  const { data, isLoading } = useOsdkObjects(Employee, {
    where: { fullName: "John Smith" },
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

### All Options

```ts
const { data, isLoading, isOptimistic, fetchMore, error } = useOsdkObjects(
  Todo,
  {
    rids: ["ri.phonograph2-objects.main.object.abc123", "ri.phonograph2-objects.main.object.def456"],
    where: { isComplete: false },
    pageSize: 20,
    orderBy: { createdAt: "desc" },
    dedupeIntervalMs: 5000,
    streamUpdates: true,
    autoFetchMore: 100,
    enabled: true,
    intersectWith: [{ where: { priority: "high" } }],
    pivotTo: "assignee",
    withProperties: { /* see advanced-queries */ },
  },
);
```

---

## useOsdkObject

*Experimental - import from `@osdk/react/experimental`*

Retrieve and observe a single object.

### Tracking an Existing Instance

Pass an object instance to track its loading and optimistic state:

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObject } from "@osdk/react/experimental";

function TodoView({ todo }: { todo: Todo.OsdkInstance }) {
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
```

### Loading by Primary Key

Fetch an object by its type and primary key:

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObject } from "@osdk/react/experimental";

function TodoLoader({ todoId }: { todoId: string }) {
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

### Return Values

- `object` - The object instance (may be undefined while loading)
- `isLoading` - True while fetching from server
- `isOptimistic` - True if object has optimistic updates applied
- `error` - Error object if fetch failed

---

## useLinks

*Experimental - import from `@osdk/react/experimental`*

Observe and navigate relationships between objects.

### Basic Usage

```tsx
import { Employee } from "@my/osdk";
import { useLinks } from "@osdk/react/experimental";

function EmployeeReports({ employee }: { employee: Employee.OsdkInstance }) {
  const { links, isLoading, fetchMore, hasMore } = useLinks(
    employee,
    "reports",
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

Load links from multiple objects at once:

```tsx
function TeamMembers({ employees }: { employees: Employee.OsdkInstance[] }) {
  const { links, isLoading } = useLinks(employees, "reports");

  return (
    <div>
      <h3>All Team Reports</h3>
      {links?.map(report => <div key={report.$primaryKey}>{report.name}</div>)}
    </div>
  );
}
```

### Lazy Loading with `enabled`

```tsx
import { Employee } from "@my/osdk";
import { useLinks } from "@osdk/react/experimental";
import { useState } from "react";

function OptionalReportsList({ employee }: { employee: Employee.OsdkInstance }) {
  const [showReports, setShowReports] = useState(false);

  const { links, isLoading } = useLinks(employee, "reports", {
    enabled: showReports,
  });

  return (
    <div>
      <button onClick={() => setShowReports(!showReports)}>
        {showReports ? "Hide" : "Show"} Reports
      </button>

      {showReports && isLoading && !links && <div>Loading...</div>}
      {links?.map(report => <div key={report.$primaryKey}>{report.name}</div>)}
    </div>
  );
}
```

### Options

- `where` - Filter linked objects
- `pageSize` - Number of links per page
- `orderBy` - Sort order for linked objects
- `mode` - Fetch mode: `"force"` (always fetch), `"offline"` (cache only), or undefined (default)
- `enabled` - Enable/disable the query (default: true)

### Return Values

- `links` - Array of linked objects
- `isLoading` - True while fetching
- `isOptimistic` - True if links affected by optimistic updates
- `fetchMore` - Function to load next page
- `hasMore` - True if more pages available
- `error` - Error object if fetch failed

---

## useOsdkClient

*Stable - available from both `@osdk/react` and `@osdk/react/experimental`*

Access the OSDK client directly for custom queries.

```tsx
import { Todo } from "@my/osdk";
import { useOsdkClient } from "@osdk/react";

function MyComponent() {
  const client = useOsdkClient();

  const loadTodos = async () => {
    const todos = await client(Todo).fetchPage();
    // ...
  };

  return <button onClick={loadTodos}>Load Todos</button>;
}
```

Use this when you need to perform queries outside the reactive hook system, such as in event handlers or effects where you manage state manually.

---

## Error Handling

All hooks return an `error` field. A basic pattern:

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function TodoList() {
  const { data, isLoading, error } = useOsdkObjects(Todo);

  if (error) {
    return (
      <div>
        <h2>Error loading todos</h2>
        <p>{JSON.stringify(error)}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
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

---

## Combining Multiple Hooks

A common pattern is using multiple hooks together:

```tsx
import { Todo } from "@my/osdk";
import { useLinks, useOsdkObject } from "@osdk/react/experimental";

function TodoWithDetails({ todoId }: { todoId: string }) {
  const { object: todo, isLoading: todoLoading } = useOsdkObject(Todo, todoId);

  const { links: comments, isLoading: commentsLoading } = useLinks(
    todo,
    "comments",
    { orderBy: { createdAt: "desc" } },
  );

  if (todoLoading) return <div>Loading...</div>;
  if (!todo) return <div>Todo not found</div>;

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>

      <h3>Comments ({comments?.length || 0})</h3>
      {commentsLoading && <div>Loading comments...</div>}
      {comments?.map(comment => (
        <div key={comment.$primaryKey}>{comment.text}</div>
      ))}
    </div>
  );
}
```
