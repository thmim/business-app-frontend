import React from 'react';
import Bannar from '../components/Bannar';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <WhyUs/>
            <Testimonials/>
        </div>
    );
};

export default Home;