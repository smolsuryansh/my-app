// Functional component
import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
  return <div>
    <Navbar />
    <HeroImg2 heading="CONTACT." text="Feel free to contact me, lets talk. We might as well become friends!"/>
    <Footer />
  </div>;
};

export default Contact;
