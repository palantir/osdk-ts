import type { Osdk } from "@osdk/client";
import { useOsdkAction, useOsdkObject } from "@osdk/react/experimental";
import React, { useCallback } from "react";
import { completeTodo, Todo } from "../generatedNoCheck/index.js";

interface TodoItemProps {
  todo: Osdk.Instance<Todo>;
}

export const TodoItem = React.memo(function TodoItem({
  todo,
}: TodoItemProps): React.ReactElement {
  const { isLoading, isOptimistic } = useOsdkObject(todo);
  const { applyAction, isPending, error } = useOsdkAction(completeTodo);

  const handleToggle = useCallback(async () => {
    try {
      await applyAction({
        Todo: todo,
        is_complete: !todo.isComplete,
        $optimisticUpdate: (ctx) => {
          ctx.updateObject(todo.$clone({
            isComplete: !todo.isComplete,
          }));
        },
      });
    } catch {
      // Error is captured in the error state from useOsdkAction
    }
  }, [applyAction, todo]);

  return (
    <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
      <input
        type="checkbox"
        checked={todo.isComplete ?? false}
        onChange={handleToggle}
        disabled={isPending || isLoading}
        className="size-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />

      <span
        className={`flex-1 ${
          todo.isComplete ? "line-through text-gray-400" : "text-gray-900"
        }`}
      >
        {todo.title ?? "Untitled"}
      </span>

      {(isLoading || isPending) && (
        <span className="text-xs text-gray-400">Saving...</span>
      )}

      {isOptimistic && (
        <span className="text-xs text-blue-500">Optimistic</span>
      )}

      {error && <span className="text-xs text-red-500">Failed to update</span>}
    </li>
  );
});
