# Getting Started

This guide covers installation, setup, and your first OSDK React application.

## Installation

### 1. Specify Beta Versions

Using `latest` doesn't always install actual latest versions for beta packages. Specify explicitly:

```json
{
  "dependencies": {
    "@osdk/client": "^2.6.0-beta.11",
    "@osdk/oauth": "^1.3.0-beta.1",
    "@osdk/react": "^0.8.0-beta.4",
    "@osdk/api": "^2.6.0-beta.11"
  }
}
```

### 2. Regenerate Your SDK on Foundry

1. Open Developer Console for your Foundry
2. Click "SDK versions" tab (tag icon in left navbar)
3. Click "Settings" → enable beta features for TypeScript
4. Click "Generate new version" → check "npm" checkbox → select latest -beta generator
5. Update your package.json with the generated SDK version:

```json
{
  "dependencies": {
    "@your-app/sdk": "^0.4.0"
  }
}
```

## Provider Setup

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

Stable exports:
- `OsdkProvider` - Provider component
- `useOsdkClient` - Access the OSDK client
- `useOsdkMetadata` - Fetch type metadata

### Experimental Features (`@osdk/react/experimental`)

For reactive data management, cache, and optimistic updates:

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
- `useDebouncedCallback` - Debounce callbacks
- `useOsdkClient` - Access the OSDK client

## Quick Start Checklist

Before using experimental hooks:

- [ ] App wrapped in `<OsdkProvider2 client={client}>`
- [ ] OsdkProvider2 at app root (not nested inside components)
- [ ] Passing configured OSDK client to OsdkProvider2
- [ ] All components using experimental hooks inside the provider

## First Query

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
      {data?.map(todo => (
        <div key={todo.$primaryKey}>{todo.title}</div>
      ))}
    </div>
  );
}
```

See [Querying Data](./querying-data.md) for filtering, pagination, real-time updates, and more.

## First Action

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction } from "@osdk/react/experimental";

function CompleteTodoButton({ todo }: { todo: Todo.OsdkInstance }) {
  const { applyAction, isPending, error } = useOsdkAction($Actions.completeTodo);

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

See [Actions](./actions.md) for validation, batch actions, and optimistic updates.

## Troubleshooting

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
    "@osdk/oauth": "$@osdk/oauth",
    "@osdk/react": "$@osdk/react"
  }
}
```

## Next Steps

- [Querying Data](./querying-data.md) - useOsdkObjects, useOsdkObject, useLinks, pagination, real-time updates
- [Actions](./actions.md) - useOsdkAction, validation, optimistic updates, debouncing
- [Advanced Queries](./advanced-queries.md) - useObjectSet, derived properties, aggregations
- [Cache Management](./cache-management.md) - Cache behavior and manual invalidation
