---
sidebar_position: 4
---

# Advanced Queries

This guide covers advanced querying patterns including useObjectSet, derived properties, aggregations, and metadata.

## useObjectSet

_Experimental - import from `@osdk/react/experimental`_

Advanced querying with set operations, derived properties, and link traversal.

### When to Use useObjectSet vs useOsdkObjects

Prefer `useOsdkObjects` when both hooks would work. Both support filtering, sorting, pagination, derived properties, pivoting, and streaming updates — they differ in their **starting point**.

**Use `useOsdkObjects(Type, options)`** when your query starts from an object type or interface.

**Use `useObjectSet(objectSet, options)`** when you already hold an `ObjectSet` instance you want to observe — typically because:

- You composed sets with `union` / `intersect` / `subtract`
- You received an `ObjectSet` from another hook (e.g. `useOsdkObjects(...).objectSet`) and want to observe a transformation of it

Note that `pivotTo` and `streamUpdates` cannot be combined — see the note below.

```tsx
import { $, Todo } from "@my/osdk";
import { useObjectSet, useOsdkObjects } from "@osdk/react/experimental";

// Simple query - use useOsdkObjects
const { data } = useOsdkObjects(Todo, {
  where: { isComplete: false },
  orderBy: { createdAt: "desc" },
});

// Set operations - use useObjectSet
const urgentTodos = $(Todo).where({ isUrgent: true });
const completedTodos = $(Todo).where({ isComplete: true });

const { data } = useObjectSet($(Todo), {
  union: [urgentTodos],
  subtract: [completedTodos],
});
```

:::note The `$` function
The `$` function from your generated SDK creates an ObjectSet from an object type. `$(Todo)` creates an ObjectSet containing all Todo objects that you can then filter, union, intersect, or subtract with other ObjectSets.
:::

### Basic Usage

```tsx
import { $, Todo } from "@my/osdk";
import { useObjectSet } from "@osdk/react/experimental";

function TodosWithSetOperations() {
  const allTodos = $(Todo);
  const completedTodos = $(Todo).where({ isComplete: true });

  const { data, isLoading, fetchMore } = useObjectSet(allTodos, {
    subtract: [completedTodos],
    where: { priority: "high" },
    orderBy: { createdAt: "desc" },
    pageSize: 20,
  });

  return (
    <div>
      {data?.map(todo => (
        <div key={todo.$primaryKey}>
          {todo.title}
        </div>
      ))}
    </div>
  );
}
```

### Set Operations

#### Union

Combine multiple object sets:

```tsx
import { $, Todo } from "@my/osdk";
import { useObjectSet } from "@osdk/react/experimental";

function CombinedTodoQuery() {
  const highPriorityTodos = $(Todo).where({ priority: "high" });
  const urgentTodos = $(Todo).where({ isUrgent: true });

  const { data } = useObjectSet(highPriorityTodos, {
    union: [urgentTodos], // High priority OR urgent
  });

  return <div>High priority or urgent: {data?.length}</div>;
}
```

#### Intersect

Find objects that exist in all sets:

```tsx
import { $, Employee } from "@my/osdk";
import { useObjectSet } from "@osdk/react/experimental";

function HighEarningEngineers() {
  const engineers = $(Employee).where({ department: "Engineering" });
  const highEarners = $(Employee).where({ salary: { $gte: 150000 } });

  const { data } = useObjectSet(engineers, {
    intersect: [highEarners],
  });

  return (
    <div>
      <h3>Engineers earning over $150k</h3>
      {data?.map(employee => (
        <div key={employee.$primaryKey}>{employee.fullName}</div>
      ))}
    </div>
  );
}
```

#### Subtract

Remove objects that exist in another set:

```tsx
import { $, Todo } from "@my/osdk";
import { useObjectSet } from "@osdk/react/experimental";

function ActiveTodos() {
  const allTodos = $(Todo);
  const completedTodos = $(Todo).where({ isComplete: true });

  const { data } = useObjectSet(allTodos, {
    subtract: [completedTodos],
  });

  return <div>Active todos: {data?.length}</div>;
}
```

#### Combined Operations

```tsx
import { $, Todo } from "@my/osdk";
import { useObjectSet } from "@osdk/react/experimental";

function ComplexTodoQuery() {
  const highPriorityTodos = $(Todo).where({ priority: "high" });
  const urgentTodos = $(Todo).where({ isUrgent: true });
  const completedTodos = $(Todo).where({ isComplete: true });

  const { data } = useObjectSet(highPriorityTodos, {
    union: [urgentTodos], // High priority OR urgent
    subtract: [completedTodos], // But not completed
  });

  return <div>High priority or urgent (but not completed): {data?.length}</div>;
}
```

