import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import { ActionValidationError } from "@osdk/client";
import { useCallback, useEffect } from "react";
import type { KeyedMutator } from "swr";
import useSWR from "swr";
import { $ } from "./foundryClient.js";
import * as MyOsdk from "./generatedNoCheck2/index.js";

declare global {
  interface ArrayConstructor {
    /**
     * Creates an array from an async iterator or iterable object.
     * @param iterableOrArrayLike An async iterator or array-like object to convert to an array.
     */
    fromAsync<T>(
      iterableOrArrayLike:
        | AsyncIterable<T>
        | Iterable<T | PromiseLike<T>>
        | ArrayLike<T | PromiseLike<T>>,
    ): Promise<T[]>;

    /**
     * Creates an array from an async iterator or iterable object.
     *
     * @param iterableOrArrayLike An async iterator or array-like object to convert to an array.
     * @param mapfn A mapping function to call on every element of iterableOrArrayLike.
     *      Each return value is awaited before being added to result array.
     * @param thisArg Value of 'this' used when executing mapfn.
     */
    fromAsync<T, U>(
      iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>,
      mapFn: (value: Awaited<T>) => U,
      thisArg?: any,
    ): Promise<Awaited<U>[]>;
  }
}

export function useTodos() {
  const { data, isLoading, error, isValidating, mutate } = useSWR(
    "/todos",
    async () => await Array.fromAsync<SimpleTodo>($(MyOsdk.Todo).asyncIter()),
    { keepPreviousData: true, revalidateOnFocus: false },
  );

  const toggleComplete = useCallback(
    async function(todo: SimpleTodo) {
      const b = !todo.isComplete;
      await mutate(
        async () => {
          await $(MyOsdk.completeTodo).applyAction({
            is_complete: b,
            Todo: todo.$primaryKey,
          });

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
            await $(MyOsdk.createTodo).applyAction({
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

type OsdkPropsOnly<T extends ObjectTypeDefinition> = Omit<
  Osdk<T>,
  "$as" | "$link"
>;

export interface SimpleTodo extends OsdkPropsOnly<MyOsdk.Todo> {
  $primaryKey: string;
}

function createFauxTodo(title: string): SimpleTodo {
  return {
    id: title,
    title,
    isComplete: false,
    $title: title,
    $primaryKey: title,
    $apiName: "Todo",
    $objectType: "Todo",
  };
}

function updateTodo(
  id: string,
  isComplete: boolean,
  todos: SimpleTodo[] | undefined,
): SimpleTodo[] {
  return updateOne(todos, id, (todo) => ({ ...todo, isComplete })) ?? [];
}

function updateOne<T extends { $primaryKey: Q }, Q>(
  things: T[] | undefined,
  primaryKey: Q,
  update: (thing: T) => T,
) {
  return things?.map((thing) => {
    if (thing.$primaryKey === primaryKey) {
      return update(thing);
    } else {
      return thing;
    }
  });
}

/** disabling for now */
export function useSubscribe(mutate: KeyedMutator<SimpleTodo[]>) {
  useEffect(() => {
    const subscription = $(MyOsdk.Todo)
      .subscribe(
        {
          onChange(objectUpdate) {
            // index incoming objects by apiName and then by pk value
            const byApiNameByPK = new Map<
              string,
              Map<
                (typeof objectUpdate)["object"]["$primaryKey"],
                (typeof objectUpdate)
              >
            >();

            const byPk = byApiNameByPK.get(objectUpdate.object.$apiName);
            if (byPk) {
              byPk.set(objectUpdate.object.$primaryKey, objectUpdate);
            } else {
              byApiNameByPK.set(
                objectUpdate.object.$apiName,
                new Map([[objectUpdate.object.$primaryKey, objectUpdate]]),
              );
            }

            // get the new version of an object that has changed, removing it from the list of updates
            const getUpdate = (
              apiName: (typeof objectUpdate)["object"]["$apiName"],
              primaryKey: (typeof objectUpdate)["object"]["$primaryKey"],
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
                  object.$apiName,
                  object.$primaryKey,
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
        },
      );

    return function() {
      subscription.unsubscribe();
    };
  }, [mutate]);
}
