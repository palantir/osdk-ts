---
title: Understand that OSDK hooks may have data while loading
impact: HIGH
impactDescription: Enables smooth UX by showing stale data during revalidation
tags: loading, hooks, caching, ux, revalidation
---

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
