import { useOsdkAction, useOsdkObject } from "@osdk/react/experimental";
import React from "react";
import type { $Objects } from "./generatedNoCheck2/index.js";
import { $Actions } from "./generatedNoCheck2/index.js";
import { InlineSpinner } from "./InlineSpinner.js";

interface Props {
  todo: $Objects.Todo.OsdkInstance;
}

export const TodoView = React.memo(function TodoView({ todo }: Props) {
  const { isLoading, isOptimistic } = useOsdkObject(todo);

  const { applyAction, isPending } = useOsdkAction($Actions.completeTodo);
  const toggleComplete = React.useCallback(
    () => {
      return applyAction({
        is_complete: !todo.isComplete,
        Todo: todo,

        $optimisticUpdate: (ctx) => {
          ctx.updateObject(todo.$clone({
            isComplete: !todo.isComplete,
          }));
        },
      });
    },
    [applyAction, todo],
  );

  return (
    <div className="flex items-center mb-4" key={todo.id}>
      <InlineSpinner isLoading={isLoading} />

      <input
        type="checkbox"
        id={"label-" + todo.id}
        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 w-4 h-4
         focus:ring-blue-500 
         disabled:opacity-50 disabled:pointer-events-none
        dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        style={{ display: "inline-block" }}
        checked={todo.isComplete}
        onClick={toggleComplete}
        aria-disabled={isLoading || isPending}
        disabled={isLoading || isPending}
        readOnly={true}
      />

      <label
        htmlFor={"label-" + todo.id}
        className="text-sm text-gray-500 ms-3 dark:text-gray-400"
      >
        {todo.title}
      </label>

      {isOptimistic
        ? <SmallTextDiv>(Optimistic)</SmallTextDiv>
        : ("")}
    </div>
  );
});

export function SmallTextDiv({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-2 text-xs text-gray-500 font-normal">{children}</div>
  );
}
