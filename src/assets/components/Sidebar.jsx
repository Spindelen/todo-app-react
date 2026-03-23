import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./css/Sidebar.css";

const Sidebar = ({ navlinks, setTheme, username, setUsername, sidebarOpen, setSidebarOpen }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    setUsername("");
    localStorage.removeItem("username");
    localStorage.removeItem("theme");
    navigate("/");
  };

 const closeMenu = () => setSidebarOpen(false);


  return (
    <>
      

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h4 className="mb-4">Menu</h4>

        <div className="btn-group mb-3">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => setTheme("default")}
          >
            Task
          </button>
          <button
            className="btn btn-sm btn-outline-warning"
            onClick={() => setTheme("scifi")}
          >
            Sci‑Fi
          </button>
          <button
            className="btn btn-sm btn-outline-success"
            onClick={() => setTheme("postit")}
          >
            Post-it
          </button>
        </div>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link" to="/dashboard" onClick={closeMenu}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link" to="/users" onClick={closeMenu}>
              Users
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link" to="/tasks" onClick={closeMenu}>
              Tasks
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link" to="/settings" onClick={closeMenu}>
              Settings
            </Link>
          </li>
        </ul>

        <div className="mt-auto p-3">
          <div className="fw-bold">{username}</div>

          <button 
            className="btn btn-link text-danger p-0 mt-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </>
  );
};

export default Sidebar;
