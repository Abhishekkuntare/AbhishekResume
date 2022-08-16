import React, { useState } from "react";
import "./StartModal.css";
import styled from "styled-components";
import Protect from "../../assets/protect.png";
import "../../assets/Fonts.css";

const StartModal = () => {
  const [navDown, setNavDown] = useState(true);

  const header_title = "Do you trust the authors of the this web-app?";

  return (
    <div className="StartModal">
      <PopUp show={navDown}>
        <div className="start_modal_navDown">
          <div className="start_modal_header">
            <img src={Protect} alt="protect_img" />
            <h1>{header_title}</h1>
          </div>
          <h2>
            Code provides features that may automatically execute this app.
          </h2>
          <h3>
            If you don't trust the authors of these app, I recommend to continue{" "}
            <br />
            in restricted mode as the app may be malicious.
          </h3>
          <h4>C:\Users\Admin\OneDrive\Desktop</h4>
          <div className="start_modal_checkmodal">
            <input className="input_checkbox" type="checkbox" />
            <h1>
              Trust the authors of all files in the parent folder in 'OneDrive'{" "}
            </h1>
          </div>
          <div className="start_modal_button">
            <button
              onClick={() => setNavDown(false)}
              className="start_modal_button1"
            >
              Yes, I trust the authors <br />{" "}
              <span>
                <i className="button_innertext">
                  Trust folder and enable all features
                </i>
              </span>
            </button>
            <button
              onClick={() => setNavDown(false)}
              className=" start_modal_button2"
            >
              No, I don't trust the authors <br />
              <span>
                <i className="button_innertext">
                  {" "}
                  Browse folder in restricted mode
                </i>
              </span>
            </button>
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default StartModal;
const PopUp = styled.div`
  border: 0.1px solid #1b2936;
  border-radius: 5px;
  font-family: "Open Sans", sans-serif;
  position: fixed;
  top: 21%;
  right: 29%;
  background: #021320;
  border-radius: 5px;
  width: 650px;
  height: 401px;
  transition: transform 0.6s ease-in-out;
  z-index: 10000;
  transition: transform 0.6s ease-in-out;
  box-shadow: 4px 17px 42px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 17px 42px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 17px 42px -4px rgba(0, 0, 0, 0.75);
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(-1800px)"};
  @media all and (max-width: 1300px) {
    top: 25%;
    right: 25%;
  }
  @media all and (max-width: 1200px) {
    right: 22%;
  }
  @media all and (max-width: 1100px) {
    right: 20%;
  }
  @media all and (max-width: 1000px) {
    right: 14%;
  }
  @media all and (max-width: 900px) {
    right: 10%;
  }
  @media all and (max-width: 865px) {
    width: 394px;
    height: 240px;
    right: 19%;
  }
  @media all and (max-width: 605px) {
    right: 11%;
  }
  @media all and (max-width: 553px) {
    right: 5%;
  }

  @media all and (max-width: 470px) {
    width: 328px;
    height: 220px;
    right: 10%;
  }
  @media all and (max-width: 393px) {
    right: 5%;
  }
  @media all and (max-width: 355px) {
    right: 2%;
    width: 308px;
    height: 220px;
  }
`;
