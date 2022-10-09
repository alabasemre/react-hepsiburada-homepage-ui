import { useState } from 'react';
import { IoShareOutline } from 'react-icons/io5';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import { slideTabs, slideItems } from './heroData';

import styles from './Hero.module.css';

const Hero = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const activeLength = slideItems[activeTab].herouselItems.length;

    const changeTab = (tabIndex) => {
        setActiveTab(tabIndex);
        setSlideIndex(0);
    };

    const handleSlidePre = () => {
        if (slideIndex === 0) {
            setActiveTab((index) => index - 1);
        } else {
            setSlideIndex((index) => index - 1);
        }
    };

    const handleSlideNext = () => {
        if (slideIndex === activeLength - 1) {
            setActiveTab((index) => index + 1);
            setSlideIndex(0);
        } else {
            setSlideIndex((index) => index + 1);
        }
    };

    return (
        <div className={styles['full-w-container']}>
            {slideItems[activeTab].herouselItems[slideIndex].bgImg && (
                <img
                    src={slideItems[activeTab].herouselItems[slideIndex].bgImg}
                    alt=''
                    className={styles['hero-bg']}
                />
            )}

            <div className={styles['hero-container']}>
                <div className={styles['hero-tabs']}>
                    {slideTabs.map((item, idx) => (
                        <div className={styles['hero-tabs']} key={idx}>
                            <div
                                className={`${styles['tab-button']} ${
                                    activeTab === idx
                                        ? styles['tab-active']
                                        : ''
                                }`}
                                onClick={() => changeTab(idx)}
                            >
                                <span className='bold-700'>{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles['hero-content-container']}>
                    <div className={styles['hero-content']}>
                        <IoShareOutline
                            className={styles['hero-content-icon']}
                        />
                        <span className={styles['hero-content-part1']}>
                            {
                                slideItems[activeTab].herouselItems[slideIndex]
                                    .part1
                            }
                        </span>
                        <span className={styles['hero-content-part2']}>
                            {
                                slideItems[activeTab].herouselItems[slideIndex]
                                    .part2
                            }
                        </span>
                        <button className={styles['hero-content-button']}>
                            <span>
                                {
                                    slideItems[activeTab].herouselItems[
                                        slideIndex
                                    ].buttonText
                                }
                            </span>
                        </button>
                    </div>
                    <div className={styles['hero-content-img-container']}>
                        <img
                            src={
                                slideItems[activeTab].herouselItems[slideIndex]
                                    .img
                            }
                            alt=''
                        />
                    </div>
                </div>
                <div className={styles['hero-thumbnail-slider']}>
                    {activeTab === 0 && slideIndex === 0 ? (
                        ''
                    ) : (
                        <div
                            className={styles['hero-thumbnail-slider-arrow']}
                            onClick={handleSlidePre}
                        >
                            <FiChevronLeft />{' '}
                            {slideIndex === 0 && (
                                <p className={styles['next']}>
                                    {slideTabs[activeTab - 1]}
                                </p>
                            )}
                        </div>
                    )}

                    <div className={styles['hero-thumbnail-container']}>
                        {slideItems[activeTab].herouselItems.map(
                            ({ id, thumbnail }, idx) => (
                                <img
                                    src={thumbnail}
                                    className={`${
                                        styles['hero-thumbnail-img']
                                    } ${
                                        idx === slideIndex
                                            ? styles['active-thumb']
                                            : ''
                                    }`}
                                    alt=''
                                    key={id}
                                    onClick={() => setSlideIndex(idx)}
                                />
                            )
                        )}
                    </div>
                    {activeTab === slideItems.length - 1 &&
                    slideIndex === activeLength - 1 ? (
                        ''
                    ) : (
                        <div
                            className={styles['hero-thumbnail-slider-arrow']}
                            onClick={handleSlideNext}
                        >
                            {slideIndex + 1 === activeLength && (
                                <p className={styles['next']}>
                                    {slideTabs[activeTab + 1]}
                                </p>
                            )}

                            <FiChevronRight />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hero;
