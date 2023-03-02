import React from 'react';
import Banner from '../../components/Home/Banner';
import CallToAction from '../../components/Home/CallToAction';
import CallToActionCard from '../../components/Home/CallToActionCard';
import Discount from '../../components/Home/Discount';
import MiddleHero from '../../components/Home/MiddleHero';
import Newsletter from '../../components/Home/Newsletter';
import OurRecords from '../../components/Home/OurRecords';
import Package from '../../components/Home/Package';
import TopIcons from '../../components/Home/TopIcons';
import WeProdive from '../../components/Home/WeProdive';
import Services from '../../components/Services/Services';
import Register from '../SignUp/Register';

const Home = () => {
    return (
        <div>
            <Banner />
            <TopIcons />
            <MiddleHero />
            <WeProdive />
            <CallToAction />
            <CallToActionCard />
            <Discount />
            <OurRecords />
            <Services />
            <Newsletter />
        </div>
    );
};

export default Home;