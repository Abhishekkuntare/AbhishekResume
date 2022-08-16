import React from "react";
import "./RightSidebar.css";
const RightSidebar = () => {
  return (
    <div className="RightSidebar_abhishek">
      <div className="rightSidebar_top_abhishek">
        <a href="/">
          <div className="right_sidebar_circle_abhishek" />
        </a>
        <h3>Work</h3>
        <h2>Code</h2>
      </div>
      <div className="right_sidebar_bottom_abhishek">
        <a
          className="link"
          href="https://www.linkedin.com/in/abhishek-kuntare-65662421b/"
        >
          Linkedin
        </a>
        <a className="link" href="https://github.com/Abhishekkuntare">
          Github
        </a>
        <a className="link" href="https://leetcode.com/Abhishekkuntare/">
          Leet Code
        </a>
        <a className="link" href="https://www.codechef.com/users/abhishek_0210">
          Code Chef
        </a>
      </div>
    </div>
  );
};

export default RightSidebar;
