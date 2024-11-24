var clientEmailText = ({ firstName, lastName }) => `
\n
Dear ${firstName} ${lastName},

I hope this message finds you well.
I wanted to inform you that we have received your inquiry regarding Clickster. Thank you for reaching out to us with your questions and interest in our services.
Our team is currently reviewing your inquiry, and we will provide you with a detailed response as soon as possible. We appreciate your patience in the meantime.
If you have any further questions or need immediate assistance, please do not hesitate to reach out to us.
Thank you once again for considering Clickster for your needs. We look forward to the opportunity to assist you.

Best regards,
Clickster
CEO
clickster@gmail.com
`;

const ownerEmailText = (clientInfo) => `

Dear Team,

A new client has expressed interest in your services. Below are the details:

Name: ${clientInfo.firstName} ${clientInfo.lastName}
Email: ${clientInfo.email}
Contact: ${clientInfo.contact}
Company Name: ${clientInfo.companyName}
Company Size: ${clientInfo.companySize}
Lead Generation: ${clientInfo.isLeadGeneration ? "Yes" : "No"}
E-commerce Marketing: ${clientInfo.isECommerceMakreting ? "Yes" : "No"}
SEO: ${clientInfo.isSEO ? "Yes" : "No"}
Collaborating: ${clientInfo.isCollaborating ? "Yes" : "No"}

Please follow up with the client at your earliest convenience.

`;

const auditEmailText = (clientInfo) => `
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
    .client-details {
      margin-top: 20px;
    }
    .client-details ul {
      list-style-type: none;
      padding: 0;
    }
    .client-details ul li {
      margin-bottom: 5px;
    }
    .signature {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Subject: Client Seeking Audit for IT and Software Company</h2>
    <p>Dear Xerox Cloud Team,</p>
    <p>I hope this message finds you well.</p>
    <p>
      We have received an inquiry from a potential client who is seeking an audit for their IT and Software company. Below are the details:
    </p>
    <div class="client-details">
      <ul>
        <li><strong>Name:</strong> ${clientInfo.name}</li>
        <li><strong>Company Name:</strong> ${clientInfo.companyName}</li>
        <li><strong>Business Type:</strong> ${clientInfo.bType}</li>
        <li><strong>Website:</strong> <a href="${clientInfo.websiteUrl}" target="_blank">${clientInfo.websiteUrl}</a></li>
        <li><strong>Lead Generation:</strong> ${clientInfo.isLeadGeneration ? "Yes" : "No"}</li>
        <li><strong>E-commerce Marketing:</strong> ${clientInfo.isECommerceMakreting ? "Yes" : "No"}</li>
        <li><strong>SEO:</strong> ${clientInfo.isSEO ? "Yes" : "No"}</li>
        <li><strong>Current Efforts:</strong> ${clientInfo.currentEfforst}</li>
        <li><strong>Goals:</strong> ${clientInfo.goals}</li>
      </ul>
    </div>
    <p>
      Our team will review this inquiry and provide a detailed plan shortly.
      If you have any further questions or need additional information, please feel free to reach out.
    </p>
    <p>Thank you for choosing Xerox Cloud. We look forward to assisting this potential client.</p>
    <div class="signature">
      <p>Best regards,</p>
      <p><strong>[Your Name]</strong><br>
      [Your Position]<br>
      <a href="mailto:[Your Contact Information]">[Your Contact Information]</a></p>
    </div>
  </div>
</body>
</html>
`;

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
    <p>We are thrilled to have you as a new member of the Xerox Cloud community!</p>
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


module.exports = {
  ownerEmailText,
  clientEmailText,
  auditEmailText,
  welcomeEmailTemplate
};
