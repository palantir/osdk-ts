import { useOsdkList } from "@osdk/react";
import "./App.css";
import React from "react";
import CreateTodoForm from "./CreateTodoForm.js";
import { $Objects } from "./generatedNoCheck2/index.js";
import { SmallTextDiv, TodoView } from "./TodoView.js";

function App() {
  const [$startsWith, setStartsWith] = React.useState("ea ");

  const { data, isLoading, error, isOptimistic } = useOsdkList($Objects.Todo, {
    where: { title: { $startsWith } },
  });

  if (!data && isLoading) {
    return "Loading";
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <h1 className="mb-6 text-xl">Todos App</h1>
      <a onClick={() => setStartsWith($startsWith === "ea " ? "FAIL" : "ea ")}>
        FAIL
      </a>

      <div className="min-w-fit">
        <CreateTodoForm />
        <div>
          <div className="flex mb-4">
            {isLoading
              ? (
                <div className="mr-2 w-4 h-4 rounded-full animate-spin shrink-0
border border-solid border-yellow-800 border-t-transparent">
                </div>
              )
              : <div className="mr-2 w-4 h-4"></div>}
            Todos{isOptimistic
              ? <SmallTextDiv>(Optimistic)</SmallTextDiv>
              : ""}
            {isLoading ? <SmallTextDiv>(Loading)</SmallTextDiv> : ""}
          </div>

          {error && <h2>{JSON.stringify(error)}</h2>}
          {data
            && data.map((todo) => (
              <TodoView
                todo={todo}
                key={todo.id}
              />
            ))}
        </div>
      </div>
    </main>
  );
}

export default App;
