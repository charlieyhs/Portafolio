import { useTranslation } from "react-i18next";
import { highlights } from "../../data/about";
import { avatar } from "../../assets/images";
import '../../css/about.css'

const AboutMe = () => {
    const {t} = useTranslation();

    return (
        <section id="aboutme" className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h2>{t('about.about')}</h2>
                    <p>{t('about.text1')}</p>
                    <p>{t('about.text2')}</p>
                    <div className="about-highlights">
                        {highlights.map(highlight => (
                            <div key={highlight.id} className="about-card">
                                <h4>{t(highlight.title)}</h4>
                                <p>{t(highlight.label)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-image">
                    <img src={avatar} 
                        alt={t('hero.description-avatar')}
                        aria-label={t('hero.description-avatar')}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;