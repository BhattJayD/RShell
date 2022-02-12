import "./App.css";
import React, { useState } from "react";
import Select from "react-select";
const Countries = [
  { label: "nc", value: 1 },
  { label: "ncat", value: 2 },
  { label: "python", value: 2 },
];
function App() {
  const [dark, setDark] = useState(true);
  const [ip, setIp] = useState("192.168.0.1");
  const [port, setPort] = useState("4444");

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
          <div className={dark ? "boxDark" : "boxLight"}>
            ip & port
            <div className="input-field col s6">
              <input
                id="IP"
                value={ip}
                style={{ color: dark ? "#fff" : "#000" }}
                type="text"
                className="validate"
                onChange={(e) => setIp(e.target.value)}
              />
              <label for="IP">IP</label>
            </div>
            <div className="input-field col s6">
              <input
                id="PORT"
                value={port}
                style={{ color: dark ? "#fff" : "#000" }}
                type="text"
                className="validate"
                onChange={(e) => setPort(e.target.value)}
              />
              <label for="PORT">PORT</label>
            </div>
          </div>
          <div className={dark ? "boxDark" : "boxLight"}>
            listner
            <div>
              <Select
                style={{ color: dark ? "#fff" : "#000" }}
                options={Countries}
                // theme={(theme) => ({
                //   ...theme,
                //   borderRadius: 0,
                //   colors: {
                //     // ...theme.colors,
                //     text: "#000",
                //     primary25: "#aff",
                //     // primary: "#000",
                //     // color: "#000",
                //   },
                // })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
