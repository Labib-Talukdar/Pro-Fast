import React from 'react';
import Bannar from '../Bannar/Bannar';
import ServicesSection from '../Services/ServicesSection';
import ClientsSection from '../Clients/ClientsSection';
import FeaturesSection from '../features/FeatureSection';
import Merchant from '../BeMerchant/Merchant';
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import FAQSection from '../Faq/FAQSection';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <ServicesSection></ServicesSection>
            <ClientsSection></ClientsSection>
            <FeaturesSection></FeaturesSection>
            <Merchant></Merchant>
            <ReviewSlider></ReviewSlider>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;