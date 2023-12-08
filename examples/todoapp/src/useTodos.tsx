import { useCallback, useEffect } from "react";
import useSWR from "swr";
import { foundryClient, foundryClient2 } from "./foundryClient";
import { isOk, ReturnEditsMode, type Result } from "./generatedNoCheck";
import type { Todo } from "./generatedNoCheck/ontology/objects";

function orThrow<T, E>(result: Result<T, E>) {
  if (isOk(result)) {
    return result.value;
  } else {
    throw result.error;
  }
}

export function useTodos() {
  const { data, isLoading, error, isValidating, mutate } = useSWR(
    "/todos",
    async () => orThrow(await foundryClient.ontology.objects.Todo.all()),
    { keepPreviousData: true }
  );

  useEffect(() => {
    let removed = false;
    let unsubscribe: () => void;

    foundryClient2.objects.Todo.subscribe({
      cancelled() {
        console.log("todo watcher cancelled");
      },
      change(data) {
        console.log("todo change", data);
      },
      refresh() {
        console.log("todo refresh");
      },
    })
      .then((unsub) => {
        if (removed) {
          unsub;
        } else {
          unsubscribe = unsub;
        }
      })
      .catch((error) => {
        console.log("subscription error", error);
      });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
      removed = true;
    };
  }, []);

  const toggleComplete = useCallback(
    async function (todo: Todo) {
      const b = !todo.isComplete;
      await mutate(
        async () => {
          const actionsV2Ready = true;

          if (actionsV2Ready) {
            await foundryClient2.actions.completeTodo({
              is_complete: b,
              Todo: todo.__primaryKey,
            });
          } else {
            // Unwrap to get throw behavior on error.
            // Don't return because we want to invalidate cache
            orThrow(
              await foundryClient.ontology.actions.completeTodo(
                {
                  is_complete: b,
                  Todo: todo,
                },
                { returnEdits: ReturnEditsMode.ALL }
              )
            );
          }

          return undefined; // invalidate cache
        },
        {
          optimisticData: updateTodo.bind(undefined, todo.id!, b),
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
          // Unwrap to get throw behavior on error.
          // Don't return because we want to invalidate cache
          orThrow(
            await foundryClient.ontology.actions.createTodo({
              Todo: title,
              is_complete: false,
            })
          );

          return undefined; // invalidate cache
        },
        {
          optimisticData: (todos = []) => [...todos, createFauxTodo(title)],
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

function createFauxTodo(title: string): Todo {
  return {
    id: title,
    title,
    isComplete: false,
    __primaryKey: title,
    __apiName: "Todo",
    __rid: "",
  };
}

function updateTodo(
  id: string,
  isComplete: boolean,
  todos: Todo[] | undefined
) {
  return updateOne(todos, id, (todo) => ({ ...todo, isComplete })) ?? [];
}

function updateOne<T extends { __primaryKey: Q }, Q>(
  things: T[] | undefined,
  primaryKey: Q,
  update: (thing: T) => T
) {
  return things?.map((thing) => {
    if (thing.__primaryKey === primaryKey) {
      return update(thing);
    } else {
      return thing;
    }
  });
}
