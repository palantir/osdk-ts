import React from "react";
import "./App.css";
import CreateTodoForm from "./CreateTodoForm.js";
import { TodoView } from "./TodoView.js";
import { useTodos } from "./useTodos.js";

function App() {
  const { todos, isLoading, toggleComplete, error, isValidating, createTodo } =
    useTodos();

  if (todos) {
    console.log(todos[0]);
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <h1 className="mb-6 text-xl">Todos</h1>

      <div className="min-w-fit">
        <CreateTodoForm createTodo={createTodo} />
        <div>
          <div className="flex mb-4">
            {isLoading || isValidating
              ? (
                <div className="mr-2 w-4 h-4 rounded-full animate-spin shrink-0
border border-solid border-yellow-800 border-t-transparent">
                </div>
              )
              : <div className="mr-2 w-4 h-4"></div>}
            {isLoading || isValidating ? "Loading" : ""}
          </div>

          {error && <h2>{error.toString()}</h2>}
          {todos
            && todos.map((todo) => (
              <TodoView
                todo={todo}
                toggleComplete={toggleComplete}
                key={todo.id}
                loading={isLoading || isValidating}
              />
            ))}
        </div>
      </div>
    </main>
  );
}

export default App;
