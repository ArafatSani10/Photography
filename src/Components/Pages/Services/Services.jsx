import React from 'react';
import ServicesBanner from './ServicesBanner';
import OurServices from './OurServices';
import OurProcess from './OurProcess';
import PackagesSection from '../Home/PackagesSection';
// import FAQSection from './FAQSection';

const Services = () => {
    return (
        <div>
            <ServicesBanner></ServicesBanner>
            <OurServices></OurServices>
            <OurProcess></OurProcess>
            {/* <FAQSection></FAQSection> */}
            <PackagesSection></PackagesSection>
        </div>
    );
};

export default Services;