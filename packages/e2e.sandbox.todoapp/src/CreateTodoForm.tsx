import { useOsdkAction } from "@osdk/react/experimental";
import React, { useState } from "react";
import { Button } from "./Button.js";
import { $Actions, Todo } from "./generatedNoCheck2/index.js";

export default function CreateTodoForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState(false);

  const createTodo = useOsdkAction($Actions.createTodo);

  return (
    <div className="flex grow">
      <form
        ref={formRef}
        onSubmit={async (evt) => {
          evt.preventDefault();
          if (!inputRef.current || !formRef.current) {
            throw "should never happen";
          }
          const title = inputRef.current.value;
          setPending(true);
          try {
            await createTodo.applyAction(
              { is_complete: false, Todo: title },
              {
                optimisticUpdate: (b) => {
                  const id = "TMP " + window.crypto.randomUUID();
                  b.createObject(Todo, id, {
                    title,
                    id,
                    isComplete: false,
                  });
                },
              },
            );
            formRef.current.reset();
          } catch (e) {
            console.error(e);
          } finally {
            setPending(false);
          }
        }}
      >
        <div className="error">{JSON.stringify(createTodo.error)}</div>
        <input
          type="text"
          name={"title"}
          disabled={pending}
          aria-disabled={pending}
          ref={inputRef}
          className="py-3 px-4 mr-4 border-gray-500 rounded-lg text-sm
          border-2
           focus:border-blue-500 focus:ring-blue-500 disabled:opacity-90
           disabled:pointer-events-none 
           "
        />
        <Button>
          Create Todo
        </Button>
        <div className="inline">
          {pending
            ? (
              <div className="ml-2 w-4 h-4 rounded-full animate-spin shrink-0
border border-solid border-yellow-800 border-t-transparent">
              </div>
            )
            : <div className="ml-2 w-4 h-4"></div>}
        </div>
      </form>
    </div>
  );
}
