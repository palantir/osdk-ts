import React, { useState } from "react";

export default function CreateTodoForm({
  createTodo,
}: {
  createTodo: (
    title: string,
    setError: (error: string | undefined) => void
  ) => Promise<void>;
}) {
  const formRef = React.useRef<HTMLFormElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string>();

  return (
    <div className="flex flex-shrink mb-6">
      <form
        ref={formRef}
        onSubmit={async (evt) => {
          evt.preventDefault();
          if (!inputRef.current || !formRef.current) {
            throw "should never happen";
          }
          setPending(true);
          setError(undefined);
          try {
            await createTodo(inputRef.current.value, setError);
            formRef.current.reset();
          } catch (e) {
            console.error(e);
          } finally {
            setPending(false);
          }
        }}
      >
        <div className="error">{error}</div>
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
           dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded aria-disabled:bg-gray-300 aria-disabled:cursor-default"
          aria-disabled={false}
          disabled={pending}
        >
          Create Todo
        </button>
        {pending ? (
          <div
            className="ml-2 w-4 h-4 rounded-full animate-spin shrink-0
border border-solid border-yellow-800 border-t-transparent"
          ></div>
        ) : (
          <div className="ml-2 w-4 h-4"></div>
        )}
      </form>
    </div>
  );
}
