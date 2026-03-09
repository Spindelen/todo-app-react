

const Content = () => {
  return (
    <main className="card card-body mt-5 mx-4 mb-4">
      <form id="taskForm">

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" id="title" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea id="description" className="form-control" rows="3" required></textarea>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="dueDate" className="form-label">Due date</label>
            <input type="datetime-local" id="dueDate" className="form-control" required />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Assigned to (optional)</label>
            <select id="assignedTo" className="form-select">
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

                const list = document.getElementById("fileList");
                list.innerHTML = files.map(f => `<div>${f.name}</div>`).join("");
                 }}
            />

            
            <button className="btn btn-outline-secondary btn-sm" type="button" id="clearAttachment">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div
            id="fileList"
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
