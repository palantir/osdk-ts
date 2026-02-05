import { useOsdkObjects } from "@osdk/react/experimental";
import React from "react";
import { Todo } from "../generatedNoCheck/index.js";
import { TodoItem } from "./TodoItem.js";
import { Spinner } from "./ui/Spinner.js";

export function TodoList(): React.ReactElement {
  const { data, isLoading, error, fetchMore } = useOsdkObjects(Todo, {
    orderBy: { title: "asc" },
    pageSize: 10,
  });

  return (
    <div>
      {isLoading && <Spinner className="mb-4" />}

      {error && (
        <div className="text-red-600 mb-4 p-3 bg-red-50 rounded">
          Error: {error.message}
        </div>
      )}

      {data && data.length === 0 && !isLoading && (
        <p className="text-gray-500 text-center py-4">
          No todos yet. Create one above!
        </p>
      )}

      <ul className="space-y-2">
        {data?.map((todo) => <TodoItem key={todo.$primaryKey} todo={todo} />)}
      </ul>

      {fetchMore && (
        <button
          onClick={fetchMore}
          className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Load More
        </button>
      )}
    </div>
  );
}
