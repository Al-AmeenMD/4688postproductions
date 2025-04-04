import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Log environment variables (without sensitive data)
console.log('Email configuration:', {
  user: process.env.EMAIL_USER,
  hasPassword: !!process.env.EMAIL_APP_PASSWORD
});

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('Transporter verification failed:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', {
    name: req.body.name,
    email: req.body.email,
    messageLength: req.body.message?.length
  });

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    console.error('Missing required fields');
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: '4688postproductions@gmail.com',
    subject: `New Contact Form Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    replyTo: email
  };

  try {
    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Detailed error sending email:', {
      error: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack
    });
    res.status(500).json({ error: 'Failed to send email: ' + error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
