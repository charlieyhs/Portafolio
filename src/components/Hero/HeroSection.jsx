import { useTranslation } from "react-i18next";
import { avatar } from "../../assets/images";
import '../../css/hero.css'
import TypeWriter from "./TypeWriter";
import { socialMedia } from "../../data/hero";
import DownloadCV from "./DownloadCV";

const HeroSection = () => {
    const { t } = useTranslation();
    
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const typewriters = Array.from({ length: 4 }, (_, i) => t(`hero.skill${i + 1}`));
    
    return (
        <section id="hero" className="section section-light hero-section" aria-labelledby="hero-title">
            <div className="hero-content">
                <div className="hero-avatar-container">
                    <img 
                        src={avatar} 
                        alt={t('hero.description-avatar')}
                        className="avatar"
                        loading="eager"
                        width="220"
                        height="220"
                    />
                </div>
                <div className="hero-text-container">
                    <h1 id="hero-title" className="hero-title">
                        <strong className="hero-title-highlight">{t('hero.name')}</strong>
                    </h1>
                    <TypeWriter texts={typewriters} />
                    <p className="hero-subtitle">
                        {t('hero.self-description')}
                    </p>
                </div>
                
            </div>
            <div className="social-links">
                {
                    socialMedia.map(social => (
                        <a key={social.id} href={social.link} 
                            className="social-link" target="_blank">
                            <img src={social.icon} 
                                title={t(social.altIcon)}
                                alt={t(social.altIcon)}
                                aria-label={t(social.altIcon)}
                                width={20}
                                height={20}/>
                        </a>
                    ))
                }
            </div>
            <div className="hero-cta">
                <button 
                    className="btn btn-primary"
                    onClick={() => handleScroll('projects')}
                    aria-label={t('hero.aria-label-projects')}
                >
                    {t('hero.view-projects')}
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
        </section>
    );
}

export default HeroSection;