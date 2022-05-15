import React from 'react';

import { About, Footer, Hero, Skills, Projects } from './pages';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className='app'>
    <Navbar />
    <Hero />
    {/* <About />
    <Work />
    <Skills />
    <Footer /> */}
  </div>
);

export default App;
