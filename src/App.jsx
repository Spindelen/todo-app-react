import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";
import Content from "./assets/components/Content";
import Sidebar from "./assets/components/Sidebar";
import TodoList from "./assets/components/TodoList";
import StartPage from "./assets/components/StartPage";
import "./assets/components/css/Themes.css";
import "./assets/components/css/App.css";

const PAGES = [
  { name: "Dashboard", icon: "bi-grid", href: "/dashboard" },
  { name: "Users", icon: "bi-people", href: "/users" },
  { name: "Tasks", icon: "bi-list-check", href: "/tasks" },
  { name: "Settings", icon: "bi-gear", href: "/settings" }
];


function App() {

  
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "task");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Test-todo",
      description: "This is a test",
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate:"2025-01-01",
      assignedTo: "Don Joe",
      attachments: []
    }
  ]);

  const [search, setSearch] = useState("");
  const [editTodo, setEditTodo] = useState(null);


  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (todo) => {
    setEditTodo(todo);
  };

  const saveEdit = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
    setEditTodo(null);
  };

  const sortTodos = () => {
    setTodos([...todos].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const filterCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    const q = search.toLowerCase();
    return (
      todo.title.toLowerCase().includes(q) ||
      todo.description.toLowerCase().includes(q)
    );
  });

  return (
 
  <Routes>

    <Route
  path="/"
  element={
    <div className="app-wrapper theme-startpage">
      <StartPage setUsername={setUsername} setTheme={setTheme} />
    </div>
  }
/>
   <Route path="/dashboard" element={<h1>Dashboard</h1>} />
  <Route path="/users" element={<h1>Users</h1>} />
  <Route path="/settings" element={<h1>Settings</h1>} />
  
    <Route
      path="/tasks"
      element={
       <div className={`app-wrapper theme-${theme} d-flex`}> 
          <Sidebar
          navlinks={PAGES}
           setTheme={setTheme}
           username={username}
           setUsername={setUsername}
           sidebarOpen={sidebarOpen}
           setSidebarOpen={setSidebarOpen}
          />

          <div className="flex-grow-1">
            <Header 
            search={search}
            setSearch={setSearch}
            theme={theme} 
            setTheme={setTheme}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            />
            <div className="tasks-wrapper">
            <Content
              onAddTodo={addTodo}
              editTodo={editTodo}
              onSaveEdit={saveEdit}
              username={username}
            />

            <TodoList
              todos={filteredTodos}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
              onEdit={startEdit}
               onSort={sortTodos}
                onFilter={filterCompleted}
            />
            </div>
          </div>
        </div>
      }
    />

  </Routes>


  );
}

export default App;