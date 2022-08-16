import React, { useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../../../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      // setEmail("");
      // setPassword("");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login sunccess");
      navigate("/aboutme");
    }
  };
  return (
    <>
      <div className="login">
        <div className="login-box">
          <h2>Log in</h2>
          <form method="POST">
            <div className="user-box">
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>

            <div className="user-box">
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <button onClick={loginUser} type="submit">
              Login
            </button>
          </form>
          <p className="accountsing">
            New user? <Link to="/signup">Create an account?</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
