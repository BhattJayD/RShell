import "./App.css";
import React, { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : "light"}>
      <div className="body">
        <div className="switch">
          <label>
            {dark ? "dark" : "light"}
            <input
              type="checkbox"
              onChange={(e) => {
                // console.log(e.type);
                setDark(!dark);
              }}
            />
            <span className="lever"></span>
          </label>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h3>Reverse shell maker</h3>
        </div>
        <div className="boxBody">
          <div className="box">ip and port</div>
          <div className="box">ip and port</div>
        </div>
      </div>
    </div>
  );
}

export default App;
