import type { WhereClause } from "@osdk/client";
import React from "react";
import "./App.css";
import CreateTodoForm from "./CreateTodoForm.js";
import FilterSelector from "./FilterSelector.js";
import type { TodoLike } from "./generatedNoCheck2/index.js";
import { H1 } from "./H2.js";
import { Section } from "./Section.js";
import { SpecificTodo } from "./SpecificTodo.js";
import { SpecificTodoViaInterface } from "./SpecificTodoViaInterface.js";
import TodoList from "./TodoList.js";
import ValidateActionDemo from "./ValidateActionDemo.js";

function App() {
  const [whereClause, setWhereClause] = React.useState<WhereClause<TodoLike>>(
    {},
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <H1>Todos App</H1>

      <div className="flex flex-row items-start text-left">
        <div className="min-w-80 mr-8">
          <Section>
            <TodoList where={whereClause} />
          </Section>
        </div>

        <div className="w-64">
          <Section>
            <CreateTodoForm />
          </Section>

          <Section>
            <SpecificTodo />
          </Section>

          <Section>
            <SpecificTodoViaInterface />
          </Section>

          <Section>
            <ValidateActionDemo />
          </Section>

          <Section>
            <FilterSelector
              setFilter={setWhereClause}
              heading="<-- Filter"
            />
          </Section>
        </div>
      </div>
    </main>
  );
}

export default App;
