import React, { useState } from "react";
import RightSidebar from "../RightSidebar/RightSidebar";
import "./Start.css";
import "./MediaStart.css";
import Cross from "../../assets/cross.png";
import styled from "styled-components";

const Start = () => {
  const [mediaBurger, setMediaBurger] = useState(false);
  return (
    <>
      <div className="html">
        <p>
          {"<"}html{">"}
        </p>
        <p className="html_p">
          {"<"}body{">"}
        </p>
      </div>
      <div className="MainStart">
        <div className="Start">
          <div className="start_row1">
            <div className="start_row" />
            <div className="start_row_inner1" />
            <div className="start_row_circle" />
          </div>
          <div className="start_row_2" />
          <div className="start_row_3">
            <div className="start_row_3_inner1" />
            <div className="start_row_square" />
            <div className="start_row_3_inner3" />
            <div className="start_row_3_inner4" />
          </div>
          <div className="start_row_4">
            <div className="start_row_4_inner1" />
            <div className="start_row_inner1" />
            <div className="start_row_circle" />
            <div className="start_row_4_inner3" />
          </div>
          <div className="start_row_5">
            <div className="start_row_5_inner_1" />
            <div className="start_row_square" />
            <div className="start_row_3_inner3" />
            <div className="start_row_5_inner_2" />
          </div>
          <div className="start_name_role">
            <span className="html_h1">{"<h1>"}</span>
            <h1>Abhishek Kuntare</h1>
            <span className="html_h1">{"</h1>"}</span>
            <br />
            <span className="html_name_p">{"<p>"}</span>
            <p>Creative Developer</p>
            <span className="html_name_p">{"</p>"}</span>
          </div>
          <div className="start_row_6">
            <div className="start_row" />
            <div className="start_row_circle" />
          </div>
          <div className="start_row_7">
            <div className="start_row_7_1" />
            <div className="start_row_7_2" />
            <div className="start_row_7_3" />
          </div>
          <div className="start_row_8">
            <div className="start_row" />
            <div className="start_row_7_2" />
          </div>
          <div className="start_row_9">
            <div className="start_row_9_1" />
          </div>
          <div className="start_row_10">
            <div className="start_row_10_1" />
            <div className="start_row_square" />
            <div className="start_row_3_inner3" />
            <div className="start_row_10_2" />
          </div>
        </div>
        <RightSidebar />
      </div>
      <div className="html">
        <p>
          {"</"}html{">"}
        </p>
        <p className="html_p">
          {"</"}body{">"}
        </p>
      </div>
      <MediaNavBurger display={mediaBurger}>
        <div className="mediaNavBurger">
          <div className="medianav_cross">
            <img
              onClick={() => setMediaBurger(false)}
              src={Cross}
              alt="cross"
            />
          </div>
          <p>File</p>
          <p>Edit</p>
          <p>Selection</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Help</p>
        </div>
      </MediaNavBurger>
    </>
  );
};

export default Start;

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
