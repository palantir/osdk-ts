import type { WhereClause } from "@osdk/client";
import React from "react";
import "./App.css";
import CreateTodoForm from "./CreateTodoForm.js";
import FilterSelector from "./FilterSelector.js";
import type { TodoLike } from "./generatedNoCheck2/index.js";
import { H1 } from "./H2.js";
import { Section } from "./Section.js";
import { SortOnAppendMrePage } from "./SortOnAppendMre.js";
import { SpecificTodo } from "./SpecificTodo.js";
import { SpecificTodoViaInterface } from "./SpecificTodoViaInterface.js";
import TodoList from "./TodoList.js";
import ValidateActionDemo from "./ValidateActionDemo.js";

function useHash() {
  const [hash, setHash] = React.useState(window.location.hash);
  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
}

function App() {
  const hash = useHash();

  if (hash === "#mre-sort-on-append") {
    return <SortOnAppendMrePage />;
  }

  return <HomePage />;
}

function HomePage() {
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

          <Section>
            <a
              href="#mre-sort-on-append"
              className="text-blue-500 underline text-sm"
            >
              MRE: Skip Sort on Append &rarr;
            </a>
          </Section>
        </div>
      </div>
    </main>
  );
}

export default App;
