import express from 'express';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';


const router = express.Router();

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
        html: `
          <h2>New Contact-Form Submission</h2>
          <p><strong>Name:</strong> ${fName} ${lName}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Employer:</strong> ${employer}</p>
          <hr>
          <p>${message}</p>
        `
      });

      // 2) Send a confirmation back to the user
      await transporter.sendMail({
        to:       email,
        from:     `"No Reply" <${process.env.SMTP_FROM}>`,
        subject:  `We’ve received your message`,
        text:     `
          Hi ${fName},

          Thanks for reaching out! We’ve received your message and will get back to you as soon as possible.

          Here’s what you sent:
          ---------------------
          Subject: ${subject}
          Message: ${message}

          Talk soon,
          The Team
        `,
        html: `
          <p>Hi ${fName},</p>
          <p>Thanks for reaching out! We’ve received your message and will get back to you as soon as possible.</p>
          <h4>Your submission:</h4>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br>${message}</p>
          <hr>
          <p>Talk soon,<br>The Team</p>
        `
      });

      // Respond once both have been sent
      res.json({ message: 'Email sent and confirmation delivered' });

      /*const info = await transporter.sendMail({
        to:       email,
        from:     `"No Reply" <${process.env.SMTP_FROM}>`,
        subject:  subject,
        text:     message,
        html:     `
          <p><strong>Name:</strong> ${fName} ${lName}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Phone:</strong> ${phone}<br>
          <strong>Employer:</strong> ${employer}</p>
          <p>${message}</p>
         `
      });

      res.json({
        message: 'Email sent',
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
      });*/
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
