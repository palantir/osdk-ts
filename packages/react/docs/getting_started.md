---
title: Getting Started
---

# Installation

Once these features are Generally Available, simply update to the latest versions of `@osdk/client` and `@osdk/react` in your project. Currently, they are in beta and require some additional steps.

## 1. Specify the Beta Versions

Using `latest` in npm/yarn/pnpm does not always install the actual latest version, especially when dealing with beta or release-candidate packages. You must specify them explicitly, for example:

```json
"@osdk/client": "^2.3.0-beta.9",
"@osdk/oauth": "^1.3.0-beta.1",
"@osdk/react": "^0.5.0-beta.4",
```

## 2. Regenerate Your SDK on Foundry

### Access the Developer Console

In the Developer Console for your Foundry, after loading your application, click the "SDK versions" tab on the left navbar. If it is collapsed, it has a tag icon on it.

### Ensure Beta SDK Generation is Enabled

On the SDK versions page, in the top right corner is a "Settings" button. Click it and enable beta features for TypeScript.

### Generate a New Version

Click the blue "Generate new version" button. In the dialog that shows up, make sure that the checkbox for "npm" is checked and that you are on the latest -beta generator. Then click "Generate" and wait a few seconds.

Note: normally we want the generator version to match the `@osdk/client` version we have in our package.json file. Make sure you're using a compatible generator version that works with `2.3.0-beta.9` `@osdk/client`.

### Update Your package.json

On the SDK versions page, the table shows you your generated sdk version number in the left column. Mine says "0.4.0" so we will update my package.json to reflect that. Note, you need to use your package name, not `@no-caching-app/sdk`.

```json
{
  ...
  "dependencies": {
    ...,
    "@no-caching-app/sdk": "^0.4.0",
    ...
  }
  ...
}
```

# Getting Started

Below is an example using filenames that align with a typical osdk project.

## Configure `<OsdkProvider2/>`

In `main.tsx` (or wherever you call `createRoot`), add an `OsdkProvider2`:

```ts
import { OsdkProvider2 } from "@osdk/react/experimental";
import client from "./client"; // or wherever you created it
```

Then wrap your existing root components with `<OsdkProvider2 client={client}>`:

```ts
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>
    <RouterProvider router={router} />
  </OsdkProvider2>,
);
```

## Retrieve Objects

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObjects } from "@osdk/react/experimental";

function App() {
  const { data, isLoading } = useOsdkObjects(Todo);

  // If the cache has no existing copy for this query and
  // we are in a loading state then we can just tell the
  // user we are loading
  if (!data && isLoading) {
    return "Loading...";
  }

  return (
    <div>
      {isLoading && <div>Refreshing data</div>}

      {/* Actually render the todos */}
      {data.map(todo => <TodoView key={todo.$primaryKey} todo={todo} />)}
    </div>
  );
}
```

Using a `where` clause:

```ts
const { data, isLoading } = useOsdkObjects(Todo, {
  where: { text: { $startsWith: "cool " } },
});
```

Additional options for `useOsdkObjects`:

```ts
const { data, isLoading, fetchMore, error } = useOsdkObjects(Todo, {
  where: { isComplete: false },
  pageSize: 20,
  orderBy: { createdAt: "desc" },
  dedupeIntervalMs: 5000,
});
```

## Render a Single Object

We can either load an object by type and primary key or we can pass an `Osdk.Instance` object we have already loaded to get information like its `isLoading` status.

```tsx
import { Todo } from "@my/osdk";
import { useOsdkObject } from "@osdk/react/experimental";

interface TodoProps {
  todo: Todo.OsdkInstance;
}

function TodoView({ todo }: TodoProps) {
  const { isLoading } = useOsdkObject(todo);
  // or const { data, isLoading } = useOsdkObject(Todo, "somePrimaryKey");

  return (
    <div>
      {todo.title}
      {isLoading && "(Loading)"}
    </div>
  );
}
```

## Call an Action

{@link useOsdkAction} is the hook we use for apply actions. The hook does not apply the action on page render. Instead it returns an object that lets you invoke `applyAction` in a react callback and render the state of the last/active call.

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction, useOsdkObject } from "@osdk/react/experimental";
import React from "react";

function TodoView({ todo }: TodoProps) {
  const { isLoading } = useOsdkObject(todo);
  const { applyAction, error, isPending } = useOsdkAction(
    $Actions.completeTodo,
  );

  const onClick = React.useCallback(() => {
    applyAction({
      todo: todo,
      isComplete: true,
    });
  }, [applyAction, todo]);

  return (
    <div>
      <div>
        {todo.title}
        {todo.isComplete == false && (
          <span>
            <button onClick={onClick} disabled={isPending}>
              Mark Complete
            </button>
          </span>
        )}
        {isPending && "(Applying)"}
      </div>
      {error && (
        <div>
          An error occurred while applying the action:
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
```

## Validate Actions Without Executing

The `useOsdkAction` hook provides a `validateAction` function that allows you to check if an action would be valid without actually executing it. This is useful for pre-validation, displaying warnings, or implementing custom UI logic based on action validity.

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction } from "@osdk/react/experimental";
import React from "react";

