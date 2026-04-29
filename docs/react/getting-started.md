---
sidebar_position: 1
---

# Getting Started

This guide covers installation, setup, and your first OSDK React application.

## Installation

### 1. Install `@osdk/react`

```bash
npm install @osdk/api @osdk/client @osdk/react
```

:::warning Version Compatibility
All `@osdk/*` packages must use **compatible versions**. Mismatched versions (e.g., mixing an old `@osdk/client` with a newer `@osdk/react`) will cause TypeScript errors. See [troubleshooting](#property-store-is-missing-with-osdkprovider2) if you encounter issues.
:::

You can find the latest versions on npm:

- [@osdk/react versions](https://www.npmjs.com/package/@osdk/react?activeTab=versions)
- [@osdk/client versions](https://www.npmjs.com/package/@osdk/client?activeTab=versions)
- [@osdk/api versions](https://www.npmjs.com/package/@osdk/api?activeTab=versions)

### 2. Generate Your SDK

If you haven't generated an SDK yet:

1. Open Developer Console for your Foundry
2. Click "SDK versions" tab (tag icon in left navbar)
3. Click "Generate new version" → check "npm" checkbox → select the latest generator
4. Add the generated SDK to your package.json:

```json
{
  "dependencies": {
    "@your-app/sdk": "^0.4.0"
  }
}
```

## Provider Setup

Wrap your app with `OsdkProvider` at the root. Every hook in `@osdk/react` reads from it.

```tsx
import { OsdkProvider } from "@osdk/react";
import client from "./client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <App />
  </OsdkProvider>,
);
```

Available exports from `@osdk/react`:

- `OsdkProvider` - Provider, required at the app root
- `useOsdkObjects` - Query collections of objects
- `useOsdkObject` - Query single objects
- `useOsdkAction` - Execute and validate actions
- `useLinks` - Navigate object relationships
- `useObjectSet` - Advanced queries with set operations
- `useOsdkAggregation` - Server-side aggregations
- `useOsdkFunction` - Execute and observe OSDK functions
- `useDebouncedCallback` - Debounce callbacks
- `useOsdkClient` - Access the OSDK client
- `useOsdkMetadata` - Fetch type metadata

Platform APIs (admin/CBAC) live in a separate entry point at `@osdk/react/platform-apis`. See [Platform APIs](/react/platform-apis).

## Quick Start Checklist

Before using the data hooks:

- [ ] App wrapped in `<OsdkProvider client={client}>`
- [ ] OsdkProvider at app root (not nested inside components)
- [ ] Passing configured OSDK client to OsdkProvider
- [ ] All components using the hooks inside the provider

## First Query

:::note About `@my/osdk`
Throughout this documentation, `@my/osdk` refers to **your generated SDK package**. This is created when you generate an SDK in Foundry Developer Console (step 2 above). Replace `@my/osdk` with your actual package name (e.g., `@your-app/sdk`).
:::

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react";

function TodoList() {
  const { data, isLoading, error } = useOsdkObjects(Todo, {
    where: { isComplete: false },
    orderBy: { createdAt: "desc" },
  });

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
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
import { completeTodo, Todo } from "@my/osdk";
import { useOsdkAction } from "@osdk/react";

function CompleteTodoButton({ todo }: { todo: Todo.OsdkInstance }) {
  const { applyAction, isPending, error } = useOsdkAction(completeTodo);

  const handleClick = () => {
    applyAction({ todo, isComplete: true });
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? "Saving..." : "Complete"}
      </button>
      {error && (
        <div>
          Error: {error.actionValidation?.message
            ?? (error.unknown ? String(error.unknown) : "Unknown error")}
        </div>
      )}
    </div>
  );
}
```

See [Actions](/react/actions) for validation, batch actions, and optimistic updates.

## Troubleshooting

### "Property 'store' is missing" with OsdkProvider

This error occurs when your `@osdk/client` version is incompatible with `@osdk/react`. The versions must match.

**Fix:** Ensure all `@osdk/*` packages use compatible versions. Generate a fresh SDK against the same `@osdk/client` line that `@osdk/react` was published against, and update your package.json so `@osdk/api`, `@osdk/client`, and `@osdk/react` all resolve to compatible majors.

### "Cannot read property 'observableClient' of undefined"

The component is outside `<OsdkProvider>`. Move OsdkProvider higher in your component tree.

**Wrong:**

```tsx
function App() {
  return <TodoList />; // No OsdkProvider!
}
```

**Correct:**

```tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <TodoList />
  </OsdkProvider>,
);
```

### Only some components work with hooks

OsdkProvider is not at the root.

**Wrong:**

```tsx
function App() {
  return (
    <>
      <Header /> {/* Can't use hooks */}
      <OsdkProvider client={client}>
        <Content /> {/* Only this can use hooks */}
      </OsdkProvider>
    </>
  );
}
```

**Correct:**

```tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider client={client}>
    <App /> {/* All components can use hooks */}
  </OsdkProvider>,
);
```

### Hooks return no data

Ensure you're passing the same client instance, not creating a new one:

**Wrong:**

```tsx
<OsdkProvider client={createNewClient()}> {/* New instance each render */}
```

**Correct:**

```tsx
import client from "./client"; // Created once
<OsdkProvider client={client}>
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

If NPM has trouble resolving peer dependencies, add to package.json:

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
import { useOsdkObjects } from "@osdk/react";
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
