import Section from '../../UI/Section';
import ProductItem from '../ProductSlider/ProductItem';

import { exploreProducts } from '../ProductSlider/productData';

import styles from './Explore.module.css';

const data = [
    {
        id: 1,
        category: 'Çok Amaçlı Temizleyici',
        items: exploreProducts,
    },
    {
        id: 2,
        category: 'Android Telefonlar',
        items: exploreProducts,
    },
    {
        id: 3,
        category: 'Termos',
        items: exploreProducts,
    },
    {
        id: 4,
        category: 'Eğitim',
        items: exploreProducts,
    },
];

const Explore = () => {
    return (
        <Section title='Keşfet'>
            {data.map(({ id, category, items }) => (
                <div className={styles['explore-container']} key={id}>
                    <h2 className={styles['explore-category-title']}>
                        {category}
                    </h2>
                    <h4 className={styles['explore-more']}>
                        Keşfetmeye devam et
                    </h4>
                    <div className={styles['explore-items']}>
                        {items.map((props) => (
                            <ProductItem key={props.id} {...props} />
                        ))}
                    </div>
                </div>
            ))}
        </Section>
    );
};

export default Explore;
