import { useOsdkObject } from "@osdk/react/experimental";
import React from "react";
import { $Interfaces, Todo } from "./generatedNoCheck2/index.js";
import { H2 } from "./H2.js";
import { InlineSpinner } from "./InlineSpinner.js";
import { TodoView } from "./TodoView.js";

export function SpecificTodoViaInterface() {
  const { object, isLoading } = useOsdkObject(
    $Interfaces.TodoLike,
    "12421298-4fcf-4fae-b391-724f59d08a9c",
  );

  return (
    <div>
      <H2>
        A specific todo (via interface) <InlineSpinner isLoading={isLoading} />
      </H2>

      {object && <TodoView todo={object.$as(Todo)} />}
    </div>
  );
}
