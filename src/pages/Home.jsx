import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MarketingBillboard from '../components/MarketingBillboard/MarketingBillboard';
import Navbar from '../components/Navbar/Navbar';
import SuperPrice from '../components/SuperPrice/SuperPrice';

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <Hero />
                <SuperPrice />
                <MarketingBillboard />
            </main>
        </div>
    );
};

export default Home;
