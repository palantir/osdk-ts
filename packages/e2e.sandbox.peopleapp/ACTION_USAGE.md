# Using OSDK Actions

This guide provides examples and best practices for using actions with the OSDK React library.

## Two Approaches for Using Actions

There are two main ways to use actions in your app:

### 1. Using the `useOsdkAction` hook (Recommended)

The `useOsdkAction` hook is the recommended approach for most use cases. It provides built-in state management, error handling, and support for optimistic updates.

```tsx
import { useOsdkAction } from "@osdk/react/experimental";
import { modifyEmployee } from "../generatedNoCheck2/index.js";

function AssignOfficeButton({ employee }) {
  // Get the action handler from the hook
  const { applyAction, isPending, error } = useOsdkAction(modifyEmployee);

  const handleAssign = React.useCallback(() => {
    applyAction({
      employee,
      primary_office_id: "office-123",
      $optimisticUpdate: (b) => {
        // Optional optimistic UI update
        b.updateObject(Employee, employee.$primaryKey, {});
      },
    });
  }, [applyAction, employee]);

  return (
    <>
      <button onClick={handleAssign} disabled={isPending}>
        {isPending ? "Assigning..." : "Assign Office"}
      </button>
      {error && <div className="error">{error.message}</div>}
    </>
  );
}
```

Benefits:

- Manages loading, error, and success states
- Provides optimistic updates
- Handles action validation
- Integrates with React's render cycles

### 2. Using the action directly with the client

For simpler cases or when you need more control, you can call the action directly using the client:

```tsx
import { useState } from "react";
import { $ } from "../foundryClient.js";
import { modifyEmployee } from "../generatedNoCheck2/index.js";

function AssignOfficeButton({ employee }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAssign = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await $(modifyEmployee).applyAction({
        employee,
        primary_office_id: "office-123",
      });

      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={handleAssign} disabled={isLoading}>
        {isLoading ? "Assigning..." : "Assign Office"}
      </button>
      {error && <div className="error">{error.message}</div>}
    </>
  );
}
```

## Important Best Practices

1. **Never conditionally call hooks**: Ensure that all React hooks, including `useOsdkAction`, are called at the top level of your component and are not wrapped in conditions.

   ```tsx
   // CORRECT - hook is always called
   function MyComponent({ employee }) {
     const { applyAction } = useOsdkAction(modifyEmployee);

     if (!employee) {
       return null;
     }

     // Rest of component...
   }

   // INCORRECT - hook is conditionally called
   function MyComponent({ employee }) {
     if (!employee) {
       return null;
     }

     const { applyAction } = useOsdkAction(modifyEmployee); // This will cause errors

     // Rest of component...
   }
   ```

2. **Handling null values**: When working with nullable parameters, use `undefined` rather than JavaScript `null`.

   ```tsx
   // CORRECT
   const primary_office_id = selectedOfficeId === null
     ? undefined // API will treat as null
     : selectedOfficeId;

   await $(modifyEmployee).applyAction({
     employee,
     primary_office_id,
   });

   // INCORRECT - will cause type errors
   await $(modifyEmployee).applyAction({
     employee,
     primary_office_id: null, // This is a JavaScript null, not a OSDK null
   });
   ```

3. **Optimistic updates**: Use optimistic updates to improve the perceived performance of your app.

   ```tsx
   applyAction({
     employee,
     primary_office_id: officeId,
     $optimisticUpdate: (b) => {
       // Update the local cache immediately
       b.updateObject(Employee, employee.$primaryKey, {
         // You can update specific fields if needed
       });
     },
   });
   ```

## Example: Complete Implementation with useOsdkAction

```tsx
import { useOsdkAction } from "@osdk/react/experimental";
import { useCallback, useState } from "react";
import { Employee, modifyEmployee } from "../generatedNoCheck2/index.js";

export function OfficeAssigner({ employee, availableOffices }) {
  const [selectedOfficeId, setSelectedOfficeId] = useState(null);
  const { applyAction, isPending, error, isSuccess } = useOsdkAction(
    modifyEmployee,
  );

  const handleAssign = useCallback(() => {
    // Convert null to undefined for the API
    const primary_office_id = selectedOfficeId === null
      ? undefined
      : selectedOfficeId;

    applyAction({
      employee,
      primary_office_id,
      $optimisticUpdate: (b) => {
        b.updateObject(Employee, employee.$primaryKey, {});
      },
    });
  }, [applyAction, employee, selectedOfficeId]);

  return (
    <div className="office-assigner">
      <select
        value={selectedOfficeId || ""}
        onChange={(e) => setSelectedOfficeId(e.target.value || null)}
        disabled={isPending}
      >
        <option value="">-- No office --</option>
        {availableOffices.map(office => (
          <option key={office.$primaryKey} value={office.$primaryKey}>
            {office.name}
          </option>
        ))}
      </select>

      <button onClick={handleAssign} disabled={isPending}>
        {isPending ? "Assigning..." : "Assign Office"}
      </button>

      {error && (
        <div className="error-message">
          {error.message}
        </div>
      )}

      {isSuccess && (
        <div className="success-message">
          Office successfully assigned!
        </div>
      )}
    </div>
  );
}
```

## Debugging Common Issues

1. **Type errors with null values**: Use `undefined` instead of `null` when working with nullable parameters.

2. **Hook ordering issues**: Ensure hooks are always called at the top level of your component.

3. **State updates after unmounting**: Make sure to handle component unmounting by checking if the component is still mounted before updating state.

4. **Action not found**: Make sure you're importing the action correctly from the generated code.

5. **Objects not updating in the UI**: Make sure you're using optimistic updates correctly and that the object is being accessed through the OSDK hooks (`useOsdkObject` or `useOsdkObjects`).
