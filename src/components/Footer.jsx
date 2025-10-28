import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer>
            {t('footer.description')}
        </footer>
    );
}
export default Footer;