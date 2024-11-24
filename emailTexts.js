

// NEW 
const welcomeEmailTemplate = (info) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    .container {
      margin: 20px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .signature {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Welcome to Xerox Cloud!</h2>
    <p>Dear ${info.name},</p>
    <p>We are thrilled to have you as a new member of the Xerox Cloud!</p>
    <p>
      Your account has been successfully created, and you can now explore our app and enjoy all the great features we offer.
      To get started, simply log in using the credentials you provided during registration.
    </p>
    <p>
      If you have any questions or need assistance, feel free to contact us at <a href="mailto:${info.service_email}">${info.service_email}</a>.
    </p>
    <p>Thank you for choosing Xerox Cloud. We look forward to serving you!</p>
    <div class="signature">
      <p>Best regards,</p>
      <p><strong>Xerox Cloud Team</strong><br>
      <a href="mailto:${info.service_email}">${info.service_email}</a></p>
    </div>
  </div>
</body>
</html>
`;

const otpEmailTemplate = (info) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
    .container {
      margin: 20px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
    .signature {
      margin-top: 20px;
    }
    .otp-code {
      font-size: 24px;
      font-weight: bold;
      color: #2d6d8b;
    }
    .footer {
      font-size: 12px;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>One-Time Password (OTP) for Xerox Cloud</h2>
    <p>Dear ${info.name},</p>
    <p>Thank you for choosing Xerox Cloud! Please use the following OTP to complete your authentication:</p>
    <p class="otp-code">${info.otp}</p>
    <p>This OTP is valid for the next 10 minutes. If you did not request this, please ignore this email.</p>
    <p>If you need any help or have any questions, feel free to contact us at <a href="mailto:${info.service_email}">${info.service_email}</a>.</p>
    <div class="signature">
      <p>Best regards,</p>
      <p><strong>Xerox Cloud Team</strong><br>
      <a href="mailto:${info.service_email}">${info.service_email}</a></p>
    </div>
  </div>
  <div class="footer">
    <p>This is an automated message. Please do not reply directly to this email.</p>
  </div>
</body>
</html>
`;


module.exports = {
  welcomeEmailTemplate,
  otpEmailTemplate
};
