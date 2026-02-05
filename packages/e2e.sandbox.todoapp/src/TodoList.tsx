import type { WhereClause } from "@osdk/client";
import { useOsdkObjects } from "@osdk/react/experimental";
import * as React from "react";
import "./App.css";
import { Todo } from "./generatedNoCheck2/index.js";
import { H2 } from "./H2.js";
import { InlineSpinner } from "./InlineSpinner.js";
import { SmallTextDiv, TodoView } from "./TodoView.js";

interface TodoListProps {
  where: WhereClause<Todo>;
  heading?: string;
}

function TodoList({ where, heading }: TodoListProps) {
  const { data, isLoading, isOptimistic } = useOsdkObjects(
    Todo,
    {
      where,
      orderBy: {
        title: "asc",
      },
      streamUpdates: true,
      pageSize: 5,
    },
  );

  if (!data && isLoading) {
    return "Loading";
  }

  return (
    <>
      <H2>
        {heading ?? "Todos"}
        <InlineSpinner isLoading={isLoading} />
        <SmallTextDiv>
          {isOptimistic
            ? "(Optimistic)"
            : ""}
          {isLoading ? "(Loading)" : ""}
        </SmallTextDiv>
      </H2>

      {data
        && data.map((todo) => (
          <TodoView
            todo={todo}
            key={String(todo.$primaryKey)}
          />
        ))}
    </>
  );
}

export default TodoList;
