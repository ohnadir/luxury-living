import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Response from './Response';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=''>

            <Header></Header>
            <Projects></Projects>
            <Services></Services>
            <Testimonial></Testimonial>
            <Response></Response>
        </div>
    );
};

export default Home;