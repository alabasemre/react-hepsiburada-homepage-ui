import Banners from './Banners';
import { data } from './menuData';
import styles from './Navbar.module.css';

const createColumns = (column, subCount, categoryId) => {
    let current = 0;
    let columns = [];
    const itemCount = Math.ceil(subCount / column);

    for (let index = 0; index < column; index++) {
        let end = current + itemCount;

        if (index + 1 === column) {
            end = subCount;
        }

        columns.push(data[categoryId]?.subCategories.slice(current, end));
        current += itemCount;
    }

    return columns;
};

const NavbarMenuLinks = ({ categoryId, display }) => {
    const subCount = data[categoryId]?.subCount;
    const column = data[categoryId]?.column;
    const columnItems = createColumns(column, subCount, categoryId);

    return (
        <>
            <div className={styles['navbar-menu-column']}>
                {columnItems.map((item, idx) => {
                    return (
                        <ul className={styles['navbar-menu-links']} key={idx}>
                            {item.map(({ category, subCategories }) => (
                                <li
                                    className={styles['navbar-menu-link-item']}
                                    key={category}
                                >
                                    <a
                                        href='/'
                                        className={
                                            styles['navbar-menu-link-header']
                                        }
                                    >
                                        {category}
                                    </a>
                                    <div
                                        className={`${
                                            styles['navbar-menu-link-container']
                                        } ${
                                            display === 'col'
                                                ? styles['nav-menu-flex-column']
                                                : ''
                                        }`}
                                    >
                                        {subCategories.map((item, idx) => (
                                            <a
                                                key={idx}
                                                href='/'
                                                className={
                                                    styles['navbar-menu-link']
                                                }
                                            >
                                                {item}
                                                {display !== 'col' &&
                                                idx !== subCategories.length - 1
                                                    ? ','
                                                    : ''}
                                            </a>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    );
                })}
            </div>
            <Banners categoryId={categoryId} />
        </>
    );
};

export default NavbarMenuLinks;

/* <ul className={styles['navbar-menu-links']}>
    {data[categoryId]?.subCategories.map(({ category, subCategories }) => (
        <li
            className={`${styles['navbar-menu-link-item']} clearfix`}
            key={category}
        >
            <a href='/' className={styles['navbar-menu-link-header']}>
                {category}
            </a>
            <div className={styles['navbar-menu-link-container']}>
                {subCategories.map((item, idx) => (
                    <a
                        key={idx}
                        href='/'
                        className={styles['navbar-menu-link']}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </li>
    ))}
</ul>; */
