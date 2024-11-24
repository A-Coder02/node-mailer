var nodemailer = require("nodemailer");
const {
 
  sendEmailOtpOptions,
  welcomeEmailTemplateOptions,
} = require("./mailToptions");
const EMAIL = process.env.EMAIL
const PASS = process.env.PASS
const SERVICE_EMAIL = process.env.SERVICE_EMAIL
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASS,
  },
});


// NEW APIS
const sendGreet = async (req, res) => {
  const { name = '<NAME>', email = '<TO-EMAIL>'} = req.body
  transporter.sendMail(
    welcomeEmailTemplateOptions({name, email, service_email : SERVICE_EMAIL}),
    function (error, info) {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({ data: null, success: false, msg: "Email Not Sent" });
      } else {
        console.log("Email sent to Owner: " + info.response);
      }
    }
  );
  res
    .status(200)
    .json({ data: req.body || {}, success: true, msg: "Email Sent" });
};

const sendEmailOtp = async (req, res) => {
  const { name, email, mobile_number, otp } = req.body;

  transporter.sendMail(
    sendEmailOtpOptions({
      name,
      email,
      mobile_number,
      otp,
      service_email : SERVICE_EMAIL
    }),
    function (error, info) {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({ data: null, success: false, msg: "Email Not Sent" });
      } else {
        console.log("Email sent to Owner: " + info.response);
      }
    }
  );
  res
    .status(200)
    .json({ data: req.body || {}, success: true, msg: "Email Sent" });
}



module.exports = {
  sendEmailOtp,
  sendGreet
};
