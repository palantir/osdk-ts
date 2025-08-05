# Improve Sorting Infrastructure

## Objective
Create a more sophisticated and reusable sorting infrastructure that both ListQuery and SpecificLinkQuery can leverage.

## Current State
Currently, ListQuery has a detailed sorting implementation with support for multiple sort fields and directions, while SpecificLinkQuery has a trivial implementation that doesn't actually sort the results.

## Implementation Plan

1. Create a sorting strategy interface in a new file (e.g., `SortingStrategy.ts`):

```typescript
/**
 * Strategy interface for collection sorting
 */
export interface SortingStrategy {
  /**
   * Sort an array of object cache keys
   * @param objectCacheKeys - Keys to sort
   * @param batch - Batch context for reading objects
   * @returns Sorted array of keys
   */
  sortCacheKeys(
    objectCacheKeys: ObjectCacheKey[],
    batch: BatchContext,
  ): ObjectCacheKey[];
}
```

2. Create implementations of this interface:

```typescript
/**
 * No-operation sorting strategy that preserves original order
 */
export class NoOpSortingStrategy implements SortingStrategy {
  sortCacheKeys(
    objectCacheKeys: ObjectCacheKey[],
    _batch: BatchContext,
  ): ObjectCacheKey[] {
    return objectCacheKeys;
  }
}

/**
 * Sorting strategy for OrderBy clauses
 */
export class OrderBySortingStrategy implements SortingStrategy {
  constructor(
    private readonly apiName: string,
    private readonly orderBy: Canonical<Record<string, "asc" | "desc" | undefined>>,
  ) {}

  sortCacheKeys(
    objectCacheKeys: ObjectCacheKey[],
    batch: BatchContext,
  ): ObjectCacheKey[] {
    if (Object.keys(this.orderBy).length === 0) {
      return objectCacheKeys;
    }
    
    const sortFns = createOrderBySortFns(this.orderBy);
    
    return objectCacheKeys.sort((a, b) => {
      for (const sortFn of sortFns) {
        const ret = sortFn(
          batch.read(a)?.value?.$as(this.apiName),
          batch.read(b)?.value?.$as(this.apiName),
        );
        if (ret !== 0) {
          return ret;
        }
      }
      return 0;
    });
  }
}
```

3. Update BaseCollectionQuery to use strategies:

```typescript
/**
 * The sorting strategy to use for this collection
 * @protected
 */
protected readonly sortingStrategy: SortingStrategy;

// Update sortCollection to use the strategy
protected sortCollection(
  objectCacheKeys: ObjectCacheKey[],
  batch: BatchContext,
): ObjectCacheKey[] {
  return this.sortingStrategy.sortCacheKeys(objectCacheKeys, batch);
}
```

4. Update ListQuery and SpecificLinkQuery constructors to initialize the appropriate strategy.

## Expected Benefits
- Clearer separation of concerns
- Easier to add new sorting algorithms
- More reusable sorting logic
- No duplication between the two collection query types

## Acceptance Criteria
- Sorting strategy interface and implementations created
- BaseCollectionQuery updated to use sorting strategies
- ListQuery and SpecificLinkQuery properly initialize and use strategies
- All tests continue to pass
- Sorting behavior remains unchanged
- No deprecation warnings