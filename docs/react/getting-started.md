---
sidebar_position: 1
---

# Getting Started

This guide covers installation, setup, and your first OSDK React application.

:::info Beta Release
`@osdk/react` is currently in beta. While the package is suitable for production use, you may encounter minor bugs as we continue development. We welcome bug reports and feedback.
:::

## Installation

### 1. Install Beta Packages

```bash
npm install @osdk/api@beta @osdk/client@beta @osdk/react@beta
```

:::warning Version Compatibility
All `@osdk/*` packages must use **compatible versions**. Mismatched versions (e.g., mixing an old `@osdk/client` with a newer `@osdk/react`) will cause TypeScript errors. See [troubleshooting](#property-store-is-missing-with-osdkprovider2) if you encounter issues.

```json
{
  "dependencies": {
    "@osdk/api": "^2.7.0-beta.8",
    "@osdk/client": "^2.7.0-beta.8",
    "@osdk/react": "^0.9.0-beta.5"
  }
}
```
:::

You can find the latest versions on npm:

- [@osdk/react versions](https://www.npmjs.com/package/@osdk/react?activeTab=versions)
- [@osdk/client versions](https://www.npmjs.com/package/@osdk/client?activeTab=versions)
- [@osdk/api versions](https://www.npmjs.com/package/@osdk/api?activeTab=versions)

### 2. Generate Your SDK with Beta Features

If you haven't generated an SDK yet:

1. Open Developer Console for your Foundry
2. Click "SDK versions" tab (tag icon in left navbar)
3. Click "Settings" → enable beta features for TypeScript
4. Click "Generate new version" → check "npm" checkbox → select latest `-beta` generator
5. Add the generated SDK to your package.json:

```json
{
  "dependencies": {
    "@your-app/sdk": "^0.4.0"
  }
}
```

## Provider Setup

### Stable vs Experimental

`@osdk/react` has two entry points:

|                   | `@osdk/react`               | `@osdk/react/experimental`                    |
| ----------------- | --------------------------- | --------------------------------------------- |
| **Use when**      | You only need client access | You want reactive data hooks (most apps)      |
| **Features**      | Client provider, metadata   | Queries, actions, caching, optimistic updates |
| **API stability** | Stable                      | APIs may change between releases              |

**We recommend starting with experimental.** The "experimental" label indicates the API surface may evolve, not that the features are unstable or buggy. Most applications benefit from the reactive hooks, automatic caching, and optimistic update support.

### Stable Features (`@osdk/react`)

For basic client access only:

```tsx
import { OsdkProvider } from "@osdk/react";
import client from "./client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <App />
  </OsdkProvider>,
);
```

Stable exports (use with `OsdkProvider`):

- `OsdkProvider` - Provider component for basic client access
- `useOsdkClient` - Access the OSDK client directly
- `useOsdkMetadata` - Fetch type metadata

:::note
`useOsdkClient` and `useOsdkMetadata` are available from both `@osdk/react` (stable) and `@osdk/react/experimental`. When using experimental features with `OsdkProvider2`, import from `@osdk/react/experimental` for consistency.
:::

### Experimental Features (`@osdk/react/experimental`)

For reactive data management, cache, and optimistic updates.

:::tip About Experimental Hooks
The hooks in `@osdk/react/experimental` are production-ready and recommended for new projects. They are labeled "experimental" because they represent a newer architecture that is under active development. Once stabilized, these hooks will be promoted to the main `@osdk/react` package.
:::

```tsx
import { OsdkProvider2 } from "@osdk/react/experimental";
import client from "./client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>
    <App />
  </OsdkProvider2>,
);
```

**All experimental hooks require `OsdkProvider2` at your app root.**

Experimental exports:

- `OsdkProvider2` - Provider for experimental features
- `useOsdkObjects` - Query collections of objects
- `useOsdkObject` - Query single objects
- `useOsdkAction` - Execute and validate actions
- `useLinks` - Navigate object relationships
- `useObjectSet` - Advanced queries with set operations
- `useOsdkAggregation` - Server-side aggregations
- `useOsdkFunction` - Execute and observe OSDK functions
- `useDebouncedCallback` - Debounce callbacks
- `useOsdkClient` - Access the OSDK client
- `useOsdkMetadata` - Fetch type metadata (also available from stable)

## Quick Start Checklist

Before using experimental hooks:

- [ ] App wrapped in `<OsdkProvider2 client={client}>`
- [ ] OsdkProvider2 at app root (not nested inside components)
- [ ] Passing configured OSDK client to OsdkProvider2
- [ ] All components using experimental hooks inside the provider

## First Query

:::note About `@my/osdk`
Throughout this documentation, `@my/osdk` refers to **your generated SDK package**. This is created when you generate an SDK in Foundry Developer Console (step 2 above). Replace `@my/osdk` with your actual package name (e.g., `@your-app/sdk`).
:::

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function TodoList() {
  const { data, isLoading, error } = useOsdkObjects(Todo, {
    where: { isComplete: false },
    orderBy: { createdAt: "desc" },
  });

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      {data?.map(todo => <div key={todo.$primaryKey}>{todo.title}</div>)}
    </div>
  );
}
```

See [Querying Data](/react/querying-data) for filtering, pagination, real-time updates, and more.

## First Action

```tsx
import { $Actions, Todo } from "@my/osdk";
import { useOsdkAction } from "@osdk/react/experimental";

function CompleteTodoButton({ todo }: { todo: Todo.OsdkInstance }) {
  const { applyAction, isPending, error } = useOsdkAction(
    $Actions.completeTodo,
  );

  const handleClick = () => {
    applyAction({ todo, isComplete: true });
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? "Saving..." : "Complete"}
      </button>
      {error && <div>Error: {JSON.stringify(error)}</div>}
    </div>
  );
}
```

See [Actions](/react/actions) for validation, batch actions, and optimistic updates.

## Troubleshooting

### "Property 'store' is missing" with OsdkProvider2

This error occurs when your `@osdk/client` version is incompatible with `@osdk/react`. The versions must match.

**Fix:** Ensure all `@osdk/*` packages use compatible beta versions:

1. Go to **Developer Console** → **SDK versions** → **Settings**
2. Enable **beta features** for TypeScript
3. Generate a new SDK version with the latest beta generator
4. Check the **Installation instructions** for the compatible `@osdk/client` version
5. Update your package.json to use matching versions:

```json
{
  "dependencies": {
    "@osdk/api": "^2.7.0-beta.8",
    "@osdk/client": "^2.7.0-beta.8",
    "@osdk/react": "^0.9.0-beta.5"
  }
}
```

### "Cannot read property 'observableClient' of undefined"

The component is outside `<OsdkProvider2>`. Move OsdkProvider2 higher in your component tree.

**Wrong:**

```tsx
function App() {
  return <TodoList />; // No OsdkProvider2!
}
```

**Correct:**

```tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>
    <TodoList />
  </OsdkProvider2>,
);
```

### Only some components work with hooks

OsdkProvider2 is not at the root.

**Wrong:**

```tsx
function App() {
  return (
    <>
      <Header /> {/* Can't use hooks */}
      <OsdkProvider2 client={client}>
        <Content /> {/* Only this can use hooks */}
      </OsdkProvider2>
    </>
  );
}
```

**Correct:**

```tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>
    <App /> {/* All components can use hooks */}
  </OsdkProvider2>,
);
```

### Hooks return no data

Ensure you're passing the same client instance, not creating a new one:

**Wrong:**

```tsx
<OsdkProvider2 client={createNewClient()}> {/* New instance each render */}
```

**Correct:**

```tsx
import client from "./client"; // Created once
<OsdkProvider2 client={client}>
```

### "Hooks cannot be conditionally called"

Use the `enabled` option instead of conditional hook calls:

**Wrong:**

```tsx
if (shouldLoad) {
  const { data } = useOsdkObjects(Todo); // Conditional hook!
}
```

**Correct:**

```tsx
const { data } = useOsdkObjects(Todo, {
  enabled: shouldLoad,
});
```

## NPM Peer Dependency Issues

If NPM has trouble resolving peer dependencies with beta packages, add to package.json:

```json
{
  "overrides": {
    "@osdk/client": "$@osdk/client",
    "@osdk/react": "$@osdk/react"
  }
}
```

## FAQ

### When should I use `@osdk/react` vs React Query?

**Use `@osdk/react`** when your application primarily works with OSDK data:

- Querying Foundry objects and ontology data
- Executing actions on Foundry objects
- Taking advantage of automatic cache management for OSDK objects
- Real-time updates via WebSocket subscriptions

**Use React Query** when you need to make requests to third-party APIs or non-OSDK endpoints:

- External REST APIs
- GraphQL services not backed by Foundry
- Custom backend services

**You can use both together.** `@osdk/react` hooks work independently from React Query. For applications that mix OSDK data with external services, use `@osdk/react` for Foundry operations and React Query for external APIs.

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";
import { useQuery } from "@tanstack/react-query";

function Dashboard() {
  // Use @osdk/react for Foundry data
  const { data: todos } = useOsdkObjects(Todo);

  // Use React Query for external APIs
  const { data: weatherData } = useQuery({
    queryKey: ["weather"],
    queryFn: () => fetch("https://api.weather.com/current").then(r => r.json()),
  });

  return (
    <div>
      <TodoList todos={todos} />
      <WeatherWidget data={weatherData} />
    </div>
  );
}
```

## Next Steps

- [Querying Data](/react/querying-data) - useOsdkObjects, useOsdkObject, useLinks, pagination, real-time updates
- [Actions](/react/actions) - useOsdkAction, validation, optimistic updates, debouncing
- [Advanced Queries](/react/advanced-queries) - useObjectSet, derived properties, aggregations
- [Cache Management](/react/cache-management) - Cache behavior and manual invalidation
- [Platform APIs](/react/platform-apis) - useCurrentFoundryUser, useFoundryUser, useFoundryUsersList
