import NavbarDropdown from './NavbarDropdown';
import NavbarMenuLinks from './NavbarMenuLinks';

import styles from './Navbar.module.css';

const navItems = [
    { id: 0, text: 'Elektronik' },
    { id: 10, text: 'Moda' },
    { id: 11, text: 'Ev, Yaşam, Kırtasiye Ofis' },
    { id: 12, text: 'Oto, Bahçe, Yapı Market' },
    { id: 13, text: 'Anne, Bebek,Oyuncak' },
    { id: 14, text: 'Spor,Outdoor' },
    { id: 15, text: 'Kozmetik, Kişisel Bakım' },
    { id: 16, text: 'Süpermarket, Pet Shop' },
    { id: 17, text: 'Kitap, Müzik, Film,Hobi' },
];

const Navbar = () => {
    return (
        <div className={styles['full-w-container']}>
            <nav className={styles['nav-container']}>
                <ul className={styles['nav-items']}>
                    {navItems.map(({ id, text }) => (
                        <div key={id}>
                            <li className={styles['nav-item']}>
                                <span>{text}</span>
                                {id === 0 ? (
                                    <NavbarDropdown id={id} />
                                ) : (
                                    <div
                                        className={styles['nav-menu-container']}
                                    >
                                        <NavbarMenuLinks
                                            categoryId={id <= 10 ? id : id - 9}
                                            display='col'
                                        />
                                    </div>
                                )}
                            </li>
                        </div>
                    ))}
                </ul>
            </nav>
            <div className={styles.overlay}></div>
        </div>
    );
};

export default Navbar;
