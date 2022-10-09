import { RiArrowDropDownLine } from 'react-icons/ri';
import styles from './Header.module.css';

const LocationForm = () => {
    return (
        <div className={styles['location-container']}>
            <h4 className={`p-14 secondary-text`}>Konumunuzu Belirleyin</h4>
            <p className={`p-12 third-text`}>
                Adresinizi veya konum bilgilerinizi seçerek özel hizmetleri
                görebilirsiniz.
            </p>
            <div className={styles['dropdown-container']}>
                <div className={`${styles.dropdown}`}>İl Seçin</div>
                <RiArrowDropDownLine
                    className={[
                        `${styles['button-icon']} ${styles['dropdown-arrow']}`,
                    ]}
                />
            </div>
            <div className={styles['dropdown-container']}>
                <div className={`${styles.dropdown}`}>İlçe Seçin</div>
                <RiArrowDropDownLine
                    className={[
                        `${styles['button-icon']} ${styles['dropdown-arrow']}`,
                    ]}
                />
            </div>
            <div className={styles['dropdown-container']}>
                <div className={`${styles.dropdown}`}>Mahalle Seçin</div>
                <RiArrowDropDownLine
                    className={[
                        `${styles['button-icon']} ${styles['dropdown-arrow']}`,
                    ]}
                />
            </div>
            <button className={styles['btn-save']}>Kaydet</button>
        </div>
    );
};

export default LocationForm;
