import rightArrow from '../../static/rightarrow.svg';
import styles from './Slick.module.css';

function RightArrow({ onClick }) {
    return (
        <div
            className={`${styles['slick-arrow-right']} ${styles['slick-arrow']}`}
            onClick={onClick}
            style={{ display: onClick === null ? 'none' : 'flex' }}
        >
            <img src={rightArrow} alt='' />
        </div>
    );
}

export default RightArrow;
