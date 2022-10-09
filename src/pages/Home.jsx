import BrandSlider from '../components/BrandSlider/BrandSlider';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import MarketingBillboard from '../components/MarketingBillboard/MarketingBillboard';
import Navbar from '../components/Navbar/Navbar';
import SuperPrice from '../components/SuperPrice/SuperPrice';
import ProductSlider from '../components/ProductSlider/ProductSlider';

import { brandsData, featuresData } from '../components/BrandSlider/sliderData';
import { recommendedProducts } from '../components/ProductSlider/productData';

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
                <ProductSlider
                    title='Dikkat Çeken Ürünler'
                    products={recommendedProducts}
                />
                <ProductSlider
                    title='Şu an en çok bakılan ürünler'
                    products={recommendedProducts}
                />
            </main>
        </div>
    );
};

export default Home;
