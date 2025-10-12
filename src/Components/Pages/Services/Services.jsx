import React from 'react';
import ServicesBanner from './ServicesBanner';
import OurServices from './OurServices';
import OurProcess from './OurProcess';
import FAQSection from './FAQSection';

const Services = () => {
    return (
        <div>
            <ServicesBanner></ServicesBanner>
            <OurServices></OurServices>
            <OurProcess></OurProcess>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Services;