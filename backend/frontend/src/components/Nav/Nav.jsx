import React, { useContext, useState } from "react";
import "./Nav.css";
import "./MediaNav.css";
import "../../assets/Fonts.css";
import Logo from "../../assets/logo.png";
import Cross from "../../assets/cross.png";
import BlackCross from "../../assets/blackCross.png";
import Menu from "../../assets/menu.png";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Terminal from "./Terminal/Terminal";

import { UserContext } from "../../App";

const Nav = () => {
  const [navDown, setNavDown] = useState(false);
  const [mediaBurger, setMediaBurger] = useState(false);
  const [openTerminal, setOpenTerminal] = useState(false);

  const ToggleTerminal = () => {
    openTerminal ? setOpenTerminal(false) : setOpenTerminal(true);
  };

  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <NavLink exact to="/">
            basic
          </NavLink>
          <NavLink exact to="/file">
            File
          </NavLink>
          <Link exact to="/projects">
            Projects
          </Link>
          <Link exactto="/aboutme">Profile</Link>
          <Link exact to="/Contact">
            Contact
          </Link>
          <Link exact to="/a" onClick={() => ToggleTerminal()}>
            Terminal
          </Link>
          <Link to="/logout">Logout</Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/">File</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/login">Login </Link>
          <Link to="/signup">Register </Link>
          <Link to="/a" onClick={() => ToggleTerminal()}>
            Terminal
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <div className="nav">
        <div className="nav_left">
          <Link to="/">
            <img className="logo" src={Logo} alt="LOGO" />
          </Link>
          <div className="nav_left_item">
            <RenderMenu />
          </div>
        </div>
        <div className="nav_right">
          <div className="boxes2">
            <div onClick={() => ToggleTerminal()} className="box2"></div>
          </div>
          <div className="nav_right_icons">
            <img
              className="menu_right_img"
              onClick={() => setMediaBurger(true)}
              src={Menu}
              alt=""
            />
            <img
              onClick={() => setNavDown(true)}
              className="nav_right_img3"
              src={Cross}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* popup  */}
      <PopUp show={navDown}>
        <div className="modal_header">
          <h1>Visual Studio Code</h1>
          <img onClick={() => setNavDown(false)} src={BlackCross} alt="Cross" />
        </div>

        <div className="modal_mid">
          <div className="modal_mid_row">
            {" "}
            <h1>⚠️</h1>
            <h2> Are you sure you want to continue</h2>
          </div>
          <p>
            Thanks! for visit here , I'm sure you will enjoy it. Have a nice
            day.
          </p>
        </div>
        <div className="modal_footer">
          <Link to="/start">
            <button>Continue</button>
          </Link>

          <button onClick={() => setNavDown(false)}>Cancel</button>
        </div>
      </PopUp>
      {openTerminal && <Terminal ToggleTerminal={ToggleTerminal} />}

      <MediaNavBurger display={mediaBurger}>
        <div className="mediaNavBurger">
          <div className="medianav_cross">
            <img
              onClick={() => setMediaBurger(false)}
              src={Cross}
              alt="cross"
            />
          </div>
          <Link to="/file">File</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/aboutme">About me</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/login">Login </Link>
          <Link to="/register">Register </Link>
          <p onClick={() => ToggleTerminal()}>Terminal</p>
        </div>
      </MediaNavBurger>
    </>
  );
};

export default Nav;
const PopUp = styled.div`
  font-family: "Open Sans", sans-serif;
  position: fixed;
  top: 30%;
  right: 35%;
  background: #fcfafa;
  border-radius: 10px;
  width: 400px;
  height: 201px;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(1800px)"};
  @media all and (max-width: 1289px) {
    right: 0%;
    left: 0%;
    margin-right: auto;
    margin-left: auto;
  }
  @media all and (max-width: 700px) {
    width: 300px;
    height: 201px;
  }
  @media all and (max-width: 446px) {
    width: 300px;
    height: 180px;
  }
`;
const MediaNavBurger = styled.div`
  font-family: "Open Sans", sans-serif;
  background: #011627;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 10000;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) =>
    props.display ? "translateY(0)" : "translateY(100%)"};
`;
