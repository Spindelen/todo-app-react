import React from "react";

const Header = () => {
    return (
    

        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Tasks</h2>

      
            <div className="input-group" style={{ width: "300px" }}>
             <span className="input-group-text bg-white">
                 <i className="bi bi-search"></i>
             </span>

             <input
                 type="text"
                 className="form-control"
                 placeholder="Search tasks..."
                />
      </div>

    </div>
       
            
       
    );
};

export default Header;




