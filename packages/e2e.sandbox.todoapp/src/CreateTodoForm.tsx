import { useOsdkAction } from "@osdk/react/experimental";
import React from "react";
import { Button } from "./Button.js";
import { $Actions, Todo } from "./generatedNoCheck2/index.js";
import { H2 } from "./H2.js";
import { InlineSpinner } from "./InlineSpinner.js";

export default function CreateTodoForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { applyAction, isPending, error } = useOsdkAction($Actions.createTodo);

  const onSubmit = React.useCallback(
    async (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      if (!inputRef.current || !formRef.current) {
        throw "should never happen";
      }
      const title = inputRef.current.value;

      await applyAction({
        is_complete: false,
        Todo: title,

        $optimisticUpdate: (b) => {
          const id = "TMP " + window.crypto.randomUUID();
          b.createObject(Todo, id, {
            title,
            id,
            isComplete: false,
            location: undefined,
          });
        },
      });

      // reset the form if we succeeded
      formRef.current.reset();
    },
    [formRef.current, inputRef.current, applyAction],
  );

  return (
    <>
      <H2>
        Create Todo<InlineSpinner isLoading={isPending} />
      </H2>

      <div className="flex grow">
        <form
          ref={formRef}
          onSubmit={onSubmit}
        >
          <div className="error">{JSON.stringify(error)}</div>
          <input
            type="text"
            name={"title"}
            disabled={isPending}
            aria-disabled={isPending}
            ref={inputRef}
            className="py-2 px-2 mr-4 mb-1 border-gray-500 rounded-lg text-sm border-2
           
           disabled:opacity-90
           disabled:pointer-events-none 
           disabled:border-gray-200
           focus:border-blue-500 focus:ring-blue-500

           "
          />
          <Button disabled={isPending}>
            Create Todo
          </Button>
        </form>
      </div>
    </>
  );
}
