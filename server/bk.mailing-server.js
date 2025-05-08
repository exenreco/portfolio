import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';




const
  //
  // ——————————————————————————————————————————
  //   ─── BOOTSTRAP & ENV VALIDATION ───
  // ——————————————————————————————————————————
  __filename = fileURLToPath(import.meta.url),
  __dirname  = path.dirname(__filename),

  //
  // ——————————————————————————————————————————
  //   ─── EXPRESS APP & GLOBAL MIDDLEWARE ───
  // ——————————————————————————————————————————
  app = express(),
  PORT = Number(process.env.PORT) || 3000;


// Load environment variables from server/.env
dotenv.config({ path: path.join(__dirname, '.env') });

const
  // Required environment variables
  requiredEnv = ['PORT', 'API_BASE_URL', 'YAHOO_USER', 'YAHOO_PASSWORD', 'TO_EMAIL'],

  missing = requiredEnv.filter(k => !process.env[k]);

if (missing.length) {
  console.error(`Missing required env vars: ${missing.join(', ')}`);
  process.exit(1);
}

// Add right after creating express app
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Add before other routes
app.get('/env-check', (req, res) => {
  res.json({
    API_BASE_URL: process.env.API_BASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT
  });
});

// Security headers
app.use(helmet());

// CORS: only your front ends
app.use(cors({
  origin: [process.env.API_BASE_URL, 'https://your-production-domain.com'],
  methods: ['GET','POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// explicitly handle preflight
app.options('*', cors());

// JSON parsing
app.use(express.json({ limit: '10kb' }));  // small payloads only

// Rate limiting (by IP) on send-email endpoint
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many email attempts, please try again later.' }
});
app.use('/api/send-email', emailLimiter);

//
// ——————————————————————————————————————————
//   ─── MAIL TRANSPORTER SETUP ───
// ——————————————————————————————————————————
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.YAHOO_USER,
    pass: process.env.YAHOO_PASSWORD
  },
  tls: { rejectUnauthorized: true }  // enforce valid certs
});

// Verify connection once at startup
transporter.verify(err => {
  if (err) {
    console.error('SMTP Connection Error:', err);
    process.exit(1);
  }
  console.log('SMTP transporter is ready');
});

//
// ——————————————————————————————————————————
//   ─── ROUTES ───
// ——————————————————————————————————————————

/**
 * GET /config.json
 * Expose front-end base URL
 */
app.get('/config.json', (req, res) => {
  res.json({ apiBase: process.env.API_BASE_URL });
});


/**
 * POST /api/send-email
 * Accepts contact form data, validates & sends email
 */
app.post(
  '/api/send-email',
  // express-validator middleware
  [
    body('fName').trim().notEmpty().withMessage('First name required'),
    body('lName').trim().notEmpty().withMessage('Last name required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('phone').optional()
      .matches(/^(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/)
      .withMessage('Phone must be 10 digits: (123) 456-7890 or 123-456-7890'),
    body('subject').trim().notEmpty().withMessage('Subject required'),
    body('message').trim().notEmpty().withMessage('Message required'),
    body('employer').isBoolean().withMessage('Employer must be true/false')
  ],
  async (req, res, next) => {
    // Input validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Build HTML & text payload
      const htmlBody = `
        <div style="font-family:Arial,sans-serif;max-width:600px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${req.body.fName} ${req.body.lName}</p>
          <p><strong>Email:</strong> <a href="mailto:${req.body.email}">${req.body.email}</a></p>
          ${req.body.phone
            ? `<p><strong>Phone:</strong> <a href="tel:${req.body.phone}">${req.body.phone}</a></p>`
            : ''
          }
          <p><strong>Employer:</strong> ${req.body.employer ? 'Yes' : 'No'}</p>
          <hr/>
          <h3>Message:</h3>
          <p style="white-space:pre-wrap;">${req.body.message}</p>
        </div>
      `;
      const textBody = htmlBody.replace(/<[^>]+>/g, '\n').trim();

      // Compose mail options
      const mailOptions = {
        from:    `"Contact Form" <${process.env.YAHOO_USER}>`,
        to:      process.env.TO_EMAIL,
        replyTo: req.body.email,
        subject: `[Contact] ${req.body.subject}`,
        html:    htmlBody,
        text:    textBody
      };

      // Send mail
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent (${info.messageId}) to ${mailOptions.to}`);
      res.json({ message: 'Email sent successfully' });

    } catch (err) {
      // Delegate to centralized error handler
      next(err);
    }
  }
);

//
// ——————————————————————————————————————————
//   ─── 404 & ERROR HANDLING ───
// ——————————————————————————————————————————

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    details: process.env.NODE_ENV === 'production'
      ? undefined
      : err.message
  });
});

//
// ——————————————————————————————————————————
//   ─── START SERVER ───
// ——————————————————————————————————————————
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down...');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});
