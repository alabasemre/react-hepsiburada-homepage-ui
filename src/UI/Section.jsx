import SectionHeader from './SectionHeader';
// import styles from './ui.module.css';

const Section = ({ title, className, children, href, hrefText }) => {
    return (
        <section>
            <div className={`container-1200 mt-72 ${className}`}>
                <SectionHeader title={title} href={href} hrefText={hrefText} />
                {children}
            </div>
        </section>
    );
};

export default Section;
