import { isErr, isOk } from "@todoedgedemo/sdk";
import getFoundryClient from "./getFoundryClient";
import useSWR from "swr";
import { Todo } from "@todoedgedemo/sdk/ontology/objects";
import { useCallback } from "react";

export function useTodos() {
  const { data, isLoading, error, isValidating, mutate } = useSWR(
    "Todo",
    async () => {
      const client = await getFoundryClient();
      const todos = await client.ontology.objects.Todo.all();

      if (isOk(todos)) {
        return todos.value;
      } else {
        throw todos.error;
      }
    },
    {
      keepPreviousData: true,
    }
  );

  const toggleComplete = useCallback(
    async function (todo: Todo) {
      await mutate(
        async () => {
          const client = await getFoundryClient();

          const completeResult = await client.ontology.actions.completeTodo({
            is_complete: !todo.isComplete,
            Todo: todo,
          });
          if (isErr(completeResult)) {
            throw completeResult.error;
          }
          return undefined; // invalidate cache
        },
        {
          optimisticData(todos) {
            return updateTodos(todos, todo.__primaryKey, !todo.isComplete);
          },
          rollbackOnError: true,
        }
      );
    },
    [mutate]
  );

  const createTodo = useCallback(
    async (title: string) => {
      await mutate(
        async () => {
          const client = await getFoundryClient();
          const result = await client.ontology.actions.createTodo({
            Todo: title,
            is_complete: false,
          });
          if (isErr(result)) {
            throw result.error;
          }

          return undefined;
        },
        {
          optimisticData: (todos = []) => {
            return [
              ...todos,
              {
                id: title,
                title,
                isComplete: false,
                __primaryKey: title,
                __apiName: "Todo",
                __rid: "",
              },
            ];
          },
          rollbackOnError: true,
          throwOnError: true,
        }
      );
      return undefined;
    },
    [mutate]
  );

  return {
    todos: data,
    isLoading,
    error,
    isValidating,
    toggleComplete,
    createTodo,
  };
}

function updateTodos(
  todos: Todo[] | undefined,
  id: string,
  is_complete: boolean
) {
  return (
    todos?.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: is_complete };
      } else {
        return todo;
      }
    }) ?? []
  );
}
