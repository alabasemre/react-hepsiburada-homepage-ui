import guvenliAlisveris from '../../static/footer/badges/guvenli-alisveris.webp';
import pci from '../../static/footer/badges/pci.webp';
import iso from '../../static/footer/badges/iso.webp';
import guvenDamgasi from '../../static/footer/badges/guvendamgasi.webp';
import dogan from '../../static/footer/badges/dogan.webp';
import nesine from '../../static/footer/badges/nesine.webp';
import kesfet from '../../static/footer/badges/kesfet.webp';

import bonusCard from '../../static/footer/badges/bonus-new.svg';
import maximumCard from '../../static/footer/badges/maximum-new.svg';
import worldCard from '../../static/footer/badges/world-new.svg';
import ziraatCard from '../../static/footer/badges/ziraat-new.svg';
import finansCard from '../../static/footer/badges/finans-new.svg';
import axess from '../../static/footer/badges/axess-new.svg';
import advantage from '../../static/footer/badges/advantage-new.svg';
import paraf from '../../static/footer/badges/paraf-new.svg';
import visa from '../../static/footer/badges/visa.svg';
import mastercard from '../../static/footer/badges/mastercard.svg';
import troy from '../../static/footer/badges/troy.svg';

import styles from './Footer.module.css';

const FooterBottom = () => {
    return (
        <div className={`${styles['footer-bottom']}`}>
            <div
                className={`${styles['footer-bottom-container']} container-1200`}
            >
                <div className={styles['footer-bottom-left']}>
                    <div>
                        <a href='/' className={styles['h-32']}>
                            <img
                                src={guvenliAlisveris}
                                alt='güvenli alışveriş'
                            />
                        </a>
                        <a href='/' className={styles['h-32']}>
                            <img src={pci} alt='' />
                        </a>
                        <a href='/' className={styles['h-32']}>
                            <img src={iso} alt='' />
                        </a>
                        <a href='/' className={styles['h-32']}>
                            <img src={guvenDamgasi} alt='' />
                        </a>
                    </div>
                    <div>
                        <a href='/' className={styles['h-40']}>
                            <img src={dogan} alt='' />
                        </a>
                        <a href='/' className={styles['h-40']}>
                            <img src={nesine} alt='' />
                        </a>
                        <a href='/' className={styles['h-40']}>
                            <img src={kesfet} alt='' />
                        </a>
                    </div>
                </div>
                <div className={styles['footer-bottom-right']}>
                    <div className={styles['credit-card-badges']}>
                        <img src={bonusCard} alt='' height={12} />
                        <img src={maximumCard} alt='' height={16} />
                        <img src={worldCard} alt='' height={18} />
                        <img src={ziraatCard} alt='' height={17} />
                        <img src={finansCard} alt='' height={11} />
                        <img src={axess} alt='' height={13} />
                        <img src={advantage} alt='' height={12} />
                        <img src={paraf} alt='' height={20} />
                        <img src={visa} alt='' height={18} />
                        <img src={mastercard} alt='' height={19} />
                        <img src={troy} alt='' height={21} />
                    </div>
                    <div className={styles['footer-bottom-right-text']}>
                        <p>
                            Her şey ayağına gelsin! © Copyright 1998 - 2022
                            D-MARKET Elektronik Hizmetler Tic. A.Ş. Her Hakkı
                            Saklıdır.
                        </p>
                        <span>
                            Hepsiburada.com, Bir Doğan Online Markasıdır.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;
