import React from 'react';
import { RoughNotation } from 'react-rough-notation';

import './About.scss';

const About = () => {
  return (
    <div id='about' className='app-container about-section'>
      <RoughNotation type='highlight' show={true} color='white' padding={15}>
        <RoughNotation type='red' color={'white'} show={true}>
          <h2 className='head-text black'>
            About <span className='red'>Me</span> <br />
          </h2>
        </RoughNotation>
      </RoughNotation>
      <br />
      <p className='about-text'>
        Junior Developer based in England. I have a strong interest in the
        front-end of web development, animation and effects.
        <br />
        <br />
        Recent graduate of the Full Stack Software Development Diploma with the
        Code Institute (Accredited by Edinburgh Napier University)
        <br />
        <br />
        Currently open to full time, part time and freelance work.
      </p>
    </div>
  );
};

export default About;
