import leftArrow from '../../static/leftarrow.svg';

import styles from './Slick.module.css';

function LeftArrow({ onClick }) {
    return (
        <div
            className={`${styles['slick-arrow-left']} ${styles['slick-arrow']}`}
            onClick={onClick}
            style={{ display: onClick === null ? 'none' : 'flex' }}
        >
            <img src={leftArrow} alt='' />
        </div>
    );
}

export default LeftArrow;
