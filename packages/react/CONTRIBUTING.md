# Contributing to @osdk/react

Thanks for your interest in contributing to `@osdk/react`! This package provides the core React hooks for interacting with the Ontology SDK. It is the data-fetching foundation that `@osdk/react-components` builds on top of.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
- [Architecture](#architecture)
- [Hook API Conventions](#hook-api-conventions)
- [Adding a New Hook](#adding-a-new-hook)
- [Cache and Invalidation](#cache-and-invalidation)
- [Testing](#testing)
- [Documentation](#documentation)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Changesets](#changesets)

## Getting Started

### Prerequisites

- **Node.js** — the expected version is pinned in `.nvmrc` at the repo root (run `cat .nvmrc` or check the file directly to see it). [nvm](https://github.com/nvm-sh/nvm) is recommended; if your active Node version doesn't match, run `nvm use` from the repo root to switch.
- **pnpm** as the package manager (do **not** use npm or yarn)

### Repository Access

- Palantir employees can push branches directly to this repository.
- External contributors should [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repo and open pull requests from their fork.

## Development Setup

1. Clone the repository and install dependencies from the monorepo root:
   ```sh
   git clone git@github.com:palantir/osdk-ts.git
   cd osdk-ts
   pnpm install
   ```
2. Verify everything works:
   ```sh
   pnpm turbo typecheck --filter=@osdk/react
   pnpm turbo test --filter=@osdk/react
   ```

## Development Workflow

### Branch Naming

Use the format `[initials]/[short-description]`, e.g. `jd/add-use-osdk-aggregation`.

### Running Commands

```sh
# Type-check
pnpm turbo typecheck --filter=@osdk/react
# Run tests
pnpm turbo test --filter=@osdk/react
# Lint (ESLint + dprint)
pnpm --dir packages/react lint
# Auto-fix lint issues
pnpm --dir packages/react fix-lint
# Run vitest directly (useful during development)
pnpm --dir packages/react vitest run
```

> **Important:** Do **not** use `pnpm --dir /path turbo` or `cd /path && pnpm turbo`. The `--dir` flag breaks Turbo. Use `--filter` instead.

### Formatting

This project uses [dprint](https://dprint.dev/) for formatting. Format changed files before committing:

```sh
npx dprint fmt
```

The pre-commit hook runs `dprint check` and will reject unformatted code.

## Architecture

### Source Layout

```
src/
├── index.ts                    # Stable public API (legacy)
├── public/
│   ├── experimental.ts         # Experimental hooks barrel export
│   └── experimental/
│       └── admin.ts            # Foundry admin hooks barrel export
├── new/                        # Modern hooks (recommended)
│   ├── OsdkProvider2.tsx       # Modern context provider
│   ├── OsdkContext2.ts         # Modern context definition
│   ├── useOsdkObjects.ts       # Query lists of objects
│   ├── useOsdkObject.ts        # Query single object by type + key
│   ├── useOsdkAction.ts        # Execute and validate actions
│   ├── useOsdkAggregation.ts   # Server-side aggregations
│   ├── useOsdkFunction.ts      # Execute query functions
│   ├── useOsdkFunctions.ts     # Execute multiple functions in parallel
│   ├── useLinks.ts             # Navigate object relationships
│   ├── useObjectSet.tsx        # Set operations (union, intersect, subtract)
│   ├── hookUtils.ts            # Shared hook utilities
│   ├── makeExternalStore.ts    # Bridge to useSyncExternalStore
│   └── platform-apis/
│       └── admin/              # Foundry admin platform hooks
├── utils/
│   └── useDebouncedCallback.ts # Reusable utility hook
└── intellisense.test.ts        # TypeScript type-checking tests
```

### Export Strategy

| Entry point                      | What it exports                                    | Stability       |
| -------------------------------- | -------------------------------------------------- | --------------- |
| `@osdk/react`                    | `OsdkProvider`, `useOsdkClient`, `useOsdkMetadata` | Stable (legacy) |
| `@osdk/react/experimental`       | `OsdkProvider2` + all modern hooks                 | Experimental    |
| `@osdk/react/experimental/admin` | Foundry admin hooks                                | Experimental    |

### What Belongs in This Package

`@osdk/react` is the home for **reusable, OSDK-aware React hooks** that are not tied to a specific UI component. If a hook could be useful across multiple components or directly by application developers, it belongs here.

**Examples of hooks that belong in `@osdk/react`:**

- Data-fetching hooks (`useOsdkObjects`, `useOsdkObject`)
- Action execution hooks (`useOsdkAction`)
- Aggregation and query hooks (`useOsdkAggregation`, `useOsdkFunction`)
- Relationship traversal hooks (`useLinks`)
- Set operation hooks (`useObjectSet`)
- General-purpose utilities (`useDebouncedCallback`)

**Examples of hooks that do NOT belong here:**

- Hooks tightly coupled to a specific component's internal state (e.g., table selection state, PDF page navigation) — these belong in `@osdk/react-components`
- Hooks that depend on UI libraries or CSS — these belong in `@osdk/react-components`

### Provider Model

All experimental hooks require `OsdkProvider2` at the application root. The provider accepts:

- `client` — the OSDK client instance (required)
- `observableClient` — enables cache management and automatic invalidation (optional but recommended)

```tsx
import { createObservableClient } from "@osdk/client/unstable-do-not-use";
import { OsdkProvider2 } from "@osdk/react/experimental";

const observableClient = createObservableClient(client);

<OsdkProvider2 client={client} observableClient={observableClient}>
  <App />
</OsdkProvider2>;
```

## Hook API Conventions

All hooks in this package follow consistent API patterns. New hooks **must** follow these conventions.

### Options Object

Data-fetching hooks accept an options object as the last parameter:

| Option             | Type            | Purpose                                                                  |
| ------------------ | --------------- | ------------------------------------------------------------------------ |
| `enabled`          | `boolean`       | Conditionally execute the hook without violating Rules of Hooks          |
| `dedupeIntervalMs` | `number`        | Prevent duplicate requests within the interval (default varies per hook) |
| `where`            | `FilterClause`  | Server-side filtering                                                    |
| `orderBy`          | `OrderByClause` | Server-side sorting                                                      |
| `pageSize`         | `number`        | Number of results per page                                               |

Not every hook uses every option — include only the ones that make sense.

### Return Shape

Hooks return a consistent object shape:

| Field                       | Type                        | Present in                                     |
| --------------------------- | --------------------------- | ---------------------------------------------- |
| `data` / `object` / `links` | `T \| undefined`            | All data hooks                                 |
| `isLoading`                 | `boolean`                   | All data hooks                                 |
| `isOptimistic`              | `boolean`                   | Hooks that support optimistic updates          |
| `error`                     | `Error \| undefined`        | All data hooks                                 |
| `fetchMore`                 | `(() => void) \| undefined` | Paginated hooks (undefined when no more pages) |
| `refetch`                   | `() => void`                | Hooks that support manual refetching           |

Use `hookUtils.ts` helpers (`extractPayloadError`, `isPayloadLoading`) to derive these fields from the internal store payload.

### Conditional Execution

Hooks must **never** be called conditionally. Use the `enabled` option instead:

```tsx
// WRONG — violates Rules of Hooks
if (shouldFetch) {
  const { data } = useOsdkObjects(Todo);
}

// CORRECT
const { data } = useOsdkObjects(Todo, { enabled: shouldFetch });
```

> **Note:** `useOsdkObject` is the exception — `enabled` is a positional third parameter, not part of an options object: `useOsdkObject(Employee, id, false)`.

### Loading State Guidelines

Consumers should render components alongside loading indicators, not replace them:

```tsx
// WRONG — causes UI flash
if (isLoading) return <Spinner />;
return <List data={data} />;

// CORRECT — data persists while reloading
return (
  <div>
    {isLoading && <Spinner />}
    <List data={data} />
  </div>
);
```

This matters because hooks may return stale `data` while `isLoading` is true (e.g., reloading after cache invalidation).

### Optimistic Updates

Action hooks support optimistic updates via the `$optimisticUpdate` callback. OSDK objects are immutable — use `$clone()` to create modified copies:

```tsx
applyAction({
  todo,
  isComplete: true,
  $optimisticUpdate: (ou) => {
    ou.updateObject(todo.$clone({ isComplete: true }));
  },
});
```

### Error Handling

Action hooks return a structured error object:

```tsx
error?: {
  actionValidation?: ActionValidationError;  // Server-side validation errors
  unknown?: unknown;                         // Other errors
}
```

For data-fetching hooks, errors are `PalantirApiError` instances with an `errorDescription` field.

## Adding a New Hook

1. **Determine placement.** If the hook is reusable and OSDK-aware without component-specific logic, add it to `src/new/`. If it is specific to a single component, add it to `@osdk/react-components` instead.
2. **Create the hook file** in `src/new/` (e.g., `src/new/useMyHook.ts`).
3. **Follow the conventions above.** Study hooks like `useOsdkObjects` or `useOsdkAction` for reference:
   - Accept an `options` object with `enabled` for conditional execution.
   - Support `dedupeIntervalMs` for request deduplication where appropriate.
   - Return a consistent payload shape using `hookUtils.ts` helpers.
   - Support `where`, `orderBy`, and `pageSize` if the hook fetches collections.
4. **Export the hook** from `src/public/experimental.ts`.
5. **Write tests** in `src/new/__tests__/` or `test/`.
6. **Add documentation** in `docs/react/` (see [Documentation](#documentation)).

## Cache and Invalidation

The `ObservableClient` maintains a normalized cache keyed by object type and primary key. Understanding the cache model is important when contributing hooks that fetch or mutate data.

### How the Cache Works

| Data type    | Cache key                                         |
| ------------ | ------------------------------------------------- |
| Objects      | Object type + primary key                         |
| Lists        | Object type + where clause + orderBy              |
| Links        | Source object + link name + filters               |
| Aggregations | Object type + where clause + aggregate definition |

Objects are stored once and shared across all queries that reference them. When an action modifies an object, all queries containing that object are automatically updated.

### Automatic Invalidation After Actions

- **Added objects** — fetched and added to cache; lists are re-evaluated
- **Modified objects** — re-fetched; all queries containing them are updated
- **Deleted objects** — removed from cache and all lists

### Manual Invalidation

When changes happen outside of OSDK actions (e.g., external systems, webhooks), use the `observableClient` API:

```tsx
// Invalidate specific objects
await observableClient.invalidateObjects([obj1, obj2]);

// Invalidate all data for a type
await observableClient.invalidateObjectType(Todo);

// Invalidate a specific function query
await observableClient.invalidateFunction(getMetrics, {
  departmentId: "sales",
});

// Invalidate all queries for a function
await observableClient.invalidateFunction(getMetrics);

// Nuclear option (use sparingly)
await observableClient.invalidateAll();
```

When contributing a hook that fetches data, ensure it integrates with this cache by using `makeExternalStore.ts` to bridge the observable client's subscriptions with React's `useSyncExternalStore`.

## Testing

Tests use [Vitest](https://vitest.dev/) with [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and run in a `happy-dom` environment.

### Writing Tests

- Place tests in `src/new/__tests__/` for unit tests or `test/` for integration tests.
- Name test files `*.test.ts` or `*.test.tsx`.
- Use `@testing-library/react` `renderHook` for testing hooks in isolation.
- Use async utilities (`p-defer`, `p-locate`) for testing asynchronous hook behavior.

### Running Tests

```sh
# Via turbo (recommended for CI parity)
pnpm turbo test --filter=@osdk/react
# Via vitest directly (faster iteration)
pnpm --dir packages/react vitest run
# Watch mode during development
pnpm --dir packages/react vitest
```

## Documentation

User-facing documentation lives in `docs/react/` at the monorepo root:

| File                  | Covers                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------- |
| `getting-started.md`  | Installation, provider setup, basic usage                                               |
| `querying-data.md`    | `useOsdkObjects`, `useOsdkObject`, filtering, sorting, pagination                       |
| `advanced-queries.md` | `useObjectSet`, `useOsdkAggregation`, `useOsdkFunction`, derived properties, `useLinks` |
| `actions.md`          | `useOsdkAction`, validation, optimistic updates, `useDebouncedCallback`                 |
| `cache-management.md` | Cache model, automatic and manual invalidation                                          |
| `platform-apis.md`    | `useCurrentFoundryUser`, `useFoundryUser`, `useFoundryUsersList`                        |

When adding or modifying a hook:

- Update the relevant doc file with usage examples, options, and return values.
- If adding a new category of hook, create a new doc file and link it from `getting-started.md`.
- Include both correct and incorrect usage patterns to guide consumers.

## Submitting a Pull Request

1. **Create a branch** from `main` using the naming convention above.
2. **Make your changes.** Keep PRs focused on a single concern.
3. **Verify quality** before pushing:
   ```sh
   pnpm turbo typecheck --filter=@osdk/react
   pnpm turbo test --filter=@osdk/react
   pnpm --dir packages/react lint
   npx dprint fmt
   ```
4. **Add a changeset** (see [Changesets](#changesets) below).
5. **Run a global check** to catch cross-package issues:
   ```sh
   pnpm turbo check
   ```
6. **Push and open a PR** against `main`. Fill out the PR template.
7. **Do not force-push** amended commits during review — push new commits so reviewers can see incremental changes.

## Changesets

Every PR that changes published package code needs **exactly one changeset** per branch.

1. Create a file in `.changeset/` with a descriptive name (e.g., `.changeset/add-use-osdk-aggregation.md`).
2. Use YAML front matter to list affected packages and semver bump type:
   ```md
   ---
   "@osdk/react": minor
   ---

   Add useOsdkAggregation hook for server-side aggregation queries
   ```
3. Write a specific summary describing what was added or changed.
4. Check `.changeset/` before creating — do not create duplicate changesets on the same branch.
5. CI will fail if a changeset is missing for changed packages.

## License

By contributing to this project, you agree that your contributions will be licensed under the [Apache 2.0 License](../../LICENSE).
