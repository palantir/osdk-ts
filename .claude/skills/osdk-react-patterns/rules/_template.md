---
title: Rule Name Here
impact: MEDIUM
impactDescription: Optional quantified benefit
tags: tag1, tag2
---

# Rule Name Here

**Impact**: MEDIUM - Optional description of the impact

Brief explanation of why this pattern matters for @osdk/react applications.

## Incorrect

```tsx
// Example showing what NOT to do
import { useOsdkObject } from "@osdk/react/experimental";

function MyComponent() {
  const { data, isLoading } = useOsdkObject(Todo, id);

  // Anti-pattern example
  if (isLoading) return <LoadingMessage />;

  return <div>{data?.title}</div>;
}
```

**Why this is wrong**: Explanation of the problem with this approach.

## Correct

```tsx
// Example showing the recommended pattern
import { useOsdkObject } from "@osdk/react/experimental";

function MyComponent() {
  const { data, isLoading } = useOsdkObject(Todo, id);

  return (
    <div>
      {isLoading && <LoadingIndicator />}
      {data && <TodoItem todo={data} />}
    </div>
  );
}
```

**Why this is better**: Explanation of why this pattern is preferred for @osdk/react.

## References

- [Related documentation](link)
- [OSDK documentation](link)
