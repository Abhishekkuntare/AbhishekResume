import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  //promses
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json", //this if for cookie
        "Content-Type": "application/json",
      },
      credentials: "include", //this is for cookie
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        navigate("/login", { replace: true });
        if (res.status != 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div>Logout</div>;
};

export default Logout;
