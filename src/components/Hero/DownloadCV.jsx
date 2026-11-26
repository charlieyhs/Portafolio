import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { CV_EN, CV_ES } from "../../assets/docs";
import Icon from "../Icon";

const DownloadCV = ({ className = "btn btn-secondary" }) => {
    const {i18n, t} = useTranslation();

    const lang = i18n.resolvedLanguage;
    const file = lang === "es" ? CV_ES : CV_EN ;

    return (
        <a href={file}
            download
            className={className}>
            <Icon name="download" size={15} />
            {t('hero.download-cv')}
        </a>
    );
}

DownloadCV.propTypes = {
    className: PropTypes.string,
};

export default DownloadCV;