### Link Traversal with pivotTo

Navigate to linked objects:

```tsx
import { $, Employee } from "@my/osdk";
import { useObjectSet } from "@osdk/react/experimental";

function EmployeeDepartments(
  { employee }: { employee: Employee.OsdkInstance },
) {
  const employeeSet = $(Employee).where({ id: employee.id });

  const { data } = useObjectSet(employeeSet, {
    pivotTo: "department",
  });

  return (
    <div>
      Departments: {data?.map(dept => dept.name).join(", ")}
    </div>
  );
}
```

### Auto-Fetching and Streaming

```tsx
import { $, Todo } from "@my/osdk";
import { useObjectSet } from "@osdk/react/experimental";

const { data, isLoading } = useObjectSet($(Todo), {
  where: { isComplete: false },
  autoFetchMore: 200, // Fetch at least 200 items
  streamUpdates: true, // Real-time WebSocket updates
});
```

:::note
`streamUpdates` cannot be used together with `pivotTo`. The server does not support
websocket subscriptions for link-traversal queries. Queries using `pivotTo` will
still fetch data normally but won't receive real-time updates.
:::

### All Options

- `where` — Filter objects
- `withProperties` — Add derived/computed properties
- `$select` — Restrict which properties are returned for each object
- `union` — Combine with other ObjectSets
- `intersect` — Find common objects with other ObjectSets
- `subtract` — Remove objects that exist in other ObjectSets
- `pivotTo` — Traverse to linked objects (changes result type). Cannot be combined with `streamUpdates`.
- `pageSize` — Number of objects per page
- `orderBy` — Sort order
- `dedupeIntervalMs` — Minimum time between re-fetches (default: 2000ms)
- `streamUpdates` — Enable real-time websocket updates (default: false). Cannot be combined with `pivotTo` or `withProperties`.
- `autoFetchMore` — Auto-fetch additional pages
- `enabled` — Enable/disable the query

### Return Values

- `data` - Array of objects with derived properties
- `isLoading` - True while fetching
- `error` - Error object if fetch failed
- `fetchMore` - Function to load next page
- `objectSet` - The transformed ObjectSet after all operations

---

## Derived Properties

_Available in both useOsdkObjects and useObjectSet_

Add computed properties calculated server-side using the builder pattern.

### Basic Usage

Derived properties use a builder function that receives a `DerivedProperty.Builder`:

```tsx
import { Employee } from "@my/osdk";
import type { DerivedProperty } from "@osdk/client";
import { useOsdkObjects } from "@osdk/react/experimental";

const { data } = useOsdkObjects(Employee, {
  where: { department: "Engineering" },
  withProperties: {
    // Get manager's name via link traversal
    managerName: (base: DerivedProperty.Builder<Employee, false>) =>
      base.pivotTo("manager").selectProperty("fullName"),

    // Count direct reports
    reportCount: (base: DerivedProperty.Builder<Employee, false>) =>
      base.pivotTo("reports").aggregate("$count"),
  },
});
```

### Builder Methods

The builder provides these methods:

