import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../exports';
import './Hero.scss';
import { useMediaQuery } from 'react-responsive';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 2,
      duration: 3,
      ease: 'easeInOut',
      delayChildren: 0.5,
    },
  },
};

const Hero = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: 1200px)` });

  return (
    <div className='app-hero app-flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ delay: 2, duration: 0.5 }}
        className='app-hero-info'
      >
        <div className='app-hero-text'>
          <div className='app-flex'>
            <div>
              <p className='p-text'>Chris</p>
              <h1 className='head-text'>
                <span className='cyan'>F</span>RONTEN
                <span className='red'>D</span> <span>D</span>EVELOPE
                <span className='red'>R</span>
              </h1>
              <p className='p-text'>Web Developer</p>
              <p className='p-text'>Junior</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 4, ease: 'easeIn' }}
        className='app-hero-img'
      >
        <img src={images.hero} alt='profile_bg' />
      </motion.div>

      {isDesktop ? (
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className='app-hero-paint'
        >
          <div className='app-flex'>
            <p className='shadow'>CONTACT</p>
          </div>
          <div className='app-flex'>
            <p className='shadow big-text'>PROJECTS</p>
          </div>
          <div className='app-flex'>
            <p className='shadow'>SKILLS</p>
          </div>
        </motion.div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Hero;
