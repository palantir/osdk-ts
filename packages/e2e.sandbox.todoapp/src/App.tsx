import { useOsdkList } from "@osdk/react";
import "./App.css";
import CreateTodoForm from "./CreateTodoForm.js";
import { TodoView } from "./TodoView.js";

import { $Objects } from "./generatedNoCheck2/index.js";

function App() {
  const { data, isLoading, error } = useOsdkList($Objects.Todo, {
    where: { title: { $startsWith: "cool" } },
  });

  console.log({ data, isLoading, error });

  if (!data && isLoading) {
    return "Loading";
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <h1 className="mb-6 text-xl">Todos</h1>

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
            {isLoading ? "Loading" : ""}
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
