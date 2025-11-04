import { useTranslation } from "react-i18next";
import { experiences } from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {

    const {t} = useTranslation();

    return (
        <section id="experience" className="section section-gray">
            <div className="section-header">
                <div className="section-label">{t('experience.professional-experience')}</div>
                <h2 className="section-title">{t('experience.experience')}</h2>
            </div>

            <div className="timeline">
                {[...experiences].reverse().map(exp => (
                    <ExperienceCard key={exp.id} experience={exp} />
                ))}
            </div>
        </section>
    );
}

export default ExperienceSection;