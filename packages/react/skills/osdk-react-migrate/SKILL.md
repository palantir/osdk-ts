# osdk-react-migrate

Perform the adoption migration: convert OSDK-backed data fetching (raw client calls in `useEffect`, TanStack Query, SWR) to `@osdk/react` hooks. Only OSDK-backed call sites are converted — non-OSDK fetches stay in their existing library. Coexistence is an endorsed end state.

## Load context before starting

Read all three reference files before touching any code:

- `references/hooks.md` — complete `@osdk/react` hook API
- `references/patterns.md` — correct usage patterns and anti-patterns to enforce
- `references/migration-guide.md` — before/after examples for each migration type

## Step 0 — Guardrail (codemod bridge)

Before doing any judgment work, check for deprecated API usage:

```sh
grep -rn "from ['\"]@osdk/react/experimental" src/
```

**If any matches are found:** stop immediately and tell the user:

> Your codebase imports from `@osdk/react/experimental`, which is the deprecated 0.x API. Run the rename migration first:
>
> ```sh
> npx @osdk/codemod react/experimental-to-ga <path>
> ```
>
> Re-run this skill once the rename migration is complete.

**If no matches:** proceed to Step 1.

## Step 1 — Discover OSDK-backed call sites

Search for patterns that indicate OSDK data fetching:

```sh
# useEffect patterns with client
grep -rn "client\.objects\|\.fetchPage\|\.fetchOne\|\.fetchPageWithErrors" src/

# TanStack Query hooks
grep -rn "useQuery\|useMutation\|useInfiniteQuery" src/ | grep -v node_modules

# SWR hooks
grep -rn "useSWR\|useSWRImmutable" src/ | grep -v node_modules
```

For each result, open the file and determine whether the fetch is OSDK-backed (calls into a generated SDK object type or action) or not. Only OSDK-backed sites are migrated. Non-OSDK fetches — external REST APIs, GraphQL, custom backends — stay in their current library.

## Step 2 — Convert each call site

Use `references/migration-guide.md` for concrete before/after examples. The mapping:

| Current pattern                              | Target hook                         |
| -------------------------------------------- | ----------------------------------- |
| `useEffect` + `client(Type).fetchPage()`     | `useOsdkObjects`                    |
| `useEffect` + `client(Type).fetchOne(id)`    | `useOsdkObject`                     |
| `useEffect` + link traversal                 | `useLinks`                          |
| `useQuery` wrapping an OSDK object fetch     | `useOsdkObjects` or `useOsdkObject` |
| `useMutation` wrapping an OSDK action        | `useOsdkAction`                     |
| `useSWR` wrapping an OSDK object fetch       | `useOsdkObjects` or `useOsdkObject` |
| `useQuery` wrapping an OSDK aggregation      | `useOsdkAggregation`                |
| `useQuery` wrapping an OSDK function call    | `useOsdkFunction`                   |
| Complex `ObjectSet` union/intersect/subtract | `useObjectSet`                      |

After converting a site:

- Remove the `useState`/`useEffect` block (or `useQuery`/`useSWR` call) that was replaced
- Remove stale imports that are no longer referenced (`useEffect`, `useState`, `useQuery`, `useMutation`, `useSWR`, etc.)
- Add any missing `@osdk/react` imports for the new hooks

## Step 3 — Flag advanced cache sites (don't force)

Some call sites use cache features that don't have a direct safe equivalent in `@osdk/react`. For these, add a comment and leave the code unchanged:

```tsx
// osdk-react-migrate: manual cache tuning — conversion skipped.
// This site configures staleTime/refetchInterval. @osdk/react manages
// invalidation automatically after actions; if you no longer need manual
// control, remove this comment and convert to useOsdkObjects.
const { data } = useQuery({ ... });
```

Flag (don't force) any site that uses:

- `staleTime`, `cacheTime`, or `gcTime` set to a custom value
- `refetchInterval` or `refetchIntervalInBackground`
- `refetchOnWindowFocus: false` or `refetchOnMount: false`
- TanStack `onMutate` + manual optimistic-update rollback (`onError` with `context`)
- `queryClient.invalidateQueries()` called immediately after the action (the action should drive invalidation; if manual invalidation is present, the developer may have a reason)

## Step 4 — Ensure OsdkProvider is at the app root

```sh
grep -rn "OsdkProvider" src/
```

If not found: locate the app entry point (`main.tsx`, `index.tsx`, or `App.tsx`) and add the provider:

```tsx
import { OsdkProvider } from "@osdk/react";
import client from "./client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <App />
  </OsdkProvider>,
);
```

If already present: skip this step.

## Step 5 — Update imports

Add any missing `@osdk/react` imports for hooks used after conversion. Remove imports that are no longer needed.

```tsx
// Add only what was used in this file
import { useOsdkAction, useOsdkObjects } from "@osdk/react";
```

## Rules to enforce during conversion

See `references/patterns.md` for the full list. The critical invariants:

1. **Never conditionally call hooks.** Use the `enabled` option instead of an `if` guard.
2. **Keep rendering during loading.** Do not use early returns like `if (isLoading) return <Spinner />`. Render loading indicators alongside existing data. Exception: `if (!data && isLoading)` is acceptable for initial load.
3. **`useOsdkObject` `enabled` is positional**, not in an options object. Third argument for type+key form: `useOsdkObject(Type, id, false)`.
4. **Prefer `useOsdkObjects`.** Only use `useObjectSet` when the query needs `union`, `intersect`, or `subtract` set operations.

## Summary to report when done

Tell the user:

- How many call sites were converted (by hook type)
- How many were flagged instead of converted (with the reason for each)
- Whether `OsdkProvider` was added or was already present
- Any files where you left a `// osdk-react-migrate: review needed` comment because the conversion intent was unclear
