import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="Errorpage">
      <h1 className="Errorpage_h1">404 </h1>
      <Link className="link404" to="/">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
