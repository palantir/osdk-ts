# OSDK React Patterns

Best practices and patterns for building applications with @osdk/react.

**Generated on**: 2026-02-10T22:46:52.812Z
**Total patterns**: 6

---

## CRITICAL Impact Patterns

### Keep components rendering during loading states

**Impact**: CRITICAL - Prevents UI flashing and maintains user context

**Tags**: loading, rendering, ux, hooks

# Keep components rendering during loading states

**Impact**: CRITICAL - Early returns during loading cause UI flashing and poor user experience

@osdk/react hooks maintain data while reloading invalidated data. Using early returns for loading states causes the entire component to unmount and remount, resulting in jarring UI flashes and loss of user context.

## Incorrect

```tsx
import { useOsdkObject } from "@osdk/react/experimental";

function TodoDetail({ id }: { id: string }) {
  const { data, isLoading, error } = useOsdkObject(Todo, id);

  // Anti-pattern: Early return causes UI to flash
  if (isLoading) return <LoadingMessage />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
```

**Why this is wrong**:
- Component completely unmounts during reloads
- Previous data is hidden even though it's still available
- Causes jarring UI flashes when data revalidates
- User loses context and scroll position
- @osdk/react hooks may have stale data that's still useful to show

## Correct

```tsx
import { useOsdkObject } from "@osdk/react/experimental";

function TodoDetail({ id }: { id: string }) {
  const { data, isLoading, error } = useOsdkObject(Todo, id);

  return (
    <div>
      {isLoading && (
        <div className="loading-indicator">
          <Spinner size="small" /> Refreshing...
        </div>
      )}
      {error && (
        <Alert variant="error">
          Failed to load: {error.message}
        </Alert>
      )}
      {data && (
        <>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </>
      )}
      {!data && !isLoading && (
        <EmptyState message="No todo found" />
      )}
    </div>
  );
}
```

**Why this is better**:
- Component stays mounted through all states
- Shows loading indicator while keeping existing data visible
- Gracefully handles errors without destroying the UI
- Provides better user experience during revalidation
- Takes advantage of @osdk/react's ability to show stale data while loading fresh data

## References

- [React hooks documentation](../../../docs/react/getting-started.md)
- [OSDK loading patterns](../../../docs/react/querying-data.md)

---

### Never conditionally call React hooks

**Impact**: CRITICAL - Prevents React runtime errors and unpredictable behavior

**Tags**: hooks, rules-of-hooks, react, errors

# Never conditionally call React hooks

**Impact**: CRITICAL - Conditional hook calls violate React's Rules of Hooks and cause crashes

React requires hooks to be called in the same order on every render. Conditionally calling hooks breaks React's internal state management and leads to runtime errors or unpredictable behavior.

## Incorrect

```tsx
import { useOsdkObject } from "@osdk/react/experimental";

function EmployeeProfile({ employeeId }: { employeeId?: string }) {
  // WRONG: Conditional hook call
  if (!employeeId) {
    return <EmptyState />;
  }

  const { data } = useOsdkObject(Employee, employeeId);

  return <div>{data?.name}</div>;
}
```

**Why this is wrong**:
- Violates React's Rules of Hooks
- Causes "Rendered fewer hooks than expected" error
- Breaks React's state tracking between renders
- Results in unpredictable behavior or crashes
- Makes component unreliable

## Correct

```tsx
import { useOsdkObject } from "@osdk/react/experimental";

function EmployeeProfile({ employeeId }: { employeeId?: string }) {
  // Correct: Always call the hook
  const { data } = useOsdkObject(
    Employee,
    employeeId ?? "" // Provide fallback value
  );

  if (!employeeId) {
    return <EmptyState />;
  }

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
        </div>
      ) : (
        <LoadingMessage />
      )}
    </div>
  );
}
```

**Why this is better**:
- Hooks are always called in the same order
- Follows React's Rules of Hooks
- Component is reliable and predictable
- Early returns happen AFTER all hooks are called
- Conditional logic is handled in JSX or with conditional values

## Alternative: Extract to separate component

