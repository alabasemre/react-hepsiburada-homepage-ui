import { footerFeatures } from './footerFeaturesData';

import styles from './Footer.module.css';
const FooterFeatures = () => {
    return (
        <div className={styles['footer-features-container']}>
            {footerFeatures.map(({ title, logo, text }, idx) => (
                <a
                    key={idx}
                    href='/'
                    className={styles['footer-features-feature']}
                >
                    <h4 className={styles['footer-feature-title']}>{title}</h4>
                    <div className={styles['footer-feature-logo-container']}>
                        <img
                            className={styles['footer-feature-logo']}
                            src={logo}
                            alt={text}
                        />
                    </div>
                    <p className={styles['footer-feature-text']}>{text}</p>
                </a>
            ))}
        </div>
    );
};

export default FooterFeatures;
