import Slider from 'react-slick';

import Section from '../../UI/Section';
import LeftArrow from '../Slick/LeftArrow';
import RightArrow from '../Slick/RightArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SuperPrice.module.css';

import product1 from '../../static/products/product1.jpg';
import product2 from '../../static/products/product2.jpg';
import product3 from '../../static/products/product3.jpg';
import SuperPriceItem from './SuperPriceItem';

const data = [
    {
        id: 1,
        title: 'Dell Inspiron 15 5515 Ryzen 5 5500U 8gb 512GB SSD 15.6 Windows 11 Home',
        img: product1,
        price: '9.999,00',
        oldPrice: '10.069,05',
    },
    {
        id: 2,
        title: 'Stanley Klasik Vakumlu Termos 0.75 LT',
        img: product2,
        price: '639,01',
        oldPrice: '',
    },
    {
        id: 3,
        title: "Eminem 3'lü Banyo Seti",
        img: product3,
        price: '29,90',
        oldPrice: '49,99',
    },
    {
        id: 4,
        title: 'Stanley Klasik Vakumlu Termos 0.75 LT',
        img: product3,
        price: '639,01',
        oldPrice: '',
    },
    {
        id: 5,
        title: 'Dell Inspiron 15 5515 Ryzen 5 5500U 8gb 512GB SSD 15.6 Windows 11 Home',
        img: product1,
        price: '9.999,00',
        oldPrice: '10.069,05',
    },
    {
        id: 6,
        title: 'Stanley Klasik Vakumlu Termos 0.75 LT',
        img: product2,
        price: '639,01',
        oldPrice: '',
    },
    {
        id: 7,
        title: 'Stanley Klasik Vakumlu Termos 0.75 LT',
        img: product1,
        price: '639,01',
        oldPrice: '',
    },
    {
        id: 8,
        title: 'Stanley Klasik Vakumlu Termos 0.75 LT',
        img: product3,
        price: '639,01',
        oldPrice: '',
    },
];

const SuperPrice = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
    };
    return (
        <Section title='Süper Fiyat Süper Teklif' href='/' hrefText='Tümü'>
            <div className={styles['slider-container']}>
                <Slider {...settings}>
                    {data.map(({ id, title, img, price, oldPrice }) => (
                        <div key={id}>
                            <SuperPriceItem
                                title={title}
                                img={img}
                                price={price}
                                oldPrice={oldPrice}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </Section>
    );
};

export default SuperPrice;