```tsx
function EmployeeProfile({ employeeId }: { employeeId?: string }) {
  if (!employeeId) {
    return <EmptyState />;
  }

  return <EmployeeProfileContent employeeId={employeeId} />;
}

function EmployeeProfileContent({ employeeId }: { employeeId: string }) {
  // Now the hook is always called when this component renders
  const { data } = useOsdkObject(Employee, employeeId);

  return <div>{data?.name}</div>;
}
```

## References

- [React Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
- [OSDK React hooks](../../../docs/react/getting-started.md)

---

## HIGH Impact Patterns

### Never use 'any' without explicit user permission

**Impact**: HIGH - Maintains type safety and prevents runtime errors

**Tags**: typescript, types, safety, any

# Never use 'any' without explicit user permission

**Impact**: HIGH - Using `any` defeats TypeScript's type system and hides bugs

The `any` type completely disables type checking, allowing any operation without compiler errors. This defeats the purpose of TypeScript and can hide serious bugs that would otherwise be caught at compile time.

## Incorrect

```tsx
import { useOsdkObject } from "@osdk/react/experimental";
import { Employee } from "@myapp/sdk";

function EmployeeProfile({ id }: { id: string }) {
  const { data } = useOsdkObject(Employee, id);

  // Anti-pattern: Using 'any' type
  const formatEmployee = (employee: any) => {
    return {
      fullName: employee.firstName + " " + employee.lastName, // Typo not caught
      role: employee.position.toUpperCase(), // Could be undefined
    };
  };

  return <div>{data && formatEmployee(data)}</div>;
}
```

**Why this is wrong**:
- Disables all type checking
- Property typos not caught (`firstName` might not exist)
- Null/undefined errors not prevented
- No autocomplete in IDE
- Breaks refactoring tools
- Makes code harder to understand

## Correct

```tsx
import { useOsdkObject } from "@osdk/react/experimental";
import { Employee } from "@myapp/sdk";

function EmployeeProfile({ id }: { id: string }) {
  const { data } = useOsdkObject(Employee, id);

  // Correct: Use proper types from OSDK
  const formatEmployee = (employee: Employee) => {
    return {
      // Type-safe property access
      fullName: `${employee.name} ${employee.lastName}`,
      // Compiler catches if 'position' doesn't exist
      role: employee.position?.toUpperCase() ?? "Unknown",
    };
  };

  return <div>{data && formatEmployee(data)}</div>;
}
```

**Why this is better**:
- Full type safety and autocomplete
- Compiler catches property access errors
- Null/undefined handling is required
- Refactoring tools work correctly
- Self-documenting code
- IDE shows available properties

## When you think you need 'any'

If you think you need `any`, you probably need one of these instead:

### Use `unknown` for truly dynamic values

```tsx
// For data from external sources
function parseApiResponse(response: unknown) {
  // Must validate before using
  if (
    typeof response === "object" &&
    response !== null &&
    "data" in response
  ) {
    return response.data;
  }
  throw new Error("Invalid response");
}
```

### Use generics for flexible types

```tsx
// Generic function that preserves type information
function useOptionalObject<T>(
  objectType: OsdkObjectType<T>,
  id: string | undefined,
) {
  return useOsdkObject(objectType, id ?? "");
}
```

### Use union types for multiple possibilities

```tsx
// When value can be one of several types
type ApiResponse = Employee | Office | { error: string };

function handleResponse(response: ApiResponse) {
  if ("error" in response) {
    // Type narrowing works
    console.error(response.error);
  }
}
```

## Exception: Ask the user first

If you genuinely need `any` for a valid reason (integrating with untyped JS library, complex type inference issue), **ask the user for permission** with an explanation:

```
"I need to use `any` here because [specific reason]. Is that acceptable?"
```

## References

- [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)
- [OSDK type system](../../../docs/guides/typescript-patterns.md)
- [unknown vs any](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)

---

### Understand that OSDK hooks may have data while loading

**Impact**: HIGH - Enables smooth UX by showing stale data during revalidation

**Tags**: loading, hooks, caching, ux, revalidation

# Understand that OSDK hooks may have data while loading

**Impact**: HIGH - OSDK hooks can have cached data available even when isLoading is true

Unlike traditional data fetching libraries, @osdk/react hooks maintain previously fetched data in cache and make it available while revalidating. This means `isLoading: true` doesn't mean `data === undefined` - you may have stale data that's being refreshed.

## Incorrect

```tsx
import { useOsdkObject } from "@osdk/react/experimental";
import { Employee } from "@myapp/sdk";

function EmployeeProfile({ id }: { id: string }) {
  const { data, isLoading } = useOsdkObject(Employee, id);

  // Anti-pattern: Assuming no data when loading
  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}
```

**Why this is wrong**:
- Hides perfectly good cached data during revalidation
- Creates jarring full-screen loader every time data refreshes
- Poor user experience - user loses context
- Wastes the benefits of OSDK's caching system
- Treats revalidation the same as initial load

## Correct

```tsx
import { useOsdkObject } from "@osdk/react/experimental";
import { Employee } from "@myapp/sdk";

function EmployeeProfile({ id }: { id: string }) {
  const { data, isLoading, error } = useOsdkObject(Employee, id);

  return (
    <div className="profile">
      {/* Small loading indicator in corner during revalidation */}
      {isLoading && (
        <div className="refresh-indicator">
          <Spinner size="xs" />
        </div>
      )}

      {/* Show cached data even while revalidating */}
      {data ? (
        <div className={isLoading ? "refreshing" : ""}>
          <h1>{data.name}</h1>
          <p>{data.email}</p>
          <p>{data.department}</p>
        </div>
      ) : (
        // Only show full loader when no data exists
        <div className="initial-loader">
          <Spinner size="lg" />
          <p>Loading employee data...</p>
        </div>
      )}

      {error && (
        <Alert variant="error">
          Failed to refresh: {error.message}
        </Alert>
      )}
    </div>
  );
}
```

**Why this is better**:
- Shows cached data immediately while fresh data loads
- Provides subtle loading indicator during revalidation
- Smooth user experience with no jarring transitions
- Takes full advantage of OSDK's caching
- Distinguishes between initial load and revalidation
- User maintains context and can continue interacting

## Pattern: Distinguish initial load from revalidation

```tsx
function EmployeeList() {
  const { data, isLoading } = useOsdkObjects(Employee);

  const isInitialLoad = isLoading && !data;
  const isRevalidating = isLoading && data;

  return (
    <div>
      {isRevalidating && (
        <div className="refresh-banner">
          Refreshing data...
        </div>
      )}

      {data ? (
        <EmployeeTable
          employees={data}
          dimmed={isRevalidating}
        />
      ) : isInitialLoad ? (
        <LoadingSkeleton />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
```

## When this matters most

This pattern is especially important for:
- **Data that updates frequently** - users see old data while new data loads
- **Slow network connections** - cached data keeps UI responsive
- **Search/filter operations** - show previous results while new query runs
- **Navigation** - returning to a page shows cached data instantly
- **Real-time updates** - smooth transitions when data changes

## References

- [OSDK caching behavior](../../../docs/react/caching.md)
- [Loading state patterns](../../../docs/react/querying-data.md)
- [useOsdkObject API](../../../docs/react/api.md#useosdkobject)

---

### Use useOsdkAction for calling actions

**Impact**: HIGH - Ensures proper action handling and state management

**Tags**: actions, hooks, mutations, state

# Use useOsdkAction for calling actions

**Impact**: HIGH - Proper action invocation ensures state updates and error handling

OSDK actions should be invoked through the `useOsdkAction` hook, which provides proper error handling, loading states, and integration with OSDK's caching system.

## Incorrect

```tsx
import { modifyEmployee } from "@myapp/sdk";

function UpdateEmployeeButton({ employee, newOfficeId }: Props) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    // Anti-pattern: Direct action call without useOsdkAction
    setLoading(true);
    try {
      await modifyEmployee(employee, { primary_office_id: newOfficeId });
      // Manual cache invalidation needed
    } catch (error) {
      // Manual error handling
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      Update Office
    </button>
  );
}
```

**Why this is wrong**:
- Missing integration with OSDK's state management
- Manual loading state tracking is error-prone
- No automatic cache invalidation
- Requires manual error handling
- Loses type safety and validation

## Correct (React hooks)

```tsx
import { useOsdkAction } from "@osdk/react/experimental";
import { modifyEmployee } from "@myapp/sdk";

function UpdateEmployeeButton({ employee, newOfficeId }: Props) {
  const { applyAction, isLoading, error } = useOsdkAction(modifyEmployee);

  const handleClick = async () => {
    await applyAction({
      employee,
      primary_office_id: newOfficeId,
    });
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Update Office
      </button>
      {error && <ErrorMessage error={error} />}
    </div>
  );
}
```

**Why this is better**:
- Automatic loading state management
- Built-in error handling
- Type-safe action parameters
- Automatic cache invalidation
- Optimistic updates support
- Consistent patterns across the application

## Alternative: Direct client usage

For non-React contexts or when hooks aren't available:

```tsx
import { $, modifyEmployee } from "@myapp/sdk";

async function updateEmployeeOffice(employee: Employee, officeId: string) {
  // Direct client usage outside React components
  const result = await $(modifyEmployee).applyAction({
    employee,
    primary_office_id: officeId,
  });

  return result;
}
```

**When to use direct client**:
- Outside React components
- Server-side code
- Utility functions
- Test code

## References

- [OSDK Actions documentation](../../../docs/react/actions.md)
- [useOsdkAction API](../../../docs/react/api.md#useosdkaction)

---

## MEDIUM Impact Patterns

### Put components in their own files

**Impact**: MEDIUM - Improves code organization and maintainability

**Tags**: components, organization, structure, maintainability

# Put components in their own files

**Impact**: MEDIUM - Proper file organization improves maintainability and debugging

Each component should live in its own file rather than being defined inline or nested within other component files. This improves code organization, enables better hot module reloading, and makes components easier to test.

## Incorrect

```tsx
// EmployeeDashboard.tsx
import { useOsdkObjects } from "@osdk/react/experimental";
import { Employee } from "@myapp/sdk";

export function EmployeeDashboard() {
  const { data: employees } = useOsdkObjects(Employee);

  // Anti-pattern: Inline component definition
  const EmployeeCard = ({ employee }) => (
    <div className="card">
      <h3>{employee.name}</h3>
      <p>{employee.email}</p>
    </div>
  );

  return (
    <div>
      <h1>Employees</h1>
      {employees?.map(emp => (
        <EmployeeCard key={emp.$primaryKey} employee={emp} />
      ))}
    </div>
  );
}
```

**Why this is wrong**:
- Creates a new component instance on every render
- Breaks React DevTools component tree
- Makes testing individual components difficult
- Hurts hot module reloading
- Reduces code reusability
- Can cause performance issues with hooks

## Correct

```tsx
// EmployeeDashboard.tsx
import { useOsdkObjects } from "@osdk/react/experimental";
import { Employee } from "@myapp/sdk";
import { EmployeeCard } from "./EmployeeCard";

export function EmployeeDashboard() {
  const { data: employees } = useOsdkObjects(Employee);

  return (
    <div>
      <h1>Employees</h1>
      {employees?.map(emp => (
        <EmployeeCard key={emp.$primaryKey} employee={emp} />
      ))}
    </div>
  );
}
```

```tsx
// EmployeeCard.tsx
import type { Employee } from "@myapp/sdk";

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div className="card">
      <h3>{employee.name}</h3>
      <p>{employee.email}</p>
    </div>
  );
}
```

**Why this is better**:
- Component identity is stable across renders
- Better React DevTools experience
- Easier to test in isolation
- Can be reused across the application
- Proper TypeScript types
- Hot module reloading works correctly
- Clearer component boundaries

## File naming conventions

```
src/
  components/
    EmployeeDashboard/
      EmployeeDashboard.tsx       # Main component
      EmployeeCard.tsx            # Child component
      EmployeeDashboard.test.tsx  # Tests
      index.ts                    # Re-exports
```

## References

- [React component composition](https://react.dev/learn/passing-props-to-a-component)
- [TypeScript component patterns](../../../docs/guides/typescript-patterns.md)

---

