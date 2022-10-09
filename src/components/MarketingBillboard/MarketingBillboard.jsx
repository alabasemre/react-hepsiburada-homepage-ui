import styles from './Marketing.module.css';

import marketingImg1 from '../../static/marketing/1.jpg';
import marketingImg2 from '../../static/marketing/2.jpg';
import marketingImg3 from '../../static/marketing/3.jpg';
import marketingImg4 from '../../static/marketing/4.jpg';
import marketingImg5 from '../../static/marketing/5.jpg';
import marketingImg6 from '../../static/marketing/6.png';

const data = [
    {
        id: 1,
        text: (
            <p>
                Anneliğin her adımında <b>tüm ihtiyaçların burada</b>
            </p>
        ),
        img: marketingImg1,
    },
    {
        id: 2,
        text: (
            <p>
                <b>Uygun uçak biletiyle</b> dünyayı keşfet
            </p>
        ),
        img: marketingImg2,
    },
    {
        id: 3,
        text: (
            <p>
                <b>3 saatte bir</b> yenilenen fırsatlar
            </p>
        ),
        img: marketingImg3,
    },
    {
        id: 4,
        text: (
            <p>
                Premium'u <b>keşfet</b>
            </p>
        ),
        img: marketingImg4,
    },
    {
        id: 5,
        text: (
            <p>
                <b>Süper fiyatlarla</b> yurt dışından ürünler
            </p>
        ),
        img: marketingImg5,
    },
];

const MarketingBillboard = () => {
    return (
        <section>
            <div className={`container-1200  ${styles['marketing-container']}`}>
                {data.map(({ id, text, img }) => (
                    <div className={styles['banner-container']} key={id}>
                        <div className={styles['banner-text']}>{text}</div>
                        <div>
                            <img
                                className={styles['banner-img']}
                                src={img}
                                alt=''
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles['banner-wide']}>
                <a href='/'>
                    <img src={marketingImg6} alt='' />
                </a>
            </div>
        </section>
    );
};

export default MarketingBillboard;
