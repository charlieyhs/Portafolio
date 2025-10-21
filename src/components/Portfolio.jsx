import { useTranslation } from "react-i18next";

const Portfolio = () => {
    const {t} = useTranslation();

    return (
        <h1>{t('about.hello')}</h1>
    );

};

export default Portfolio;