import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { subject, recipient, message } = req.body;

    // Create a Nodemailer transporter with your email provider settings
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Setup email data
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject,
      html: `<html><body><h1>${subject}</h1><p>${message}</p></body></html>`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).end(); // Email sent successfully
    } catch (error) {
      console.error(error);
      res.status(500).end(); // Failed to send email
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
