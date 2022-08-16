const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");

app.use(express.json());
app.use(cookieParser());
app.use(require("./router/auth"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server:http://localhost:${PORT}/`);
});
