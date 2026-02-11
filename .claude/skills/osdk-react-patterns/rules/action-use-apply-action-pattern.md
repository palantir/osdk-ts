---
title: Use useOsdkAction for calling actions
impact: HIGH
impactDescription: Ensures proper action handling and state management
tags: actions, hooks, mutations, state
---

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
import { useState } from "react";

function UpdateEmployeeButton({ employee, newOfficeId }: Props) {
  const { applyAction, isLoading, error } = useOsdkAction(modifyEmployee);
  const [success, setSuccess] = useState(false);

  const handleClick = async () => {
    try {
      // applyAction will throw on error
      await applyAction({
        employee,
        primary_office_id: newOfficeId,
      });
      // Success - show feedback
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      // Error is available in the 'error' state
      // Additional error handling can be done here if needed
      console.error("Action failed:", err);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "Updating..." : "Update Office"}
      </button>
      {error && (
        <Alert variant="error">
          Failed to update: {error.message}
        </Alert>
      )}
      {success && (
        <Alert variant="success">
          Office updated successfully!
        </Alert>
      )}
    </div>
  );
}
```

**Why this is better**:
- Automatic loading state management
- Built-in error handling (errors available in `error` state)
- `applyAction` throws on error, enabling try/catch error handling
- Type-safe action parameters
- Automatic cache invalidation
- Optimistic updates support
- Consistent patterns across the application
- Success feedback informs users of completed actions

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
