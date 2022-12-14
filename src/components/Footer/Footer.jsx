import FooterHeader from './FooterHeader';
import FooterFeatures from './FooterFeatures';
import FooterSeoView from './FooterSeoView';

import styles from './Footer.module.css';
import FooterLinkItem from './FooterLinkItem';
import MobileApp from './MobileApp';
import Socials from './Socials';

import { links, fashion } from './footerLinks';
import FooterBottom from './FooterBottom';

const Footer = () => {
    return (
        <footer className={`${styles['footer-global']}`}>
            <div className={`${styles['footer-upper']} container-1200`}>
                <FooterHeader />
                <FooterFeatures />
                <FooterSeoView />

                <div className={styles['footer-links']}>
                    <div className={styles['footer-links-left']}>
                        {links.map((item, idx) => (
                            <div key={idx}>
                                {item.map(({ title, links }) => (
                                    <div key={title}>
                                        <h5
                                            className={
                                                styles['footer-link-title']
                                            }
                                        >
                                            {title}
                                        </h5>
                                        <ul
                                            className={
                                                styles['footer-link-list']
                                            }
                                        >
                                            {links.map((link) => (
                                                <li key={link}>
                                                    <FooterLinkItem
                                                        link={link}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className={styles['footer-links-right']}>
                        <section>
                            <div>
                                <h5 className={styles['footer-link-title']}>
                                    Bizi Takip Edin
                                </h5>
                                <Socials />
                            </div>
                            <div>
                                <h5 className={styles['footer-link-title']}>
                                    ??deme
                                </h5>
                                <ul className={styles['footer-link-list']}>
                                    <li>
                                        <FooterLinkItem link='??deme Se??enekleri' />
                                    </li>
                                    <li>
                                        <FooterLinkItem link='Ba??ka Kampanyalar' />
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <div className={styles['solution-center']}>
                                <h5
                                    className={`${styles['footer-link-title']} ${styles['footer-solution-title']}`}
                                >
                                    Akl??n??za tak??lan bir soru mu var?
                                </h5>
                                <a href='/' className={styles['solution-link']}>
                                    ????z??m Merkezine ba??lan??n
                                </a>
                                <span className={styles['solution-or']}>
                                    <span>veya</span>
                                </span>
                                <span className={styles['solution-call-text']}>
                                    ??a??r?? Merkezimizi aray??n
                                </span>
                                <a
                                    href='/'
                                    className={styles['solution-center-phone']}
                                >
                                    0850 252 40 00
                                </a>
                            </div>
                            <MobileApp />
                            <div>
                                <h5 className={styles['footer-link-title']}>
                                    Giyim-Moda
                                </h5>
                                <ul className={styles['footer-link-list']}>
                                    {fashion.map((link) => (
                                        <li key={link}>
                                            <FooterLinkItem link={link} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
};

export default Footer;
