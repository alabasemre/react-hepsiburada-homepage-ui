import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import styles from './Footer.module.css';

const socials = [
    { icon: <FaFacebookF />, text: 'Facebook' },
    { icon: <FaTwitter />, text: 'Twitter' },
    { icon: <FaLinkedinIn />, text: 'LinkedIn' },
];

const Socials = () => {
    return (
        <ul className={styles['footer-link-list']}>
            {socials.map(({ icon, text }) => (
                <li key={text}>
                    <a
                        href='/'
                        className={`${styles['footer-link-item']} flex-align-center`}
                    >
                        <span className={styles['social-icon']}>{icon}</span>
                        <span>{text}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Socials;
