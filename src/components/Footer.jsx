import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer>
            {t('footer.description', { year: new Date().getFullYear() })}
        </footer>
    );
}
export default Footer;