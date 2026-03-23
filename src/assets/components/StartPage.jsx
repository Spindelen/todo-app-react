
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/StartPage.css";


const StartPage = ({ setUsername, setTheme }) => {
  const [name, setName] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("task");
  const navigate = useNavigate();

  const handleStart = () => {
    if (!name.trim()) return;

    // spara i state
    setUsername(name);
    setTheme(selectedTheme);

    // Spara i localStorage
    localStorage.setItem("username", name);
    localStorage.setItem("theme", selectedTheme);

    navigate("/tasks");
  };

  return (
    <div className="startpage-wrapper">
      <h1 className="mb-4">Welcome</h1>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter your username..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h4 className="mt-4">Choose layout</h4>

      <div className="theme-select mt-2">
        <label>
          <input
            type="radio"
            name="theme"
            value="task"
            checked={selectedTheme === "task"}
            onChange={() => setSelectedTheme("task")}
          />
          Task
        </label>

        <label>
          <input
            type="radio"
            name="theme"
            value="scifi"
            checked={selectedTheme === "scifi"}
            onChange={() => setSelectedTheme("scifi")}
          />
          Sci‑Fi
        </label>

        <label>
          <input
            type="radio"
            name="theme"
            value="postit"
            checked={selectedTheme === "postit"}
            onChange={() => setSelectedTheme("postit")}
          />
          Post‑It
        </label>
      </div>

      <button className="btn btn-primary mt-4" onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default StartPage; 
