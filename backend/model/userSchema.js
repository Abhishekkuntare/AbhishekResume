const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  //creating a new instance
  //define the data of structure
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
});

//we are hashing here
userSchema.pre("save", async function (next) {
  // console.log("Hashing......");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//we are generating the token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.KEY); //generate the token
    this.tokens = this.tokens.concat({ token: token }); //add the token
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

//Store the message
userSchema.methods.addMessage = async function (name, email, phone, message) {
  try {
    this.messages = this.messages.concat({ name, email, phone, message });
    await this.save();
    return this.messages;
  } catch (err) {
    console.log(err);
  }
};

//create an model for attaching our project
const User = mongoose.model("USER", userSchema); //(coolectionName,docStructur)

//export and use anywhere in file
module.exports = User;
