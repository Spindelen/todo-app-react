import { useState } from "react";

const Content = ({ onAddTodo }) => {
   const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [attachments, setAttachments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title,
      description,
      dueDate,
      assignedTo,
      attachments,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onAddTodo(newTodo);

    setTitle("");
    setDescription("");
    setDueDate("");
    setAssignedTo("");
    setAttachments([]);
  };

  return (
    <main className="card card-body mt-5 mx-4 mb-4">
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input 
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required 
        />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea 
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Due date</label>
            <input
            type="datetime-local"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Assigned to (optional)</label>
            <select 
            className="form-select"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            >
              
              <option value="">--- Select Person (Optional) --</option>
              <option value="1">Jon Due</option>
              <option value="2">Captain Kirk</option>
              <option value="3">Captain Janeway</option>
            </select>
          </div>
        </div>

        
        <div className="mb-3">
          <label className="form-label">Attachment (optional)</label>

          <div className="input-group">
            <input
                className="form-control form-control-sm"
                type="file"
                id="attachment"
                multiple
                onChange={(e) => {
                const files = Array.from(e.target.files);
                setAttachments(files);
                 }}
            />

            
            <button 
            className="btn btn-outline-secondary btn-sm"
            type="button"
            onClick={() => setAttachments([])}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div
            className="border rounded p-2 bg-white"
            style={{ minHeight: "50px", fontSize: "0.85rem" }}
          ></div>
        </div>

        <div className="text-end mt-4">
          <button className="btn btn-primary" type="submit">+ Add Todo</button>
        </div>

      </form>
    </main>
  );
};

export default Content;
