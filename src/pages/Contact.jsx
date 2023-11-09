import React from 'react';
import Email from '../components/Email';
import ContactInfo from '../components/ContactInfo';

const ContactForm = () => {
  return (
    <div className='contact'>
      <div className='title'>Contact</div>
      <div className='contact-content'>
        <ContactInfo />
        <Email />
      </div>
    </div>
  );
};

export default ContactForm;
