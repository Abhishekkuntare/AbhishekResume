import React, { useState } from "react";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  //now user store all this key and value
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    value = e.target.value;
    name = e.target.name;

    //use sperad operator to store
    setUser({ ...user, [name]: value }); ///get all data dynamically
  };

  //connect frontend to backend with async await
  const PostData = async (e) => {
    e.preventDefault();
    // object destructuring avoud user.name,user.email
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      //this is same as postman
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      //server does'nt understand json so we convert it into string and then pass
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    //then check the res we get it perfect or not
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("success registration");
      console.log("success registration");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="login">
        <div className="login-box">
          <h2>Create Account</h2>
          <form method="POST" onSubmit={PostData}>
            <div className="user-box">
              <input
                type="text"
                name="name"
                required
                value={user.name}
                onChange={handleInputs}
              />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                name="email"
                required
                value={user.email}
                onChange={handleInputs}
              />
              <label>Email</label>
            </div>

            <div className="user-box">
              <input
                type="number"
                name="phone"
                required
                value={user.phone}
                onChange={handleInputs}
              />
              <label>Phone</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name="work"
                required
                value={user.work}
                onChange={handleInputs}
              />
              <label>Work</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                required
                value={user.password}
                onChange={handleInputs}
                autoComplete="off"
              />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="cpassword"
                required
                value={user.cpassword}
                onChange={handleInputs}
              />
              <label>Conform Password</label>
            </div>
            <button type="submit">Register</button>
          </form>
          <p className="accountsing">
            Already have an account?<Link to="/login"> Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
