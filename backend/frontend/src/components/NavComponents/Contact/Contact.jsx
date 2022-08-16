import React, { useEffect } from "react";
import { useState } from "react";
import "../Login/Login.css";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      // console.log(data);
      setUser({
        ...user,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {}
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  //send data to backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = user;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();
    if (!data) {
      console.log("message not send");
    } else {
      alert("Message send");
      setUser({ ...user, message: "" });
    }
  };
  return (
    <>
      <div className="login">
        <div className="login-box">
          <h2>Contact Details</h2>
          <form method="POST" onSubmit={contactForm}>
            <div className="user-box">
              <input
                type="name"
                name="name"
                required
                value={user.name}
                onChange={handleInputs}
              />
              <label>Your Name</label>
            </div>
            <div className="user-box">
              <input
                type="email"
                name="email"
                required
                value={user.email}
                onChange={handleInputs}
              />
              <label>Your Email</label>
            </div>

            <div className="user-box">
              <input
                type="text"
                name="phone"
                required
                value={user.phone}
                onChange={handleInputs}
              />
              <label>Your Number</label>
            </div>

            <div className="user-box">
              <textarea
                onChange={handleInputs}
                className="textarea"
                placeholder="Any Query"
                value={user.message}
                name="message"
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>

            <button type="submit">Send Query </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
