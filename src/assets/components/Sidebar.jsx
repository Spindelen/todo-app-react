

import { Link } from "react-router-dom";
import { useState } from "react";
import "./css/Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <button className="menu-toggle" onClick={() => setOpen(!open)}>Menu</button>


    
    
    
    <div className={`sidebar ${open ? "open" : ""}`}>
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
    {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Sidebar;

