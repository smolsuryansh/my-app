// Functional component
import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const Project = () => {
  return <div>
    <Navbar />
    <HeroImg2  heading="PROJECTS." text={
          <p>
            Some of the recent works can be found on my{' '}
            <a href="https://github.com/smolsuryansh" target="_blank" 
            rel="noopener noreferrer" 
            style={{textDecoration: 'underline', color: 'rgb(176,113,94)'}}>
              Github
            </a>
            .
          </p>
        }/>
    <Footer />
  </div>;
};

export default Project;
