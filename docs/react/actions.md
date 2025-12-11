---
sidebar_position: 3
---

# Actions

This guide covers executing actions, validation, optimistic updates, and debouncing patterns.

## useOsdkAction

*Experimental - import from `@osdk/react/experimental`*

Execute and validate actions with automatic state management.

### Basic Usage

```tsx
import { $Actions, Todo } from "@my/osdk";
import { useOsdkAction, useOsdkObject } from "@osdk/react/experimental";
import { useCallback } from "react";

function TodoView({ todo }: { todo: Todo.OsdkInstance }) {
  const { isLoading } = useOsdkObject(todo);
  const { applyAction, data, error, isPending } = useOsdkAction(
    $Actions.completeTodo,
  );

  const onClick = useCallback(() => {
    applyAction({
      todo: todo,
      isComplete: true,
    });
  }, [applyAction, todo]);

  return (
    <div>
      <div>
        {todo.title}
        {todo.isComplete === false && (
          <button onClick={onClick} disabled={isPending}>
            Mark Complete
          </button>
        )}
        {isPending && "(Applying)"}
        {data && "(Action completed successfully)"}
      </div>
      {error && (
        <div>
          An error occurred:
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
```

### Return Values

- `applyAction` - Function to execute the action (accepts single args object or array for batch)
- `data` - Return value from the last successful action execution
- `error` - Error object (see error handling below)
- `isPending` - True while action is executing
- `isValidating` - True while validation is in progress
- `validateAction` - Function to validate without executing
- `validationResult` - Result of last validation

---

## Error Handling

The `error` object has the following structure:

```ts
{
  actionValidation?: ActionValidationError;
  unknown?: unknown;
}
```

`ActionValidationError` extends `Error` and has:
- `message` - Error message string
- `validation` - Full validation response from server

Example:

```tsx
import { $Actions, Todo } from "@my/osdk";
import { useOsdkAction } from "@osdk/react/experimental";

function TodoActionWithErrorHandling({ todo }: { todo: Todo.OsdkInstance }) {
  const { applyAction, error, isPending } = useOsdkAction($Actions.completeTodo);

  const onClick = async () => {
    try {
      await applyAction({ todo, isComplete: true });
    } catch (e) {
      console.error("Action failed", e);
    }
  };

  return (
    <div>
      <button onClick={onClick} disabled={isPending}>
        Complete Todo
      </button>

      {error?.actionValidation && (
        <div style={{ color: "red" }}>
          Validation failed: {JSON.stringify(error.actionValidation.validation)}
        </div>
      )}

      {error?.unknown && (
        <div style={{ color: "red" }}>
          An unexpected error occurred: {String(error.unknown)}
        </div>
      )}
    </div>
  );
}
```

---

## Validation

Validate action parameters without executing using `validateAction`.

```tsx
import { $Actions } from "@my/osdk";
import { useOsdkAction } from "@osdk/react/experimental";
import { useState } from "react";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");

  const {
    applyAction,
    validateAction,
    isValidating,
    validationResult,
    isPending,
    error,
  } = useOsdkAction($Actions.createTodo);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    validateAction({ title: newTitle, assignee });
  };

  const handleAssigneeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAssignee = e.target.value;
    setAssignee(newAssignee);
    validateAction({ title, assignee: newAssignee });
  };

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
        onChange={handleTitleChange}
        placeholder="Todo title"
      />
      <input
        type="text"
        value={assignee}
        onChange={handleAssigneeChange}
        placeholder="Assignee"
      />

      {isValidating && <span>Validating...</span>}

      {validationResult?.result === "INVALID" && (
        <div style={{ color: "red" }}>
          Invalid: {JSON.stringify(validationResult)}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending || isValidating || validationResult?.result !== "VALID"}
      >
        Create Todo
      </button>

      {error?.actionValidation && (
        <div style={{ color: "red" }}>
          Validation error: {error.actionValidation.message}
        </div>
      )}
    </form>
  );
}
```

Key features:

- `validateAction` - Validates action parameters without executing
- `isValidating` - True while validation is in progress
- `validationResult` - Contains `{ result: "VALID" | "INVALID", ... }`
- Calling `validateAction` while a previous validation is in progress cancels the previous one
- Validation and execution are mutually exclusive

---

## Batch Actions

Apply the same action to multiple items in a single call:

