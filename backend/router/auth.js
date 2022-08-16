const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const autenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

//register
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all stuff" });
  }

  try {
    const userExits = await User.findOne({ email: email });
    if (userExits) {
      return res.status(422).json({ error: "Email already exits!" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password is already taken!" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();

      res.status(201).json({ message: "User created succssfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login API----------------------------------------------
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all stuff for login" });
    }
    const emailExits = await User.findOne({ email: email });
    console.log(emailExits);

    if (emailExits) {
      const isMatch = await bcrypt.compare(password, emailExits.password);

      const token = await emailExits.generateAuthToken();
      console.log(token);
      res.cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        expires: new Date(Date.now() + 25892000000), //this is mili sec means 30 days
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials  " });
      } else {
        res.status(200).json({ message: "Login succssefully!" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", autenticate, (req, res, next) => {
  return res.send(req.rootUser);
});
router.get("/getData", autenticate, (req, res, next) => {
  return res.send(req.rootUser);
});

//contact us page
router.post("/contact", autenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      console.log("error in contact form");
      return res.json({ error: "Please fill the contact form" });
    }

    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "User contact success" });
    }
  } catch (err) {
    console.log(err);
  }
});

//logout
router.get("/logout", (req, res) => {
  res.clearCookie("access_token", { path: "/" });
  res.status(200).send("User logout");
});

module.exports = router;
