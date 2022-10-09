import styles from './SuperPrice.module.css';

const SuperPriceItem = ({ title, img, price, oldPrice }) => {
    return (
        <a href='/' className={styles['product-item']}>
            <h5 className={styles['product-name']}>{title}</h5>
            <div className={styles['product-img-container']}>
                <img src={img} alt='' />
            </div>
            <div className={styles['product-price-container']}>
                <span className={styles['product-price']}>
                    {price}
                    <span>TL</span>
                </span>
                {oldPrice && (
                    <span className={styles['product-old-price']}>
                        {oldPrice} <span>TL</span>
                    </span>
                )}
            </div>
            <button className={styles['add-button']}>Sepete Ekle</button>
        </a>
    );
};

export default SuperPriceItem;
