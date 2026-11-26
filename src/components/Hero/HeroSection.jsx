import { useTranslation } from "react-i18next";
import { avatar } from "../../assets/images";
import '../../css/hero.css'
import TypeWriter from "./TypeWriter";
import { socialMedia } from "../../data/hero";
import { scrollBehavior } from "../../utils/scroll";
import DownloadCV from "./DownloadCV";
import Icon from "../Icon";

const HeroSection = () => {
    const { t } = useTranslation();

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
        }
    };
    const typewriters = Array.from({ length: 4 }, (_, i) => t(`hero.skill${i + 1}`));

    return (
        <section id="hero" className="section hero-section" aria-labelledby="hero-title">
            <div className="hero-content">
                <div className="hero-text-container">
                    <p className="hero-status">
                        <span className="status-dot" aria-hidden="true" />
                        {t('hero.available')}
                    </p>
                    <p className="hero-greeting">{t('hero.greeting')}</p>
                    <h1 id="hero-title" className="hero-title">
                        <strong className="hero-title-highlight">{t('hero.name')}</strong>
                    </h1>
                    <TypeWriter texts={typewriters} />
                    <p className="hero-subtitle">
                        {t('hero.self-description')}
                    </p>

                    <div className="hero-cta">
                        <button
                            className="btn btn-primary"
                            onClick={() => handleScroll('projects')}
                            aria-label={t('hero.aria-label-projects')}
                        >
                            {t('hero.view-projects')}
                            <Icon name="arrow-right" size={15} />
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={() => handleScroll('contact')}
                            aria-label={t('hero.aria-label-contact')}
                        >
                            {t('hero.contact')}
                        </button>

                        <DownloadCV />
                    </div>

                    <div className="hero-footer">
                        <div className="social-links">
                            {
                                socialMedia.map(social => (
                                    <a key={social.id} href={social.link}
                                        className="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={t(social.altIcon)}
                                        aria-label={t(social.altIcon)}>
                                        <Icon name={social.icon} size={18} />
                                    </a>
                                ))
                            }
                        </div>
                        <span className="hero-joke">{t('hero.joke')}</span>
                    </div>
                </div>

                <div className="hero-avatar-container">
                    <div className="avatar-frame card">
                        <img
                            src={avatar}
                            alt={t('hero.description-avatar')}
                            className="avatar"
                            loading="eager"
                            width="408"
                            height="612"
                        />
                    </div>
                    <span className="avatar-chip avatar-chip-top" aria-hidden="true">
                        <span className="code-kw">const</span> status = <span className="code-str">&quot;building_cool_stuff&quot;</span>;
                    </span>
                    <span className="avatar-chip avatar-chip-bottom">
                        {t('hero.years-chip')}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
