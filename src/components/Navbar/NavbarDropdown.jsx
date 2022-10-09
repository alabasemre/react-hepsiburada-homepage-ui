import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import styles from './Navbar.module.css';
import NavbarMenuLinks from './NavbarMenuLinks';

import { electronicMenuItems } from './menuData';

const menuItems = [electronicMenuItems];

const NavbarDropdown = ({ id }) => {
    // const [showMenu, setShowMenu] = useState(1);
    const [showMenu, setShowMenu] = useState(null);

    return (
        <div
            className={styles['navbar-dropdown']}
            onMouseLeave={() => setShowMenu(null)}
        >
            <div className={styles['nav-menu-container']}>
                <ul className={styles['navbar-dropdown-items']}>
                    {menuItems[id].map(({ categoryId, text }, idx) => (
                        <li
                            key={idx}
                            className={styles['navbar-dropdown-item']}
                            onMouseEnter={() => setShowMenu(categoryId)}
                        >
                            {text}
                            <FiChevronRight />
                        </li>
                    ))}
                </ul>
                {showMenu !== null ? (
                    <>
                        <NavbarMenuLinks categoryId={showMenu} />
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default NavbarDropdown;
