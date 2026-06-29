import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';
import { protect } from '../middleware/auth.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'Required fields missing' });

    const contact = await Contact.create({ name, email, subject, message });

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'sinhaayush20010310@gmail.com',
        subject: `Portfolio message: ${subject || 'New message'}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject || 'No subject'}</p><p><strong>Message:</strong><br/>${message}</p>`,
      });
    }

    res.status(201).json({ message: 'Sent', id: contact._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', protect, async (req, res) => {
  const data = await Contact.find().sort({ createdAt: -1 });
  res.json({ data });
});

router.put('/:id/read', protect, async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, { read: true });
  res.json({ message: 'Read' });
});

export default router;
