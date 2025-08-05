# Fix Deprecated Method Usage

## Objective
Fix the ESLint warnings about using deprecated methods within the codebase by properly implementing the sortCollection method in ListQuery.

## Current State
Currently, the ListQuery class uses its own deprecated `_sortCacheKeys` method within the implementation of `sortCollection`. This is causing ESLint warnings:

```
ListQuery.ts
  111:22  error  `_sortCacheKeys` is deprecated. Use sortCollection instead  @typescript-eslint/no-deprecated
  153:17  error  `_sortCacheKeys` is deprecated. Use sortCollection instead  @typescript-eslint/no-deprecated
```

Additionally, there's a warning about `nextPageToken` never being reassigned:

```
  281:19  warning  'nextPageToken' is never reassigned. Use 'const' instead  prefer-const
```

## Implementation Plan

1. Fix the `sortCollection` implementation in ListQuery to avoid using `_sortCacheKeys`:

```typescript
protected sortCollection(
  objectCacheKeys: ObjectCacheKey[],
  batch: BatchContext,
): ObjectCacheKey[] {
  // Implement sorting directly without using deprecated _sortCacheKeys
  if (Object.keys(this.#orderBy).length > 0) {
    return objectCacheKeys.sort((a, b) => {
      for (const sortFn of this.#sortFns) {
        const ret = sortFn(
          batch.read(a)?.value?.$as(this.#apiName),
          batch.read(b)?.value?.$as(this.#apiName),
        );
        if (ret !== 0) {
          return ret;
        }
      }
      return 0;
    });
  }
  return objectCacheKeys;
}
```

2. Fix the `nextPageToken` warning by using `const` in the destructuring assignment:

```typescript
const { data, nextPageToken } = await this.#objectSet.fetchPage({ ... });
this.nextPageToken = nextPageToken;
```

3. Consider longer-term migration plan for removing the deprecated `_sortCacheKeys` method completely.

## Expected Benefits
- Clean ESLint output with no warnings
- Better code quality
- Proper use of the new APIs that were introduced in the refactoring

## Acceptance Criteria
- No ESLint warnings about deprecated method usage
- No ESLint warnings about `nextPageToken`
- All tests continue to pass
- Sorting functionality remains unchanged