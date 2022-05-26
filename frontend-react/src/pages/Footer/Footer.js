import React, { useState } from 'react';

import { images } from '../../exports';
import { client } from '../../client';
import './Footer.scss';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id='contact' className='app-container footer-section app-flex'>
      <RoughNotation type='highlight' show={true} color='white' padding={15}>
        <h2 className='head-text black'>
          Contact <span className='red'>Me</span>
        </h2>
      </RoughNotation>

      <div className='app-footer-cards'>
        <div className='app-footer-card '>
          <img src={images.email} alt='email' />
          <a href='mailto:cbirrell.work@gmail.com' className='p-text'>
            cbirrell.work@gmail.com
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className='app-footer-form app-flex'>
          <div className='app-flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='username'
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className='app-flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  );
};

export default Footer;
