import { useState, useEffect } from "react";


const Content = ({ onAddTodo, editTodo, onSaveEdit, username}) => {
   const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
      setDueDate(editTodo.dueDate);
      setAssignedTo(editTodo.assignedTo);
      setAttachments(editTodo.attachments || []);
    }
  }, [editTodo]);

    const handleSubmit = (e) => {
    e.preventDefault();

    if (editTodo) {
      onSaveEdit({
        ...editTodo,
        title,
        description,
        dueDate,
        assignedTo,
        attachments
      });
    } else {
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
    }

    setTitle("");
    setDescription("");
    setDueDate("");
    setAssignedTo("");
    setAttachments([]);
  };

  return (
    <main className="card card-body mt-5 mb-4">
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
              <option value="Jon Due">Jon Due</option>
              <option value="Captain Kirk">Captain Kirk</option>
              <option value="Captain Janeway">Captain Janeway</option>

              {username && <option value={username}>{username}</option>}

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
          <button className="btn btn-primary" type="submit">
            {editTodo ? "Save Changes" : "+ Add Todo"} </button>
        </div>

      </form>
    </main>
  );
};

export default Content;
