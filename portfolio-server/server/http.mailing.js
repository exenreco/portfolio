import express from 'express';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';


const
router = express.Router(),
mailTemplate = (fName, subject, message) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${subject}</title>
  </head>
  <body style="margin: 0; padding: 20px 0; background-color: #f6f6f6; font-family: Arial, sans-serif;">
    <!--[if mso]>
      <style type="text/css">
        body, table, td {font-family: Arial, sans-serif !important;}
      </style>
    <![endif]-->

    <!-- MAIN WRAPPER -->
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; height: 100%; margin: 0 auto;">
      <tr>
        <td>
            <!-- HEADER CONTENT -->
            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="20" style="background-color: #204589;">
              <tr>
                <th>
                  <img src="https://exenreco.github.io/portfolio/assets/images/logo.png" alt="Company Logo" width="180" style="display: block; max-width: 100%; height: auto;">
                </th>
                <th><h1><small>A message from</small><br>Exenreco’s Portfolio</h1></th>
              </tr>
            </table>

            <!-- MAIN CONTENT -->
            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="30" style="background-color: #ffffff;">
              <tr><td>
                <h1 style="color: #333333; margin: 0 0 20px 0; font-size: 24px;">Hello, ${fName}!</h1>
                <p style="color: #666666; margin: 0 0 20px 0; font-size: 16px; line-height: 1.5;">
                    ${message}
                </p>
                </td></tr>
            </table>

            <!-- FOOTER -->
            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="20" style="background-color: #204589;">
              <tr><td style="text-align: center; color: #ffffff; font-size: 12px;">
                <p style="margin: 0;">© 2023 Exenreco.com. All Rights Reserved.</p>
              </td></tr>
            </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

// Create a reusable transporter object using SMTP settings from env
const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   parseInt(process.env.SMTP_PORT, 10),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Health‐check endpoint
router.get('/', (req, res) => {
  res.json({ status: 'Mailing service is up' });
});

// POST /send
// Expects JSON payload: { to, subject, text, html? }
router.post('/send',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('fName').notEmpty().withMessage('First Name is required'),
    body('lName').notEmpty().withMessage('Last Name is required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('A Message is required'),
  ],
  async (req, res, next) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, fName, lName, subject, message, employer, phone, html } = req.body;

    try {

      // 1) Send the form contents to your own inbox
      await transporter.sendMail({
        to:       process.env.SMTP_FROM,
        from:     `"No Reply" <${process.env.SMTP_FROM}>`,
        subject:  `[Contact Form] ${subject}`,
        text:     message,
        html: (() => mailTemplate(fName, subject, `
          <h2>New Contact-Form Submission</h2>
          <ul>
            <li><strong>Name: </strong>${fName} ${lName}</li>
            <li><strong>Email: </strong>${email}</li>
            <li><strong>Phone: </strong>${phone}</li>
            <li><strong>Is Employer: </strong>${employer}</li>
          </ul>
          <hr>
          <p>${message}</p>
        `))()
      });

      // 2) Send a confirmation back to the user
      await transporter.sendMail({
        to:       email,
        from:     `"No Reply" <${process.env.SMTP_FROM}>`,
        subject:  `We’ve received your message`,
        text:     `
          Hello ${fName},

          Thanks for reaching out! I’ve received your message and will get back to you as soon as possible.

          Here’s what you sent:
          ---------------------
          Subject: ${subject}
          Message: ${message}

          Talk soon,
          Exenreco Bell
        `,
        html: (() => mailTemplate(fName, subject, `
          <p>Thanks for reaching out! I’ve received your message and will get back to you as soon as possible.</p>

          <h3>Here’s what you sent:</h3>
          <hr>
          <h4>Subject:</h4>
          <i>${subject}</i>
          <h4>Message:</h4><br>
          <i>${message}</i><br><br>

          <strong>Talk soon,</strong
          <h4><i>Exenreco Bell</i></h4>
        `))()
      });

      // Respond once both have been sent
      res.json({ message: 'Email sent and confirmation delivered' });

    } catch (err) {
      next(err);
    }
  }
);

// Error handler for this router
router.use((err, req, res, next) => {
  console.error('MailingAPI error:', err);
  res.status(500).json({ error: 'Failed to send email', details: err.message });
});

const mailingAPI = router;

export default mailingAPI;
