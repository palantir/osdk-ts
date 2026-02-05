import React from "react";
import { CreateTodo } from "./components/CreateTodo.js";
import { TodoList } from "./components/TodoList.js";

function App(): React.ReactElement {
  return (
    <div className="min-h-dvh bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          OSDK React Hooks Demo
        </h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Create New Todo</h2>
          <CreateTodo />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Todo List</h2>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
