---
title: Put components in their own files
impact: MEDIUM
impactDescription: Improves code organization and maintainability
tags: components, organization, structure, maintainability
---

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
