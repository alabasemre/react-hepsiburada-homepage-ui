import logo from '../../static/logo.svg';

import styles from './Footer.module.css';
const FooterHeader = () => {
    return (
        <div className={styles['footer-header']}>
            <a href='/'>
                <img src={logo} alt='hepsiburada' />
            </a>
            <div>
                <ul className={styles['footer-header-links']}>
                    <li>
                        <a href='/  ' className={styles['footer-header-link']}>
                            Siparişlerim
                        </a>
                    </li>
                    <li className={styles['footer-header-link']}>|</li>
                    <li>
                        <a href='/' className={styles['footer-header-link']}>
                            Çözüm Merkezi
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterHeader;
