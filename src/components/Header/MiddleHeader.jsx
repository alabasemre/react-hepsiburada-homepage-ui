import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { HiOutlineUser, HiShoppingCart } from 'react-icons/hi';
import { FiChevronRight } from 'react-icons/fi';

import LocationForm from './LocationForm';

import logo from '../../static/logo.svg';
import premium from '../../static/premium.webp';
import hepsipapel from '../../static/hepsipapel.webp';

import styles from './Header.module.css';

const loginMenuItems = [
    { id: 1, text: 'Giriş Yap' },
    { id: 2, text: 'Üye Ol' },
    { id: 3, text: 'Siparişlerim' },
    { id: 4, text: 'Sana Özel' },
    { id: 5, text: 'Hepsipay Cüzdanım' },
    { id: 6, text: 'Kullanıcı Bilgilerim' },
    { id: 7, text: 'Değerlendirmelerim' },
    { id: 8, text: 'Beğendiklerim' },
    { id: 9, text: 'Tüm Listelerim' },
    { id: 10, text: 'Kuponlarım' },
    { id: 11, text: 'Destek Taleplerim' },
];

const MiddleHeader = () => {
    const [locationOpen, setLocationOpen] = useState(false);

    const handleLocationForm = () => {
        setLocationOpen((state) => !state);
    };

    return (
        <div className={`${styles.container} ${styles['container-flex']}`}>
            <div className={styles['logo-container']}>
                <div>
                    <a href='/' className={styles['logo-title']}>
                        <img src={logo} alt='hepsiburada' />
                    </a>
                    <div className={`${styles.premium} bold-700`}>
                        <p>
                            <a href='/' className={styles['link-primary']}>
                                Premium'u
                            </a>{' '}
                            keşfet
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles['search-container']}>
                <AiOutlineSearch className={styles['search-icon']} />
                <input
                    type='text'
                    className={styles['search-text']}
                    placeholder='Ürün,kategori veya marka ara'
                />
                <button className={styles['search-btn']}>ARA</button>
            </div>
            <div className={styles.buttons}>
                <div
                    className={`${styles['button-container']} ${
                        locationOpen ? styles['active-button-container'] : ''
                    }`}
                    onClick={handleLocationForm}
                >
                    <IoLocationOutline
                        className={`${styles['button-icon']} ${
                            locationOpen ? styles['active-location-icon'] : ''
                        }`}
                    />
                    <div className={styles['button-content']}>
                        <p className={`bold-700 secondary-text p-14`}>Konum</p>
                        <p className={`primary-text p-12`}>Konum Seç</p>
                    </div>
                    <RiArrowDropDownLine className={styles['button-icon']} />
                    {locationOpen && <LocationForm />}
                </div>
                <div
                    className={`${styles['button-container']} ${styles['login-button-container']}`}
                >
                    <HiOutlineUser
                        className={`${styles['button-icon']} ${styles['user-icon']}`}
                    />
                    <div className={styles['button-content']}>
                        <p className={`bold-700 secondary-text p-15`}>
                            Giriş Yap
                        </p>
                        <p className={`secondary-text p-10`}>veya üye ol</p>
                    </div>
                    <RiArrowDropDownLine className={styles['button-icon']} />

                    <div className={styles['login-menu-container']}>
                        <div className={styles['login-menu-premium']}>
                            <a
                                href='/'
                                className={styles['login-menu-price-container']}
                            >
                                <div>
                                    <img
                                        src={premium}
                                        className={
                                            styles['login-menu-premium-logo']
                                        }
                                        alt='hepsiburada premium'
                                    />
                                    <span className={`p-12 secondary-text`}>
                                        ile ayda 9.90 TL'ye
                                    </span>
                                </div>
                                <FiChevronRight
                                    className={` primary-text`}
                                    style={{ height: 20, width: 20 }}
                                />
                            </a>
                            <div className={styles['premium-benefits-slider']}>
                                <img
                                    src={hepsipapel}
                                    alt='premium üye ol her harcamada hepsipapel kazan'
                                    className={styles['premium-benefit-img']}
                                />
                                <p className='p-15 bold-700 secondary-text'>
                                    Hepsipapel Kazancı
                                </p>
                            </div>
                        </div>
                        <ul className={styles['login-menu-nav']}>
                            {loginMenuItems.map(({ id, text }, idx) => {
                                return (
                                    <li key={id}>
                                        <a
                                            href='/'
                                            className={
                                                styles['login-menu-nav-item']
                                            }
                                        >
                                            {text}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className={styles.overlay}></div>
                <div
                    className={`${styles['button-container']} ${styles['cart-button']}`}
                >
                    <div className={styles['cart-item-count']}>
                        <HiShoppingCart
                            className={`${styles['button-icon']} ${styles['cart-icon']}`}
                        />
                        <span>0</span>
                    </div>

                    <div className={styles['button-content']}>
                        <p className={`bold-700 white-text p-15`}>Sepetim</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleHeader;
