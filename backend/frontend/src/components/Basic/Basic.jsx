import React from "react";
import "./Basic.css";
import GetStarted from "../GetStarted/GetStarted";
import Nav from "../Nav/Nav";
import StartModal from "../StartModal/StartModal";

const Basic = () => {
  return (
    <div>
      <Nav />

      <div className="basic_flex">
        <GetStarted />
      </div>

      <StartModal />
    </div>
  );
};

export default Basic;
