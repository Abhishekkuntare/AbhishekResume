import React from "react";
import "./Terminal.css";
import Cross from "../../../assets/cross.png";

const Terminal = ({ ToggleTerminal }) => {
  return (
    <>
      <div className="terminal">
        <div className="terminal_inner">
          <h1>Terminal</h1>
          <img onClick={() => ToggleTerminal()} src={Cross} alt="cr" />
        </div>
        <h2>Compiled successfully!</h2>
        <h3>You can view now in the browser.</h3>
        <h3>
          {">"} vscode@0.1.0 start <br /> {">"} react-scripts start
        </h3>
        <p>Copyright (C) Abhishek Kuntare. All rights reserved.</p>
      </div>
    </>
  );
};

export default Terminal;
