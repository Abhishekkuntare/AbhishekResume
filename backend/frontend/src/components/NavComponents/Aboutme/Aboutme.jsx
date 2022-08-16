import React, { useEffect } from "react";
import { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";

const Aboutme = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutmePage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json", //this if for cookie
          "Content-Type": "application/json",
        },
        credentials: "include", //this is for cookie
      });
      const data = await res.json();
      // console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutmePage();
  }, []);

  return (
    <>
      <div className="login">
        <div className="login-box">
          <h2>Your Profile</h2>
          <form>
            <div className="user-box">
              <input type="name" name="name" required value={userData.name} />
              <label>Your Name</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                name="email"
                required
                value={userData.email}
              />
              <label>Your Email</label>
            </div>

            <div className="user-box">
              <input
                type="text"
                name="number"
                required
                value={userData.phone}
              />
              <label>Your Number</label>
            </div>
            <div className="user-box">
              <input type="text" name="work" required value={userData.work} />
              <label>Passion</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
