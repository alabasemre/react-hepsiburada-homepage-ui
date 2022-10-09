import styles from './Header.module.css';

const topbarItems = [
    'Siparişlerim',
    'Süper Fiyat, Süper Teklif',
    'Yurt Dışından',
    'Kampanyalar',
    'Girişimci Kadınlar',
    'Çözüm Merkezi',
    'Hepsiburada Premium',
    "Hepsiburada'da Satıcı Ol",
];

const Topbar = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.topbar}>
                {topbarItems.map((item, idx) => (
                    <li key={idx} className={styles['topbar-item']}>
                        <a href='/' className={styles['topbar-item-link']}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Topbar;
