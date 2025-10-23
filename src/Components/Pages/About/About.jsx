import React from 'react';
import AboutBanner from './AboutBanner';
import OurFaces from '../Home/OurFaces';
import AboutChitromul from './AboutChitromul';
import ClientWorkLogo from './ClientWorkLogo';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <ClientWorkLogo></ClientWorkLogo>
            <OurFaces></OurFaces>
            <AboutChitromul></AboutChitromul>
        </div>
    );
};

export default About;