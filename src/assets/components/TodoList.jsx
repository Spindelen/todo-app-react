// src/components/TodoList.jsx
import TodoCard from "./TodoCard";

const TodoList = ({ todos, onDelete, onEdit, onToggle }) => {
  return (
    <div className="card shadow-sm p-4 bg-body-tertiary mb-5">
      <section>
        <div className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
          <h2 className="h4 mb-0">Todos</h2>

          <div className="btn-group">
            <button className="btn btn-outline-secondary btn-sm">
              <i className="bi bi-funnel"></i>
            </button>
            <button className="btn btn-outline-secondary btn-sm">
              <i className="bi bi-sort-down"></i>
            </button>
          </div>
        </div>

        {todos.length === 0 && (
          <p className="text-muted">No todos yet.</p>
        )}

        <div className="postit-grid">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggle={onToggle}
          />
        ))}
        </div>
      </section>
    </div>
  );
};

export default TodoList;

