import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app-navbar'>
      <div className='app-navbar-logo'>
        <Link to='home' smooth={true}>
          <h2>
            CHRIS<span>.</span>
          </h2>
        </Link>
      </div>

      <div className='app-navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 5] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'projects', 'skills', 'contact'].map(
                (item) => (
                  <Link smooth={true} to={item} duration={500}>
                    <li key={item}>
                      <a
                        style={{ cursor: 'pointer' }}
                        onClick={() => setToggle(false)}
                      >
                        {item}
                      </a>
                    </li>
                  </Link>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
