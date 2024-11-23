// src/components/MediumForm.js
import React, { useState } from 'react';

const MediumForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    content: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Form submitted, thank you!');

    try {
      const response = await fetch('https://mformbackend.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage(`Thank you for submitting your request to join our publication!

We have received your application and will review your content within 24 hours. If accepted, our publication, From Code to Cloud, will appear in your list while publishing your blog.

Stay tuned for updates:

- Check your Medium account for the publication listing.
- Keep an eye on your email for an approval confirmation.

We look forward to collaborating with you! 🌟`);
      } else {
        setMessage('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred while submitting the form.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email ID:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>What topics do you write your blogs in?</label>
          <input type="text" name="content" value={formData.content} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MediumForm;