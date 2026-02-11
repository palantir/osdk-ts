---
title: Keep components rendering during loading states
impact: CRITICAL
impactDescription: Prevents UI flashing and maintains user context
tags: loading, rendering, ux, hooks
---

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