function TodoForm() {
  const [title, setTitle] = React.useState("");
  const [assignee, setAssignee] = React.useState("");

  const {
    applyAction,
    validateAction,
    isValidating,
    validationResult,
    isPending,
    error,
  } = useOsdkAction($Actions.createTodo);

  // Validate whenever inputs change
  React.useEffect(() => {
    if (title || assignee) {
      validateAction({
        title,
        assignee,
      });
    }
  }, [title, assignee, validateAction]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validationResult?.result === "VALID") {
      await applyAction({ title, assignee });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Todo title"
      />
      <input
        type="text"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        placeholder="Assignee"
      />

      {isValidating && <span>Validating...</span>}

      {validationResult?.result === "INVALID" && (
        <div style={{ color: "red" }}>
          Invalid: {validationResult.reasons?.join(", ")}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending
          || isValidating
          || validationResult?.result !== "VALID"}
      >
        Create Todo
      </button>

      {error && <div style={{ color: "red" }}>Error: {error.message}</div>}
    </form>
  );
}
```

Key features:

- `validateAction`: Function to validate action parameters without executing
- `isValidating`: Boolean indicating if validation is in progress
- `validationResult`: Contains the validation result (`{ result: "VALID" | "INVALID", reasons?: string[] }`)
- Calling `validateAction` while a previous validation is in progress will cancel the previous one
- Validation and execution are mutually exclusive - starting one will cancel the other

## Optimistic Updates

With optimistic updates, you can change the internal cache of the ObservationClient while you wait for the action to be performed.

In this case, it allows us to mark the todo as complete even though applying the action to the server has not yet completed.

If the action is successful then the changed objects are automatically reloaded from the server and the optimistic change is removed.

If the action errors, then the changed objects are automatically rolled back to their state prior to the action being performed.

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction, useOsdkObject } from "@osdk/react/experimental";
import React from "react";

function TodoView({ todo }: TodoProps) {
  const { isLoading, isOptimistic } = useOsdkObject(todo);
  const { applyAction, error, isPending } = useOsdkAction(
    $Actions.completeTodo,
  );

  const onClick = React.useCallback(() => {
    applyAction({
      todo: todo,
      isComplete: true,

      $optimisticUpdate: (ou) => {
        ou.updateObject(
          todo.$clone({ isComplete: true }),
        );
      },
    });
  }, [applyAction, todo]);

  return (
    <div>
      {todo.title}
      {todo.isComplete == false && !isOptimistic && (
        <button onClick={onClick} disabled={isPending}>Mark Complete</button>
      )}
      {isPending && "(Saving)"}
      {isLoading && "(Loading)"}
      {isOptimistic && "(Optimistic)"}
      {error && (
        <div style={{ color: "red" }}>
          Error: {error.message}
        </div>
      )}
    </div>
  );
}
```

## Error Handling

Error handling is still in flux so for now you can:

```tsx
import { useOsdkObjects } from "@osdk/react/experimental";

function TodoList() {
  const { data, isLoading, error } = useOsdkObjects(Todo);

  if (error) {
    return (
      <div>
        <h2>Error loading todos</h2>
        <p>{JSON.stringify(error)}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  if (isLoading && !data) {
    return <div>Loading todos...</div>;
  }

  return (
    <div>
      {data?.map(todo => <TodoView key={todo.$primaryKey} todo={todo} />)}
    </div>
  );
}
```

## Pagination with fetchMore

The `useOsdkObjects` hook provides a `fetchMore` function for loading additional pages:

```tsx
function TodoList() {
  const { data, isLoading, fetchMore } = useOsdkObjects(Todo, {
    pageSize: 10,
  });

  const handleLoadMore = async () => {
    if (fetchMore) {
      await fetchMore();
    }
  };

  return (
    <div>
      {data?.map(todo => <TodoView key={todo.$primaryKey} todo={todo} />)}

      {fetchMore && (
        <button onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
```

## Manual Cache Invalidation

```tsx
function MyComponent({ observableClient }) {
  const handleRefresh = async () => {
    // Invalidate specific objects
    await observableClient.invalidateObjects([todo1, todo2]);

    // Invalidate all Todos
    await observableClient.invalidateObjectType(Todo);

    await observableClient.invalidateAll();
  };
}
```

# Debugging Issues

## NPM Install Concerns

NOTE: DO NOT DO THIS UNLESS YOU ARE HAVING PROBLEMS.

NPM aggressively tries to prevent you from making mistakes when mixing and matching versions. Generally, this is desirable behavior but can often get in your way when dealing with beta/rc/prerelease packages.

If you are having issues with NPM resolving `peerDependencies` then you may want to add the following to the bottom of your package.json:

```json
"overrides": {
  "@osdk/client": "$@osdk/client",
  "@osdk/oauth": "$@osdk/oauth",
  "@osdk/react": "$@osdk/react"
}
```

This will tell npm to force every usage to the versions we specified in our `dependencies` section, regardless of what those packages' own `dependencies`/`peerDependencies` say.
