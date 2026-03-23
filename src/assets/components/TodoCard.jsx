
import "./css/TodoCard.css";

const TodoCard = ({ todo, onDelete, onEdit, onToggle }) => {
  const createdDate = new Date(todo.createdAt).toISOString().split("T")[0];

  return (
    <div className={`card todo-card mb-3 shadow-sm ${todo.completed ? "completed" : ""}`}>
      <div className="card-body">
        {todo.completed && (
        <div className="done-stamp">DONE</div>
        )}


       
        <div className="d-flex justify-content-between align-items-start">

          
          <div>
            <h5 className="fw-bold mb-1">{todo.title}</h5>
            <p className="text-muted mb-2">{todo.description}</p>

            
            <div className="d-flex flex-column gap-1">

              
              <span className="d-flex align-items-center">
                <i className="bi bi-calendar-event me-1"></i>
                Due: {todo.dueDate}
              </span>

             
              {todo.assignedTo && (
                <span className="badge-person">
                  <i className="bi bi-person"></i>
                  {todo.assignedTo}
                </span>
              )}

             
              {todo.attachments && todo.attachments.length > 0 && (
                <span className="badge-attachments">
                  <i className="bi bi-paperclip"></i>
                  {todo.attachments.length} attachment(s)
                </span>
              )}
            </div>
          </div>

         
          <div className="d-flex align-items-center gap-3">

            <span className="text-muted" style={{ fontSize: "0.85rem" }}>
              Created: {createdDate}
            </span>

            <button
              className="btn btn-sm btn-outline-success p-1"
              onClick={() => onToggle(todo.id)}
            >
              <i className={`bi ${todo.completed ? "bi-check2-circle" : "bi-check-lg"}`}></i>
            </button>

            <button
              className="btn btn-sm btn-outline-primary p-1"
              onClick={() => onEdit(todo)}
            >
              <i className="bi bi-pencil"></i>
            </button>

            <button
              className="btn btn-sm btn-outline-danger p-1"
              onClick={() => onDelete(todo.id)}
            >
              <i className="bi bi-trash"></i>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TodoCard;
