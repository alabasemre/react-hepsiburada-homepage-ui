import Slider from 'react-slick';

import Section from '../../UI/Section';
import LeftArrow from '../Slick/LeftArrow';
import RightArrow from '../Slick/RightArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './BrandSlider.module.css';

const BrandSlider = ({ sectionTitle, sliderItems, className }) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        nextArrow: <RightArrow customClass={styles['slider-arrow']} />,
        prevArrow: <LeftArrow customClass={styles['slider-arrow']} />,
    };

    return (
        <Section title={sectionTitle} className={className}>
            <div className={styles['slider-container']}>
                <Slider {...settings}>
                    {sliderItems.map(({ text, img }, idx) => (
                        <div key={idx}>
                            <a href='/' className={styles['slide-item']}>
                                <img src={img} alt={text} />
                                <p className={styles['slide-text']}>{text}</p>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </Section>
    );
};

export default BrandSlider;
