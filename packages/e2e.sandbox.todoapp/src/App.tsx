import { useOsdkList } from "@osdk/react/experimental";
import "./App.css";
import type { WhereClause } from "@osdk/client";
import React from "react";
import { Button } from "./Button.js";
import CreateTodoForm from "./CreateTodoForm.js";
import type { Todo } from "./generatedNoCheck2/index.js";
import { $Objects } from "./generatedNoCheck2/index.js";
import { H2 } from "./H2.js";
import { Section } from "./Section.js";
import { SpecificTodo } from "./SpecificTodo.js";
import { SmallTextDiv, TodoView } from "./TodoView.js";

const whereClauses: WhereClause<Todo>[] = [
  { title: { $startsWith: "ea " } },
  { title: { $startsWith: "cool " } },
  {},
];

function App() {
  const [clauseIdx, setClauseIdx] = React.useState(0);

  const { data, isLoading, error, isOptimistic } = useOsdkList($Objects.Todo, {
    where: whereClauses[clauseIdx],
  });

  if (!data && isLoading) {
    return "Loading";
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-6 text-xl">Todos App</h1>

      <div className="flex flex-row items-start text-left">
        <div className="flex-auto flex-col min-w-80 mr-8">
          <H2>Todos</H2>
          {error && <h2>{JSON.stringify(error)}</h2>}
          {data
            && data.map((todo) => (
              <TodoView
                todo={todo}
                key={todo.id}
              />
            ))}
        </div>
        <div className="w-64">
          <Section>
            <H2>Create Todo</H2>
            <CreateTodoForm />
          </Section>

          <Section>
            <SpecificTodo />
          </Section>

          <Section>
            <H2>
              Filter{" "}
              <div>
                <SmallTextDiv>
                  {isLoading
                    ? (
                      <div className="ml-2 w-4 h-4 rounded-full animate-spin shrink-0
border border-solid border-yellow-800 border-t-transparent inline">
                      </div>
                    )
                    : <div className="ml-2 w-4 h-4 inline"></div>}
                  {isOptimistic
                    ? "(Optimistic)"
                    : ""}
                  {isLoading ? "(Loading)" : ""}
                </SmallTextDiv>
              </div>
            </H2>
            <pre className="text-sm">
            {JSON.stringify(whereClauses[clauseIdx], null, 2)}
            </pre>
            <div className="my-4">
              <Button
                onClick={() =>
                  setClauseIdx((x) => (x + 1) % whereClauses.length)}
              >
                ChangeFilter
              </Button>
            </div>
          </Section>

          <Section>
            <SpecificTodo />
          </Section>
        </div>
      </div>
    </main>
  );
}

export default App;
