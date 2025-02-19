---
title: Getting Started
---

# Getting Started

## Create an osdk `Client` and `ObservableClient`

```ts
import {
  createObservableClient,
} from "@osdk/client/unstable-do-not-use";

export const client = // ...

export const observableClient = createObservableClient(client);
```

## Configure a `<OsdkProvider/>`

Updating your react entry point to include an {@link OsdkProvider}:

```ts
import { OsdkProvider } from "@osdk/react";
import { client, store } from "./foundryClient.js";

// ...

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OsdkProvider client={client} store={store}>
      <App />
    </OsdkProvider>
  </React.StrictMode>,
);
```

## Load a list of objects

In this example, we are using a silly where clause to demonstrate how to
use them in general. For more, see {@link useOsdkList}.

```tsx
import { Todo } from "@my/osdk";

function App() {
  // data is `Osdk.Instance<Todo>[] | undefined` in this case.
  const { data, isLoading, error } = useOsdkList(Todo, {
    where: {
      title: { $startsWith: "cool " },
    },
  });

  // If the cache has no existing copy for this query and
  // we are in a loading state then we can just tell the
  // user we are loading
  if (!data && isLoading) {
    return "Loading...";
  }

  return (
    <div>
      {/* lazy error handling */}
      {error && JSON.stringify(error)}
      {isLoading && <div>Refreshing data</div>}

      {/* Actually render the todos */}
      {data.map(todo => <TodoView todo={todo} />)}
    </div>
  );
}
```

## Rendering a single object

In this example, since we are already being provided a `Todo.OsdkInstance` we
can use the {@link useOsdkObject } hook to fetch the loading state.

```tsx
import { Todo } from "@my/osdk";

interface TodoProps {
  todo: Todo.OsdkInstance;
}

function TodoView({ todo }: TodoProps) {
  const { isLoading } = useOsdkObject(todo);

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
  const completeTodo = useOsdkAction($Actions.completeTodo);

  const onClick = React.useCallback(() => {
    completeTodo.applyAction({
      todo: todo,
      isComplete: true,
    });
  }, [completeTodo]);

  return (
    <div>
      <div>
        {todo.title}
        {todo.isComplete == false && (
          <span>
            ( <button onClick={onClick}>Mark Complete</button> )
          </span>
        )}
        {isLoading && "(Loading)"}
      </div>
      {completeTodo.error && (
        <div>
          An error occurred while applying the action:
          <pre>{JSON.stringify(completeTodo.error, null, 2)}</pre>
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
  const completeTodo = useOsdkAction($Actions.completeTodo);

  const onClick = React.useCallback(() => {
    completeTodo.applyAction({
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
  });

  return (
    <div>
      {todo.title}
      {todo.isComplete == false && !isOptimistic && (
        <button onClick={onClick}>Mark Complete</button>
      )}
      {isLoading && "(Loading)"}
      {isOptimistic && "(Optimistic)"}
    </div>
  );
}
```