```tsx
import { $Actions, Todo } from "@my/osdk";
import { useOsdkAction } from "@osdk/react/experimental";
import { useCallback } from "react";

function BulkCompleteButton({ todos }: { todos: Todo.OsdkInstance[] }) {
  const { applyAction, isPending } = useOsdkAction($Actions.completeTodo);

  const onClick = useCallback(() => {
    applyAction(
      todos.map(todo => ({
        todo: todo,
        isComplete: true,
      })),
    );
  }, [applyAction, todos]);

  return (
    <button onClick={onClick} disabled={isPending}>
      Complete All ({todos.length})
    </button>
  );
}
```

---

## Optimistic Updates

Apply changes to the cache immediately while waiting for the server response.

```tsx
import { $Actions, Todo } from "@my/osdk";
import { useOsdkAction, useOsdkObject } from "@osdk/react/experimental";
import { useCallback } from "react";

function TodoView({ todo }: { todo: Todo.OsdkInstance }) {
  const { isLoading, isOptimistic } = useOsdkObject(todo);
  const { applyAction, error, isPending } = useOsdkAction($Actions.completeTodo);

  const onClick = useCallback(() => {
    applyAction({
      todo: todo,
      isComplete: true,

      $optimisticUpdate: (ou) => {
        ou.updateObject(todo.$clone({ isComplete: true }));
      },
    });
  }, [applyAction, todo]);

  return (
    <div>
      {todo.title}
      {todo.isComplete === false && !isOptimistic && (
        <button onClick={onClick} disabled={isPending}>Mark Complete</button>
      )}
      {isPending && "(Saving)"}
      {isLoading && "(Loading)"}
      {isOptimistic && "(Optimistic)"}
      {error && (
        <div style={{ color: "red" }}>
          {error.actionValidation?.message ?? String(error.unknown)}
        </div>
      )}
    </div>
  );
}
```

### How Optimistic Updates Work

1. When you call `applyAction` with `$optimisticUpdate`, the cache is updated immediately
2. The UI shows the optimistic state (tracked via `isOptimistic`)
3. If the action succeeds, the cache is refreshed with server data
4. If the action fails, the optimistic changes are rolled back automatically

### Optimistic Update API

The `$optimisticUpdate` callback receives an object with the following methods:

```tsx
$optimisticUpdate: (ou) => {
  ou.updateObject(todo.$clone({ isComplete: true }));
  ou.updateObject(anotherObject.$clone({ ... }));
}
```

:::note The `$clone` method
Every OSDK object instance has a `$clone()` method that creates a new object with modified properties. This is essential for optimistic updates because OSDK objects are immutable.

```tsx
// Create a modified copy without mutating the original
const completedTodo = todo.$clone({ isComplete: true });

// Clone with multiple property changes
const updatedTodo = todo.$clone({
  title: "New Title",
  priority: "high",
});
```
:::

---

## useDebouncedCallback

*Experimental - import from `@osdk/react/experimental`*

Debounce callback functions for auto-save patterns or expensive operations.

### Basic Usage

```tsx
import { useDebouncedCallback } from "@osdk/react/experimental";
import { useState } from "react";

function SearchableList({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const debouncedSearch = useDebouncedCallback((q: string) => {
    onSearch(q);
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <input
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
}
```

### Auto-Save Pattern

Combine with actions for auto-saving:

```tsx
import { $Actions, Todo } from "@my/osdk";
import { useDebouncedCallback, useOsdkAction } from "@osdk/react/experimental";
import { useState } from "react";

function AutoSaveTodo({ todo }: { todo: Todo.OsdkInstance }) {
  const [title, setTitle] = useState(todo.title);
  const { applyAction } = useOsdkAction($Actions.updateTodo);

  const debouncedSave = useDebouncedCallback((newTitle: string) => {
    applyAction({
      todo,
      title: newTitle,
      $optimisticUpdate: (ou) => {
        ou.updateObject(todo.$clone({ title: newTitle }));
      },
    });
  }, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    debouncedSave(newTitle);
  };

  return (
    <input
      value={title}
      onChange={handleChange}
      placeholder="Click to edit title..."
    />
  );
}
```

### Debounced Callback Methods

The returned function has utility methods:

```tsx
import { useDebouncedCallback } from "@osdk/react/experimental";

const debouncedFn = useDebouncedCallback((value: string) => {
  console.log("Called with:", value);
}, 500);

debouncedFn("hello");
debouncedFn.cancel();
debouncedFn.flush();
```
