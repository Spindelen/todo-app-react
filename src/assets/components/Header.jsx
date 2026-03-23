import "./css/Header.css";

const Header = ({ search, setSearch, theme, setTheme, sidebarOpen, setSidebarOpen}) => {

 const getTitle = () => {
    switch (theme) {
      case "task": return "Task";
      case "scifi": return "Starlog";
      case "postit": return "StickyBoard";
      default: return "Task";
    }
  };

  return (
    <div className="header-wrapper">

      
       <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <i className="bi bi-list"></i>
      </button>

      <button 
     className="darkmode-toggle"
     onClick={() => setTheme(theme === "dark" ? "task" : "dark")}
     >
       <i className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon"}`}></i>
      </button>

      <h2 className="header-title">{getTitle()}</h2>

      <div className="header-right">
      <div className="input-group">
        <span className="input-group-text bg-white">
          <i className="bi bi-search"></i>
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
    </div>
  );
};

export default Header;
