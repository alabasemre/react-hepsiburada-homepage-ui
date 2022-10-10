import styles from './Footer.module.css';

const FooterLinkItem = ({ link }) => {
    return (
        <a href='/' className={styles['footer-link-item']}>
            {link}
        </a>
    );
};

export default FooterLinkItem;
