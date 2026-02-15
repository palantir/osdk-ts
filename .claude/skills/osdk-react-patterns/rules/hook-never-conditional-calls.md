---
title: Never conditionally call React hooks
impact: CRITICAL
impactDescription: Prevents React runtime errors and unpredictable behavior
tags: hooks, rules-of-hooks, react, errors
---

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
