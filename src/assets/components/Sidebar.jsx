
// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar bg-light p-3" style={{ width: "220px", height: "100vh" }}>
      <h4 className="mb-4">Menu</h4>

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/">Dashboard</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/users">Users</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/tasks">Tasks</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/settings">Settings</Link>
        </li>
      </ul>


      <div className="mt-auto pt-5">
        <p className="text-muted">Username</p>
        <a href="#" className="text-danger">Logout</a>
      </div>
    </div>
  );
};

export default Sidebar;

