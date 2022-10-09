import styles from './ProductSlider.module.css';
import Rating from './Rating';

const ProductItem = ({ img, product, rating, ratingCount, price }) => {
    return (
        <a href='/' className={styles['product-item']}>
            <div className={styles['product-img-container']}>
                <img src={img} alt='' />
            </div>
            <div className={styles['product-info']}>
                <p className={styles['product-text']}>{product}</p>
                <Rating rating={rating} ratingCount={ratingCount} />
                <p className={styles['product-price']}>
                    {price} <span>TL</span>
                </p>
            </div>
        </a>
    );
};

export default ProductItem;
