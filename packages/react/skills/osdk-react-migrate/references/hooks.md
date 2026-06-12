# @osdk/react Hook API Reference

Distilled from `AGENTS.md` and `docs/react/`. Use this for grounding conversion decisions.

## Installation

`pnpm add @osdk/react @osdk/client @osdk/api`. All three packages must use compatible versions — the observable runtime is version-locked across them. See `AGENTS.md` for the CHANGELOG version-matching recipe.

Optional peers (install only if you import from the corresponding surface):

- `@osdk/foundry.admin` + `@osdk/foundry.core`: required for any hook from `@osdk/react/platform-apis`

## Provider

### OsdkProvider

Required at the app root. Every hook reads from it.

```tsx
import { OsdkProvider } from "@osdk/react";
import client from "./client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <App />
  </OsdkProvider>,
);
```

Rule: `OsdkProvider` must wrap the entire app, not just the components that use hooks. Components outside the provider cannot use any `@osdk/react` hook.

## Data hooks

### useOsdkObjects

Retrieve and observe a list of objects. The default hook for list queries.

```tsx
const { data, isLoading, error, fetchMore, hasMore } = useOsdkObjects(Type, options?);
```

Key options: `where`, `orderBy`, `pageSize`, `enabled`, `autoFetchMore`, `streamUpdates`, `intersectWith`, `pivotTo`, `withProperties`, `dedupeIntervalMs`, `rids`, `$select`.

Return values:

- `data` — array (undefined while initially loading)
- `isLoading` — true while fetching (also true during revalidation with existing data)
- `isOptimistic` — true when list order is affected by optimistic updates
- `fetchMore` — load next page (undefined when no more pages)
- `hasMore` — true if more pages exist
- `totalCount` — string; parse with `Number(totalCount)` for arithmetic
- `objectSet` — the transformed ObjectSet; pass to `useObjectSet` or `useOsdkAggregation`
- `refetch` — manually invalidate and refetch
- `error`

### useOsdkObject

Retrieve and observe a single object.

```tsx
// By type + primary key
const { object, isLoading, error } = useOsdkObject(Type, primaryKey, optionsOrEnabled?);

// Track an existing instance
const { object, isLoading, isOptimistic } = useOsdkObject(instance);
```

**`enabled` is positional (third argument), not in an options object:**

```tsx
useOsdkObject(Employee, id, false); // disabled
useOsdkObject(Employee, id, { $select: ["fullName"] }); // options object
```

Return values: `object`, `isLoading`, `isOptimistic`, `error`.

### useLinks

Observe relationships between objects.

```tsx
const { links, isLoading, fetchMore, hasMore } = useLinks(objectOrArray, linkName, options?);
```

Key options: `where`, `pageSize`, `orderBy`, `enabled`, `mode` (`"force"` | `"offline"`), `dedupeIntervalMs`.

Return values: `links`, `isLoading`, `isOptimistic`, `fetchMore`, `hasMore`, `error`.

Accepts a single object instance or an array (loads links from all sources at once).

### useObjectSet

Advanced queries with set operations. Use `useOsdkObjects` by default; reach for this only when you need `union`, `intersect`, or `subtract`.

```tsx
const { data, isLoading, error } = useObjectSet(objectSet, options?);
```

Where `objectSet` is an `ObjectSet` instance: `client(Type)`, or with operations chained.

Key options: `union`, `intersect`, `subtract`, `where`, `withProperties`, `pivotTo`, `orderBy`, `pageSize`, `streamUpdates`, `autoFetchMore`, `enabled`.

**`streamUpdates` and `pivotTo` cannot be combined.**

### useOsdkAggregation

Server-side grouping and aggregation.

```tsx
const { data, isLoading, error } = useOsdkAggregation(Type, {
  aggregate: {
    $select: { $count: "unordered", "salary:avg": "unordered" },
    $groupBy: { department: "exact" },   // optional
  },
  where: { ... },
});
```

`$select` key format: `$count`, `"prop:sum"`, `"prop:avg"`, `"prop:min"`, `"prop:max"`, `"prop:exactDistinct"`, `"prop:approximateDistinct"`.

Return: `data` (single object for non-grouped; array for grouped), `isLoading`, `error`, `refetch`.

### useOsdkFunction / useOsdkFunctions

Execute and observe ontology functions.

```tsx
const { data, isLoading, error, refetch } = useOsdkFunction(fn, {
  params: { n: 5 },
  dependsOn: [Employee], // refetch when any Employee changes
  dependsOnObjects: [employee], // refetch when this specific instance changes
  enabled: true,
  dedupeIntervalMs: 2000,
});
```

Return: `data`, `isLoading`, `error`, `lastUpdated`, `refetch`.

## Action hook

### useOsdkAction

Execute and validate actions.

```tsx
const {
  applyAction,
  validateAction,
  isPending,
  isValidating,
  error,
  validationResult,
  data,
} = useOsdkAction(actionDef);
```

`applyAction` accepts a single args object or an array for batch:

```tsx
applyAction({ employee, primary_office_id });
applyAction([{ employee: emp1, ... }, { employee: emp2, ... }]);
```

Optimistic updates via `$optimisticUpdate` param:

```tsx
applyAction({
  todo,
  isComplete: true,
  $optimisticUpdate: (ou) => {
    ou.updateObject(todo.$clone({ isComplete: true }));
  },
});
```

`error` shape: `{ actionValidation?: ActionValidationError; unknown?: unknown }`.

## Utility hooks

### useOsdkClient

Access the OSDK client directly for use in event handlers or effects.

```tsx
const client = useOsdkClient();
```

### useObservableClient

Access the `ObservableClient` for manual cache invalidation.

```tsx
const observableClient = useObservableClient();
await observableClient.invalidateObjectType(Todo);
await observableClient.invalidateObjects([todo1, todo2]);
await observableClient.invalidateAll();
```

### useDebouncedCallback

Debounce a callback function.

```tsx
const debouncedSave = useDebouncedCallback((value: string) => { ... }, 500);
debouncedSave.cancel();
debouncedSave.flush();
```

## Exports summary

**`@osdk/react`** (main): `OsdkProvider`, `useOsdkObjects`, `useOsdkObject`, `useOsdkAction`, `useLinks`, `useObjectSet`, `useOsdkAggregation`, `useOsdkFunction`, `useOsdkFunctions`, `useStableObjectSet`, `useOsdkClient`, `useObservableClient`, `useOsdkMetadata`, `useRegisterUserAgent`, `useDebouncedCallback`, `registerDevTools`, `getRegisteredDevTools`.

**`@osdk/react/platform-apis`**: `useCurrentFoundryUser`, `useFoundryUser`, `useFoundryUsersList`, `useMarkings`, `useMarkingCategories`, `useUserViewMarkings`, `useCbacBanner`, `useCbacMarkingRestrictions`. Requires `@osdk/foundry.admin` + `@osdk/foundry.core`.

**`@osdk/react/devtools-registry`**: `registerDevTools`, `getRegisteredDevTools`, `DevToolsRegistry`.
