const {
  welcomeEmailTemplate,
  otpEmailTemplate,
} = require("./emailTexts");

const EMAIL = process.env.EMAIL


// New 
var welcomeEmailTemplateOptions = (reqBody) => ({
  from: EMAIL,
  to: reqBody.email, //change later
  subject: "Welcome to the Xerox Cloud 🖨! Your Account Has Been Created",
  html: welcomeEmailTemplate(reqBody),
});

var sendEmailOtpOptions = ({
  name,
  email,
  mobile_number,
  otp,
service_email }) => ({
    from: EMAIL,
    to: email,
    subject: "🔐 Your OTP for Xerox Cloud Account Verification",
    html: otpEmailTemplate({ name, mobile_number, otp, email , service_email}),
  });

module.exports = {
  sendEmailOtpOptions,
  welcomeEmailTemplateOptions
};
