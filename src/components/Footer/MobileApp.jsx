import { AiFillAndroid } from 'react-icons/ai';
import styles from './Footer.module.css';

const MobileApp = () => {
    return (
        <div className={styles['mobile-app']}>
            <h5 className={styles['footer-link-title']}>Mobil Uygulamalar</h5>
            <ul className={styles['app-list']}>
                <li>
                    <a href='/' className={styles['footer-link-item']}>
                        <AiFillAndroid />
                        <div>
                            APP STORE'dan <span>İNDİREBİLİRSİNİZ</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='/' className={styles['footer-link-item']}>
                        <AiFillAndroid />
                        <div>
                            APP STORE'dan <span>İNDİREBİLİRSİNİZ</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='/' className={styles['footer-link-item']}>
                        <AiFillAndroid />
                        <div>
                            APP STORE'dan <span>İNDİREBİLİRSİNİZ</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MobileApp;
