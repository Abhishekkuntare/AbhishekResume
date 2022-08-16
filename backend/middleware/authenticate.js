const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.sendStatus(403);
    }
    const verifyToken = jwt.verify(token, process.env.KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found form jwt");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("No user found");
    console.log(err);
  }
};

module.exports = authenticate;
