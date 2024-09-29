import React from 'react';
import AndroidApps from './AndroidApps';
import CybersecuritySlide from './CybersedcuritySlide';
import Websites from './Websites';

function Portfolio() {
  return (
    <div>
      <Websites />
      <CybersecuritySlide />
      <AndroidApps />
    </div>
  );
};

export default Portfolio;