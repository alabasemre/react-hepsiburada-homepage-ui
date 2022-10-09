import { BsStarFill } from 'react-icons/bs';
import styles from './ProductSlider.module.css';

const fillStars = (rating) => {
    const stars = [0, 0, 0, 0, 0];
    let i = 0;
    while (rating > 0) {
        if (rating > 1) {
            stars[i] = 100;
            rating--;
        } else {
            stars[i] = rating * 100;
            rating = 0;
        }
        i++;
    }

    return stars;
};

const Rating = ({ rating, ratingCount }) => {
    const ratings = fillStars(rating);

    return (
        <>
            <div className={styles['product-rating-container']}>
                {ratings.map((percent, idx) => (
                    <div className={styles['rating-stars']} key={idx}>
                        <div className={styles['rating-star']}>
                            <BsStarFill className={styles['rating']} />
                            <div
                                className={styles['rating-fill']}
                                style={{ width: `${percent}%` }}
                            >
                                <BsStarFill />
                            </div>
                        </div>
                    </div>
                ))}
                <span className={styles['rating-count']}>{ratingCount}</span>
            </div>
        </>
    );
};

export default Rating;
