# Add logDebug utility method in BaseCollectionQuery

## Objective
Create a common logging utility method in BaseCollectionQuery to standardize debug logging across all collection queries.

## Current State
Currently, both ListQuery and SpecificLinkQuery have similar debug logging patterns:

```typescript
if (process.env.NODE_ENV !== "production") {
  this.logger?.child({ methodName: "methodName" }).debug(message, data);
}
```

This pattern is duplicated throughout the codebase, leading to inconsistencies and duplication.

## Implementation Plan

1. Add a protected `logDebug` helper method in `BaseCollectionQuery.ts`:

```typescript
/**
 * Helper method for consistent debug logging across collection queries
 * @param methodName - The method name to add to the log context
 * @param message - The message to log
 * @param data - Optional data to include in the log
 */
protected logDebug(methodName: string, message: string, data?: any): void {
  if (process.env.NODE_ENV !== "production") {
    this.logger?.child({ methodName }).debug(message, data);
  }
}
```

2. Update logging calls in ListQuery and SpecificLinkQuery to use this new method:

For example, in ListQuery.ts:
```typescript
// Before:
if (process.env.NODE_ENV !== "production") {
  this.logger?.child({ methodName: "updateList" }).debug(
    `{status: ${status}}`,
    JSON.stringify(objectCacheKeys, null, 2),
  );
}

// After:
this.logDebug("updateList", 
  `{status: ${status}}`,
  JSON.stringify(objectCacheKeys, null, 2)
);
```

3. Do the same for SpecificLinkQuery.ts

## Expected Benefits
- Consistent logging format across the codebase
- Reduced code duplication
- Easier to update logging behavior in the future
- More readable code with less boilerplate

## Acceptance Criteria
- `logDebug` method is added to BaseCollectionQuery
- ListQuery uses the new method
- SpecificLinkQuery uses the new method
- No behavior changes in logging output
- All tests continue to pass