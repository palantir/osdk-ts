# Extract Common Error Handling Patterns

## Objective
Extract and standardize common error handling patterns from ListQuery and SpecificLinkQuery into BaseCollectionQuery.

## Current State
Currently, ListQuery and SpecificLinkQuery have similar error handling patterns in their `fetchPageAndUpdate` methods, but with slight inconsistencies:

- Both handle abort signals at multiple points
- Both catch errors and update the store with error status
- Both have similar logging for errors

## Implementation Plan

1. Add common error handling utility methods to BaseCollectionQuery:

```typescript
/**
 * Utility to check if the operation was aborted
 * Returns true if the signal is aborted
 */
protected isAborted(signal?: AbortSignal): boolean {
  return signal?.aborted === true;
}

/**
 * Standardized error handler for fetch operations
 * Updates the store and logs the error
 */
protected handleFetchError(
  error: unknown,
  signal?: AbortSignal,
  methodName: string = "fetchPageAndUpdate"
): void {
  if (signal?.aborted) {
    return; // Don't report errors for aborted requests
  }

  this.logDebug(methodName, "Error fetching data", error);
  
  // Update store with error status
  this.store.batch({}, (batch) => {
    this.writeToStore({ data: [] }, "error", batch);
  });
}
```

2. Create a template method for fetch operations that handles the common logic:

```typescript
/**
 * Template method for fetch operations with standard error handling
 */
protected async withErrorHandling<T>(
  fetcher: () => Promise<T>,
  signal?: AbortSignal,
  methodName: string = "fetchPageAndUpdate"
): Promise<T | undefined> {
  if (this.isAborted(signal)) {
    return undefined;
  }
  
  try {
    return await fetcher();
  } catch (error) {
    this.handleFetchError(error, signal, methodName);
    return undefined;
  }
}
```

3. Update `fetchPageAndUpdate` implementations in ListQuery and SpecificLinkQuery to use these new methods.

## Expected Benefits
- Consistent error handling across collection queries
- Reduced code duplication
- More readable code with clearer intent
- Easier to update error handling behavior in the future

## Acceptance Criteria
- Error handling utility methods are added to BaseCollectionQuery
- ListQuery and SpecificLinkQuery use these methods
- No behavior changes in error handling
- All tests continue to pass
- Error logs maintain the same level of detail