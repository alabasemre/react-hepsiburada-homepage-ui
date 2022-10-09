import styles from './ui.module.css';
import { FiChevronRight } from 'react-icons/fi';

const SectionHeader = ({ title, className, href, hrefText }) => {
    return (
        <h2 className={`${styles['section-header']} ${className}`}>
            {title}
            {href && (
                <a href={href}>
                    {hrefText}
                    <FiChevronRight />
                </a>
            )}
        </h2>
    );
};

export default SectionHeader;
