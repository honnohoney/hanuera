import React, { useState } from 'react';

const Email = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hanuera.khim@gmail.com?subject=${subject}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='email'>
      
      <form onSubmit={handleSubmit}>
        <label>
          Your Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Your Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Your Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">
            Send
            <span className="material-symbols-outlined send-icon">send</span>
            </button>
      </form>
    </div>
  );
};

export default Email;
