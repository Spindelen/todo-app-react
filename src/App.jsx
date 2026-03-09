import { useState } from "react";
import Header from "./assets/components/Header";
import Content from "./assets/components/content";
import Sidebar from "./assets/components/Sidebar";
import TodoCard from "./assets/components/TodoCard";
import TodoList from "./assets/components/TodoList";


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

  return(
    <div className="d-flex">
      <Sidebar/>
      <div className="flex-grow-1">
        <Header/>
        <Content/>
        <TodoList
        todos={todos}
        onDelete={(id) => 
          console.log('Delete', id)}
        onToggle={(id) => 
          console.log('Toggle', id)}
       />
      </div>
    </div>
    );
 
}

export default App
