import React, { useState, useEffect } from "react";
import "./GetStarted.css";
import Logo from "../../assets/logo.png";
import ModalGetStarted from "./ModalGetStarted/ModalGetStarted";
import styled from "styled-components";

const GetStarted = () => {
  const [closeGetStarted, setCloseGetStarted] = useState(true);
  const [navDown, setNavDown] = useState(true);
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserName(data.name);
      setShow(true);
    } catch (err) {}
  };

  useEffect(() => {
    userHomePage();
  }, []);
  return (
    <>
      <PopUp show={navDown}>
        <div className="GetStarted">
          <button>
            <img src={Logo} alt="" />
            <h4>{show ? "Hello" : "hey just intro"}</h4>
            <h4>{userName}</h4>
          </button>
        </div>
      </PopUp>
      {closeGetStarted && <ModalGetStarted />}
    </>
  );
};

export default GetStarted;
const PopUp = styled.div`
  font-family: "Open Sans", sans-serif;
  position: fixed;
  top: 8%;
  right: 69%;
  border-radius: 10px;
  width: 400px;
  height: 201px;
  transition: transform 0.6s ease-in-out;
  z-index: 10000;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(1800px)"};
`;
