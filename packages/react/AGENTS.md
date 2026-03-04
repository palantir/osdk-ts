# @osdk/react

## Rules

1. **Use `OsdkProvider2`**, not `OsdkProvider`. All modern hooks require it.
2. **Import from `@osdk/react/experimental`**, not `@osdk/react`. Main entry only has legacy hooks.
3. **Never conditionally call hooks.** Use the `enabled` option instead.
4. **Keep rendering during loading.** No early returns like `if (isLoading) return <Spinner />`. Show loading indicators alongside existing data to prevent UI flashing. Exception: `if (!data && isLoading)` is acceptable for initial load.
5. **`useOsdkObject` `enabled` is positional**, not in an options object: `useOsdkObject(Type, id, false)`.

## Exports

**Stable** (`@osdk/react`): `OsdkProvider` (legacy), `useOsdkClient`, `useOsdkMetadata`

**Experimental** (`@osdk/react/experimental`): `OsdkProvider2`, `useOsdkObjects`, `useOsdkObject`, `useOsdkAction`, `useLinks`, `useObjectSet`, `useOsdkAggregation`, `useOsdkFunction`, `useDebouncedCallback`, `useCurrentFoundryUser`, `useFoundryUser`, `useFoundryUsersList`

## Hook Options

| Hook                 | Key Options                                                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `useOsdkObjects`     | `where`, `orderBy`, `pageSize`, `withProperties`, `enabled`, `autoFetchMore`, `dedupeIntervalMs`, `streamUpdates`, `intersectWith`, `pivotTo` |
| `useObjectSet`       | Same as above plus `union`, `intersect`, `subtract`. Use when you need set operations.                                                        |
| `useOsdkObject`      | `enabled` is **positional** (2nd param for instance, 3rd for type+key)                                                                        |
| `useLinks`           | `where`, `pageSize`, `enabled`, `mode` (`"force"` / `"offline"`), `dedupeIntervalMs`. Accepts single object or array.                         |
| `useOsdkAction`      | Returns `applyAction`, `validateAction`, `isPending`, `error`, `validationResult`. Pass `$optimisticUpdate` with `$` prefix in action params. |
| `useOsdkAggregation` | `where`, `aggregate: { $groupBy, $select }`. Metrics: `$count`, `sum`, `avg`, `min`, `max`, `exactDistinct`, `approximateDistinct`.           |
| `useOsdkFunction`    | `params`, `dependsOn` (object types), `dependsOnObjects` (instances), `enabled`, `dedupeIntervalMs`                                           |

## Text Search Filters

`$startsWith`, `$containsAnyTerm`, `$containsAllTerms`, `$containsAllTermsInOrder`. All support `{ term, fuzzySearch: true }`.

## useOsdkObjects vs useObjectSet

Use `useOsdkObjects` by default (more optimized). Use `useObjectSet` only when you need `union`/`intersect`/`subtract` set operations.

## Cache

The `ObservableClient` maintains a normalized cache. Objects update automatically after actions. For manual invalidation: `observableClient.invalidateObjects()`, `.invalidateObjectType()`, `.invalidateFunction()`, `.invalidateAll()`.

## Anti-Patterns

```tsx
// WRONG: conditional hook
if (x) { useOsdkObjects(Todo); }
// CORRECT: use enabled
useOsdkObjects(Todo, { enabled: x });

// WRONG: early return
if (isLoading) return <Spinner />;
// CORRECT: render together
<div>{isLoading && <Spinner />}{data?.map(...)}</div>

// WRONG: import from main entry
import { useOsdkObjects } from "@osdk/react";
// CORRECT
import { useOsdkObjects } from "@osdk/react/experimental";

// WRONG: useOsdkObject enabled in options
useOsdkObject(Employee, id, { enabled: false });
// CORRECT: positional
useOsdkObject(Employee, id, false);
```
