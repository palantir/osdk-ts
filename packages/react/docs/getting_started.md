---
title: Getting Started
---

# Installation

Once these features have become Generally Available, you would just need to update to the latest version of `@osdk/client` and `@osdk/react`.

However, for now these are beta packages and require a few extra steps:

## 1. Set the specific beta versions

Using `latest` in npm/yarn/pnpm is a misnomer as it doesn't actually get you the latest version unless you specifically instruct these tools to update. Further, they won't work with beta/rc releases generally.

Here are the latest versions to use as of the time of this writing (and the minimum required versions):

```json
"@osdk/client": "^2.2.0-beta.4",
"@osdk/oauth": "^1.0.1",
"@osdk/react": "^0.4.0-beta.2",
```

## 2. Regenerate your SDK with the latest beta version on your Foundry.

### Open the Developer Console for your app

In the Developer Console for your Foundry, after loading your application, click the "SDK versions" tab on the left navbar. If it is collapsed, it has a tag icon on it.

### Ensure you have beta sdk generation enabled

On the SDK versions page, in the top right corner is a "Settings" button. Click it and enable beta features for TypeScript.

### Generate a new version

Click the blue "Generate new version" button. In the dialog that shows up, make sure that the checkbox for "npm" is checked and that you are on the latest -beta generator. Mine has `2.2.0-beta.3` currently. Then click "Generate" and wait a few seconds.

Note: normally we want the generator version `2.2.0-beta.3` to match the `@osdk/client` version we have in our package.json file. However, in this case, I know that the `2.2.0-beta.3` will work with the `2.2.0-beta.4` `@osdk/client`.

### Update your package.json with your generated sdk version

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

Below, we will try to use the filenames that match what are used when creating an osdk project from a template.

## Configure a `<OsdkProvider2/>`

In `main.tsx` (or wherever you call `react-dom`'s `createRoot`), we need to add an `OsdkProvider2`.

First, we need to import `OsdkProvider2` and your new `observableClient`:

```ts
import { OsdkProvider2 } from "@osdk/react/experimental";
import client from "./client"; // or wherever you created it
```

Then, if you have a `createRoot` call that looks like this:

```ts
// EXISTING CODE
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
```

Then we need to wrap that inner component like this, adding the `<OsdkProvider2...` and `</OsdkProvider>` lines:

```ts
ReactDOM.createRoot(document.getElementById("root")!).render(
  <OsdkProvider2 client={client}>
    <RouterProvider router={router} />,
  </OsdkProvider2>,
);
```

## Load a list of objects

In this example, we are using a silly where clause to demonstrate how to
use them in general. For more, see {@link useOsdkList}.

```tsx
import { Todo } from "@my/osdk";

function App() {
  const { data, isLoading } = useOsdkList(Todo);

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
      {data.map(todo => <TodoView todo={todo} />)}
    </div>
  );
}
```

Additionally, `useOsdkList()` takes a second argument allowing you to pass a `where` clause:

```ts
const { data, isLoading } = useOsdkList(Todo, {
  where: { text: { $startsWith: "cool " } },
});
```

## Rendering a single object

We can either load an object by type and primary key or we can pass an `Osdk.Instance` object we have already loaded to get information like its `isLoading` status.

```tsx
import { Todo } from "@my/osdk";

interface TodoProps {
  todo: Todo.OsdkInstance;
}

function TodoView({ todo }: TodoProps) {
  const { isLoading } = useOsdkObject(todo);
  // or ` const { data, isLoading } = useOsdkObject(Todo, "somePrimaryKey");

  return (
    <div>
      {todo.title}
      {isLoading && "(Loading)"}
    </div>
  );
}
```

## Call an action

{@link useOsdkAction} is the hook we use for apply actions.
The hook does not apply the action on page render. Instead
it returns an object that lets you invoke `applyAction` in a
react callback and render the state of the last/active call.

```tsx
import { $Actions } from "@my/osdk";

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

## Using optimistic updates

With optimistic updates, you can change the internal cache of the
ObservationClient while you wait for the action to be performed.

In this case, it allows us to mark the todo as complete even though applying
the action to the server has not yet completed.

If the action is successful then the changed objects are automatically
reloaded from the server and the optimistic change is removed.

If the action errors, then the changed objects are automatically rolled back
to their state prior to the action being performed.

```tsx
// ...

function TodoView({ todo }: TodoProps) {
  const { isLoading, isOptimistic } = useOsdkObject(todo);
  const { applyAction, error, isPending } = useOsdkAction(
    $Actions.completeTodo,
  );

  const onClick = React.useCallback(() => {
    applyAction({
      todo: todo,
      isComplete: true,
    }, {
      optimisticUpdate: (ou) => {
        ou.updateObject(
          todo.$clone({
            isComplete: true,
          }),
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
    </div>
  );
}
```

# Debugging problems

## Problems with `npm install`?

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
