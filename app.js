require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {  sendEmailOtp, sendGreet } = require("./controller");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.post("/greet-email", sendGreet);
// body: {name, email, }
app.post("/send-otp-email", sendEmailOtp);
// body: {name, email, mobile_number}

app.listen(5000, console.log(5000, "PORT"));