- `.pivotTo(linkName)` — Navigate to linked objects
- `.selectProperty(propertyName)` — Select a property value
- `.aggregate(specifier)` — Aggregate values; specifier is `"$count"` or `"propertyName:metric"` (see [Aggregation Syntax](#aggregation-syntax) for the full list)
- `.where(clause)` — Filter before aggregating
- `.constant.{double|integer|long|datetime|timestamp}(value)` — Lift a literal into the builder

#### What does `DerivedProperty.Builder<Employee, false>` mean?

You usually don't need this annotation — TypeScript infers it. The flag flips from `false` to `true` after pivoting through a one-to-many link, where you must call `.aggregate()` instead of `.selectProperty()` because there's no single value to select.

#### When an aggregate has no data

For numeric aggregates (`sum`, `avg`, `min`, `max`) over an empty result set, the property resolves to `null` rather than a number. `$count` resolves to `0`. Plan your UI for these cases when filtering can produce empty groups.

### Advanced Examples

```tsx
import type { DerivedProperty } from "@osdk/client";

const { data } = useOsdkObjects(Employee, {
  where: { department: "Engineering" },
  withProperties: {
    // Chained traversal
    departmentSize: (base: DerivedProperty.Builder<Employee, false>) =>
      base.pivotTo("manager")
        .pivotTo("reports")
        .aggregate("$count"),

    // Aggregate a specific property — `propertyName:metric` keys
    avgReportSalary: (base: DerivedProperty.Builder<Employee, false>) =>
      base.pivotTo("reports").aggregate("salary:avg"),
  },
});
```

### Filtering on Derived Properties

You can filter on derived properties in your where clause:

```tsx
import type { DerivedProperty } from "@osdk/client";

const { data } = useOsdkObjects(Employee, {
  withProperties: {
    reportCount: (base: DerivedProperty.Builder<Employee, false>) =>
      base.pivotTo("reports").aggregate("$count"),
  },
  where: {
    department: "Engineering",
    reportCount: { $gt: 0 }, // Only managers
  },
});
```

---

## useOsdkFunction

_Experimental - import from `@osdk/react/experimental`_

Execute and observe functions with request deduplication and configurable dependency tracking for automatic refetching.

### Basic Usage

```tsx
import { addOne } from "@my/osdk";
import { useOsdkFunction } from "@osdk/react/experimental";

function AddOneDemo() {
  const { data, isLoading, error } = useOsdkFunction(addOne, {
    params: { n: 5 },
  });

  if (isLoading && data === undefined) {
    return <div>Calculating...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Result: {data}</div>;
}
```

### Functions Without Parameters

```tsx
import { getTodoCount } from "@my/osdk";
import { useOsdkFunction } from "@osdk/react/experimental";

function TodoCount() {
  const { data, isLoading } = useOsdkFunction(getTodoCount);

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      {data !== undefined && <span>Total todos: {data}</span>}
    </div>
  );
}
```

### Dependency Tracking

Automatically refetch when actions modify objects of specified types:

```tsx
import { Employee, getEmployeeMetrics } from "@my/osdk";
import { useOsdkFunction } from "@osdk/react/experimental";

function EmployeeMetrics({ departmentId }: { departmentId: string }) {
  const { data, isLoading, refetch } = useOsdkFunction(getEmployeeMetrics, {
    params: { departmentId },
    dependsOn: [Employee], // Refetch when any Employee changes
  });

  return (
    <div>
      {isLoading && <span>Updating...</span>}
      {data && <span>Headcount: {data.headcount}</span>}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
```

### Specific Object Dependencies

For finer-grained control, depend on specific object instances:

```tsx
import { Employee, getEmployeeReport } from "@my/osdk";
import { useOsdkFunction, useOsdkObject } from "@osdk/react/experimental";

function EmployeeReport({ employee }: { employee: Employee.OsdkInstance }) {
  const { data, isLoading } = useOsdkFunction(getEmployeeReport, {
    params: { employeeId: employee.$primaryKey },
    dependsOnObjects: [employee], // Refetch only when this employee changes
  });

  return (
    <div>
      {isLoading && <span>Loading report...</span>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
```

### Conditional Execution

Use `enabled` to control when the function executes:

```tsx
import { Employee, getEmployeeReport } from "@my/osdk";
import { useOsdkFunction, useOsdkObject } from "@osdk/react/experimental";

function ConditionalReport({ employeeId }: { employeeId: string }) {
  const { object: employee } = useOsdkObject(Employee, employeeId);

  const { data, isLoading } = useOsdkFunction(getEmployeeReport, {
    params: { employeeId },
    enabled: employee !== undefined, // Wait for employee to load
  });

  if (!employee) {
    return <div>Loading employee...</div>;
  }

  return (
    <div>
      <h2>{employee.fullName}</h2>
      {isLoading && <span>Loading report...</span>}
      {data && <div>Report: {JSON.stringify(data)}</div>}
    </div>
  );
}
```

### Options

- `params` - Parameters to pass to the function (required if function has parameters)
- `dependsOn` - Array of object types; refetch when any object of these types changes
- `dependsOnObjects` - Array of specific object instances; refetch when these objects change
- `dedupeIntervalMs` - Milliseconds to dedupe identical calls (default: 2000)
- `enabled` - Enable/disable execution (default: true)

### Return Values

- `data` - Function result, or undefined if not loaded or on error
- `isLoading` - True while the function is executing
- `error` - Error object if execution failed
- `lastUpdated` - Timestamp (ms since epoch) when result was last fetched
- `refetch` - Function to manually trigger a refetch

---

## useOsdkAggregation

_Experimental - import from `@osdk/react/experimental`_

Server-side grouping and aggregation.

### Simple Aggregation

```tsx
import { Todo } from "@my/osdk";
import { useOsdkAggregation } from "@osdk/react/experimental";

function TodoStats() {
  const { data, isLoading, error } = useOsdkAggregation(Todo, {
    aggregate: {
      $select: {
        $count: "unordered",
        "priority:avg": "unordered",
        "dueDate:max": "unordered",
      },
    },
  });

  if (isLoading) {
    return <div>Calculating stats...</div>;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  // Results: "propertyName:metric" in $select becomes data.propertyName.metric
  return (
    <div>
      <p>Total Todos: {data?.$count}</p>
      <p>Average Priority: {data?.priority.avg}</p>
      <p>Latest Due Date: {data?.dueDate.max}</p>
    </div>
  );
}
```

### Grouped Aggregations

```tsx
import { Todo } from "@my/osdk";
import { useOsdkAggregation } from "@osdk/react/experimental";

function TodosByStatus() {
  const { data, isLoading } = useOsdkAggregation(Todo, {
    aggregate: {
      $groupBy: { status: "exact" },
      $select: {
        $count: "unordered",
        "priority:avg": "unordered",
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
          <h3>Status: {group.$group.status}</h3>
          <p>Count: {group.$count}</p>
          <p>Avg Priority: {group.priority.avg}</p>
        </div>
      ))}
    </div>
  );
}
```

### Filtered Aggregations

```tsx
import { Todo } from "@my/osdk";
import { useOsdkAggregation } from "@osdk/react/experimental";

function HighPriorityStats() {
  const { data, isLoading } = useOsdkAggregation(Todo, {
    where: { priority: "high", isComplete: false },
    aggregate: {
      $select: {
        $count: "unordered",
        "dueDate:min": "unordered",
      },
    },
  });

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      <p>High Priority Incomplete: {data.$count}</p>
      <p>Earliest Due: {data.dueDate.min}</p>
    </div>
  );
}
```

### Aggregation Syntax

The `$select` object uses a special key format where each key is a metric and each value is an ordering directive (`"unordered"`, `"asc"`, or `"desc"`). When using `$groupBy`, the ordering determines the order results are returned.

**Key formats:**

- `$count` - Count of objects
- `"propertyName:sum"` - Sum of a numeric property
- `"propertyName:avg"` - Average of a numeric property
- `"propertyName:min"` - Minimum value of a property
- `"propertyName:max"` - Maximum value of a property
- `"propertyName:exactDistinct"` - Exact distinct count
- `"propertyName:approximateDistinct"` - Approximate distinct count (more performant for large datasets)

### Options

- `where` - Filter objects before aggregation
- `withProperties` - Add derived properties for computed values
- `aggregate` - Aggregation configuration:
  - `$select` (required) - Object mapping metric keys (e.g., `$count`, `"salary:avg"`) to ordering (`"unordered"`, `"asc"`, or `"desc"`)
  - `$groupBy` (optional) - Object mapping property names to grouping strategy (e.g., `"exact"`, `{ $fixedWidth: 10 }`)
- `dedupeIntervalMs` - Minimum time between re-fetches (default: 2000ms)

### Return Values

- `data` - Aggregation result (single object for non-grouped, array for grouped). For `$count`, access via `data.$count`. For property metrics like `"salary:avg"`, access via `data.salary.avg`
- `isLoading` - True while fetching
- `error` - Error object if fetch failed
- `refetch` - Manual refetch function

---

## useOsdkMetadata

_Stable - import from `@osdk/react`_

Fetch metadata about object types or interfaces.

```tsx
import { Todo } from "@my/osdk";
import { useOsdkMetadata } from "@osdk/react";

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

### Return Values

- `metadata` - ObjectMetadata or InterfaceMetadata with type information
- `loading` - True while fetching metadata
- `error` - Error message string if fetch failed

---

## Performance Considerations

### useObjectSet

- Set operations (union, intersect, subtract) are performed on the server
- Each unique combination of options creates a separate cache entry
- Using `pivotTo` creates a new query for the linked type
- Consider using `pageSize` to limit initial data load

### Derived Properties

- Computed server-side, so no client-side overhead
- Complex derived properties with many link traversals may be slower
- Filtering on derived properties happens server-side

### Aggregations

- Aggregations are always computed server-side
- Use `where` to reduce the dataset before aggregation
- Group by produces array results that may be large
