# @osdk/react

## Installing

**Default: `pnpm add @osdk/react@latest`** — use a prerelease only if you specifically need an unreleased feature. Everything below is for when you are NOT on the latest stable.

Must install `@osdk/react` AND `@osdk/client` AND `@osdk/api` together, and versions must line up tighter than the declared peer ranges. `@osdk/react` imports unstable APIs from `@osdk/client/unstable-do-not-use` that move between releases without deprecation.

- **Stable `@osdk/react`** (e.g. `0.14.x`) → latest stable `@osdk/client` and `@osdk/api` (`2.x`).
- **Prerelease `@osdk/react`** (e.g. `0.10.0-beta.15`) → MUST use prerelease `@osdk/client` and `@osdk/api` from the same line. Stable releases will break.

To find the exact compatible `@osdk/client` and `@osdk/api` for any installed `@osdk/react`:

1. Open `node_modules/@osdk/react/CHANGELOG.md`
2. Find the heading matching your installed `@osdk/react` version
3. If that entry has an `Updated dependencies` section, install the exact `@osdk/client@X.Y.Z` AND `@osdk/api@X.Y.Z` it lists
4. If it does NOT, walk backwards to the most recent prior entry that does, and use those versions

**Worked example** — installed `@osdk/react@0.10.0-beta.15`:

- `0.10.0-beta.15` has no `Updated dependencies` section → walk back
- `0.10.0-beta.14` lists `@osdk/client@2.8.0-beta.29` and `@osdk/api@2.8.0-beta.29`
- Run: `pnpm add @osdk/client@2.8.0-beta.29 @osdk/api@2.8.0-beta.29`

**Optional peers** (install only if you import from the matching surface):

- `@osdk/foundry.admin` + `@osdk/foundry.core`: required ONLY for any hook from `@osdk/react/experimental/admin`. Otherwise omit.

## Install-time errors

| Error                                                                                      | Cause                                                                                                                                                                             | Fix                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"<name>" is not exported by @osdk/client/.../unstable-do-not-use.js` (or `@osdk/api/...`) | `@osdk/client` or `@osdk/api` is on a different release line than the one `@osdk/react` was built against — usually a beta `@osdk/react` paired with stable peers (or vice versa) | Do NOT delete the import or downgrade `@osdk/react` silently. Follow the CHANGELOG recipe in `## Installing` to find the exact `@osdk/client` and `@osdk/api` versions, then `pnpm add @osdk/client@<version> @osdk/api@<version>`. |
| `Rollup failed to resolve import "@osdk/foundry.admin"` (or `@osdk/foundry.core`)          | Imported from `@osdk/react/experimental/admin` without installing the optional peers                                                                                              | Install `@osdk/foundry.admin` + `@osdk/foundry.core`, OR stop importing from `/experimental/admin`.                                                                                                                                 |
| pnpm/npm peer warning about `@osdk/client` or `@osdk/api` range                            | Declared peer ranges are deliberately broad; prerelease coupling is tighter than the ranges express                                                                               | Follow the CHANGELOG recipe; pin to the exact `@osdk/client` and `@osdk/api` versions.                                                                                                                                              |

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

- `OsdkProvider2` - Modern provider (use this)
- `useOsdkObjects` - Query lists of objects
- `useOsdkObject` - Query single object by type+key or instance
- `useOsdkAction` - Execute and validate actions
- `useLinks` - Navigate object relationships
- `useObjectSet` - Advanced set operations (union, intersect, subtract, pivot)
- `useOsdkAggregation` - Server-side aggregations with groupBy/select
- `useOsdkClient`, `useOsdkMetadata` - Also available from experimental

**Experimental Admin** (`@osdk/react/experimental/admin`):

- `useCurrentFoundryUser`, `useFoundryUser`, `useFoundryUsersList` - Platform APIs (requires `@osdk/foundry.admin`)

## Correct Patterns

| Hook                 | Key Options                                                                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `useOsdkObjects`     | `where`, `orderBy`, `pageSize`, `withProperties`, `enabled`, `autoFetchMore`, `dedupeIntervalMs`, `streamUpdates`, `intersectWith`, `pivotTo` |
| `useObjectSet`       | Same as above plus `union`, `intersect`, `subtract`. Use when you need set operations.                                                        |
| `useOsdkObject`      | `enabled` is **positional** (2nd param for instance, 3rd for type+key)                                                                        |
| `useLinks`           | `where`, `pageSize`, `enabled`, `mode` (`"force"` / `"offline"`), `dedupeIntervalMs`. Accepts single object or array.                         |
| `useOsdkAction`      | Returns `applyAction`, `validateAction`, `isPending`, `error`, `validationResult`. Pass `$optimisticUpdate` with `$` prefix in action params. |
| `useOsdkAggregation` | `where`, `aggregate: { $groupBy, $select }`, `objectSet`, `enabled`, `withProperties`, `intersectWith`, `dedupeIntervalMs`. Metrics: `$count`, `sum`, `avg`, `min`, `max`, `exactDistinct`, `approximateDistinct`. |
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
