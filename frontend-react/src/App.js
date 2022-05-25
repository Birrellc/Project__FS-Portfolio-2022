import React from 'react';

import { About, Footer, Hero, Skills, Projects } from './pages';
import { Navbar } from './components';
import './App.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

const App = () => (
  <div className='app'>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Footer />
  </div>
);

export default App;
