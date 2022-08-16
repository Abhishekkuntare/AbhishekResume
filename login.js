const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
require("./db/conn");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const jwt = require("jsonwebtoken");

app.use(require("./router/auth"));

//login page
app.get("/login", (req, res) => {
  const token = jwt.sign({ id: 1229, role: "Web Developer" }, process.env.KEY);
  return res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json({ message: "Log in successfully 😊 👌" });
});

const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }

  try {
    const data = jwt.verify(token, process.env.KEY);
    req.userId = data.id;
    req.userRole = data.role;
    return next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

app.get("/logout", (req, res) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out 😏 🍀" });
});

app.get("/protected", authorization, (req, res) => {
  return res.json({ user: { id: req.userId, role: req.userRole } });
});
const start = (port) => {
  try {
    app.listen(port, () => {
      console.log(`Api up and running at: http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};
start(process.env.PORT);
