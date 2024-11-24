const {
  clientEmailText,
  ownerEmailText,
  auditEmailText,
  welcomeEmailTemplate,
} = require("./emailTexts");

const EMAIL = process.env.EMAIL

var clientMailOptions = ({ email, firstName, lastName }) => ({
  from: "arbaj897ansari@gmail.com",
  to: email,
  subject: "Confirmation of Receipt - Clickster Inquiry",
  text: clientEmailText({ firstName, lastName }),
});

var ownerMailOptions = (reqBody) => ({
  from: "arbaj897ansari@gmail.com",
  to: "arbaj897ansari@gmail.com",
  subject: "New Client Inquiry",
  text: ownerEmailText(reqBody),
});
var ownerForAuditMailOptions = (reqBody) => ({
  from: "arbaj897ansari@gmail.com",
  to: "arbaj897ansari@gmail.com",
  subject: "New Client For Audit",
  html: auditEmailText(reqBody),
});

var welcomeEmailTemplateOptions = (reqBody) => ({
  from: EMAIL,
  to: "arbaj897ansari@gmail.com", //change later
  subject: "Welcome to the Xerox Cloud 🖨! Your Account Has Been Created",
  html: welcomeEmailTemplate(reqBody),
});

var sendEmailOtpOptions = ({ name,
  email,
  mobile_number,
  otp }) => ({
    from: EMAIL,
    to: email,
    subject: "Confirmation of Receipt - Clickster Inquiry",
    text: clientEmailText({ name, mobile_number, otp, email }),
  });

module.exports = {
  clientMailOptions,
  ownerMailOptions,
  ownerForAuditMailOptions,
  sendEmailOtpOptions,
  welcomeEmailTemplateOptions
};
