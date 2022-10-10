import { useState } from 'react';
import { seoShort, seoLong } from './footerSeo';

import styles from './Footer.module.css';

const FooterSeoView = () => {
    const [showSeo, setShowSeo] = useState(false);
    return (
        <div className={styles['footer-seo-view']}>
            {!showSeo ? (
                <p>
                    {seoShort}{' '}
                    <span
                        className={styles['footer-seo-show']}
                        onClick={() => setShowSeo(true)}
                    >
                        Devamını Göster
                    </span>
                </p>
            ) : (
                <>
                    {seoLong.map(({ title, paragraphs }, idx) => (
                        <div
                            className={styles['footer-seo-container']}
                            key={idx}
                        >
                            <h1 className={styles['footer-seo-title']}>
                                {title}
                            </h1>
                            {paragraphs.map((paragraph) => (
                                <p>{paragraph}</p>
                            ))}
                        </div>
                    ))}
                    <span
                        className={styles['footer-seo-show']}
                        onClick={() => setShowSeo(false)}
                    >
                        Devamını Gizle
                    </span>
                </>
            )}
        </div>
    );
};

export default FooterSeoView;
