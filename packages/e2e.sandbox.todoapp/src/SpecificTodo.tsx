import { useOsdkObject } from "@osdk/react";
import React from "react";
import { $Objects } from "./generatedNoCheck2/index.js";
import { H2 } from "./H2.js";
import { InlineSpinner } from "./InlineSpinner.js";
import { TodoView } from "./TodoView.js";

export function SpecificTodo() {
  const { object, isLoading } = useOsdkObject(
    $Objects.Todo,
    "12421298-4fcf-4fae-b391-724f59d08a9c",
  );
  return (
    <div>
      <H2>
        A specific todo <InlineSpinner isLoading={isLoading} />
      </H2>

      {object && <TodoView todo={object} />}
    </div>
  );
}
