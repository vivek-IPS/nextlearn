import { useState } from 'react';

const EmailForm = () => {
  const [subject, setSubject] = useState('');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the email using the input values
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify({ subject, recipient, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Handle the response
    if (response.ok) {
      // Email sent successfully
      console.log('Email sent!');
    } else {
      // Failed to send email
      console.error('Failed to send email.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
