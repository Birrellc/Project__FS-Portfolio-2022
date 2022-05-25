import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { useMediaQuery } from 'react-responsive';

import './About.scss';
import { images } from '../../exports';

const About = () => {
  // const [isDesktop, setIsDesktop] = useState(true);

  // //choose the screen size
  // const handleResize = () => {
  //   if (window.innerWidth < 1200) {
  //     setIsDesktop(false);
  //   } else {
  //     setIsDesktop(true);
  //   }
  // };

  const isDesktop = useMediaQuery({ query: `(min-width: 1200px)` });

  // create an event listener
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  // }, []);

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
      {isDesktop ? (
        <p className='about-text'>
          <RoughNotation type='highlight' show={true} color='#F3E600'>
            Junior Developer
          </RoughNotation>{' '}
          {''}
          based in England. I have a strong interest in the{' '}
          <span className='white'>
            <RoughNotation type='highlight' show={true} color='#ff003c'>
              {' '}
              front-end of web development
            </RoughNotation>
          </span>
          , animation and effects.
          <br />
          <br />
          Recent graduate of the{' '}
          <span className='black'>
            <RoughNotation type='highlight' show={true} color='#F3E600'>
              Full Stack Software Development Diploma with the Code Institute
            </RoughNotation>
          </span>{' '}
          (Accredited by Edinburgh Napier University)
          <br />
          <br />
          Currently open to {''}
          <span className='white'>
            <RoughNotation type='highlight' show={true} color='#ff003c'>
              full time, part time and freelance{' '}
            </RoughNotation>
          </span>
          work.
        </p>
      ) : (
        <p className='about-text'>
          Junior Developer based in England. I have a strong interest in the
          front-end of web development , animation and effects.
          <br />
          <br />
          Recent graduate of the Full Stack Software Development Diploma with
          the Code Institute Accredited by Edinburgh Napier University
          <br />
          <br />
          Currently open to full time, part time and freelance work.
        </p>
      )}
    </div>
  );
};

export default About;
