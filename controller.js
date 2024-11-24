var nodemailer = require("nodemailer");
const {
  ownerMailOptions,
  clientMailOptions,
  ownerForAuditMailOptions,
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

const sendEmailForEnquiry = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  transporter.sendMail(
    clientMailOptions({
      firstName,
      lastName,
      email,
    }),
    function (error, info) {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({ data: null, success: false, msg: "Email Not Sent" });
      } else {
        console.log("Email sent to Client: " + info.response);
      }
    }
  );
  transporter.sendMail(ownerMailOptions(req.body), function (error, info) {
    if (error) {
      console.log(error);
      res
        .status(500)
        .json({ data: null, success: false, msg: "Email Not Sent" });
    } else {
      console.log("Email sent to Owner: " + info.response);
    }
  });
  res
    .status(200)
    .json({ data: req.body || {}, success: true, msg: "Email Sent" });
};
const sendEmailForAudit = async (req, res) => {
  transporter.sendMail(
    ownerForAuditMailOptions(req.body),
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
      to: email,
      mobile_number,
      otp,
      service_email : SERVICE_EMAIL
    })
  )
}



module.exports = {
  sendEmailForEnquiry,
  sendEmailForAudit,
  sendEmailOtp,
  sendGreet
};
