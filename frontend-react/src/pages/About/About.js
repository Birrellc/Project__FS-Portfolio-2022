import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

import './About.scss';
import { images } from '../../exports';

const About = () => {
  return (
    <div className='app-container about-section'>
      <RoughNotation type='underline' show={true}>
        <h2 className='head-text'>
          About <span className='cyan'>Me</span> <br />
        </h2>
      </RoughNotation>
      <br />

      <p className='about-text'>
        <RoughNotation type='highlight' show={true} color='red'>
          Junior Developer
        </RoughNotation>{' '}
        based in England. I have a strong interest in the front-end of web
        development, animation and effects.
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
