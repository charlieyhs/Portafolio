import { useTranslation } from "react-i18next";
import { CV_EN, CV_ES } from "../../assets/docs";

const DownloadCV = () => {
    const {i18n, t} = useTranslation();

    const lang = i18n.language;
    const file = lang === "es" ? CV_ES : CV_EN ;
    
    return (
        <a href={file}
            download
            className="btn btn-secondary">
            {t('hero.download-cv')}
        </a>
    );
}

export default DownloadCV;