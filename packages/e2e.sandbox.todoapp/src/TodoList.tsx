import type { WhereClause } from "@osdk/client";
import { useOsdkList } from "@osdk/react/experimental";
import "./App.css";
import type { Todo } from "./generatedNoCheck2/index.js";
import { $Objects } from "./generatedNoCheck2/index.js";
import { H2 } from "./H2.js";
import { InlineSpinner } from "./InlineSpinner.js";
import { SmallTextDiv, TodoView } from "./TodoView.js";

interface TodoListProps {
  where: WhereClause<Todo>;
  heading?: string;
}

function TodoList({ where, heading }: TodoListProps) {
  const { data, isLoading, error, isOptimistic } = useOsdkList($Objects.Todo, {
    where,
    orderBy: {
      title: "asc",
    },
  });

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
      {error && <h2>{JSON.stringify(error)}</h2>}
      {data
        && data.map((todo) => (
          <TodoView
            todo={todo}
            key={todo.id}
          />
        ))}
    </>
  );
}

export default TodoList;
