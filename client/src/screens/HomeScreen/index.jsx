import React from 'react';

import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb.component';
import About from '../../Components/About/About.component';

// Components
import Home from './Home';

import MainContent from './MainContent';

import Premier from './Premier';

function HomeScreen({ refProp }) {
  return (
    <div className='App'>
      <Home refProp={refProp} />
      <BreadCrumb />
      <MainContent />
      <Premier />
      <About />
    </div>
  );
}

export default HomeScreen;
