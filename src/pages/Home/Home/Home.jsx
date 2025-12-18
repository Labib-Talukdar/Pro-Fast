import React from 'react';
import Bannar from '../Bannar/Bannar';
import ServicesSection from '../Services/ServicesSection';
import ClientsSection from '../Clients/ClientsSection';
import FeaturesSection from '../features/FeatureSection';
import Merchant from '../BeMerchant/Merchant';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <ServicesSection></ServicesSection>
            <ClientsSection></ClientsSection>
            <FeaturesSection></FeaturesSection>
            <Merchant></Merchant>
        </div>
    );
};

export default Home;