import { useOsdkAction } from "@osdk/react/experimental";
import React, { useCallback, useState } from "react";
import { createTodo, Todo } from "../generatedNoCheck/index.js";

export function CreateTodo(): React.ReactElement {
  const [title, setTitle] = useState("");
  const { applyAction, isPending, error } = useOsdkAction(createTodo);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!title.trim()) {
        return;
      }

      try {
        await applyAction({
          Todo: title.trim(),
          is_complete: false,
          $optimisticUpdate: (ctx) => {
            const tempId = `temp-${crypto.randomUUID()}`;
            ctx.createObject(Todo, tempId, {
              id: tempId,
              title: title.trim(),
              isComplete: false,
            });
          },
        });
        setTitle("");
      } catch {
        // Error is captured in the error state from useOsdkAction
      }
    },
    [applyAction, title],
  );

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        disabled={isPending}
      />

      <button
        type="submit"
        disabled={isPending || !title.trim()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Adding..." : "Add Todo"}
      </button>

      {error && (
        <span className="text-red-600 text-sm self-center">
          {error.unknown?.toString() ?? "Error creating todo"}
        </span>
      )}
    </form>
  );
}
