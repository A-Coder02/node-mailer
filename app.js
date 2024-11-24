require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sendEmailForAudit, sendEmailOtp, sendGreet } = require("./controller");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.post("/greet-email", sendGreet);
// body: {name, to, service_email }
app.post("/send-otp-email", sendEmailOtp);
// body: {name, to, service_email}

app.listen(5000, console.log(5000, "PORT"));
