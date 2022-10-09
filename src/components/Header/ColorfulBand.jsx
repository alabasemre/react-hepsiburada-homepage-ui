import styles from './Header.module.css';

const ColorfulBand = () => {
    return (
        <div className={styles['colorful-band']}>
            <div
                className={`${styles['colorful-band-1']} ${styles['colorful-band-item']} `}
            ></div>
            <div
                className={`${styles['colorful-band-2']} ${styles['colorful-band-item']} `}
            ></div>
            <div
                className={`${styles['colorful-band-3']} ${styles['colorful-band-item']} `}
            ></div>
            <div
                className={`${styles['colorful-band-4']} ${styles['colorful-band-item']} `}
            ></div>
            <div
                className={`${styles['colorful-band-5']} ${styles['colorful-band-item']} `}
            ></div>
            <div
                className={`${styles['colorful-band-6']} ${styles['colorful-band-item']} `}
            ></div>
        </div>
    );
};

export default ColorfulBand;
