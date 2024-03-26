import { ActionValidationError } from "@osdk/client";
import { useCallback, useEffect } from "react";
import useSWR from "swr";
import { foundryClient, foundryClient2 } from "./foundryClient";
import { isOk, type Result, ReturnEditsMode } from "./generatedNoCheck";
import type { Todo } from "./generatedNoCheck/ontology/objects";
import * as MyOsdk from "./generatedNoCheck2";

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
    { keepPreviousData: true, revalidateOnFocus: false },
  );

  useEffect(() => {
    const unsubscribe = foundryClient2(MyOsdk.Todo).subscribe({
      onChange(objects) {
        // index incoming objects by apiName and then by pk value
        const byApiNameByPK = new Map<
          string,
          Map<(typeof objects)[0]["$primaryKey"], (typeof objects)[0]>
        >();
        for (const object of objects) {
          const byPk = byApiNameByPK.get(object.$apiName);
          if (byPk) {
            byPk.set(object.$primaryKey, object);
          } else {
            byApiNameByPK.set(
              object.$apiName,
              new Map([[object.$primaryKey, object]]),
            );
          }
        }

        // get the new version of an object that has changed, removing it from the list of updates
        const getUpdate = (
          apiName: (typeof objects)[0]["$apiName"],
          primaryKey: (typeof objects)[0]["$primaryKey"],
        ) => {
          const byPk = byApiNameByPK.get(apiName);
          if (byPk) {
            const value = byPk.get(primaryKey);
            if (value) {
              byPk.delete(primaryKey);
              return value;
            }
          }
        };

        mutate((data) => {
          // update any Todos that we got a new version for
          const updated = data?.map((object) => {
            const updateObject = getUpdate(
              object.__apiName,
              object.__primaryKey,
            );
            return updateObject ?? object;
          }) ?? [];

          // add any new Todos to the bottom
          for (const byPk of byApiNameByPK.values()) {
            for (const object of byPk.values()) {
              updated.push(object);
            }
          }

          return updated as typeof data;
        });
      },

      onOutOfDate() {
        mutate();
      },

      onError(data) {
        console.error("Todo subscription error", data);
      },
    });

    return unsubscribe;
  }, [mutate]);

  const toggleComplete = useCallback(
    async function(todo: Todo) {
      const b = !todo.isComplete;
      await mutate(
        async () => {
          const actionsV2Ready = true;

          if (actionsV2Ready) {
            await foundryClient2(MyOsdk.completeTodo)({
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
                { returnEdits: ReturnEditsMode.ALL },
              ),
            );
          }

          return undefined; // invalidate cache
        },
        {
          optimisticData: updateTodo.bind(undefined, todo.id!, b),
          rollbackOnError: true,
        },
      );
    },
    [mutate],
  );

  const createTodoMutator = useCallback(
    async (title: string, setError?: (error: string | undefined) => void) => {
      await mutate(
        async () => {
          // Unwrap to get throw behavior on error.
          // Don't return because we want to invalidate cache
          try {
            await foundryClient2(MyOsdk.createTodo)({
              Todo: title,
              is_complete: false,
            });
          } catch (e) {
            if (e instanceof ActionValidationError) {
              if (e.validation.parameters.Todo?.result === "INVALID") {
                const { evaluatedConstraints, required } =
                  e.validation.parameters.Todo;

                if ((required && title == null) || title.length < 1) {
                  setError?.("Todo is required");
                } else {
                  for (const constraint of evaluatedConstraints) {
                    if (constraint.type === "stringLength") {
                      if (constraint.gte != null && constraint.lte != null) {
                        setError?.(
                          `Todo must be between ${constraint.gte}-${constraint.lte} characters`,
                        );
                      }
                    }
                  }
                }
              }
            }

            throw e;
          }

          return undefined; // invalidate cache
        },
        {
          optimisticData: (todos = []) => [...todos, createFauxTodo(title)],
          rollbackOnError: true,
          throwOnError: true,
        },
      );
      return undefined;
    },
    [mutate],
  );

  return {
    todos: data,
    isLoading,
    error,
    isValidating,
    toggleComplete,
    createTodo: createTodoMutator,
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
    $primaryKey: title,
    $apiName: "Todo",
    $rid: "",
  };
}

function updateTodo(
  id: string,
  isComplete: boolean,
  todos: Todo[] | undefined,
) {
  return updateOne(todos, id, (todo) => ({ ...todo, isComplete })) ?? [];
}

function updateOne<T extends { __primaryKey: Q }, Q>(
  things: T[] | undefined,
  primaryKey: Q,
  update: (thing: T) => T,
) {
  return things?.map((thing) => {
    if (thing.__primaryKey === primaryKey) {
      return update(thing);
    } else {
      return thing;
    }
  });
}
