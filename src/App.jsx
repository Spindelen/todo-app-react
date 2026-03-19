import { useState } from "react";
import Header from "./assets/components/Header";
import Content from "./assets/components/content";
import Sidebar from "./assets/components/Sidebar";
import TodoCard from "./assets/components/TodoCard";
import TodoList from "./assets/components/TodoList";
import "./assets/components/css/App.css"


function App() {
  const [todos, setTodos] = useState([
   {id: 1, 
    title: "Test-todo",
    description: "This is a test", 
    completed: false,
    createdAt: new Date().toISOString(),
    assignedTo: "Don Joe",
    attachments: []
  }
  ]);
const [search, setSearch] = useState("");

const addTodo = (newTodo) => {
  setTodos([...todos, newTodo]);
};

const filteredTodos = todos.filter((todo) => {
    const q = search.toLowerCase();
    return (
      todo.title.toLowerCase().includes(q) ||
      todo.description.toLowerCase().includes(q)
    );
  });

 return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1">
        <Header search={search} setSearch={setSearch} />

        <Content onAddTodo={addTodo} />

        <TodoList
          todos={filteredTodos}
          onDelete={(id) => console.log("Delete", id)}
          onToggle={(id) => console.log("Toggle", id)}
        />
      </div>
    </div>
  );
}

export default App
