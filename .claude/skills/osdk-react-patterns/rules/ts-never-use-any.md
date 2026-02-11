---
title: Never use 'any' without explicit user permission
impact: HIGH
impactDescription: Maintains type safety and prevents runtime errors
tags: typescript, types, safety, any
---

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
