import { banners } from './bannerData';

import styles from './Navbar.module.css';

const Banners = ({ categoryId }) => {
    const categoryBanners = banners[categoryId];

    return (
        <div className={styles['banner-grid']}>
            {categoryBanners?.map(({ img, size }, idx) => (
                <div
                    key={idx}
                    className={`${
                        size === 'half' ? styles['banner-grid-12'] : ''
                    } ${styles['banner-grid-item']} clearfix`}
                >
                    <img src={img} alt='' />
                </div>
            ))}
        </div>
    );
};

export default Banners;
