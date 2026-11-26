import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import { GITHUB_URL, LINKEDIN_URL } from "../data/personal";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer>
            <div className="footer-inner">
                <div>
                    <p className="footer-joke">{'// git commit -m "still shipping great stuff"'}</p>
                    <p className="footer-copy">
                        {t('footer.description', { year: new Date().getFullYear() })}
                    </p>
                </div>
                <div className="footer-links">
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm">
                        <Icon name="github" size={14} />
                        {t('contact.github')}
                    </a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm">
                        <Icon name="linkedin" size={14} />
                        {t('contact.linkedin')}
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
