import { useOsdkAction, useOsdkObject } from "@osdk/react";
import React, { useState } from "react";
import type { $Objects } from "./generatedNoCheck2/index.js";
import { $Actions } from "./generatedNoCheck2/index.js";

export const TodoView = React.memo(function TodoView({
  todo,
}: {
  todo: $Objects.Todo.OsdkInstance;
}) {
  const [isPending, setIsPending] = useState<boolean>(false);
  const { isLoading, isOptimistic } = useOsdkObject(todo);

  const completeTodo = useOsdkAction($Actions.completeTodo);
  const toggleComplete = React.useCallback(
    (todo: $Objects.Todo.OsdkInstance) => {
      return completeTodo.applyAction(
        { is_complete: !todo.isComplete, Todo: todo },
        {
          optimisticUpdate: (ctx) => {
            ctx.updateObject(todo.$clone({
              isComplete: !todo.isComplete,
            }));
          },
        },
      );
    },
    [completeTodo],
  );

  async function handleClick() {
    setIsPending(true);
    await toggleComplete(todo);
    setIsPending(false);
  }

  const validating = isPending || isLoading;

  return (
    <div className="flex items-center mb-4" key={todo.id}>
      {validating
        ? (
          <div className="mr-2 w-4 h-4 rounded-full animate-spin shrink-0
border border-solid border-yellow-800 border-t-transparent">
          </div>
        )
        : <div className="mr-2 w-4 h-4 shrink-0"></div>}
      <input
        type="checkbox"
        id={"label-" + todo.id}
        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 w-4 h-4
         focus:ring-blue-500 
         disabled:opacity-50 disabled:pointer-events-none
        dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
        style={{ display: "inline-block" }}
        checked={todo.isComplete} /* fixme */
        onClick={handleClick}
        aria-disabled={validating}
        disabled={validating}
        readOnly={true}
      />

      <label
        htmlFor={"label-" + todo.id}
        className="text-sm text-gray-500 ms-3 dark:text-gray-400"
      >
        {todo.title}
      </label>
      {isPending
        ? (
          <>
            <div className="ml-2 w-4 h-4 rounded-full animate-spin shrink-0
border border-solid border-yellow-800 border-t-transparent">
            </div>
            <SmallTextDiv>(Saving)</SmallTextDiv>
          </>
        )
        : (
          ""
        )}
      {isOptimistic
        ? <SmallTextDiv>(Optimistic)</SmallTextDiv>
        : ("")}
    </div>
  );
});

export function SmallTextDiv({ children }: { children: React.ReactNode }) {
  return <div className="ml-2 text-xs text-gray-500">{children}</div>;
}
