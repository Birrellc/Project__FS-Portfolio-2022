import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

import './About.scss';
import { images } from '../../exports';

const About = () => {
  return (
    <div className='app-container about-section'>
      <RoughNotation type='highlight' show={true} color='white' padding={15}>
        <RoughNotation type='underline' color={'white'} show={true}>
          <h2 className='head-text black'>
            About <span className='red'>Me</span> <br />
          </h2>
        </RoughNotation>
      </RoughNotation>
      <br />

      <p className='about-text'>
        <span className='black'>
          <RoughNotation
            type='highlight'
            show={true}
            padding={15}
            color='#F3E600'
          >
            Junior Developer
          </RoughNotation>
        </span>{' '}
        based in England. I have a strong interest in the{' '}
        <span className='white'>
          <RoughNotation
            type='highlight'
            show={true}
            padding={15}
            color='#ff003c'
          >
            {' '}
            front-end of web development
          </RoughNotation>
        </span>
        , animation and effects.
        <br />
        <br />
        Recent graduate of the{' '}
        <span className='black'>
          <RoughNotation
            type='highlight'
            show={true}
            padding={15}
            color='#F3E600'
          >
            Full Stack Software Development Diploma with the Code Institute{' '}
          </RoughNotation>
        </span>{' '}
        (Accredited by Edinburgh Napier University)
        <br />
        <br />
        Currently open to{' '}
        <span className='white'>
          <RoughNotation
            type='highlight'
            show={true}
            padding={15}
            color='#ff003c'
          >
            full time, part time and freelance{' '}
          </RoughNotation>{' '}
        </span>
        work.
      </p>
    </div>
  );
};

export default About;
