import { useTranslation } from "react-i18next";
import {learning, skills} from '../../data/skills.js'
import SkillCard from './SkillCard.jsx'
import '../../css/skills.css';

const SkillsSection = () => {
    const {t} = useTranslation();

    return (
        <section id="skills" className="skills-section">
            <div className="section-header">
                <div className="section-label">{t('skills.label')}</div>
                <h2 className="section-title">{t('skills.title')}</h2>
            </div>

            <div className="skills-container">
                {skills.map(s => (
                    <SkillCard key={s.id} skill={s} />
                ))}
            </div>

            <div className="learning-section">
                <h3>🎯 {t('skills.learning')}</h3>
                <div className="learning-tags">
                    {learning.map(tolearn => (
                        <span className="learning-tag" key={tolearn}>{t(tolearn)}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;