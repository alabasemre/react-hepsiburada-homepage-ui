import React from 'react';
import BrandSlider from '../components/BrandSlider/BrandSlider';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MarketingBillboard from '../components/MarketingBillboard/MarketingBillboard';
import Navbar from '../components/Navbar/Navbar';
import SuperPrice from '../components/SuperPrice/SuperPrice';

import { brandsData, featuresData } from '../components/BrandSlider/sliderData';

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <Hero />
                <SuperPrice />
                <MarketingBillboard />
                <BrandSlider
                    sectionTitle='Aradığın Markalar'
                    sliderItems={brandsData}
                />
                <BrandSlider
                    sectionTitle="Hepsiburada'da herkes için ayrıcalık var"
                    sliderItems={featuresData}
                />
            </main>
        </div>
    );
};

export default Home;
