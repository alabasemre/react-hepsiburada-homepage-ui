import Slider from 'react-slick';
import LeftArrow from '../Slick/LeftArrow';
import RightArrow from '../Slick/RightArrow';
import Section from '../../UI/Section';
import ProductItem from './ProductItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './ProductSlider.module.css';

const ProductSlider = ({ title, products }) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <RightArrow customClass={styles['slider-arrow']} />,
        prevArrow: <LeftArrow customClass={styles['slider-arrow']} />,
    };

    return (
        <Section title={title}>
            <div className='slider-container'>
                <Slider {...settings}>
                    {products.map((props) => (
                        <div key={props.id}>
                            <ProductItem {...props} />
                        </div>
                    ))}
                </Slider>
            </div>
        </Section>
    );
};

export default ProductSlider;
